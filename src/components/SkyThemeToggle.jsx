import React from 'react';

/**
 * SkyThemeToggle
 * Capsule pill light/dark toggle matching the user's reference design:
 * - Light Mode: Clean white pill, vibrant royal blue circle on the left with white sun icon,
 *   soft muted grey crescent moon on the right.
 * - Dark Mode: Deep midnight navy pill, twinkling white stars & dots constellation on the left,
 *   solid brilliant white crescent moon on the right.
 */
export const SkyThemeToggle = ({ theme, toggleTheme, id = 'theme-toggle' }) => {
  const isDark = theme === 'dark';

  return (
    <button
      id={id}
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggleTheme}
      className={`sky-theme-toggle ${isDark ? 'is-dark' : 'is-light'}`}
    >
      {/* Left Slot: Sun badge (light) or Night Sky Stars (dark) */}
      <div className="sky-toggle-left">
        {/* Blue Circular Sun Badge (Light Mode) */}
        <div className="sky-sun-badge" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            width="13"
            height="13"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2.4"
            strokeLinecap="round"
            className="sky-sun-icon"
          >
            <circle cx="12" cy="12" r="4.2" fill="#FFFFFF" stroke="none" />
            <line x1="12" y1="2" x2="12" y2="4.5" />
            <line x1="12" y1="19.5" x2="12" y2="22" />
            <line x1="2" y1="12" x2="4.5" y2="12" />
            <line x1="19.5" y1="12" x2="22" y2="12" />
            <line x1="4.93" y1="4.93" x2="6.7" y2="6.7" />
            <line x1="17.3" y1="17.3" x2="19.07" y2="19.07" />
            <line x1="4.93" y1="19.07" x2="6.7" y2="17.3" />
            <line x1="17.3" y1="6.7" x2="19.07" y2="4.93" />
          </svg>
        </div>

        {/* Night Sky Stars & Dots Cluster (Dark Mode) */}
        <div className="sky-stars-cluster" aria-hidden="true">
          {/* Main sparkle star top-left */}
          <svg viewBox="0 0 10 10" className="sky-star sky-star-1" width="7" height="7">
            <path d="M5 0 Q5 5 10 5 Q5 5 5 10 Q5 5 0 5 Q5 5 5 0 Z" fill="#FFFFFF" />
          </svg>
          {/* Secondary sparkle star bottom-center */}
          <svg viewBox="0 0 10 10" className="sky-star sky-star-2" width="5.5" height="5.5">
            <path d="M5 0 Q5 5 10 5 Q5 5 5 10 Q5 5 0 5 Q5 5 5 0 Z" fill="#FFFFFF" />
          </svg>
          {/* Distant star dot far-left */}
          <span className="sky-dot sky-dot-1" />
          {/* Distant star dot top-right */}
          <span className="sky-dot sky-dot-2" />
        </div>
      </div>

      {/* Right Slot: Crescent Moon (Soft grey in light mode, brilliant white in dark mode) */}
      <div className="sky-toggle-right" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          width="15"
          height="15"
          className="sky-moon-icon"
        >
          <path
            d="M13.5 3.5 A8.5 8.5 0 0 1 13.5 20.5 A7 7 0 0 0 13.5 3.5 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </button>
  );
};

export default SkyThemeToggle;
