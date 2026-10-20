import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { OFFICE_LOCATIONS } from '../data/navigationData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'Mobile Application (Android, iOS, Flutter, PWA)',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
    whatsappUrl: ''
  });

  const [openFaq, setOpenFaq] = useState(null);

  const WHATSAPP_CONTACT_NUMBER = '919751867879';

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedMessage = formData.message.trim();
    const serviceInterest = formData.serviceInterest;

    // Validate required fields
    if (!trimmedName) {
      setFormStatus({ submitting: false, submitted: false, error: 'Please enter your Full Name.', whatsappUrl: '' });
      return;
    }

    if (!trimmedEmail) {
      setFormStatus({ submitting: false, submitted: false, error: 'Please enter your Corporate Email.', whatsappUrl: '' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setFormStatus({ submitting: false, submitted: false, error: 'Please enter a valid Corporate Email address.', whatsappUrl: '' });
      return;
    }

    if (!trimmedMessage) {
      setFormStatus({ submitting: false, submitted: false, error: 'Please describe your project details and scope.', whatsappUrl: '' });
      return;
    }

    // Format professional WhatsApp message with user input
    const phoneDisplay = trimmedPhone || 'Not provided';
    const messageLines = [
      'Hello ROHIL TECHNOLOGIES Team,',
      '',
      'I would like to request an architectural consultation for my project.',
      '',
      'Project Inquiry Details:',
      `• Full Name: ${trimmedName}`,
      `• Corporate Email: ${trimmedEmail}`,
      `• Phone Number: ${phoneDisplay}`,
      `• Primary Area of Interest: ${serviceInterest}`,
      '• Project Details & Scope:',
      trimmedMessage,
      '',
      'Please contact me to discuss the next steps.',
      '',
      'Thank you.'
    ];

    const encodedMessage = encodeURIComponent(messageLines.join('\n'));
    const whatsappUrl = `https://wa.me/${WHATSAPP_CONTACT_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp in new tab / application
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Update state to show confirmation feedback
    setFormStatus({
      submitting: false,
      submitted: true,
      error: null,
      whatsappUrl
    });
  };

  const faqs = [
    {
      q: 'What engagement models does Rohil Technologies offer?',
      a: 'We offer dedicated engineering squads, time-and-materials agility, fixed-scope milestone deliverables, and managed services SLAs tailored to enterprise requirements.'
    },
    {
      q: 'How does Rohil Technologies ensure intellectual property (IP) and data protection?',
      a: 'All client engagements are governed by comprehensive mutual NDAs. All source code, intellectual property, and system artifacts belong 100% to the client upon milestone delivery, backed by ISO 27001 data governance.'
    },
    {
      q: 'What is the standard discovery and project kick-off timeline?',
      a: 'Our architectural discovery phase typically initiates within 48 to 72 hours of contract execution, with initial technical roadmaps and prototypes delivered in 1-2 sprint cycles.'
    }
  ];

  return (
    <div style={{ flex: 1, backgroundColor: 'transparent', paddingBottom: '96px' }}>
      {/* =====================================================================
          Contact Header Hero
          ===================================================================== */}
      <section
        style={{
          background: 'transparent',
          padding: '130px 0 48px',
          borderBottom: '1px solid rgba(226, 232, 240, 0.85)'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '740px' }}>
            <span
              className="badge badge-blue"
              style={{
                marginBottom: '16px'
              }}
            >
              <Sparkles size={13} />
              Global Technology Advisory & Inquiries
            </span>

            <h1
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
                color: 'var(--brand-navy-950)',
                lineHeight: 1.2,
                marginBottom: '16px'
              }}
            >
              Let’s Architect Your Next Digital Breakthrough
            </h1>

            <p style={{ color: 'var(--slate-600)', fontSize: '1.1rem', lineHeight: '1.6' }}>
              Connect directly with our solutions architects and technology consultants in Bengaluru, San Francisco, London, and Singapore.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          Main Content: Contact Info Cards + Interactive Form
          ===================================================================== */}
      <div className="container" style={{ marginTop: '56px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Direct Contact Information */}
          <div>
            <div style={{ marginBottom: '32px' }}>
              <span className="badge badge-navy" style={{ marginBottom: '12px' }}>
                Corporate Channels
              </span>
              <h2 style={{ fontSize: '1.9rem', color: 'var(--brand-navy-950)', marginBottom: '12px' }}>
                Get In Touch With Our Team
              </h2>
              <p style={{ color: 'var(--slate-600)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Whether you have an upcoming enterprise migration, a new mobile app initiative, or an inquiry regarding our ready SaaS products, our senior leadership is here to assist.
              </p>
            </div>

            {/* Quick Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.72)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  padding: '22px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(226, 232, 240, 0.85)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  boxShadow: '0 4px 14px rgba(15, 23, 42, 0.03)'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--brand-blue-50)',
                    color: 'var(--brand-blue-700)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--brand-navy-900)', marginBottom: '4px' }}>
                    Corporate Headquarters
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', lineHeight: '1.45' }}>
                    ROHIL TECHNOLOGIES PVT. LTD.<br />
                    1st Floor, Canara Bank Building, Madura Coats Colony, Sivagami Puram, Virudhunagar - 626001. | UAE
                  </p>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.72)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  padding: '22px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(226, 232, 240, 0.85)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  boxShadow: '0 4px 14px rgba(15, 23, 42, 0.03)'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--brand-blue-50)',
                    color: 'var(--brand-blue-700)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--brand-navy-900)', marginBottom: '4px' }}>
                    Direct Telephone
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', lineHeight: '1.45' }}>
                    Primary: +91 78249 28339<br />
                    Secondary: +91 97518 67879
                  </p>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.72)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  padding: '22px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(226, 232, 240, 0.85)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  boxShadow: '0 4px 14px rgba(15, 23, 42, 0.03)'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--brand-blue-50)',
                    color: 'var(--brand-blue-700)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--brand-navy-900)', marginBottom: '4px' }}>
                    Official Email Addresses
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', lineHeight: '1.45' }}>
                    admin@rohiltechnologies.com<br />
                    rfp@rohiltechnologies.com
                  </p>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.58)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  padding: '22px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255, 255, 255, 0.85)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  boxShadow: '0 4px 14px rgba(15, 23, 42, 0.03)'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--brand-blue-50)',
                    color: 'var(--brand-blue-700)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Clock size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--brand-navy-900)', marginBottom: '4px' }}>
                    Operational Hours & Support
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)' }}>
                    Standard Office: Mon - Fri: 9:00 AM - 7:00 PM IST<br />
                    Managed Cloud NOC: 24/7/365 Global Monitoring
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.68)',
              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',
              borderRadius: 'var(--radius-xl)',
              padding: '36px 32px',
              border: '1px solid rgba(255, 255, 255, 0.95)',
              boxShadow: '0 16px 36px -4px rgba(99, 102, 241, 0.06)'
            }}
          >
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.45rem', color: 'var(--brand-navy-950)', marginBottom: '6px' }}>
                Request an Architectural Consultation
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--slate-500)' }}>
                Fill out the form below and an engineering director will respond within 1 business day.
              </p>
            </div>

            {formStatus.submitted ? (
              <div
                style={{
                  padding: '32px 24px',
                  backgroundColor: 'var(--brand-blue-50)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--brand-blue-200)',
                  textAlign: 'center',
                  animation: 'fadeIn 0.3s ease'
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--brand-blue-600)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px'
                  }}
                >
                  <CheckCircle2 size={30} />
                </div>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--brand-navy-950)', marginBottom: '8px' }}>
                  Project Brief Formatted &amp; Transmitted!
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--slate-600)', lineHeight: '1.5', marginBottom: '20px' }}>
                  WhatsApp has opened with your pre-filled inquiry addressed to <strong>+91 97518 67879</strong>. Please review your message in WhatsApp and tap <strong>Send</strong>.
                </p>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  {formStatus.whatsappUrl && (
                    <a
                      href={formStatus.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                      style={{ textDecoration: 'none' }}
                    >
                      Re-open WhatsApp
                    </a>
                  )}
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => {
                      setFormStatus({ submitting: false, submitted: false, error: null, whatsappUrl: '' });
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        serviceInterest: 'Mobile Application (Android, iOS, Flutter, PWA)',
                        message: ''
                      });
                    }}
                  >
                    Submit Another Brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {formStatus.error && (
                  <div
                    style={{
                      padding: '10px 14px',
                      backgroundColor: '#fef2f2',
                      color: '#b91c1c',
                      borderRadius: '6px',
                      fontSize: '0.85rem',
                      border: '1px solid #fecaca'
                    }}
                  >
                    {formStatus.error}
                  </div>
                )}

                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--slate-800)', marginBottom: '6px' }}
                  >
                    Full Name <span style={{ color: '#dc2626' }}>*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Michael Chen"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-medium)',
                      fontSize: '0.925rem',
                      fontFamily: 'inherit',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Email & Phone Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label
                      htmlFor="contact-email"
                      style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--slate-800)', marginBottom: '6px' }}
                    >
                      Corporate Email <span style={{ color: '#dc2626' }}>*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '8px',
                        border: '1px solid var(--border-medium)',
                        fontSize: '0.925rem',
                        fontFamily: 'inherit',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--slate-800)', marginBottom: '6px' }}
                    >
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '8px',
                        border: '1px solid var(--border-medium)',
                        fontSize: '0.925rem',
                        fontFamily: 'inherit',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                {/* Area of Interest */}
                <div>
                  <label
                    htmlFor="contact-service"
                    style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--slate-800)', marginBottom: '6px' }}
                  >
                    Primary Area of Interest
                  </label>
                  <select
                    id="contact-service"
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-medium)',
                      fontSize: '0.925rem',
                      fontFamily: 'inherit',
                      backgroundColor: '#ffffff',
                      outline: 'none'
                    }}
                  >
                    <option value="Mobile Application (Android, iOS, Flutter, PWA)">Mobile Application (Android, iOS, Flutter, PWA)</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Software Development">Software Development</option>
                    <option value="Chat Bot & Conversational AI">Chat Bot & Conversational AI</option>
                    <option value="Business Process Services (RPA & Automation)">Business Process Services (RPA & Automation)</option>
                    <option value="Custom Applications">Custom Applications</option>
                    <option value="Artificial Intelligence and Data Analyst">Artificial Intelligence and Data Analyst</option>
                    <option value="Cloud Infrastructure & Migration">Cloud Infrastructure & Migration</option>
                    <option value="Cyber Security & Zero Trust">Cyber Security & Zero Trust</option>
                    <option value="Enterprise ERP / CRM Solutions">Enterprise ERP / CRM Solutions</option>
                    <option value="Ready-to-Deploy SaaS Products">Ready-to-Deploy SaaS Products</option>
                    <option value="Other Strategic Inquiries">Other Strategic Inquiries</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--slate-800)', marginBottom: '6px' }}
                  >
                    Project Details & Scope <span style={{ color: '#dc2626' }}>*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Briefly describe your objectives, timelines, tech preferences, and scale requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-medium)',
                      fontSize: '0.925rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', marginTop: '6px' }}
                >
                  {formStatus.submitting ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <span>Transmit Project Brief</span>
                      <Send size={16} />
                    </>
                  )}
                </button>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.785rem', color: 'var(--slate-400)' }}>
                  <ShieldCheck size={14} color="var(--brand-blue-600)" />
                  <span>Your enterprise data is protected under standard non-disclosure terms.</span>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* =====================================================================
            Global Office Locations Grid
            ===================================================================== */}
        <div style={{ marginTop: '80px' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 40px' }}>
            <span className="badge badge-navy" style={{ marginBottom: '12px' }}>
              Worldwide Presence
            </span>
            <h3 style={{ fontSize: '1.85rem', color: 'var(--brand-navy-950)' }}>
              Regional Innovation Centers
            </h3>
            <p style={{ color: 'var(--slate-600)', fontSize: '0.95rem', marginTop: '8px' }}>
              Collaborating across global time zones to support rapid deployment and continuous engineering.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px'
            }}
          >
            {OFFICE_LOCATIONS.map((loc, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.72)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  padding: '26px',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid rgba(226, 232, 240, 0.85)',
                  boxShadow: '0 4px 14px rgba(15, 23, 42, 0.03)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <Building2 size={20} color="var(--brand-blue-700)" />
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--brand-navy-900)', margin: 0 }}>
                    {loc.city}
                  </h4>
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--brand-blue-600)', textTransform: 'uppercase', marginBottom: '12px' }}>
                  {loc.country}
                </div>
                <p style={{ fontSize: '0.865rem', color: 'var(--slate-600)', lineHeight: '1.5', marginBottom: '14px' }}>
                  {loc.address}
                </p>
                <div style={{ borderTop: '1px solid var(--slate-100)', paddingTop: '12px', fontSize: '0.825rem', color: 'var(--slate-500)' }}>
                  <div><strong>Phone:</strong> {loc.phone}</div>
                  <div style={{ marginTop: '3px' }}><strong>Email:</strong> {loc.email}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================================
            FAQ Section
            ===================================================================== */}
        <div style={{ marginTop: '80px', maxWidth: '780px', marginInline: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.65rem', color: 'var(--brand-navy-950)' }}>
              Frequently Asked Questions
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.72)',
                    backdropFilter: 'blur(14px)',
                    WebkitBackdropFilter: 'blur(14px)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(226, 232, 240, 0.85)',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '18px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      fontSize: '0.975rem',
                      fontWeight: 600,
                      color: isOpen ? 'var(--brand-blue-700)' : 'var(--slate-800)',
                      cursor: 'pointer',
                      background: 'transparent'
                    }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                        color: 'var(--slate-400)'
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 20px 20px', fontSize: '0.9rem', color: 'var(--slate-600)', lineHeight: '1.6' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
