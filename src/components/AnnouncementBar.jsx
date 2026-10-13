import React from 'react';
import { upcomingAnnouncements } from '../data/portfolioData';

export const AnnouncementBar = ({ isVisible = true }) => {
  if (!isVisible) return null;

  // We duplicate the list to ensure seamless 100% infinite marquee loop
  const duplicatedItems = [...upcomingAnnouncements, ...upcomingAnnouncements];

  return (
    <div 
      className="announcement-bar-container"
      role="region" 
      aria-label="Upcoming Academic Events and Announcements"
    >
      <div className="announcement-bar-content">
        {/* Left fixed badge */}
        <div className="announcement-badge">
          <span className="announcement-pulse-dot" aria-hidden="true" />
          <span className="announcement-badge-text">UPCOMING</span>
        </div>

        {/* Center Marquee with fade masks */}
        <div className="announcement-marquee-wrapper">
          <div className="announcement-fade-mask left" aria-hidden="true" />
          <div className="announcement-fade-mask right" aria-hidden="true" />

          {/* Marquee Track moving from LEFT to RIGHT */}
          <div className="announcement-marquee-track">
            {duplicatedItems.map((item, idx) => (
              <div 
                key={`${item.id}-${idx}`} 
                className={`announcement-item ${item.highlight ? 'highlight' : ''}`}
              >
                <span className="announcement-emoji" role="img" aria-hidden="true">
                  {item.emoji}
                </span>
                <span className="announcement-tag">
                  {item.tag}
                </span>
                <span className="announcement-text">
                  {item.text}
                </span>
                <span className="announcement-divider" aria-hidden="true">
                  ✦
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
