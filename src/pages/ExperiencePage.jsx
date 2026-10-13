import React, { useState } from 'react';
import { Factory, GraduationCap, Users, MapPin, ChevronDown, ChevronUp, CheckCircle2, ArrowUpRight, BookOpen, Wrench, Leaf } from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import { InteractiveModal } from '../components/InteractiveModal';

export const ExperiencePage = () => {
  const [activeSubject, setActiveSubject] = useState(0);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedClub, setSelectedClub] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (id) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const tabs = [
    { id: 'all', label: 'All Experience' },
    { id: 'internship', label: 'Industrial Attachment' },
    { id: 'tutoring', label: 'Teaching & Instructorship' },
    { id: 'extracurricular', label: 'Leadership & Extracurricular' }
  ];

  return (
    <div className="container animate-fade-in">
      {/* Editorial Page Header */}
      <div className="page-intro">
        <h1 className="page-title">
          Experience & <span className="header-badge">Leadership</span>
        </h1>
        <p className="page-subtitle">
          Hands-on industrial engineering attachment in thermal power generation, comprehensive STEM instructorship across physics and higher mathematics, and executive leadership within ASME and collegiate societies.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="filter-bar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`filter-pill ${activeTab === tab.id ? 'active' : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 1. INDUSTRIAL ATTACHMENT / INTERNSHIP */}
      {(activeTab === 'all' || activeTab === 'internship') && (
        <section className="section-spacing">
          <div className="section-heading-row">
            <div>
              <div className="section-eyebrow">PRACTICAL ENGINEERING</div>
              <h2 className="section-main-heading">
                Industrial Attachment / Internship
              </h2>
            </div>
          </div>

          <div className="card exp-card">
            {/* Header: Role first, Organization second, Dates & Location third */}
            <div className="exp-card-header">
              <div className="exp-org-logo-box">
                <Factory size={18} className="exp-logo-icon" />
              </div>
              <div className="exp-header-text">
                <div className="exp-header-top">
                  <h3 className="exp-role-title">{experienceData.internship.role}</h3>
                  <span className="exp-category-pill category-industrial">Industrial Attachment</span>
                </div>
                <div className="exp-org-name">{experienceData.internship.company}</div>
                <div className="exp-meta-row">
                  <span className="exp-meta-period">{experienceData.internship.period}</span>
                  <span className="exp-meta-dot">·</span>
                  <span className="exp-meta-location">
                    <MapPin size={13} /> {experienceData.internship.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="exp-divider" />

            {/* Body: Overview + Contained Supporting Image */}
            <div className="exp-body-row">
              <div className="exp-overview-col">
                <p className="exp-overview-text">
                  {experienceData.internship.overview}
                </p>

                {/* Expandable Technical Responsibilities Toggle */}
                <button
                  onClick={() => toggleSection('internship-learnings')}
                  className="pub-expand-btn"
                  aria-expanded={Boolean(expandedSections['internship-learnings'])}
                >
                  <span>{expandedSections['internship-learnings'] ? 'Hide Technical Responsibilities & Systems' : `View Key Technical Responsibilities & Learnings (${experienceData.internship.keyLearnings.length})`}</span>
                  {expandedSections['internship-learnings'] ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                </button>
              </div>

              {/* Contained supporting image (doesn't overpower role details) */}
              <div className="exp-contained-image-box">
                <img
                  src={experienceData.internship.imageUrl}
                  alt={experienceData.internship.company}
                  className="exp-contained-image"
                />
                <span className="exp-image-caption">RPCL Raozan Facility</span>
              </div>
            </div>

            {/* Responsibilities & Technical Learning Points with Thin Dividers */}
            {expandedSections['internship-learnings'] && (
              <div className="exp-learnings-section">
                <div className="exp-divider" />
                <h4 className="exp-section-title">
                  Key Engineering Responsibilities & Systems Investigated
                </h4>

                <div className="exp-divided-list">
                  {experienceData.internship.keyLearnings.map((learning, idx) => (
                    <div key={idx} className="exp-divided-item">
                      <div className="exp-item-point">
                        <span className="exp-item-bullet" />
                        <div className="exp-item-content">
                          <span className="exp-item-title">{learning.title}</span>
                          <p className="exp-item-desc">{learning.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 2. TUTORING & INSTRUCTORSHIPS */}
      {(activeTab === 'all' || activeTab === 'tutoring') && (
        <section className="section-spacing">
          <div className="section-heading-row">
            <div>
              <div className="section-eyebrow">ACADEMIC MENTORSHIP</div>
              <h2 className="section-main-heading">
                Tutoring & Instructorships
              </h2>
            </div>
          </div>

          <div className="exp-grid">
            {experienceData.instructorship.roles.map((role, idx) => (
              <div key={idx} className="card exp-card">
                <div className="exp-card-header">
                  <div className="exp-org-logo-box">
                    {idx === 0 ? (
                      <GraduationCap size={18} className="exp-logo-icon" />
                    ) : (
                      <BookOpen size={18} className="exp-logo-icon" />
                    )}
                  </div>
                  <div className="exp-header-text">
                    <div className="exp-header-top">
                      <h3 className="exp-role-title">{role.title}</h3>
                      <span className="exp-category-pill category-teaching">Teaching</span>
                    </div>
                    <div className="exp-org-name">{role.type}</div>
                    <div className="exp-meta-row">
                      <span className="exp-meta-period">{role.period}</span>
                      <span className="exp-meta-dot">·</span>
                      <span className="exp-meta-location">
                        <MapPin size={13} /> {role.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="exp-divider" />

                <p className="exp-overview-text" style={{ marginBottom: 0 }}>
                  {role.description}
                </p>
              </div>
            ))}
          </div>

          {/* Expandable Syllabus Section with Thin Dividers */}
          <div className="card exp-card" style={{ marginTop: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <span className="section-eyebrow">CURRICULUM DELIVERED</span>
                <h3 className="exp-role-title" style={{ marginTop: '2px' }}>
                  Physics & Mathematics Syllabi Instruction
                </h3>
                <div className="exp-meta-row" style={{ marginTop: '2px' }}>
                  <span>Comprehensive national curriculum coverage for Higher Secondary Certificate (HSC) candidates</span>
                </div>
              </div>

              <button
                onClick={() => toggleSection('syllabus-coverage')}
                className="pub-expand-btn"
                aria-expanded={Boolean(expandedSections['syllabus-coverage'])}
              >
                <span>{expandedSections['syllabus-coverage'] ? 'Hide Curriculum Topics' : 'Explore Detailed Topics Covered'}</span>
                {expandedSections['syllabus-coverage'] ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
              </button>
            </div>

            {expandedSections['syllabus-coverage'] && (
              <div style={{ marginTop: '16px' }}>
                <div className="exp-divider" />
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                  {experienceData.instructorship.curriculumCovered.map((curr, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSubject(idx)}
                      className={`filter-pill ${activeSubject === idx ? 'active' : ''}`}
                    >
                      {curr.subject}
                    </button>
                  ))}
                </div>

                <div className="exp-divided-list">
                  {experienceData.instructorship.curriculumCovered[activeSubject].topics.map((topic, tIdx) => (
                    <div key={tIdx} className="exp-divided-item" style={{ padding: '8px 0' }}>
                      <div className="exp-item-point">
                        <span className="exp-item-bullet" />
                        <span className="exp-item-desc" style={{ color: 'var(--text-secondary)' }}>{topic}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 3. EXTRACURRICULAR ACTIVITIES & LEADERSHIP */}
      {(activeTab === 'all' || activeTab === 'extracurricular') && (
        <section className="section-spacing">
          <div className="section-heading-row">
            <div>
              <div className="section-eyebrow">EXECUTIVE ROLES</div>
              <h2 className="section-main-heading">
                Extracurricular Activities & Leadership
              </h2>
            </div>
            <span className="section-count-badge">
              {experienceData.extracurricular.length} Organizations
            </span>
          </div>

          <div className="leadership-grid">
            {experienceData.extracurricular.map((item) => {
              const isExpanded = Boolean(expandedSections[`lead-${item.id}`]);
              return (
                <div key={item.id} className="card exp-card leadership-card">
                  {/* Header: Role first, Organization second, Dates & Location third */}
                  <div className="exp-card-header">
                    <div className="exp-org-logo-box">
                      {item.logoUrl ? (
                        <img 
                          src={item.logoUrl} 
                          alt={item.organization} 
                        />
                      ) : item.id === 'cams' ? (
                        <Wrench size={18} className="exp-logo-icon" />
                      ) : item.id === 'greenlead' ? (
                        <Leaf size={18} className="exp-logo-icon" />
                      ) : (
                        <Users size={18} className="exp-logo-icon" />
                      )}
                    </div>
                    <div className="exp-header-text">
                      <div className="exp-header-top">
                        <h3 className="exp-role-title">{item.role}</h3>
                        <span className="exp-category-pill category-leadership">Leadership</span>
                      </div>
                      <div className="exp-org-name">{item.organization}</div>
                      <div className="exp-meta-row">
                        <span className="exp-meta-period">{item.period}</span>
                        <span className="exp-meta-dot">·</span>
                        <span className="exp-meta-location">
                          <MapPin size={13} /> CUET / Bangladesh
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="exp-divider" />

                  {/* Expandable Responsibilities Inline Toggle */}
                  <div>
                    <button
                      onClick={() => toggleSection(`lead-${item.id}`)}
                      className="pub-expand-btn"
                      style={{ width: '100%', justifyContent: 'space-between' }}
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'Hide Core Responsibilities' : `View Core Responsibilities (${item.highlights.length})`}</span>
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  </div>

                  {/* Responsibilities list with Thin Dividers */}
                  {isExpanded && (
                    <div className="exp-divided-list" style={{ marginTop: '12px' }}>
                      {item.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="exp-divided-item">
                          <div className="exp-item-point">
                            <span className="exp-item-bullet" />
                            <span className="exp-item-desc" style={{ color: 'var(--text-secondary)' }}>{hl}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Interactive Modal for Full Details */}
      {selectedClub && (
        <InteractiveModal
          isOpen={Boolean(selectedClub)}
          onClose={() => setSelectedClub(null)}
          title={selectedClub.role}
          subtitle={selectedClub.organization}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                Tenure: {selectedClub.period}
              </span>
              <span className="pub-status-badge">
                Executive Leadership
              </span>
            </div>

            <h4 style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>
              Core Leadership Highlights & Impact:
            </h4>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {selectedClub.highlights.map((hl, hIdx) => (
                <li key={hIdx} style={{ display: 'flex', gap: '10px', alignItems: 'baseline', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  <span style={{ color: 'var(--blue-royal)', fontWeight: 700 }}>•</span>
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>
        </InteractiveModal>
      )}
    </div>
  );
};
