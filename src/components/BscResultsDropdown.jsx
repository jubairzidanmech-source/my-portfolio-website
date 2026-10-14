import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  Award, 
  GraduationCap, 
  CheckCircle2, 
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';
import { bscSummaryData, bscSemesterResults } from '../data/bscResultsData';

export const BscResultsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSemId, setSelectedSemId] = useState('overview'); // 'overview' or semester id (1..8)

  const currentSemester = bscSemesterResults.find(s => s.id === Number(selectedSemId));

  const getGradeBadgeClass = (grade) => {
    if (grade.startsWith('A')) return 'grade-badge-a';
    if (grade.startsWith('B')) return 'grade-badge-b';
    if (grade.startsWith('C')) return 'grade-badge-c';
    return 'grade-badge-d';
  };

  const getTypeBadgeClass = (type) => {
    if (type === 'Theory') return 'type-badge-theory';
    if (type === 'Lab') return 'type-badge-lab';
    return 'type-badge-project';
  };

  return (
    <div className="bsc-results-dropdown-container">
      {/* Top Header Row */}
      <div className="msc-status-header">
        <span className="milestones-label">
          Academic Standing & Semester Results
        </span>
        <span 
          className="milestones-badge" 
          style={{ 
            background: 'rgba(16, 185, 129, 0.1)', 
            color: '#10B981', 
            borderColor: 'rgba(16, 185, 129, 0.25)' 
          }}
        >
          Degree Conferred · 161.50 Credits
        </span>
      </div>

      {/* Primary Key Milestones Summary Bar */}
      <div className="bsc-summary-pills-row">
        <div className="bsc-milestone-pill">
          <CheckCircle2 size={14} color="#10B981" />
          <span>Core Engineering Track: 161.50 Credits (74 Courses)</span>
        </div>
        <div className="bsc-milestone-pill">
          <CheckCircle2 size={14} color="#10B981" />
          <span>Undergraduate Thesis: Ground-Effect Aerodynamics</span>
        </div>
        <div className="bsc-milestone-pill">
          <GraduationCap size={14} color="var(--blue-royal)" />
          <span>Graduation Standing: First Class Honors</span>
        </div>
      </div>

      {/* Interactive Dropdown Trigger Box */}
      <div className="bsc-dropdown-box">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`bsc-dropdown-trigger-btn ${isOpen ? 'is-active' : ''}`}
          aria-expanded={isOpen}
          title="Toggle semester-by-semester course and GPA breakdown"
        >
          <div className="bsc-dropdown-trigger-left">
            <span className="bsc-dropdown-icon-wrap">
              <Layers size={16} />
            </span>
            <div className="bsc-dropdown-trigger-text">
              <span className="bsc-dropdown-title">
                Semester-by-Semester Academic Results (Level 1–4)
              </span>
              <span className="bsc-dropdown-subtitle">
                {isOpen 
                  ? 'Click to collapse semester breakdown' 
                  : 'Click to open drop-down menu & browse all 8 semesters (Courses, Credits & GPAs)'}
              </span>
            </div>
          </div>

          <div className="bsc-dropdown-trigger-right">
            <span className="bsc-dropdown-status-pill">
              {isOpen ? 'Close Menu' : 'Browse Results'}
            </span>
            <span className="bsc-dropdown-chevron">
              {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </span>
          </div>
        </button>

        {/* Dropdown Menu Content Body */}
        {isOpen && (
          <div className="bsc-dropdown-menu-content animate-fade-in">
            {/* Dropdown Menu Selector Controls */}
            <div className="bsc-dropdown-nav-row">
              <div className="bsc-select-wrapper">
                <label htmlFor="bsc-semester-select" className="bsc-select-label">
                  Choose Semester Menu:
                </label>
                <div className="bsc-select-styled-container">
                  <select
                    id="bsc-semester-select"
                    value={selectedSemId}
                    onChange={(e) => setSelectedSemId(e.target.value)}
                    className="bsc-custom-select"
                  >
                    <option value="overview">
                      📊 All 8 Semesters Overview (Summary & GPA Chart)
                    </option>
                    {bscSemesterResults.map(sem => (
                      <option key={sem.id} value={sem.id}>
                        {sem.semesterNumber}: {sem.term} — GPA: {sem.gpa.toFixed(2)} ({sem.credits.toFixed(2)} Cr)
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={15} className="bsc-select-chevron" />
                </div>
              </div>

              {/* Fast-Click Semester Filter Pills */}
              <div className="bsc-quick-pills-bar">
                <button
                  type="button"
                  onClick={() => setSelectedSemId('overview')}
                  className={`bsc-quick-pill ${selectedSemId === 'overview' ? 'is-active' : ''}`}
                >
                  Overview
                </button>
                {bscSemesterResults.map(sem => (
                  <button
                    key={sem.id}
                    type="button"
                    onClick={() => setSelectedSemId(String(sem.id))}
                    className={`bsc-quick-pill ${selectedSemId === String(sem.id) ? 'is-active' : ''}`}
                    title={`${sem.semesterNumber} (${sem.term})`}
                  >
                    Sem {sem.id}
                  </button>
                ))}
              </div>
            </div>

            {/* Display: Overview View */}
            {selectedSemId === 'overview' && (
              <div className="bsc-overview-panel">
                {/* 4 Summary Metric Boxes */}
                <div className="bsc-metrics-grid">
                  <div className="bsc-metric-card">
                    <span className="bsc-metric-num">3.29</span>
                    <span className="bsc-metric-label">Cumulative Final CGPA</span>
                    <span className="bsc-metric-sub">Out of 4.00</span>
                  </div>
                  <div className="bsc-metric-card highlight-card">
                    <span className="bsc-metric-num">3.41</span>
                    <span className="bsc-metric-label">Last 4 Semesters GPA</span>
                    <span className="bsc-metric-sub">Weighted Upper Division</span>
                  </div>
                  <div className="bsc-metric-card">
                    <span className="bsc-metric-num">161.50</span>
                    <span className="bsc-metric-label">Total Earned Credits</span>
                    <span className="bsc-metric-sub">Across 8 Semesters</span>
                  </div>
                  <div className="bsc-metric-card">
                    <span className="bsc-metric-num">74</span>
                    <span className="bsc-metric-label">Course Entries</span>
                    <span className="bsc-metric-sub">40 Theory • 32 Lab • 2 Thesis</span>
                  </div>
                </div>

                {/* 8 Semesters Overview Table */}
                <div className="bsc-table-container">
                  <table className="bsc-data-table">
                    <thead>
                      <tr>
                        <th>Semester</th>
                        <th>Level / Term</th>
                        <th>Academic Session</th>
                        <th style={{ textAlign: 'center' }}>Official GPA</th>
                        <th style={{ textAlign: 'center' }}>Credits</th>
                        <th style={{ textAlign: 'right' }}>Courses</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bscSummaryData.semestersOverview.map((item) => (
                        <tr 
                          key={item.sem} 
                          onClick={() => setSelectedSemId(String(item.sem))}
                          className="bsc-clickable-row"
                          title={`Click to view courses for Semester ${item.sem}`}
                        >
                          <td>
                            <strong className="bsc-sem-tag">Semester {item.sem}</strong>
                          </td>
                          <td>{item.levelTerm}</td>
                          <td className="bsc-session-text">{item.session}</td>
                          <td style={{ textAlign: 'center' }}>
                            <span className="bsc-gpa-badge">{item.gpa.toFixed(2)}</span>
                          </td>
                          <td style={{ textAlign: 'center' }} className="bsc-credits-text">
                            {item.credits.toFixed(2)}
                          </td>
                          <td style={{ textAlign: 'right' }}>
                            <span className="bsc-view-btn-inline">
                              <span>View</span>
                              <ArrowRight size={12} />
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Display: Individual Semester View */}
            {selectedSemId !== 'overview' && currentSemester && (
              <div className="bsc-semester-detail-panel">
                {/* Semester Banner Info */}
                <div className="bsc-semester-banner">
                  <div className="bsc-semester-banner-left">
                    <div className="bsc-semester-level-badge">
                      {currentSemester.semesterNumber} • {currentSemester.term}
                    </div>
                    <div className="bsc-semester-session-meta">
                      Academic Session: {currentSemester.session}
                    </div>
                  </div>

                  <div className="bsc-semester-banner-right">
                    <div className="bsc-banner-stat-box">
                      <span className="bsc-banner-stat-label">Official GPA</span>
                      <span className="bsc-banner-stat-val gpa-val">
                        {currentSemester.gpa.toFixed(2)}
                        <small>/ 4.00</small>
                      </span>
                    </div>
                    <div className="bsc-banner-stat-box">
                      <span className="bsc-banner-stat-label">Credits Earned</span>
                      <span className="bsc-banner-stat-val">
                        {currentSemester.credits.toFixed(2)}
                      </span>
                    </div>
                    <div className="bsc-banner-stat-box">
                      <span className="bsc-banner-stat-label">Total Courses</span>
                      <span className="bsc-banner-stat-val">
                        {currentSemester.courses.length}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Courses Table */}
                <div className="bsc-table-container">
                  <table className="bsc-data-table">
                    <thead>
                      <tr>
                        <th style={{ width: '15%' }}>Code</th>
                        <th style={{ width: '45%' }}>Course Title</th>
                        <th style={{ width: '14%', textAlign: 'center' }}>Type</th>
                        <th style={{ width: '10%', textAlign: 'center' }}>Credits</th>
                        <th style={{ width: '8%', textAlign: 'center' }}>Grade</th>
                        <th style={{ width: '8%', textAlign: 'center' }}>GP</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentSemester.courses.map((course, idx) => (
                        <tr key={idx}>
                          <td>
                            <code className="bsc-course-code">{course.code}</code>
                          </td>
                          <td className="bsc-course-title-cell">
                            {course.title}
                          </td>
                          <td style={{ textAlign: 'center' }}>
                            <span className={`bsc-type-badge ${getTypeBadgeClass(course.type)}`}>
                              {course.type}
                            </span>
                          </td>
                          <td style={{ textAlign: 'center' }} className="bsc-credits-text">
                            {course.ch}
                          </td>
                          <td style={{ textAlign: 'center' }}>
                            <span className={`bsc-grade-badge ${getGradeBadgeClass(course.grade)}`}>
                              {course.grade}
                            </span>
                          </td>
                          <td style={{ textAlign: 'center' }} className="bsc-gp-text">
                            {course.gp}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Bottom Navigation Buttons */}
                <div className="bsc-semester-nav-footer">
                  <button
                    type="button"
                    onClick={() => {
                      const prevId = Number(selectedSemId) - 1;
                      if (prevId >= 1) setSelectedSemId(String(prevId));
                      else setSelectedSemId('overview');
                    }}
                    className="bsc-nav-btn"
                  >
                    ← {Number(selectedSemId) === 1 ? 'Back to Overview' : `Previous (Sem ${Number(selectedSemId) - 1})`}
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedSemId('overview')}
                    className="bsc-nav-btn bsc-nav-btn-center"
                  >
                    View All Semesters Overview
                  </button>

                  <button
                    type="button"
                    disabled={Number(selectedSemId) === 8}
                    onClick={() => {
                      const nextId = Number(selectedSemId) + 1;
                      if (nextId <= 8) setSelectedSemId(String(nextId));
                    }}
                    className={`bsc-nav-btn ${Number(selectedSemId) === 8 ? 'is-disabled' : ''}`}
                  >
                    Next (Sem {Number(selectedSemId) + 1}) →
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
