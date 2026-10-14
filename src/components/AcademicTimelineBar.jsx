import React from 'react';
import { Check, Clock, ChevronRight } from 'lucide-react';

export const ACADEMIC_STEPS = [
  {
    id: 'ssc',
    stepNumber: 1,
    title: 'Secondary (SSC)',
    shortTitle: 'SSC',
    subtitle: 'GPA 5.00 · Completed',
    years: '2008 – 2016',
    institution: 'Barishal Zilla School',
    logoUrl: '/images/real/bzs_logo.png',
    status: 'completed',
    level: 'Secondary',
  },
  {
    id: 'hsc',
    stepNumber: 2,
    title: 'Higher Secondary (HSC)',
    shortTitle: 'HSC',
    subtitle: 'GPA 5.00 · Completed',
    years: '2016 – 2018',
    institution: 'Notre Dame College',
    logoUrl: '/images/real/ndc_logo.png',
    status: 'completed',
    level: 'Higher Secondary',
  },
  {
    id: 'bsc',
    stepNumber: 3,
    title: 'B.Sc. Mechanical Eng.',
    shortTitle: 'B.Sc.',
    subtitle: 'CGPA 3.29 · Conferred (2024)',
    years: '2019 – 2024',
    institution: 'CUET',
    logoUrl: '/images/real/cuet_logo.png',
    status: 'completed',
    level: 'Undergraduate',
  },
  {
    id: 'msc',
    stepNumber: 4,
    title: 'M.Sc. Mechanical Eng.',
    shortTitle: 'M.Sc.',
    subtitle: 'CGPA 3.90 · In Progress',
    years: '2025 – 2027',
    institution: 'CUET',
    logoUrl: '/images/real/cuet_logo.png',
    status: 'in-progress',
    level: 'Postgraduate',
  }
];

export const AcademicTimelineBar = ({ activeDegree, onSelectDegree }) => {
  // Find index of currently viewed degree (0..3)
  const activeIndex = ACADEMIC_STEPS.findIndex(s => s.id === activeDegree);
  const safeActiveIndex = activeIndex >= 0 ? activeIndex : 3;

  // Calculate progress line fill percentage
  // 4 steps -> 0%, 33.3%, 66.6%, 100%
  const progressPercent = (safeActiveIndex / (ACADEMIC_STEPS.length - 1)) * 100;

  return (
    <div className="academic-stepper-wrapper" aria-label="Academic Degree Progression Tracker">
      <div className="academic-stepper-card">
        {/* Top Header Label */}
        <div className="academic-stepper-header">
          <div className="academic-stepper-header-left">
            <span className="academic-stepper-title">Degree Progression & Academic Milestone Tracker</span>
            <span className="academic-stepper-sub">
              Click any degree to jump directly to official credentials & detailed results
            </span>
          </div>
          <div className="academic-stepper-status-badge">
            <span className="stepper-badge-pulse" />
            <span>Active Academic Journey</span>
          </div>
        </div>

        {/* Stepper Progress Bar */}
        <div className="academic-stepper-track-container">
          {/* Base Background Track Line */}
          <div className="academic-stepper-line-bg" />

          {/* Active Fill Track Line */}
          <div 
            className="academic-stepper-line-fill" 
            style={{ width: `${progressPercent}%` }} 
          />

          {/* Stepper Interactive Nodes */}
          <div className="academic-stepper-steps-row">
            {ACADEMIC_STEPS.map((step, idx) => {
              const isCompleted = step.status === 'completed';
              const isViewing = activeDegree === step.id;
              const isPassedOrCurrent = idx <= safeActiveIndex;

              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => onSelectDegree(step.id)}
                  className={`academic-stepper-step-btn ${isViewing ? 'is-viewing' : ''} ${isCompleted ? 'is-completed' : ''} ${step.status === 'in-progress' ? 'is-in-progress' : ''}`}
                  aria-current={isViewing ? 'step' : undefined}
                  title={`View ${step.title} (${step.years})`}
                >
                  {/* Step Node Circle */}
                  <div className="stepper-node-outer-ring">
                    <div className="stepper-node-circle">
                      {isCompleted ? (
                        <Check size={14} strokeWidth={3} className="stepper-check-icon" />
                      ) : (
                        <span className="stepper-step-num">{step.stepNumber}</span>
                      )}
                    </div>
                  </div>

                  {/* Step Typography Info */}
                  <div className="stepper-info-col">
                    <div className="stepper-title-row">
                      <span className="stepper-degree-title">{step.title}</span>
                      {isViewing && (
                        <span className="stepper-viewing-tag">Viewing</span>
                      )}
                    </div>
                    <span className="stepper-degree-subtitle">{step.subtitle}</span>
                    <span className="stepper-degree-years">{step.years}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
