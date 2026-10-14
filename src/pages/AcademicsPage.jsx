import React, { useState, useEffect } from 'react';
import { 
  Check,
  CheckCircle2, 
  Clock, 
  Sparkles, 
  BookOpen, 
  GraduationCap, 
  Award, 
  Eye, 
  FileText, 
  ExternalLink, 
  X 
} from 'lucide-react';
import { BscResultsDropdown } from '../components/BscResultsDropdown';

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
  const [activeDocModal, setActiveDocModal] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveDocModal(null);
    };
    if (activeDocModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeDocModal]);

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
        <div 
          id="degree-msc" 
          data-degree-id="msc" 
          className="timeline-row is-current"
        >
          <div className="timeline-axis">
            <div className="timeline-node-outer-halo">
              <div className="timeline-stepper-node is-in-progress">
                <span className="timeline-pulse-node" />
                <span className="stepper-step-num">4</span>
              </div>
            </div>
            <div className="timeline-axis-meta">
              <span className="timeline-year-text">2025 – 2027</span>
              <div className="timeline-axis-badge-row">
                <span className="timeline-axis-status is-in-progress">In Progress</span>
              </div>
            </div>
          </div>

          <div className="timeline-academic-card is-current">
            <div className="timeline-card-header">
              <div className="timeline-inst-logo-box">
                <img 
                  src="/images/real/cuet_logo.png" 
                  alt="Chittagong University of Engineering and Technology (CUET) Logo" 
                  className="timeline-inst-logo-img" 
                  loading="lazy"
                />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <h3 className="timeline-card-heading">Master of Science in Mechanical Engineering</h3>
                  <span className="degree-badge-dark">MSc</span>
                  <span className="timeline-current-pill">
                    <span className="timeline-pill-dot" />
                    Currently In Progress
                  </span>
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

            {/* Current Status & Progress Milestones: Open Display (No dropdown, No descriptions) */}
            <div className="msc-status-block">
              <div className="msc-status-header">
                <span className="milestones-label">
                  Current Status & Progress Milestones
                </span>
                <span className="milestones-badge">
                  Active Postgraduate Standing
                </span>
              </div>

              <div className="msc-milestones-grid is-compact">
                <div className="msc-milestone-item is-compact">
                  <CheckCircle2 size={15} className="msc-milestone-icon msc-icon-check" />
                  <span className="msc-milestone-title">
                    Theory Coursework: Finished
                  </span>
                </div>

                <div className="msc-milestone-item is-compact is-ongoing">
                  <Clock size={15} className="msc-milestone-icon msc-icon-clock" />
                  <span className="msc-milestone-title">
                    Master's Thesis: Ongoing
                  </span>
                </div>

                <div className="msc-milestone-item is-compact">
                  <Sparkles size={15} className="msc-milestone-icon msc-icon-sparkles" />
                  <span className="msc-milestone-title">
                    Conferral: Aug – Sept 2026 / Jan 2027 (Tentative)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. B.Sc. in Mechanical Engineering */}
        <div 
          id="degree-bsc" 
          data-degree-id="bsc" 
          className="timeline-row"
        >
          <div className="timeline-axis">
            <div className="timeline-node-outer-halo">
              <div className="timeline-stepper-node is-completed">
                <Check size={14} strokeWidth={3} className="stepper-check-icon" />
              </div>
            </div>
            <div className="timeline-axis-meta">
              <span className="timeline-year-text">2019 – 2024</span>
              <div className="timeline-axis-badge-row">
                <span className="timeline-axis-status is-completed">Conferred</span>
              </div>
            </div>
          </div>

          <div className="timeline-academic-card">
            <div className="timeline-card-header">
              <div className="timeline-inst-logo-box">
                <img 
                  src="/images/real/cuet_logo.png" 
                  alt="Chittagong University of Engineering and Technology (CUET) Logo" 
                  className="timeline-inst-logo-img" 
                  loading="lazy"
                />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <h3 className="timeline-card-heading">Bachelor of Science in Mechanical Engineering</h3>
                  <span className="degree-badge-dark">BSc</span>
                </div>
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

            {/* B.Sc. Results & Semester-by-Semester Dropdown Menu */}
            <BscResultsDropdown />

            {/* Official Academic Documents for Faculty Review */}
            {/* Official Academic Documents for Faculty Review: Side-by-Side Grid */}
            <div className="academic-cert-grid">
              {/* 1. Official Degree Certificate Box */}
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

                  <div className="academic-cert-actions">
                    <button
                      onClick={() => setActiveDocModal({
                        title: "Bachelor of Science in Mechanical Engineering — Degree Certificate",
                        subtitle: "Chittagong University of Engineering and Technology (CUET) · Conferred 2024",
                        pdfUrl: "/docs/CUET_BSc_Mechanical_Engineering_Certificate.pdf",
                        filename: "CUET_BSc_Mechanical_Engineering_Certificate.pdf",
                        tag: "Official Degree Credential",
                        note: "Certified academic degree record of Md. Jubair Uddin Zidan • Department of Mechanical Engineering"
                      })}
                      className="btn btn-primary academic-cert-btn-primary"
                      title="View official degree certificate"
                    >
                      <Eye size={15} />
                      <span>View Official Certificate</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* 2. Official Academic Transcript Box */}
              <div className="academic-cert-box">
                <div className="academic-cert-content">
                  <div className="academic-cert-header-row">
                    <div className="academic-cert-icon-badge">
                      <FileText size={18} />
                    </div>
                    <div className="academic-cert-title-col">
                      <div className="academic-cert-tag-row">
                        <span className="academic-cert-tag">Official Academic Transcript</span>
                        <span className="academic-cert-status-badge">
                          <CheckCircle2 size={12} />
                          <span>Complete 8-Semester Record</span>
                        </span>
                      </div>
                      <h4 className="academic-cert-heading">
                        Official Undergraduate Academic Transcript
                      </h4>
                    </div>
                  </div>

                  <div className="academic-cert-actions">
                    <button
                      onClick={() => setActiveDocModal({
                        title: "Bachelor of Science in Mechanical Engineering — Official Transcript",
                        subtitle: "Chittagong University of Engineering and Technology (CUET) · Complete 8-Semester Record",
                        pdfUrl: "/docs/Transcripts_Md_Jubair_Uddin_Zidan-3.pdf",
                        filename: "Transcripts_Md_Jubair_Uddin_Zidan-3.pdf",
                        tag: "Official Academic Transcript",
                        note: "Certified official transcript of Md. Jubair Uddin Zidan • Department of Mechanical Engineering (CUET)"
                      })}
                      className="btn btn-primary academic-cert-btn-primary"
                      title="View official academic transcript"
                    >
                      <Eye size={15} />
                      <span>View Official Transcript</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Higher Secondary Certificate (HSC) */}
        <div 
          id="degree-hsc" 
          data-degree-id="hsc" 
          className="timeline-row"
        >
          <div className="timeline-axis">
            <div className="timeline-node-outer-halo">
              <div className="timeline-stepper-node is-completed">
                <Check size={14} strokeWidth={3} className="stepper-check-icon" />
              </div>
            </div>
            <div className="timeline-axis-meta">
              <span className="timeline-year-text">2016 – 2018</span>
              <div className="timeline-axis-badge-row">
                <span className="timeline-axis-status is-completed">Completed</span>
              </div>
            </div>
          </div>

          <div className="timeline-academic-card">
            <div className="timeline-card-header">
              <div className="timeline-inst-logo-box">
                <img 
                  src="/images/real/ndc_logo.png" 
                  alt="Notre Dame College Logo" 
                  className="timeline-inst-logo-img" 
                  loading="lazy"
                />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <h3 className="timeline-card-heading">Higher Secondary School Certificate</h3>
                  <span className="degree-badge-dark">HSC</span>
                </div>
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
        <div 
          id="degree-ssc" 
          data-degree-id="ssc" 
          className="timeline-row"
        >
          <div className="timeline-axis">
            <div className="timeline-node-outer-halo">
              <div className="timeline-stepper-node is-completed">
                <Check size={14} strokeWidth={3} className="stepper-check-icon" />
              </div>
            </div>
            <div className="timeline-axis-meta">
              <span className="timeline-year-text">2008 – 2016</span>
              <div className="timeline-axis-badge-row">
                <span className="timeline-axis-status is-completed">Completed</span>
              </div>
            </div>
          </div>

          <div className="timeline-academic-card">
            <div className="timeline-card-header">
              <div className="timeline-inst-logo-box">
                <img 
                  src="/images/real/bzs_logo.png" 
                  alt="Barishal Zilla School Logo" 
                  className="timeline-inst-logo-img" 
                  loading="lazy"
                />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <h3 className="timeline-card-heading">Secondary School Certificate</h3>
                  <span className="degree-badge-dark">SSC</span>
                </div>
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

      {/* Official Academic Document Modal (Viewer Only - No Download) */}
      {activeDocModal && (
        <div 
          className="cert-modal-overlay"
          onClick={() => setActiveDocModal(null)}
        >
          <div 
            className="cert-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="cert-modal-header">
              <div className="cert-modal-title-col">
                <span className="cert-modal-tag">{activeDocModal.tag}</span>
                <h3 className="cert-modal-title">
                  {activeDocModal.title}
                </h3>
                <div className="cert-modal-sub">
                  {activeDocModal.subtitle}
                </div>
              </div>

              <div className="cert-modal-actions">
                <a
                  href={activeDocModal.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-modal-btn"
                  title="Open document in new browser tab"
                >
                  <ExternalLink size={14} />
                  <span>Open Tab</span>
                </a>
                <button
                  onClick={() => setActiveDocModal(null)}
                  className="cert-modal-close"
                  aria-label="Close document viewer"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Stage */}
            <div className="cert-modal-stage">
              <iframe
                src={`${activeDocModal.pdfUrl}#toolbar=1`}
                className="cert-pdf-iframe"
                title={activeDocModal.title}
              />
            </div>

            {/* Footer */}
            <div className="cert-modal-footer">
              <div className="cert-modal-verify-text">
                <CheckCircle2 size={14} color="#10b981" />
                <span>{activeDocModal.note}</span>
              </div>
              <span className="cert-modal-filename">{activeDocModal.filename}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
