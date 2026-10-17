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
  // Manage bidirectional, repeatable scroll-reveal animations across sections
  useScrollReveal();

  const getInitialPage = () => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    return SECTIONS.includes(hash) ? hash : 'home';
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

  const isManualScrolling = useRef(false);
  const scrollTimer = useRef(null);

  // Smoothly or instantly scrolls down to the specified section
  const scrollToSection = (sectionId, smooth = true) => {
    setActivePage(sectionId);
    isManualScrolling.current = true;
    if (scrollTimer.current) clearTimeout(scrollTimer.current);
    scrollTimer.current = setTimeout(() => {
      isManualScrolling.current = false;
    }, 900);

    if (sectionId === 'home') {
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: !smooth });
      } else {
        window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
      }
      try {
        window.history.replaceState(null, '', ' ');
      } catch (e) {}
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      // Dynamic header offset accounting for fixed announcement bar + sticky navbar
      const navOffset = announcementVisible ? 128 : 94;
      if (window.lenis) {
        window.lenis.scrollTo(element, {
          offset: -navOffset,
          immediate: !smooth
        });
      } else {
        const elementPosition = element.getBoundingClientRect().top;
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

  // On initial mount, if URL has a hash, scroll to that section
  useEffect(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (SECTIONS.includes(hash) && hash !== 'home') {
      setTimeout(() => {
        scrollToSection(hash, false);
      }, 150);
    }
  }, []);

  // Sync with browser back/forward buttons (hashchange)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (SECTIONS.includes(hash)) {
        scrollToSection(hash, true);
      } else {
        scrollToSection('home', true);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
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
      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 50) {
        setActivePage((prev) => (prev !== 'contact' ? 'contact' : prev));
        return;
      }

      // Dynamic trigger line just below sticky header + announcement bar
      const triggerY = announcementVisible ? 160 : 120;

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

    let rafId = null;
    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        updateActiveSection();
        rafId = null;
      });
    };

    if (window.lenis) {
      window.lenis.on('scroll', handleScroll);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
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
      </main>
      <Footer activePage={activePage} setActivePage={scrollToSection} />
      <Analytics />
    </div>
  );
}

export default App;
