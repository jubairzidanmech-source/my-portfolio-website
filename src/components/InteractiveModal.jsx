import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ExternalLink } from 'lucide-react';

export const InteractiveModal = ({ isOpen, onClose, title, subtitle, children, maxWidth = '720px' }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(21, 21, 29, 0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        className="interactive-modal-card"
        style={{
          background: 'var(--bg-card)',
          borderRadius: '24px',
          width: '100%',
          maxWidth: maxWidth || '720px',
          maxHeight: '92vh',
          overflowY: 'auto',
          border: '1px solid var(--border-card)',
          boxShadow: 'var(--shadow-elevated)',
          padding: '28px',
          position: 'relative',
          animation: 'fadeIn 250ms cubic-bezier(0.16, 1, 0.3, 1)',
          color: 'var(--text-primary)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'var(--lavender-soft)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--purple-deep)',
            border: '1px solid var(--border-accent)',
            cursor: 'pointer',
            transition: 'transform 180ms ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {title && (
          <div style={{ marginBottom: '20px', paddingRight: '40px' }}>
            {subtitle && (
              <span style={{
                display: 'inline-block',
                fontSize: '0.8rem',
                fontWeight: 500,
                color: 'var(--purple-accent)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '6px'
              }}>
                {subtitle}
              </span>
            )}
            <h2 style={{ fontSize: '1.5rem', color: 'var(--purple-deep)', lineHeight: 1.3 }}>
              {title}
            </h2>
          </div>
        )}

        <div style={{ color: 'var(--text-secondary)' }}>
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export const ImageLightboxModal = ({ isOpen, onClose, title, subtitle, imageUrl, description }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageUrl) return null;

  return createPortal(
    <div 
      className="image-lightbox-overlay"
      onClick={onClose}
    >
      <div
        className="image-lightbox-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="image-lightbox-header">
          <div className="image-lightbox-titles">
            {subtitle && (
              <span className="image-lightbox-subtitle">
                {subtitle}
              </span>
            )}
            {title && (
              <h3 className="image-lightbox-title">
                {title}
              </h3>
            )}
          </div>

          <button
            onClick={onClose}
            className="image-lightbox-close"
            aria-label="Close image viewer"
            title="Close (Esc)"
          >
            <X size={18} />
          </button>
        </div>

        {/* Stage: Flex container where image scales to 100% available space with zero cropping */}
        <div className="image-lightbox-stage">
          <img 
            src={imageUrl} 
            alt={title || "Full image"} 
            className="image-lightbox-img"
          />
        </div>

        {/* Footer */}
        <div className="image-lightbox-footer">
          {description ? (
            <p className="image-lightbox-desc">
              {description}
            </p>
          ) : <div />}

          <a
            href={imageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pub-visual-btn image-lightbox-external-btn"
            title="Open raw high-resolution image in new browser tab"
          >
            <ExternalLink size={13} />
            <span>Open Full Resolution in New Tab</span>
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
};

