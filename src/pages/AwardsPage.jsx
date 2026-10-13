import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  ExternalLink
} from 'lucide-react';
import { awardsData } from '../data/portfolioData';
import { InteractiveModal } from '../components/InteractiveModal';

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
  tags, 
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

        {tags && tags.length > 0 && (
          <div className="pub-tags-row">
            {tags.map((tag, tIdx) => (
              <span key={tIdx} className="pub-tag-pill">{tag}</span>
            ))}
          </div>
        )}

        {/* 3. Action Buttons Row */}
        <div className="pub-actions-row">
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
            <h4 className="pub-detail-heading">Award Image Artifact</h4>
            <div style={{ maxWidth: '420px', borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--border-subtle)', marginTop: '6px' }}>
              <img
                src={imageUrl}
                alt={title}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
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
      content: (
        <div style={{ textAlign: 'center' }}>
          <img 
            src={imageUrl} 
            alt={title} 
            style={{ maxWidth: '100%', maxHeight: '520px', borderRadius: '12px', objectFit: 'contain' }} 
          />
          {description && (
            <p style={{ marginTop: '12px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              {description}
            </p>
          )}
        </div>
      )
    });
  };

  const categories = [
    { id: 'all', label: 'All Honors' },
    { id: 'competitions', label: 'Competitions & Achievements' },
    { id: 'posters', label: 'Poster Presentations' },
    { id: 'hult', label: 'Hult Prize Activities' },
    { id: 'events', label: 'Event Organization' },
    { id: 'certs', label: 'Course Certifications' }
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
                  tags={[item.category, item.title, 'National Competition'].filter(Boolean)}
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
                tags={['Poster Presentation', 'Research Exhibit', 'CUET']}
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
                tags={['Social Entrepreneurship', 'Hult Prize', 'Impact Innovation']}
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
                tags={['Executive Leadership', 'Event Directorship', 'Team Management']}
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
          5. COURSE CERTIFICATIONS
          ========================================================================= */}
      {(activeCategory === 'all' || activeCategory === 'certs') && (
        <section className="section-spacing">
          <div className="section-heading-row">
            <div>
              <div className="section-eyebrow">ACCREDITATIONS</div>
              <h2 className="section-main-heading">
                Professional Engineering Certifications
              </h2>
            </div>
            <span className="section-count-badge">
              {(awardsData?.certifications || []).length} Credentials
            </span>
          </div>

          <div className="pub-grid-2col">
            {(awardsData?.certifications || []).map((item, idx) => (
              <AwardCard
                key={item.id}
                item={item}
                itemIndex={idx + 1}
                isExpanded={Boolean(expandedAwards[item.id])}
                onToggle={toggleAward}
                onOpenModal={handleOpenModal}
                badgeClass="verified"
                badgeLabel="Verified Credential"
                statusLabel="Accredited"
                yearLabel="Certified"
                title={item.title}
                authorLabel={item.issuer}
                venueLabel={item.field}
                tags={['Accredited Course', item.field, 'Engineering Design'].filter(Boolean)}
                expandOpenText="View Syllabus & Verification"
                expandCloseText="Hide Details"
                visualBtnText="View Certificate"
                detailHeading="Certification Syllabus & Competencies"
              />
            ))}
          </div>
        </section>
      )}

      {/* Global Interactive Modal for Fullscreen Certificates */}
      {activeModalData && (
        <InteractiveModal
          isOpen={Boolean(activeModalData)}
          onClose={() => setActiveModalData(null)}
          title={activeModalData.title}
          subtitle={activeModalData.subtitle}
        >
          {activeModalData.content}
        </InteractiveModal>
      )}
    </div>
  );
};
