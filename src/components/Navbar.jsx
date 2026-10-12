import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { SkyThemeToggle } from './SkyThemeToggle';

export const Navbar = ({ activePage, setActivePage, theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'academics', label: 'Academics' },
    { id: 'research', label: 'Research' },
    { id: 'awards', label: 'Awards' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`site-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Brand Identity: Official Logo a.png (Dark Mode) / b.png (Light Mode) */}
          <button 
            className="brand-link" 
            onClick={() => handleNavClick('home')}
            aria-label="Jubair Zidan - Home"
          >
            <img 
              key={theme}
              src={theme === 'dark' ? '/a.png' : '/b.png'} 
              alt="Jubair Zidan" 
              className="brand-logo-img" 
            />
          </button>

          {/* Plain Text Desktop Navigation */}
          <nav className="nav-links-desktop" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`nav-plain-link ${isActive ? 'active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action & Mobile Toggle */}
          <div className="nav-actions">
            <SkyThemeToggle
              theme={theme}
              toggleTheme={toggleTheme}
              id="desktop-theme-toggle"
            />

            <button
              onClick={() => handleNavClick('contact')}
              className="cv-button"
              aria-label="Get in touch"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={15} />
            </button>

            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div style={{ paddingBottom: '12px' }}>
          <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', fontWeight: 500 }}>
            Navigation
          </p>
        </div>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`mobile-nav-link ${activePage === item.id ? 'active' : ''}`}
          >
            <span>{item.label}</span>
            <ArrowUpRight size={16} style={{ opacity: 0.6 }} />
          </button>
        ))}
        <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div className="mobile-theme-row">
            <span className="mobile-theme-label">
              {theme === 'dark' ? 'Dark Theme' : 'Light Theme'}
            </span>
            <SkyThemeToggle
              theme={theme}
              toggleTheme={toggleTheme}
              id="mobile-theme-toggle"
            />
          </div>

          <button
            onClick={() => handleNavClick('contact')}
            className="btn btn-primary"
            style={{ width: '100%', padding: '14px' }}
          >
            Contact & Academic Inquiries
          </button>
        </div>
      </div>
    </>
  );
};
