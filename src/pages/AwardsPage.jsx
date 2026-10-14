import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  FileText,
  Compass
} from 'lucide-react';
import { awardsData } from '../data/portfolioData';
import { InteractiveModal, ImageLightboxModal } from '../components/InteractiveModal';

// Reusable Award Card with visual placeholder/artifact thumbnail, actions & modal
const AwardCard = ({ 
  item, 
  itemIndex, 
  isExpanded, 
  onToggle, 
  onOpenModal,
  badgeClass, 
  badgeLabel, 
  statusLabel, 
  title, 
  authorLabel, 
  venueLabel, 
  yearLabel,
  expandOpenText = 'View Description & Details',
  expandCloseText = 'Hide Details',
  visualBtnText = 'View Award Artifact',
  detailHeading = 'Recognition & Description'
}) => {
  const imageUrl = item.imageUrl || '/images/award_placeholder.jpg';
  const displayYear = yearLabel || item.year;

  return (
    <article className={`pub-list-card ${isExpanded ? 'is-expanded' : ''}`}>
      {/* Side-by-Side Row: Image on the Left, Text on the Right */}
      <div className="pub-card-split-row">
        {/* Left: Full-Visible Visual Thumbnail */}
        <div 
          className="award-card-media-side"
          onClick={() => onOpenModal({
            title: title,
            subtitle: `${authorLabel || ''} ${venueLabel ? `• ${venueLabel}` : ''} ${displayYear ? `(${displayYear})` : ''}`,
            imageUrl: imageUrl,
            description: item.description
          })}
          title="Click to view full award artifact"
        >
          <img 
            src={imageUrl} 
            alt={title} 
            className="award-side-img" 
            loading="lazy" 
          />
          <div className="award-side-overlay">
            <span className="award-thumb-zoom-badge">
              <ExternalLink size={12} />
              <span>Enlarge</span>
            </span>
          </div>
        </div>

        {/* Right: Text & Details Content */}
        <div className="pub-card-main">
        <div className="pub-header-row">
          <div className="pub-meta-left">
            <span className="pub-number">0{itemIndex}</span>
            <span className={`pub-category-badge ${badgeClass}`}>
              {badgeLabel}
            </span>
            {statusLabel && (
              <span className="pub-status-badge">{statusLabel}</span>
            )}
          </div>
          {displayYear && <span className="pub-year">{displayYear}</span>}
        </div>

        <h3 className="pub-title">
          {title}
        </h3>

        <div className="pub-citation">
          <span className="pub-author highlight">{authorLabel}</span>
          {venueLabel && (
            <>
              <span className="pub-sep">•</span>
              <span className="pub-venue">{venueLabel}</span>
            </>
          )}
        </div>

        {item.certId && (
          <div style={{ marginTop: '4px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            <span style={{ fontWeight: 600 }}>Credential ID:</span> <span style={{ fontFamily: 'var(--font-mono, monospace)', color: 'var(--accent-teal)' }}>{item.certId}</span>
          </div>
        )}

        {/* 3. Action Buttons Row */}
        <div className="pub-actions-row" style={{ flexWrap: 'wrap', gap: '8px' }}>
          <button
            onClick={() => onToggle(item.id)}
            className="pub-expand-btn"
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? expandCloseText : expandOpenText}</span>
            {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          </button>

          <button
            onClick={() => onOpenModal({
              title: title,
              subtitle: `${authorLabel || ''} ${venueLabel ? `• ${venueLabel}` : ''} ${displayYear ? `(${displayYear})` : ''}`,
              imageUrl: imageUrl,
              description: item.description
            })}
            className="pub-visual-btn"
          >
            <ExternalLink size={13} />
            <span>{visualBtnText}</span>
          </button>

          {item.verificationUrl && (
            <a
              href={item.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pub-visual-btn"
              style={{ textDecoration: 'none' }}
              title="Verify credential on official issuing platform"
            >
              <ExternalLink size={13} />
              <span>Verify Online</span>
            </a>
          )}

          {item.pdfUrl && (
            <a
              href={item.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pub-visual-btn"
              style={{ textDecoration: 'none' }}
              title="View / Download Official Certificate PDF"
            >
              <FileText size={13} />
              <span>Official PDF</span>
            </a>
          )}
        </div>
      </div>
      </div>

      {/* 4. Expandable Accordion Body */}
      {isExpanded && (
        <div className="pub-expanded-body">
          <div className="pub-detail-section">
            <h4 className="pub-detail-heading">{detailHeading}</h4>
            <p className="pub-abstract-text">
              {item.description}
            </p>
          </div>

          <div className="pub-detail-section">
            <h4 className="pub-detail-heading">Award Image Artifact (Click to Enlarge)</h4>
            <div 
              className="award-expanded-img-box"
              onClick={() => onOpenModal({
                title: title,
                subtitle: `${authorLabel || ''} ${venueLabel ? `• ${venueLabel}` : ''} ${displayYear ? `(${displayYear})` : ''}`,
                imageUrl: imageUrl,
                description: item.description
              })}
              title="Click to view full image"
            >
              <img
                src={imageUrl}
                alt={title}
                className="award-expanded-img"
              />
              <div className="award-side-overlay">
                <span className="award-thumb-zoom-badge">
                  <ExternalLink size={12} />
                  <span>View Full Image</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export const AwardsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedAwards, setExpandedAwards] = useState({});
  const [activeModalData, setActiveModalData] = useState(null);

  const toggleAward = (id) => {
    setExpandedAwards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleOpenModal = ({ title, subtitle, imageUrl, description }) => {
    setActiveModalData({
      title,
      subtitle,
      imageUrl,
      description
    });
  };

  const competitionsCount = (awardsData?.competitions || []).length;
  const postersCount = (awardsData?.posters || awardsData?.posterPresentations || []).length;
  const technicalCertsCount = (awardsData?.technicalCertifications || []).length;
  const courseCertsCount = (awardsData?.courseCertifications || []).length;
  const orgCount = (awardsData?.organization || []).length;
  const totalCount = competitionsCount + postersCount + technicalCertsCount + courseCertsCount + orgCount;

  const categories = [
    { id: 'awards-top', label: 'All Honors', count: totalCount },
    { id: 'awards-competitions', label: 'Competitions & Achievements', count: competitionsCount },
    { id: 'awards-posters', label: 'Poster Presentations', count: postersCount },
    { id: 'awards-technical-certs', label: 'Technical Certifications', count: technicalCertsCount },
    { id: 'awards-course-certs', label: 'Course Certifications', count: courseCertsCount },
    { id: 'awards-organization', label: 'Organization', count: orgCount }
  ];

  const jumpToSubSection = (id) => {
    setActiveCategory(id);
    if (id === 'awards-top' || id === 'all') {
      if (window.lenis) {
        window.lenis.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      if (window.lenis) {
        window.lenis.scrollTo(el, { offset: -135 });
      } else {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div id="awards-top" className="container animate-fade-in">
      {/* Editorial Page Header */}
      <div className="page-intro">
        <h1 className="page-title">
          Awards & <span className="header-badge">Certificates</span>
        </h1>
        <p className="page-subtitle">
          National engineering innovation competitions, scholarly poster symposia, global social entrepreneurship summits, and accredited professional engineering certifications.
        </p>

        {/* Slim Section Sub-Index Bar for Academic Reviewers & Visitors */}
        <nav className="research-subnav-bar" aria-label="Awards & Certificates Subsections">
          <div className="research-subnav-label">
            <Compass size={14} />
            <span>Jump to</span>
          </div>
          <div className="research-subnav-links">
            {categories.map((cat, idx) => (
              <React.Fragment key={cat.id}>
                {idx > 0 && <span className="subnav-sep">·</span>}
                <button 
                  onClick={() => jumpToSubSection(cat.id)}
                  className={`research-subnav-btn ${activeCategory === cat.id ? 'is-active' : ''}`}
                  title={`Jump to ${cat.label}`}
                >
                  <span>{cat.label}</span>
                  <span className="subnav-count">{cat.count}</span>
                </button>
              </React.Fragment>
            ))}
          </div>
        </nav>
      </div>

      {/* =========================================================================
          1. COMPETITIONS & ACHIEVEMENTS
          ========================================================================= */}
      <section id="awards-competitions" className="section-spacing" style={{ scrollMarginTop: '135px' }}>
        <div className="section-heading-row">
          <div>
            <div className="section-eyebrow">HONORS</div>
            <h2 className="section-main-heading">
              Competitions & Achievements
            </h2>
          </div>
          <span className="section-count-badge">
            {(awardsData?.competitions || []).length} Accolades
          </span>
        </div>

        <div className="pub-grid-2col">
          {(awardsData?.competitions || []).map((item, idx) => {
            const isChampion = item.title.toLowerCase().includes('champion');
            return (
              <AwardCard
                key={item.id}
                item={item}
                itemIndex={idx + 1}
                isExpanded={Boolean(expandedAwards[item.id])}
                onToggle={toggleAward}
                onOpenModal={handleOpenModal}
                badgeClass={isChampion ? 'champion' : 'conference'}
                badgeLabel={item.title}
                statusLabel="National Honor"
                title={item.event}
                authorLabel={item.organizer}
                venueLabel={item.category}
                visualBtnText="View Award Artifact"
                detailHeading="Recognition & Description"
              />
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          2. RESEARCH POSTER PRESENTATIONS
          ========================================================================= */}
      <section id="awards-posters" className="section-spacing" style={{ scrollMarginTop: '135px' }}>
        <div className="section-heading-row">
          <div>
            <div className="section-eyebrow">RESEARCH EXHIBITS</div>
            <h2 className="section-main-heading">
              Poster Presentations
            </h2>
          </div>
          <span className="section-count-badge">
            {(awardsData?.posters || awardsData?.posterPresentations || []).length} Posters
          </span>
        </div>

        <div className="pub-grid-2col">
          {(awardsData?.posters || awardsData?.posterPresentations || []).map((item, idx) => (
            <AwardCard
              key={item.id}
              item={item}
              itemIndex={idx + 1}
              isExpanded={Boolean(expandedAwards[item.id])}
              onToggle={toggleAward}
              onOpenModal={handleOpenModal}
              badgeClass="presentation"
              badgeLabel="Research Poster"
              statusLabel="Exposition"
              title={item.title}
              authorLabel={item.event}
              venueLabel={item.venue}
              expandOpenText="View Presentation Details"
              expandCloseText="Hide Abstract & Details"
              visualBtnText="View Trophy & Award Crest"
              detailHeading="Presentation Details"
            />
          ))}
        </div>
      </section>

      {/* =========================================================================
          3. TECHNICAL CERTIFICATIONS
          ========================================================================= */}
      <section id="awards-technical-certs" className="section-spacing" style={{ scrollMarginTop: '135px' }}>
        <div className="section-heading-row">
          <div>
            <div className="section-eyebrow">INDUSTRY & PROFESSIONAL CREDENTIALS</div>
            <h2 className="section-main-heading">
              Technical Certifications
            </h2>
          </div>
          <span className="section-count-badge">
            {(awardsData?.technicalCertifications || []).length} Credentials
          </span>
        </div>

        <div className="pub-grid-2col">
          {(awardsData?.technicalCertifications || []).map((item, idx) => (
            <AwardCard
              key={item.id}
              item={item}
              itemIndex={idx + 1}
              isExpanded={Boolean(expandedAwards[item.id])}
              onToggle={toggleAward}
              onOpenModal={handleOpenModal}
              badgeClass="verified"
              badgeLabel="Industry Professional"
              statusLabel="Certified"
              yearLabel={item.year || "Certified"}
              title={item.title}
              authorLabel={item.issuer}
              venueLabel={item.field}
              expandOpenText="View Syllabus & Verification"
              expandCloseText="Hide Details"
              visualBtnText="View Certificate"
              detailHeading="Certification Competencies & Examination"
            />
          ))}
        </div>
      </section>

      {/* =========================================================================
          4. COURSE CERTIFICATIONS
          ========================================================================= */}
      <section id="awards-course-certs" className="section-spacing" style={{ scrollMarginTop: '135px' }}>
        <div className="section-heading-row">
          <div>
            <div className="section-eyebrow">ACADEMIC & SIMULATION ACCREDITATIONS</div>
            <h2 className="section-main-heading">
              Course Certifications
            </h2>
          </div>
          <span className="section-count-badge">
            {(awardsData?.courseCertifications || []).length} Credentials
          </span>
        </div>

        {(awardsData?.courseCertifications || []).length > 0 ? (
          <div className="pub-grid-2col">
            {(awardsData?.courseCertifications || []).map((item, idx) => (
              <AwardCard
                key={item.id}
                item={item}
                itemIndex={idx + 1}
                isExpanded={Boolean(expandedAwards[item.id])}
                onToggle={toggleAward}
                onOpenModal={handleOpenModal}
                badgeClass="verified"
                badgeLabel="Verified Course"
                statusLabel="Accredited"
                yearLabel={item.year || "Certified"}
                title={item.title}
                authorLabel={item.issuer}
                venueLabel={item.field}
                expandOpenText="View Syllabus & Verification"
                expandCloseText="Hide Details"
                visualBtnText="View Certificate"
                detailHeading="Course Syllabus & Academic Competencies"
              />
            ))}
          </div>
        ) : (
          <div style={{
            padding: '36px 24px',
            borderRadius: '16px',
            background: 'var(--bg-card-subtle)',
            border: '1.5px dashed var(--border-subtle)',
            textAlign: 'center',
            color: 'var(--text-secondary)',
            fontSize: '0.92rem'
          }}>
            Course certifications are currently being updated and will appear here.
          </div>
        )}
      </section>

      {/* =========================================================================
          5. ORGANIZATION
          ========================================================================= */}
      <section id="awards-organization" className="section-spacing" style={{ scrollMarginTop: '135px' }}>
        <div className="section-heading-row">
          <div>
            <div className="section-eyebrow">LEADERSHIP & ENGAGEMENT</div>
            <h2 className="section-main-heading">
              Organization
            </h2>
          </div>
          <span className="section-count-badge">
            {(awardsData?.organization || []).length} Milestones & Summits
          </span>
        </div>

        <div className="pub-grid-2col">
          {(awardsData?.organization || []).map((item, idx) => (
            <AwardCard
              key={item.id}
              item={item}
              itemIndex={idx + 1}
              isExpanded={Boolean(expandedAwards[item.id])}
              onToggle={toggleAward}
              onOpenModal={handleOpenModal}
              badgeClass={item.cohort ? "manuscript" : "presentation"}
              badgeLabel={item.category || "Organization"}
              statusLabel="Organizer"
              title={item.title}
              authorLabel={item.organizer || item.event}
              venueLabel={item.venue || item.cohort}
              expandOpenText="View Responsibilities & Scale"
              expandCloseText="Hide Details"
              visualBtnText="View Credential"
              detailHeading="Scope & Leadership Responsibilities"
            />
          ))}
        </div>
      </section>

      {/* Zero-crop Responsive Image Lightbox Modal */}
      {activeModalData && (
        <ImageLightboxModal
          isOpen={Boolean(activeModalData)}
          onClose={() => setActiveModalData(null)}
          title={activeModalData.title}
          subtitle={activeModalData.subtitle}
          imageUrl={activeModalData.imageUrl}
          description={activeModalData.description}
        />
      )}
    </div>
  );
};
