import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

/**
 * Custom hook to initialize and manage Lenis smooth scrolling across the portfolio.
 * 
 * Configured according to precise specs:
 * - lerp: 0.08 (responsive, elegant easing without floating delay)
 * - smoothWheel: true (smooth momentum on desktop wheel/trackpad)
 * - wheelMultiplier: 1.0 (natural 1:1 wheel response)
 * - syncTouch: false (preserves 100% native hardware touch scrolling on mobile)
 * - touchMultiplier: 1.0
 * - respectReducedMotion: true (complies with accessibility guidelines)
 * - autoRaf: true (Lenis handles internal animation loop with zero duplicate frames)
 */
export function useLenis() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Accessibility check: respect prefers-reduced-motion
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotionQuery.matches) {
      return;
    }

    // Clean up any stale instances (prevents duplicates during React Fast Refresh)
    if (window.__lenisInstance && typeof window.__lenisInstance.destroy === 'function') {
      window.__lenisInstance.destroy();
      window.__lenisInstance = null;
    }

    /**
     * Precision Trackpad / Magic Mouse Detector:
     * - macOS trackpads and precision touchpads already deliver hardware-accelerated 
     *   120Hz ProMotion kinetic scrolling natively at the compositor/GPU level.
     * - Hijacking continuous trackpad gestures into a main-thread JavaScript lerp loop 
     *   creates double-inertia latency (floating delay) and noticeable frame-pacing jitter 
     *   that feels like 24-30 low FPS.
     * - By returning false from virtualScroll on trackpad/pixel events, the browser's 
     *   native compositor handles trackpad gestures with zero latency and 120 FPS buttery 
     *   smoothness ("smooth like before"), while stepped external mouse wheels receive 
     *   silky Lenis momentum interpolation.
     */
    const isPrecisionTrackpad = (event) => {
      if (!event) return false;
      // Line (1) or page (2) deltaMode indicates a physical mouse wheel
      if (event.deltaMode !== 0) return false;
      // Precision trackpads emit fractional deltas or horizontal component deltas
      if (!Number.isInteger(event.deltaY) || !Number.isInteger(event.deltaX) || event.deltaX !== 0) {
        return true;
      }
      // Small integer deltas (< 40) during continuous gestures are also trackpad packets
      if (Math.abs(event.deltaY) < 40) {
        return true;
      }
      return false;
    };

    // Initialize Lenis instance
    const lenis = new Lenis({
      lerp: 0.12, // Responsive momentum easing without sluggish lag or floating delay
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      syncTouch: false, // 100% native hardware touch scrolling on mobile devices
      autoRaf: true,
      respectReducedMotion: true,
      anchors: true,
      autoToggle: true,
      virtualScroll: ({ event }) => {
        // Delegate precision trackpad & Magic Mouse events to native 120Hz compositor
        if (event && event.type === 'wheel' && isPrecisionTrackpad(event)) {
          return false;
        }
        return true;
      }
    });

    lenisRef.current = lenis;
    window.__lenisInstance = lenis;
    window.lenis = lenis;

    // Observe modal scroll locking (e.g., document.body.style.overflow = 'hidden')
    // to pause Lenis when a modal/drawer is open, and resume smoothly upon closing
    const handleOverflowMutation = () => {
      const isLocked = document.body.style.overflow === 'hidden' || 
                       document.documentElement.style.overflow === 'hidden';
      if (isLocked) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    const observer = new MutationObserver(handleOverflowMutation);
    observer.observe(document.body, { attributes: true, attributeFilter: ['style', 'class'] });

    // Handle dynamic accessibility changes (user enables reduced motion in OS settings)
    const handleReducedMotionChange = (e) => {
      if (e.matches) {
        lenis.destroy();
        window.lenis = null;
        window.__lenisInstance = null;
      }
    };
    reducedMotionQuery.addEventListener('change', handleReducedMotionChange);

    return () => {
      observer.disconnect();
      reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
      lenis.destroy();
      if (window.lenis === lenis) {
        window.lenis = null;
      }
      if (window.__lenisInstance === lenis) {
        window.__lenisInstance = null;
      }
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
}
