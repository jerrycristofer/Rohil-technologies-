import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, Activity } from 'lucide-react';

/**
 * ============================================================================
 * ROHIL TECHNOLOGIES — CYBERNETIC TECH STREAM VIDEO & CANVAS LAYER
 * ============================================================================
 * 
 * GPU-accelerated 60FPS digital stream with flowing fiber-optic light waves,
 * interconnected neural cloud nodes, interactive cursor magnetism, and
 * fallback HTML5 video playback over the custom 4K enterprise tech backdrop.
 */
export default function HeroVideo({
  videoSrc = '/hero-video.mp4',
  webmSrc = '/hero-tech-video.webm',
  mobileVideoSrc = null,
  posterSrc = '/tech-hero-banner.jpg',
  altText = 'Rohil Technologies Enterprise Digital Engineering & Technology Solutions'
}) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isCanvasPlaying, setIsCanvasPlaying] = useState(true);
  const [hasVideoError, setHasVideoError] = useState(false);

  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const animFrameRef = useRef(null);
  const mousePosRef = useRef({ x: -1000, y: -1000, active: false });
  const isVisibleRef = useRef(true);

  // 1. Intersection Observer: Pause animation when scrolled off-screen to preserve CPU
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 2. High-Tech Canvas Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;

    const resize = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Cybernetic nodes
    const nodeCount = Math.min(Math.floor(width / 24), 52);
    const nodes = Array.from({ length: Math.max(nodeCount, 28) }, () => ({
      x: Math.random() * (width || 1200),
      y: Math.random() * (height || 800) * 0.85 + (height || 800) * 0.1,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 0.9,
      radius: Math.random() * 2.5 + 1.5,
      color: Math.random() > 0.4 ? '#00f0ff' : '#388bfd',
      pulse: Math.random() * Math.PI * 2
    }));

    // Data pulses traveling between nodes
    const pulses = Array.from({ length: 16 }, () => ({
      from: Math.floor(Math.random() * nodes.length),
      to: Math.floor(Math.random() * nodes.length),
      progress: Math.random(),
      speed: 0.012 + Math.random() * 0.018
    }));

    let frame = 0;

    const render = () => {
      if (isCanvasPlaying && isVisibleRef.current && width > 0 && height > 0) {
        frame++;
        ctx.clearRect(0, 0, width, height);

        const t = frame * 0.016;

        // A. Flowing Fiber-Optic Energy Sine Waves
        for (let w = 0; w < 3; w++) {
          ctx.beginPath();
          ctx.strokeStyle =
            w === 0
              ? 'rgba(0, 240, 255, 0.42)'
              : w === 1
              ? 'rgba(0, 102, 255, 0.35)'
              : 'rgba(56, 189, 248, 0.28)';
          ctx.lineWidth = w === 0 ? 2.5 : 1.75;
          ctx.shadowColor = '#00f0ff';
          ctx.shadowBlur = 10;

          const yCenter = height * 0.58 + Math.sin(t + w) * 30;
          for (let x = 0; x <= width; x += 18) {
            const y =
              yCenter +
              Math.sin(x * 0.0035 + t * 2.2 + w) * 55 +
              Math.cos(x * 0.007 - t) * 25;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
        ctx.shadowBlur = 0;

        // B. Node Connections (Interconnected Mesh Network)
        const mouse = mousePosRef.current;
        const maxDist = width < 768 ? 110 : 160;

        ctx.lineWidth = 1;
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < maxDist) {
              const alpha = (1 - dist / maxDist) * 0.38;
              ctx.strokeStyle = `rgba(0, 210, 255, ${alpha})`;
              ctx.beginPath();
              ctx.moveTo(nodes[i].x, nodes[i].y);
              ctx.lineTo(nodes[j].x, nodes[j].y);
              ctx.stroke();
            }
          }
        }

        // C. Data Packet Bursts Traveling Along Network Links
        pulses.forEach((p) => {
          p.progress += p.speed;
          if (p.progress >= 1) {
            p.progress = 0;
            p.from = Math.floor(Math.random() * nodes.length);
            p.to = Math.floor(Math.random() * nodes.length);
          }
          const n1 = nodes[p.from];
          const n2 = nodes[p.to];
          if (n1 && n2) {
            const px = n1.x + (n2.x - n1.x) * p.progress;
            const py = n1.y + (n2.y - n1.y) * p.progress;

            ctx.fillStyle = '#ffffff';
            ctx.shadowColor = '#00f0ff';
            ctx.shadowBlur = 8;
            ctx.beginPath();
            ctx.arc(px, py, 2.75, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        });

        // D. Particle Nodes with Gentle Cursor Magnetism
        nodes.forEach((n) => {
          n.x += n.vx;
          n.y += n.vy;

          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 30 || n.y > height - 30) n.vy *= -1;

          // Cursor magnetism
          if (mouse.active) {
            const mdx = mouse.x - n.x;
            const mdy = mouse.y - n.y;
            const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
            if (mDist < 140 && mDist > 0) {
              const force = (1 - mDist / 140) * 0.75;
              n.x += (mdx / mDist) * force;
              n.y += (mdy / mDist) * force;
            }
          }

          n.pulse += 0.04;
          const currentR = n.radius + Math.sin(n.pulse) * 1.25;

          ctx.fillStyle = n.color;
          ctx.shadowColor = n.color;
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(n.x, n.y, Math.max(1, currentR), 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [isCanvasPlaying]);

  // Handle mouse movement over hero
  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mousePosRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true
    };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mousePosRef.current.active = false;
  }, []);

  // HTML5 Video Playback Check
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const playPromise = videoEl.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsVideoLoaded(true))
        .catch(() => setHasVideoError(true));
    }
  }, [videoSrc, webmSrc]);

  return (
    <div
      ref={containerRef}
      className="hero-video-layer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-hidden="true"
      style={{ overflow: 'hidden', position: 'absolute', inset: 0 }}
    >
      {/* 1. Base 4K Cybernetic Poster Texture */}
      <img
        src={posterSrc}
        alt={altText}
        className="hero-poster-img"
        loading="eager"
        decoding="async"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          filter: 'brightness(0.92) contrast(1.08)'
        }}
      />

      {/* 2. HTML5 Video Layer (Fallback when supported) */}
      {!hasVideoError && (
        <video
          ref={videoRef}
          className={`hero-background-video ${isVideoLoaded ? 'is-loaded' : ''}`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setIsVideoLoaded(true)}
          onError={() => setHasVideoError(true)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isVideoLoaded ? 0.8 : 0,
            transition: 'opacity 0.6s ease'
          }}
        >
          {webmSrc && <source src={webmSrc} type="video/webm" />}
          {mobileVideoSrc && (
            <source src={mobileVideoSrc} type="video/mp4" media="(max-width: 640px)" />
          )}
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* 3. GPU-Accelerated 60FPS Reactive Tech Canvas Stream */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 2
        }}
      />

      {/* 4. Minimal HUD Telemetry & Playback Controls Badge */}
      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          right: '28px',
          zIndex: 15,
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          pointerEvents: 'auto'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '999px',
            backgroundColor: 'rgba(7, 19, 38, 0.72)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(0, 240, 255, 0.35)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)'
          }}
        >
          <Activity size={13} color="#00f0ff" />
          <span
            style={{
              fontSize: '0.725rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#00f0ff'
            }}
          >
            60 FPS Tech Stream
          </span>
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: isCanvasPlaying ? '#10b981' : '#f59e0b',
              boxShadow: isCanvasPlaying ? '0 0 8px #10b981' : 'none'
            }}
          />
        </div>

        <button
          type="button"
          onClick={() => setIsCanvasPlaying(!isCanvasPlaying)}
          aria-label={isCanvasPlaying ? 'Pause dynamic tech stream' : 'Play dynamic tech stream'}
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: 'rgba(7, 19, 38, 0.72)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          {isCanvasPlaying ? <Pause size={14} /> : <Play size={14} style={{ marginLeft: '1px' }} />}
        </button>
      </div>
    </div>
  );
}
