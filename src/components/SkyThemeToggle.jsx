import React from 'react';

/**
 * SkyThemeToggle
 * Capsule pill light/dark toggle:
 * - Light Mode: Clean white pill, vibrant royal blue circle on the left with white sun icon,
 *   soft muted slate crescent moon on the right.
 * - Dark Mode: Off-white pill (high-visibility against dark background), soft muted sun on the left,
 *   deep midnight navy circle on the right with glowing white crescent moon.
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
      {/* Left Slot: Sun */}
      <div className="sky-toggle-left">
        {/* Blue Circular Sun Badge (Light Mode Active) */}
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

        {/* Muted Sun Icon (Dark Mode Inactive) */}
        <div className="sky-sun-muted" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            width="13"
            height="13"
            fill="none"
            stroke="#94A3B8"
            strokeWidth="2.2"
            strokeLinecap="round"
          >
            <circle cx="12" cy="12" r="4" fill="none" />
            <line x1="12" y1="2" x2="12" y2="4" />
            <line x1="12" y1="20" x2="12" y2="22" />
            <line x1="2" y1="12" x2="4" y2="12" />
            <line x1="20" y1="12" x2="22" y2="12" />
            <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
            <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
            <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
            <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
          </svg>
        </div>
      </div>

      {/* Right Slot: Moon */}
      <div className="sky-toggle-right">
        {/* Muted Moon (Light Mode Inactive) */}
        <div className="sky-moon-muted" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            width="13"
            height="13"
            fill="#94A3B8"
            stroke="#94A3B8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </div>

        {/* Dark Midnight Moon Badge (Dark Mode Active) */}
        <div className="sky-moon-badge" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            width="13"
            height="13"
            fill="#FFFFFF"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="sky-moon-icon"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </div>
      </div>
    </button>
  );
};

export default SkyThemeToggle;
