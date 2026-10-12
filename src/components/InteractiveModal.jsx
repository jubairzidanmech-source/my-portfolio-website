import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export const InteractiveModal = ({ isOpen, onClose, title, subtitle, children }) => {
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

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(21, 21, 29, 0.65)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}
      onClick={onClose}
    >
      <div
        className="interactive-modal-card"
        style={{
          background: 'var(--bg-card)',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '720px',
          maxHeight: '88vh',
          overflowY: 'auto',
          border: '1px solid var(--border-card)',
          boxShadow: 'var(--shadow-elevated)',
          padding: '36px',
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
    </div>
  );
};
