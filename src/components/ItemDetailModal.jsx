import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Zap, Layers } from 'lucide-react';
import DynamicIcon from './DynamicIcon';

export default function ItemDetailModal({ item, parent, onClose, onNavigate }) {
  if (!item) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(10, 27, 56, 0.65)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 2500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.2s ease-out'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          maxWidth: '680px',
          width: '100%',
          boxShadow: '0 25px 50px -12px rgba(10, 27, 56, 0.25)',
          overflow: 'hidden',
          border: '1px solid #e2e8f0',
          animation: 'dropdownSlide 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '24px 28px',
            background: 'linear-gradient(135deg, #0a1b38 0%, #0f2b57 100%)',
            color: '#ffffff',
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '16px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#388bfd',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}
            >
              <DynamicIcon name={item.icon || 'Sparkles'} size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {parent?.label || 'ROHIL TECHNOLOGIES'}
              </div>
              <h2 id="modal-title" style={{ fontSize: '1.45rem', color: '#ffffff', margin: '2px 0 0' }}>
                {item.label}
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '8px',
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer'
            }}
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <h4 style={{ fontSize: '0.95rem', color: '#0f172a', marginBottom: '8px' }}>
              Strategic Overview & Capabilities
            </h4>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
              {item.description || item.desc || 'Rohil Technologies provides world-class engineering, domain consulting, and scalable digital execution tailored to enterprise performance benchmarks.'}
            </p>
          </div>

          {/* Key Value Highlights */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '12px',
              padding: '16px',
              backgroundColor: '#f8fafc',
              borderRadius: '12px',
              border: '1px solid #e2e8f0'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Zap size={18} color="var(--brand-blue-600)" />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1e293b' }}>
                High-Velocity Delivery
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <ShieldCheck size={18} color="var(--brand-blue-600)" />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1e293b' }}>
                Enterprise Compliance
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Layers size={18} color="var(--brand-blue-600)" />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1e293b' }}>
                Cloud-Native Scale
              </span>
            </div>
          </div>

          <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
            <p>
              Our dedicated technology center of excellence partners with your engineering teams from initial architectural discovery through production launch and 24/7 SLA operations.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div
          style={{
            padding: '18px 28px',
            backgroundColor: '#f8fafc',
            borderTop: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            flexWrap: 'wrap'
          }}
        >
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onClose}
          >
            Close Preview
          </button>

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              onClose();
              onNavigate('/contact');
            }}
          >
            <span>Consult on {item.label}</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
