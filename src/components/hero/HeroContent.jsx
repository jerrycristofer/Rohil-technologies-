import React from 'react';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';

/**
 * HeroContent Component
 * Renders the responsive enterprise typography, CTAs, and smooth scroll indicator
 * with staggered entrance animations. Highly customizable and easy to edit.
 */
export default function HeroContent({
  badgeText = 'Rohil Technologies | Fostering Growth',
  title = 'Web & Mobile App Development',
  highlightText = 'Forward-Thinking Enterprises',
  description = 'Architecting mission-critical cloud infrastructure, high-performance mobile apps, and bespoke digital software engineered for enterprise scale.',
  primaryCta = {
    label: 'Initiate Digital Partnership',
    path: '/contact'
  },
  secondaryCta = {
    label: 'Explore Capabilities',
    targetId: 'company-intro'
  },
  onNavigate,
  onScrollToNext
}) {
  const handlePrimaryClick = () => {
    if (primaryCta.onClick) {
      primaryCta.onClick();
    } else if (onNavigate && primaryCta.path) {
      onNavigate(primaryCta.path);
    }
  };

  const handleSecondaryClick = () => {
    if (secondaryCta.onClick) {
      secondaryCta.onClick();
    } else if (secondaryCta.targetId) {
      const element = document.getElementById(secondaryCta.targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (onScrollToNext) {
        onScrollToNext();
      }
    }
  };

  const handleScrollClick = () => {
    if (onScrollToNext) {
      onScrollToNext();
    } else {
      const introSection = document.getElementById('company-intro');
      if (introSection) {
        introSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="hero-content-container">
      {/* 1. Staggered Tagline / Badge */}
      {badgeText && (
        <div className="hero-badge-wrapper">
          <span className="hero-cinematic-badge">
            <span className="hero-badge-pulse-dot" aria-hidden="true" />
            <Sparkles size={13} style={{ color: '#38bdf8' }} />
            <span>{badgeText}</span>
          </span>
        </div>
      )}

      {/* 2. Staggered Main Heading */}
      <h1 className="hero-main-heading">
        {title}{' '}
        {highlightText && (
          <span className="hero-heading-gradient">
            {highlightText}
          </span>
        )}
      </h1>

      {/* 3. Staggered Supporting Description */}
      {description && (
        <p className="hero-supporting-text">
          {description}
        </p>
      )}

      {/* 4. Staggered CTA Action Group */}
      <div className="hero-cta-group">
        {primaryCta && (
          <button
            type="button"
            className="hero-btn-primary"
            onClick={handlePrimaryClick}
          >
            <span>{primaryCta.label}</span>
            <ArrowRight size={17} />
          </button>
        )}

        {secondaryCta && (
          <button
            type="button"
            className="hero-btn-secondary"
            onClick={handleSecondaryClick}
          >
            <span>{secondaryCta.label}</span>
          </button>
        )}
      </div>

      {/* 5. Subtle Scroll Down Indicator (↓) */}
      <button
        type="button"
        className="hero-scroll-indicator"
        onClick={handleScrollClick}
        aria-label="Scroll to Company Introduction"
      >
        <span className="hero-scroll-indicator-text">Discover More</span>
        <ChevronDown size={20} className="hero-scroll-arrow" />
      </button>
    </div>
  );
}
