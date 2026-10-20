import React, { useState } from 'react';
import {
  ArrowRight,
  Play,
  Sparkles,
  Smartphone,
  Globe,
  Code2,
  Bot,
  Workflow,
  Cpu,
  BrainCircuit,
  Cloud,
  ShieldCheck,
  Building2,
  CheckCircle2,
  Zap,
  Layers,
  ChevronRight
} from 'lucide-react';
import './ServicesSection.css';

// Dedicated icons for all 10 services
const SERVICE_ICONS = {
  'mobile-app': Smartphone,
  'web-dev': Globe,
  'software-dev': Code2,
  'chatbot-dev': Bot,
  'bps': Workflow,
  'custom-apps': Cpu,
  'ai-data': BrainCircuit,
  'cloud': Cloud,
  'cybersecurity': ShieldCheck,
  'enterprise-solutions': Building2
};

// Specialized 3 bottom capability highlights per service
const SERVICE_BOTTOM_CAPABILITIES = {
  'mobile-app': [
    { label: 'Native iOS & Android', sub: 'Swift & Kotlin' },
    { label: 'Multi-Platform Engine', sub: 'Flutter & React Native' },
    { label: 'Enterprise Security', sub: 'Biometrics & Keychain' }
  ],
  'web-dev': [
    { label: 'Headless Platforms', sub: 'Next.js & Micro-Frontends' },
    { label: 'Enterprise Portals', sub: 'High-Converting UX' },
    { label: 'Core Web Vitals', sub: 'Sub-Second Speeds' }
  ],
  'software-dev': [
    { label: 'Microservices Mesh', sub: 'Distributed Containers' },
    { label: 'High Throughput', sub: 'Fault-Tolerant Backends' },
    { label: 'Enterprise APIs', sub: 'gRPC & GraphQL' }
  ],
  'chatbot-dev': [
    { label: 'Conversational AI', sub: 'LLMs & Custom RAG' },
    { label: 'NLP-Driven Care', sub: 'Omnichannel Triage' },
    { label: 'Workflow Triggers', sub: 'Instant Resolution' }
  ],
  'bps': [
    { label: 'RPA Automation', sub: 'Zero-Error Digital Bots' },
    { label: 'Process Intelligence', sub: 'Bottleneck Mining' },
    { label: 'End-to-End Audit', sub: 'Continuous Compliance' }
  ],
  'custom-apps': [
    { label: 'Tailor-Made Logic', sub: 'Niche Operational Fit' },
    { label: 'Legacy Connectors', sub: 'Safe Modernization' },
    { label: 'Elastic Storage', sub: 'Multi-Region Scale' }
  ],
  'ai-data': [
    { label: 'Predictive AI', sub: 'GenAI & Neural Models' },
    { label: 'Big Data Pipelines', sub: 'Real-Time Telemetry' },
    { label: 'Executive BI', sub: 'Decision Intelligence' }
  ],
  'cloud': [
    { label: 'Multi-Cloud Migrations', sub: 'AWS, Azure & GCP' },
    { label: 'Kubernetes Orchestration', sub: 'Auto-Healing Nodes' },
    { label: 'FinOps Governance', sub: 'Cloud Cost Optimization' }
  ],
  'cybersecurity': [
    { label: 'Zero Trust Security', sub: 'Continuous Auth' },
    { label: 'Penetration Testing', sub: 'Threat Modeling' },
    { label: 'Compliance & Audits', sub: 'SOC 2 & ISO 27001' }
  ],
  'enterprise-solutions': [
    { label: 'ERP Modernization', sub: 'SAP & Oracle Upgrades' },
    { label: 'CRM Integration', sub: '360° Customer Fabric' },
    { label: 'Core Resilience', sub: '99.99% Availability' }
  ]
};

// Specialized Frameworks for Mobile Application card
const MOBILE_FRAMEWORKS = [
  'Android Development',
  'IOS Development',
  'Flutter App Development',
  'Progressive Web Apps'
];

