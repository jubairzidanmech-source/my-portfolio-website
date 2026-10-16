import React from 'react';
import { Sun, Moon } from 'lucide-react';

/**
 * SkyThemeToggle
 * Dual-segmented pill switch matching the reference design:
 * - Left segment: Minimized Moon icon + "DARK" text
 * - Right segment: Minimized Sun icon + "LIGHT" text
 * - Sliding active pill thumb with smooth physics
 */
export const SkyThemeToggle = ({ theme, toggleTheme, id = 'theme-toggle' }) => {
  const isDark = theme === 'dark';

  return (
    <div
      id={id}
      className={`segmented-theme-switch ${isDark ? 'is-dark' : 'is-light'}`}
      role="radiogroup"
      aria-label="Color theme switcher"
    >
      {/* Sliding Active Pill Background */}
      <span className="theme-switch-slider" aria-hidden="true" />

      {/* Dark Option Button */}
      <button
        type="button"
        role="radio"
        aria-checked={isDark}
        className={`theme-switch-btn ${isDark ? 'is-active' : ''}`}
        onClick={() => {
          if (!isDark) toggleTheme();
        }}
        aria-label="Switch to dark theme"
        title="Dark Theme"
      >
        <Moon size={11} strokeWidth={2.4} className="theme-switch-icon" />
        <span className="theme-switch-text">DARK</span>
      </button>

      {/* Light Option Button */}
      <button
        type="button"
        role="radio"
        aria-checked={!isDark}
        className={`theme-switch-btn ${!isDark ? 'is-active' : ''}`}
        onClick={() => {
          if (isDark) toggleTheme();
        }}
        aria-label="Switch to light theme"
        title="Light Theme"
      >
        <Sun size={11} strokeWidth={2.4} className="theme-switch-icon" />
        <span className="theme-switch-text">LIGHT</span>
      </button>
    </div>
  );
};

export default SkyThemeToggle;
