// ROHIL TECHNOLOGIES - Structured Corporate Navigation Data

export const NAVIGATION_DATA = [
  {
    id: 'home',
    label: 'Home',
    type: 'direct-link',
    path: '/',
    description: 'ROHIL TECHNOLOGIES homepage, capabilities and enterprise solutions.'
  },
  {
    id: 'company',
    label: 'Company',
    type: 'dropdown-nested',
    description: 'Learn about our heritage, vision, leadership, and culture of engineering excellence.',
    items: [
      {
        id: 'about',
        label: 'About',
        description: 'Our founding principles, vision, mission and strategic perspectives.',
        hasSubmenu: true,
        submenu: [
          {
            id: 'vision',
            label: 'Our Vision',
            description: 'Shaping the next digital frontier with sustainable and scalable enterprise tech.',
            icon: 'Target',
            tag: 'Strategic Focus'
          },
          {
            id: 'mission',
            label: 'Mission',
            description: 'Accelerating digital transformation with mission-critical engineering velocity.',
            icon: 'Compass',
            tag: 'Core Purpose'
          },
          {
            id: 'point-of-view',
            label: 'Our Point Of View',
            description: 'Thought leadership on cloud modernization, AI ethics, and resilient architectures.',
            icon: 'Lightbulb',
            tag: 'Insights'
          },
          {
            id: 'events',
            label: 'Events',
            description: 'Global tech symposiums, developer hackathons, and corporate townhalls.',
            icon: 'Calendar',
            tag: 'Global Meetups'
          }
        ]
      },
      {
        id: 'testimonials',
        label: 'Client Testimonial',
        description: 'Endorsements and verified reviews from Fortune 500 and growth enterprise leaders.',
        icon: 'MessageSquareQuote',
        hasSubmenu: false
      },
      {
        id: 'career',
        label: 'Career',
        description: 'Join a high-performance team building future-proof technology systems.',
        icon: 'Briefcase',
        hasSubmenu: false,
        badge: 'Hiring'
      },
      {
        id: 'case-studies',
        label: 'Case Study',
        description: 'Real-world digital impact stories and architectural deep dives across verticals.',
        icon: 'FileText',
        hasSubmenu: false
      },
      {
        id: 'internship',
        label: 'Internship',
        description: 'Empowering future tech leaders through hands-on industry mentorship and R&D.',
        icon: 'GraduationCap',
        hasSubmenu: false,
        badge: '2026 Cohort'
      }
    ]
  },
  {
    id: 'services',
    label: 'Services',
    type: 'dropdown-nested',
    description: 'Comprehensive digital engineering, cloud consulting, and cutting-edge software solutions.',
    items: [
      {
        id: 'mobile-app',
        label: 'Mobile Application',
        description: 'End-to-end native and multi-platform mobile engineering for global scale.',
        hasSubmenu: true,
        submenu: [
          {
            id: 'android-dev',
            label: 'Android Development',
            description: 'High-performance Kotlin & Jetpack Compose apps built for billions of devices.',
            icon: 'Smartphone',
            tag: 'Native'
          },
          {
            id: 'ios-dev',
            label: 'IOS Development',
            description: 'Intuitive Swift & SwiftUI enterprise applications with hardware acceleration.',
            icon: 'Apple',
            tag: 'Native iOS'
          },
          {
            id: 'flutter-dev',
            label: 'Flutter App Development',
            description: 'Single codebase, native compilation for iOS, Android, Desktop, and Web.',
            icon: 'Layers',
            tag: 'Cross-Platform'
          },
          {
            id: 'pwa-dev',
            label: 'Progressive Web Applications',
            description: 'Offline-capable, lightning-fast web apps offering app-like engagement.',
            icon: 'Globe',
            tag: 'Modern Web'
          }
        ]
      },
      {
        id: 'web-dev',
        label: 'Website Development',
        description: 'High-converting, responsive enterprise portals and headless web platforms.',
        icon: 'Globe',
        hasSubmenu: false
      },
      {
        id: 'software-dev',
        label: 'Software Development',
        description: 'Bespoke enterprise software, microservices, and distributed cloud backends.',
        icon: 'Code2',
        hasSubmenu: false
      },
      {
        id: 'chatbot-dev',
        label: 'Chat Bot Development',
        description: 'Conversational AI, NLP-driven customer care, and automated workflows.',
        icon: 'Bot',
        hasSubmenu: false,
        badge: 'AI Powered'
      },
      {
        id: 'bps',
        label: 'Business Process Services',
        description: 'Intelligent automation, RPA, and end-to-end business process optimization.',
        icon: 'Workflow',
        hasSubmenu: false
      },
      {
        id: 'custom-apps',
        label: 'Custom Applications',
        description: 'Tailor-made software architectures addressing niche operational challenges.',
        icon: 'Cpu',
        hasSubmenu: false
      },
      {
        id: 'ai-data',
        label: 'Artificial Intelligence and Data Analyst',
        description: 'Predictive intelligence, GenAI models, Big Data pipelines, and BI telemetry.',
        icon: 'BrainCircuit',
        hasSubmenu: false,
        badge: 'Next-Gen'
      },
      {
        id: 'cloud',
        label: 'Cloud',
        description: 'Multi-cloud strategy, AWS/GCP/Azure migrations, Kubernetes, and FinOps.',
        icon: 'Cloud',
        hasSubmenu: false
      },
      {
        id: 'cybersecurity',
        label: 'Cyber Security',
        description: 'Zero Trust architecture, penetration testing, compliance, and threat mitigation.',
        icon: 'ShieldCheck',
        hasSubmenu: false
      },
      {
        id: 'enterprise-solutions',
        label: 'Enterprise Solutions',
        description: 'ERP modernization, CRM integrations, and resilient core legacy upgrades.',
        icon: 'Building2',
        hasSubmenu: false
      }
    ]
  },
  {
    id: 'industries',
    label: 'Industries',
    type: 'mega-menu',
    description: 'Transformative technology solutions tailored for sector-specific regulatory and scale requirements.',
    items: [
      { id: 'education', label: 'Education', icon: 'GraduationCap', desc: 'EdTech platforms, LMS, and adaptive learning systems.' },
      { id: 'healthcare', label: 'Healthcare', icon: 'HeartPulse', desc: 'HIPAA-compliant EHR, telemedicine, and health informatics.' },
      { id: 'travel-logistics', label: 'Travel & Logistics', icon: 'Plane', desc: 'Route optimization, fleet management, and booking engines.' },
      { id: 'constructions', label: 'Constructions', icon: 'HardHat', desc: 'BIM integrations, site safety IoT, and project tracking.' },
      { id: 'food-industries', label: 'Food Industries', icon: 'Utensils', desc: 'Supply chain traceability, inventory, and kitchen automation.' },
      { id: 'manufacturing', label: 'Manufacturing', icon: 'Factory', desc: 'Industry 4.0, predictive maintenance, and smart shopfloors.' },
      { id: 'info-services', label: 'Information Services', icon: 'Database', desc: 'High-throughput data indexing and knowledge graphs.' },
      { id: 'prof-services', label: 'Professional Services', icon: 'Briefcase', desc: 'Practice management, billing automation, and client portals.' },
      { id: 'retail-textile', label: 'Retail / Textile / Whole Sales', icon: 'ShoppingBag', desc: 'Omnichannel commerce, POS integration, and inventory sync.' },
      { id: 'transportation', label: 'Transportation', icon: 'Truck', desc: 'Telematics, urban transit routing, and dispatch systems.' },
      { id: 'hospitality', label: 'Hospitality & Services', icon: 'Hotel', desc: 'Guest loyalty engines, PMS integrations, and contactless check-in.' },
      { id: 'network-edge', label: 'Network & Edge Providers', icon: 'Network', desc: '5G edge computing, distributed nodes, and SDN solutions.' },
      { id: 'hi-tech', label: 'Hi-Tech', icon: 'Cpu', desc: 'Semiconductor firmware, IoT ecosystems, and deep tech.' }
    ]
  },
  {
    id: 'product',
    label: 'Product',
    type: 'mega-menu',
    description: 'Turnkey enterprise-grade SaaS products and customizable mobile & web ecosystems.',
    items: [
      { id: 'food-delivery', label: 'Food Delivery App', icon: 'UtensilsCrossed', desc: 'Live GPS dispatch, merchant portal, and payment integration.' },
      { id: 'grocery-app', label: 'Grocery App', icon: 'Store', desc: 'Hyperlocal catalog, batch picking, and slot scheduling.' },
      { id: 'ecommerce-app', label: 'E-Commerce App', icon: 'ShoppingCart', desc: 'High-scale shopping carts, 1-click checkout, and AI recommendations.' },
      { id: 'learning-app', label: 'Learning App', icon: 'BookOpen', desc: 'Interactive video quizzes, progress analytics, and certificates.' },
      { id: 'packers-movers', label: 'Packers-Movers', icon: 'Package', desc: 'Volumetric rate estimator, live truck tracking, and damage claims.' },
      { id: 'booking-appointment', label: 'Booking & Appointment', icon: 'CalendarCheck', desc: 'Real-time multi-provider calendars with automated SMS/email alerts.' },
      { id: 'taxi-booking', label: 'Taxi Booking App', icon: 'Car', desc: 'Dynamic surge pricing, driver pooling, and geofenced safety.' },
      { id: 'room-booking', label: 'Room Booking & Rental', icon: 'BedDouble', desc: 'Short-stay reservations, dynamic seasonal rates, and host payouts.' },
      { id: 'real-estate', label: 'Real Estate', icon: 'Home', desc: '3D virtual tour listings, CRM lead routing, and mortgage calculator.' },
      { id: 'institution-mgmt', label: 'Institution Management', icon: 'School', desc: 'Fee processing, timetable planner, and student lifecycle management.' },
      { id: 'pharmacy', label: 'Pharmacy', icon: 'Pill', desc: 'Prescription OCR verification, batch expiration tracking, and reorders.' },
      { id: 'employee-mgmt', label: 'Employee Management', icon: 'Users', desc: 'Payroll calculation, biometric attendance, and performance appraisals.' },
      { id: 'project-mgmt', label: 'Project Management', icon: 'KanbanSquare', desc: 'Kanban boards, resource utilization, sprint burndown, and Gantt charts.' }
    ]
  },
  {
    id: 'newsroom',
    label: 'Newsroom',
    type: 'direct-link',
    path: '/newsroom',
    description: 'Corporate announcements, technology breakthroughs, and press releases.'
  },
  {
    id: 'contact',
    label: 'Contact',
    type: 'direct-link',
    path: '/contact',
    description: 'Connect with our regional offices and technology consultants worldwide.'
  }
];

