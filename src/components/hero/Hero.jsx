import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  ArrowRight,
  Sparkles,
  Search,
  MessageSquare,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import './Hero.css';

/**
 * ============================================================================
 * ROHIL TECHNOLOGIES — HCLTech-Inspired Top Hero Keynote Video Banner
 * ============================================================================
 * 
 * Recreates the exact top hero banner from the HCLTech reference screenshots:
 * - Placed at the very top of the website right under the floating navbar
 * - Deep royal blue gradient background with subtle ambient light streaks
 * - Top large bold heading: "Rohil Technologies – Keynote session at Ai4 2026"
 * - Left column: 16:9 widescreen video showcase player with play/pause controls
 * - Right column: "From renting AI to owning intelligence" narrative + "Watch video ▶"
 * - Bottom Consultation Bar: "Have tech questions? Our enterprise architects can help."
 */
export default function Hero({ onNavigate }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [searchQuestion, setSearchQuestion] = useState('');
  const videoRef = useRef(null);

  const keynoteData = {
    statementTitle: 'From renting AI to owning intelligence: The case for purpose-built AI',
    description:
      "At Ai4, America's largest enterprise AI conference, Rohil Technologies technology directors discuss why renting or owning AI is not an either/or choice. The real advantage comes from combining specialized AI squads with enterprise data, scalable mobile apps, cloud infrastructure, and full engineering accountability to build intelligence that delivers verified business outcomes.",
    primaryBtnText: 'Watch video',
    videoSrc: '/hero-video.mp4',
    posterSrc: '/tech-hero-banner.jpg'
  };

  // Video time update listener
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
  };

  const handleWatchVideoClick = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      setIsMuted(false);
      video.play().then(() => setIsPlaying(true)).catch(() => {});
      video.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (onNavigate) {
      onNavigate('/contact');
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/contact');
    }
  };

  return (
    <section className="hcl-top-hero-section" aria-label="Enterprise Keynote & Digital Mastery Hero Banner">
      {/* Ambient background particles & radial glows */}
      <div className="hcl-top-hero-ambient" aria-hidden="true" />

      <div className="container hcl-top-hero-container">
        {/* Two-Column Side-by-Side Presentation */}
        <div className="hcl-top-hero-grid">
          {/* Left Column: Widescreen Keynote Video Player */}
          <div className="hcl-top-hero-video-col">
            <div className="hcl-video-player-frame">
              <video
                ref={videoRef}
                className="hcl-keynote-video"
                src={keynoteData.videoSrc}
                poster={keynoteData.posterSrc}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                onClick={togglePlay}
              />

              {/* Top Live Badge */}
              <div className="hcl-video-live-pill">
                <span className="hcl-video-live-dot" />
                <span>AI &amp; CLOUD KEYNOTE</span>
              </div>

              {/* Center Play Overlay Button (appears on hover or pause) */}
              <button
                type="button"
                className={`hcl-video-play-center-btn ${!isPlaying ? 'is-paused' : ''}`}
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? <Pause size={28} /> : <Play size={28} style={{ marginLeft: '4px' }} />}
              </button>

              {/* Bottom Video Controls Bar */}
              <div className="hcl-video-bottom-controls">
                <div
                  className="hcl-video-progress-track"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const pos = (e.clientX - rect.left) / rect.width;
                    if (videoRef.current && videoRef.current.duration) {
                      videoRef.current.currentTime = pos * videoRef.current.duration;
                    }
                  }}
                >
                  <div className="hcl-video-progress-fill" style={{ width: `${progress}%` }} />
                </div>

                <div className="hcl-video-controls-row">
                  <button
                    type="button"
                    className="hcl-ctrl-icon-btn"
                    onClick={togglePlay}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  </button>

                  <button
                    type="button"
                    className="hcl-ctrl-icon-btn"
                    onClick={toggleMute}
                    aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
                  >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>

                  <div className="hcl-video-time-label">
                    <span>Rohil Keynote Showcase</span>
                  </div>

                  <button
                    type="button"
                    className="hcl-ctrl-icon-btn hcl-ctrl-fs"
                    onClick={handleFullscreen}
                    aria-label="Fullscreen"
                  >
                    <Maximize2 size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Statement Heading, Description & Action Buttons */}
          <div className="hcl-top-hero-narrative-col">
            <h1 className="hcl-top-hero-statement-title">
              {keynoteData.statementTitle}
            </h1>

            <p className="hcl-top-hero-statement-desc">
              {keynoteData.description}
            </p>

            <div className="hcl-top-hero-actions">
              {/* White Primary Button matching HCLTech Reference */}
              <button
                type="button"
                className="hcl-top-watch-btn"
                onClick={handleWatchVideoClick}
              >
                <span>{keynoteData.primaryBtnText}</span>
                <Play size={14} fill="currentColor" />
              </button>

              {/* Secondary Translucent Outline Button */}
              <button
                type="button"
                className="hcl-top-consult-btn"
                onClick={() => onNavigate && onNavigate('/contact')}
              >
                <span>Initiate Digital Briefing</span>
                <ArrowRight size={15} />
              </button>
            </div>

            {/* Quick Enterprise Highlights */}
            <div className="hcl-hero-trust-row">
              <div className="hcl-hero-trust-item">
                <CheckCircle2 size={14} className="hcl-trust-icon" />
                <span>Zero Data Leakage Architecture</span>
              </div>
              <div className="hcl-hero-trust-item">
                <CheckCircle2 size={14} className="hcl-trust-icon" />
                <span>Dedicated Agile Squads</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================================
          Bottom Consultation Strip: "Have tech questions? Our architects can help."
          (Directly inspired by HCLTech Screenshot 1)
          ===================================================================== */}
      <div className="hcl-ask-engine-strip">
        <div className="container">
          <div className="hcl-ask-engine-card">
            <div className="hcl-ask-engine-header">
              <span className="hcl-ask-engine-title">
                Have enterprise tech questions?
              </span>
              <span className="hcl-ask-engine-subtitle">
                Our <strong>Solutions Architecture Squad</strong> can help assess your roadmap.
              </span>
            </div>

            <form onSubmit={handleSearchSubmit} className="hcl-ask-engine-form">
              <div className="hcl-ask-engine-input-wrap">
                <input
                  type="text"
                  placeholder="Ask an architectural question, estimate timelines, or initiate a project..."
                  value={searchQuestion}
                  onChange={(e) => setSearchQuestion(e.target.value)}
                  className="hcl-ask-engine-input"
                  aria-label="Enterprise consultation query"
                />
                <button
                  type="submit"
                  className="hcl-ask-engine-submit-btn"
                  aria-label="Submit project consultation inquiry"
                >
                  <Search size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
