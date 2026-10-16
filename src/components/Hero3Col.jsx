import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, GraduationCap, Mail, Sparkles, Award, Globe, FileText, Compass, Wind, Layers, Cpu, Activity, Download, Plus } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { CVModal } from './CVModal';

export const Hero3Col = ({ setActivePage }) => {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  // Research keywords in blue shades
  const researchKeywords = [
    {
      label: 'Computational Fluid Mechanics',
      icon: Wind,
      pillClass: 'pill-sky'
    },
    {
      label: 'Computational Materials Science',
      icon: Layers,
      pillClass: 'pill-royal'
    },
    {
      label: 'Smart and Metamaterials',
      icon: Sparkles,
      pillClass: 'pill-indigo'
    },
    {
      label: 'AI and ML in Engineering',
      icon: Cpu,
      pillClass: 'pill-cyan'
    },
    {
      label: 'Fracture Mechanics',
      icon: Activity,
      pillClass: 'pill-marine'
    }
  ];

  // Image 04 Reference metrics ("Trusted across borders" card format)
  const image4Stats = [
    {
      topLabel: "PEER-REVIEWED WORKS",
      value: "4",
      hasPlus: false,
      subtext: "Published & Conference Papers",
      icon: BookOpen
    },
    {
      topLabel: "CURRENT CGPA",
      value: "3.90",
      hasPlus: false,
      subtext: "M.Sc. Theory Coursework",
      icon: GraduationCap
    },
    {
      topLabel: "INTERNATIONAL FORUMS",
      value: "2",
      hasPlus: false,
      subtext: "BSME 2023 & MIMEC 2024",
      icon: Globe
    },
    {
      topLabel: "AWARDS & HONORS",
      value: "4",
      hasPlus: false,
      subtext: "National & Regional Accolades",
      icon: Award
    }
  ];

  return (
    <div>
      {/* Clean 2-Column Hero Layout (No cramped card texts right beside portrait) */}
      <section className="hero-2col-container">
        {/* LEFT COLUMN: Identity, Academic Background, Focus Areas & CTAs */}
        <div className="hero-col-left">
          <div className="hero-intro-card">
            <div>
              <h1 className="hero-name">
                <span className="hero-name-mask">
                  <span className="hero-name-line hero-name-line-1">Md. Jubair</span>
                </span>
                <span className="hero-name-mask">
                  <span className="hero-name-line hero-name-line-2">
                    Uddin <span className="hero-name-badge">Zidan</span>
                  </span>
                </span>
              </h1>

              <div className="hero-academic-bg hero-anim-academic">
                <span className="hero-academic-institution">
                  CUET — Chittagong University of Engineering and Technology
                </span>
                <span style={{ color: 'var(--text-faint)' }}>•</span>
                <span className="hero-degrees-badge">
                  B.Sc., M.Sc.
                </span>
              </div>

              <p className="hero-desc hero-anim-desc-1">
                I’m a Mechanical Engineering researcher focused on computational approaches to understanding complex physical systems. My academic work spans <strong className="hero-highlight-phrase">Computational Fluid Mechanics</strong> and <strong className="hero-highlight-phrase">Computational Materials Modelling</strong>, with research interests across fluid dynamics, aerodynamics, aeroacoustics, renewable energy, fracture mechanics, and self-healing materials.
              </p>
              <p className="hero-desc hero-anim-desc-2" style={{ marginTop: '12px' }}>
                Looking ahead, I’m particularly interested in exploring <strong className="hero-highlight-phrase">AI and machine learning driven approaches</strong> in engineering research, and how they can be integrated with computational modelling to improve prediction, simulation, and our understanding of complex physical systems.
              </p>

              {/* Research Focus Keywords Box */}
              <div className="hero-keywords-box hero-anim-keywords">
                <div className="hero-keywords-label">
                  <Compass size={13} />
                  <span>Research Domains & Keywords</span>
                </div>
                <div className="hero-keywords-wrap">
                  {researchKeywords.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <span
                        key={item.label}
                        className={`hero-keyword-pill ${item.pillClass}`}
                      >
                        <IconComponent size={14} />
                        <span>{item.label}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="hero-cta-group hero-anim-cta">
              <button
                onClick={() => setActivePage('research')}
                className="btn btn-primary"
              >
                <span>Explore Research</span>
                <ArrowUpRight size={16} />
              </button>
              <button
                onClick={() => setActivePage('academics')}
                className="btn btn-secondary"
              >
                <GraduationCap size={16} />
                <span>Academics</span>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Jubair's High-Res Portrait Card (Reference Style Gradient Blur at Bottom) */}
        <div className="hero-col-right hero-anim-portrait">
          <div className="hero-portrait-card">
            <div className="portrait-frame">
              <img
                src={personalData.portraitUrl}
                alt="Md. Jubair Uddin Zidan - Academic Researcher"
                className="portrait-img"
                loading="eager"
              />
              
              {/* Continuous Progressive Gradient Blur Layer (Inspo Style, No Box) */}
              <div className="portrait-progressive-blur-layer" aria-hidden="true"></div>

              {/* Bottom Content Overlay (Inspo Style Avatar, Info & Pill Action) */}
              <div className="portrait-bottom-blur-zone">
                {/* Primary Identity & Action Row */}
                <div className="portrait-blur-main-row">
                  <div className="portrait-blur-user-info">
                    <div className="portrait-blur-text-wrap">
                      <div className="portrait-blur-name">Md. Jubair Uddin Zidan</div>
                      <div className="portrait-blur-role">
                        <span>Graduate Student</span>
                        <span className="role-dot">•</span>
                        <span className="role-degree">B.Sc. & M.Sc.</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsCvModalOpen(true)}
                    className="portrait-blur-action-btn"
                    aria-label="View Academic CV"
                  >
                    <Plus size={15} strokeWidth={2.5} />
                    <span>View CV</span>
                  </button>
                </div>

                {/* Secondary Quick-Links & Download Row */}
                <div className="portrait-blur-links-row">
                  <a
                    href="https://www.researchgate.net/profile/Md-Jubair-Zidan-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blur-pill-link"
                    title="ResearchGate Profile"
                  >
                    <ArrowUpRight size={12} />
                    <span>ResearchGate</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/md-jubair-uddin-zidan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blur-pill-link"
                    title="LinkedIn Profile"
                  >
                    <ArrowUpRight size={12} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/jubairzidanmech-source"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blur-pill-link"
                    title="GitHub Profile"
                  >
                    <ArrowUpRight size={12} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={`mailto:${personalData.secondaryEmail || personalData.email}`}
                    className="blur-pill-link"
                    title="Direct Email"
                  >
                    <Mail size={12} />
                    <span>Email</span>
                  </a>
                  <a
                    href={personalData.cvUrl || '/Md_Jubair_Uddin_Zidan_CV.pdf'}
                    download="Md_Jubair_Uddin_Zidan_CV.pdf"
                    className="blur-pill-link blur-pill-download"
                    title="Download Academic CV PDF"
                  >
                    <Download size={12} />
                    <span>PDF</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Vitae Modal */}
      <CVModal isOpen={isCvModalOpen} onClose={() => setIsCvModalOpen(false)} />

      {/* Image 04 Reference: "Trusted across borders" Stats Cards Row */}
      <section className="stats-row-image4">
        {image4Stats.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div key={idx} className="stat-card-image4">
              <div className="stat-card-image4-top">
                <span className="stat-card-image4-label">{item.topLabel}</span>
                <span className="stat-card-image4-icon">
                  <IconComponent size={16} />
                </span>
              </div>
              <div>
                <div className="stat-card-image4-value">
                  <span>{item.value}</span>
                  {item.hasPlus && <span className="stat-card-image4-plus">+</span>}
                </div>
                <div className="stat-card-image4-sub">{item.subtext}</div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
