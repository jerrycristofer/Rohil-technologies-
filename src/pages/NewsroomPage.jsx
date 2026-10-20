import React, { useState } from 'react';
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Download,
  Share2,
  X,
  Tag
} from 'lucide-react';
import { NEWSROOM_ARTICLES } from '../data/navigationData';

export default function NewsroomPage({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState(null);

  const categories = ['All', 'Company News', 'Technology Updates', 'Announcements', 'Events', 'Articles'];

  const filteredArticles = NEWSROOM_ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = NEWSROOM_ARTICLES.find((a) => a.featured) || NEWSROOM_ARTICLES[0];

  return (
    <div style={{ flex: 1, backgroundColor: 'transparent', paddingBottom: '96px' }}>
      {/* =====================================================================
          Newsroom Header & Hero
          ===================================================================== */}
      <section
        style={{
          background: 'transparent',
          padding: '130px 0 48px',
          borderBottom: '1px solid rgba(226, 232, 240, 0.85)'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '780px' }}>
            <span
              className="badge badge-blue"
              style={{
                marginBottom: '16px'
              }}
            >
              <Sparkles size={13} />
              Rohil Technologies Newsroom & Editorial
            </span>

            <h1
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
                color: 'var(--brand-navy-950)',
                lineHeight: 1.2,
                marginBottom: '16px'
              }}
            >
              Technology Insights, Corporate Announcements & Innovation Updates
            </h1>

            <p style={{ color: 'var(--slate-600)', fontSize: '1.1rem', lineHeight: '1.6' }}>
              Explore how our engineers, researchers, and domain leaders are pushing the boundaries of AI, cloud architecture, and mission-critical software engineering.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          Filter Tabs & Search Toolbar
          ===================================================================== */}
      <div
        style={{
          backgroundColor: 'rgba(238, 241, 248, 0.82)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(226, 232, 240, 0.85)',
          position: 'sticky',
          top: 'var(--navbar-height)',
          zIndex: 90
        }}
      >
        <div
          className="container"
          style={{
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          {/* Category Filter Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflowX: 'auto', paddingBottom: '4px', maxWidth: '100%' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '7px 16px',
                  borderRadius: '999px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  border: '1px solid',
                  transition: 'all 0.15s ease',
                  backgroundColor: selectedCategory === cat ? 'var(--brand-blue-700)' : '#f1f5f9',
                  color: selectedCategory === cat ? '#ffffff' : 'var(--slate-700)',
                  borderColor: selectedCategory === cat ? 'var(--brand-blue-700)' : '#e2e8f0'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div style={{ position: 'relative', width: '280px', maxWidth: '100%' }}>
            <Search
              size={16}
              style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}
            />
            <input
              type="text"
              placeholder="Search news & updates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 14px 8px 36px',
                borderRadius: '8px',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.875rem',
                outline: 'none',
                fontFamily: 'inherit',
                backgroundColor: 'rgba(255, 255, 255, 0.85)'
              }}
            />
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: '48px' }}>
        {/* =====================================================================
            Featured Story Spotlight (Shown when viewing 'All' and no search filter)
            ===================================================================== */}
        {selectedCategory === 'All' && !searchQuery && (
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.62)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid rgba(255, 255, 255, 0.88)',
              boxShadow: '0 10px 30px -5px rgba(99, 102, 241, 0.05)',
              overflow: 'hidden',
              marginBottom: '48px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
            }}
          >
            {/* Visual Banner Accent */}
            <div
              style={{
                background: 'linear-gradient(135deg, #0047cc 0%, #001f5c 100%)',
                padding: '48px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                color: '#ffffff',
                position: 'relative'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  opacity: 0.15
                }}
              >
                <img
                  src="/rohil-icon.jpg"
                  alt=""
                  style={{ width: '120px', height: '120px', borderRadius: '50%' }}
                />
              </div>

              <div>
                <span
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: '#ffffff',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  Featured Milestone
                </span>
                <h3
                  style={{
                    fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)',
                    color: '#ffffff',
                    margin: '16px 0 12px',
                    lineHeight: 1.25
                  }}
                >
                  {featuredArticle.title}
                </h3>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.85rem', color: '#cbd5e1' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={14} />
                  {featuredArticle.date}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={14} />
                  {featuredArticle.readTime}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <span className="badge badge-blue">{featuredArticle.category}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--slate-500)', fontWeight: 600 }}>
                    #{featuredArticle.tag}
                  </span>
                </div>
                <p style={{ fontSize: '1.05rem', color: 'var(--slate-700)', lineHeight: '1.65', marginBottom: '20px' }}>
                  {featuredArticle.excerpt}
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--slate-500)', lineHeight: '1.6' }}>
                  This technological initiative directly expands our sovereign computing infrastructure, giving enterprise clients unprecedented capability to deploy private AI models with zero data leakage.
                </p>
              </div>

              <div style={{ marginTop: '28px' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setActiveArticle(featuredArticle)}
                >
                  <span>Read Full Press Release</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            News & Updates Card Grid
            ===================================================================== */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--slate-900)' }}>
              {selectedCategory === 'All' ? 'Latest Publications & Articles' : `${selectedCategory} (${filteredArticles.length})`}
            </h3>
            <span style={{ fontSize: '0.85rem', color: 'var(--slate-500)' }}>
              Showing {filteredArticles.length} of {NEWSROOM_ARTICLES.length} stories
            </span>
          </div>

          {filteredArticles.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '60px 20px',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <p style={{ color: 'var(--slate-500)', fontSize: '1rem' }}>
                No news articles found matching "{searchQuery}".
              </p>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                style={{ marginTop: '12px' }}
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '24px'
              }}
            >
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.58)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid rgba(255, 255, 255, 0.88)',
                    boxShadow: '0 4px 14px rgba(15, 23, 42, 0.03)',
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all var(--transition-fast)'
                  }}
                  className="news-card-hover"
                >
                  <div>
                    {/* Tags & Category */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                      <span className="badge badge-blue" style={{ fontSize: '0.725rem' }}>
                        {article.category}
                      </span>
                      <span style={{ fontSize: '0.775rem', color: 'var(--slate-500)', fontWeight: 600 }}>
                        #{article.tag}
                      </span>
                    </div>

                    <h4
                      style={{
                        fontSize: '1.2rem',
                        color: 'var(--brand-navy-950)',
                        lineHeight: 1.35,
                        marginBottom: '12px',
                        cursor: 'pointer'
                      }}
                      onClick={() => setActiveArticle(article)}
                    >
                      {article.title}
                    </h4>

                    <p style={{ fontSize: '0.885rem', color: 'var(--slate-600)', lineHeight: '1.6', marginBottom: '20px' }}>
                      {article.excerpt}
                    </p>
                  </div>

                  <div>
                    <div
                      style={{
                        borderTop: '1px solid var(--slate-100)',
                        paddingTop: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.8rem', color: 'var(--slate-400)' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Calendar size={13} />
                          {article.date}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Clock size={13} />
                          {article.readTime}
                        </span>
                      </div>

                      <button
                        type="button"
                        style={{
                          color: 'var(--brand-blue-700)',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          cursor: 'pointer'
                        }}
                        onClick={() => setActiveArticle(article)}
                      >
                        <span>Read</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Media Kit & Press Inquiries Banner */}
        <div
          style={{
            marginTop: '64px',
            backgroundColor: 'rgba(255, 255, 255, 0.72)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(226, 232, 240, 0.85)',
            boxShadow: '0 4px 14px rgba(15, 23, 42, 0.03)',
            padding: '32px 36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px'
          }}
        >
          <div>
            <h4 style={{ fontSize: '1.15rem', color: 'var(--brand-navy-950)', marginBottom: '4px' }}>
              Media Inquiries & Press Assets
            </h4>
            <p style={{ color: 'var(--slate-600)', fontSize: '0.9rem' }}>
              For executive interviews, official press releases, and brand guidelines, connect with our communications desk.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => onNavigate('/contact')}
            >
              <span>Contact Press Office</span>
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================================
          Article Reading Modal
          ===================================================================== */}
      {activeArticle && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(10, 27, 56, 0.65)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 2600,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setActiveArticle(null)}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 'var(--radius-xl)',
              maxWidth: '720px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: 'var(--shadow-dropdown)',
              border: '1px solid var(--border-subtle)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                padding: '24px 32px',
                borderBottom: '1px solid var(--slate-100)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'sticky',
                top: 0,
                backgroundColor: '#ffffff',
                zIndex: 10
              }}
            >
              <span className="badge badge-blue">{activeArticle.category}</span>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  backgroundColor: '#f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={18} />
              </button>
            </div>

            <div style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.85rem', color: 'var(--slate-500)', marginBottom: '16px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={15} />
                  {activeArticle.date}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={15} />
                  {activeArticle.readTime}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Tag size={15} />
                  #{activeArticle.tag}
                </span>
              </div>

              <h2 style={{ fontSize: '1.75rem', color: 'var(--brand-navy-950)', lineHeight: 1.3, marginBottom: '20px' }}>
                {activeArticle.title}
              </h2>

              <div style={{ fontSize: '1.05rem', color: 'var(--slate-700)', lineHeight: '1.75', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p style={{ fontWeight: 500, color: 'var(--brand-navy-900)' }}>
                  {activeArticle.excerpt}
                </p>
                <p>
                  As enterprise organizations navigate complex data privacy regulations and heterogeneous cloud footprints, ROHIL TECHNOLOGIES continues to invest heavily in resilient software architectures. Our engineering centers combine distributed microservices with automated verification protocols to ensure high performance under extreme operational loads.
                </p>
                <p>
                  "Our mission is to empower global organizations with the engineering velocity required to lead in the digital era," stated the Senior Vice President of Global Delivery at Rohil Technologies. "By pairing deep industry domain knowledge with modern cloud and AI practices, we accelerate tangible business outcomes for our clients."
                </p>
                <p>
                  For further technical insights, whitepapers, and inquiries regarding implementation partnerships, please contact the Rohil Technologies Solutions Architecture team.
                </p>
              </div>

              <div
                style={{
                  marginTop: '36px',
                  paddingTop: '24px',
                  borderTop: '1px solid var(--slate-100)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setActiveArticle(null)}
                >
                  Close Article
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setActiveArticle(null);
                    onNavigate('/contact');
                  }}
                >
                  <span>Connect with Engineering Lead</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
