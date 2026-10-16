import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { milestonesGalleryData } from '../data/portfolioData';
import { ImageLightboxModal } from './InteractiveModal';

export const MilestonesCarousel = () => {
  const [lightboxData, setLightboxData] = useState(null);

  // Duplicate the 8 items once (2 x 8 = 16) for seamless 0% -> -50% GPU compositor marquee
  const marqueeItems = [...milestonesGalleryData, ...milestonesGalleryData];

  return (
    <section className="milestones-section" aria-label="In Frames">
      {/* 1. Clean Header: In Frames */}
      <div className="milestones-header">
        <h2 className="milestones-title">
          In <span className="header-badge">Frames</span>
        </h2>
      </div>

      {/* 2. Full-Bleed Continuous GPU Marquee Conveyor */}
      <div className="milestones-marquee-wrapper">
        <div className="milestones-marquee-track">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className={`marquee-photo-card marquee-tilt-${idx % 6}`}
              onClick={() => {
                setLightboxData({
                  title: item.title,
                  subtitle: `${item.badge} • ${item.year}`,
                  imageUrl: item.imageUrl,
                  description: item.description
                });
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setLightboxData({
                    title: item.title,
                    subtitle: `${item.badge} • ${item.year}`,
                    imageUrl: item.imageUrl,
                    description: item.description
                  });
                }
              }}
              aria-label={`${item.title} - ${item.badge} (${item.year})`}
              title="Click to view full photograph"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="marquee-card-img"
                style={{ objectPosition: item.objectPosition || 'center center' }}
                draggable={false}
                loading={idx < 8 ? 'eager' : 'lazy'}
              />

              <div className="marquee-card-overlay">
                <span className="marquee-card-badge">{item.badge}</span>
                <h3 className="marquee-card-title">{item.title}</h3>
                <div className="marquee-card-expand">
                  <Maximize2 size={11} />
                  <span>Enlarge</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clean Full-Size Lightbox Modal */}
      <ImageLightboxModal
        isOpen={Boolean(lightboxData)}
        onClose={() => setLightboxData(null)}
        title={lightboxData?.title}
        subtitle={lightboxData?.subtitle}
        imageUrl={lightboxData?.imageUrl}
        description={lightboxData?.description}
      />
    </section>
  );
};
