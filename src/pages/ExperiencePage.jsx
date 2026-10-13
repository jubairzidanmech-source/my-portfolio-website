import React, { useState } from 'react';
import { Factory, GraduationCap, Users, MapPin, ChevronDown, ChevronUp, CheckCircle2, ArrowUpRight } from 'lucide-react';
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

          <div className="card card-interactive" style={{ padding: '32px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.4fr) 1fr', gap: '28px', alignItems: 'start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <span className="pub-status-badge">
                    {experienceData.internship.role}
                  </span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                    {experienceData.internship.period}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', lineHeight: 1.3, marginBottom: '6px' }}>
                  {experienceData.internship.company}
                </h3>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.86rem', color: 'var(--blue-royal)', fontWeight: 500, marginBottom: '16px' }}>
                  <MapPin size={14} />
                  <span>{experienceData.internship.location}</span>
                </div>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.68, marginBottom: '20px' }}>
                  {experienceData.internship.overview}
                </p>

                {/* Expandable Technical Responsibilities Toggle */}
                <button
                  onClick={() => toggleSection('internship-learnings')}
                  className="pub-expand-btn"
                  aria-expanded={Boolean(expandedSections['internship-learnings'])}
                >
                  <span>{expandedSections['internship-learnings'] ? 'Hide Technical Responsibilities & Learnings' : 'View Key Technical Responsibilities & Learnings (6)'}</span>
                  {expandedSections['internship-learnings'] ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                </button>
              </div>

              <div style={{ borderRadius: '14px', overflow: 'hidden', height: '230px', boxShadow: 'var(--shadow-sm)' }}>
                <img
                  src={experienceData.internship.imageUrl}
                  alt={experienceData.internship.company}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* EXPANDABLE RESPONSIBILITIES & LEARNINGS (Without Nested Boxes!) */}
            {expandedSections['internship-learnings'] && (
              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '14px' }}>
                  Key Engineering Responsibilities & Systems Investigated
                </h4>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                  {experienceData.internship.keyLearnings.map((learning, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <CheckCircle2 size={16} color="var(--blue-royal)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '2px' }}>
                          {learning.title}
                        </div>
                        <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                          {learning.desc}
                        </p>
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px', marginBottom: '24px' }}>
            {experienceData.instructorship.roles.map((role, idx) => (
              <div key={idx} className="card card-interactive" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span className="pub-tag-pill">
                    {role.type}
                  </span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 500 }}>{role.period}</span>
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', lineHeight: 1.35, marginBottom: '6px' }}>
                  {role.title}
                </h3>
                <div style={{ fontSize: '0.84rem', color: 'var(--blue-royal)', fontWeight: 500, marginBottom: '12px' }}>
                  {role.location}
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {role.description}
                </p>
              </div>
            ))}
          </div>

          {/* Expandable Syllabus Section */}
          <div className="card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <span className="section-eyebrow">TEACHING COVERAGE</span>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginTop: '2px' }}>
                  Physics & Mathematics Syllabi Delivered
                </h3>
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
              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '18px' }}>
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

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px' }}>
                  {experienceData.instructorship.curriculumCovered[activeSubject].topics.map((topic, tIdx) => (
                    <div key={tIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--blue-royal)', fontWeight: 700 }}>•</span>
                      <span>{topic}</span>
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

          <div className="leadership-grid" style={{ gap: '16px' }}>
            {experienceData.extracurricular.map((item) => {
              const isExpanded = Boolean(expandedSections[`lead-${item.id}`]);
              return (
                <div key={item.id} className="leadership-card">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    {item.logoUrl ? (
                      <div className="leadership-logo-box">
                        <img 
                          src={item.logoUrl} 
                          alt={item.organization} 
                          style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                        />
                      </div>
                    ) : (
                      <div className="leadership-logo-placeholder">
                        <Users size={20} />
                      </div>
                    )}

                    <span className="leadership-period">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="leadership-designation">
                    {item.role}
                  </h3>

                  <div className="leadership-club-name">
                    {item.organization}
                  </div>

                  {/* Expandable Responsibilities Inline Toggle */}
                  <div style={{ marginTop: '16px' }}>
                    <button
                      onClick={() => toggleSection(`lead-${item.id}`)}
                      className="pub-expand-btn"
                      style={{ width: '100%', justifyContent: 'space-between' }}
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'Hide Responsibilities' : `View Core Responsibilities (${item.highlights.length})`}</span>
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  </div>

                  {/* EXPANDABLE RESPONSIBILITIES LIST */}
                  {isExpanded && (
                    <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid var(--border-subtle)' }}>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {item.highlights.map((hl, hIdx) => (
                          <li key={hIdx} style={{ display: 'flex', gap: '8px', alignItems: 'baseline', fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                            <span style={{ color: 'var(--blue-royal)', fontWeight: 700 }}>•</span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
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