export const COMPANY_STATS = [
  { value: '500+', label: 'Projects Delivered', desc: 'Across 25+ global countries' },
  { value: '99.8%', label: 'SLA Reliability', desc: 'Mission-critical uptime guarantees' },
  { value: '15+', label: 'Industry Verticals', desc: 'Specialized domain expertise' },
  { value: '24/7', label: 'Enterprise Support', desc: 'Continuous global monitoring' }
];

export const CLIENT_TESTIMONIALS = [
  {
    name: 'David Sterling',
    role: 'Chief Technology Officer',
    company: 'FinVanguard Global',
    quote: 'Rohil Technologies re-engineered our core payment gateway into a microservices architecture. Transaction latency dropped by 42% while scaling effortlessly through Black Friday peak traffic.',
    rating: 5
  },
  {
    name: 'Elena Rostova',
    role: 'VP of Digital Innovation',
    company: 'MedCore Health Systems',
    quote: 'Their mobile engineering and cloud security expertise allowed us to launch a HIPAA-compliant telemedicine platform in record time. Rohil is an indispensable strategic partner.',
    rating: 5
  },
  {
    name: 'Marcus Thorne',
    role: 'Head of Supply Chain Technology',
    company: 'AeroLogix Logistics',
    quote: 'From custom IoT fleet tracking to AI-driven route optimization, Rohil Technologies delivered a flawless enterprise ecosystem that cut fuel expenditures by 18%.',
    rating: 5
  }
];

