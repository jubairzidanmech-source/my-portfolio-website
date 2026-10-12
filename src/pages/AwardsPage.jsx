import React, { useState } from 'react';
import { Award, Trophy, BookmarkCheck, Users, Calendar, Sparkles, CheckCircle2, ChevronRight, FileBadge } from 'lucide-react';
import { awardsData } from '../data/portfolioData';

export const AwardsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

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
        <section style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '22px' }}>
            <Trophy size={20} color="var(--purple-accent)" />
            <h2 style={{ fontSize: '1.45rem', color: 'var(--text-primary)' }}>
              Competitions & Achievements
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '22px' }}>
            {awardsData.competitions.map((item) => (
              <div key={item.id} className="card card-interactive" style={{ padding: '24px' }}>
                {/* Image / Certificate Placeholder Slot */}
                <div className="award-thumb-box">
                  {item.imageUrl ? (
                    <img 
                      src={item.imageUrl} 
                      alt={item.event} 
                      className="award-thumb-img" 
                    />
                  ) : (
                    <div className="award-placeholder-inner">
                      <Trophy size={32} color="#817CB8" />
                      <span>Award / Crest Placeholder</span>
                      <span style={{ fontSize: '0.72rem', color: '#9D97B8' }}>Slot ready for photo upload</span>
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <span className={`award-badge ${item.title === 'Champion' ? 'champion' : ''}`}>
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

                <p className="award-card-desc">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 2. RESEARCH POSTER PRESENTATIONS */}
      {(activeCategory === 'all' || activeCategory === 'posters') && (
        <section style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '22px' }}>
            <Award size={20} color="var(--purple-accent)" />
            <h2 style={{ fontSize: '1.45rem', color: 'var(--text-primary)' }}>
              Research Poster Presentations
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '22px' }}>
            {awardsData.posterPresentations.map((item) => (
              <div key={item.id} className="card card-interactive" style={{ padding: '24px' }}>
                {/* Image / Certificate Placeholder Slot */}
                <div className="award-thumb-box">
                  {item.imageUrl ? (
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="award-thumb-img" 
                    />
                  ) : (
                    <div className="award-placeholder-inner">
                      <Award size={32} color="#817CB8" />
                      <span>Poster Symposium Trophy Placeholder</span>
                      <span style={{ fontSize: '0.72rem', color: '#9D97B8' }}>Slot ready for photo upload</span>
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span className="award-badge">
                    {item.event}
                  </span>
                  <span className="award-card-year">
                    {item.year}
                  </span>
                </div>

                <h3 className="award-card-title">
                  {item.title}
                </h3>

                <p className="award-card-org">
                  {item.venue}
                </p>

                <p className="award-card-desc">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. HULT PRIZE PARTICIPATION & ACTIVITIES */}
      {(activeCategory === 'all' || activeCategory === 'hult') && (
        <section style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '22px' }}>
            <Sparkles size={20} color="var(--purple-accent)" />
            <h2 style={{ fontSize: '1.45rem', color: 'var(--text-primary)' }}>
              Hult Prize Participation & Activities
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '22px' }}>
            {awardsData.hultPrize.map((item) => (
              <div key={item.id} className="card card-interactive" style={{ padding: '24px' }}>
                {/* Image / Certificate Placeholder Slot */}
                <div className="award-thumb-box">
                  {item.imageUrl ? (
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="award-thumb-img" 
                    />
                  ) : (
                    <div className="award-placeholder-inner">
                      <Sparkles size={32} color="#817CB8" />
                      <span>Hult Prize Certificate Placeholder</span>
                      <span style={{ fontSize: '0.72rem', color: '#9D97B8' }}>Slot ready for photo upload</span>
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span className="award-badge">
                    {item.title}
                  </span>
                  <span className="award-card-year">{item.year}</span>
                </div>

                <h3 className="award-card-title">
                  {item.cohort}
                </h3>

                <p className="award-card-desc">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. EVENT PARTICIPATION & ORGANIZATION */}
      {(activeCategory === 'all' || activeCategory === 'events') && (
        <section style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '22px' }}>
            <Users size={20} color="var(--purple-accent)" />
            <h2 style={{ fontSize: '1.45rem', color: 'var(--text-primary)' }}>
              Event Participation & Organization
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '22px' }}>
            {awardsData.eventOrganization.map((item) => (
              <div key={item.id} className="card card-interactive" style={{ padding: '24px' }}>
                {/* Image / Certificate Placeholder Slot */}
                <div className="award-thumb-box">
                  {item.imageUrl ? (
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="award-thumb-img" 
                    />
                  ) : (
                    <div className="award-placeholder-inner">
                      <Users size={32} color="#817CB8" />
                      <span>Event Certificate / Photo Placeholder</span>
                      <span style={{ fontSize: '0.72rem', color: '#9D97B8' }}>Slot ready for photo upload</span>
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span className="award-badge">
                    Leadership & Management
                  </span>
                  <span className="award-card-year">{item.year}</span>
                </div>

                <h3 className="award-card-title">
                  {item.title}
                </h3>

                <p className="award-card-org">
                  {item.event} {item.venue ? `• ${item.venue}` : ''}
                </p>

                <p className="award-card-desc">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. COURSE CERTIFICATIONS */}
      {(activeCategory === 'all' || activeCategory === 'certs') && (
        <section style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '22px' }}>
            <FileBadge size={20} color="var(--purple-accent)" />
            <h2 style={{ fontSize: '1.45rem', color: 'var(--text-primary)' }}>
              Course Certifications
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '22px' }}>
            {awardsData.certifications.map((item) => (
              <div key={item.id} className="card card-interactive card-subtle" style={{ padding: '24px' }}>
                {/* Image / Certificate Placeholder Slot */}
                <div className="award-thumb-box">
                  {item.imageUrl ? (
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="award-thumb-img" 
                    />
                  ) : (
                    <div className="award-placeholder-inner">
                      <FileBadge size={32} color="#817CB8" />
                      <span>Accredited Certification Placeholder</span>
                      <span style={{ fontSize: '0.72rem', color: '#9D97B8' }}>Slot ready for credential certificate</span>
                    </div>
                  )}
                </div>

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

                <p className="award-card-desc">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
