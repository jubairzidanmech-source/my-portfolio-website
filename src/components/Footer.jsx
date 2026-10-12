import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Mail, MapPin, TrendingUp } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export const Footer = ({ activePage, setActivePage }) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

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
      <div className="container footer-content">
        {/* Top Callout Banner on Rich Blue Bottom Section */}
        <div className="footer-hero-banner">
          <div className="footer-hero-left">
            <div className="footer-icon-badge">
              <TrendingUp size={22} />
            </div>
            <div>
              <h3 className="footer-headline">
                Advancing Computational Fluid Mechanics, Materials Modelling & AI-Driven Engineering.
              </h3>
              <p className="footer-subtext">
                Available for Ph.D. positions, graduate fellowships, and collaborative engineering investigations.
              </p>
            </div>
          </div>

          <div className="footer-hero-actions">
            <a
              href={`mailto:${personalData.email}`}
              className="footer-btn-primary"
            >
              <span>Initiate Research Inquiry</span>
              <ArrowUpRight size={15} />
            </a>
            <button
              onClick={copyEmail}
              className="footer-btn-secondary"
              title="Click to copy email address"
            >
              {copied ? <Check size={14} color="#34D399" /> : <Copy size={14} />}
              <span>{copied ? 'Email Copied!' : personalData.email}</span>
            </button>
          </div>
        </div>

        {/* Navigation Links Bar */}
        <div className="footer-nav-bar">
          <div className="footer-nav-links">
            {navLinks.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`footer-nav-link ${isActive ? 'active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar: Location, Affiliation, Copyright */}
        <div className="footer-bottom-bar">
          <div className="footer-meta-item">
            <MapPin size={14} className="footer-meta-icon" />
            <span>{personalData.institution} • Dhaka, Bangladesh</span>
          </div>
          <div className="footer-copyright">
            <span>© {new Date().getFullYear()} Md. Jubair Uddin Zidan. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
