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
  FileText
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
      </div>

      {/* =========================================================================
          1. PUBLICATIONS (Clean, Readable List — No Carousels)
          ========================================================================= */}
      <section className="section-spacing">
        <div className="section-heading-row">
          <div>
            <div className="section-eyebrow">SCHOLARLY WORKS</div>
            <h2 className="section-main-heading">
              Publications & Conference Proceedings
            </h2>
          </div>
          <span className="section-count-badge">
            {1 + researchData.conferencePapers.length + researchData.conferencePresentations.length + researchData.ongoingResearch.length} Entries
          </span>
        </div>

        <div className="publication-list-container">
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
                      <h4 className="pub-detail-heading">Computational Setup & Methodology</h4>
                      <ul className="pub-checklist">
                        {thesis.methodology.map((m, mIdx) => (
                          <li key={mIdx}>
                            <CheckCircle2 size={15} className="pub-check-icon" />
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pub-detail-section">
                      <h4 className="pub-detail-heading">Key Validated Findings</h4>
                      <ul className="pub-checklist">
                        {thesis.keyResults.map((r, rIdx) => (
                          <li key={rIdx}>
                            <CheckCircle2 size={15} className="pub-check-icon" />
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

          {/* --- Items 2 to 5: Conference Papers & Proceedings --- */}
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

                  <div className="pub-organizer-info">
                    <strong>Organizer:</strong> {paper.organizer} ({paper.location})
                  </div>

                  <div className="pub-tags-row">
                    {paper.keywords.map((kw, kwIdx) => (
                      <span key={kwIdx} className="pub-tag-pill">{kw}</span>
                    ))}
                  </div>

                  {/* Actions Row */}
                  <div className="pub-actions-row">
                    <button
                      onClick={() => toggleExpand(paper.id)}
                      className="pub-expand-btn"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'Hide Abstract & Details' : 'Read Abstract & Methodology'}</span>
                      {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </button>

                    {paper.imageUrl && (
                      <button
                        onClick={() => setActiveModalData({
                          title: paper.title,
                          subtitle: `${paper.conference} • Official Certificate`,
                          content: (
                            <div style={{ textAlign: 'center' }}>
                              <img
                                src={paper.imageUrl}
                                alt={`${paper.title} Certificate`}
                                style={{ width: '100%', maxHeight: '520px', objectFit: 'contain', borderRadius: '12px' }}
                              />
                            </div>
                          )
                        })}
                        className="pub-visual-btn"
                      >
                        <Award size={14} />
                        <span>View Official Certificate</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* EXPANDABLE DETAILS */}
                {isExpanded && (
                  <div className="pub-expanded-body">
                    <div className="pub-detail-section">
                      <h4 className="pub-detail-heading">Abstract</h4>
                      <p className="pub-abstract-text">
                        {paper.abstract}
                      </p>
                    </div>

                    <div className="pub-detail-section">
                      <h4 className="pub-detail-heading">Conference Details & Presentation</h4>
                      <div className="pub-meta-grid">
                        <div>
                          <strong>Conference Venue:</strong> {paper.location}
                        </div>
                        <div>
                          <strong>Organizing Institution:</strong> {paper.organizer}
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

          {/* --- Items: Conference Presentations & Talks --- */}
          {researchData.conferencePresentations.map((pres, idx) => {
            const presIndex = idx + 2 + researchData.conferencePapers.length;
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

                  {/* Actions Row */}
                  <div className="pub-actions-row">
                    {pres.certificateUrl && (
                      <button
                        onClick={() => toggleExpand(pres.id)}
                        className="pub-expand-btn"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? 'Hide Presentation Certificate' : 'View Presentation Certificate & Details'}</span>
                        {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                      </button>
                    )}

                    {pres.certificateUrl && (
                      <button
                        onClick={() => setActiveModalData({
                          title: pres.title,
                          subtitle: `${pres.event} • Official Certificate`,
                          content: (
                            <div style={{ textAlign: 'center' }}>
                              <img
                                src={pres.certificateUrl}
                                alt={`${pres.title} Certificate`}
                                style={{ width: '100%', maxHeight: '520px', objectFit: 'contain', borderRadius: '12px' }}
                              />
                            </div>
                          )
                        })}
                        className="pub-visual-btn"
                      >
                        <Award size={14} />
                        <span>Open Certificate Fullscreen</span>
                      </button>
                    )}
                  </div>
                </div>

                {isExpanded && pres.certificateUrl && (
                  <div className="pub-expanded-body">
                    <div className="pub-cert-preview-box">
                      <img
                        src={pres.certificateUrl}
                        alt={`${pres.title} Certificate`}
                        className="pub-cert-preview-img"
                      />
                    </div>
                  </div>
                )}
              </article>
            );
          })}

          {/* --- Ongoing Research Manuscripts --- */}
          {researchData.ongoingResearch.map((work) => {
            const isExpanded = Boolean(expandedItems[work.id]);
            return (
              <article key={work.id} className={`pub-list-card ongoing ${isExpanded ? 'is-expanded' : ''}`}>
                <div className="pub-card-main">
                  <div className="pub-header-row">
                    <div className="pub-meta-left">
                      <span className="pub-category-badge ongoing">Ongoing Manuscript</span>
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
                    <span className="pub-sep">•</span>
                    <span className="pub-venue">Supervisor: {work.supervisor} ({work.supervisorAffiliation})</span>
                  </div>

                  <div className="pub-actions-row">
                    <button
                      onClick={() => toggleExpand(work.id)}
                      className="pub-expand-btn"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'Hide Manuscript Overview & Deliverables' : 'Read Overview & Manuscript Deliverables'}</span>
                      {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </button>
                  </div>
                </div>

                {isExpanded && (
                  <div className="pub-expanded-body">
                    <div className="pub-detail-section">
                      <h4 className="pub-detail-heading">Research Overview</h4>
                      <p className="pub-abstract-text">{work.overview}</p>
                    </div>

                    <div className="pub-detail-section">
                      <h4 className="pub-detail-heading">Core Manuscript Deliverables</h4>
                      <ul className="pub-checklist">
                        {work.deliverables.map((del, dIdx) => (
                          <li key={dIdx}>
                            <CheckCircle2 size={15} className="pub-check-icon" />
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
          2. PROJECTS (Structured Responsive Grid — No Carousels)
          ========================================================================= */}
      <section className="section-spacing">
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
                        subtitle: `${project.field} • ${project.category} (${project.year})`,
                        content: (
                          <div>
                            <div style={{ marginBottom: '16px', borderRadius: '12px', overflow: 'hidden' }}>
                              <img src={project.imageUrl} alt={project.title} style={{ width: '100%', maxHeight: '340px', objectFit: 'cover' }} />
                            </div>
                            <p style={{ lineHeight: '1.7', marginBottom: '16px' }}>{project.description}</p>
                            <div style={{ background: 'var(--bg-card-subtle)', padding: '16px', borderRadius: '12px', marginBottom: '16px', border: '1px solid var(--border-subtle)' }}>
                              <strong style={{ color: 'var(--blue-royal)' }}>Key Quantitative Metrics: </strong>
                              <p style={{ marginTop: '4px' }}>{project.metrics}</p>
                            </div>
                            <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>Simulation & Computational Tools</h4>
                            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                              {project.tools.map((t, i) => (
                                <span key={i} className="tool-chip" style={{ padding: '6px 12px' }}>{t}</span>
                              ))}
                            </div>
                          </div>
                        )
                      })}
                      className="project-inspect-btn"
                      title="Inspect in full modal"
                    >
                      <ArrowUpRight size={14} />
                    </button>
                  </div>

                  {/* Inline Expandable Specifications */}
                  {isProjectExpanded && (
                    <div className="project-specs-expanded">
                      <div className="project-spec-item">
                        <strong className="project-spec-label">Key Metrics:</strong>
                        <p className="project-spec-value">{project.metrics}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Global Interactive Modal for Fullscreen Visuals */}
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
