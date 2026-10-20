import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

/**
 * FeaturedCard Component
 * Reusable visual/content card displayed on the right side of the mega-menu.
 * Styled after the HCLTech reference card with rich gradient, tag, title, description, and button.
 */
export default function FeaturedCard({
  tag = 'FEATURED',
  title,
  description,
  buttonText = 'Learn more',
  onClick
}) {
  return (
    <div className="mega-featured-card">
      <div className="mega-featured-top">
        <span className="mega-featured-tag">
          <Sparkles size={11} />
          <span>{tag}</span>
        </span>
        <h3 className="mega-featured-title">{title}</h3>
        <p className="mega-featured-desc">{description}</p>
      </div>

      <div className="mega-featured-bottom">
        <button
          type="button"
          className="mega-featured-btn"
          onClick={onClick}
        >
          <span>{buttonText}</span>
          <ArrowRight size={13} />
        </button>
      </div>
    </div>
  );
}
