import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Maximize2 } from 'lucide-react';
import { milestonesGalleryData } from '../data/portfolioData';
import { ImageLightboxModal } from './InteractiveModal';

export const MilestonesCarousel = () => {
  const [lightboxData, setLightboxData] = useState(null);
  const [isGrabbing, setIsGrabbing] = useState(false);

  // Quadruple items (4 x 8 = 32) ensuring infinite buffer for seamless bi-directional dragging
  const marqueeItems = [
    ...milestonesGalleryData,
    ...milestonesGalleryData,
    ...milestonesGalleryData,
    ...milestonesGalleryData
  ];

  const trackRef = useRef(null);
  const posRef = useRef(0);
  const velocityRef = useRef(0);
  const isDraggingRef = useRef(false);
  const hasDraggedRef = useRef(false);
  const startXRef = useRef(0);
  const lastXRef = useRef(0);
  const isHoveredRef = useRef(false);
  const blockWidthRef = useRef(0);
  const animationFrameRef = useRef(null);
  const lastTimeRef = useRef(null);

  // Calm, luxurious linear speed: 22 pixels per second (moving right to left)
  const AUTO_SPEED = -22;

  // Measure single repetition block width (8 items) from live DOM
  const measureBlockWidth = useCallback(() => {
    if (trackRef.current && trackRef.current.children.length >= 8) {
      const first = trackRef.current.children[0];
      const eighth = trackRef.current.children[8];
      if (first && eighth) {
        const width = eighth.offsetLeft - first.offsetLeft;
        if (width > 0) {
          blockWidthRef.current = width;
          if (posRef.current === 0) {
            posRef.current = -width;
            trackRef.current.style.transform = `translate3d(${-width}px, 0, 0)`;
          }
          return width;
        }
      }
    }
    return 2000;
  }, []);

  useEffect(() => {
    measureBlockWidth();
    const handleResize = () => measureBlockWidth();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [measureBlockWidth]);

  // Main 60 FPS animation loop: handles motion, inertia, infinite wrapping & dynamic concave lens curvature
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const animate = (time) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }
      const dt = Math.min((time - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = time;

      const blockWidth = blockWidthRef.current || measureBlockWidth() || 2000;

      if (!isDraggingRef.current && !lightboxData) {
        // Inertia decay after user releases drag
        if (Math.abs(velocityRef.current) > 0.3) {
          posRef.current += velocityRef.current;
          velocityRef.current *= 0.94;
        } else {
          velocityRef.current = 0;
          // Normal conveyor glide when not hovered
          if (!isHoveredRef.current && !prefersReducedMotion) {
            posRef.current += AUTO_SPEED * dt;
          }
        }

        // Seamless infinite wrap-around in both directions
        while (posRef.current <= -blockWidth * 2) {
          posRef.current += blockWidth;
        }
        while (posRef.current > -blockWidth) {
          posRef.current -= blockWidth;
        }

        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(${posRef.current}px, 0, 0)`;
        }
      }

      // Continuous Tangential BrandLyft Ribbon:
      // Top and bottom edges of cards flow smoothly into each other along a single unbroken concave curve
      if (trackRef.current) {
        const viewportWidth = window.innerWidth;
        const centerX = viewportWidth / 2;
        const cards = trackRef.current.children;
        const stride = blockWidth / 8;
        const cardCenterOffset = 120; // half of 240px card width

        for (let i = 0; i < cards.length; i++) {
          const card = cards[i];
          if (!card) continue;

          // Deterministic screen coordinate
          const cardCenterX = posRef.current + i * stride + cardCenterOffset;
          const u = (cardCenterX - centerX) / (viewportWidth * 0.44);

          // Skip cards far off screen
          if (u < -2.2 || u > 2.2) continue;

          const absU = Math.min(1.25, Math.abs(u));

          // Proportional GPU Scaling (BrandLyft Design):
          // Middle cards are gracefully smaller (~0.82), outer cards are larger (~1.05).
          // Both width and height scale proportionally together so photos NEVER squeeze!
          // GPU-accelerated subpixel precision eliminates all jumping and stair-stepping completely.
          const s = 0.82 + 0.23 * Math.pow(absU, 1.35);
          const yDip = Math.pow(Math.max(0, 1 - absU), 2) * 14;

          card.style.transform = `translate3d(0, ${yDip.toFixed(2)}px, 0) scale(${s.toFixed(4)})`;
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [lightboxData, measureBlockWidth]);

  // Interactive mouse & touch drag start
  const handlePointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return;

    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    const clientX = e.clientX ?? (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    startXRef.current = clientX;
    lastXRef.current = clientX;
    velocityRef.current = 0;
    setIsGrabbing(true);
  };

  // Window listeners for smooth, uninterrupted dragging even outside element bounds
  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!isDraggingRef.current) return;

      const clientX = e.clientX ?? (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
      const deltaX = clientX - lastXRef.current;
      const totalDist = Math.abs(clientX - startXRef.current);

      if (totalDist > 5) {
        hasDraggedRef.current = true;
      }

      lastXRef.current = clientX;
      posRef.current += deltaX;
      velocityRef.current = deltaX; // Capture instantaneous speed for momentum

      const blockWidth = blockWidthRef.current || 2000;
      while (posRef.current <= -blockWidth * 2) {
        posRef.current += blockWidth;
      }
      while (posRef.current > -blockWidth) {
        posRef.current -= blockWidth;
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${posRef.current}px, 0, 0)`;
      }
    };

    const handlePointerUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      setIsGrabbing(false);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerUp);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);
    };
  }, []);

  return (
    <section className="milestones-section" aria-label="In Frames">
      {/* 1. Header: Just "In Frames" on top */}
      <div className="milestones-header">
        <h2 className="milestones-title">
          <span className="masked-header-mask">
            <span className="masked-header-line">
              In <span className="header-badge">Frames</span>
            </span>
          </span>
        </h2>
      </div>

      {/* 2. Full-Bleed Continuous Interactive Drag Conveyor with Dynamic Concave Lens */}
      <div 
        className={`milestones-marquee-wrapper ${isGrabbing ? 'is-grabbing' : ''}`}
        onPointerDown={handlePointerDown}
        onTouchStart={handlePointerDown}
        onMouseEnter={() => { isHoveredRef.current = true; }}
        onMouseLeave={() => { isHoveredRef.current = false; }}
      >
        <div ref={trackRef} className="milestones-marquee-track">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="marquee-photo-card"
              onClick={(e) => {
                if (hasDraggedRef.current) {
                  e.preventDefault();
                  e.stopPropagation();
                  return;
                }
                setLightboxData({
                  title: item.title,
                  subtitle: `${item.badge} • ${item.year}`,
                  imageUrl: item.imageUrl,
                  description: item.description
                });
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setLightboxData({
                    title: item.title,
                    subtitle: `${item.badge} • ${item.year}`,
                    imageUrl: item.imageUrl,
                    description: item.description
                  });
                }
              }}
              aria-label={`${item.title} - ${item.badge} (${item.year})`}
              title="Click to view full photograph or drag horizontally"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="marquee-card-img"
                style={{ objectPosition: item.objectPosition || 'center center' }}
                draggable={false}
                loading={idx < 8 ? 'eager' : 'lazy'}
              />

              <div className="marquee-card-overlay">
                <span className="marquee-card-badge">{item.badge}</span>
                <h3 className="marquee-card-title">{item.title}</h3>
                <div className="marquee-card-expand">
                  <Maximize2 size={11} />
                  <span>Enlarge</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clean Full-Size Lightbox Modal */}
      <ImageLightboxModal
        isOpen={Boolean(lightboxData)}
        onClose={() => setLightboxData(null)}
        title={lightboxData?.title}
        subtitle={lightboxData?.subtitle}
        imageUrl={lightboxData?.imageUrl}
        description={lightboxData?.description}
      />
    </section>
  );
};
