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
import { AestheticGridBackground } from './components/AestheticGridBackground';
import { CustomCursor } from './components/CustomCursor';
import { Analytics } from '@vercel/analytics/react';
import { AnnouncementBar } from './components/AnnouncementBar';

const SECTIONS = ['home', 'academics', 'research', 'awards', 'experience', 'skills', 'contact'];

export function App() {
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
      window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
      try {
        window.history.replaceState(null, '', ' ');
      } catch (e) {}
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      // Dynamic header offset accounting for fixed announcement bar + sticky navbar
      const navOffset = announcementVisible ? 128 : 94;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: smooth ? 'smooth' : 'auto'
      });
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

  // ScrollSpy: Automatically highlight the current section in the navbar as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (isManualScrolling.current) return;

      // Top of page
      if (window.scrollY < 120) {
        setActivePage('home');
        return;
      }

      // Bottom of page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActivePage('contact');
        return;
      }

      // Dynamic offset matching header height + breathing room
      const headerOffset = announcementVisible ? 138 : 104;

      // Scan through sections from bottom to top to identify which one is in view
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const id = SECTIONS[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - headerOffset;
          if (window.scrollY >= top) {
            setActivePage(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-wrapper">
      <CustomCursor />
      <AestheticGridBackground />
      <AnnouncementBar 
        isVisible={announcementVisible} 
        onDismiss={() => setAnnouncementVisible(false)} 
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
