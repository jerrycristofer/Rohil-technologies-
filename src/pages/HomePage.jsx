import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import DynamicIcon from '../components/DynamicIcon';
import Hero from '../components/hero/Hero';
import CompanyIntroSection from '../components/CompanyIntroSection';
import ServicesSection from '../components/ServicesSection';
import {
  COMPANY_STATS,
  CLIENT_TESTIMONIALS,
  NAVIGATION_DATA
} from '../data/navigationData';

export default function HomePage({ onNavigate, onOpenItemModal }) {
  const servicesData = NAVIGATION_DATA.find((m) => m.id === 'services');
  const industriesData = NAVIGATION_DATA.find((m) => m.id === 'industries');
  const productData = NAVIGATION_DATA.find((m) => m.id === 'product');

  return (
    <main style={{ flex: 1 }}>
      {/* =====================================================================
          1. Full-Screen Cinematic Tech Video Banner
          ===================================================================== */}
      <Hero
        videoSrc="/hero-video.mp4"
        webmSrc="/hero-tech-video.webm"
        posterSrc="/tech-hero-banner.jpg"
        showContent={true}
        onNavigate={onNavigate}
      />

      {/* =====================================================================
          2. Company Introduction Section
          ===================================================================== */}
      <CompanyIntroSection />

      {/* =====================================================================
          Key Metrics Counter Strip
          ===================================================================== */}
      <section style={{ backgroundColor: 'transparent', padding: '0 0 64px' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.55)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderRadius: 'var(--radius-xl)',
              padding: '32px 36px',
              boxShadow: '0 10px 30px -5px rgba(99, 102, 241, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.85)',
              maxWidth: '1100px',
              margin: '0 auto'
            }}
          >
            {COMPANY_STATS.map((stat, idx) => (
              <div
                key={idx}
                style={{
                  textAlign: 'center',
                  borderRight: idx < COMPANY_STATS.length - 1 ? '1px solid rgba(203, 213, 225, 0.6)' : 'none'
                }}
              >
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: 'var(--brand-blue-700)',
                    lineHeight: 1.1,
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.975rem', fontWeight: 700, color: 'var(--slate-800)', marginTop: '4px' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--slate-500)', marginTop: '2px' }}>
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          Full-Stack Digital Mastery — Enterprise Services Section
          ===================================================================== */}
      <ServicesSection
        servicesData={servicesData}
        onOpenItemModal={onOpenItemModal}
      />

      {/* =====================================================================
          Industries We Transform Section
          ===================================================================== */}
      <section style={{ padding: '96px 0', backgroundColor: 'transparent', borderTop: '1px solid rgba(226, 232, 240, 0.85)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '52px' }}>
            <div style={{ maxWidth: '640px' }}>
              <span className="badge badge-blue" style={{ marginBottom: '12px' }}>
                Deep Domain Expertise
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: 'var(--brand-navy-950)' }}>
                Powering Critical Industry Ecosystems
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--slate-600)', marginTop: '12px' }}>
                We engineer compliant, scalable, and hyper-reliable digital platforms conforming to stringent sector guidelines across 13 core domains.
              </p>
            </div>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => onNavigate('/contact')}
            >
              <span>Consult Domain Experts</span>
              <ArrowRight size={15} />
            </button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '18px'
            }}
          >
            {industriesData?.items.map((ind) => (
              <div
                key={ind.id}
                onClick={() => onOpenItemModal(ind, industriesData)}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.55)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  padding: '22px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255, 255, 255, 0.85)',
                  boxShadow: '0 4px 14px rgba(15, 23, 42, 0.03)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
                className="industry-item-hover"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--brand-blue-50)',
                      color: 'var(--brand-blue-700)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <DynamicIcon name={ind.icon} size={18} />
                  </div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--slate-900)', margin: 0 }}>
                    {ind.label}
                  </h4>
                </div>
                <p style={{ fontSize: '0.845rem', color: 'var(--slate-500)', lineHeight: '1.45' }}>
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          Ready-to-Deploy Enterprise Products Section
          ===================================================================== */}
      <section style={{ padding: '96px 0', backgroundColor: 'transparent', borderTop: '1px solid rgba(226, 232, 240, 0.85)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px' }}>
            <span className="badge badge-navy" style={{ marginBottom: '12px' }}>
              Turnkey Software Ecosystems
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: 'var(--brand-navy-950)' }}>
              Accelerate Time-to-Market with Ready SaaS & Mobile Apps
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--slate-600)', marginTop: '12px' }}>
              Battle-tested product engines designed for rapid customization, white-label deployment, and multi-tenant cloud scalability.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
              gap: '20px'
            }}
          >
            {productData?.items?.map((prod) => (
              <div
                key={prod.id}
                style={{
                  padding: '24px',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid rgba(255, 255, 255, 0.85)',
                  backgroundColor: 'rgba(255, 255, 255, 0.55)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  boxShadow: '0 4px 14px rgba(15, 23, 42, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                <div>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--slate-100)',
                      color: 'var(--slate-700)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px'
                    }}
                  >
                    <DynamicIcon name={prod.icon} size={20} />
                  </div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--brand-navy-900)', marginBottom: '8px' }}>
                    {prod.label}
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--slate-500)', lineHeight: '1.5', marginBottom: '20px' }}>
                    {prod.desc}
                  </p>
                </div>

                <button
                  type="button"
                  className="btn btn-outline btn-sm"
                  onClick={() => onOpenItemModal(prod, productData)}
                >
                  <span>Request Live Demo</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => onNavigate('/contact')}
            >
              <span>Explore Custom Product Architecture &amp; White-Labeling</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================================
          Client Endorsements & Testimonials
          ===================================================================== */}
      <section style={{ padding: '96px 0', backgroundColor: 'transparent', borderTop: '1px solid rgba(226, 232, 240, 0.85)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }}>
            <span className="badge badge-blue" style={{ marginBottom: '12px' }}>
              Verified Enterprise Impact
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.6rem)', color: 'var(--brand-navy-950)' }}>
              Trusted by Technology Leaders
            </h2>
            <p style={{ color: 'var(--slate-600)', fontSize: '1rem', marginTop: '10px' }}>
              Here is what enterprise decision makers say about engineering partnerships with Rohil Technologies.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}
          >
            {CLIENT_TESTIMONIALS.map((test, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.58)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  padding: '32px',
                  borderRadius: '18px',
                  border: '1px solid rgba(255, 255, 255, 0.88)',
                  boxShadow: '0 10px 30px -5px rgba(99, 102, 241, 0.05), 0 4px 12px -2px rgba(15, 23, 42, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <p style={{ color: 'var(--slate-700)', fontSize: '0.975rem', lineHeight: '1.65', fontStyle: 'italic', marginBottom: '24px' }}>
                  "{test.quote}"
                </p>

                <div style={{ borderTop: '1px solid rgba(226, 232, 240, 0.8)', paddingTop: '18px' }}>
                  <div style={{ fontWeight: 700, color: 'var(--brand-navy-950)', fontSize: '1rem' }}>
                    {test.name}
                  </div>
                  <div style={{ fontSize: '0.825rem', color: 'var(--brand-blue-700)', marginTop: '2px', fontWeight: 600 }}>
                    {test.role}, {test.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          Bottom Call to Action Banner
          ===================================================================== */}
      <section style={{ padding: '80px 0', backgroundColor: 'transparent' }}>
        <div className="container">
          <div
            style={{
              background: 'linear-gradient(135deg, #0a1b38 0%, #0047cc 100%)',
              borderRadius: 'var(--radius-xl)',
              padding: '64px 48px',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '32px',
              boxShadow: '0 20px 40px -10px rgba(0, 71, 204, 0.3)'
            }}
          >
            <div style={{ maxWidth: '640px' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: '#ffffff', marginBottom: '14px' }}>
                Ready to Accelerate Your Enterprise Roadmap?
              </h2>
              <p style={{ color: '#e0edff', fontSize: '1.05rem', lineHeight: '1.6' }}>
                Connect directly with our solutions architects to assess requirements, estimate timelines, and architect your next digital breakthrough.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-secondary btn-lg"
                onClick={() => onNavigate('/contact')}
              >
                <span>Request Custom Proposal</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
