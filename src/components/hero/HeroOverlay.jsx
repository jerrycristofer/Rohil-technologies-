import React from 'react';

/**
 * HeroOverlay Component
 * Subtle cinematic gradient overlay to enhance typography legibility and navbar contrast
 * without muting the vibrancy of the background video footage.
 */
export default function HeroOverlay({ customGradient, customOpacity }) {
  return (
    <>
      {/* Primary balanced dark gradient overlay */}
      <div
        className="hero-video-overlay"
        style={{
          background: customGradient || undefined,
          opacity: customOpacity !== undefined ? customOpacity : 1
        }}
        aria-hidden="true"
      />

      {/* Subtle radial aura for focal contrast */}
      <div className="hero-video-overlay-glow" aria-hidden="true" />

      {/* Bottom feather edge transitioning smoothly into the intro section */}
      <div className="hero-bottom-transition" aria-hidden="true" />
    </>
  );
}
