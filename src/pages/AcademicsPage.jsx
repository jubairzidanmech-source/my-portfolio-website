import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  GraduationCap, 
  Award, 
  Eye, 
  FileText, 
  ExternalLink, 
  Download, 
  X 
} from 'lucide-react';

// Academic CGPA / GPA Display (Clean typography without oversized boxes or bright badges)
const CgpaStatNumber = ({ value, max, label, sublabel, badge }) => {
  return (
    <div className="academic-cgpa-item">
      <div className="academic-cgpa-primary">
        <span className="academic-cgpa-num">
          {typeof value === 'number' ? value.toFixed(2) : value}
        </span>
        <span className="academic-cgpa-scale">
          / {typeof max === 'number' ? max.toFixed(2) : max}
        </span>
        {badge && <span className="academic-cgpa-subtle-tag">{badge}</span>}
      </div>
      <div className="academic-cgpa-info">
        <span className="academic-cgpa-label">{label}</span>
        {sublabel && <span className="academic-cgpa-sublabel"> — {sublabel}</span>}
      </div>
    </div>
  );
};

export const AcademicsPage = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsCertModalOpen(false);
    };
    if (isCertModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCertModalOpen]);

  const toggleSection = (id) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="container animate-fade-in">
      {/* Editorial Page Header */}
      <div className="page-intro">
        <h1 className="page-title">
          Academic <span className="header-badge">Journey</span>
        </h1>
        <p className="page-subtitle">
          Timeline of higher education milestones, degrees conferred, and current postgraduate standing.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="timeline-spine-wrapper">
        {/* 1. M.Sc. in Mechanical Engineering (Current Degree) */}
        <div className="timeline-row is-current">
          <div className="timeline-axis">
            <div className="timeline-node-circle">
              <div className="timeline-node-inner-dot" />
            </div>
            <span className="timeline-year-text">2025 – 2026</span>
          </div>

          <div className="timeline-academic-card is-current">
            <div className="timeline-card-header">
              <span className="degree-badge-dark">MSc</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <h3 className="timeline-card-heading">Master of Science in Mechanical Engineering</h3>
                  <span className="timeline-current-pill">Current Degree</span>
                </div>
                <div className="timeline-card-subheading">
                  Chittagong University of Engineering and Technology (CUET) · Chattogram
                </div>
              </div>
            </div>

            <div className="timeline-card-hairline" />

            {/* M.Sc. CGPA Display: 3.90 / 4.00 */}
            <div className="academic-cgpa-group">
              <CgpaStatNumber
                value={3.90}
                max={4.00}
                label="Coursework CGPA"
                sublabel="Completed Advanced Postgraduate Theory Courses"
                badge="Postgraduate"
              />
            </div>

            {/* Expandable Action Button */}
            <div style={{ marginTop: '16px' }}>
              <button
                onClick={() => toggleSection('msc-milestones')}
                className="pub-expand-btn"
                aria-expanded={Boolean(expandedSections['msc-milestones'])}
              >
                <span>{expandedSections['msc-milestones'] ? 'Hide Progress Milestones & Curriculum' : 'View Progress Milestones & Curriculum'}</span>
                {expandedSections['msc-milestones'] ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
              </button>
            </div>

            {/* M.Sc. Expandable Details - Clean List without Nested Box-in-Box styling */}
            {expandedSections['msc-milestones'] && (
              <div style={{ marginTop: '18px', paddingTop: '18px', borderTop: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
                  <span className="milestones-label">
                    Progress & Milestones Completed
                  </span>
                  <span className="milestones-badge">
                    Active Postgraduate Standing
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '2px' }}>
                        Theory Coursework: Finished
                      </div>
                      <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                        Successfully completed all advanced postgraduate theory credit courses with CGPA 3.90/4.00.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <Clock size={16} color="#817CB8" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '2px' }}>
                        Master's Thesis: Ongoing
                      </div>
                      <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                        Active computational simulation, manuscript drafting, and defense preparation in mechanical metamaterials.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <Sparkles size={16} color="#817CB8" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '2px' }}>
                        Conferral: Aug – Sept 2026
                      </div>
                      <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                        Tentative target completion for formal thesis defence and degree conferral.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 2. B.Sc. in Mechanical Engineering */}
        <div className="timeline-row">
          <div className="timeline-axis">
            <div className="timeline-node-circle">
              <div className="timeline-node-inner-dot" />
            </div>
            <span className="timeline-year-text">2019 – 2024</span>
          </div>

          <div className="timeline-academic-card">
            <div className="timeline-card-header">
              <span className="degree-badge-dark">BSc</span>
              <div>
                <h3 className="timeline-card-heading">Bachelor of Science in Mechanical Engineering</h3>
                <div className="timeline-card-subheading">
                  Chittagong University of Engineering and Technology (CUET) · Chattogram
                </div>
              </div>
            </div>

            <div className="timeline-card-hairline" />

            {/* Prominent Numbers: Overall CGPA and Last 4 Semesters */}
            <div className="academic-cgpa-group">
              <CgpaStatNumber
                value={3.29}
                max={4.00}
                label="Overall Cumulative CGPA"
                sublabel="Across all 8 undergraduate semesters"
              />
              <CgpaStatNumber
                value={3.41}
                max={4.00}
                label="Last 4 Semesters CGPA"
                sublabel="Upper Semesters Core Engineering Trajectory"
                badge="Major Focus"
              />
            </div>

            {/* Expandable Details Button */}
            <div style={{ marginTop: '16px' }}>
              <button
                onClick={() => toggleSection('bsc-details')}
                className="pub-expand-btn"
                aria-expanded={Boolean(expandedSections['bsc-details'])}
              >
                <span>{expandedSections['bsc-details'] ? 'Hide Major Focus & Curriculum Scope' : 'View Major Focus & Curriculum Scope'}</span>
                {expandedSections['bsc-details'] ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
              </button>
            </div>

            {expandedSections['bsc-details'] && (
              <div style={{ marginTop: '18px', paddingTop: '18px', borderTop: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={16} color="var(--blue-royal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '2px' }}>
                        Core Engineering Track
                      </div>
                      <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                        Fluid dynamics, thermodynamics, heat transfer, solid mechanics, aerodynamics, and numerical methods.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <GraduationCap size={16} color="var(--blue-royal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '2px' }}>
                        Graduation Standing
                      </div>
                      <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                        Graduated with First Class Standing; 160+ total credit hours completed across all laboratory and lecture coursework.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Official Academic Certificate Verification Box */}
            <div className="academic-cert-box">
              <div className="academic-cert-content">
                <div className="academic-cert-header-row">
                  <div className="academic-cert-icon-badge">
                    <Award size={18} />
                  </div>
                  <div className="academic-cert-title-col">
                    <div className="academic-cert-tag-row">
                      <span className="academic-cert-tag">Official Degree Credential</span>
                      <span className="academic-cert-status-badge">
                        <CheckCircle2 size={12} />
                        <span>Conferred & Verified (2024)</span>
                      </span>
                    </div>
                    <h4 className="academic-cert-heading">
                      Official B.Sc. Degree Certificate
                    </h4>
                  </div>
                </div>

                <p className="academic-cert-desc">
                  Official certificate issued by Chittagong University of Engineering and Technology (CUET). Available in official document PDF format for prospective faculty advisors, admissions committees, and academic verification.
                </p>

                <div className="academic-cert-actions">
                  <button
                    onClick={() => setIsCertModalOpen(true)}
                    className="btn btn-primary academic-cert-btn-primary"
                    title="View official degree certificate"
                  >
                    <Eye size={15} />
                    <span>View Official Certificate</span>
                  </button>

                  <a
                    href="/docs/CUET_BSc_Mechanical_Engineering_Certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary academic-cert-btn-secondary"
                    title="Open Certificate PDF in new browser tab"
                  >
                    <FileText size={14} />
                    <span>Open PDF</span>
                    <ExternalLink size={13} />
                  </a>

                  <a
                    href="/docs/CUET_BSc_Mechanical_Engineering_Certificate.pdf"
                    download="CUET_BSc_Mechanical_Engineering_Certificate.pdf"
                    className="academic-cert-btn-download"
                    title="Download Official Certificate PDF"
                  >
                    <Download size={14} />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Higher Secondary Certificate (HSC) */}
        <div className="timeline-row">
          <div className="timeline-axis">
            <div className="timeline-node-circle">
              <div className="timeline-node-inner-dot" />
            </div>
            <span className="timeline-year-text">2016 – 2018</span>
          </div>

          <div className="timeline-academic-card">
            <div className="timeline-card-header">
              <span className="degree-badge-dark">HSC</span>
              <div>
                <h3 className="timeline-card-heading">Higher Secondary School Certificate</h3>
                <div className="timeline-card-subheading">
                  Notre Dame College · Dhaka
                </div>
              </div>
            </div>

            <div className="timeline-card-hairline" />

            <div className="academic-cgpa-group">
              <CgpaStatNumber
                value={5.00}
                max={5.00}
                label="Higher Secondary Certificate GPA"
                sublabel="Science Division • Golden / Perfect Score"
                badge="Perfect GPA"
              />
            </div>
          </div>
        </div>

        {/* 4. Secondary School Certificate (SSC) */}
        <div className="timeline-row">
          <div className="timeline-axis">
            <div className="timeline-node-circle">
              <div className="timeline-node-inner-dot" />
            </div>
            <span className="timeline-year-text">2008 – 2016</span>
          </div>

          <div className="timeline-academic-card">
            <div className="timeline-card-header">
              <span className="degree-badge-dark">SSC</span>
              <div>
                <h3 className="timeline-card-heading">Secondary School Certificate</h3>
                <div className="timeline-card-subheading">
                  Barishal Zilla School · Barishal
                </div>
              </div>
            </div>

            <div className="timeline-card-hairline" />

            <div className="academic-cgpa-group">
              <CgpaStatNumber
                value={5.00}
                max={5.00}
                label="Secondary School Certificate GPA"
                sublabel="Science Division • Golden / Perfect Score"
                badge="Perfect GPA"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Official Certificate Document Modal */}
      {isCertModalOpen && (
        <div 
          className="cert-modal-overlay"
          onClick={() => setIsCertModalOpen(false)}
        >
          <div 
            className="cert-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="cert-modal-header">
              <div className="cert-modal-title-col">
                <span className="cert-modal-tag">Official Degree Document</span>
                <h3 className="cert-modal-title">
                  Bachelor of Science in Mechanical Engineering — Certificate
                </h3>
                <div className="cert-modal-sub">
                  Chittagong University of Engineering and Technology (CUET) · Conferred 2024
                </div>
              </div>

              <div className="cert-modal-actions">
                <a
                  href="/docs/CUET_BSc_Mechanical_Engineering_Certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-modal-btn"
                  title="Open in new window"
                >
                  <ExternalLink size={14} />
                  <span>Open Tab</span>
                </a>
                <a
                  href="/docs/CUET_BSc_Mechanical_Engineering_Certificate.pdf"
                  download="CUET_BSc_Mechanical_Engineering_Certificate.pdf"
                  className="cert-modal-btn"
                  title="Download Certificate PDF"
                >
                  <Download size={14} />
                  <span>Download</span>
                </a>
                <button
                  onClick={() => setIsCertModalOpen(false)}
                  className="cert-modal-close"
                  aria-label="Close certificate viewer"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Stage */}
            <div className="cert-modal-stage">
              <iframe
                src="/docs/CUET_BSc_Mechanical_Engineering_Certificate.pdf#toolbar=1"
                className="cert-pdf-iframe"
                title="Official B.Sc. Certificate PDF"
              />
            </div>

            {/* Footer */}
            <div className="cert-modal-footer">
              <div className="cert-modal-verify-text">
                <CheckCircle2 size={14} color="#10b981" />
                <span>Certified academic degree record of Md. Jubair Uddin Zidan • Department of Mechanical Engineering</span>
              </div>
              <span className="cert-modal-filename">CUET_BSc_Mechanical_Engineering_Certificate.pdf</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
