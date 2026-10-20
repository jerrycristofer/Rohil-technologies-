import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Sparkles, Layers, Video, ShieldCheck, Smartphone, Monitor, Laptop, ArrowRight } from 'lucide-react';

export default function HeroVideoShowcase() {
  // 'video' | 'ecosystem' | 'mobile' | 'web'
  const [activeTab, setActiveTab] = useState('video');
  const [isPlaying, setIsPlaying] = useState(true);
  const canvasRef = useRef(null);

  // Gallery items metadata
  const galleryItems = [
    {
      id: 'ecosystem',
      label: 'Web & Mobile Suite',
      badge: 'Full-Stack',
      icon: Monitor,
      imageSrc: '/hero-showcase.jpg',
      alt: 'Rohil Technologies Enterprise Web and Mobile App Ecosystem Showcase',
      pill1: {
        icon: Smartphone,
        title: 'Cross-Platform & Native Mobile Apps',
        subtitle: 'iOS (Swift), Android (Kotlin), Flutter & PWA'
      },
      pill2: {
        icon: Laptop,
        title: 'Enterprise Web & Cloud Portals',
        subtitle: 'Custom SaaS, Microservices & Secure API Pipelines'
      }
    },
    {
      id: 'mobile',
      label: 'Native Mobile Apps',
      badge: 'iOS & Android',
      icon: Smartphone,
      imageSrc: '/hero-mobile-showcase.jpg',
      alt: 'Rohil Technologies Native Mobile App Showcase on iOS and Android',
      pill1: {
        icon: Smartphone,
        title: 'High-Performance Mobile UX',
        subtitle: 'Sub-second response, biometric auth & offline-first sync'
      },
      pill2: {
        icon: ShieldCheck,
        title: 'Enterprise Store Compliance',
        subtitle: 'Scalable mobile engineering built for millions of users'
      }
    },
    {
      id: 'web',
      label: 'Enterprise Web Platform',
      badge: 'Cloud & SaaS',
      icon: Laptop,
      imageSrc: '/hero-web-showcase.jpg',
      alt: 'Rohil Technologies Enterprise Cloud Dashboard and Web Application Showcase',
      pill1: {
        icon: Laptop,
        title: 'Interactive Analytics & Dashboards',
        subtitle: 'Real-time telemetry, WebSocket streaming & modular UI'
      },
      pill2: {
        icon: Sparkles,
        title: '99.98% Service Uptime',
        subtitle: 'Cloud-native infrastructure optimized for heavy enterprise workloads'
      }
    },
    {
      id: 'video',
      label: 'Live Architecture Reel',
      badge: 'Interactive Video',
      icon: Video,
      alt: 'Rohil Technologies Live High-Tech Architecture Simulation Reel'
    }
  ];

  const currentItem = galleryItems.find((item) => item.id === activeTab) || galleryItems[0];

  // Dynamic high-tech visual particle stream on canvas
  useEffect(() => {
    if (activeTab !== 'video') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Tech nodes network simulation
    const nodes = Array.from({ length: 48 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.75,
      vy: (Math.random() - 0.5) * 0.75,
      radius: Math.random() * 2.5 + 1.5,
      color: Math.random() > 0.4 ? '#388bfd' : '#00c2ff'
    }));

    const render = () => {
      ctx.fillStyle = '#060f1e';
      ctx.fillRect(0, 0, width, height);

      // Subtle grid lines
      ctx.strokeStyle = 'rgba(0, 71, 204, 0.08)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Connecting lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 115) {
            ctx.strokeStyle = `rgba(0, 132, 255, ${0.28 * (1 - dist / 115)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Nodes
      nodes.forEach((node) => {
        if (isPlaying) {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
        }

        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowColor = node.color;
        ctx.shadowBlur = 6;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isPlaying, activeTab]);

  return (
    <div
      className="hero-video-wrapper"
      style={{
        width: '100%',
        maxWidth: '1100px',
        margin: '38px auto 0',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 24px 60px -12px rgba(7, 19, 38, 0.22), 0 0 0 1px rgba(226, 232, 240, 0.8)',
        backgroundColor: '#071326',
        position: 'relative'
      }}
    >
      {/* Top Window Navigation Bar with View Mode Switcher */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 18px',
          backgroundColor: '#0a1b38',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          flexWrap: 'wrap',
          gap: '12px'
        }}
      >
        {/* macOS Window Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
          <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
          <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#10b981' }} />
        </div>

        {/* View Mode Toggle Tabs */}
        <div
          style={{
            display: 'inline-flex',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            padding: '3px',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            overflowX: 'auto',
            maxWidth: '100%'
          }}
        >
          {galleryItems.map((item) => {
            const Icon = item.icon;
            const isCurrent = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '7px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  backgroundColor: isCurrent ? '#0047cc' : 'transparent',
                  color: isCurrent ? '#ffffff' : '#94a3b8',
                  whiteSpace: 'nowrap'
                }}
              >
                <Icon size={14} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* URL Pill */}
        <div
          style={{
            fontSize: '0.78rem',
            color: '#94a3b8',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            padding: '4px 12px',
            borderRadius: '6px',
            fontFamily: 'monospace',
            letterSpacing: '0.02em',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <Sparkles size={12} color="#388bfd" />
          <span>rohiltechnologies.com/{activeTab === 'video' ? 'live-reel' : activeTab}</span>
        </div>
      </div>

      {/* Main Showcase Canvas / Image Frame */}
      {activeTab !== 'video' ? (
        /* HERO SECTION IMAGES */
        <div
          style={{
            position: 'relative',
            width: '100%',
            minHeight: '380px',
            backgroundColor: '#071326',
            overflow: 'hidden'
          }}
        >
          <img
            key={currentItem.id}
            src={currentItem.imageSrc}
            alt={currentItem.alt}
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '540px',
              objectFit: 'cover',
              display: 'block',
              transition: 'opacity 0.4s ease'
            }}
          />

          {/* Floating Pill Accents */}
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              right: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '12px',
              pointerEvents: 'none'
            }}
          >
            {currentItem.pill1 && (
              <div
                style={{
                  backgroundColor: 'rgba(7, 19, 38, 0.85)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0, 102, 255, 0.3)',
                  padding: '10px 16px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)'
                }}
              >
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(0, 102, 255, 0.2)',
                    color: '#388bfd',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <currentItem.pill1.icon size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#ffffff' }}>
                    {currentItem.pill1.title}
                  </div>
                  <div style={{ fontSize: '0.725rem', color: '#94a3b8' }}>
                    {currentItem.pill1.subtitle}
                  </div>
                </div>
              </div>
            )}

            {currentItem.pill2 && (
              <div
                style={{
                  backgroundColor: 'rgba(7, 19, 38, 0.85)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0, 102, 255, 0.3)',
                  padding: '10px 16px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)'
                }}
              >
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(0, 102, 255, 0.2)',
                    color: '#388bfd',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <currentItem.pill2.icon size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#ffffff' }}>
                    {currentItem.pill2.title}
                  </div>
                  <div style={{ fontSize: '0.725rem', color: '#94a3b8' }}>
                    {currentItem.pill2.subtitle}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* HERO VIDEO SHOWCASE: Live Interactive Canvas Stream */
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '440px',
            backgroundColor: '#060f1e',
            overflow: 'hidden'
          }}
        >
          <canvas
            ref={canvasRef}
            style={{ width: '100%', height: '100%', display: 'block' }}
          />

          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '28px',
              background: 'linear-gradient(180deg, rgba(6, 15, 30, 0.2) 0%, rgba(6, 15, 30, 0.65) 100%)',
              pointerEvents: 'none'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#388bfd',
                  backgroundColor: 'rgba(0, 102, 255, 0.15)',
                  border: '1px solid rgba(0, 102, 255, 0.35)',
                  padding: '4px 12px',
                  borderRadius: '999px'
                }}
              >
                Enterprise Engineering Simulation
              </span>
            </div>

            <div style={{ alignSelf: 'center', pointerEvents: 'auto' }}>
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0, 71, 204, 0.85)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 0 30px rgba(0, 102, 255, 0.5)',
                  transition: 'all 0.2s ease'
                }}
                aria-label={isPlaying ? 'Pause Showreel' : 'Play Showreel'}
              >
                {isPlaying ? <Pause size={26} /> : <Play size={26} style={{ marginLeft: '3px' }} />}
              </button>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: '#ffffff',
                fontSize: '0.85rem'
              }}
            >
              <div>
                <div style={{ fontWeight: 600, color: '#ffffff' }}>
                  Next-Gen Architecture &amp; Scalable Mobile Systems
                </div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '2px' }}>
                  Virudhunagar Delivery Hub • Global Enterprise Scale
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#388bfd', fontWeight: 600 }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                    display: 'inline-block'
                  }}
                />
                <span>LIVE SIMULATION</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

