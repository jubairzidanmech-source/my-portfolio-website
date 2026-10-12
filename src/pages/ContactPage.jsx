import React, { useState } from 'react';
import { Mail, MapPin, Copy, Check, ArrowUpRight, Clock, Globe, BookOpen, Send, FileText, Download, Eye } from 'lucide-react';
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

  return (
    <div className="container animate-fade-in">
      {/* Editorial Page Header */}
      <div className="page-intro">
        <span className="section-label">Connect & Collaborate</span>
        <h1 className="page-title">
          Contact & Academic <span className="header-badge">Inquiries</span>
        </h1>
        <p className="page-subtitle">
          Open for Ph.D. positions, collaborative research investigations in CFD and architected metamaterials, co-authorship inquiries, and academic seminars.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.2fr) 1fr', gap: '32px', alignItems: 'start', marginBottom: '56px' }}>
        {/* Left: Email & Communication Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Featured Primary Email Card */}
          <div className="card" style={{ padding: '36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'var(--blue-soft)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--blue-royal)',
                boxShadow: 'var(--shadow-xs)'
              }}>
                <Mail size={20} />
              </div>
              <span style={{ fontSize: '0.8rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--blue-royal)' }}>
                Mail me at
              </span>
            </div>

            <h2 style={{ fontSize: 'clamp(1.3rem, 2.4vw, 1.7rem)', color: 'var(--purple-deep)', marginBottom: '16px', wordBreak: 'break-all' }}>
              {contactData.email}
            </h2>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.6 }}>
              Whether you are an academic supervisor, industry researcher, or student peer, feel free to drop an inquiry or discuss research concepts.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={copyEmail}
                className="btn btn-primary"
                style={{ fontSize: '0.9rem', padding: '10px 22px', cursor: 'pointer' }}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? 'Email Copied to Clipboard!' : 'Copy Email Address'}</span>
              </button>
              <a
                href={`mailto:${contactData.email}`}
                className="btn btn-outline"
                style={{
                  fontSize: '0.9rem',
                  padding: '10px 22px',
                  background: 'var(--blue-soft)',
                  color: 'var(--text-primary)',
                  borderColor: 'var(--border-accent)',
                  cursor: 'pointer'
                }}
              >
                <Send size={15} />
                <span>Open Mail Client</span>
              </a>
            </div>
          </div>

          {/* Academic Curriculum Vitae Card */}
          <div className="card cv-contact-card" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'var(--blue-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--blue-royal)',
                  boxShadow: 'var(--shadow-xs)'
                }}>
                  <FileText size={22} />
                </div>
                <div>
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--blue-royal)', display: 'block' }}>
                    Curriculum Vitae
                  </span>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--purple-deep)', margin: 0 }}>
                    Academic & Research CV
                  </h3>
                </div>
              </div>

              <span style={{
                fontSize: '0.74rem',
                fontWeight: 600,
                color: 'var(--blue-royal)',
                background: 'var(--blue-soft)',
                padding: '4px 10px',
                borderRadius: '8px',
                border: '1px solid var(--border-accent)'
              }}>
                Official PDF • 2026
              </span>
            </div>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '22px' }}>
              Comprehensive curriculum vitae detailing M.Sc. theory coursework (CGPA 3.90/4.00), B.Sc. capstone thesis in aerodynamics, ongoing publications, and ASME leadership.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setIsCvModalOpen(true)}
                className="btn btn-primary"
                style={{ fontSize: '0.9rem', padding: '10px 22px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <Eye size={16} />
                <span>View Full CV</span>
              </button>
              <a
                href={personalData.cvUrl || '/Md_Jubair_Uddin_Zidan_CV.pdf'}
                download="Md_Jubair_Uddin_Zidan_CV.pdf"
                className="btn btn-outline"
                style={{
                  fontSize: '0.9rem',
                  padding: '10px 22px',
                  background: 'var(--bg-card-subtle)',
                  color: 'var(--text-primary)',
                  borderColor: 'var(--border-accent)',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none'
                }}
              >
                <Download size={16} />
                <span>Download CV (PDF)</span>
              </a>
            </div>
          </div>

          {/* Research Inquiries Scope */}
          <div className="card" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--purple-deep)', marginBottom: '14px' }}>
              Primary Areas of Discussion
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {contactData.openFor.map((area, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--purple-accent)', fontWeight: 500 }}>•</span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Location & Address & Profiles */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Address & Geographical Location */}
          <div className="card" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'var(--lavender-soft)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--purple-deep)'
              }}>
                <MapPin size={20} />
              </div>
              <span style={{ fontSize: '0.8rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--purple-accent)' }}>
                Location
              </span>
            </div>

            <h3 style={{ fontSize: '1.25rem', color: 'var(--purple-deep)', marginBottom: '12px' }}>
              Dhaka, Bangladesh
            </h3>

            <div style={{ background: 'var(--bg-card-subtle)', padding: '18px', borderRadius: '12px', border: '1px solid var(--border-subtle)', marginBottom: '16px' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.65, fontWeight: 400 }}>
                {contactData.addressLine1} <br />
                {contactData.addressLine2} <br />
                {contactData.addressLine3}
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
              <Clock size={15} color="var(--purple-accent)" />
              <span>Timezone: {contactData.timeZone}</span>
            </div>
          </div>

          {/* Academic Profiles & Scholar Repositories */}
          <div className="card" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--purple-deep)', marginBottom: '14px' }}>
              Academic & Professional Profiles
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {personalData.socials.map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'var(--bg-card-subtle)',
                    border: '1px solid var(--border-subtle)',
                    transition: 'all 180ms ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--purple-accent)';
                    e.currentTarget.style.background = 'var(--lavender-soft)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.background = 'var(--bg-card-subtle)';
                  }}
                >
                  <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--purple-deep)' }}>
                    {soc.label}
                  </span>
                  <ArrowUpRight size={15} color="var(--purple-accent)" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Curriculum Vitae Modal */}
      <CVModal isOpen={isCvModalOpen} onClose={() => setIsCvModalOpen(false)} />
    </div>
  );
};
