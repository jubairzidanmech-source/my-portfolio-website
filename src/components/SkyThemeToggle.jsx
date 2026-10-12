import React from 'react';

/**
 * SkyThemeToggle
 * Smoothly animated day/night toggle switch matching reference designs:
 * - Light Mode: Day sky gradient track, glowing golden sun with highlight dot.
 * - Dark Mode: Deep night sky gradient track, crescent moon with soft aura.
 * Hardware-accelerated sliding spring physics.
 */
export const SkyThemeToggle = ({ theme, toggleTheme, id = 'theme-toggle' }) => {
  const isDark = theme === 'dark';

  return (
    <button
      id={id}
      onClick={toggleTheme}
      className={`sky-toggle ${isDark ? 'sky-toggle-dark' : 'sky-toggle-light'}`}
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <span className="sky-toggle-track">
        <span className="sky-toggle-thumb">
          {/* Sun Graphic (Light Mode) */}
          <span className="sky-sun" aria-hidden="true">
            <span className="sun-core" />
          </span>

          {/* Moon Graphic (Dark Mode) */}
          <span className="sky-moon" aria-hidden="true">
            <svg viewBox="0 0 22 22" width="22" height="22" className="moon-svg">
              {/* Moon shadow disc */}
              <circle cx="11" cy="11" r="10.5" fill="#151e33" />
              {/* Refined Crescent Moon */}
              <path
                d="M 11 1.5 A 9.5 9.5 0 0 1 11 20.5 C 15.2 16.8 15.2 5.2 11 1.5 Z"
                fill="#F8FAFC"
              />
            </svg>
          </span>
        </span>
      </span>
    </button>
  );
};

export default SkyThemeToggle;
