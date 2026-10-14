import React, { useState, useEffect } from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  Printer, 
  FileText, 
  Mail, 
  MapPin, 
  Phone,
  Globe, 
  Award, 
  BookOpen, 
  GraduationCap, 
  Briefcase, 
  Cpu,
  CheckCircle2,
  Users
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

export const CVModal = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState('pdf'); // 'pdf' | 'sheet'

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cvPdfUrl = personalData.cvUrl || '/Md_Jubair_Uddin_Zidan_CV.pdf';

  return (
    <div 
      className="cv-modal-backdrop"
      onClick={onClose}
    >
      <div 
        className="cv-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="cv-modal-toolbar">
          <div className="cv-toolbar-title-wrap">
            <FileText size={18} className="cv-toolbar-icon" />
            <div>
              <div className="cv-toolbar-title">Curriculum Vitae</div>
              <div className="cv-toolbar-sub">{personalData.name} • Mechanical Engineering Researcher</div>
            </div>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="cv-view-tabs">
            <button
              type="button"
              className={`cv-view-tab ${viewMode === 'pdf' ? 'is-active' : ''}`}
              onClick={() => setViewMode('pdf')}
              title="View Official 3-Page PDF Attachment"
            >
              <FileText size={13} />
              <span>Official PDF</span>
            </button>
            <button
              type="button"
              className={`cv-view-tab ${viewMode === 'sheet' ? 'is-active' : ''}`}
              onClick={() => setViewMode('sheet')}
              title="View Formatted Academic Sheet"
            >
              <BookOpen size={13} />
              <span>Interactive Sheet</span>
            </button>
          </div>

          <div className="cv-toolbar-actions">
            <a
              href={cvPdfUrl}
              download="Md_Jubair_Uddin_Zidan_CV.pdf"
              className="cv-toolbar-btn cv-btn-primary"
              title="Download PDF Attachment"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>

            <a
              href={cvPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-toolbar-btn cv-btn-secondary"
              title="Open PDF in new browser tab"
            >
              <ExternalLink size={15} />
              <span className="cv-btn-text-desktop">Open Tab</span>
            </a>

            {viewMode === 'sheet' && (
              <button
                onClick={() => window.print()}
                className="cv-toolbar-btn cv-btn-secondary"
                title="Print CV"
              >
                <Printer size={15} />
                <span className="cv-btn-text-desktop">Print</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="cv-toolbar-close-btn"
              aria-label="Close CV Modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* View Mode 1: Official PDF Document Embedded */}
        {viewMode === 'pdf' ? (
          <div className="cv-pdf-stage">
            <iframe
              src={`${cvPdfUrl}#toolbar=1`}
              className="cv-pdf-iframe"
              title={`Curriculum Vitae - ${personalData.name}`}
            />
          </div>
        ) : (
          /* View Mode 2: Printable & Scrollable Academic CV Sheet */
          <div className="cv-modal-sheet-wrap">
            <div className="cv-document-sheet printable-cv-sheet">
              {/* CV Header */}
              <header className="cv-sheet-header">
                <h1 className="cv-sheet-name">{personalData.name}</h1>
                <div className="cv-sheet-headline">
                  Mechanical Engineering Researcher • Computational Fluid Dynamics & Architected Metamaterials
                </div>
                <div className="cv-sheet-contact-row">
                  <span><MapPin size={12} /> Dhaka, Bangladesh</span>
                  <span>•</span>
                  <span><Mail size={12} /> jubairzidan.mech@gmail.com</span>
                  <span>•</span>
                  <span><Phone size={12} /> +8801734802064</span>
                </div>
                <div className="cv-sheet-links-row">
                  <a href="https://www.linkedin.com/in/md-jubair-uddin-zidan/" target="_blank" rel="noreferrer">LinkedIn: md-jubair-uddin-zidan</a>
                  <span>•</span>
                  <a href="https://www.researchgate.net/profile/Md-Jubair-Zidan-2" target="_blank" rel="noreferrer">ResearchGate: Md-Jubair-Zidan-2</a>
                  <span>•</span>
                  <a href="https://github.com/jubairzidanmech-source" target="_blank" rel="noreferrer">GitHub: jubairzidanmech-source</a>
                  <span>•</span>
                  <a href="https://jubair-zidan-portfolio.vercel.app" target="_blank" rel="noreferrer">jubairzidan.portfolio</a>
                </div>
              </header>

              <div className="cv-sheet-divider" />

              {/* Academic Credentials */}
              <section className="cv-sheet-section">
                <h2 className="cv-sheet-section-title">
                  <GraduationCap size={15} />
                  <span>Academic Credentials</span>
                </h2>

                <div className="cv-sheet-item">
                  <div className="cv-item-header">
                    <div>
                      <h3 className="cv-item-title">M.Sc. in Mechanical Engineering</h3>
                      <div className="cv-item-subtitle">Chittagong University of Engineering & Technology (CUET) · Chittagong, Bangladesh</div>
                    </div>
                    <div className="cv-item-date">2024 January – Early 2027 (Expected)</div>
                  </div>
                  <ul className="cv-item-bullets">
                    <li>Coursework Cumulative CGPA: <strong>3.90 / 4.00</strong></li>
                    <li>Tentative Thesis Defence: January 2027</li>
                  </ul>
                </div>

                <div className="cv-sheet-item">
                  <div className="cv-item-header">
                    <div>
                      <h3 className="cv-item-title">B.Sc. in Mechanical Engineering</h3>
                      <div className="cv-item-subtitle">Chittagong University of Engineering & Technology (CUET) · Chittagong, Bangladesh</div>
                    </div>
                    <div className="cv-item-date">2019 Feb – 2024 November</div>
                  </div>
                  <ul className="cv-item-bullets">
                    <li>Cumulative CGPA: <strong>3.29 / 4.00</strong> (Upper Semesters Trajectory: 3.41 / 4.00)</li>
                    <li>Undergraduate Thesis: <em>A numerical approach for evaluating the aerodynamic effectiveness of venturi tunnel and ground effect on newer f1 cars</em></li>
                  </ul>
                </div>
              </section>

              {/* Professional Experience */}
              <section className="cv-sheet-section">
                <h2 className="cv-sheet-section-title">
                  <Briefcase size={15} />
                  <span>Professional Experience</span>
                </h2>

                <div className="cv-sheet-item">
                  <div className="cv-item-header">
                    <div>
                      <h3 className="cv-item-title">Internship / Industrial Trainee</h3>
                      <div className="cv-item-subtitle">RPCL Raozan 25 MW Dual Fuel Power Plant · Chittagong</div>
                    </div>
                    <div className="cv-item-date">2023 Sept</div>
                  </div>
                  <ul className="cv-item-bullets">
                    <li>Completed a 3-week internship to acquire knowledge in power generation process, heavy fuel oil/gas dual cycle operations, and thermal safety systems.</li>
                  </ul>
                </div>
              </section>

              {/* Standardized Test Scores */}
              <section className="cv-sheet-section">
                <h2 className="cv-sheet-section-title">
                  <Award size={15} />
                  <span>Standardized Test Scores</span>
                </h2>

                <div className="cv-sheet-item">
                  <div className="cv-item-header">
                    <div>
                      <h3 className="cv-item-title">IELTS: 7.0 Overall</h3>
                      <div className="cv-item-subtitle">Listening: 8.5 · Reading: 7.0 · Writing: 6.5 · Speaking: 6.5</div>
                    </div>
                    <div className="cv-item-tag">Official Score</div>
                  </div>
                </div>

                <div className="cv-sheet-item">
                  <div className="cv-item-header">
                    <div>
                      <h3 className="cv-item-title">GRE</h3>
                      <div className="cv-item-subtitle">Scheduled / To be taken soon</div>
                    </div>
                    <div className="cv-item-tag">In Preparation</div>
                  </div>
                </div>
              </section>

              {/* Research Experience */}
              <section className="cv-sheet-section">
                <h2 className="cv-sheet-section-title">
                  <BookOpen size={15} />
                  <span>Research Experience</span>
                </h2>

                <div className="cv-sheet-item">
                  <div className="cv-item-header">
                    <h3 className="cv-item-title">Computational Aerodynamics & Ground-Effect Modeling</h3>
                  </div>
                  <p className="cv-item-desc">
                    Analyzed airflow behavior on pre-2022 vs. 2022 F1 chassis using ANSYS Fluent with k-ω SST modeling. Built CAD geometry, generated high-resolution meshes, and quantified changes in drag, downforce, velocity fields, and wake structure introduced by Venturi-based ground-effect tunnels.
                  </p>
                </div>

                <div className="cv-sheet-item">
                  <div className="cv-item-header">
                    <h3 className="cv-item-title">Jet Noise Reduction & Chevron Nozzle Acoustics</h3>
                  </div>
                  <p className="cv-item-desc">
                    Designed serrated nozzles in SolidWorks and performed acoustic simulations in ANSYS Fluent. Compared N12 vs N16 chevron configurations using contours of acoustic power, static pressure, and jet-mixing behavior to determine optimal noise-suppressing geometry.
                  </p>
                </div>

                <div className="cv-sheet-item">
                  <div className="cv-item-header">
                    <h3 className="cv-item-title">Hybrid Vertical Axis Wind Turbine (VAWT) Performance</h3>
                  </div>
                  <p className="cv-item-desc">
                    Modeled a Darrieus–Savonius hybrid VAWT in 3D and carried out transient CFD in ANSYS CFX. Fabricated prototype, executed wind-tunnel testing, and validated CFD predictions by correlating voltage, current, and power output.
                  </p>
                </div>

                <div className="cv-sheet-item">
                  <div className="cv-item-header">
                    <h3 className="cv-item-title">Airfoil Optimization for VAWT Blades</h3>
                  </div>
                  <p className="cv-item-desc">
                    Evaluated multiple symmetric and cambered airfoils for VAWT blades using CFD simulations across varying tip-speed ratios. Analyzed pressure fields, torque behavior, and power coefficients to assess airfoil influence on turbine efficiency.
                  </p>
                </div>

                <div className="cv-sheet-item">
                  <div className="cv-item-header">
                    <h3 className="cv-item-title">Acoustic Attenuation in Gas-Turbine Combustor Liners</h3>
                  </div>
                  <p className="cv-item-desc">
                    Developed double cylindrical perforated-liner geometry in SolidWorks and simulated acoustic damping using ANSYS Fluent PVPM (porous-media). Assessed acoustic power reduction, noise distribution, and liner effectiveness compared to conventional designs.
                  </p>
                </div>
              </section>

              {/* Publications */}
              <section className="cv-sheet-section">
                <h2 className="cv-sheet-section-title">
                  <BookOpen size={15} />
                  <span>Publications</span>
                </h2>

                <h4 style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '10px' }}>
                  Conference Proceedings
                </h4>
                <ul className="cv-item-bullets" style={{ marginBottom: '16px' }}>
                  <li>[1] S. I. Uddin, G. M. S. Rayhan, T. Abdullah, <strong>M. J. U. Zidan</strong>, and B. Roy, “Numerical and experimental performance analysis of a Darrieus–Savonius hybrid vertical axis wind turbine for low wind speed conditions,” in <em>Proc. 8th Int. Conf. Mechanical, Industrial and Energy Engineering (ICMIEE)</em>, 2024.</li>
                  <li>[2] <strong>M. Hassan, M. J. U. Zidan</strong>, and M. R. Zaman, “Modelling and CFD acoustic analysis of N12 and N16 chevron nozzles for jet noise reduction,” in <em>Proc. Int. Conf. Mechanical, Industrial and Materials Engineering (ICMIME)</em>, 2024.</li>
                  <li>[3] <strong>M. Hassan and M. J. U. Zidan</strong>, “Noise emission reduction of a jet engine by double cylindrical perforated liners in a combustion chamber,” in <em>Proc. Int. Conf. Mechanical, Industrial and Materials Engineering (ICMIME)</em>, 2024.</li>
                  <li>[4] M. K. I. Monna, T. Nath, and <strong>M. J. U. Zidan</strong>, “A numerical approach for evaluating the aerodynamic effectiveness of vertical axis wind turbine by different types of airfoils,” in <em>Proc. 6th Int. Conf. Mechanical, Industrial and Materials Engineering (ICMIME)</em>, Rajshahi, Bangladesh, 2024.</li>
                </ul>

                <h4 style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '10px' }}>
                  Papers in Progress
                </h4>
                <ul className="cv-item-bullets">
                  <li>[1] <strong>M. J. U. Zidan</strong>, M. Wakil, and Dibos Das, “Architected Auxetic Mechanical Metamaterials for Energy Absorption: Design, Fabrication, and Characterization.”</li>
                </ul>
              </section>

              {/* Research Interest */}
              <section className="cv-sheet-section">
                <h2 className="cv-sheet-section-title">
                  <Cpu size={15} />
                  <span>Research Interests</span>
                </h2>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {['Fluid Mechanics', 'Aerodynamics', 'Fluid Flow', 'Advanced Materials', 'Advanced Manufacturing'].map((topic) => (
                    <span key={topic} className="cv-item-tag" style={{ fontSize: '0.82rem', padding: '4px 10px' }}>
                      {topic}
                    </span>
                  ))}
                </div>
              </section>

              {/* Undergraduate Thesis */}
              <section className="cv-sheet-section">
                <h2 className="cv-sheet-section-title">
                  <GraduationCap size={15} />
                  <span>Undergraduate Thesis</span>
                </h2>
                <div className="cv-sheet-item">
                  <div className="cv-item-header">
                    <div>
                      <h3 className="cv-item-title">
                        A numerical approach for evaluating the aerodynamic effectiveness of venturi tunnel and ground effect on newer f1 cars
                      </h3>
                      <div className="cv-item-subtitle">
                        Supervisor: Prof. Dr. Sheikh Muhammad Humayun Kabir, Dept. of Mechanical Engineering, CUET
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Awards */}
              <section className="cv-sheet-section">
                <h2 className="cv-sheet-section-title">
                  <Award size={15} />
                  <span>Honors & Awards</span>
                </h2>
                <ul className="cv-item-bullets">
                  <li><strong>1st Runner-Up</strong>, Poster Presentation, Research Fair 2023 — Chittagong University of Engineering & Technology (CUET) 2023</li>
                  <li><strong>Champion</strong>, Climate Justice Idea Competition, Season 2 — Powered by The Daily Star & ActionAid Bangladesh 2023</li>
                  <li><strong>2nd Runner-Up</strong>, National Earth Olympiad — Barishal Region, Bangladesh 2014</li>
                  <li><strong>Champion</strong>, National Math Olympiad — Barishal Region, Bangladesh 2011</li>
                </ul>
              </section>

              {/* Certifications */}
              <section className="cv-sheet-section">
                <h2 className="cv-sheet-section-title">
                  <Award size={15} />
                  <span>Certifications</span>
                </h2>
                <ul className="cv-item-bullets">
                  <li><strong>Certified SolidWorks Professional (CSWP)</strong>, Dassault Systèmes — 2026</li>
                  <li><strong>Certified SolidWorks Associate (CSWA)</strong>, Dassault Systèmes — 2025</li>
                </ul>
              </section>

              {/* Extracurricular Activities */}
              <section className="cv-sheet-section">
                <h2 className="cv-sheet-section-title">
                  <Users size={15} />
                  <span>Extracurricular Activities</span>
                </h2>
                <ul className="cv-item-bullets">
                  <li><strong>Treasurer</strong>, American Society of Mechanical Engineers (ASME), CUET Student Branch (2023 – 2024)</li>
                  <li><strong>President</strong>, Supply Chain & Business Alliance CUET (2023 – 2024)</li>
                  <li><strong>Joint Publication Secretary</strong>, CUET Automotive and Mobility Society (CAMS) (2023 – 2024)</li>
                </ul>
              </section>

              {/* Technical Skills */}
              <section className="cv-sheet-section">
                <h2 className="cv-sheet-section-title">
                  <Cpu size={15} />
                  <span>Technical Skills</span>
                </h2>
                <div className="cv-skills-grid">
                  <div className="cv-skill-row">
                    <span className="cv-skill-category">CAD & Design:</span>
                    <span className="cv-skill-items">SolidWorks</span>
                  </div>
                  <div className="cv-skill-row">
                    <span className="cv-skill-category">Simulation:</span>
                    <span className="cv-skill-items">ANSYS Fluent, ANSYS LS-DYNA, LAMMPS, OpenFOAM (Foundational Knowledge), COMSOL Multiphysics (Foundational Knowledge)</span>
                  </div>
                  <div className="cv-skill-row">
                    <span className="cv-skill-category">Programming:</span>
                    <span className="cv-skill-items">MATLAB, Python, C (Coursework), Fortran (Coursework)</span>
                  </div>
                  <div className="cv-skill-row">
                    <span className="cv-skill-category">Scientific Computing & Data:</span>
                    <span className="cv-skill-items">NumPy, Pandas, Jupyter Notebook, OriginPro, MS Excel</span>
                  </div>
                  <div className="cv-skill-row">
                    <span className="cv-skill-category">Version Control:</span>
                    <span className="cv-skill-items">Git & GitHub</span>
                  </div>
                  <div className="cv-skill-row">
                    <span className="cv-skill-category">Documentation & Research:</span>
                    <span className="cv-skill-items">LaTeX, Mendeley, MS Word, MS PowerPoint, Google Suite</span>
                  </div>
                  <div className="cv-skill-row">
                    <span className="cv-skill-category">Graphic Design & Visualization:</span>
                    <span className="cv-skill-items">Adobe Illustrator, Adobe Photoshop, Canva, Figma, Adobe Premiere Pro</span>
                  </div>
                  <div className="cv-skill-row">
                    <span className="cv-skill-category">Operating Systems:</span>
                    <span className="cv-skill-items">macOS, Windows</span>
                  </div>
                </div>
              </section>

              {/* References */}
              <section className="cv-sheet-section" style={{ marginBottom: 0 }}>
                <h2 className="cv-sheet-section-title">
                  <Users size={15} />
                  <span>Academic References</span>
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div>
                    <strong>1. Prof. Dr. Sheikh Muhammad Humayun Kabir</strong>, Professor, Dept of Mechanical Engineering, CUET
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Email: humayun@cuet.ac.bd</div>
                  </div>
                  <div>
                    <strong>2. Prof. Dr. Md. Mamunur Roshid</strong>, Professor, Dept of Mechanical Engineering, CUET
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Email: mamuncuet2003@cuet.ac.bd</div>
                  </div>
                  <div>
                    <strong>3. Prof. DR Jamal Uddin Ahamed</strong>, Professor, Dept of Mechanical Engineering, CUET
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Email: jamal@cuet.ac.bd</div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}

        {/* Modal Footer with Verification Badge */}
        <div className="cv-modal-footer">
          <div className="cv-modal-verify-tag">
            <CheckCircle2 size={14} color="#10b981" />
            <span>Official 3-Page Curriculum Vitae · Md_Jubair_Uddin_Zidan_CV.pdf</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '0.76rem', color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>
              790 KB · 3 Pages
            </span>
            <a
              href={cvPdfUrl}
              download="Md_Jubair_Uddin_Zidan_CV.pdf"
              style={{ color: 'var(--blue-royal)', textDecoration: 'none', fontWeight: 600, fontSize: '0.82rem' }}
            >
              Direct Download ↓
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
