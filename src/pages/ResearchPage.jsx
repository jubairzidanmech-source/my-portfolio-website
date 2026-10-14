import React, { useState } from 'react';
import { 
  Award,
  BookOpen,
  ChevronDown, 
  ChevronUp, 
  ArrowUpRight,
  Presentation,
  Wind,
  Layers,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  FileText,
  Compass
} from 'lucide-react';
import { researchData } from '../data/portfolioData';
import { InteractiveModal, ImageLightboxModal } from '../components/InteractiveModal';

export const ResearchPage = () => {
  // Active category filter for Projects
  const [selectedField, setSelectedField] = useState('All');
  
  // Interactive Modal state for viewing images/certificates full size
  const [activeModalData, setActiveModalData] = useState(null);

  // Expanded publication IDs state (for inline accordion disclosure)
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const projectFields = ['All', 'Fluid Mechanics', 'Materials Science'];

  const getFilteredProjects = () => {
    if (!researchData?.projectsByField) return [];
    if (selectedField === 'All') {
      return [
        ...(researchData.projectsByField["Fluid Mechanics"] || []),
        ...(researchData.projectsByField["Materials Science"] || [])
      ];
    }
    return researchData.projectsByField[selectedField] || [];
  };

  // Smooth jump to subsection with fixed header offset
  const jumpToSubSection = (subId) => {
    const el = document.getElementById(subId);
    if (el) {
      const headerOffset = 135;
      if (window.lenis) {
        window.lenis.scrollTo(el, { offset: -headerOffset });
      } else {
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className="container animate-fade-in">
      {/* =========================================================================
          PAGE HEADER: Research Focus & Academic Interests
          ========================================================================= */}
      <div className="page-intro">
        <h1 className="page-title">
          Research & <span className="header-badge">Publications</span>
        </h1>
        <p className="page-subtitle">
          Computational fluid dynamics, aeroacoustics, aerodynamic optimization, and architected mechanical metamaterials for energy absorption and advanced structural performance.
        </p>

        {/* Slim Section Sub-Index Bar for Academic Reviewers & Professors */}
        <nav className="research-subnav-bar" aria-label="Research Subsections">
          <div className="research-subnav-label">
            <Compass size={14} />
            <span>Jump to</span>
          </div>
          <div className="research-subnav-links">
            <button 
              onClick={() => jumpToSubSection('research-theses')}
              className="research-subnav-btn"
              title="Jump to B.Sc. and M.Sc. Theses"
            >
              <span>Thesis</span>
              <span className="subnav-count">{(researchData?.theses || []).length}</span>
            </button>
            <span className="subnav-sep">·</span>
            <button 
              onClick={() => jumpToSubSection('research-publications')}
              className="research-subnav-btn"
              title="Jump to Peer-Reviewed Conference Papers"
            >
              <span>Publications</span>
              <span className="subnav-count">{(researchData?.conferencePapers || []).length}</span>
            </button>
            <span className="subnav-sep">·</span>
            <button 
              onClick={() => jumpToSubSection('research-presentations')}
              className="research-subnav-btn"
              title="Jump to Conference Oral Technical Presentations"
            >
              <span>Presentations</span>
              <span className="subnav-count">{researchData?.conferencePresentations?.length || 0}</span>
            </button>
            <span className="subnav-sep">·</span>
            <button 
              onClick={() => jumpToSubSection('research-posters')}
              className="research-subnav-btn"
              title="Jump to Research Poster Presentation"
            >
              <span>Poster</span>
              <span className="subnav-count">{(researchData?.posterPresentations || []).length || 1}</span>
            </button>
            <span className="subnav-sep">·</span>
            <button 
              onClick={() => jumpToSubSection('research-ongoing')}
              className="research-subnav-btn"
              title="Jump to Ongoing Research Manuscripts"
            >
              <span>Ongoing Work</span>
              <span className="subnav-count">{researchData?.ongoingResearch?.length || 0}</span>
            </button>
            <span className="subnav-sep">·</span>
            <button 
              onClick={() => jumpToSubSection('research-projects')}
              className="research-subnav-btn"
              title="Jump to Technical Projects & Simulations"
            >
              <span>Projects</span>
              <span className="subnav-count">{getFilteredProjects().length}</span>
            </button>
          </div>
        </nav>
      </div>

      {/* =========================================================================
          1. THESIS (B.Sc. Completed & Defended, Current M.Sc. Ongoing)
          ========================================================================= */}
      <section id="research-theses" className="section-spacing" style={{ scrollMarginTop: '135px' }}>
        <div className="section-heading-row">
          <div>
            <div className="section-eyebrow">ACADEMIC DISSERTATIONS</div>
            <h2 className="section-main-heading">
              Thesis
            </h2>
          </div>
          <span className="section-count-badge">
            {(researchData?.theses || []).length} Theses (1 Defended, 1 Ongoing)
          </span>
        </div>

        <div className="pub-grid-2col">
          {(researchData?.theses || []).map((thesis, idx) => {
            const isExpanded = Boolean(expandedItems[thesis.id]);
            return (
              <article key={thesis.id} className={`pub-list-card ${isExpanded ? 'is-expanded' : ''}`}>
                <div className="pub-card-split-row">
                  {/* Left: Simulation Visual Thumbnail */}
                  <div 
                    className="award-card-media-side"
                    onClick={() => setActiveModalData({
                      title: thesis.title,
                      subtitle: `${thesis.degree} • ${thesis.institution} (${thesis.year})`,
                      imageUrl: thesis.imageUrl,
                      description: thesis.abstract
                    })}
                    title="Click to view full CFD simulation visual"
                  >
                    <img 
                      src={thesis.imageUrl} 
                      alt={thesis.title} 
                      className="award-side-img" 
                      loading="lazy" 
                    />
                    <div className="award-side-overlay">
                      <span className="award-thumb-zoom-badge">
                        <ExternalLink size={12} />
                        <span>Enlarge</span>
                      </span>
                    </div>
                  </div>

                  {/* Right: Thesis Scholarly Details */}
                  <div className="pub-card-main">
                    <div className="pub-header-row">
                      <div className="pub-meta-left">
                        <span className="pub-number">{thesis.number || `0${idx + 1}`}</span>
                        <span className={`pub-category-badge ${thesis.id === 'thesis-msc' ? 'manuscript' : 'thesis'}`}>
                          {thesis.categoryBadge}
                        </span>
                        <span className="pub-status-badge">{thesis.status}</span>
                      </div>
                      <span className="pub-year">{thesis.year}</span>
                    </div>

                    <h3 className="pub-title">
                      {thesis.title}
                    </h3>

                    <div className="pub-citation">
                      {Array.isArray(thesis.authors) ? (
                        <span className="pub-authors">
                          {thesis.authors.map((author, aIdx) => (
                            <span key={aIdx} className={author.includes('Zidan') ? 'pub-author highlight' : 'pub-author'}>
                              {author}{aIdx < thesis.authors.length - 1 ? ', ' : ''}
                            </span>
                          ))}
                        </span>
                      ) : (
                        <span className="pub-author highlight">{thesis.author}</span>
                      )}
                      <span className="pub-sep">•</span>
                      <span className="pub-venue">{thesis.institution}</span>
                    </div>

                    {thesis.supervisor && (
                      <div className="pub-supervisor-block" style={{ marginTop: '6px', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                        <div><strong style={{ color: 'var(--text-primary)' }}>Supervisor:</strong> {thesis.supervisor}</div>
                        {thesis.supervisorAffiliation && (
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '1px' }}>
                            {thesis.supervisorAffiliation}
                          </div>
                        )}
                      </div>
                    )}

                    <div className="pub-tags-row">
                      {(thesis.tags || []).map((tag, tIdx) => (
                        <span key={tIdx} className="pub-tag-pill">{tag}</span>
                      ))}
                    </div>

                    {/* Expand / Collapse Disclosure Button */}
                    <div className="pub-actions-row">
                      <button
                        onClick={() => toggleExpand(thesis.id)}
                        className="pub-expand-btn"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? 'Hide Abstract & Methodology' : 'Read Abstract, Methodology & Findings'}</span>
                        {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                      </button>

                      <button
                        onClick={() => setActiveModalData({
                          title: thesis.title,
                          subtitle: `${thesis.degree} • ${thesis.institution} (${thesis.year})`,
                          imageUrl: thesis.imageUrl,
                          description: thesis.abstract
                        })}
                        className="pub-visual-btn"
                      >
                        <ExternalLink size={13} />
                        <span>View CFD Visuals</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* EXPANDABLE DETAILS ACCORDION */}
                {isExpanded && (
                  <div className="pub-expanded-body">
                    <div className="pub-detail-section">
                      <h4 className="pub-detail-heading">Abstract</h4>
                      <p className="pub-abstract-text">
                        {thesis.abstract}
                      </p>
                    </div>

                    <div className="pub-detail-section">
                      <h4 className="pub-detail-heading">Numerical Methodology & Modeling</h4>
                      <ul className="pub-checklist">
                        {(thesis.methodology || []).map((m, mIdx) => (
                          <li key={mIdx}>
                            <CheckCircle2 size={15} color="var(--blue-royal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pub-detail-section">
                      <h4 className="pub-detail-heading">Key Research Findings & Milestones</h4>
                      <ul className="pub-checklist">
                        {(thesis.keyResults || []).map((r, rIdx) => (
                          <li key={rIdx}>
                            <CheckCircle2 size={15} color="var(--blue-royal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pub-detail-section">
                      <h4 className="pub-detail-heading">Simulation Artifact & Visuals (Click to Enlarge)</h4>
                      <div 
                        className="award-expanded-img-box"
                        onClick={() => setActiveModalData({
                          title: `${thesis.title} - CFD Simulation`,
                          subtitle: `${thesis.degree} • ${thesis.institution}`,
                          imageUrl: thesis.imageUrl,
                          description: thesis.abstract
                        })}
                        title="Click to view full simulation visual"
                      >
                        <img
                          src={thesis.imageUrl}
                          alt={`${thesis.title} Visual`}
                          className="award-expanded-img"
                        />
                        <div className="award-side-overlay">
                          <span className="award-thumb-zoom-badge">
                            <ExternalLink size={12} />
                            <span>View Full Simulation</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          2. PUBLICATIONS (Peer-Reviewed Conference Papers)
          ========================================================================= */}
      <section id="research-publications" className="section-spacing" style={{ scrollMarginTop: '135px' }}>
        <div className="section-heading-row">
          <div>
            <div className="section-eyebrow">SCHOLARLY WORKS</div>
            <h2 className="section-main-heading">
              Publications
            </h2>
          </div>
          <span className="section-count-badge">
            {(researchData?.conferencePapers || []).length} Publications
          </span>
        </div>

        <div className="pub-grid-2col">
          {/* --- Peer-Reviewed Conference Papers --- */}
          {(researchData?.conferencePapers || []).map((paper, idx) => {
            const paperIndex = idx + 1;
            const isExpanded = Boolean(expandedItems[paper.id]);
            const certImg = paper.certificateUrl || paper.imageUrl || '/images/conference_certificate_placeholder.svg';
            return (
              <article key={paper.id} className={`pub-list-card ${isExpanded ? 'is-expanded' : ''}`}>
                {/* Side-by-Side Row: Certificate Image on Left, Text & Details on Right */}
                <div className="pub-card-split-row">
                  {/* Left: Certificate Thumbnail / Placeholder */}
                  <div 
                    className="award-card-media-side"
                    onClick={() => setActiveModalData({
                      title: `${paper.title} - Conference Certificate`,
                      subtitle: `${paper.conference} • ${paper.date}`,
                      imageUrl: certImg,
                      description: paper.abstract
                    })}
                    title="Click to view full conference certificate"
                  >
                    <img 
                      src={certImg} 
                      alt={`${paper.title} Certificate`} 
                      className="award-side-img" 
                      loading="lazy" 
                    />
                    <div className="award-side-overlay">
                      <span className="award-thumb-zoom-badge">
                        <ExternalLink size={12} />
                        <span>Enlarge</span>
                      </span>
                    </div>
                  </div>

                  {/* Right: Text & Scholarly Details */}
                  <div className="pub-card-main">
                    <div className="pub-header-row">
                      <div className="pub-meta-left">
                        <span className="pub-number">0{paperIndex}</span>
                        <span className="pub-category-badge conference">Conference Paper</span>
                        <span className="pub-status-badge">{paper.status}</span>
                      </div>
                      <span className="pub-year">{paper.date}</span>
                    </div>

                    <h3 className="pub-title">
                      {paper.title}
                    </h3>

                    <div className="pub-citation">
                      <span className="pub-authors">
                        {paper.authors.map((author, aIdx) => (
                          <span key={aIdx} className={author.includes('Zidan') ? 'pub-author highlight' : 'pub-author'}>
                            {author}{aIdx < paper.authors.length - 1 ? ', ' : ''}
                          </span>
                        ))}
                      </span>
                      <span className="pub-sep">•</span>
                      <span className="pub-venue">{paper.conference}</span>
                    </div>

                    <div className="pub-tags-row">
                      {(paper.tags || paper.keywords || []).map((tag, tIdx) => (
                        <span key={tIdx} className="pub-tag-pill">{tag}</span>
                      ))}
                    </div>

                    {/* Expand / Collapse & Visual Disclosure Buttons */}
                    <div className="pub-actions-row">
                      <button
                        onClick={() => toggleExpand(paper.id)}
                        className="pub-expand-btn"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? 'Hide Abstract & Methods' : 'Read Abstract & Methodology'}</span>
                        {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                      </button>

                      <button
                        onClick={() => setActiveModalData({
                          title: `${paper.title} - Conference Certificate`,
                          subtitle: `${paper.conference} • ${paper.date}`,
                          imageUrl: certImg,
                          description: paper.abstract
                        })}
                        className="pub-visual-btn"
                      >
                        <ExternalLink size={13} />
                        <span>View Certificate</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* EXPANDABLE ABSTRACT & METHODOLOGY ACCORDION */}
                {isExpanded && (
                  <div className="pub-expanded-body">
                    <div className="pub-detail-section">
                      <h4 className="pub-detail-heading">Abstract</h4>
                      <p className="pub-abstract-text">
                        {paper.abstract}
                      </p>
                    </div>

                    <div className="pub-detail-section">
                      <h4 className="pub-detail-heading">Conference Proceedings Details</h4>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '8px', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                        <div>
                          <strong>Conference:</strong> {paper.conference}
                        </div>
                        <div>
                          <strong>Organizer:</strong> {paper.organizer || 'Academic Conference Committee'}
                        </div>
                        <div>
                          <strong>Location / Venue:</strong> {paper.location || 'International Conference'}
                        </div>
                        <div>
                          <strong>Session Date:</strong> {paper.date}
                        </div>
                        <div>
                          <strong>Current Status:</strong> {paper.status}
                        </div>
                      </div>
                    </div>

                    <div className="pub-detail-section">
                      <h4 className="pub-detail-heading">Conference Certificate &amp; Author Credential (Click to Enlarge)</h4>
                      <div 
                        className="award-expanded-img-box"
                        onClick={() => setActiveModalData({
                          title: `${paper.title} - Conference Certificate`,
                          subtitle: `${paper.conference} • ${paper.date}`,
                          imageUrl: certImg,
                          description: paper.abstract
                        })}
                        title="Click to view full certificate"
                      >
                        <img
                          src={certImg}
                          alt={`${paper.title} Certificate`}
                          className="award-expanded-img"
                        />
                        <div className="award-side-overlay">
                          <span className="award-thumb-zoom-badge">
                            <ExternalLink size={12} />
                            <span>View Full Certificate</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          2. ORAL TECHNICAL PRESENTATIONS (Conference Talks & Podium Symposia)
          ========================================================================= */}
      <section id="research-presentations" className="section-spacing" style={{ scrollMarginTop: '135px' }}>
        <div className="section-heading-row">
          <div>
            <div className="section-eyebrow">CONFERENCE TALKS</div>
            <h2 className="section-main-heading">
              Oral Technical Presentations
            </h2>
          </div>
          <span className="section-count-badge">
            {(researchData?.conferencePresentations?.length || 0)} Presentations
          </span>
        </div>

        <div className="pub-grid-2col">
          {(researchData?.conferencePresentations || []).map((pres, idx) => {
            const presIndex = idx + 1;
            const isExpanded = Boolean(expandedItems[pres.id]);
            const presImg = pres.imageUrl || pres.certificateUrl || '/images/presentation_placeholder.jpg';
            return (
              <article key={pres.id} className={`pub-list-card ${isExpanded ? 'is-expanded' : ''}`}>
                {/* Side-by-Side Row: Image on the Left, Text on the Right */}
                <div className="pub-card-split-row">
                  {/* Left: Full-Visible Visual Thumbnail */}
                  <div 
                    className="award-card-media-side"
                    onClick={() => setActiveModalData({
                      title: pres.title,
                      subtitle: `${pres.event} • ${pres.venue} (${pres.date})`,
                      imageUrl: presImg,
                      description: pres.description
                    })}
                    title="Click to view full presentation artifact"
                  >
                    <img 
                      src={presImg} 
                      alt={pres.title} 
                      className="award-side-img" 
                      loading="lazy" 
                    />
                    <div className="award-side-overlay">
                      <span className="award-thumb-zoom-badge">
                        <ExternalLink size={12} />
                        <span>Enlarge</span>
                      </span>
                    </div>
                  </div>

                  {/* Right: Text & Details Content */}
                  <div className="pub-card-main">
                    <div className="pub-header-row">
                      <div className="pub-meta-left">
                        <span className="pub-number">0{presIndex}</span>
                        <span className="pub-category-badge presentation">
                          <Presentation size={12} style={{ display: 'inline', marginRight: 4 }} />
                          {pres.type}
                        </span>
                        <span className="pub-status-badge">Live Podium</span>
                      </div>
                      <span className="pub-year">{pres.date}</span>
                    </div>

                    <h3 className="pub-title">
                      {pres.title}
                    </h3>

                    <div className="pub-citation">
                      <span className="pub-venue">{pres.event}</span>
                      <span className="pub-sep">•</span>
                      <span className="pub-location">{pres.venue}</span>
                    </div>

                    <div className="pub-tags-row">
                      {(pres.tags || []).map((tag, tIdx) => (
                        <span key={tIdx} className="pub-tag-pill">{tag}</span>
                      ))}
                    </div>

                    {/* Expand / Collapse Disclosure Button */}
                    <div className="pub-actions-row">
                      <button
                        onClick={() => toggleExpand(pres.id)}
                        className="pub-expand-btn"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? 'Hide Abstract & Details' : 'Read Abstract & View Credentials'}</span>
                        {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                      </button>

                      <button
                        onClick={() => setActiveModalData({
                          title: pres.title,
                          subtitle: `${pres.event} (${pres.date})`,
                          imageUrl: pres.certificateUrl || presImg,
                          description: pres.description
                        })}
                        className="pub-visual-btn"
                      >
                        <ExternalLink size={13} />
                        <span>View Presentation Visuals</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* EXPANDABLE PRESENTATION ABSTRACT & CERTIFICATE */}
                {isExpanded && (
                  <div className="pub-expanded-body">
                    <div className="pub-detail-section">
                      <h4 className="pub-detail-heading">Presentation Summary</h4>
                      <p className="pub-abstract-text">
                        {pres.description}
                      </p>
                    </div>

                    <div className="pub-detail-section">
                      <h4 className="pub-detail-heading">Presentation Stage & Artifact (Click to Enlarge)</h4>
                      <div 
                        className="award-expanded-img-box"
                        onClick={() => setActiveModalData({
                          title: `${pres.title} - Presentation Artifact`,
                          subtitle: `${pres.event} • ${pres.venue} (${pres.date})`,
                          imageUrl: presImg,
                          description: pres.description
                        })}
                        title="Click to view full image"
                      >
                        <img
                          src={presImg}
                          alt={pres.title}
                          className="award-expanded-img"
                        />
                        <div className="award-side-overlay">
                          <span className="award-thumb-zoom-badge">
                            <ExternalLink size={12} />
                            <span>View Full Image</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {pres.certificateUrl && pres.certificateUrl !== presImg && (
                      <div className="pub-detail-section">
                        <h4 className="pub-detail-heading">Official Presentation Credential (Click to Enlarge)</h4>
                        <div 
                          className="award-expanded-img-box"
                          onClick={() => setActiveModalData({
                            title: `${pres.title} - Official Certificate`,
                            subtitle: `${pres.event} (${pres.date})`,
                            imageUrl: pres.certificateUrl,
                            description: pres.description
                          })}
                          title="Click to view full certificate"
                        >
                          <img
                            src={pres.certificateUrl}
                            alt={`${pres.title} Certificate`}
                            className="award-expanded-img"
                          />
                          <div className="award-side-overlay">
                            <span className="award-thumb-zoom-badge">
                              <ExternalLink size={12} />
                              <span>View Full Certificate</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          3. POSTER PRESENTATIONS (Scholarly Symposia & Technical Exhibits)
          ========================================================================= */}
      <section id="research-posters" className="section-spacing" style={{ scrollMarginTop: '135px' }}>
        <div className="section-heading-row">
          <div>
            <div className="section-eyebrow">RESEARCH SYMPOSIA</div>
            <h2 className="section-main-heading">
              Poster Presentations
            </h2>
          </div>
          <span className="section-count-badge">
            {(researchData?.posterPresentations?.length || 1)} Presentation
          </span>
        </div>

        <div className="pub-grid-2col">
          {(researchData?.posterPresentations || []).map((poster, idx) => {
            const posterIndex = idx + 1;
            const isExpanded = Boolean(expandedItems[poster.id]);
            const posterImg = poster.imageUrl || poster.certificateUrl || '/images/presentation_placeholder.jpg';
            return (
              <article key={poster.id} className={`pub-list-card ${isExpanded ? 'is-expanded' : ''}`}>
                <div className="pub-card-split-row">
                  {/* Left: Full-Visible Visual Thumbnail */}
                  <div 
                    className="award-card-media-side"
                    onClick={() => setActiveModalData({
                      title: poster.title,
                      subtitle: `${poster.event} • ${poster.venue} (${poster.date})`,
                      imageUrl: posterImg,
                      description: poster.description
                    })}
                    title="Click to view full poster artifact"
                  >
                    <img 
                      src={posterImg} 
                      alt={poster.title} 
                      className="award-side-img" 
                      loading="lazy" 
                    />
                    <div className="award-side-overlay">
                      <span className="award-thumb-zoom-badge">
                        <ExternalLink size={12} />
                        <span>Enlarge</span>
                      </span>
                    </div>
                  </div>

                  {/* Right: Text & Details Content */}
                  <div className="pub-card-main">
                    <div className="pub-header-row">
                      <div className="pub-meta-left">
                        <span className="pub-number">0{posterIndex}</span>
                        <span className="pub-category-badge presentation">
                          <Presentation size={12} style={{ display: 'inline', marginRight: 4 }} />
                          {poster.type || 'Poster Presentation'}
                        </span>
                        {poster.statusLabel && (
                          <span className="pub-status-badge">{poster.statusLabel}</span>
                        )}
                      </div>
                      <span className="pub-year">{poster.date}</span>
                    </div>

                    <h3 className="pub-title">
                      {poster.title}
                    </h3>

                    <div className="pub-citation">
                      <span className="pub-venue">{poster.event}</span>
                      <span className="pub-sep">•</span>
                      <span className="pub-location">{poster.venue}</span>
                    </div>

                    <div className="pub-tags-row">
                      {(poster.tags || []).map((tag, tIdx) => (
                        <span key={tIdx} className="pub-tag-pill">{tag}</span>
                      ))}
                    </div>

                    {/* Expand / Collapse Disclosure Button */}
                    <div className="pub-actions-row">
                      <button
                        onClick={() => toggleExpand(poster.id)}
                        className="pub-expand-btn"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? 'Hide Abstract & Details' : 'Read Abstract & View Credentials'}</span>
                        {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                      </button>

                      <button
                        onClick={() => setActiveModalData({
                          title: poster.title,
                          subtitle: `${poster.event} (${poster.date})`,
                          imageUrl: poster.certificateUrl || posterImg,
                          description: poster.description
                        })}
                        className="pub-visual-btn"
                      >
                        <ExternalLink size={13} />
                        <span>View Poster Visuals</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* EXPANDABLE POSTER ABSTRACT & CERTIFICATE */}
                {isExpanded && (
                  <div className="pub-expanded-body">
                    <div className="pub-detail-section">
                      <h4 className="pub-detail-heading">Poster Presentation Summary</h4>
                      <p className="pub-abstract-text">
                        {poster.description}
                      </p>
                    </div>

                    <div className="pub-detail-section">
                      <h4 className="pub-detail-heading">Poster Artifact & Certificate (Click to Enlarge)</h4>
                      <div 
                        className="award-expanded-img-box"
                        onClick={() => setActiveModalData({
                          title: `${poster.title} - Poster Artifact`,
                          subtitle: `${poster.event} (${poster.date})`,
                          imageUrl: posterImg,
                          description: poster.description
                        })}
                        title="Click to view full image"
                      >
                        <img 
                          src={posterImg} 
                          alt={poster.title} 
                          className="award-expanded-img" 
                        />
                        <div className="award-side-overlay">
                          <span className="award-thumb-zoom-badge">
                            <ExternalLink size={12} />
                            <span>View Full Image</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          4. ONGOING WORK (Manuscripts in Preparation & Working Papers)
          ========================================================================= */}
      <section id="research-ongoing" className="section-spacing" style={{ scrollMarginTop: '135px' }}>
        <div className="section-heading-row">
          <div>
            <div className="section-eyebrow">CURRENT INITIATIVES</div>
            <h2 className="section-main-heading">
              Ongoing Work & Manuscripts in Preparation
            </h2>
          </div>
          <span className="section-count-badge">
            {(researchData?.ongoingResearch?.length || 0)} Manuscripts
          </span>
        </div>

        <div className="publication-list-container">
          {(researchData?.ongoingResearch || []).map((work) => {
            const isExpanded = Boolean(expandedItems[work.id]);
            return (
              <article key={work.id} className={`pub-list-card ongoing ${isExpanded ? 'is-expanded' : ''}`}>
                <div className="pub-card-main">
                  <div className="pub-header-row">
                    <div className="pub-meta-left">
                      <span className="pub-category-badge manuscript">{work.badge || work.type || 'Review paper'}</span>
                      <span className="pub-status-badge">{work.status}</span>
                    </div>
                    <span className="pub-year">In Review</span>
                  </div>

                  <h3 className="pub-title">
                    {work.title}
                  </h3>

                  <div className="pub-citation">
                    <span className="pub-authors">
                      {work.authors.map((author, aIdx) => (
                        <span key={aIdx} className={author.includes('Zidan') ? 'pub-author highlight' : 'pub-author'}>
                          {author}{aIdx < work.authors.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </span>
                    <span className="pub-sep">•</span>
                    <span className="pub-venue">{work.institution}</span>
                  </div>

                  {work.supervisor && (
                    <div className="pub-supervisor-block" style={{ marginTop: '8px', padding: '10px 14px', background: 'rgba(59, 130, 246, 0.05)', borderRadius: '8px', border: '1px solid rgba(59, 130, 246, 0.16)' }}>
                      <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                        <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--blue-royal)', fontWeight: 700, display: 'block', marginBottom: '2px' }}>Supervisor</span>
                        <strong style={{ color: 'var(--text-primary)', fontSize: '0.94rem' }}>{work.supervisor}</strong>
                      </div>
                      {work.supervisorAffiliation && (
                        <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '3px', lineHeight: 1.45 }}>
                          {work.supervisorAffiliation}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="pub-tags-row" style={{ marginTop: '10px' }}>
                    {work.deliverables.map((del, dIdx) => (
                      <span key={dIdx} className="pub-tag-pill">{del}</span>
                    ))}
                  </div>

                  {/* Expand / Collapse Disclosure Button */}
                  <div className="pub-actions-row">
                    <button
                      onClick={() => toggleExpand(work.id)}
                      className="pub-expand-btn"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'Hide Abstract & Scope' : 'Read Scope & Technical Objectives'}</span>
                      {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </button>
                  </div>
                </div>

                {/* EXPANDABLE MANUSCRIPT DETAILS */}
                {isExpanded && (
                  <div className="pub-expanded-body">
                    <div className="pub-detail-section">
                      <h4 className="pub-detail-heading">Research Overview</h4>
                      <p className="pub-abstract-text">
                        {work.desc}
                      </p>
                    </div>

                    <div className="pub-detail-section">
                      <h4 className="pub-detail-heading">Key Methodologies & Scope</h4>
                      <ul className="pub-checklist">
                        {work.deliverables.map((del, dIdx) => (
                          <li key={dIdx}>
                            <CheckCircle2 size={15} color="var(--blue-royal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          4. PROJECTS (Structured Responsive Grid — No Carousels)
          ========================================================================= */}
      <section id="research-projects" className="section-spacing" style={{ scrollMarginTop: '135px' }}>
        <div className="section-heading-row">
          <div>
            <div className="section-eyebrow">PORTFOLIO</div>
            <h2 className="section-main-heading">
              Project Repository & Technical Simulations
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

        {/* Responsive Grid Layout for Projects */}
        <div className="projects-grid">
          {getFilteredProjects().map((project) => {
            const isProjectExpanded = Boolean(expandedItems[project.id]);
            return (
              <div key={project.id} className="project-card">
                <div className="project-thumb-wrapper">
                  <img src={project.imageUrl} alt={project.title} className="project-thumb" />
                  <span className="project-field-badge">{project.field}</span>
                </div>

                <div className="project-body">
                  <div className="project-meta">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="project-title">
                    {project.title}
                  </h3>

                  <p className="project-desc">
                    {project.description}
                  </p>

                  <div className="project-tools">
                    {(project.tools || []).map((tool, i) => (
                      <span key={i} className="tool-chip">{tool}</span>
                    ))}
                  </div>

                  <div className="project-card-footer">
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="project-action-btn"
                      aria-expanded={isProjectExpanded}
                    >
                      <span>{isProjectExpanded ? 'Hide Specifications' : 'Technical Specifications'}</span>
                      {isProjectExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>

                    <button
                      onClick={() => setActiveModalData({
                        title: project.title,
                        subtitle: `${project.category} (${project.year}) • Tools: ${(project.tools || []).join(', ')}`,
                        imageUrl: project.imageUrl,
                        description: project.description
                      })}
                      className="project-modal-btn"
                    >
                      <ExternalLink size={14} />
                      <span>Preview</span>
                    </button>
                  </div>

                  {/* EXPANDABLE SPECIFICATIONS */}
                  {isProjectExpanded && (
                    <div className="project-specs-expanded">
                      <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--blue-royal)', marginBottom: '4px' }}>
                        Simulation & Modeling Scope
                      </div>
                      <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                        High-resolution spatial discretization, turbulence modeling verification, physical boundary conditions, and validation against empirical benchmark literature.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Zero-crop Responsive Image Lightbox Modal or Interactive Modal */}
      {activeModalData && activeModalData.imageUrl ? (
        <ImageLightboxModal
          isOpen={Boolean(activeModalData)}
          onClose={() => setActiveModalData(null)}
          title={activeModalData.title}
          subtitle={activeModalData.subtitle}
          imageUrl={activeModalData.imageUrl}
          description={activeModalData.description}
        />
      ) : activeModalData ? (
        <InteractiveModal
          isOpen={Boolean(activeModalData)}
          onClose={() => setActiveModalData(null)}
          title={activeModalData.title}
          subtitle={activeModalData.subtitle}
        >
          {activeModalData.content}
        </InteractiveModal>
      ) : null}
    </div>
  );
};
