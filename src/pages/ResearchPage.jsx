import React, { useState, useRef } from 'react';
import { 
  Award,
  BookOpen,
  ChevronDown, 
  ChevronUp, 
  ChevronLeft,
  ChevronRight,
  Users, 
  ArrowUpRight,
  Presentation,
  Wind
} from 'lucide-react';
import { researchData } from '../data/portfolioData';
import { InteractiveModal } from '../components/InteractiveModal';

export const ResearchPage = () => {
  // Active category filter for Projects (D)
  const [selectedField, setSelectedField] = useState('All');
  
  // Interactive Modal state for detailed paper/project view
  const [activeModalData, setActiveModalData] = useState(null);

  // Horizontal active card sliders state
  const [activePaperIndex, setActivePaperIndex] = useState(0);
  const [activePresIndex, setActivePresIndex] = useState(0);

  const paperTrackRef = useRef(null);
  const presTrackRef = useRef(null);
  const paperCardRefs = useRef([]);
  const presCardRefs = useRef([]);
  const paperHoverTimer = useRef(null);
  const presHoverTimer = useRef(null);

  const handleSelectPaper = (idx) => {
    if (paperHoverTimer.current) clearTimeout(paperHoverTimer.current);
    setActivePaperIndex(idx);
    if (paperCardRefs.current[idx]) {
      paperCardRefs.current[idx].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  };

  const handleHoverPaper = (idx) => {
    if (paperHoverTimer.current) clearTimeout(paperHoverTimer.current);
    paperHoverTimer.current = setTimeout(() => {
      setActivePaperIndex(idx);
    }, 130);
  };

  const handleLeavePaper = () => {
    if (paperHoverTimer.current) clearTimeout(paperHoverTimer.current);
  };

  const handleNextPaper = () => {
    const nextIdx = (activePaperIndex + 1) % researchData.conferencePapers.length;
    handleSelectPaper(nextIdx);
  };

  const handlePrevPaper = () => {
    const prevIdx = (activePaperIndex - 1 + researchData.conferencePapers.length) % researchData.conferencePapers.length;
    handleSelectPaper(prevIdx);
  };

  const handleSelectPres = (idx) => {
    if (presHoverTimer.current) clearTimeout(presHoverTimer.current);
    setActivePresIndex(idx);
    if (presCardRefs.current[idx]) {
      presCardRefs.current[idx].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  };

  const handleHoverPres = (idx) => {
    if (presHoverTimer.current) clearTimeout(presHoverTimer.current);
    presHoverTimer.current = setTimeout(() => {
      setActivePresIndex(idx);
    }, 130);
  };

  const handleLeavePres = () => {
    if (presHoverTimer.current) clearTimeout(presHoverTimer.current);
  };

  const handleNextPres = () => {
    const nextIdx = (activePresIndex + 1) % researchData.conferencePresentations.length;
    handleSelectPres(nextIdx);
  };

  const handlePrevPres = () => {
    const prevIdx = (activePresIndex - 1 + researchData.conferencePresentations.length) % researchData.conferencePresentations.length;
    handleSelectPres(prevIdx);
  };

  const openThesisModal = () => {
    setActiveModalData({
      title: researchData.undergradThesis.title,
      subtitle: `${researchData.undergradThesis.type} • ${researchData.undergradThesis.institution} (${researchData.undergradThesis.year})`,
      content: (
        <div>
          <div style={{ marginBottom: '20px', borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--border-subtle)', background: '#000' }}>
            <img
              src={researchData.undergradThesis.imageUrl}
              alt={researchData.undergradThesis.title}
              style={{ width: '100%', maxHeight: '340px', objectFit: 'cover' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ color: 'var(--blue-royal)', fontSize: '1.05rem', marginBottom: '8px', fontWeight: 600 }}>
              Full Thesis Abstract
            </h4>
            <p style={{ lineHeight: '1.75', fontSize: '0.94rem', color: 'var(--text-secondary)' }}>
              {researchData.undergradThesis.abstract}
            </p>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ color: 'var(--blue-royal)', fontSize: '1.05rem', margin: '20px 0 10px', fontWeight: 600 }}>
              Computational Setup & Verification Methodology
            </h4>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.7', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              {researchData.undergradThesis.methodology.map((m, i) => (
                <li key={i} style={{ marginBottom: '6px' }}>{m}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'var(--blue-royal)', fontSize: '1.05rem', margin: '20px 0 10px', fontWeight: 600 }}>
              Key Validated Findings
            </h4>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.7', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              {researchData.undergradThesis.keyResults.map((r, i) => (
                <li key={i} style={{ marginBottom: '6px' }}>{r}</li>
              ))}
            </ul>
          </div>
        </div>
      )
    });
  };

  const projectFields = ['All', 'Fluid Mechanics', 'Materials Science'];

  const getFilteredProjects = () => {
    if (selectedField === 'All') {
      return [
        ...researchData.projectsByField["Fluid Mechanics"],
        ...researchData.projectsByField["Materials Science"]
      ];
    }
    return researchData.projectsByField[selectedField] || [];
  };

  return (
    <div className="container animate-fade-in">
      {/* =========================================================================
          PAGE TITLE + RESEARCH EXPERIENCE OVERVIEW + RESEARCH INTERESTS (Image 01)
          ========================================================================= */}
      <div className="research-intro-box">
        <h1 className="research-main-title">
          <span className="header-badge">Research</span>
        </h1>
        
        <p className="research-narrative-p">
          My research experience at Chittagong University of Engineering and Technology (CUET) centres on computational fluid dynamics and its application to real engineering problems — from the aerodynamics of ground-effect race cars and chevron nozzles for jet noise reduction, to the performance of vertical axis wind turbines.
        </p>

        <p className="research-narrative-p">
          More recently, my work has extended into advanced materials, with an ongoing review on architected auxetic mechanical metamaterials for energy absorption.
        </p>

        <div className="interests-label-tag">
          Research Interests
        </div>

        <div className="interests-pills-wrap">
          {researchData.interests.map((interest, idx) => (
            <span key={idx} className="interest-capsule">
              {interest}
            </span>
          ))}
        </div>
      </div>

      {/* =========================================================================
          C. RESEARCH (Organized into 4 Subsections)
          1. Undergraduate Thesis
          2. Conference Papers & Proceedings
          3. Conference Presentations
          4. Ongoing Research
          ========================================================================= */}
      <section style={{ marginBottom: '64px' }}>
        <div style={{ marginBottom: '28px' }}>
          <h2 style={{ fontSize: '1.9rem', color: 'var(--purple-deep)' }}>
            Publications
          </h2>
        </div>

        {/* 1. UNDERGRADUATE THESIS (Abstract hidden on card face; click opens full modal) */}
        <div style={{ marginBottom: '44px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#FFFFFF',
              background: 'var(--blue-royal)',
              padding: '4px 12px',
              borderRadius: '6px',
              textTransform: 'uppercase',
              boxShadow: '0 2px 8px rgba(37, 99, 235, 0.25)'
            }}>
              1. Undergraduate Thesis
            </span>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--purple-deep)' }}>
              Bachelor’s Degree Thesis Investigation
            </h3>
          </div>

          <div 
            className="card card-interactive thesis-hero-card"
            onClick={openThesisModal}
            style={{ cursor: 'pointer' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.4fr) 1fr', gap: '32px', alignItems: 'start' }}>
              <div>
                {/* Image 2 Top-Row: Squircle Icon + Index/Overline */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div className="thesis-icon-squircle">
                    <Wind size={20} />
                  </div>
                  <div>
                    <span className="thesis-meta-number">01</span>
                    <span className="thesis-meta-pipe">•</span>
                    <span className="thesis-meta-badge">UNDERGRADUATE BACHELOR THESIS • 2024</span>
                  </div>
                </div>

                {/* Card Title */}
                <h4 className="thesis-title-heading">
                  {researchData.undergradThesis.title}
                </h4>

                <div className="thesis-institution-sub">
                  Department of Mechanical Engineering, CUET
                </div>

                {/* Fine Subtle Hairline Divider */}
                <div className="thesis-hairline-divider" />

                {/* Scope Headline Note (Notice: Abstract is completely hidden from card face!) */}
                <p className="thesis-narrative-text" style={{ fontSize: '0.94rem', lineHeight: '1.65', marginBottom: '16px' }}>
                  High-fidelity 3D computational fluid dynamics investigation analyzing Venturi tunnel ground effect reintroduction and floor-generated aerodynamic downforce under modern FIA Formula One technical regulations.
                </p>

                {/* Pill Tags */}
                <div className="thesis-tags-row">
                  {['Aerodynamics & CFD', 'Ground Effect', 'Venturi Tunnel', 'ANSYS Fluent', 'F1 Regulations'].map((tag, tIdx) => (
                    <span key={tIdx} className="thesis-pill-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action CTA Button: Click to Open Full Abstract & Methodology */}
                <div style={{ marginTop: '22px' }}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openThesisModal();
                    }}
                    className="thesis-action-cta-full"
                  >
                    <span className="thesis-cta-dot" />
                    <span>Click to View Full Abstract, Methodology & Findings</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>

              {/* F1 CFD Simulation Diagram Frame */}
              <div 
                className="thesis-image-frame"
                onClick={(e) => {
                  e.stopPropagation();
                  openThesisModal();
                }}
              >
                <img
                  src={researchData.undergradThesis.imageUrl}
                  alt={researchData.undergradThesis.title}
                  className="thesis-image-content"
                />
                <span className="thesis-image-overlay-badge">
                  <span>Inspect CFD Visuals</span>
                  <ArrowUpRight size={13} />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. CONFERENCE PAPERS & PROCEEDINGS (Horizontal Sliding Active Card Deck) */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#FFFFFF',
                background: '#1D4ED8',
                padding: '4px 12px',
                borderRadius: '6px',
                textTransform: 'uppercase',
                boxShadow: '0 2px 8px rgba(37, 99, 235, 0.25)'
              }}>
                2. Conference Papers & Proceedings
              </span>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--purple-deep)' }}>
                Peer-Reviewed Publications & Proceedings
              </h3>
            </div>

            {/* Controls: Counter, Dot Indicators & Arrow Buttons */}
            <div className="research-slider-controls-wrap">
              <span className="research-slider-counter-tag">
                {activePaperIndex + 1} / {researchData.conferencePapers.length}
              </span>
              <div className="research-slider-dots">
                {researchData.conferencePapers.map((_, pDotIdx) => (
                  <button
                    key={pDotIdx}
                    onClick={() => handleSelectPaper(pDotIdx)}
                    className={`research-slider-dot ${pDotIdx === activePaperIndex ? 'is-active' : ''}`}
                    aria-label={`Go to Paper ${pDotIdx + 1}`}
                  />
                ))}
              </div>
              <div className="research-slider-nav-btns">
                <button
                  onClick={handlePrevPaper}
                  className="research-slider-arrow-btn"
                  aria-label="Previous Conference Paper"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={handleNextPaper}
                  className="research-slider-arrow-btn"
                  aria-label="Next Conference Paper"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Horizontal Slider Track */}
          <div className="research-slider-track" ref={paperTrackRef}>
            {researchData.conferencePapers.map((paper, idx) => {
              const isActive = idx === activePaperIndex;
              return (
                <div
                  key={paper.id}
                  ref={(el) => (paperCardRefs.current[idx] = el)}
                  onMouseEnter={() => !isActive && handleHoverPaper(idx)}
                  onMouseLeave={handleLeavePaper}
                  onClick={() => handleSelectPaper(idx)}
                  className={`conf-paper-card ${isActive ? 'is-active' : 'is-compact'}`}
                >
                  {/* COMPACT VIEW (Inactive / Contracting) */}
                  {!isActive && (
                    <div className="conf-paper-compact-view">
                      <div className="conf-paper-compact-thumb-wrap">
                        {paper.imageUrl ? (
                          <img src={paper.imageUrl} alt={paper.title} className="conf-paper-compact-thumb" />
                        ) : (
                          <div className="conf-paper-compact-placeholder">
                            <Award size={22} color="#60A5FA" />
                          </div>
                        )}
                        <span className="conf-paper-compact-badge">
                          0{idx + 1}
                        </span>
                      </div>
                      <div className="conf-paper-compact-body">
                        <div className="conf-paper-compact-org">{paper.organizer}</div>
                        <h4 className="conf-paper-compact-title">{paper.title}</h4>
                        <div className="conf-paper-compact-date">{paper.date}</div>
                        <div className="conf-paper-compact-cta">
                          <span>Hover or click to expand</span>
                          <ChevronRight size={14} />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ACTIVE VIEW (Expanded with Image/Manuscript, Details & Actions - Matches Section 3) */}
                  {isActive && (
                    <div className="conf-paper-active-view conf-paper-reveal-content">
                      <div className="conf-paper-active-header">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span className="conf-paper-active-index-pill">
                            PUBLICATION 0{idx + 1} • ACTIVE
                          </span>
                          <span className="conf-paper-status-badge">
                            {paper.status}
                          </span>
                        </div>
                        <span className="conf-paper-date">
                          {paper.date}
                        </span>
                      </div>

                      <div className="conf-paper-active-grid">
                        {/* Left Column: Certificate Image or Manuscript Badge Slot */}
                        <div style={{ height: '210px', borderRadius: '14px', overflow: 'hidden', position: 'relative', background: '#000' }}>
                          {paper.imageUrl ? (
                            <>
                              <img
                                src={paper.imageUrl}
                                alt={paper.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                              />
                              <span style={{
                                position: 'absolute',
                                bottom: '10px',
                                right: '10px',
                                background: 'rgba(15, 23, 42, 0.88)',
                                backdropFilter: 'blur(4px)',
                                color: '#FFFFFF',
                                fontSize: '0.72rem',
                                fontWeight: 600,
                                padding: '4px 10px',
                                borderRadius: '6px'
                              }}>
                                Official Certificate
                              </span>
                            </>
                          ) : (
                            <div style={{
                              width: '100%',
                              height: '100%',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 58, 138, 0.85) 100%)',
                              padding: '16px',
                              textAlign: 'center',
                              boxSizing: 'border-box'
                            }}>
                              <BookOpen size={36} color="#60A5FA" style={{ marginBottom: '8px' }} />
                              <span style={{ fontSize: '0.86rem', fontWeight: 600, color: '#93C5FD', marginBottom: '4px' }}>
                                Peer-Reviewed Manuscript
                              </span>
                              <span style={{ fontSize: '0.72rem', color: '#BFDBFE', lineHeight: '1.4' }}>
                                Official conference proceedings record
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Right Column: Title, Conference, Authors & Action Buttons */}
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                            <BookOpen size={16} color="#60A5FA" />
                            <span style={{ fontSize: '0.76rem', fontWeight: 600, color: '#BFDBFE', textTransform: 'uppercase' }}>
                              {paper.organizer}
                            </span>
                          </div>

                          <h4 style={{ fontSize: '1.2rem', color: '#FFFFFF', lineHeight: 1.35, marginBottom: '10px', fontWeight: 700 }}>
                            {paper.title}
                          </h4>

                          <p style={{ fontSize: '0.88rem', color: '#E2E8F0', marginBottom: '8px', lineHeight: 1.5 }}>
                            <strong style={{ color: '#BFDBFE' }}>Conference:</strong> {paper.conference} • {paper.location}
                          </p>

                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#BFDBFE', marginBottom: '16px' }}>
                            <span><strong>Authors:</strong> {paper.authors.join(', ')}</span>
                            <span>{paper.date}</span>
                          </div>

                          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            {paper.imageUrl && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveModalData({
                                    title: paper.title,
                                    subtitle: `${paper.conference} • Official Certificate`,
                                    content: (
                                      <div style={{ textAlign: 'center' }}>
                                        <img
                                          src={paper.imageUrl}
                                          alt={`${paper.title} Certificate`}
                                          style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-md)', margin: '0 auto' }}
                                        />
                                      </div>
                                    )
                                  });
                                }}
                                className="conf-paper-btn"
                                style={{ background: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.3)', display: 'inline-flex' }}
                              >
                                <span>View Certificate</span>
                                <ArrowUpRight size={14} />
                              </button>
                            )}

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveModalData({
                                  title: paper.title,
                                  subtitle: `${paper.conference} • Full Details & Abstract`,
                                  content: (
                                    <div>
                                      <div style={{ marginBottom: '16px' }}>
                                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--blue-royal)', textTransform: 'uppercase' }}>
                                          {paper.organizer} • {paper.date}
                                        </span>
                                        <h4 style={{ fontSize: '1.2rem', color: 'var(--purple-deep)', margin: '6px 0' }}>
                                          {paper.title}
                                        </h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                          <em>{paper.conference}</em> • {paper.location}
                                        </p>
                                        <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                                          Authors: {paper.authors.join(', ')}
                                        </p>
                                      </div>
                                      {paper.imageUrl && (
                                        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                                          <img src={paper.imageUrl} alt={paper.title} style={{ maxWidth: '100%', borderRadius: '12px' }} />
                                        </div>
                                      )}
                                      <h4 style={{ color: 'var(--blue-royal)', marginBottom: '6px' }}>Abstract</h4>
                                      <p style={{ lineHeight: '1.7', fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                                        {paper.abstract}
                                      </p>
                                      <div style={{ marginTop: '16px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                        {paper.keywords.map((kw, i) => (
                                          <span key={i} className="tool-chip" style={{ fontSize: '0.75rem' }}>
                                            {kw}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )
                                });
                              }}
                              className="conf-paper-btn"
                              style={{ background: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.3)', display: 'inline-flex' }}
                            >
                              <span>Read Abstract</span>
                              <ArrowUpRight size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. CONFERENCE PRESENTATIONS (Horizontal Sliding Active Card Deck) */}
        <div style={{ marginBottom: '44px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#FFFFFF',
                background: 'var(--blue-royal)',
                padding: '4px 12px',
                borderRadius: '6px',
                textTransform: 'uppercase',
                boxShadow: '0 2px 8px rgba(37, 99, 235, 0.25)'
              }}>
                3. Conference Presentations
              </span>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--purple-deep)' }}>
                Individual Conference Podium Presentations
              </h3>
            </div>

            {/* Controls */}
            <div className="research-slider-controls-wrap">
              <span className="research-slider-counter-tag">
                {activePresIndex + 1} / {researchData.conferencePresentations.length}
              </span>
              <div className="research-slider-dots">
                {researchData.conferencePresentations.map((_, pDotIdx) => (
                  <button
                    key={pDotIdx}
                    onClick={() => handleSelectPres(pDotIdx)}
                    className={`research-slider-dot ${pDotIdx === activePresIndex ? 'is-active' : ''}`}
                    aria-label={`Go to Presentation ${pDotIdx + 1}`}
                  />
                ))}
              </div>
              <div className="research-slider-nav-btns">
                <button
                  onClick={handlePrevPres}
                  className="research-slider-arrow-btn"
                  aria-label="Previous Presentation"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={handleNextPres}
                  className="research-slider-arrow-btn"
                  aria-label="Next Presentation"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Horizontal Track */}
          <div className="research-slider-track" ref={presTrackRef}>
            {researchData.conferencePresentations.map((pres, idx) => {
              const isActive = idx === activePresIndex;
              return (
                <div
                  key={pres.id}
                  ref={(el) => (presCardRefs.current[idx] = el)}
                  onMouseEnter={() => !isActive && handleHoverPres(idx)}
                  onMouseLeave={handleLeavePres}
                  onClick={() => handleSelectPres(idx)}
                  className={`conf-pres-card ${isActive ? 'is-active' : 'is-compact'}`}
                >
                  {/* COMPACT VIEW */}
                  {!isActive && (
                    <div className="conf-paper-compact-view">
                      {pres.imageUrl && (
                        <div className="conf-paper-compact-thumb-wrap">
                          <img src={pres.imageUrl} alt={pres.title} className="conf-paper-compact-thumb" />
                          <span className="conf-paper-compact-badge">
                            0{idx + 1}
                          </span>
                        </div>
                      )}
                      <div className="conf-paper-compact-body">
                        <div className="conf-paper-compact-org">{pres.type}</div>
                        <h4 className="conf-paper-compact-title">{pres.title}</h4>
                        <div className="conf-paper-compact-date">{pres.date}</div>
                        <div className="conf-paper-compact-cta">
                          <span>Hover or click to expand</span>
                          <ChevronRight size={14} />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ACTIVE EXPANDED VIEW */}
                  {isActive && (
                    <div className="conf-paper-active-view conf-paper-reveal-content">
                      <div className="conf-paper-active-header">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span className="conf-paper-active-index-pill">
                            PRESENTATION 0{idx + 1} • ACTIVE
                          </span>
                          <span className="conf-paper-status-badge">
                            Live Podium
                          </span>
                        </div>
                        <span className="conf-paper-date">
                          {pres.date}
                        </span>
                      </div>

                      <div className="conf-pres-active-grid">
                        {pres.imageUrl && (
                          <div style={{ height: '210px', borderRadius: '14px', overflow: 'hidden', position: 'relative', background: '#000' }}>
                            <img
                              src={pres.imageUrl}
                              alt={pres.title}
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <span style={{
                              position: 'absolute',
                              bottom: '10px',
                              right: '10px',
                              background: 'rgba(15, 23, 42, 0.88)',
                              backdropFilter: 'blur(4px)',
                              color: '#FFFFFF',
                              fontSize: '0.72rem',
                              fontWeight: 600,
                              padding: '4px 10px',
                              borderRadius: '6px'
                            }}>
                              Live Presentation
                            </span>
                          </div>
                        )}

                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                            <Presentation size={16} color="#60A5FA" />
                            <span style={{ fontSize: '0.76rem', fontWeight: 600, color: '#BFDBFE', textTransform: 'uppercase' }}>
                              {pres.type}
                            </span>
                          </div>

                          <h4 style={{ fontSize: '1.2rem', color: '#FFFFFF', lineHeight: 1.35, marginBottom: '10px', fontWeight: 700 }}>
                            {pres.title}
                          </h4>

                          <p style={{ fontSize: '0.88rem', color: '#E2E8F0', marginBottom: '8px', lineHeight: 1.5 }}>
                            <strong style={{ color: '#BFDBFE' }}>Event:</strong> {pres.event}
                          </p>

                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#BFDBFE', marginBottom: '16px' }}>
                            <span><strong>Venue:</strong> {pres.venue}</span>
                            <span>{pres.date}</span>
                          </div>

                          {pres.certificateUrl && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveModalData({
                                  title: pres.title,
                                  subtitle: `${pres.event} • Official Certificate`,
                                  content: (
                                    <div style={{ textAlign: 'center' }}>
                                      <img 
                                        src={pres.certificateUrl} 
                                        alt={`${pres.title} Certificate`} 
                                        style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-md)', margin: '0 auto' }} 
                                      />
                                    </div>
                                  )
                                });
                              }}
                              className="conf-paper-btn"
                              style={{ background: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.3)', display: 'inline-flex' }}
                            >
                              <span>View Official Certificate</span>
                              <ArrowUpRight size={14} />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. ONGOING RESEARCH */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#FFFFFF',
              background: 'var(--blue-royal)',
              padding: '4px 12px',
              borderRadius: '6px',
              textTransform: 'uppercase',
              boxShadow: '0 2px 8px rgba(37, 99, 235, 0.25)'
            }}>
              4. Ongoing Research
            </span>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--purple-deep)' }}>
              Current Research Works & Manuscripts in Progress
            </h3>
          </div>

          {researchData.ongoingResearch.map((work) => (
            <div key={work.id} className="card card-interactive ongoing-research-card" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
                <span className="ongoing-status-badge" style={{
                  background: 'var(--blue-royal)',
                  color: '#FFFFFF',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  boxShadow: '0 2px 8px rgba(37, 99, 235, 0.25)'
                }}>
                  {work.badge}: {work.status}
                </span>
                <span className="ongoing-type-tag" style={{ fontSize: '0.82rem', color: 'var(--purple-deep)', fontWeight: 500 }}>
                  Review Paper Investigation
                </span>
              </div>

              <h4 className="ongoing-title" style={{ fontSize: '1.4rem', color: 'var(--purple-deep)', lineHeight: 1.3, marginBottom: '10px' }}>
                {work.title}
              </h4>

              <div className="ongoing-meta" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '14px', lineHeight: 1.6 }}>
                <strong>Authors:</strong> {work.authors.join(', ')} <br />
                <strong>Supervisor:</strong> {work.supervisor} ({work.supervisorAffiliation})
              </div>

              <p className="ongoing-overview" style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '18px' }}>
                {work.overview}
              </p>

              <div className="ongoing-deliverables-box" style={{
                background: 'var(--bg-card-subtle)',
                padding: '18px 22px',
                borderRadius: '14px',
                border: '1px solid var(--border-subtle)',
                boxShadow: '0 2px 8px rgba(11, 19, 43, 0.04)'
              }}>
                <span className="ongoing-deliverables-title" style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--blue-royal)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  display: 'block',
                  marginBottom: '10px'
                }}>
                  Core Manuscript Deliverables
                </span>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {work.deliverables.map((del, i) => (
                    <li key={i} className="ongoing-deliverable-item" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', display: 'flex', gap: '10px', alignItems: 'baseline' }}>
                      <span className="ongoing-check-icon" style={{ color: 'var(--blue-royal)', fontWeight: 700 }}>✓</span>
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          D. PROJECTS (Organized under Research Fields: Fluid Mechanics, Materials Science)
          Inspired by Reference 03
          ========================================================================= */}
      <section style={{ marginBottom: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
          <div>
            <h2 style={{ fontSize: '1.9rem', color: 'var(--purple-deep)' }}>
              Project Repository
            </h2>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="filter-bar" style={{ margin: 0 }}>
            {projectFields.map((field) => (
              <button
                key={field}
                onClick={() => setSelectedField(field)}
                className={`filter-pill ${selectedField === field ? 'active' : ''}`}
              >
                {field}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {getFilteredProjects().map((project) => (
            <div key={project.id} className="project-card card-interactive">
              <div className="project-thumb-wrapper">
                <img src={project.imageUrl} alt={project.title} className="project-thumb" />
                <span className="project-field-badge">{project.field}</span>
              </div>
              <div className="project-body">
                <div>
                  <div className="project-meta">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="project-title" style={{ marginTop: '8px', marginBottom: '10px' }}>
                    {project.title}
                  </h3>
                  <p className="project-desc">{project.description}</p>
                </div>
                <div>
                  <div className="project-tools" style={{ marginBottom: '16px' }}>
                    {project.tools.map((tool, i) => (
                      <span key={i} className="tool-chip">{tool}</span>
                    ))}
                  </div>
                  <button
                    onClick={() => setActiveModalData({
                      title: project.title,
                      subtitle: `${project.field} • ${project.category}`,
                      content: (
                        <div>
                          <p style={{ lineHeight: '1.7', marginBottom: '16px' }}>{project.description}</p>
                          <div style={{ background: 'var(--lavender-soft)', padding: '16px', borderRadius: '12px', marginBottom: '16px' }}>
                            <strong style={{ color: 'var(--purple-deep)' }}>Key Quantitative Metrics: </strong>
                            <p style={{ marginTop: '4px' }}>{project.metrics}</p>
                          </div>
                          <h4 style={{ color: 'var(--purple-deep)', marginBottom: '8px' }}>Simulation & Computational Tools</h4>
                          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {project.tools.map((t, i) => (
                              <span key={i} className="tool-chip" style={{ padding: '6px 12px' }}>{t}</span>
                            ))}
                          </div>
                        </div>
                      )
                    })}
                    className="project-action-btn"
                  >
                    <span>View Technical Specifications</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Interactive Modal for Abstracts & Project Details */}
      <InteractiveModal
        isOpen={Boolean(activeModalData)}
        onClose={() => setActiveModalData(null)}
        title={activeModalData?.title}
        subtitle={activeModalData?.subtitle}
      >
        {activeModalData?.content}
      </InteractiveModal>
    </div>
  );
};
