import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Clock, 
  Globe, 
  FileText, 
  Send,
  GraduationCap,
  Layers,
  Code2
} from 'lucide-react';
import { contactData, personalData } from '../data/portfolioData';
import { CVModal } from '../components/CVModal';

export const ContactPage = () => {
  const [copied, setCopied] = useState(false);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const getSocialIcon = (label) => {
    switch (label) {
      case 'Google Scholar':
        return <GraduationCap size={16} />;
      case 'ResearchGate':
        return <Layers size={16} />;
      case 'GitHub':
        return <Code2 size={16} />;
      case 'LinkedIn':
      default:
        return <Globe size={16} />;
    }
  };

  return (
    <div className="container animate-fade-in">
      <div className="contact-closing-card">
        {/* Editorial Page Header */}
        <div className="contact-header-wrap">
          <div className="section-eyebrow">CLOSING INQUIRIES & CORRESPONDENCE</div>
          <h1 className="contact-main-heading">
            Get in <span className="header-badge">Touch</span>
          </h1>
          <p className="contact-subtitle">
            Open for Ph.D. inquiries, graduate fellowships, collaborative CFD & metamaterial investigations, co-authorship, and academic seminars.
          </p>
        </div>

        {/* Primary Contact Hub */}
        <div className="contact-hub-grid">
          {/* Left: Prominent Email & Inquiries */}
          <div className="contact-primary-box">
            <div className="contact-email-label">
              <Mail size={15} className="contact-email-icon" />
              <span>DIRECT CORRESPONDENCE</span>
            </div>

            <div className="contact-email-display" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a 
                href={`mailto:${contactData.email}`} 
                className="contact-email-link" 
                title="Send email to Jubair Zidan"
              >
                {contactData.email}
              </a>
              {contactData.secondaryEmail && (
                <a 
                  href={`mailto:${contactData.secondaryEmail}`} 
                  className="contact-email-link" 
                  title="Send email to Jubair Zidan (Academic / Mech)"
                  style={{ fontSize: '1.25rem', opacity: 0.95 }}
                >
                  {contactData.secondaryEmail}
                </a>
              )}
            </div>

            <p className="contact-email-desc">
              Whether you are an academic supervisor, prospective graduate advisor, co-author, or industry researcher, inquiries are welcome.
            </p>

            <div className="contact-actions-row">
              {/* One Primary Contact Action */}
              <a
                href={`mailto:${contactData.email}`}
                className="btn btn-primary contact-primary-btn"
              >
                <Send size={15} />
                <span>Send Email Inquiry</span>
              </a>

              <button
                onClick={copyEmail}
                className="contact-copy-btn"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copied ? <Check size={14} color="#10B981" /> : <Copy size={14} />}
                <span>{copied ? 'Copied!' : 'Copy Email'}</span>
              </button>

              {/* Quieter CV Action */}
              <button
                onClick={() => setIsCvModalOpen(true)}
                className="contact-quiet-cv-btn"
                title="View Academic Curriculum Vitae"
              >
                <FileText size={14} />
                <span>View Academic CV</span>
              </button>
            </div>
          </div>

          {/* Right: Academic Affiliation & Location */}
          <div className="contact-meta-box">
            <div className="contact-meta-group">
              <span className="contact-meta-label">ACADEMIC AFFILIATION</span>
              <p className="contact-meta-val">
                {contactData.affiliation}
              </p>
            </div>

            <div className="contact-meta-group">
              <span className="contact-meta-label">LOCATION & TIMEZONE</span>
              <div className="contact-meta-loc-row">
                <MapPin size={14} className="contact-loc-pin" />
                <span>{contactData.shortLocation}</span>
              </div>
              <div className="contact-meta-time-row">
                <Clock size={13} />
                <span>Local Time: {contactData.timeZone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Profiles: Clean Row with Consistent Icons */}
        <div className="contact-profiles-section">
          <div className="profiles-section-title">
            <span>PROFESSIONAL & SCHOLARLY PROFILES</span>
          </div>

          <div className="profiles-clean-row">
            {personalData.socials
              .filter(soc => soc.label !== 'Email')
              .map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-pill-link"
                >
                  <span className="profile-pill-icon">
                    {getSocialIcon(soc.label)}
                  </span>
                  <span className="profile-pill-label">{soc.label}</span>
                  <ArrowUpRight size={13} className="profile-pill-arrow" />
                </a>
              ))}
          </div>
        </div>
      </div>

      {/* Curriculum Vitae Modal */}
      <CVModal isOpen={isCvModalOpen} onClose={() => setIsCvModalOpen(false)} />
    </div>
  );
};
