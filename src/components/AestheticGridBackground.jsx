import React, { useEffect, useRef } from 'react';

export const AestheticGridBackground = () => {
  const meshRef = useRef(null);
  const pool1Ref = useRef(null);
  const pool2Ref = useRef(null);
  const pool3Ref = useRef(null);
  const pool4Ref = useRef(null);
  const pool5Ref = useRef(null);
  const cursorSpotlightRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    const startTime = performance.now();

    // Mouse coordinates with fluid liquid interpolation
    const mouse = {
      targetX: window.innerWidth * 0.5,
      targetY: window.innerHeight * 0.35,
      currentX: window.innerWidth * 0.5,
      currentY: window.innerHeight * 0.35,
      prevX: window.innerWidth * 0.5,
      prevY: window.innerHeight * 0.35,
      speed: 0
    };

    const handlePointerMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.targetX = window.innerWidth * 0.5;
      mouse.targetY = window.innerHeight * 0.35;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    const render = (now) => {
      // Flowing, majestic organic liquid time scale (~22-28s cycles for continuous, noticeable fluid motion)
      const elapsed = (now - startTime) * 0.001;

      // Silky fluid lerp tracking
      const lerp = 0.055;
      mouse.currentX += (mouse.targetX - mouse.currentX) * lerp;
      mouse.currentY += (mouse.targetY - mouse.currentY) * lerp;

      // Cursor movement speed for fluid wake reaction
      const dx = mouse.currentX - mouse.prevX;
      const dy = mouse.currentY - mouse.prevY;
      mouse.speed = Math.min(Math.hypot(dx, dy), 40);
      mouse.prevX = mouse.currentX;
      mouse.prevY = mouse.currentY;

      // Normalized cursor coordinates (-1 to 1) from screen center
      const w = window.innerWidth || 1920;
      const h = window.innerHeight || 1080;
      const normX = (mouse.currentX - w * 0.5) / (w * 0.5);
      const normY = (mouse.currentY - h * 0.5) / (h * 0.5);

      // --- 1. Pool 1 (Top-Left: Electric & Royal Blue Surge) ---
      // Autonomous slow wave:
      const aX1 = Math.sin(elapsed * 0.22) * 150 + Math.cos(elapsed * 0.13) * 60;
      const aY1 = Math.cos(elapsed * 0.18) * 130 + Math.sin(elapsed * 0.11) * 50;
      const s1 = 1 + Math.sin(elapsed * 0.19) * 0.08 + (mouse.speed * 0.004);
      const r1 = Math.sin(elapsed * 0.14) * 12;
      // Clear, prominent cursor interaction:
      const cX1 = normX * 170;
      const cY1 = normY * 140;
      if (pool1Ref.current) {
        pool1Ref.current.style.transform = `translate3d(${aX1 + cX1}px, ${aY1 + cY1}px, 0) scale(${s1}) rotate(${r1}deg)`;
      }

      // --- 2. Pool 2 (Top-Right: Bright Cerulean & Sky Blue Wave) ---
      const aX2 = Math.sin(elapsed * 0.20 + 1.6) * 160 + Math.cos(elapsed * 0.12) * 60;
      const aY2 = Math.cos(elapsed * 0.24 + 1.1) * 135 + Math.sin(elapsed * 0.14) * 50;
      const s2 = 1 + Math.cos(elapsed * 0.17) * 0.085 + (mouse.speed * 0.0045);
      const r2 = Math.cos(elapsed * 0.13) * -14;
      const cX2 = normX * 190;
      const cY2 = normY * 155;
      if (pool2Ref.current) {
        pool2Ref.current.style.transform = `translate3d(${aX2 + cX2}px, ${aY2 + cY2}px, 0) scale(${s2}) rotate(${r2}deg)`;
      }

      // --- 3. Pool 3 (Bottom-Left: Deep Anchor Navy & Cobalt) ---
      const aX3 = Math.sin(elapsed * 0.17 + 2.8) * 145 + Math.cos(elapsed * 0.11) * 60;
      const aY3 = Math.cos(elapsed * 0.21 + 2.2) * 130 + Math.sin(elapsed * 0.13) * 50;
      const s3 = 1 + Math.sin(elapsed * 0.16 + 1.2) * 0.075;
      const r3 = Math.sin(elapsed * 0.11) * 10;
      const cX3 = normX * 155;
      const cY3 = normY * 130;
      if (pool3Ref.current) {
        pool3Ref.current.style.transform = `translate3d(${aX3 + cX3}px, ${aY3 + cY3}px, 0) scale(${s3}) rotate(${r3}deg)`;
      }

      // --- 4. Pool 4 (Center-Right: Vivid Azure & Cobalt Stream) ---
      const aX4 = Math.sin(elapsed * 0.21 + 3.8) * 140 + Math.cos(elapsed * 0.14) * 55;
      const aY4 = Math.cos(elapsed * 0.18 + 3.4) * 150 + Math.sin(elapsed * 0.13) * 50;
      const s4 = 1 + Math.cos(elapsed * 0.20 + 1.8) * 0.08 + (mouse.speed * 0.004);
      const r4 = Math.cos(elapsed * 0.12) * -12;
      const cX4 = normX * 175;
      const cY4 = normY * 145;
      if (pool4Ref.current) {
        pool4Ref.current.style.transform = `translate3d(${aX4 + cX4}px, ${aY4 + cY4}px, 0) scale(${s4}) rotate(${r4}deg)`;
      }

      // --- 5. Pool 5 (Center Core Blossom: Luminous Ice & Cerulean Core) ---
      const aX5 = Math.sin(elapsed * 0.19 + 0.8) * 125 + Math.cos(elapsed * 0.12) * 45;
      const aY5 = Math.cos(elapsed * 0.21 + 0.5) * 115 + Math.sin(elapsed * 0.11) * 40;
      const s5 = 1 + Math.sin(elapsed * 0.23) * 0.09 + (mouse.speed * 0.005);
      const cX5 = normX * 195;
      const cY5 = normY * 165;
      if (pool5Ref.current) {
        pool5Ref.current.style.transform = `translate3d(${aX5 + cX5}px, ${aY5 + cY5}px, 0) scale(${s5})`;
      }

      // --- 6. Smooth Fluid Cursor Gradient Spotlight ---
      if (cursorSpotlightRef.current) {
        const spotScale = 1 + (mouse.speed * 0.015);
        cursorSpotlightRef.current.style.transform = `translate3d(${mouse.currentX - 475}px, ${mouse.currentY - 475}px, 0) scale(${spotScale})`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="aesthetic-bg-grid" aria-hidden="true">
      {/* Dynamic Background Gradient Mesh with Interactive Cursor Follower */}
      <div ref={meshRef} className="dynamic-bg-gradient-mesh">
        <div ref={pool1Ref} className="liquid-light-pool liquid-light-pool-1" />
        <div ref={pool2Ref} className="liquid-light-pool liquid-light-pool-2" />
        <div ref={pool3Ref} className="liquid-light-pool liquid-light-pool-3" />
        <div ref={pool4Ref} className="liquid-light-pool liquid-light-pool-4" />
        <div ref={pool5Ref} className="liquid-light-pool liquid-light-pool-5" />
        <div ref={cursorSpotlightRef} className="liquid-light-cursor-aura" />
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
      
      <div className="grid-technical-tag tag-top-left">
        <span>CUET // MECHANICAL ENG</span>
      </div>
      <div className="grid-technical-tag tag-mid-left">
        <span>CFD // NUMERICAL SIMULATION</span>
      </div>
      <div className="grid-technical-tag tag-bottom-left">
        <span>RESEARCH // ADVANCED MATERIALS</span>
      </div>
    </div>
  );
};
