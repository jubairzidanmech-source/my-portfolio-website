import React from 'react';
import { CheckCircle2, Clock, Sparkles } from 'lucide-react';

// Prominent Academic CGPA / GPA Number Component (Replaces circular progress bars per user request)
const CgpaStatNumber = ({ value, max, label, sublabel, badge }) => {
  return (
    <div className="academic-cgpa-card">
      <div className="academic-cgpa-header">
        <div className="academic-cgpa-val-wrap">
          <span className="academic-cgpa-num">
            {typeof value === 'number' ? value.toFixed(2) : value}
          </span>
          <span className="academic-cgpa-scale">
            / {typeof max === 'number' ? max.toFixed(2) : max}
          </span>
        </div>
        {badge && <span className="academic-cgpa-badge">{badge}</span>}
      </div>
      <div className="academic-cgpa-label">{label}</div>
      {sublabel && <div className="academic-cgpa-sublabel">{sublabel}</div>}
    </div>
  );
};

export const AcademicsPage = () => {
  return (
    <div className="container animate-fade-in">
      {/* Editorial Page Header */}
      <div className="page-intro" style={{ marginBottom: '24px' }}>
        <h1 className="page-title">
          Academic <span className="header-badge">Journey</span>
        </h1>
        <p className="page-subtitle">
          Timeline of higher education milestones, degrees conferred, and current postgraduate standing.
        </p>
      </div>

      {/* Timeline Section matching Image 02 */}
      <div className="timeline-spine-wrapper">
        {/* 1. M.Sc. in Mechanical Engineering */}
        <div className="timeline-row">
          <div className="timeline-axis">
            <div className="timeline-node-circle">
              <div className="timeline-node-inner-dot" />
            </div>
            <span className="timeline-year-text">2025 – 2026</span>
          </div>

          <div className="timeline-academic-card">
            <div className="timeline-card-header">
              <span className="degree-badge-dark">MSc</span>
              <div>
                <h3 className="timeline-card-heading">Master of Science in Mechanical Engineering</h3>
                <div className="timeline-card-subheading">
                  Chittagong University of Engineering and Technology (CUET) · Chattogram
                </div>
              </div>
            </div>

            <div className="timeline-card-hairline" />

            {/* M.Sc. CGPA Display: 3.90 / 4.00 per user request */}
            <div className="academic-cgpa-group" style={{ marginBottom: '20px' }}>
              <CgpaStatNumber
                value={3.90}
                max={4.00}
                label="Coursework CGPA"
                sublabel="Completed Advanced Postgraduate Theory Courses"
                badge="Postgraduate"
              />
            </div>

            {/* M.Sc. Completion Status Details */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
                <span className="milestones-label">
                  Progress & Milestones Completed
                </span>
                <span className="milestones-badge">
                  Active Postgraduate Standing
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
                <div className="milestone-item-box">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <CheckCircle2 size={16} color="#10B981" />
                    <span className="milestone-item-title">
                      Theory Coursework: Finished
                    </span>
                  </div>
                  <p className="milestone-item-desc">
                    Successfully completed all advanced postgraduate theory credit courses with CGPA 3.90.
                  </p>
                </div>

                <div className="milestone-item-box">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <Clock size={16} color="#817CB8" />
                    <span className="milestone-item-title">
                      Master's Thesis: Ongoing
                    </span>
                  </div>
                  <p className="milestone-item-desc">
                    Active computational simulation, manuscript drafting, and defense preparation.
                  </p>
                </div>

                <div className="milestone-item-box">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <Sparkles size={16} color="#817CB8" />
                    <span className="milestone-item-title">
                      Conferral: Aug – Sept 2026
                    </span>
                  </div>
                  <p className="milestone-item-desc">
                    Tentative target completion for formal thesis defence and degree award.
                  </p>
                </div>
              </div>
            </div>
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
    </div>
  );
};
