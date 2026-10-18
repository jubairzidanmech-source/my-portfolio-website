import React, { useEffect, useRef, useState } from 'react';

/**
 * CinematicQuote Component
 * 
 * Monumental closing quote section positioned immediately after Contact and before the footer.
 * 
 * Features:
 * - Editorial typographic juxtaposition: modern geometric sans-serif paired with expressive italic serif.
 * - Cinematic masked upward text reveal with 2.5–3.0s duration and gradual deceleration easing.
 * - Staggered line-by-line reveal (280ms stagger), revealing Albert Einstein's attribution last.
 * - Bidirectional IntersectionObserver: animates in when entering, resets on scroll-away for replay.
 * - Respects prefers-reduced-motion.
 * - Exceptionally responsive typography scaling fluidly from mobile to ultra-wide displays.
 */
export const CinematicQuote = () => {
  const quoteRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // Respect user's reduced-motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsRevealed(true);
      return;
    }

    const target = quoteRef.current;
    if (!target) return;

    // Reveal immediately if already in view on mount
    const rect = target.getBoundingClientRect();
    if (rect.top < window.innerHeight + 60 && rect.bottom > -60) {
      setIsRevealed(true);
    }

    // Reveal Observer: triggers early when entering viewport
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: '60px 0px 60px 0px'
      }
    );

    // Exit Observer: resets only when completely out of viewport
    const exitObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setIsRevealed(false);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '120px 0px 120px 0px'
      }
    );

    revealObserver.observe(target);
    exitObserver.observe(target);

    return () => {
      revealObserver.disconnect();
      exitObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={quoteRef}
      className={`cinematic-quote-wrapper ${isRevealed ? 'is-revealed' : ''}`}
      aria-label="Closing Reflection"
    >
      <div className="container cinematic-quote-container">
        <blockquote className="cinematic-quote-block">
          {/* Line 1: Primary opening statement + Imagination */}
          <div className="cinematic-quote-mask cinematic-quote-mask-1">
            <span className="cinematic-quote-line">
              "<span className="cinematic-quote-serif cinematic-quote-accent">Imagination</span> is more important
            </span>
          </div>

          {/* Line 2: Contrasting knowledge culmination */}
          <div className="cinematic-quote-mask cinematic-quote-mask-2">
            <span className="cinematic-quote-line">
              than <span className="cinematic-quote-serif cinematic-quote-accent">knowledge.</span>"
            </span>
          </div>

          {/* Understated Attribution: Albert Einstein (revealed last) */}
          <footer className="cinematic-quote-author-mask">
            <cite className="cinematic-quote-author-line">
              <span className="cinematic-quote-dash">—</span>
              <span className="cinematic-quote-author-name">Albert Einstein</span>
            </cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
};
