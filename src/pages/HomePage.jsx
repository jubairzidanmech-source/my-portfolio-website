import React from 'react';
import { GraduationCap, Award, Briefcase, ChevronRight } from 'lucide-react';
import { Hero3Col } from '../components/Hero3Col';

export const HomePage = ({ setActivePage }) => {
  return (
    <div className="container animate-fade-in">
      {/* 1. Desktop 3-Column Hero Section */}
      <Hero3Col setActivePage={setActivePage} />

      {/* 3. Quick Highlights: Academics, Awards & Experience Links */}
      <section className="section-spacing" style={{ paddingTop: '10px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {/* Academics Preview Card */}
          <div 
            className="card card-interactive" 
            onClick={() => setActivePage('academics')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div className="preview-card-icon-box">
                <GraduationCap size={20} />
              </div>
              <div>
                <span className="preview-card-category">
                  Academic Credentials
                </span>
                <h3 className="preview-card-title">
                  CUET Degree & Progress
                </h3>
              </div>
            </div>
            <p className="preview-card-desc">
              B.Sc. in Mechanical Engineering with 3.41 upper semesters CGPA. Ongoing M.Sc. with coursework concluded.
            </p>
            <div className="preview-card-action">
              <span className="preview-card-action-text">
                View Education Timeline
              </span>
              <ChevronRight size={16} className="preview-card-action-arrow" />
            </div>
          </div>

          {/* Awards Preview Card */}
          <div 
            className="card card-interactive" 
            onClick={() => setActivePage('awards')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div className="preview-card-icon-box">
                <Award size={20} />
              </div>
              <div>
                <span className="preview-card-category">
                  Recognition & Honors
                </span>
                <h3 className="preview-card-title">
                  Awards & Certifications
                </h3>
              </div>
            </div>
            <p className="preview-card-desc">
              Champion at Climate Justice 2023, Certified SolidWorks Associate (CSWA), and multiple poster symposium awards.
            </p>
            <div className="preview-card-action">
              <span className="preview-card-action-text">
                Browse All Honors
              </span>
              <ChevronRight size={16} className="preview-card-action-arrow" />
            </div>
          </div>

          {/* Experience Preview Card */}
          <div 
            className="card card-interactive" 
            onClick={() => setActivePage('experience')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div className="preview-card-icon-box">
                <Briefcase size={20} />
              </div>
              <div>
                <span className="preview-card-category">
                  Practical Experience
                </span>
                <h3 className="preview-card-title">
                  RPCL Internship & ASME
                </h3>
              </div>
            </div>
            <p className="preview-card-desc">
              25 MW Dual-fuel thermal plant industrial attachment, ASME presidency leadership, and extensive STEM instructorship.
            </p>
            <div className="preview-card-action">
              <span className="preview-card-action-text">
                Explore Experiences
              </span>
              <ChevronRight size={16} className="preview-card-action-arrow" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
