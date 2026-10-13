import React, { useState } from 'react';
import { Trophy, CheckCircle2, ChevronDown, ChevronUp, FileBadge, ArrowUpRight, Award } from 'lucide-react';
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

      {/* 1. COMPETITIONS & ACHIEVEMENTS */}
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
              {awardsData.competitions.length} Accolades
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
            {awardsData.competitions.map((item) => {
              const isExpanded = Boolean(expandedAwards[item.id]);
              return (
                <div key={item.id} className="award-card card-interactive">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                    <span className={`award-badge ${item.title.toLowerCase().includes('champion') ? 'champion' : ''}`}>
                      {item.title}
                    </span>
                    <span className="award-card-year">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="award-card-title">
                    {item.event}
                  </h3>

                  <p className="award-card-org">
                    {item.organizer}
                  </p>

                  <div className="pub-actions-row" style={{ marginTop: '14px' }}>
                    <button
                      onClick={() => toggleAward(item.id)}
                      className="pub-expand-btn"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Description & Details'}</span>
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
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
                            </div>
                          )
                        })}
                        className="pub-visual-btn"
                      >
                        <Award size={14} />
                        <span>View Award Image</span>
                      </button>
                    )}
                  </div>

                  {/* Expandable Details */}
                  {isExpanded && (
                    <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)' }}>
                      <p className="award-card-desc" style={{ marginBottom: 0 }}>
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 2. RESEARCH POSTER PRESENTATIONS */}
      {(activeCategory === 'all' || activeCategory === 'posters') && (
        <section className="section-spacing">
          <div className="section-heading-row">
            <div>
              <div className="section-eyebrow">RESEARCH EXHIBITS</div>
              <h2 className="section-main-heading">
                Poster Presentations
              </h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
            {awardsData.posters.map((item) => {
              const isExpanded = Boolean(expandedAwards[item.id]);
              return (
                <div key={item.id} className="award-card card-interactive">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                    <span className="award-badge champion">
                      {item.title}
                    </span>
                    <span className="award-card-year">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="award-card-title">
                    {item.event}
                  </h3>

                  <p className="award-card-org">
                    {item.organizer}
                  </p>

                  <div className="pub-actions-row" style={{ marginTop: '14px' }}>
                    <button
                      onClick={() => toggleAward(item.id)}
                      className="pub-expand-btn"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'Hide Abstract & Details' : 'View Presentation Details'}</span>
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  </div>

                  {isExpanded && (
                    <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)' }}>
                      <p className="award-card-desc" style={{ marginBottom: 0 }}>
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 3. HULT PRIZE ACTIVITIES */}
      {(activeCategory === 'all' || activeCategory === 'hult') && (
        <section className="section-spacing">
          <div className="section-heading-row">
            <div>
              <div className="section-eyebrow">SOCIAL ENTREPRENEURSHIP</div>
              <h2 className="section-main-heading">
                Hult Prize Global Challenges
              </h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
            {awardsData.hultPrize.map((item) => {
              const isExpanded = Boolean(expandedAwards[item.id]);
              return (
                <div key={item.id} className="award-card card-interactive">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                    <span className="award-badge verified">
                      {item.role}
                    </span>
                    <span className="award-card-year">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="award-card-title">
                    {item.title}
                  </h3>

                  <p className="award-card-org">
                    {item.organization}
                  </p>

                  <div className="pub-actions-row" style={{ marginTop: '14px' }}>
                    <button
                      onClick={() => toggleAward(item.id)}
                      className="pub-expand-btn"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Impact & Contributions'}</span>
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  </div>

                  {isExpanded && (
                    <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)' }}>
                      <p className="award-card-desc" style={{ marginBottom: 0 }}>
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 4. EVENT ORGANIZATION */}
      {(activeCategory === 'all' || activeCategory === 'events') && (
        <section className="section-spacing">
          <div className="section-heading-row">
            <div>
              <div className="section-eyebrow">LEADERSHIP</div>
              <h2 className="section-main-heading">
                Event Organization & Directorship
              </h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
            {awardsData.eventOrganization.map((item) => {
              const isExpanded = Boolean(expandedAwards[item.id]);
              return (
                <div key={item.id} className="award-card card-interactive">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                    <span className="award-badge verified">
                      Lead Organizer
                    </span>
                    <span className="award-card-year">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="award-card-title">
                    {item.title}
                  </h3>

                  <p className="award-card-org">
                    {item.event} {item.venue ? `• ${item.venue}` : ''}
                  </p>

                  <div className="pub-actions-row" style={{ marginTop: '14px' }}>
                    <button
                      onClick={() => toggleAward(item.id)}
                      className="pub-expand-btn"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Responsibilities & Scale'}</span>
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  </div>

                  {isExpanded && (
                    <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)' }}>
                      <p className="award-card-desc" style={{ marginBottom: 0 }}>
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 5. COURSE CERTIFICATIONS */}
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
              {awardsData.certifications.length} Credentials
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
            {awardsData.certifications.map((item) => {
              const isExpanded = Boolean(expandedAwards[item.id]);
              return (
                <div key={item.id} className="award-card card-interactive card-subtle">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span className="award-badge verified">
                      Verified Credential
                    </span>
                    <CheckCircle2 size={16} color="#10B981" />
                  </div>

                  <h3 className="award-card-title">
                    {item.title}
                  </h3>

                  <div className="award-card-org">
                    Issuer: {item.issuer} • {item.field}
                  </div>

                  <div className="pub-actions-row" style={{ marginTop: '14px' }}>
                    <button
                      onClick={() => toggleAward(item.id)}
                      className="pub-expand-btn"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Syllabus & Verification'}</span>
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
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
                            </div>
                          )
                        })}
                        className="pub-visual-btn"
                      >
                        <Award size={14} />
                        <span>View Certificate Image</span>
                      </button>
                    )}
                  </div>

                  {isExpanded && (
                    <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)' }}>
                      <p className="award-card-desc" style={{ marginBottom: 0 }}>
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Global Interactive Modal for Fullscreen Certificates */}
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
