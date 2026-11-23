'use client';

import { useEffect } from 'react';

export default function PreviewModal({ isOpen, onClose, demoUrl, title }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`modal-backdrop ${isOpen ? 'open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-container">
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="mockup-dots">
              <span className="mockup-dot dot-red"></span>
              <span className="mockup-dot dot-yellow"></span>
              <span className="mockup-dot dot-green"></span>
            </div>
            <span id="modal-title" className="modal-title">
              {title || 'Live Project Preview'}
            </span>
          </div>

          <div className="modal-actions">
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-tab-btn"
              title="Open in New Tab"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>

            <button
              onClick={onClose}
              className="modal-close-btn"
              aria-label="Close Preview Modal"
              type="button"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        <iframe
          className="modal-iframe-frame"
          src={demoUrl}
          title={title || 'Project Live Preview'}
        />
      </div>
    </div>
  );
}
