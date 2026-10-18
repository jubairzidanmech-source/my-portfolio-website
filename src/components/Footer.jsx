import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { personalData } from '../data/portfolioData';

/**
 * Footer Component — Premium Editorial Direction
 * 
 * Inspired by reference design composition:
 * - Generously rounded top silhouette with deep navy editorial finish.
 * - Balanced three-column composition:
 *     - Left: Contact information, direct emails, and scholarly/social profiles with external arrow indicators.
 *     - Center: Prominent brand logo (/a.png), personal name, and subtle academic identity.
 *     - Right: Minimal, clean dual-column website section navigation.
 * - Understated CFD & aerodynamic engineering streamline background patterns.
 * - Discreet bottom row with copyright, affiliation, and smooth back-to-top control.
 * - Respects prefers-reduced-motion and responds smoothly across light & dark themes.
 */
export const Footer = ({ activePage, setActivePage }) => {
  const footerRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // Respect user's reduced-motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsRevealed(true);
      return;
    }

    const target = footerRef.current;
    if (!target) return;

    // Check if initially in view
    const rect = target.getBoundingClientRect();
    if (rect.top < window.innerHeight + 80) {
      setIsRevealed(true);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
          }
        });
      },
      { threshold: 0.08, rootMargin: '40px 0px 40px 0px' }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    if (setActivePage) {
      setActivePage('home');
    } else if (window.lenis) {
      window.lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navColumn1 = [
    { id: 'home', label: 'Home' },
    { id: 'academics', label: 'Academics' },
    { id: 'research', label: 'Research' },
    { id: 'awards', label: 'Awards' },
  ];

  const navColumn2 = [
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const socialLinks = [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/md-jubair-uddin-zidan/' },
    { label: 'GitHub', url: 'https://github.com/jubairzidanmech-source' },
    { label: 'Google Scholar', url: 'https://scholar.google.com/citations?view_op=search_authors&mauthors=Md.+Jubair+Uddin+Zidan' },
    { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Md-Jubair-Zidan-2' },
  ];

  return (
    <footer 
      ref={footerRef} 
      className={`site-footer ${isRevealed ? 'is-revealed' : ''}`}
      role="contentinfo"
      aria-label="Site Footer"
    >
      <div className="footer-editorial-card">
        {/* Subtle Engineering Streamlines / CFD Geometric Linework */}
        <div className="footer-linework-backdrop" aria-hidden="true">
          <svg 
            className="footer-linework-svg" 
            viewBox="0 0 1440 480" 
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="footerCfdGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.02" />
                <stop offset="35%" stopColor="#38BDF8" stopOpacity="0.07" />
                <stop offset="70%" stopColor="#818CF8" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.02" />
              </linearGradient>
              <linearGradient id="footerCfdGradSubtle" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.015" />
                <stop offset="50%" stopColor="#93C5FD" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.015" />
              </linearGradient>
            </defs>

            {/* Aerodynamic & Fluid Flow Streamlines */}
            <path d="M-40,90 C220,40 510,160 820,110 C1100,70 1320,140 1480,95" stroke="url(#footerCfdGrad)" strokeWidth="1.2" fill="none" />
            <path d="M-40,160 C250,110 530,220 860,170 C1130,130 1340,200 1480,160" stroke="url(#footerCfdGradSubtle)" strokeWidth="1" fill="none" />
            <path d="M-40,240 C280,190 560,280 900,240 C1160,210 1360,270 1480,240" stroke="url(#footerCfdGrad)" strokeWidth="1.2" fill="none" />
            <path d="M-40,320 C310,270 590,350 940,310 C1180,290 1380,340 1480,320" stroke="url(#footerCfdGradSubtle)" strokeWidth="1" fill="none" />
            <path d="M-40,400 C330,360 620,430 980,390 C1200,370 1400,420 1480,400" stroke="url(#footerCfdGrad)" strokeWidth="1" fill="none" />

            {/* Precision Mechanical Coordinate Drafting Rings */}
            <circle cx="720" cy="180" r="260" stroke="rgba(255,255,255,0.02)" strokeWidth="1" strokeDasharray="5 7" fill="none" />
            <circle cx="720" cy="180" r="400" stroke="rgba(56,189,248,0.02)" strokeWidth="1" fill="none" />
          </svg>
        </div>

        {/* Primary Three-Column Editorial Composition */}
        <div className="footer-content-grid">
          {/* ================= LEFT COLUMN ================= */}
          <div className="footer-col footer-col-left">
            <span className="footer-col-eyebrow">CONTACT</span>

            <div className="footer-left-subgrid">
              {/* Left Sub-Column: Institutional Location & Direct Email */}
              <div className="footer-contact-block">
                <p className="footer-contact-inst">
                  Department of Mechanical Engineering
                </p>
                <p className="footer-contact-uni">
                  Chittagong University of Engineering and Technology (CUET)
                </p>
                <p className="footer-contact-city">
                  Chattogram-4349, Bangladesh
                </p>

                <div className="footer-email-list">
                  <a 
                    href="mailto:jubairzidan.mech@gmail.com" 
                    className="footer-email-link"
                    title="Direct correspondence email"
                  >
                    jubairzidan.mech@gmail.com
                  </a>
                  <a 
                    href="mailto:jubairzidan99@gmail.com" 
                    className="footer-email-link footer-email-secondary"
                    title="Secondary contact email"
                  >
                    jubairzidan99@gmail.com
                  </a>
                </div>
              </div>

              {/* Right Sub-Column: Social & Scholarly Profiles */}
              <div className="footer-social-block">
                <span className="footer-sub-label">SCHOLARLY & SOCIAL</span>
                <div className="footer-social-links-list">
                  {socialLinks.map((soc) => (
                    <a
                      key={soc.label}
                      href={soc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social-link"
                      title={`${soc.label} profile`}
                    >
                      <span className="footer-social-label">{soc.label}</span>
                      <ArrowUpRight size={13} className="footer-external-arrow" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ================= CENTER COLUMN ================= */}
          <div className="footer-col footer-col-center">
            {/* Prominently Displayed Brand Logo */}
            <button 
              onClick={scrollToTop} 
              className="footer-center-logo-btn"
              aria-label="Back to top / Home"
              title="Return to top of page"
            >
              <img 
                src="/a.png" 
                alt="Md. Jubair Uddin Zidan" 
                className="footer-center-logo-img" 
              />
            </button>

            {/* Prominently Displayed Name */}
            <h2 className="footer-center-name">
              Md. Jubair Uddin Zidan
            </h2>

            {/* Subtle Academic Identity Underneath */}
            <p className="footer-center-title">
              Mechanical Engineering Researcher
            </p>

            <p className="footer-center-uni">
              Chittagong University of Engineering and Technology
            </p>

            <p className="footer-center-motto">
              Computational Fluid Mechanics · Materials Modelling · AI
            </p>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="footer-col footer-col-right">
            <span className="footer-col-eyebrow">NAVIGATION</span>

            <div className="footer-nav-subgrid">
              {/* Navigation Sub-Column 1 */}
              <div className="footer-nav-col">
                {navColumn1.map((item) => {
                  const isActive = activePage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActivePage(item.id)}
                      className={`footer-nav-item ${isActive ? 'is-active' : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Sub-Column 2 */}
              <div className="footer-nav-col">
                {navColumn2.map((item) => {
                  const isActive = activePage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActivePage(item.id)}
                      className={`footer-nav-item ${isActive ? 'is-active' : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span>{item.label}</span>
                    </button>
                  );
                })}

                {/* Academic Curriculum Vitae Direct Link */}
                <a
                  href={personalData.cvUrl || '/Md_Jubair_Uddin_Zidan_CV.pdf'}
                  download="Md_Jubair_Uddin_Zidan_CV.pdf"
                  className="footer-nav-item footer-cv-nav-item"
                  title="Download Academic Curriculum Vitae (PDF)"
                >
                  <span>Academic CV</span>
                  <ArrowUpRight size={12} className="footer-external-arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ================= DISCREET BOTTOM ROW ================= */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-left">
            <p className="footer-copyright">
              © {new Date().getFullYear()} Md. Jubair Uddin Zidan · Department of Mechanical Engineering, CUET
            </p>
          </div>

          <div className="footer-bottom-right">
            <button
              onClick={scrollToTop}
              className="footer-back-to-top-btn"
              aria-label="Scroll back to top"
              title="Scroll to top of page"
            >
              <span>Back to top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
