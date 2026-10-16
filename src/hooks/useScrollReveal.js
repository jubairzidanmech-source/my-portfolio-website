import { useEffect } from 'react';

/**
 * Custom hook to manage subtle, buttery-smooth scroll-reveal animations across:
 * - Academics (#academics)
 * - Research (#research)
 * - Awards (#awards)
 * - Experience (#experience)
 * - Skills (#skills)
 * - Contact (#contact)
 * 
 * Specifically excludes the homepage (#home) and "In Frames" carousel (#in-frames).
 * 
 * Specifications:
 * - Duration: 600–900ms (750ms).
 * - Vertical movement: 20–30px (24px).
 * - Stagger delay: 80–120ms (90ms).
 * - Easing: cubic-bezier(0.16, 1, 0.3, 1).
 * - Trigger once per page load via IntersectionObserver.
 * - Respects prefers-reduced-motion.
 */
export function useScrollReveal() {
  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const TARGET_SECTIONS_SELECTOR = '#academics, #research, #awards, #experience, #skills, #contact';

    // 1. Target sections only
    const targetSections = document.querySelectorAll(TARGET_SECTIONS_SELECTOR);
    if (!targetSections.length) return;

    targetSections.forEach((section) => {
      // Headings: masked upward reveal
      const headings = section.querySelectorAll('.page-title, .contact-main-heading, .section-main-heading');
      headings.forEach((heading) => {
        if (!heading.classList.contains('reveal-heading')) {
          heading.classList.add('reveal-heading');
          if (!heading.querySelector('.reveal-heading-text')) {
            const innerHTML = heading.innerHTML;
            heading.innerHTML = `<span class="reveal-heading-text">${innerHTML}</span>`;
          }
        }
      });

      // Descriptions and subtitles to fade-up
      const descriptions = section.querySelectorAll('.page-subtitle, .contact-subtitle, .research-subnav-bar');
      descriptions.forEach((desc) => {
        desc.classList.add('reveal-desc');
      });

      // Timeline rows in Academics
      const timelineRows = section.querySelectorAll('.timeline-row');
      timelineRows.forEach((row) => {
        row.classList.add('reveal-timeline-row');
      });

      // Card groups (staggered entrance)
      const groups = section.querySelectorAll(
        '.pub-grid-2col, .skills-tech-grid, .contact-hub-grid, .filter-bar, .contact-social-grid'
      );
      groups.forEach((group) => {
        group.classList.add('reveal-group');
      });

      // Standalone cards not inside a reveal-group
      const standaloneCards = section.querySelectorAll(
        '.exp-card, .timeline-academic-card:not(.timeline-row .timeline-academic-card), .contact-closing-card'
      );
      standaloneCards.forEach((card) => {
        card.classList.add('reveal-card');
      });
    });

    // 2. Activate scroll reveal styling
    document.body.classList.add('scroll-reveal-ready');

    // 3. Set up IntersectionObserver (triggers slightly before entering viewport)
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    // 4. Query all elements with reveal classes inside target sections
    const elementsToObserve = document.querySelectorAll(
      '#academics .reveal-heading, #academics .reveal-desc, #academics .reveal-timeline-row, #academics .reveal-card, #academics .reveal-group, ' +
      '#research .reveal-heading, #research .reveal-desc, #research .reveal-card, #research .reveal-group, ' +
      '#awards .reveal-heading, #awards .reveal-desc, #awards .reveal-card, #awards .reveal-group, ' +
      '#experience .reveal-heading, #experience .reveal-desc, #experience .reveal-card, #experience .reveal-group, ' +
      '#skills .reveal-heading, #skills .reveal-desc, #skills .reveal-card, #skills .reveal-group, ' +
      '#contact .reveal-heading, #contact .reveal-desc, #contact .reveal-card, #contact .reveal-group'
    );

    elementsToObserve.forEach((el) => {
      // If already in viewport on mount, reveal immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('is-revealed');
      } else {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}