export default function ServicesSection({ servicesData, onOpenItemModal }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const items = servicesData?.items || [];

  // Filter categories matching enterprise structure
  const filterCategories = [
    { id: 'all', label: 'All Services', count: items.length },
    {
      id: 'apps',
      label: 'Mobile & Web Apps',
      match: ['mobile-app', 'web-dev', 'software-dev', 'custom-apps'],
      count: 4
    },
    {
      id: 'ai',
      label: 'AI & Automation',
      match: ['chatbot-dev', 'bps', 'ai-data'],
      count: 3
    },
    {
      id: 'cloud',
      label: 'Cloud & Enterprise',
      match: ['cloud', 'cybersecurity', 'enterprise-solutions'],
      count: 3
    }
  ];

  const filteredItems = items.filter((svc) => {
    if (activeCategory === 'all') return true;
    const cat = filterCategories.find((c) => c.id === activeCategory);
    return cat?.match ? cat.match.includes(svc.id) : true;
  });

  return (
    <section
      id="featured-services"
      className="hcl-mastery-section"
      aria-label="Full-Stack Digital Mastery - Comprehensive Enterprise Services"
    >
      <div className="container">
        {/* =================================================================
            1. Section Header (Verbatim Existing Content with HCLTech Clean Typography)
            ================================================================= */}
        <div className="hcl-mastery-header">
          <div className="hcl-badge-wrapper">
            <span className="hcl-badge">
              <Sparkles size={13} style={{ color: '#4f46e5' }} />
              <span>Full-Stack Digital Mastery</span>
            </span>
          </div>

          <h2 className="hcl-heading">
            Comprehensive <span className="hcl-heading-gradient">Enterprise Services</span>
          </h2>

          <p className="hcl-subtitle">
            From distributed cloud migrations to next-generation AI and native mobile applications, our dedicated engineering centers turn complex requirements into robust solutions.
          </p>
        </div>


        {/* =================================================================
            3. Spacious Two-Column Narrative Block (Matching Image 1 bottom)
            ================================================================= */}
        <div className="hcl-narrative-grid">
          <div className="hcl-narrative-col-left">
            <h3 className="hcl-narrative-statement">
              When people are empowered by technology, and transformative technologies are brought to life by human imagination, we don't just deliver results—we supercharge progress.
            </h3>

            <p className="hcl-narrative-body">
              Rohil Technologies' differentiated engineering services and cloud accelerators, together with the innovation of our developers, accelerate organizational agility, drive transformation at scale, and build competitive advantages for the long run.
            </p>

            <button
              type="button"
              className="hcl-narrative-action-btn"
              onClick={() => {
                const el = document.getElementById('transparent-services-grid');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              aria-label="Explore all 10 services below"
            >
              <Play size={16} fill="currentColor" />
              <span>Explore All 10 Capabilities</span>
            </button>
          </div>

          <div className="hcl-narrative-col-right">
            <div className="hcl-narrative-visual-wrapper">
              <img
                src="/services-spotlight-engineer.jpg"
                alt="Rohil Technologies Enterprise Software Engineering Team"
                className="hcl-narrative-visual-img"
                loading="lazy"
              />
              <div className="hcl-narrative-visual-tag">
                <span className="hcl-visual-dot" />
                <span>Dedicated Enterprise Engineering Squads</span>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================================
            4. Transparent UI Cards Grid (Matching Image 3 "Built for Modern Brands")
            ================================================================= */}
        <div id="transparent-services-grid" className="hcl-services-grid-wrapper">
          <div className="hcl-grid-header">
            <div className="hcl-grid-title-wrap">
              <span className="hcl-sub-badge">Architectural Portfolio</span>
              <h3 className="hcl-grid-title">Built for Modern Enterprise Scale</h3>
              <p className="hcl-grid-subtitle">
                Explore our ten core technology disciplines engineered with high throughput, zero-trust security, and microservices scalability.
              </p>
            </div>

            {/* Filter Category Tabs */}
            <div className="hcl-filter-tabs" role="tablist" aria-label="Services filter categories">
              {filterCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`hcl-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                >
                  <span>{cat.label}</span>
                  <span className="hcl-filter-count">{cat.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Grid of 10 Frosted-Glass Transparent UI Cards */}
          <div className="hcl-cards-grid">
            {filteredItems.map((service, index) => {
              const IconComponent = SERVICE_ICONS[service.id] || Code2;
              const isMobileApp = service.id === 'mobile-app';
              const bottomCaps = SERVICE_BOTTOM_CAPABILITIES[service.id] || [];

              return (
                <div
                  key={service.id}
                  className="hcl-service-card"
                  onClick={() => onOpenItemModal && onOpenItemModal(service, servicesData)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      if (onOpenItemModal) onOpenItemModal(service, servicesData);
                    }
                  }}
                  aria-label={`Open details for ${service.label}`}
                >
                  {/* Card Top: Icon & Index / Badges */}
                  <div className="hcl-card-header">
                    <div className="hcl-card-icon-box" aria-hidden="true">
                      <IconComponent size={22} />
                    </div>

                    <div className="hcl-card-badges">
                      {service.badge === 'AI Powered' && (
                        <span className="hcl-badge-ai">
                          <Sparkles size={11} />
                          <span>AI Powered</span>
                        </span>
                      )}
                      {service.badge === 'Next-Gen' && (
                        <span className="hcl-badge-nextgen">
                          <Zap size={11} />
                          <span>Next-Gen</span>
                        </span>
                      )}
                      <span className="hcl-card-index">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Card Title & Description */}
                  <h4 className="hcl-card-title">{service.label}</h4>
                  <p className="hcl-card-description">{service.description}</p>

                  {/* Framework Pills for Mobile Application Card */}
                  {isMobileApp && (
                    <div className="hcl-frameworks-wrap">
                      {MOBILE_FRAMEWORKS.map((fw) => (
                        <span key={fw} className="hcl-framework-tag">
                          {fw}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Capability Highlights for other services */}
                  {!isMobileApp && bottomCaps.length > 0 && (
                    <div className="hcl-card-caps-list">
                      {bottomCaps.slice(0, 2).map((cap, cIdx) => (
                        <div key={cIdx} className="hcl-card-cap-item">
                          <CheckCircle2 size={13} className="hcl-cap-check-icon" />
                          <span className="hcl-cap-label">{cap.label}</span>
                          <span className="hcl-cap-dot">•</span>
                          <span className="hcl-cap-sub">{cap.sub}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Card Action Footer */}
                  <div className="hcl-card-footer">
                    <span className="hcl-card-cta-link">
                      <span>Explore capabilities</span>
                      <ArrowRight size={14} className="hcl-card-arrow-icon" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* =================================================================
              5. Bottom Action Strip (Matching Image 3 bottom "Start Free Trial ->")
              ================================================================= */}
          <div className="hcl-grid-footer">
            <a
              href="/contact"
              className="hcl-bottom-cta-btn"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/contact');
                window.dispatchEvent(new PopStateEvent('popstate'));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span>Initiate Architectural Consultation</span>
              <ArrowRight size={16} />
            </a>

            <div className="hcl-bottom-reassurance">
              <span>Dedicated Engineering Squads</span>
              <span className="hcl-reassurance-divider">•</span>
              <span>ISO 27001 &amp; Zero-Trust Compliant</span>
              <span className="hcl-reassurance-divider">•</span>
              <span>48-72hr Rapid Project Discovery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
