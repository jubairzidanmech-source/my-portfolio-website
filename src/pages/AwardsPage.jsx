import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  FileText
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

  const categories = [
    { id: 'all', label: 'All Honors' },
    { id: 'competitions', label: 'Competitions & Achievements' },
    { id: 'posters', label: 'Poster Presentations' },
    { id: 'hult', label: 'Hult Prize Activities' },
    { id: 'events', label: 'Event Organization' },
    { id: 'technical-certs', label: 'Technical Certifications' },
    { id: 'course-certs', label: 'Course Certifications' }
  ];

  return (
    <div className="container animate-fade-in">
      {/* Editorial Page Header */}
      <div className="page-intro">
        <h1 className="page-title">
          Awards & <span className="header-badge">Certificates</span>
        </h1>
        <p className="page-subtitle">
          National engineering innovation competitions, scholarly poster symposia, global social entrepreneurship summits, and accredited professional engineering certifications.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* =========================================================================
          1. COMPETITIONS & ACHIEVEMENTS
          ========================================================================= */}
      {(activeCategory === 'all' || activeCategory === 'competitions') && (
        <section className="section-spacing">
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
      )}

      {/* =========================================================================
          2. RESEARCH POSTER PRESENTATIONS
          ========================================================================= */}
      {(activeCategory === 'all' || activeCategory === 'posters') && (
        <section className="section-spacing">
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
      )}

      {/* =========================================================================
          3. HULT PRIZE ACTIVITIES
          ========================================================================= */}
      {(activeCategory === 'all' || activeCategory === 'hult') && (
        <section className="section-spacing">
          <div className="section-heading-row">
            <div>
              <div className="section-eyebrow">SOCIAL ENTREPRENEURSHIP</div>
              <h2 className="section-main-heading">
                Hult Prize Global Challenges
              </h2>
            </div>
            <span className="section-count-badge">
              {(awardsData?.hultPrize || []).length} Milestones
            </span>
          </div>

          <div className="pub-grid-2col">
            {(awardsData?.hultPrize || []).map((item, idx) => (
              <AwardCard
                key={item.id}
                item={item}
                itemIndex={idx + 1}
                isExpanded={Boolean(expandedAwards[item.id])}
                onToggle={toggleAward}
                onOpenModal={handleOpenModal}
                badgeClass="manuscript"
                badgeLabel="Global Challenge"
                statusLabel="Impact Venture"
                title={item.title}
                authorLabel="Hult Prize Foundation"
                venueLabel={item.cohort}
                expandOpenText="View Impact & Contributions"
                expandCloseText="Hide Details"
                visualBtnText="View Certificate"
                detailHeading="Impact & Contributions"
              />
            ))}
          </div>
        </section>
      )}

      {/* =========================================================================
          4. EVENT ORGANIZATION & DIRECTORSHIP
          ========================================================================= */}
      {(activeCategory === 'all' || activeCategory === 'events') && (
        <section className="section-spacing">
          <div className="section-heading-row">
            <div>
              <div className="section-eyebrow">LEADERSHIP</div>
              <h2 className="section-main-heading">
                Event Organization & Directorship
              </h2>
            </div>
            <span className="section-count-badge">
              {(awardsData?.eventOrganization || []).length} Summits & Events
            </span>
          </div>

          <div className="pub-grid-2col">
            {(awardsData?.eventOrganization || []).map((item, idx) => (
              <AwardCard
                key={item.id}
                item={item}
                itemIndex={idx + 1}
                isExpanded={Boolean(expandedAwards[item.id])}
                onToggle={toggleAward}
                onOpenModal={handleOpenModal}
                badgeClass="presentation"
                badgeLabel="Leadership"
                statusLabel="Lead Organizer"
                title={item.title}
                authorLabel={item.event}
                venueLabel={item.venue}
                expandOpenText="View Responsibilities & Scale"
                expandCloseText="Hide Details"
                visualBtnText="View Summit Credential"
                detailHeading="Scope & Leadership Responsibilities"
              />
            ))}
          </div>
        </section>
      )}

      {/* =========================================================================
          5. TECHNICAL CERTIFICATIONS
          ========================================================================= */}
      {(activeCategory === 'all' || activeCategory === 'certs' || activeCategory === 'technical-certs') && (
        <section className="section-spacing">
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
      )}

      {/* =========================================================================
          6. COURSE CERTIFICATIONS
          ========================================================================= */}
      {(activeCategory === 'all' || activeCategory === 'certs' || activeCategory === 'course-certs') && (
        <section className="section-spacing">
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
        </section>
      )}

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