export const NEWSROOM_ARTICLES = [
  {
    id: 'news-1',
    category: 'Company News',
    title: 'Rohil Technologies Expands Next-Gen AI & Cloud Center of Excellence',
    date: 'October 2, 2026',
    readTime: '4 min read',
    excerpt: 'Investment in advanced GPU clusters and domain-specific generative models expands our capability to serve Fortune 500 enterprises with sovereign AI workloads.',
    tag: 'Expansion',
    featured: true
  },
  {
    id: 'news-2',
    category: 'Technology Updates',
    title: 'Architecting Resilient Zero-Trust Networks for Distributed Microservices',
    date: 'September 28, 2026',
    readTime: '6 min read',
    excerpt: 'An in-depth whitepaper examining how Rohil Technologies applies automated mTLS, eBPF telemetry, and policy-as-code to safeguard hybrid cloud environments.',
    tag: 'Cybersecurity',
    featured: false
  },
  {
    id: 'news-3',
    category: 'Announcements',
    title: 'Rohil Technologies Named Leader in Multi-Platform Enterprise Mobile Engineering',
    date: 'September 15, 2026',
    readTime: '3 min read',
    excerpt: 'Independent analyst evaluation spotlights our rapid Flutter and native development lifecycle, achieving 99.9% crash-free sessions across 10M+ active users.',
    tag: 'Recognition',
    featured: false
  },
  {
    id: 'news-4',
    category: 'Events',
    title: 'Global Tech Conclave 2026: Rohil Keynote on Autonomous Edge Intelligence',
    date: 'September 04, 2026',
    readTime: '5 min read',
    excerpt: 'Our engineering leadership demonstrated real-time computer vision inference at the cellular edge for intelligent transportation and robotics.',
    tag: 'Keynote',
    featured: false
  },
  {
    id: 'news-5',
    category: 'Articles',
    title: 'Scaling Modern Enterprise Portals: From Monoliths to Headless Architectures',
    date: 'August 22, 2026',
    readTime: '7 min read',
    excerpt: 'Practical migration strategies for enterprise engineering leaders navigating content silos, legacy CMS bottlenecks, and multi-region CDNs.',
    tag: 'Architecture',
    featured: false
  },
  {
    id: 'news-6',
    category: 'Company News',
    title: 'Rohil Technologies Announces Annual Campus Internship & Innovation Fellowships',
    date: 'August 10, 2026',
    readTime: '3 min read',
    excerpt: 'Applications open for the 2026 Cohort, offering university graduates hands-on mentorship across AI, Cloud Infrastructure, and Full-Stack Engineering.',
    tag: 'Careers',
    featured: false
  }
];

