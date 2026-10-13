import React from 'react';

export const Footer = ({ activePage, setActivePage }) => {
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'academics', label: 'Academics' },
    { id: 'research', label: 'Research' },
    { id: 'awards', label: 'Awards' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer className="site-footer">
      <div className="container footer-compact-container">
        {/* Understated Navigation Links Bar */}
        <nav className="footer-compact-nav" aria-label="Footer Navigation">
          {navLinks.map((item, idx) => {
            const isActive = activePage === item.id;
            return (
              <React.Fragment key={item.id}>
                <button
                  onClick={() => setActivePage(item.id)}
                  className={`footer-compact-link ${isActive ? 'active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </button>
                {idx < navLinks.length - 1 && <span className="footer-compact-dot">·</span>}
              </React.Fragment>
            );
          })}
        </nav>

        {/* Understated Copyright & Affiliation Text */}
        <div className="footer-compact-meta">
          <span>© {new Date().getFullYear()} Md. Jubair Uddin Zidan · Department of Mechanical Engineering, CUET · All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};
