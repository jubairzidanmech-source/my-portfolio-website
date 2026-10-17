import React from 'react';
import { 
  Code2, 
  Cpu, 
  LineChart, 
  FileSpreadsheet, 
  Palette, 
  Terminal, 
  Layers,
  Users,
  Mic,
  Calendar,
  Layout,
  Globe,
  Compass,
  CheckCircle2,
  Camera,
  Wind,
  BookOpen,
  GitBranch,
  ExternalLink
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { SoftwareLogo } from '../components/SoftwareLogo';

export const SkillsPage = () => {
  // Category Icons: strictly identical size (17px) & stroke width (2)
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'CAD & Design':
        return <Layers size={17} strokeWidth={2} />;
      case 'Simulation & CFD':
        return <Wind size={17} strokeWidth={2} />;
      case 'Programming':
        return <Code2 size={17} strokeWidth={2} />;
      case 'Scientific Computing & Data Analysis':
        return <LineChart size={17} strokeWidth={2} />;
      case 'Version Control':
        return <GitBranch size={17} strokeWidth={2} />;
      case 'Scientific Documentation & Research':
        return <FileSpreadsheet size={17} strokeWidth={2} />;
      case 'Visualization':
      case 'Graphic Design & Visualization':
        return <Palette size={17} strokeWidth={2} />;
      case 'Operating Systems':
        return <Terminal size={17} strokeWidth={2} />;
      default:
        return <Cpu size={17} strokeWidth={2} />;
    }
  };

  // Professional Competency Icons: strictly identical container & size (17px)
  const getCompetencyIcon = (idx) => {
    switch (idx) {
      case 0:
        return <Users size={17} strokeWidth={2} />;
      case 1:
        return <Mic size={17} strokeWidth={2} />;
      case 2:
        return <Calendar size={17} strokeWidth={2} />;
      case 3:
        return <Layout size={17} strokeWidth={2} />;
      case 4:
        return <Globe size={17} strokeWidth={2} />;
      case 5:
        return <Compass size={17} strokeWidth={2} />;
      default:
        return <CheckCircle2 size={17} strokeWidth={2} />;
    }
  };

  // Interests Icons: visually lighter, compact monochrome (15px)
  const getHobbyIcon = (idx) => {
    switch (idx) {
      case 0:
        return <Palette size={15} strokeWidth={1.8} />;
      case 1:
        return <Camera size={15} strokeWidth={1.8} />;
      case 2:
        return <Wind size={15} strokeWidth={1.8} />;
      case 3:
        return <BookOpen size={15} strokeWidth={1.8} />;
      default:
        return <Compass size={15} strokeWidth={1.8} />;
    }
  };

  return (
    <div className="container animate-fade-in">
      {/* Editorial Page Header */}
      <div className="page-intro">
        <span className="section-label">TECHNICAL COMPETENCIES</span>
        <h1 className="page-title">
          Skills & Proficiencies
        </h1>
        <p className="page-subtitle">
          Advanced computational engineering toolkits, programming environments, mathematical data synthesis, and interdisciplinary collaborative proficiencies.
        </p>
      </div>

      {/* 1. TECHNICAL SKILLS & SOFTWARE TOOLKITS */}
      <section className="section-spacing">
        <div className="section-heading-row">
          <div>
            <h2 className="section-main-heading">
              Technical Skills & Software Systems
            </h2>
          </div>
          <span className="section-count-badge">
            {skillsData.softwareSkills.length} Domains · {skillsData.softwareSkills.reduce((acc, c) => acc + c.skills.length, 0)} Tools
          </span>
        </div>

        <div className="skills-tech-grid">
          {skillsData.softwareSkills.map((cat, idx) => (
            <div key={idx} className="card skill-tech-card">
              <div className="skill-card-header">
                <div className="skill-cat-icon-box">
                  {getCategoryIcon(cat.category)}
                </div>
                <h3 className="skill-cat-title">
                  {cat.category}
                </h3>
              </div>

              <p className="skill-cat-desc">
                {cat.description}
              </p>

              <div className="skill-tools-wrap">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-tool-pill">
                    <SoftwareLogo name={skill} size={15} />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. PROFESSIONAL & INTERPERSONAL COMPETENCIES */}
      <section className="section-spacing">
        <div className="section-heading-row">
          <div>
            <h2 className="section-main-heading">
              Professional Competencies
            </h2>
          </div>
          <span className="section-count-badge">
            6 Core Competencies
          </span>
        </div>

        <div className="competencies-grid">
          {skillsData.personalSkills.map((skill, idx) => (
            <div key={idx} className="card competency-card">
              <div className="skill-cat-icon-box">
                {getCompetencyIcon(idx)}
              </div>
              <div className="competency-content">
                <h3 className="competency-title">
                  {skill.title}
                </h3>
                <p className="competency-desc">
                  {skill.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PERSONAL INTERESTS & EXPLORATIONS (Visually Lighter) */}
      <section className="section-spacing" style={{ marginBottom: '64px' }}>
        <div className="section-heading-row">
          <div>
            <h2 className="section-main-heading" style={{ fontSize: '1.35rem' }}>
              Personal Interests & Explorations
            </h2>
          </div>
          <span className="section-count-badge" style={{ fontSize: '0.78rem' }}>
            Creative Pursuits
          </span>
        </div>

        <div className="interests-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {skillsData.hobbies.map((hobby, idx) => (
            <div key={idx} className="interest-card-light" style={{ justifyContent: 'space-between' }}>
              <div>
                <div className="interest-header">
                  <span className="interest-icon-light">
                    {getHobbyIcon(idx)}
                  </span>
                  <h3 className="interest-title-light">
                    {hobby.name}
                  </h3>
                </div>
                <p className="interest-desc-light">
                  {hobby.desc}
                </p>
              </div>

              {hobby.link && (
                <div style={{ marginTop: '16px', paddingTop: '8px' }}>
                  <a
                    href={hobby.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pub-visual-btn"
                    style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    title={`View ${hobby.name} on ${hobby.platform || 'portfolio'}`}
                  >
                    <span>View My Works</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