export const OFFICE_LOCATIONS = [
  {
    city: 'Virudhunagar (HQ)',
    country: 'India | UAE',
    address: '1st Floor, Canara Bank Building, Madura Coats Colony, Sivagami Puram, Virudhunagar - 626001.',
    phone: '+91 78249 28339 / +91 97518 67879',
    email: 'admin@rohiltechnologies.com',
    hours: 'Mon - Fri: 9:00 AM - 7:00 PM IST'
  },
  {
    city: 'San Francisco',
    country: 'United States',
    address: 'Market Street Innovation Center, Suite 800, San Francisco, CA 94105',
    phone: '+1 (415) 555-0198',
    email: 'us.sales@rohiltechnologies.com',
    hours: 'Mon - Fri: 8:30 AM - 6:00 PM PST'
  },
  {
    city: 'London',
    country: 'United Kingdom',
    address: '30 St Mary Axe, City of London, London EC3A 8EP',
    phone: '+44 20 7946 0912',
    email: 'eu.sales@rohiltechnologies.com',
    hours: 'Mon - Fri: 9:00 AM - 5:30 PM GMT'
  },
  {
    city: 'Singapore',
    country: 'Asia-Pacific',
    address: 'Marina Bay Financial Centre, Tower 2, Singapore 018983',
    phone: '+65 6789 0123',
    email: 'apac@rohiltechnologies.com',
    hours: 'Mon - Fri: 9:00 AM - 6:00 PM SGT'
  }
];
