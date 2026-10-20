import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, Globe2 } from 'lucide-react';
import { NAVIGATION_DATA } from '../data/navigationData';

export default function Footer({ onNavigate, onOpenItemModal }) {
  const companyMenu = NAVIGATION_DATA.find((m) => m.id === 'company');
  const servicesMenu = NAVIGATION_DATA.find((m) => m.id === 'services');
  const industriesMenu = NAVIGATION_DATA.find((m) => m.id === 'industries');
  const productMenu = NAVIGATION_DATA.find((m) => m.id === 'product');

  return (
    <footer style={{ backgroundColor: '#071326', color: '#94a3b8', borderTop: '1px solid #1e293b', marginTop: 'auto' }}>
      {/* Top Value Banner */}
      <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', padding: '40px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <img
              src="/rohil-icon.jpg"
              alt="Rohil Emblem"
              style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(0, 102, 255, 0.3)' }}
            />
            <div>
              <h3 style={{ color: '#ffffff', fontSize: '1.25rem', margin: 0 }}>
                Accelerate Your Enterprise Digital Future
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: '4px 0 0' }}>
                Partner with Rohil Technologies for mission-critical software engineering, AI, and cloud systems.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onNavigate('/contact')}
            >
              <span>Schedule Consultation</span>
              <ArrowRight size={15} />
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => onNavigate('/newsroom')}
            >
              <span>Explore Newsroom</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="container" style={{ padding: '64px 24px 48px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            marginBottom: '56px'
          }}
        >
          {/* Column 1: Brand & Contact */}
          <div style={{ gridColumn: 'span 1' }}>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/');
              }}
              style={{ display: 'inline-block', marginBottom: '20px', textDecoration: 'none' }}
              aria-label="ROHIL TECHNOLOGIES Home"
            >
              <div style={{ backgroundColor: '#ffffff', padding: '8px 16px', borderRadius: '8px', display: 'inline-flex', alignItems: 'center' }}>
                <img
                  src="/rohil-logo-navbar.png"
                  alt="ROHIL TECHNOLOGIES"
                  className="navbar-logo-img"
                />
              </div>
            </a>
            <p style={{ fontSize: '0.875rem', lineHeight: '1.65', color: '#94a3b8', marginBottom: '20px' }}>
              ROHIL TECHNOLOGIES delivers high-impact digital solutions, cloud infrastructure, enterprise mobile engineering, and cognitive AI platforms to global clients.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#cbd5e1' }}>
                <MapPin size={18} color="var(--brand-blue-400)" style={{ flexShrink: 0, minWidth: '18px', marginTop: '2px' }} />
                <span style={{ lineHeight: '1.5' }}>1st Floor, Canara Bank Building, Madura Coats Colony, Sivagami Puram, Virudhunagar - 626001. | UAE</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#cbd5e1' }}>
                <Phone size={18} color="var(--brand-blue-400)" style={{ flexShrink: 0, minWidth: '18px', marginTop: '2px' }} />
                <span style={{ lineHeight: '1.5' }}>+91 78249 28339 <br /> +91 97518 67879</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1' }}>
                <Mail size={18} color="var(--brand-blue-400)" style={{ flexShrink: 0, minWidth: '18px' }} />
                <span>admin@rohiltechnologies.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 700, marginBottom: '18px', letterSpacing: '0.02em' }}>
              Company
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem' }}>
              <li>
                <button
                  type="button"
                  style={{ color: '#94a3b8', transition: 'color 0.2s', textAlign: 'left' }}
                  onMouseEnter={(e) => (e.target.style.color = '#388bfd')}
                  onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
                  onClick={() => onOpenItemModal(companyMenu.items[0], companyMenu)}
                >
                  About & Perspective
                </button>
              </li>
              {companyMenu?.items.slice(1).map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    style={{ color: '#94a3b8', transition: 'color 0.2s', textAlign: 'left' }}
                    onMouseEnter={(e) => (e.target.style.color = '#388bfd')}
                    onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
                    onClick={() => onOpenItemModal(item, companyMenu)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  style={{ color: '#94a3b8', transition: 'color 0.2s', textAlign: 'left' }}
                  onMouseEnter={(e) => (e.target.style.color = '#388bfd')}
                  onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
                  onClick={() => onNavigate('/newsroom')}
                >
                  Newsroom & Articles
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 700, marginBottom: '18px', letterSpacing: '0.02em' }}>
              Services
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem' }}>
              {servicesMenu?.items.slice(0, 6).map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    style={{ color: '#94a3b8', transition: 'color 0.2s', textAlign: 'left' }}
                    onMouseEnter={(e) => (e.target.style.color = '#388bfd')}
                    onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
                    onClick={() => onOpenItemModal(item, servicesMenu)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  style={{ color: '#388bfd', fontWeight: 600, fontSize: '0.85rem' }}
                  onClick={() => onOpenItemModal(servicesMenu.items[6], servicesMenu)}
                >
                  + All 10 Services
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Industries */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 700, marginBottom: '18px', letterSpacing: '0.02em' }}>
              Industries
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem' }}>
              {industriesMenu?.items.slice(0, 6).map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    style={{ color: '#94a3b8', transition: 'color 0.2s', textAlign: 'left' }}
                    onMouseEnter={(e) => (e.target.style.color = '#388bfd')}
                    onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
                    onClick={() => onOpenItemModal(item, industriesMenu)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  style={{ color: '#388bfd', fontWeight: 600, fontSize: '0.85rem' }}
                  onClick={() => onOpenItemModal(industriesMenu.items[0], industriesMenu)}
                >
                  + All 13 Verticals
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Products */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 700, marginBottom: '18px', letterSpacing: '0.02em' }}>
              Ready-to-Deploy Products
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem' }}>
              {productMenu?.items.slice(0, 6).map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    style={{ color: '#94a3b8', transition: 'color 0.2s', textAlign: 'left' }}
                    onMouseEnter={(e) => (e.target.style.color = '#388bfd')}
                    onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
                    onClick={() => onOpenItemModal(item, productMenu)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  style={{ color: '#388bfd', fontWeight: 600, fontSize: '0.85rem' }}
                  onClick={() => onOpenItemModal(productMenu.items[0], productMenu)}
                >
                  + All 13 SaaS Solutions
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Compliance & Rights Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.825rem'
          }}
        >
          <div style={{ color: '#64748b' }}>
            © {new Date().getFullYear()} ROHIL TECHNOLOGIES. All rights reserved. Enterprise IT & Digital Engineering.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', color: '#94a3b8' }}>
            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }}>Terms of Service</span>
            <span style={{ cursor: 'pointer' }}>Security & ISO 27001</span>
            <span style={{ cursor: 'pointer' }}>Cookie Settings</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
