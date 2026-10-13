import React, { useState } from 'react';
import { 
  Trophy, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  Award, 
  Sparkles, 
  FileBadge 
} from 'lucide-react';
import { awardsData } from '../data/portfolioData';
import { InteractiveModal } from '../components/InteractiveModal';

export const AwardsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedAwards, setExpandedAwards] = useState({});
  const [activeModalData, setActiveModalData] = useState(null);

  const toggleAward = (id) => {
    setExpandedAwards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const categories = [
    { id: 'all', label: 'All Honors' },
    { id: 'competitions', label: 'Competitions & Achievements' },
    { id: 'posters', label: 'Poster Presentations' },
    { id: 'hult', label: 'Hult Prize Activities' },
    { id: 'events', label: 'Event Organization' },
    { id: 'certs', label: 'Course Certifications' }
  ];

  return (
    <div className="container animate-fade-in">
      {/* Editorial Page Header */}
      <div className="page-intro">
        <h1 className="page-title">
          Awards & <span className="header-badge">Certificates</span>
        </h1>
        <p className="page-subtitle">
          National engineering innovation competitions, scholarly poster symposia, global social entrepreneurship summits, and accredited professional engineering certifications.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* =========================================================================
          1. COMPETITIONS & ACHIEVEMENTS
          ========================================================================= */}
      {(activeCategory === 'all' || activeCategory === 'competitions') && (
        <section className="section-spacing">
          <div className="section-heading-row">
            <div>
              <div className="section-eyebrow">HONORS</div>
              <h2 className="section-main-heading">
                Competitions & Achievements
              </h2>
            </div>
            <span className="section-count-badge">
              {(awardsData?.competitions || []).length} Accolades
            </span>
          </div>

          <div className="pub-grid-2col">
            {(awardsData?.competitions || []).map((item, idx) => {
              const itemIndex = idx + 1;
              const isExpanded = Boolean(expandedAwards[item.id]);
              const isChampion = item.title.toLowerCase().includes('champion');
              return (
                <article key={item.id} className={`pub-list-card ${isExpanded ? 'is-expanded' : ''}`}>
                  <div className="pub-card-main">
                    <div className="pub-header-row">
                      <div className="pub-meta-left">
                        <span className="pub-number">0{itemIndex}</span>
                        <span className={`pub-category-badge ${isChampion ? 'champion' : 'conference'}`}>
                          {item.title}
                        </span>
                        <span className="pub-status-badge">National Honor</span>
                      </div>
                      <span className="pub-year">{item.year}</span>
                    </div>

                    <h3 className="pub-title">
                      {item.event}
                    </h3>

                    <div className="pub-citation">
                      <span className="pub-author highlight">{item.organizer}</span>
                      {item.category && (
                        <>
                          <span className="pub-sep">•</span>
                          <span className="pub-venue">{item.category}</span>
                        </>
                      )}
                    </div>

                    <div className="pub-tags-row">
                      {[item.category, item.title, 'National Competition'].filter(Boolean).map((tag, tIdx) => (
                        <span key={tIdx} className="pub-tag-pill">{tag}</span>
                      ))}
                    </div>

                    <div className="pub-actions-row">
                      <button
                        onClick={() => toggleAward(item.id)}
                        className="pub-expand-btn"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? 'Hide Details' : 'View Description & Details'}</span>
                        {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                      </button>

                      {item.imageUrl && (
                        <button
                          onClick={() => setActiveModalData({
                            title: item.event,
                            subtitle: `${item.title} • ${item.organizer} (${item.year})`,
                            content: (
                              <div style={{ textAlign: 'center' }}>
                                <img 
                                  src={item.imageUrl} 
                                  alt={item.event} 
                                  style={{ maxWidth: '100%', maxHeight: '520px', borderRadius: '12px', objectFit: 'contain' }} 
                                />
                                <p style={{ marginTop: '12px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                                  {item.description}
                                </p>
                              </div>
                            )
                          })}
                          className="pub-visual-btn"
                        >
                          <ExternalLink size={13} />
                          <span>View Award Artifact</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="pub-expanded-body">
                      <div className="pub-detail-section">
                        <h4 className="pub-detail-heading">Recognition & Description</h4>
                        <p className="pub-abstract-text">
                          {item.description}
                        </p>
                      </div>

                      {item.imageUrl && (
                        <div className="pub-detail-section">
                          <h4 className="pub-detail-heading">Award Image</h4>
                          <div style={{ maxWidth: '420px', borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--border-subtle)', marginTop: '6px' }}>
                            <img
                              src={item.imageUrl}
                              alt={item.event}
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
      )}

      {/* =========================================================================
          2. RESEARCH POSTER PRESENTATIONS
          ========================================================================= */}
      {(activeCategory === 'all' || activeCategory === 'posters') && (
        <section className="section-spacing">
          <div className="section-heading-row">
            <div>
              <div className="section-eyebrow">RESEARCH EXHIBITS</div>
              <h2 className="section-main-heading">
                Poster Presentations
              </h2>
            </div>
            <span className="section-count-badge">
              {(awardsData?.posters || awardsData?.posterPresentations || []).length} Posters
            </span>
          </div>

          <div className="pub-grid-2col">
            {(awardsData?.posters || awardsData?.posterPresentations || []).map((item, idx) => {
              const itemIndex = idx + 1;
              const isExpanded = Boolean(expandedAwards[item.id]);
              return (
                <article key={item.id} className={`pub-list-card ${isExpanded ? 'is-expanded' : ''}`}>
                  <div className="pub-card-main">
                    <div className="pub-header-row">
                      <div className="pub-meta-left">
                        <span className="pub-number">0{itemIndex}</span>
                        <span className="pub-category-badge presentation">
                          Research Poster
                        </span>
                        <span className="pub-status-badge">Exposition</span>
                      </div>
                      <span className="pub-year">{item.year}</span>
                    </div>

                    <h3 className="pub-title">
                      {item.title}
                    </h3>

                    <div className="pub-citation">
                      <span className="pub-author highlight">{item.event}</span>
                      {item.venue && (
                        <>
                          <span className="pub-sep">•</span>
                          <span className="pub-venue">{item.venue}</span>
                        </>
                      )}
                    </div>

                    <div className="pub-tags-row">
                      {['Poster Presentation', 'Research Exhibit', 'CUET'].map((tag, tIdx) => (
                        <span key={tIdx} className="pub-tag-pill">{tag}</span>
                      ))}
                    </div>

                    <div className="pub-actions-row">
                      <button
                        onClick={() => toggleAward(item.id)}
                        className="pub-expand-btn"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? 'Hide Abstract & Details' : 'View Presentation Details'}</span>
                        {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                      </button>

                      {item.imageUrl && (
                        <button
                          onClick={() => setActiveModalData({
                            title: item.title,
                            subtitle: `${item.event} • ${item.venue} (${item.year})`,
                            content: (
                              <div style={{ textAlign: 'center' }}>
                                <img 
                                  src={item.imageUrl} 
                                  alt={item.title} 
                                  style={{ maxWidth: '100%', maxHeight: '520px', borderRadius: '12px', objectFit: 'contain' }} 
                                />
                                <p style={{ marginTop: '12px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                                  {item.description}
                                </p>
                              </div>
                            )
                          })}
                          className="pub-visual-btn"
                        >
                          <ExternalLink size={13} />
                          <span>View Trophy & Award Crest</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="pub-expanded-body">
                      <div className="pub-detail-section">
                        <h4 className="pub-detail-heading">Presentation Details</h4>
                        <p className="pub-abstract-text">
                          {item.description}
                        </p>
                      </div>

                      {item.imageUrl && (
                        <div className="pub-detail-section">
                          <h4 className="pub-detail-heading">Award Trophy / Crest</h4>
                          <div style={{ maxWidth: '420px', borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--border-subtle)', marginTop: '6px' }}>
                            <img
                              src={item.imageUrl}
                              alt={item.title}
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
      )}

      {/* =========================================================================
          3. HULT PRIZE ACTIVITIES
          ========================================================================= */}
      {(activeCategory === 'all' || activeCategory === 'hult') && (
        <section className="section-spacing">
          <div className="section-heading-row">
            <div>
              <div className="section-eyebrow">SOCIAL ENTREPRENEURSHIP</div>
              <h2 className="section-main-heading">
                Hult Prize Global Challenges
              </h2>
            </div>
            <span className="section-count-badge">
              {(awardsData?.hultPrize || []).length} Milestones
            </span>
          </div>

          <div className="pub-grid-2col">
            {(awardsData?.hultPrize || []).map((item, idx) => {
              const itemIndex = idx + 1;
              const isExpanded = Boolean(expandedAwards[item.id]);
              return (
                <article key={item.id} className={`pub-list-card ${isExpanded ? 'is-expanded' : ''}`}>
                  <div className="pub-card-main">
                    <div className="pub-header-row">
                      <div className="pub-meta-left">
                        <span className="pub-number">0{itemIndex}</span>
                        <span className="pub-category-badge manuscript">
                          Global Challenge
                        </span>
                        <span className="pub-status-badge">Impact Venture</span>
                      </div>
                      <span className="pub-year">{item.year}</span>
                    </div>

                    <h3 className="pub-title">
                      {item.title}
                    </h3>

                    <div className="pub-citation">
                      <span className="pub-author highlight">Hult Prize Foundation</span>
                      {item.cohort && (
                        <>
                          <span className="pub-sep">•</span>
                          <span className="pub-venue">{item.cohort}</span>
                        </>
                      )}
                    </div>

                    <div className="pub-tags-row">
                      {['Social Entrepreneurship', 'Hult Prize', 'Impact Innovation'].map((tag, tIdx) => (
                        <span key={tIdx} className="pub-tag-pill">{tag}</span>
                      ))}
                    </div>

                    <div className="pub-actions-row">
                      <button
                        onClick={() => toggleAward(item.id)}
                        className="pub-expand-btn"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? 'Hide Details' : 'View Impact & Contributions'}</span>
                        {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                      </button>

                      {item.imageUrl && (
                        <button
                          onClick={() => setActiveModalData({
                            title: item.title,
                            subtitle: `${item.cohort || 'Hult Prize'} (${item.year})`,
                            content: (
                              <div style={{ textAlign: 'center' }}>
                                <img 
                                  src={item.imageUrl} 
                                  alt={item.title} 
                                  style={{ maxWidth: '100%', maxHeight: '520px', borderRadius: '12px', objectFit: 'contain' }} 
                                />
                                <p style={{ marginTop: '12px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                                  {item.description}
                                </p>
                              </div>
                            )
                          })}
                          className="pub-visual-btn"
                        >
                          <ExternalLink size={13} />
                          <span>View Certificate</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="pub-expanded-body">
                      <div className="pub-detail-section">
                        <h4 className="pub-detail-heading">Impact & Contributions</h4>
                        <p className="pub-abstract-text">
                          {item.description}
                        </p>
                      </div>

                      {item.imageUrl && (
                        <div className="pub-detail-section">
                          <h4 className="pub-detail-heading">Official Certificate</h4>
                          <div style={{ maxWidth: '420px', borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--border-subtle)', marginTop: '6px' }}>
                            <img
                              src={item.imageUrl}
                              alt={item.title}
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
      )}

      {/* =========================================================================
          4. EVENT ORGANIZATION & DIRECTORSHIP
          ========================================================================= */}
      {(activeCategory === 'all' || activeCategory === 'events') && (
        <section className="section-spacing">
          <div className="section-heading-row">
            <div>
              <div className="section-eyebrow">LEADERSHIP</div>
              <h2 className="section-main-heading">
                Event Organization & Directorship
              </h2>
            </div>
            <span className="section-count-badge">
              {(awardsData?.eventOrganization || []).length} Summits & Events
            </span>
          </div>

          <div className="pub-grid-2col">
            {(awardsData?.eventOrganization || []).map((item, idx) => {
              const itemIndex = idx + 1;
              const isExpanded = Boolean(expandedAwards[item.id]);
              return (
                <article key={item.id} className={`pub-list-card ${isExpanded ? 'is-expanded' : ''}`}>
                  <div className="pub-card-main">
                    <div className="pub-header-row">
                      <div className="pub-meta-left">
                        <span className="pub-number">0{itemIndex}</span>
                        <span className="pub-category-badge presentation">
                          Leadership
                        </span>
                        <span className="pub-status-badge">Lead Organizer</span>
                      </div>
                      <span className="pub-year">{item.year}</span>
                    </div>

                    <h3 className="pub-title">
                      {item.title}
                    </h3>

                    <div className="pub-citation">
                      <span className="pub-author highlight">{item.event}</span>
                      {item.venue && (
                        <>
                          <span className="pub-sep">•</span>
                          <span className="pub-venue">{item.venue}</span>
                        </>
                      )}
                    </div>

                    <div className="pub-tags-row">
                      {['Executive Leadership', 'Event Directorship', 'Team Management'].map((tag, tIdx) => (
                        <span key={tIdx} className="pub-tag-pill">{tag}</span>
                      ))}
                    </div>

                    <div className="pub-actions-row">
                      <button
                        onClick={() => toggleAward(item.id)}
                        className="pub-expand-btn"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? 'Hide Details' : 'View Responsibilities & Scale'}</span>
                        {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                      </button>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="pub-expanded-body">
                      <div className="pub-detail-section">
                        <h4 className="pub-detail-heading">Scope & Leadership Responsibilities</h4>
                        <p className="pub-abstract-text">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>
      )}

      {/* =========================================================================
          5. COURSE CERTIFICATIONS
          ========================================================================= */}
      {(activeCategory === 'all' || activeCategory === 'certs') && (
        <section className="section-spacing">
          <div className="section-heading-row">
            <div>
              <div className="section-eyebrow">ACCREDITATIONS</div>
              <h2 className="section-main-heading">
                Professional Engineering Certifications
              </h2>
            </div>
            <span className="section-count-badge">
              {(awardsData?.certifications || []).length} Credentials
            </span>
          </div>

          <div className="pub-grid-2col">
            {(awardsData?.certifications || []).map((item, idx) => {
              const itemIndex = idx + 1;
              const isExpanded = Boolean(expandedAwards[item.id]);
              return (
                <article key={item.id} className={`pub-list-card ${isExpanded ? 'is-expanded' : ''}`}>
                  <div className="pub-card-main">
                    <div className="pub-header-row">
                      <div className="pub-meta-left">
                        <span className="pub-number">0{itemIndex}</span>
                        <span className="pub-category-badge verified">
                          Verified Credential
                        </span>
                        <span className="pub-status-badge">Accredited</span>
                      </div>
                      <span className="pub-year">Certified</span>
                    </div>

                    <h3 className="pub-title">
                      {item.title}
                    </h3>

                    <div className="pub-citation">
                      <span className="pub-author highlight">{item.issuer}</span>
                      {item.field && (
                        <>
                          <span className="pub-sep">•</span>
                          <span className="pub-venue">{item.field}</span>
                        </>
                      )}
                    </div>

                    <div className="pub-tags-row">
                      {['Accredited Course', item.field, 'Engineering Design'].filter(Boolean).map((tag, tIdx) => (
                        <span key={tIdx} className="pub-tag-pill">{tag}</span>
                      ))}
                    </div>

                    <div className="pub-actions-row">
                      <button
                        onClick={() => toggleAward(item.id)}
                        className="pub-expand-btn"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? 'Hide Details' : 'View Syllabus & Verification'}</span>
                        {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                      </button>

                      {item.imageUrl && (
                        <button
                          onClick={() => setActiveModalData({
                            title: item.title,
                            subtitle: `Issuer: ${item.issuer} • ${item.field}`,
                            content: (
                              <div style={{ textAlign: 'center' }}>
                                <img 
                                  src={item.imageUrl} 
                                  alt={item.title} 
                                  style={{ maxWidth: '100%', maxHeight: '520px', borderRadius: '12px', objectFit: 'contain' }} 
                                />
                                <p style={{ marginTop: '12px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                                  {item.description}
                                </p>
                              </div>
                            )
                          })}
                          className="pub-visual-btn"
                        >
                          <ExternalLink size={13} />
                          <span>View Certificate</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="pub-expanded-body">
                      <div className="pub-detail-section">
                        <h4 className="pub-detail-heading">Certification Syllabus & Competencies</h4>
                        <p className="pub-abstract-text">
                          {item.description}
                        </p>
                      </div>

                      {item.imageUrl && (
                        <div className="pub-detail-section">
                          <h4 className="pub-detail-heading">Official Credential</h4>
                          <div style={{ maxWidth: '420px', borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--border-subtle)', marginTop: '6px' }}>
                            <img
                              src={item.imageUrl}
                              alt={item.title}
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
      )}

      {/* Global Interactive Modal for Fullscreen Certificates */}
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
