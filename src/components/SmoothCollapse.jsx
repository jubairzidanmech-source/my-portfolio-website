import React from 'react';

/**
 * SmoothCollapse
 * Universal accordion/expandable content container providing fluid, natural height expansion
 * and collapse via modern CSS Grid with staggered upward fade-in and smooth reverse animation.
 *
 * @param {boolean} isOpen - Whether the collapsible content is currently expanded.
 * @param {React.ReactNode} children - The expandable content.
 * @param {string} [className] - Optional extra class names for the outer wrapper.
 * @param {string} [innerClassName] - Optional extra class names for the inner content container.
 * @param {string} [id] - Optional ID attribute.
 * @param {React.CSSProperties} [style] - Optional inline style overrides.
 */
export const SmoothCollapse = ({ 
  isOpen, 
  children, 
  className = '', 
  innerClassName = '',
  id,
  style
}) => {
  return (
    <div
      id={id}
      className={`smooth-collapse-wrapper ${isOpen ? 'is-open' : ''} ${className}`.trim()}
      aria-hidden={!isOpen}
      style={style}
    >
      <div className={`smooth-collapse-inner ${innerClassName}`.trim()}>
        {children}
      </div>
    </div>
  );
};

export default SmoothCollapse;
