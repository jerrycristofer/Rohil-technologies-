import React, { useEffect, useRef, useState } from 'react';
import './CompanyIntroSection.css';

export default function CompanyIntroSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation when 20% to 30% of section enters viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Run only once as requested
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="company-intro"
      ref={sectionRef}
      className="company-intro-section"
      aria-label="Company Introduction - Web & Mobile App Development"
    >
      <div className="container">
        <div className="intro-content-wrapper">
          {/* Step 1: Main Heading */}
          <h2 className={`intro-heading ${isVisible ? 'animate-in' : ''}`}>
            Web &amp; Mobile App Development
          </h2>

          {/* Micro-Interaction: Subtle Animated Accent Line */}
          <div
            className={`intro-accent-line ${isVisible ? 'animate-in' : ''}`}
            aria-hidden="true"
          />


          {/* Step 3: Description Paragraph with Smooth Segmented Reveal */}
          <div className="intro-description-wrapper">
            <p className="intro-description-paragraph">
              <span className={`intro-sentence sentence-1 ${isVisible ? 'animate-in' : ''}`}>
                Rohil Technologies brings over Eight years of experience in web and mobile app development, delivering innovative and scalable software solutions for startups and enterprises.{' '}
              </span>
              <span className={`intro-sentence sentence-2 ${isVisible ? 'animate-in' : ''}`}>
                We specialize in building custom web applications, mobile apps, secure APIs, and cloud-ready systems that help businesses improve efficiency and accelerate digital transformation.{' '}
              </span>
              <span className={`intro-sentence sentence-3 ${isVisible ? 'animate-in' : ''}`}>
                Based in Virudhunagar, we focus on performance, security, and long-term growth, creating future-ready web and mobile applications tailored to each client’s needs.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
