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
import { InteractiveModal } from '../components/InteractiveModal';

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
    if (selectedField === 'All') {
      return [
        ...researchData.projectsByField["Fluid Mechanics"],
        ...researchData.projectsByField["Materials Science"]
      ];
    }
    return researchData.projectsByField[selectedField] || [];
  };

  // Smooth jump to subsection with fixed header offset
  const jumpToSubSection = (subId) => {
    const el = document.getElementById(subId);
    if (el) {
      const headerOffset = 135;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
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

        <div className="interests-pills-wrap" style={{ marginTop: '18px' }}>
          {researchData.interests.map((interest, idx) => (
            <span key={idx} className="interest-capsule">
              {interest}
            </span>
          ))}
        </div>

        {/* Slim Section Sub-Index Bar for Academic Reviewers & Professors */}
        <nav className="research-subnav-bar" aria-label="Research Subsections">
          <div className="research-subnav-label">
            <Compass size={14} />
            <span>Jump to</span>
          </div>
          <div className="research-subnav-links">
            <button 
              onClick={() => jumpToSubSection('research-publications')}
              className="research-subnav-btn"
              title="Jump to Peer-Reviewed Publications & Thesis"
            >
              <span>Publications</span>
              <span className="subnav-count">{1 + researchData.conferencePapers.length}</span>
            </button>
            <span className="subnav-sep">·</span>
            <button 
              onClick={() => jumpToSubSection('research-presentations')}
              className="research-subnav-btn"
              title="Jump to Conference Podium Presentations"
            >
              <span>Presentations</span>
              <span className="subnav-count">{researchData.conferencePresentations.length}</span>
            </button>
            <span className="subnav-sep">·</span>
            <button 
              onClick={() => jumpToSubSection('research-ongoing')}
              className="research-subnav-btn"
              title="Jump to Ongoing Research Manuscripts"
            >
              <span>Ongoing Work</span>
              <span className="subnav-count">{researchData.ongoingResearch.length}</span>
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
          1. PUBLICATIONS (Thesis & Peer-Reviewed Conference Papers)
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
            {1 + researchData.conferencePapers.length} Publications
          </span>
        </div>

        <div className="pub-grid-2col">
          {/* --- Item 1: Undergraduate Bachelor Thesis --- */}
          {(() => {
            const thesis = researchData.undergradThesis;
            const isExpanded = Boolean(expandedItems['thesis']);
            return (
              <article className={`pub-list-card ${isExpanded ? 'is-expanded' : ''}`}>
                <div className="pub-card-main">
                  <div className="pub-header-row">
                    <div className="pub-meta-left">
                      <span className="pub-number">01</span>
                      <span className="pub-category-badge thesis">Bachelor Thesis</span>
                      <span className="pub-status-badge">Completed & Defended</span>
                    </div>
                    <span className="pub-year">{thesis.year}</span>
                  </div>

                  <h3 className="pub-title">
                    {thesis.title}
                  </h3>

                  <div className="pub-citation">
                    <span className="pub-author highlight">Md. Jubair Uddin Zidan</span>
                    <span className="pub-sep">•</span>
                    <span className="pub-venue">{thesis.institution}</span>
                  </div>

                  <div className="pub-tags-row">
                    {['Aerodynamics & CFD', 'Ground Effect', 'Venturi Tunnel', 'ANSYS Fluent', 'FIA Regulations'].map((tag, tIdx) => (
                      <span key={tIdx} className="pub-tag-pill">{tag}</span>
                    ))}
                  </div>

                  {/* Expand / Collapse Disclosure Button */}
                  <div className="pub-actions-row">
                    <button
                      onClick={() => toggleExpand('thesis')}
                      className="pub-expand-btn"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'Hide Abstract & Methodology' : 'Read Abstract, Methodology & Findings'}</span>
                      {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </button>

                    <button
                      onClick={() => setActiveModalData({
                        title: thesis.title,
                        subtitle: `${thesis.type} • ${thesis.institution} (${thesis.year})`,
                        content: (
                          <div style={{ textAlign: 'center' }}>
                            <img
                              src={thesis.imageUrl}
                              alt={thesis.title}
                              style={{ width: '100%', maxHeight: '480px', objectFit: 'contain', borderRadius: '12px' }}
                            />
                            <p style={{ marginTop: '12px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                              High-fidelity 3D aerodynamic domain with polyhedral unstructured meshing and underfloor pressure mapping.
                            </p>
                          </div>
                        )
                      })}
                      className="pub-visual-btn"
                    >
                      <ExternalLink size={13} />
                      <span>View CFD Simulation Visuals</span>
                    </button>
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
                        {thesis.methodology.map((m, mIdx) => (
                          <li key={mIdx}>
                            <CheckCircle2 size={15} color="var(--blue-royal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pub-detail-section">
                      <h4 className="pub-detail-heading">Key Aerodynamic Findings</h4>
                      <ul className="pub-checklist">
                        {thesis.keyResults.map((r, rIdx) => (
                          <li key={rIdx}>
                            <CheckCircle2 size={15} color="var(--blue-royal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </article>
            );
          })()}

          {/* --- Items 2 to 3: Peer-Reviewed Conference Papers --- */}
          {researchData.conferencePapers.map((paper, idx) => {
            const paperIndex = idx + 2;
            const isExpanded = Boolean(expandedItems[paper.id]);
            return (
              <article key={paper.id} className={`pub-list-card ${isExpanded ? 'is-expanded' : ''}`}>
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

                  {/* Expand / Collapse Disclosure Button */}
                  <div className="pub-actions-row">
                    <button
                      onClick={() => toggleExpand(paper.id)}
                      className="pub-expand-btn"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'Hide Abstract & Methods' : 'Read Abstract & Methodology'}</span>
                      {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </button>

                    {paper.imageUrl && (
                      <button
                        onClick={() => setActiveModalData({
                          title: paper.title,
                          subtitle: `${paper.conference} • ${paper.date}`,
                          content: (
                            <div style={{ textAlign: 'center' }}>
                              <img
                                src={paper.imageUrl}
                                alt={paper.title}
                                style={{ width: '100%', maxHeight: '480px', objectFit: 'contain', borderRadius: '12px' }}
                              />
                              <p style={{ marginTop: '12px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                                {paper.abstract.slice(0, 220)}...
                              </p>
                            </div>
                          )
                        })}
                        className="pub-visual-btn"
                      >
                        <ExternalLink size={13} />
                        <span>View Figures & Simulation</span>
                      </button>
                    )}
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
                          <strong>Location / Venue:</strong> {paper.venue || 'International Conference'}
                        </div>
                        <div>
                          <strong>Session Date:</strong> {paper.date}
                        </div>
                        <div>
                          <strong>Current Status:</strong> {paper.status}
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
          2. PRESENTATIONS (Conference Talks & Podium Symposia)
          ========================================================================= */}
      <section id="research-presentations" className="section-spacing" style={{ scrollMarginTop: '135px' }}>
        <div className="section-heading-row">
          <div>
            <div className="section-eyebrow">CONFERENCE TALKS</div>
            <h2 className="section-main-heading">
              Presentations
            </h2>
          </div>
          <span className="section-count-badge">
            {researchData.conferencePresentations.length} Presentations
          </span>
        </div>

        <div className="pub-grid-2col">
          {researchData.conferencePresentations.map((pres, idx) => {
            const presIndex = idx + 1;
            const isExpanded = Boolean(expandedItems[pres.id]);
            return (
              <article key={pres.id} className={`pub-list-card ${isExpanded ? 'is-expanded' : ''}`}>
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
                      <span>{isExpanded ? 'Hide Abstract & Certificate' : 'Read Abstract & View Certificate'}</span>
                      {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </button>

                    {pres.certificateUrl && (
                      <button
                        onClick={() => setActiveModalData({
                          title: pres.title,
                          subtitle: `${pres.event} (${pres.date})`,
                          content: (
                            <div style={{ textAlign: 'center' }}>
                              <img
                                src={pres.certificateUrl}
                                alt={`${pres.title} Certificate`}
                                style={{ width: '100%', maxHeight: '480px', objectFit: 'contain', borderRadius: '12px' }}
                              />
                              <p style={{ marginTop: '12px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                                Official Certificate of Oral Presentation conferred by {pres.event}.
                              </p>
                            </div>
                          )
                        })}
                        className="pub-visual-btn"
                      >
                        <ExternalLink size={13} />
                        <span>Enlarge Certificate</span>
                      </button>
                    )}
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

                    {pres.certificateUrl && (
                      <div className="pub-detail-section">
                        <h4 className="pub-detail-heading">Presentation Credential</h4>
                        <div style={{ maxWidth: '420px', borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--border-subtle)', marginTop: '6px' }}>
                          <img
                            src={pres.certificateUrl}
                            alt={`${pres.title} Certificate`}
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                          />
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
          3. ONGOING WORK (Manuscripts in Preparation & Working Papers)
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
            {researchData.ongoingResearch.length} Manuscripts
          </span>
        </div>

        <div className="publication-list-container">
          {researchData.ongoingResearch.map((work) => {
            const isExpanded = Boolean(expandedItems[work.id]);
            return (
              <article key={work.id} className={`pub-list-card ongoing ${isExpanded ? 'is-expanded' : ''}`}>
                <div className="pub-card-main">
                  <div className="pub-header-row">
                    <div className="pub-meta-left">
                      <span className="pub-category-badge manuscript">Ongoing Manuscript</span>
                      <span className="pub-status-badge">{work.badge}: {work.status}</span>
                    </div>
                    <span className="pub-year">In Preparation</span>
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
                  </div>

                  <div className="pub-tags-row">
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
              <div key={project.id} className="project-card card-interactive">
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
                    {project.tools.map((tool, i) => (
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
                        subtitle: `${project.category} (${project.year}) • Tools: ${project.tools.join(', ')}`,
                        content: (
                          <div style={{ textAlign: 'center' }}>
                            <img
                              src={project.imageUrl}
                              alt={project.title}
                              style={{ width: '100%', maxHeight: '480px', objectFit: 'contain', borderRadius: '12px' }}
                            />
                            <p style={{ marginTop: '12px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                              {project.description}
                            </p>
                          </div>
                        )
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

      {/* Global Interactive Modal for full-size inspection */}
      {activeModalData && (
        <InteractiveModal
          isOpen={Boolean(activeModalData)}
          onClose={() => setActiveModalData(null)}
          title={activeModalData.title}
          subtitle={activeModalData.subtitle}
        >
          {activeModalData.content}
        </InteractiveModal>
      )}
    </div>
  );
};
