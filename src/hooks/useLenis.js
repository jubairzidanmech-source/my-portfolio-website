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

    // Clean up any stale instances (prevents duplicates during React StrictMode / Fast Refresh)
    if (window.__lenisInstance && typeof window.__lenisInstance.destroy === 'function') {
      window.__lenisInstance.destroy();
      window.__lenisInstance = null;
    }

    // Initialize Lenis instance
    const lenis = new Lenis({
      lerp: 0.10,
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      syncTouch: false,
      autoRaf: true,
      respectReducedMotion: true
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
