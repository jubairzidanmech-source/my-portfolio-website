import React, { useEffect, useRef } from 'react';

export const CustomCursor = () => {
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const isHoveredRef = useRef(false);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    // Only mount on desktop with fine mouse pointer
    const isTouch = 
      window.innerWidth <= 1024 ||
      (window.matchMedia && (
        window.matchMedia('(pointer: coarse)').matches ||
        window.matchMedia('(hover: none)').matches
      ));

    if (isTouch) {
      return;
    }

    const mouse = {
      x: -100,
      y: -100,
      targetX: -100,
      targetY: -100
    };

    let animationFrameId;

    const isElementInNavBar = (el) => {
      if (!el) return false;
      return Boolean(
        el.closest('.site-navbar') ||
        el.closest('.mobile-nav-drawer') ||
        el.closest('.footer-nav-bar') ||
        el.closest('.footer-nav-links') ||
        el.closest('.site-footer') ||
        el.closest('.footer-bottom-bar')
      );
    };

    const hideCursor = () => {
      isVisibleRef.current = false;
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (glowRef.current) glowRef.current.style.opacity = '0';
    };

    const showCursor = () => {
      isVisibleRef.current = true;
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (glowRef.current) glowRef.current.style.opacity = '1';
    };

    const onPointerMove = (e) => {
      // Don't track touch pointers (pointerType === 'touch')
      if (e.pointerType === 'touch') {
        hideCursor();
        return;
      }

      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;

      const target = e.target;
      const inNavBar = isElementInNavBar(target);

      if (inNavBar) {
        hideCursor();
        return;
      }

      if (!isVisibleRef.current) {
        showCursor();
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }

      // Check if hovering over any interactive target
      const isInteractive = target && (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select') ||
        target.closest('.card-interactive') ||
        target.closest('.conf-paper-card') ||
        target.closest('.conf-pres-card') ||
        target.closest('.stat-card-image4') ||
        target.closest('.leadership-card') ||
        target.closest('[role="button"]') ||
        target.closest('.thesis-action-cta-full') ||
        target.closest('.research-slider-arrow-btn') ||
        target.closest('.research-slider-dot') ||
        target.closest('.theme-toggle-btn') ||
        target.closest('.tool-chip')
      );

      if (isInteractive && !isHoveredRef.current) {
        isHoveredRef.current = true;
        if (glowRef.current) glowRef.current.classList.add('is-hovered');
        if (dotRef.current) dotRef.current.classList.add('is-hovered');
      } else if (!isInteractive && isHoveredRef.current) {
        isHoveredRef.current = false;
        if (glowRef.current) glowRef.current.classList.remove('is-hovered');
        if (dotRef.current) dotRef.current.classList.remove('is-hovered');
      }
    };

    const onMouseLeave = () => {
      hideCursor();
    };

    const onMouseEnter = (e) => {
      if (!isElementInNavBar(e.target)) {
        showCursor();
      }
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    const navBars = document.querySelectorAll('.site-navbar, .site-footer, .footer-nav-bar');
    navBars.forEach((el) => {
      el.addEventListener('pointerenter', hideCursor);
    });

    const render = () => {
      mouse.x += (mouse.targetX - mouse.x) * 0.16;
      mouse.y += (mouse.targetY - mouse.y) * 0.16;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.targetX}px, ${mouse.targetY}px, 0)`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      navBars.forEach((el) => {
        el.removeEventListener('pointerenter', hideCursor);
      });
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div 
        ref={glowRef} 
        className="academic-cursor-glow" 
        aria-hidden="true" 
      />
      <div 
        ref={dotRef} 
        className="academic-cursor-dot" 
        aria-hidden="true" 
      />
    </>
  );
};
