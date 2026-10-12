import React, { useState } from 'react';
import { Briefcase, Factory, GraduationCap, Users, Calendar, MapPin, ChevronRight, CheckCircle2, ChevronDown, ChevronUp, Sparkles, ArrowUpRight } from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import { InteractiveModal } from '../components/InteractiveModal';

export const ExperiencePage = () => {
  const [activeSubject, setActiveSubject] = useState(0);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedClub, setSelectedClub] = useState(null);

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
        <section style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '22px' }}>
            <Factory size={22} color="var(--purple-accent)" />
            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>
              Industrial Attachment / Internship
            </h2>
          </div>

          <div className="card card-interactive" style={{ padding: '36px', marginBottom: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.4fr) 1fr', gap: '32px', alignItems: 'start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: 500, color: '#FFFFFF', background: 'var(--blue-primary)', padding: '3px 10px', borderRadius: '6px' }}>
                    {experienceData.internship.role}
                  </span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                    {experienceData.internship.period}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.45rem', color: 'var(--text-primary)', lineHeight: 1.3, marginBottom: '6px' }}>
                  {experienceData.internship.company}
                </h3>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.86rem', color: 'var(--purple-accent)', fontWeight: 500, marginBottom: '16px' }}>
                  <MapPin size={14} />
                  <span>{experienceData.internship.location}</span>
                </div>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.68, marginBottom: '20px' }}>
                  {experienceData.internship.overview}
                </p>
              </div>

              <div style={{ borderRadius: '16px', overflow: 'hidden', height: '240px', boxShadow: 'var(--shadow-sm)' }}>
                <img
                  src={experienceData.internship.imageUrl}
                  alt={experienceData.internship.company}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Key Learnings */}
            <div style={{ marginTop: '28px', paddingTop: '24px', borderTop: '1px solid var(--border-subtle)' }}>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '16px' }}>
                Key Technical Learnings from the Internship
              </h4>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
                {experienceData.internship.keyLearnings.map((learning, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'var(--bg-card-subtle)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '12px',
                      padding: '16px 18px',
                      transition: 'all 200ms ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--purple-accent)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <CheckCircle2 size={15} color="var(--purple-accent)" />
                      <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {learning.title}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                      {learning.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 2. TUTORING & INSTRUCTORSHIPS */}
      {(activeTab === 'all' || activeTab === 'tutoring') && (
        <section style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '22px' }}>
            <GraduationCap size={22} color="var(--purple-accent)" />
            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>
              Tutoring & Instructorships
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginBottom: '28px' }}>
            {experienceData.instructorship.roles.map((role, idx) => (
              <div key={idx} className="card card-interactive" style={{ padding: '26px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: 500, color: 'var(--text-secondary)', background: 'var(--lavender-soft)', padding: '4px 10px', borderRadius: '6px' }}>
                    {role.type}
                  </span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 500 }}>{role.period}</span>
                </div>
                <h3 style={{ fontSize: '1.22rem', color: 'var(--text-primary)', lineHeight: 1.35, marginBottom: '6px' }}>
                  {role.title}
                </h3>
                <div style={{ fontSize: '0.84rem', color: 'var(--purple-accent)', fontWeight: 500, marginBottom: '12px' }}>
                  {role.location}
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {role.description}
                </p>
              </div>
            ))}
          </div>

          {/* Interactive Syllabus Tab View */}
          <div className="card" style={{ padding: '28px' }}>
            <div style={{ marginBottom: '18px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 500, color: 'var(--purple-accent)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Teaching Coverage
              </span>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginTop: '4px' }}>
                Detailed Physics & Mathematics Syllabi Delivered
              </h3>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
              {experienceData.instructorship.curriculumCovered.map((curr, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSubject(idx)}
                  className={`btn ${activeSubject === idx ? 'btn-primary' : 'btn-outline'}`}
                  style={{
                    fontSize: '0.84rem',
                    padding: '8px 16px',
                    background: activeSubject === idx ? 'var(--blue-primary)' : 'var(--bg-card-subtle)',
                    borderColor: activeSubject === idx ? 'var(--blue-primary)' : 'var(--border-subtle)',
                    color: activeSubject === idx ? '#FFFFFF' : 'var(--text-primary)',
                    cursor: 'pointer'
                  }}
                >
                  {curr.subject}
                </button>
              ))}
            </div>

            <div style={{
              background: 'var(--bg-card-subtle)',
              padding: '22px',
              borderRadius: '14px',
              border: '1px solid var(--border-subtle)',
              boxShadow: '0 2px 8px rgba(11, 19, 43, 0.04)'
            }}>
              <h4 style={{ fontSize: '0.98rem', color: 'var(--text-primary)', marginBottom: '14px' }}>
                {experienceData.instructorship.curriculumCovered[activeSubject].subject} — Mastered Topics
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '10px' }}>
                {experienceData.instructorship.curriculumCovered[activeSubject].topics.map((topic, tIdx) => (
                  <div key={tIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--blue-royal)', fontWeight: 600 }}>•</span>
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. EXTRACURRICULAR ACTIVITIES & LEADERSHIP (Cards focusing on Designation & Club Name) */}
      {(activeTab === 'all' || activeTab === 'extracurricular') && (
        <section style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '22px' }}>
            <Users size={22} color="var(--purple-accent)" />
            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>
              Extracurricular Activities & Leadership
            </h2>
          </div>

          <div className="leadership-grid">
            {experienceData.extracurricular.map((item) => (
              <div 
                key={item.id} 
                className="leadership-card"
                onClick={() => setSelectedClub(item)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
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
                      <Users size={22} />
                    </div>
                  )}

                  <span className="leadership-period">
                    {item.period}
                  </span>
                </div>

                {/* Primary Emphasis: Designation & Club Name */}
                <h3 className="leadership-designation">
                  {item.role}
                </h3>

                <div className="leadership-club-name">
                  {item.organization}
                </div>

                <div className="leadership-meta">
                  <span className="leadership-resp-count">
                    {item.highlights.length} Core Responsibilities
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedClub(item);
                    }}
                    className="btn-view-details"
                  >
                    <span>View All Details</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Interactive Modal for Club Work Details */}
      {selectedClub && (
        <InteractiveModal
          isOpen={!!selectedClub}
          onClose={() => setSelectedClub(null)}
          title={selectedClub.role}
          subtitle={selectedClub.organization}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                Tenure: {selectedClub.period}
              </span>
              <span style={{ fontSize: '0.78rem', fontWeight: 500, background: 'var(--lavender-soft)', color: 'var(--blue-primary)', padding: '4px 14px', borderRadius: '9999px' }}>
                Executive Leadership
              </span>
            </div>

            <h4 style={{ fontSize: '0.98rem', color: 'var(--text-primary)', marginBottom: '14px', fontWeight: 500 }}>
              Key Contributions & Leadership Impact
            </h4>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0 }}>
              {selectedClub.highlights.map((h, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  <span style={{ color: 'var(--text-faint)', fontWeight: 500, lineHeight: 1.5 }}>•</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px' }}>
              <button
                onClick={() => setSelectedClub(null)}
                className="btn btn-secondary"
                style={{ fontSize: '0.86rem' }}
              >
                Close
              </button>
            </div>
          </div>
        </InteractiveModal>
      )}
    </div>
  );
};
