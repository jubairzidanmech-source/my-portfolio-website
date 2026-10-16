import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, ArrowUpRight } from 'lucide-react';
import { milestonesGalleryData } from '../data/portfolioData';
import { ImageLightboxModal } from './InteractiveModal';

export const MilestonesCarousel = ({ setActivePage }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [lightboxData, setLightboxData] = useState(null);

  // Swipe / Drag gesture state
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);

  const total = milestonesGalleryData.length;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleSelect = (idx) => {
    setActiveIndex(idx);
  };

  // 5-Second Automatic Sliding with accessibility & pause logic
  useEffect(() => {
    // Respect user's accessibility preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    if (isHovered || isFocused || lightboxData !== null) {
      return;
    }

    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered, isFocused, lightboxData, handleNext]);

  // Keyboard navigation when focused on the carousel
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  // Touch Swipe Handlers for mobile & tablet
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 45; // Minimum px distance to trigger slide change
    if (diff > threshold) {
      handleNext();
    } else if (diff < -threshold) {
      handlePrev();
    }
  };

  const activeItem = milestonesGalleryData[activeIndex] || milestonesGalleryData[0];

  return (
    <section 
      className="milestones-section" 
      aria-label="In Frames: Academic & Professional Milestones"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Centered Section Header - Just "In Frames" on top, nothing else */}
      <div className="milestones-header">
        <h2 className="milestones-title">
          In <span className="header-badge">Frames</span>
        </h2>
      </div>

      {/* 2. Carousel Stage with 5 Overlapping Cards */}
      <div 
        className="milestones-stage-wrapper"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Navigation Arrow: Previous */}
        <button
          className="frame-nav-arrow frame-nav-prev"
          onClick={handlePrev}
          aria-label="Previous photograph"
          title="Previous slide (Left Arrow)"
        >
          <ChevronLeft size={20} />
        </button>

        {/* The Layered Stage */}
        <div className="milestones-stage">
          {milestonesGalleryData.map((item, idx) => {
            // Circular shortest distance: -2, -1, 0, +1, +2
            let diff = (idx - activeIndex) % total;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            const isCenter = diff === 0;
            const isLeft1 = diff === -1;
            const isRight1 = diff === 1;
            const isLeft2 = diff === -2;
            const isRight2 = diff === 2;
            const isHidden = Math.abs(diff) > 2;

            let cardStateClass = 'is-hidden';
            if (isCenter) cardStateClass = 'is-center';
            else if (isLeft1) cardStateClass = 'is-left-1';
            else if (isRight1) cardStateClass = 'is-right-1';
            else if (isLeft2) cardStateClass = 'is-left-2';
            else if (isRight2) cardStateClass = 'is-right-2';
            else if (diff < -2) cardStateClass = 'is-hidden-left';
            else if (diff > 2) cardStateClass = 'is-hidden-right';

            return (
              <div
                key={item.id}
                className={`frame-carousel-card ${cardStateClass}`}
                onClick={() => {
                  if (isCenter) {
                    setLightboxData({
                      title: item.title,
                      subtitle: `${item.badge} • ${item.year}`,
                      imageUrl: item.imageUrl,
                      description: item.description
                    });
                  } else {
                    handleSelect(idx);
                  }
                }}
                role="button"
                tabIndex={isCenter ? 0 : -1}
                aria-label={`${item.title} - ${item.badge} (${item.year})`}
                title={isCenter ? "Click to enlarge full photograph" : `View ${item.title}`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="frame-card-img"
                  style={{ objectPosition: item.objectPosition || 'center center' }}
                  draggable={false}
                  loading={Math.abs(diff) <= 2 ? 'eager' : 'lazy'}
                />

                {/* Subtle dark gradient overlay with typography */}
                <div className="frame-card-overlay">
                  <div className="frame-card-meta">
                    <span className="frame-card-badge">{item.badge}</span>
                    <span className="frame-card-year">{item.year}</span>
                  </div>
                  <h3 className="frame-card-title">{item.title}</h3>
                  {isCenter && (
                    <div className="frame-card-action">
                      <Maximize2 size={12} />
                      <span>Click to enlarge</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrow: Next */}
        <button
          className="frame-nav-arrow frame-nav-next"
          onClick={handleNext}
          aria-label="Next photograph"
          title="Next slide (Right Arrow)"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* 3. Centered Active Description (1-2 Lines) */}
      <div className="milestones-caption-box">
        <p className="milestones-caption-text" key={activeItem.id}>
          {activeItem.description}
        </p>
      </div>

      {/* 4. Minimal Pagination Indicators */}
      <div className="milestones-dots-wrap" role="tablist" aria-label="Milestone Slides">
        {milestonesGalleryData.map((item, idx) => (
          <button
            key={item.id}
            role="tab"
            aria-selected={idx === activeIndex}
            aria-label={`Slide ${idx + 1} of ${total}: ${item.title}`}
            className={`milestones-dot ${idx === activeIndex ? 'is-active' : ''}`}
            onClick={() => handleSelect(idx)}
          />
        ))}
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
