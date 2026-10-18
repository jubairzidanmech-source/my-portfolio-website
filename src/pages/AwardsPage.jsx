import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  ArrowUpRight,
  FileText,
  Award,
  Compass
} from 'lucide-react';
import { awardsData } from '../data/portfolioData';
import { InteractiveModal, ImageLightboxModal } from '../components/InteractiveModal';
import { SmoothCollapse } from '../components/SmoothCollapse';

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
  yearLabel,
  title, 
  authorLabel, 
  venueLabel, 
  expandOpenText = 'Description & Details',
  expandCloseText = 'Hide Details',
  visualBtnText = 'View Award Artifact',
  detailHeading = 'Recognition & Description',
  isCertCard = false,
  isMinimal = false
}) => {
  const imageUrl = item.imageUrl || '/images/award_placeholder.jpg';
  const displayYear = yearLabel || item?.year;

  if (isCertCard) {
    return (
      <article className="pub-list-card is-cert-card">
        {/* Side-by-Side Row: Image on the Left, Topic Text on the Right */}
        <div className="pub-card-split-row">
          {/* Left: Certificate Thumbnail with "View Certificate" inside image border */}
          <div 
            className="award-card-media-side cert-media-side"
            onClick={() => onOpenModal({
              title: title,
              subtitle: `${authorLabel || ''} ${venueLabel ? `• ${venueLabel}` : ''} ${displayYear ? `(${displayYear})` : ''}`,
              imageUrl: imageUrl,
              description: item.description,
              verificationUrl: item.verificationUrl,
              pdfUrl: item.pdfUrl
            })}
            title="Click to view full certificate"
          >
            <img 
              src={imageUrl} 
              alt={title} 
              className="award-side-img" 
              loading="lazy" 
            />
            {/* View Certificate badge pinned inside the image border */}
            <div className="cert-media-view-badge-container">
              <span className="cert-media-view-badge">
                <ExternalLink size={11} />
                <span>View Certificate</span>
              </span>
            </div>
          </div>

          {/* Right: Focused Topic & Technical Details */}
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
            </div>

            {/* Key Topic Competencies (Max 3) */}
            {(item.topics || item.tags) && (item.topics || item.tags).length > 0 && (
              <div className="pub-tags-row" style={{ marginTop: '8px', marginBottom: '8px' }}>
                {(item.topics || item.tags).slice(0, 3).map((topic, tIdx) => (
                  <span key={tIdx} className="pub-tag-pill">{topic}</span>
                ))}
              </div>
            )}

            {/* Clean Footer: Credential ID & optional PDF link */}
            <div className="cert-card-footer-row">
              {item.certId && (
                <div className="cert-credential-id">
                  <span className="cert-id-label">Credential ID:</span>{' '}
                  <span className="cert-id-value">{item.certId}</span>
                </div>
              )}
              {item.pdfUrl && (
                <a
                  href={item.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-pdf-link"
                  title="View / Download Official Certificate PDF"
                >
                  <FileText size={12} />
                  <span>Official PDF</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className={`pub-list-card ${isExpanded ? 'is-expanded' : ''} ${isMinimal ? 'is-minimal-card' : ''}`}>
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
            <ChevronDown size={14} className={`accordion-chevron ${isExpanded ? 'is-expanded' : ''}`} />
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

          {item.certificateUrl && (
            <button
              type="button"
              onClick={() => onOpenModal({
                title: `${title} - Official Certificate`,
                subtitle: `${authorLabel || ''} ${venueLabel ? `• ${venueLabel}` : ''} ${displayYear ? `(${displayYear})` : ''}`,
                imageUrl: item.certificateUrl,
                description: `Official Participation & Presentation Certificate: ${item.description}`
              })}
              className="pub-visual-btn"
              title="View official participation certificate"
            >
              <Award size={13} />
              <span>View Certificate</span>
            </button>
          )}

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
      <SmoothCollapse isOpen={isExpanded}>
        {isMinimal ? (
          <div className="pub-expanded-minimal">
            <p className="pub-minimal-text">
              {item.description}
            </p>
          </div>
        ) : (
          <div className="pub-expanded-body">
            <div className="pub-detail-section">
              <h4 className="pub-detail-heading">{detailHeading}</h4>
              <p className="pub-abstract-text">
                {item.description}
              </p>
            </div>

            <div className="pub-detail-section">
              <h4 className="pub-detail-heading">Award & Credential Artifacts (Click to Enlarge)</h4>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <div 
                  className="award-expanded-img-box"
                  style={{ flex: '1 1 200px', maxWidth: '320px' }}
                  onClick={() => onOpenModal({
                    title: title,
                    subtitle: `${authorLabel || ''} ${venueLabel ? `• ${venueLabel}` : ''} ${displayYear ? `(${displayYear})` : ''}`,
                    imageUrl: imageUrl,
                    description: item.description
                  })}
                  title="Click to view award crest"
                >
                  <img
                    src={imageUrl}
                    alt={title}
                    className="award-expanded-img"
                  />
                  <div className="award-side-overlay">
                    <span className="award-thumb-zoom-badge">
                      <ExternalLink size={12} />
                      <span>View Award Crest</span>
                    </span>
                  </div>
                </div>

                {item.certificateUrl && (
                  <div 
                    className="award-expanded-img-box"
                    style={{ flex: '1 1 200px', maxWidth: '320px' }}
                    onClick={() => onOpenModal({
                      title: `${title} - Official Certificate`,
                      subtitle: `${authorLabel || ''} ${venueLabel ? `• ${venueLabel}` : ''} ${displayYear ? `(${displayYear})` : ''}`,
                      imageUrl: item.certificateUrl,
                      description: item.description
                    })}
                    title="Click to view official certificate"
                  >
                    <img
                      src={item.certificateUrl}
                      alt={`${title} Certificate`}
                      className="award-expanded-img"
                    />
                    <div className="award-side-overlay">
                      <span className="award-thumb-zoom-badge">
                        <Award size={12} />
                        <span>View Certificate</span>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </SmoothCollapse>
    </article>
  );
};

// Event Organization & Leadership Card (Refined, minimal, balanced design)
const EventOrgCard = ({
  item,
  isExpanded,
  onToggle,
  onOpenModal
}) => {
  const imageUrl = item.imageUrl || '/images/award_placeholder.jpg';
  const organizer = item.organizer || item.event;
  const venue = item.venue || item.cohort;

  return (
    <article
      className={`pub-list-card org-card ${isExpanded ? 'is-expanded' : ''}`}
      onClick={() => onToggle(item.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggle(item.id);
        }
      }}
      aria-expanded={isExpanded}
      title="Click card to expand or collapse details"
    >
      <div className="pub-card-split-row org-card-split-row">
        {/* Left: Certificate Thumbnail with softened background and reduced weight */}
        <div
          className="org-media-side"
          onClick={(e) => {
            e.stopPropagation();
            onOpenModal({
              title: item.title,
              subtitle: `${organizer || ''} ${venue ? `• ${venue}` : ''} (${item.year})`,
              imageUrl: imageUrl,
              description: item.description
            });
          }}
          title="Click to view full credential image"
        >
          <img
            src={imageUrl}
            alt={item.title}
            className="org-media-img"
            loading="lazy"
          />
          <div className="award-side-overlay">
            <span className="award-thumb-zoom-badge">
              <ExternalLink size={12} />
              <span>Enlarge</span>
            </span>
          </div>
        </div>

        {/* Right: Content with clear visual hierarchy */}
        <div className="pub-card-main org-card-main">
          {/* Header Row: Subtle category & role pill on left, Year & chevron on right */}
          <div className="org-header-row">
            <div className="org-badge-group">
              <span className="org-category-pill">
                {item.category || "Organization"}
              </span>
              <span className="org-role-tag">Organizer</span>
            </div>
            <div className="org-meta-right">
              <span className="org-year">{item.year}</span>
              <span className="org-expand-icon" aria-hidden="true">
                <ChevronDown size={15} className={`accordion-chevron ${isExpanded ? 'is-expanded' : ''}`} />
              </span>
            </div>
          </div>

          {/* Prominent Title */}
          <h3 className="org-title">
            {item.title}
          </h3>

          {/* Organization & Venue */}
          <div className="org-citation">
            <span className="org-organizer">{organizer}</span>
            {venue && (
              <>
                <span className="org-sep">•</span>
                <span className="org-venue">{venue}</span>
              </>
            )}
          </div>

          {/* Action Row: Subtle Text Link dropdown toggle and credential link */}
          <div className="org-action-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onToggle(item.id);
              }}
              className="exp-subtle-toggle-btn"
              aria-expanded={isExpanded}
            >
              <span>{isExpanded ? 'Hide Details' : 'Responsibilities & Scale'}</span>
              <ChevronDown size={14} className={`accordion-chevron ${isExpanded ? 'is-expanded' : ''}`} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal({
                  title: item.title,
                  subtitle: `${organizer || ''} ${venue ? `• ${venue}` : ''} (${item.year})`,
                  imageUrl: imageUrl,
                  description: item.description
                });
              }}
              className="org-credential-link"
              title="View full certificate credential"
            >
              <span>View Credential</span>
              <ArrowUpRight size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Accordion Body (Smooth animation, minimal text, no extra boxes) */}
      <SmoothCollapse isOpen={isExpanded}>
        <div className="org-expanded-body" onClick={(e) => e.stopPropagation()}>
          <p className="org-expanded-desc">
            {item.description}
          </p>
        </div>
      </SmoothCollapse>
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

  const handleOpenModal = ({ title, subtitle, imageUrl, description, verificationUrl, pdfUrl }) => {
    setActiveModalData({
      title,
      subtitle,
      imageUrl,
      description,
      verificationUrl,
      pdfUrl
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
    { id: 'awards-competitions', label: 'Prize', count: competitionsCount },
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
          Awards & Certificates
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
          1. PRIZE
          ========================================================================= */}
      <section id="awards-competitions" className="section-spacing" style={{ scrollMarginTop: '135px' }}>
        <div className="section-heading-row">
          <div>
            <h2 className="section-main-heading">
              Prize
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
              expandOpenText="Presentation Details"
              expandCloseText="Hide Details"
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
              isCertCard={true}
              onOpenModal={handleOpenModal}
              badgeClass="verified"
              badgeLabel="Industry Professional"
              statusLabel="Certified"
              yearLabel={item.year || "Certified"}
              title={item.title}
              authorLabel={item.issuer}
              venueLabel={item.field}
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
                isCertCard={true}
                onOpenModal={handleOpenModal}
                badgeClass="verified"
                badgeLabel="Verified Course"
                statusLabel="Accredited"
                yearLabel={item.year || "Certified"}
                title={item.title}
                authorLabel={item.issuer}
                venueLabel={item.field}
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
            <h2 className="section-main-heading">
              Organization
            </h2>
          </div>
          <span className="section-count-badge">
            {(awardsData?.organization || []).length} Milestones & Summits
          </span>
        </div>

        <div className="pub-grid-2col">
          {(awardsData?.organization || []).map((item) => (
            <EventOrgCard
              key={item.id}
              item={item}
              isExpanded={Boolean(expandedAwards[item.id])}
              onToggle={toggleAward}
              onOpenModal={handleOpenModal}
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
          verificationUrl={activeModalData.verificationUrl}
          pdfUrl={activeModalData.pdfUrl}
        />
      )}
    </div>
  );
};
