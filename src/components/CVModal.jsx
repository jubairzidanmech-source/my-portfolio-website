import React, { useEffect } from 'react';
import { X, Download, ExternalLink, Printer, FileText, Mail, MapPin, Globe, Award, BookOpen, GraduationCap, Briefcase, Cpu } from 'lucide-react';
import { personalData, academicsData } from '../data/portfolioData';

export const CVModal = ({ isOpen, onClose }) => {
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
              <div className="cv-toolbar-sub">{personalData.name} • Academic Researcher</div>
            </div>
          </div>

          <div className="cv-toolbar-actions">
            <a
              href={cvPdfUrl}
              download="Md_Jubair_Uddin_Zidan_CV.pdf"
              className="cv-toolbar-btn cv-btn-primary"
              title="Download PDF"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>

            <a
              href={cvPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-toolbar-btn cv-btn-secondary"
              title="Open PDF in new tab"
            >
              <ExternalLink size={15} />
              <span className="cv-btn-text-desktop">Open PDF</span>
            </a>

            <button
              onClick={() => window.print()}
              className="cv-toolbar-btn cv-btn-secondary"
              title="Print CV"
            >
              <Printer size={15} />
              <span className="cv-btn-text-desktop">Print</span>
            </button>

            <button
              onClick={onClose}
              className="cv-toolbar-close-btn"
              aria-label="Close CV Modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable & Scrollable Academic CV Document Sheet */}
        <div className="cv-modal-sheet-wrap">
          <div className="cv-document-sheet printable-cv-sheet">
            {/* CV Header */}
            <header className="cv-sheet-header">
              <h1 className="cv-sheet-name">{personalData.name}</h1>
              <div className="cv-sheet-headline">
                Mechanical Engineering Researcher • Computational Fluid Dynamics & Architected Metamaterials
              </div>
              <div className="cv-sheet-contact-row">
                <span><MapPin size={12} /> {personalData.location}</span>
                <span>•</span>
                <span><Mail size={12} /> {personalData.email} · {personalData.secondaryEmail}</span>
                <span>•</span>
                <span>CUET Mechanical Engineering</span>
              </div>
              <div className="cv-sheet-links-row">
                <a href="https://linkedin.com/in/jubairzidan" target="_blank" rel="noreferrer">LinkedIn: jubairzidan</a>
                <span>•</span>
                <a href="https://scholar.google.com" target="_blank" rel="noreferrer">Google Scholar Profile</a>
                <span>•</span>
                <a href="https://github.com" target="_blank" rel="noreferrer">GitHub: jubairzidan</a>
              </div>
            </header>

            <div className="cv-sheet-divider" />

            {/* Academic Education */}
            <section className="cv-sheet-section">
              <h2 className="cv-sheet-section-title">
                <GraduationCap size={15} />
                <span>Education</span>
              </h2>

              <div className="cv-sheet-item">
                <div className="cv-item-header">
                  <div>
                    <h3 className="cv-item-title">Master of Science (M.Sc.) in Mechanical Engineering</h3>
                    <div className="cv-item-subtitle">Chittagong University of Engineering and Technology (CUET)</div>
                  </div>
                  <div className="cv-item-date">2025 – 2026 (Ongoing)</div>
                </div>
                <ul className="cv-item-bullets">
                  <li>Theory Coursework Cumulative CGPA: <strong>3.90 / 4.00</strong></li>
                  <li>Specialized coursework in Advanced Computational Fluid Dynamics, Turbulence Modeling, and Metamaterials.</li>
                  <li>Master's Thesis Research in progress; tentative defence scheduled for August–September 2026.</li>
                </ul>
              </div>

              <div className="cv-sheet-item">
                <div className="cv-item-header">
                  <div>
                    <h3 className="cv-item-title">Bachelor of Science (B.Sc.) in Mechanical Engineering</h3>
                    <div className="cv-item-subtitle">Chittagong University of Engineering and Technology (CUET)</div>
                  </div>
                  <div className="cv-item-date">2019 – 2024</div>
                </div>
                <ul className="cv-item-bullets">
                  <li>Cumulative GPA across Upper Semesters: <strong>3.41 / 4.00</strong> (Graduating Class 2024).</li>
                  <li>Senior Capstone Undergraduate Thesis: <em>High-Fidelity 3D Ground Effect Aerodynamics of Venturi Tunnels under Modern FIA Regulations</em>.</li>
                </ul>
              </div>
            </section>

            {/* Research & Publications */}
            <section className="cv-sheet-section">
              <h2 className="cv-sheet-section-title">
                <BookOpen size={15} />
                <span>Research Experience & Publications</span>
              </h2>

              <div className="cv-sheet-item">
                <div className="cv-item-header">
                  <div>
                    <h3 className="cv-item-title">Undergraduate Thesis: Ground-Effect Aerodynamics & CFD</h3>
                    <div className="cv-item-subtitle">Dept. of Mechanical Engineering, CUET • 2024</div>
                  </div>
                  <div className="cv-item-tag">Bachelor Thesis</div>
                </div>
                <ul className="cv-item-bullets">
                  <li>Formulated complete computational fluid dynamics (CFD) model for racecar underbody Venturi floor aerodynamics using ANSYS Fluent.</li>
                  <li>Investigated suction peak retention, side-skirt vortex seal preservation, and ride-height aerodynamic sensitivity under boundary conditions.</li>
                </ul>
              </div>

              <div className="cv-sheet-item">
                <div className="cv-item-header">
                  <div>
                    <h3 className="cv-item-title">Manuscript: Architected Auxetic Mechanical Metamaterials for Energy Absorption</h3>
                    <div className="cv-item-subtitle">Currently Under Review • Co-author with Dr. Kazi Zahir Uddin (UIUC / CUET)</div>
                  </div>
                  <div className="cv-item-tag">Review Article</div>
                </div>
                <ul className="cv-item-bullets">
                  <li>Comprehensive state-of-the-art synthesis and characterization of negative Poisson's ratio cellular metamaterials.</li>
                  <li>Analyzed 2D re-entrant, chiral, and 3D rotational lattices for specific energy absorption (SEA) and crashworthiness applications.</li>
                </ul>
              </div>

              <div className="cv-sheet-item">
                <div className="cv-item-header">
                  <div>
                    <h3 className="cv-item-title">Conference Proceedings: Bionic Leading-Edge Tubercles on Airfoils</h3>
                    <div className="cv-item-subtitle">International Conference on Mechanical Engineering and Renewable Energy (ICMERE)</div>
                  </div>
                  <div className="cv-item-tag">Conference Paper</div>
                </div>
                <ul className="cv-item-bullets">
                  <li>Numerical simulation analyzing boundary layer control, vortex generation, and stall angle delay across modified NACA airfoils.</li>
                </ul>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="cv-sheet-section">
              <h2 className="cv-sheet-section-title">
                <Cpu size={15} />
                <span>Technical & Computational Skills</span>
              </h2>

              <div className="cv-skills-grid">
                <div className="cv-skill-row">
                  <span className="cv-skill-category">CAD & Design:</span>
                  <span className="cv-skill-items">SolidWorks (CSWA Certified)</span>
                </div>
                <div className="cv-skill-row">
                  <span className="cv-skill-category">Simulation & CFD:</span>
                  <span className="cv-skill-items">ANSYS Fluent, ANSYS LS-DYNA, OpenFOAM (Foundational Knowledge), COMSOL Multiphysics (Foundational Knowledge)</span>
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
                  <span className="cv-skill-category">Documentation, Version Control & Graphics:</span>
                  <span className="cv-skill-items">Git & GitHub, LaTeX, Mendeley, MS Office, Adobe Illustrator, Adobe Photoshop, Figma</span>
                </div>
                <div className="cv-skill-row">
                  <span className="cv-skill-category">Operating Systems:</span>
                  <span className="cv-skill-items">macOS, Windows</span>
                </div>
              </div>
            </section>

            {/* Professional & Leadership Experience */}
            <section className="cv-sheet-section">
              <h2 className="cv-sheet-section-title">
                <Briefcase size={15} />
                <span>Professional & Leadership Experience</span>
              </h2>

              <div className="cv-sheet-item">
                <div className="cv-item-header">
                  <div>
                    <h3 className="cv-item-title">ASME Student Section CUET — Executive Committee Member</h3>
                    <div className="cv-item-subtitle">American Society of Mechanical Engineers Student Section</div>
                  </div>
                  <div className="cv-item-date">2022 – 2024</div>
                </div>
                <ul className="cv-item-bullets">
                  <li>Coordinated national mechanical design symposiums, CAD workshops, and professional guest lecture series for 200+ delegates.</li>
                </ul>
              </div>

              <div className="cv-sheet-item">
                <div className="cv-item-header">
                  <div>
                    <h3 className="cv-item-title">Industrial Attachment — Combined Cycle Thermal Power Station</h3>
                    <div className="cv-item-subtitle">Gas Turbine Operations & Heat Recovery Steam Generators (HRSG)</div>
                  </div>
                  <div className="cv-item-date">2023</div>
                </div>
                <ul className="cv-item-bullets">
                  <li>Conducted hands-on plant study analyzing thermodynamic cycles, turbine maintenance protocols, and operational safety standards.</li>
                </ul>
              </div>

              <div className="cv-sheet-item">
                <div className="cv-item-header">
                  <div>
                    <h3 className="cv-item-title">Academic Instructorship & STEM Mentor — Physics & Calculus</h3>
                    <div className="cv-item-subtitle">Higher Secondary & College Level Engineering Aspirants</div>
                  </div>
                  <div className="cv-item-date">2021 – Present</div>
                </div>
                <ul className="cv-item-bullets">
                  <li>Delivered comprehensive problem-solving modules across classical Newtonian mechanics, thermodynamics, electromagnetism, and differential calculus.</li>
                </ul>
              </div>
            </section>

            {/* Honors & Accreditations */}
            <section className="cv-sheet-section" style={{ marginBottom: 0 }}>
              <h2 className="cv-sheet-section-title">
                <Award size={15} />
                <span>Honors & Recognitions</span>
              </h2>

              <ul className="cv-item-bullets">
                <li><strong>Champion</strong> — National Mechanical Engineering Innovation Design Challenge.</li>
                <li><strong>Scholarly Poster Symposium Award</strong> for Aerodynamic Ground-Effect Investigations at CUET Research Showcase.</li>
                <li><strong>Faculty Delegate</strong> — Global Student Leadership Summit representing the Faculty of Mechanical Engineering, CUET.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
