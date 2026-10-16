import React, { useEffect, useRef } from 'react';

export const AestheticGridBackground = () => {
  const meshRef = useRef(null);
  const pool1Ref = useRef(null);
  const pool2Ref = useRef(null);
  const pool3Ref = useRef(null);
  const pool4Ref = useRef(null);
  const pool5Ref = useRef(null);

  useEffect(() => {
    // On mobile devices and touch screens, avoid heavy requestAnimationFrame loops
    // with multi-layer blur filters which causes GPU pipeline thrashing and flickering
    const isMobileOrTouch = 
      window.innerWidth <= 1024 ||
      (window.matchMedia && (
        window.matchMedia('(pointer: coarse)').matches ||
        window.matchMedia('(hover: none)').matches
      ));

    if (isMobileOrTouch) {
      return;
    }

    let animationFrameId;
    let isScrolling = false;
    let scrollTimeout;
    const startTime = performance.now();

    const onScroll = () => {
      isScrolling = true;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 100);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    const render = (now) => {
      // During active scroll, bypass heavy DOM style mutations to prioritize 60/120fps scrolling
      if (isScrolling) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      // Flowing, majestic organic liquid time scale (~22-28s cycles for continuous, noticeable fluid motion)
      const elapsed = (now - startTime) * 0.001;

      // --- 1. Pool 1 (Top-Left: Electric & Royal Blue Surge) ---
      const aX1 = Math.sin(elapsed * 0.22) * 150 + Math.cos(elapsed * 0.13) * 60;
      const aY1 = Math.cos(elapsed * 0.18) * 130 + Math.sin(elapsed * 0.11) * 50;
      const s1 = 1 + Math.sin(elapsed * 0.19) * 0.08;
      const r1 = Math.sin(elapsed * 0.14) * 12;
      if (pool1Ref.current) {
        pool1Ref.current.style.transform = `translate3d(${aX1}px, ${aY1}px, 0) scale(${s1}) rotate(${r1}deg)`;
      }

      // --- 2. Pool 2 (Top-Right: Bright Cerulean & Sky Blue Wave) ---
      const aX2 = Math.sin(elapsed * 0.20 + 1.6) * 160 + Math.cos(elapsed * 0.12) * 60;
      const aY2 = Math.cos(elapsed * 0.24 + 1.1) * 135 + Math.sin(elapsed * 0.14) * 50;
      const s2 = 1 + Math.cos(elapsed * 0.17) * 0.085;
      const r2 = Math.cos(elapsed * 0.13) * -14;
      if (pool2Ref.current) {
        pool2Ref.current.style.transform = `translate3d(${aX2}px, ${aY2}px, 0) scale(${s2}) rotate(${r2}deg)`;
      }

      // --- 3. Pool 3 (Bottom-Left: Deep Anchor Navy & Cobalt) ---
      const aX3 = Math.sin(elapsed * 0.17 + 2.8) * 145 + Math.cos(elapsed * 0.11) * 60;
      const aY3 = Math.cos(elapsed * 0.21 + 2.2) * 130 + Math.sin(elapsed * 0.13) * 50;
      const s3 = 1 + Math.sin(elapsed * 0.16 + 1.2) * 0.075;
      const r3 = Math.sin(elapsed * 0.11) * 10;
      if (pool3Ref.current) {
        pool3Ref.current.style.transform = `translate3d(${aX3}px, ${aY3}px, 0) scale(${s3}) rotate(${r3}deg)`;
      }

      // --- 4. Pool 4 (Center-Right: Vivid Azure & Cobalt Stream) ---
      const aX4 = Math.sin(elapsed * 0.21 + 3.8) * 140 + Math.cos(elapsed * 0.14) * 55;
      const aY4 = Math.cos(elapsed * 0.18 + 3.4) * 150 + Math.sin(elapsed * 0.13) * 50;
      const s4 = 1 + Math.cos(elapsed * 0.20 + 1.8) * 0.08;
      const r4 = Math.cos(elapsed * 0.12) * -12;
      if (pool4Ref.current) {
        pool4Ref.current.style.transform = `translate3d(${aX4}px, ${aY4}px, 0) scale(${s4}) rotate(${r4}deg)`;
      }

      // --- 5. Pool 5 (Center Core Blossom: Luminous Ice & Cerulean Core) ---
      const aX5 = Math.sin(elapsed * 0.19 + 0.8) * 125 + Math.cos(elapsed * 0.12) * 45;
      const aY5 = Math.cos(elapsed * 0.21 + 0.5) * 115 + Math.sin(elapsed * 0.11) * 40;
      const s5 = 1 + Math.sin(elapsed * 0.23) * 0.09;
      if (pool5Ref.current) {
        pool5Ref.current.style.transform = `translate3d(${aX5}px, ${aY5}px, 0) scale(${s5})`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(scrollTimeout);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="aesthetic-bg-grid" aria-hidden="true">
      {/* Dynamic Background Gradient Mesh with Smooth Autonomous Fluid Drift */}
      <div ref={meshRef} className="dynamic-bg-gradient-mesh">
        <div ref={pool1Ref} className="liquid-light-pool liquid-light-pool-1" />
        <div ref={pool2Ref} className="liquid-light-pool liquid-light-pool-2" />
        <div ref={pool3Ref} className="liquid-light-pool liquid-light-pool-3" />
        <div ref={pool4Ref} className="liquid-light-pool liquid-light-pool-4" />
        <div ref={pool5Ref} className="liquid-light-pool liquid-light-pool-5" />
      </div>

      {/* 1. Baseline Ambient Layer: Extremely soft, continuous faint grid foundation */}
      <div className="grid-layer grid-layer-base" />

      {/* 2. Top-Left Organic Focal Zone: Highlights academic identity & hero left */}
      <div className="grid-layer grid-layer-focal-top-left" />

      {/* 3. Top-Right Organic Focal Zone: Framing portrait & nav */}
      <div className="grid-layer grid-layer-focal-top-right" />

      {/* 4. Center-Right Organic Focal Zone: Enriches content flow */}
      <div className="grid-layer grid-layer-focal-center-right" />

      {/* 5. Bottom Organic Focal Zone: Complements lower content */}
      <div className="grid-layer grid-layer-focal-bottom" />

      {/* 6. Technical side accents (Editorial Swiss aesthetic) */}
      <div className="grid-technical-stripe-right" />
    </div>
  );
};
