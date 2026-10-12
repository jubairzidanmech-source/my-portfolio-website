import React from 'react';
import { 
  Code2, 
  Cpu, 
  LineChart, 
  FileSpreadsheet, 
  Palette, 
  Terminal, 
  UserCheck, 
  Heart, 
  Sparkles,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const SkillsPage = () => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Design & Simulation':
        return <Cpu size={18} color="var(--purple-accent)" />;
      case 'Programming & Computation':
        return <Code2 size={18} color="var(--purple-accent)" />;
      case 'Data Analysis & Visualization':
        return <LineChart size={18} color="var(--purple-accent)" />;
      case 'Office & Documentation':
        return <FileSpreadsheet size={18} color="var(--purple-accent)" />;
      case 'Presentation & Graphic Design':
        return <Palette size={18} color="var(--purple-accent)" />;
      case 'Operating Systems & Environments':
        return <Terminal size={18} color="var(--purple-accent)" />;
      default:
        return <Layers size={18} color="var(--purple-accent)" />;
    }
  };

  return (
    <div className="container animate-fade-in">
      {/* Editorial Page Header */}
      <div className="page-intro">
        <span className="section-label">Technical Competencies</span>
        <h1 className="page-title">
          Skills & <span className="header-badge">Proficiencies</span>
        </h1>
        <p className="page-subtitle">
          Advanced computational engineering toolkits, programming environments, mathematical data synthesis, and interdisciplinary collaborative proficiencies.
        </p>
      </div>

      {/* 1. SOFTWARE SKILLS */}
      <section style={{ marginBottom: '56px' }}>
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--text-primary)' }}>
            Software Skills
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
          {skillsData.softwareSkills.map((cat, idx) => (
            <div key={idx} className="card card-interactive" style={{ padding: '26px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'var(--lavender-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-accent)'
                }}>
                  {getCategoryIcon(cat.category)}
                </div>
                <h3 style={{ fontSize: '1.18rem', color: 'var(--text-primary)' }}>
                  {cat.category}
                </h3>
              </div>

              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.55 }}>
                {cat.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    style={{
                      background: 'var(--bg-card-subtle)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-secondary)',
                      fontSize: '0.82rem',
                      fontWeight: 500,
                      padding: '5px 12px',
                      borderRadius: '8px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                  >
                    <span style={{ color: 'var(--text-faint)', fontSize: '0.9rem' }}>•</span>
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. PERSONAL SKILLS */}
      <section style={{ marginBottom: '56px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
          <span className="section-label">Soft Skills</span>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--text-primary)' }}>
            Personal & Professional Competencies
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          {skillsData.personalSkills.map((skill, idx) => (
            <div key={idx} className="card card-interactive" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <CheckCircle2 size={16} color="var(--purple-accent)" />
                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                  {skill.title}
                </h3>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. HOBBIES & INTERESTS */}
      <section style={{ marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
          <span className="section-label">Beyond Engineering</span>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--text-primary)' }}>
            Personal Interests & Hobbies
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {skillsData.hobbies.map((hobby, idx) => (
            <div key={idx} className="card card-interactive card-subtle" style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
                {hobby.name}
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {hobby.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
