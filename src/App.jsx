import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AcademicsPage } from './pages/AcademicsPage';
import { ResearchPage } from './pages/ResearchPage';
import { AwardsPage } from './pages/AwardsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { SkillsPage } from './pages/SkillsPage';
import { ContactPage } from './pages/ContactPage';
import { CinematicQuote } from './components/CinematicQuote';

import { ErrorBoundary } from './components/ErrorBoundary';
import { MilestonesCarousel } from './components/MilestonesCarousel';
import { AestheticGridBackground } from './components/AestheticGridBackground';
import { CustomCursor } from './components/CustomCursor';
import { Analytics } from '@vercel/analytics/react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { useLenis } from './hooks/useLenis';
import { useScrollReveal } from './hooks/useScrollReveal';

const SECTIONS = ['home', 'academics', 'research', 'awards', 'experience', 'skills', 'contact'];

export function App() {
  // Initialize and manage global Lenis smooth momentum scrolling
  useLenis();
  // Manage subtle, smooth scroll-reveal animations across sections
  useScrollReveal();

  const parseTargetPage = () => {
    // 1. Check hash: #research, #/research, etc.
    const rawHash = (window.location.hash || '').replace(/^#\/?/, '').toLowerCase().trim();
    if (SECTIONS.includes(rawHash)) return rawHash;

    // 2. Check pathname: /research, /awards, etc.
    const rawPath = (window.location.pathname || '').replace(/^\/+/, '').toLowerCase().trim();
    if (SECTIONS.includes(rawPath)) return rawPath;

    return 'home';
  };

  const getInitialPage = () => {
    return parseTargetPage();
  };

  const [activePage, setActivePage] = useState(getInitialPage);
  const [theme, setTheme] = useState('light');
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme);
      // Clean up saved theme so future reloads/visits always start with light mode
      localStorage.removeItem('portfolio-theme');
    } catch (e) {}
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const isManualScrolling = useRef(getInitialPage() !== 'home');
  const scrollTimer = useRef(null);

  // Smoothly or instantly scrolls down to the specified section
  const scrollToSection = (sectionId, smooth = true) => {
    setActivePage(sectionId);
    isManualScrolling.current = true;
    if (scrollTimer.current) clearTimeout(scrollTimer.current);
    // Safety fallback timer in case Lenis onComplete or scroll event is delayed
    scrollTimer.current = setTimeout(() => {
      isManualScrolling.current = false;
    }, 1600);

    if (sectionId === 'home') {
      if (window.lenis) {
        window.lenis.scrollTo(0, {
          immediate: !smooth,
          onComplete: () => {
            isManualScrolling.current = false;
            setActivePage('home');
            if (scrollTimer.current) clearTimeout(scrollTimer.current);
          }
        });
      } else {
        window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
      }
      try {
        window.history.replaceState(null, '', window.location.pathname.length > 1 ? window.location.pathname : ' ');
      } catch (e) {}
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      // Lenis natively honors the section's CSS scrollMarginTop (148px / 136px),
      // so passing offset: 0 places the section top cleanly below the sticky header.
      if (window.lenis) {
        window.lenis.scrollTo(element, {
          offset: 0,
          immediate: !smooth,
          onComplete: () => {
            isManualScrolling.current = false;
            setActivePage(sectionId);
            if (scrollTimer.current) clearTimeout(scrollTimer.current);
          }
        });
      } else {
        const elementPosition = element.getBoundingClientRect().top;
        const navOffset = announcementVisible ? 148 : 136;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: smooth ? 'smooth' : 'auto'
        });
      }
      try {
        window.history.replaceState(null, '', `#${sectionId}`);
      } catch (e) {}
    }
  };

  // Release manual scroll lock immediately when user manually scrolls or touches
  useEffect(() => {
    const handleUserInteraction = () => {
      if (isManualScrolling.current) {
        isManualScrolling.current = false;
        if (scrollTimer.current) clearTimeout(scrollTimer.current);
      }
    };

    window.addEventListener('wheel', handleUserInteraction, { passive: true });
    window.addEventListener('touchmove', handleUserInteraction, { passive: true });
    const handleKeyDown = (e) => {
      if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Space'].includes(e.code)) {
        handleUserInteraction();
      }
    };
    window.addEventListener('keydown', handleKeyDown, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleUserInteraction);
      window.removeEventListener('touchmove', handleUserInteraction);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // On initial mount, if URL has a section hash or path, scroll to that section
  useEffect(() => {
    const target = parseTargetPage();
    if (target && target !== 'home') {
      const timer = setTimeout(() => {
        scrollToSection(target, false);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, []);

  // Sync with browser back/forward buttons (hashchange and popstate)
  useEffect(() => {
    const handleUrlChange = () => {
      const target = parseTargetPage();
      scrollToSection(target, true);
    };

    window.addEventListener('hashchange', handleUrlChange);
    window.addEventListener('popstate', handleUrlChange);
    return () => {
      window.removeEventListener('hashchange', handleUrlChange);
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  // ScrollSpy: Accurately highlight current section in navbar using viewport screen coordinates
  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      if (isManualScrolling.current) return;

      const scrollY = window.scrollY;

      // Top of page
      if (scrollY < 100) {
        setActivePage((prev) => (prev !== 'home' ? 'home' : prev));
        return;
      }

      // Bottom of page: ensure contact is highlighted when user reaches the end
      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 80) {
        setActivePage((prev) => (prev !== 'contact' ? 'contact' : prev));
        return;
      }

      // Dynamic trigger line: generous threshold comfortably below header clearance (~136px - 148px)
      // Math.max(220, 32% of viewport) reliably captures the landed section
      const triggerY = Math.max(220, Math.floor(window.innerHeight * 0.32));

      // Determine active section via getBoundingClientRect()
      let currentSection = 'home';
      for (let i = 0; i < SECTIONS.length; i++) {
        const id = SECTIONS[i];
        if (id === 'home') continue;
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerY) {
            currentSection = id;
          }
        }
      }

      setActivePage((prev) => (prev !== currentSection ? currentSection : prev));
    };

    let lastCheck = 0;
    const handleScroll = () => {
      const now = performance.now();
      if (now - lastCheck > 100) {
        lastCheck = now;
        updateActiveSection();
      } else if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
      }
    };

    if (window.lenis) {
      window.lenis.on('scroll', handleScroll);
    } else {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (window.lenis) {
        window.lenis.off('scroll', handleScroll);
      }
    };
  }, [announcementVisible]);

  return (
    <div className="app-wrapper">
      <CustomCursor />
      <AestheticGridBackground />
      <AnnouncementBar 
        isVisible={announcementVisible} 
      />
      <Navbar 
        activePage={activePage} 
        setActivePage={scrollToSection} 
        theme={theme} 
        toggleTheme={toggleTheme} 
        hasAnnouncement={announcementVisible}
      />
      <main className={`site-main ${announcementVisible ? 'with-announcement' : ''}`} id="main-content">
        <section id="home" className="page-section">
          <ErrorBoundary>
            <HomePage setActivePage={scrollToSection} />
          </ErrorBoundary>
        </section>

        <section id="academics" className="page-section">
          <ErrorBoundary>
            <AcademicsPage />
          </ErrorBoundary>
        </section>

        {/* In Frames: Continuous Editorial Photographic Conveyor */}
        <section id="in-frames" className="in-frames-strip-section" aria-label="In Frames Photo Showcase">
          <ErrorBoundary>
            <MilestonesCarousel />
          </ErrorBoundary>
        </section>

        <section id="research" className="page-section">
          <ErrorBoundary>
            <ResearchPage />
          </ErrorBoundary>
        </section>

        <section id="awards" className="page-section">
          <ErrorBoundary>
            <AwardsPage />
          </ErrorBoundary>
        </section>

        <section id="experience" className="page-section">
          <ErrorBoundary>
            <ExperiencePage />
          </ErrorBoundary>
        </section>

        <section id="skills" className="page-section">
          <ErrorBoundary>
            <SkillsPage />
          </ErrorBoundary>
        </section>

        <section id="contact" className="page-section">
          <ErrorBoundary>
            <ContactPage />
          </ErrorBoundary>
        </section>

        {/* Cinematic Closing Reflection: immediately after Contact, before Footer */}
        <section id="quote" className="cinematic-quote-section" aria-label="Closing Reflection">
          <ErrorBoundary>
            <CinematicQuote />
          </ErrorBoundary>
        </section>
      </main>
      <Footer activePage={activePage} setActivePage={scrollToSection} />
      <Analytics />
    </div>
  );
}

export default App;
