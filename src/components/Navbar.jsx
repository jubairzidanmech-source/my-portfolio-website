import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, GraduationCap, Compass, Award, Briefcase, Wrench, Mail, Home } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { SkyThemeToggle } from './SkyThemeToggle';

export const Navbar = ({ activePage, setActivePage, theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and prevent touch-through when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalTouchAction = document.body.style.touchAction;
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.touchAction = originalTouchAction;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'academics', label: 'Academics', icon: GraduationCap },
    { id: 'research', label: 'Research', icon: Compass },
    { id: 'awards', label: 'Awards', icon: Award },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Wrench },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Dimmed backdrop overlay that closes menu on outside tap */}
      <div 
        className={`mobile-nav-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Premium Floating Mobile Card Sheet */}
      <div 
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div className="mobile-drawer-header">
          <span className="mobile-drawer-label">Menu & Sections</span>
          <span className="mobile-drawer-sub">CUET B.Sc. & M.Sc.</span>
        </div>

        <div className="mobile-drawer-nav-list">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            const ItemIcon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                <div className="mobile-nav-link-left">
                  <span className="mobile-nav-icon-badge">
                    <ItemIcon size={16} />
                  </span>
                  <span className="mobile-nav-label-text">{item.label}</span>
                </div>
                {isActive ? (
                  <span className="mobile-active-dot" aria-label="Current section" />
                ) : (
                  <ArrowUpRight size={15} className="mobile-arrow-icon" />
                )}
              </button>
            );
          })}
        </div>

        <div className="mobile-drawer-footer">
          <div className="mobile-theme-row">
            <span className="mobile-theme-label">
              Appearance: <strong>{theme === 'dark' ? 'Dark' : 'Light'}</strong>
            </span>
            <SkyThemeToggle
              theme={theme}
              toggleTheme={toggleTheme}
              id="mobile-theme-toggle"
            />
          </div>

          <button
            onClick={() => handleNavClick('contact')}
            className="mobile-drawer-cta-btn"
          >
            <span>Get in Touch / Academic Inquiries</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
};
