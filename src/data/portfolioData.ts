export interface TechSkill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Cloud' | 'DevOps' | 'AI' | 'Tools';
  proficiency: number;
  yearsOfExperience: number;
  iconName: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  popularTech: string[];
  badge?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'SaaS' | 'AI/LLM' | 'Full Stack' | 'EdTech' | 'E-Commerce' | 'Real-Time';
  heroImage: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  features: string[];
  challenges: string[];
  liveUrl?: string;
  githubUrl?: string;
  screenshots: string[];
  results: { metric: string; label: string }[];
  caseStudyId?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export interface CaseStudyItem {
  id: string;
  title: string;
  client: string;
  industry: string;
  timeline: string;
  role: string;
  heroImage: string;
  problem: string;
  research: string;
  planning: string;
  development: string;
  testing: string;
  deployment: string;
  outcome: string;
  lessonsLearned: string;
  metrics: { value: string; label: string }[];
  techUsed: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  projectType: string;
  platform?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verifyUrl: string;
  badgeColor: string;
  skills?: string[];
  image?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  details: string[];
  iconName: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: 'AI & LLMs' | 'Full Stack' | 'DevOps' | 'SaaS Architecture';
  readTime: string;
  date: string;
  author: string;
  tags: string[];
  image: string;
}

export interface FaqItem {
  id: string;
  category: 'General' | 'Pricing & Contract' | 'Technical' | 'Mentorship';
  question: string;
  answer: string;
}

// Profile Data
export const profileData = {
  name: "Manpreet Singh",
  title: "Senior Full Stack Engineer & Technical Coordinator",
  tagline: "Building High-Performance SaaS Platforms, Real-Time Web Apps & AI Systems",
  yearsExperience: "7+",
  projectsDelivered: "150+",
  happyClients: "50+",
  saasAppsBuilt: "10+",
  clientSatisfaction: "99%",
  location: "Mohali, Punjab, India (Available Worldwide & Remote)",
  email: "manpreetsingh70.it@gmail.com",
  phone: "+91 97838 70541",
  whatsappUrl: "https://wa.me/919783870541?text=Hi%20Manpreet%2C%20I'd%20like%20to%20discuss%20a%20project.",
  githubUrl: "https://github.com/mpcodx",
  linkedinUrl: "https://www.linkedin.com/in/er-manpreet-singh/",
  upworkUrl: "https://www.upwork.com/freelancers/~01ef1b6febcb42a709?mp_source=share",
  resumeUrl: "/Manpreet_Singh_Resume.pdf",
  availabilityStatus: "Available for New Projects & Freelance Contracts",
  bio: `Senior Full Stack Engineer & Technical Coordinator with 7+ years of expertise in Django, FastAPI, React, Next.js, Vue.js, Python, PostgreSQL, AWS, and AI systems. Proven track record of delivering 150+ applications for startups, international publishing brands, EdTech platforms, and gaming portals.`,
  
  aboutSummary: `I specialize in full-stack software development, REST API design, real-time WebSocket applications, and cloud architecture. Throughout my career at Rayon Web Solutions, Ameotech Informatics, Vidya Pranali, and as a freelance lead engineer, I have delivered high-impact systems for clients worldwide—including Allen & Unwin, Murdoch Books, Banking Quest (500,000+ learners), and Play Quiz Now.`,
  
  industries: [
    "International Publishing & E-Commerce",
    "EdTech & Learning Management (LMS)",
    "FinTech & Banking Certification",
    "Real-Time Gaming & Quiz Systems",
    "Legal & Educational Platforms",
    "Generative AI & LLM Automation"
  ],
  
  strengths: [
    "Full-Stack Web Architecture (Django + React/Next.js/Vue.js)",
    "High-Throughput REST & GraphQL API Design",
    "Real-Time WebSocket Engine & Live Scoring Systems",
    "Database Query Tuning & Caching (PostgreSQL, Redis)",
    "AI-Powered Chatbots & Custom Workflow Automation",
    "AWS Cloud Deployment, Docker Containerization & CI/CD"
  ],

  careerHighlights: [
    "Architected and delivered 'Banking Quest' EdTech platform serving 500,000+ accredited financial learners.",
    "Engineered 'Play Quiz Now' real-time WebSocket quiz engine with live multiplayer scoring & monetization.",
    "Built high-performance digital storefronts and catalog tools for major global publishers Allen & Unwin and Murdoch Books.",
    "Developed legal guidance & fact-sheet discovery platform for the Australian Copyright Council (ACC)."
  ]
};

// Tech Stack Data
export const techSkills: TechSkill[] = [
  // Frontend
  { name: "React.js", category: "Frontend", proficiency: 95, yearsOfExperience: 6, iconName: "Code2", description: "Hooks, Redux, State Management, Custom UI Libraries" },
  { name: "Next.js", category: "Frontend", proficiency: 92, yearsOfExperience: 5, iconName: "Globe", description: "SSR, App Router, Server Actions, Performance Optimization" },
  { name: "Vue.js", category: "Frontend", proficiency: 88, yearsOfExperience: 4, iconName: "Layout", description: "Vue 3, Composition API, Pinia, Single File Components" },
  { name: "TypeScript", category: "Frontend", proficiency: 90, yearsOfExperience: 5, iconName: "FileCode", description: "Strict Typing, Generic Interfaces, Enterprise Codebase" },
  { name: "Tailwind CSS", category: "Frontend", proficiency: 96, yearsOfExperience: 5, iconName: "Layout", description: "Custom UI Design Systems, Micro-Animations, Responsive Layouts" },
  { name: "HTML5 & CSS3", category: "Frontend", proficiency: 98, yearsOfExperience: 7, iconName: "FileText", description: "Semantic Accessibility, CSS Grid, Animations" },

  // Backend
  { name: "Python", category: "Backend", proficiency: 96, yearsOfExperience: 7, iconName: "Terminal", description: "Core Language, Async I/O, Metaprogramming, Data Automation" },
  { name: "Django & DRF", category: "Backend", proficiency: 96, yearsOfExperience: 7, iconName: "Server", description: "Django REST Framework, Multi-tenant Architecture, ORM Tuning" },
  { name: "FastAPI", category: "Backend", proficiency: 92, yearsOfExperience: 4, iconName: "Zap", description: "Async High-Speed Endpoints, Pydantic Schema Validation" },
  { name: "Node.js & Express", category: "Backend", proficiency: 85, yearsOfExperience: 4, iconName: "Layers", description: "REST Microservices, JSON APIs, WebSockets" },

  // Database
  { name: "PostgreSQL", category: "Database", proficiency: 94, yearsOfExperience: 7, iconName: "Database", description: "Complex Queries, Indexing, Materialized Views, Migration Rules" },
  { name: "Redis", category: "Database", proficiency: 90, yearsOfExperience: 5, iconName: "Cpu", description: "Caching, Pub/Sub WebSockets, Session Storage" },
  { name: "MySQL", category: "Database", proficiency: 90, yearsOfExperience: 7, iconName: "Database", description: "Relational Schema Design, Optimization, Backup Routines" },
  { name: "MongoDB", category: "Database", proficiency: 85, yearsOfExperience: 5, iconName: "HardDrive", description: "NoSQL Document Storage, Aggregation Framework" },

  // Cloud & DevOps
  { name: "AWS", category: "Cloud", proficiency: 88, yearsOfExperience: 5, iconName: "Cloud", description: "EC2, S3, RDS, CloudFront, IAM Security, Elastic Beanstalk" },
  { name: "Docker", category: "DevOps", proficiency: 90, yearsOfExperience: 5, iconName: "Box", description: "Multi-stage Containerization, Docker Compose, Microservices" },
  { name: "CI/CD & GitHub Actions", category: "DevOps", proficiency: 92, yearsOfExperience: 5, iconName: "GitBranch", description: "Automated Build Pipelines, Automated Tests, Server Deployments" },
  { name: "Linux Server Admin", category: "DevOps", proficiency: 90, yearsOfExperience: 7, iconName: "Monitor", description: "Ubuntu/Debian Configuration, Nginx, Gunicorn, Systemd" },

  // AI & Automation
  { name: "LangChain & AI Agents", category: "AI", proficiency: 90, yearsOfExperience: 3, iconName: "Brain", description: "Autonomous AI Agents, Vector Search (Pinecone/Chroma), RAG" },
  { name: "OpenAI & Gemini APIs", category: "AI", proficiency: 94, yearsOfExperience: 3, iconName: "Sparkles", description: "LLM Integration, Fine-Tuning, Custom Prompt Workflows" },

  // Tools & WebSockets
  { name: "WebSockets & Real-Time", category: "Tools", proficiency: 95, yearsOfExperience: 6, iconName: "Zap", description: "Live Scoring, Chat Systems, Multiplayer Sync" },
  { name: "Git & Version Control", category: "Tools", proficiency: 96, yearsOfExperience: 7, iconName: "GitBranch", description: "Git Flow, Code Reviewing, Branch Management" }
];

// Services Data
export const servicesData: ServiceItem[] = [
  {
    id: "saas-dev",
    title: "SaaS & Web Application Development",
    shortDesc: "Scalable multi-tenant web applications built with Python, Django, FastAPI, React, and Next.js.",
    fullDesc: "I build enterprise-ready SaaS and web applications from concept to cloud release. Complete with secure authentication, multi-tenant databases, subscription billing, interactive dashboards, and high-performance REST APIs.",
    iconName: "Rocket",
    deliverables: ["Full-Stack System Architecture", "Subscription Billing Integration", "Role-Based Access Control (RBAC)", "Custom Admin Dashboards"],
    popularTech: ["Django", "React.js", "Next.js", "PostgreSQL", "AWS"],
    badge: "Most Requested"
  },
  {
    id: "ai-dev",
    title: "AI Chatbots & LLM Automation",
    shortDesc: "Custom AI chatbot systems, NLP models, embeddings, vector databases, and workflow automation.",
    fullDesc: "Transform your platform with custom AI systems. I build RAG document query tools, automated content generators, intelligent customer support agents, and workflow bots powered by LangChain, OpenAI, and Google Gemini.",
    iconName: "Brain",
    deliverables: ["Custom AI Chatbots", "RAG & Vector Search Pipelines", "NLP & Document Extraction", "Automated Business Workflows"],
    popularTech: ["LangChain", "OpenAI API", "Python", "FastAPI", "Pinecone"],
    badge: "Trending"
  },
  {
    id: "realtime-apps",
    title: "Real-Time WebSockets & Interactive Systems",
    shortDesc: "High-speed WebSocket engines for live gaming, quiz platforms, messaging, and real-time alerts.",
    fullDesc: "Engineered real-time systems capable of handling thousands of simultaneous WebSocket connections. Ideal for live multiplayer gaming, interactive quizzes, financial tickers, and collaborative dashboards.",
    iconName: "Zap",
    deliverables: ["WebSocket Channel Layer", "Live Multiplayer Engine", "Real-Time Analytics Sync", "Sub-50ms Message Delivery"],
    popularTech: ["Django Channels", "Redis", "WebSockets", "Next.js"],
    badge: "High Performance"
  },
  {
    id: "api-dev",
    title: "REST API & Backend Microservices",
    shortDesc: "High-throughput, secure, and documented REST APIs engineered with Django REST Framework & FastAPI.",
    fullDesc: "Robust API foundations built to support web apps, mobile clients, and third-party integrations. Clean OpenAPI/Swagger documentation, JWT/OAuth2 authentication, rate limiting, and database query optimization.",
    iconName: "Server",
    deliverables: ["Django REST / FastAPI Endpoints", "JWT & OAuth2 Security", "Swagger API Documentation", "Third-Party Payment Webhooks"],
    popularTech: ["Django REST Framework", "FastAPI", "Python", "PostgreSQL"]
  },
  {
    id: "edtech-dev",
    title: "EdTech & LMS Platform Development",
    shortDesc: "Scalable online learning portals, quiz engines, course certification systems, and student dashboards.",
    fullDesc: "Specialized in building high-scale educational platforms (like Banking Quest). Includes course management, online video streams, automated grading, certification issuance, and student progress analytics.",
    iconName: "Globe",
    deliverables: ["Course & Quiz Modules", "Automated Certificate Generator", "Interactive Student Analytics", "Payment Gateway Integration"],
    popularTech: ["Django", "Next.js", "Vue.js", "PostgreSQL"]
  },
  {
    id: "ecom-pub",
    title: "Publishing & E-Commerce Systems",
    shortDesc: "Digital storefronts, book discovery engines, catalog management, and automated publishing workflows.",
    fullDesc: "Built custom digital platforms for major publishing brands Allen & Unwin and Murdoch Books. Advanced search, multi-category catalogs, seamless cart checkouts, and internal publishing workflow sync.",
    iconName: "Code2",
    deliverables: ["High-Performance Storefront", "Advanced Book Search & Filters", "Catalog Sync Engine", "Responsive Custom UI"],
    popularTech: ["Django", "Vue.js", "Python", "Docker"]
  },
  {
    id: "mvp-dev",
    title: "Startup MVP Build Package",
    shortDesc: "Rapid 4-6 week MVP development packages to validate your product and launch to initial users.",
    fullDesc: "Turn your startup idea into a production-deployed, revenue-ready product. I handle backend API setup, database modeling, frontend UI build, authentication, and AWS deployment.",
    iconName: "Zap",
    deliverables: ["Product Architecture Plan", "Full Stack MVP Build", "AWS/Cloud Deployment", "Investor Demo Preparation"],
    popularTech: ["Next.js", "Django", "Tailwind CSS", "AWS"],
    badge: "Fast Delivery"
  },
  {
    id: "cloud-devops",
    title: "AWS Cloud Deployment & Docker",
    shortDesc: "Containerized Docker deployments, AWS EC2/S3 setups, Nginx reverse proxies, and CI/CD pipelines.",
    fullDesc: "Zero-downtime server setups and continuous deployment. I configure EC2 instances, Dockerized services, SSL certificates, Nginx web servers, and GitHub Actions for automated releases.",
    iconName: "Cloud",
    deliverables: ["AWS Infrastructure Setup", "Docker Containerization", "Nginx & SSL Hardening", "GitHub Actions CI/CD"],
    popularTech: ["AWS EC2/S3", "Docker", "Nginx", "Linux", "GitHub Actions"]
  },
  {
    id: "perf-opt",
    title: "Performance Tuning & Code Refactoring",
    shortDesc: "Database query optimization, Redis caching, legacy code refactoring, and speed improvements.",
    fullDesc: "Eliminate slow SQL queries, memory leaks, and server bottlenecks. I optimize Django ORM calls, implement Redis caching, tune PostgreSQL indexes, and improve frontend loading times.",
    iconName: "TrendingUp",
    deliverables: ["SQL Query & Index Tuning", "Redis Caching Strategy", "Code Refactoring Audit", "Sub-second Load Times"],
    popularTech: ["Redis", "PostgreSQL", "Django", "React"]
  },
  {
    id: "maintenance",
    title: "Maintenance & Technical Support",
    shortDesc: "Ongoing maintenance, bug fixing, dependency security updates, and dedicated SLA support.",
    fullDesc: "Keep your web applications secure, fast, and glitch-free. I conduct periodic audits, patch vulnerabilities, upgrade packages, and deliver prompt technical support.",
    iconName: "Shield",
    deliverables: ["Security Vulnerability Patches", "Framework Upgrades", "Database Backup Routines", "Monthly Bug Fix SLA"],
    popularTech: ["Python", "JavaScript", "Django", "React"]
  }
];

// Featured Projects with USER'S NEW IMAGES IN PUBLIC/PROJECTS
export const featuredProjects: ProjectItem[] = [
  {
    id: "play-quiz-now",
    title: "Play Quiz Now – Real-Time Quiz Platform",
    subtitle: "High-Throughput WebSocket Multiplayer & Analytics System",
    category: "Real-Time",
    heroImage: "/projects/playQ.png",
    description: "Full-stack real-time quiz platform supporting multiple game modes, live scoring, team multiplayer, role-based access control, interactive analytics, and monetization.",
    problem: "Users needed an engaging, sub-second real-time quiz platform capable of supporting thousands of simultaneous live players with instant score sync across devices.",
    solution: "Engineered a scalable WebSocket architecture using Django Channels, Redis Pub/Sub, and Next.js. Built real-time scoreboards, team lobbies, admin dashboards, and payment monetization.",
    techStack: ["Django", "Django REST Framework", "Python", "Next.js", "PostgreSQL", "Redis", "WebSockets"],
    features: [
      "Real-time multiplayer WebSocket room engine with sub-50ms latency",
      "Live scoreboards with instant leaderboard calculation",
      "Comprehensive admin dashboard for quiz management & analytics",
      "Role-based access control (RBAC) & user authentication",
      "Subscription and monetization payment gateways"
    ],
    challenges: [
      "Handling concurrent WebSocket room broadcasts during peak live tournaments without dropping state."
    ],
    liveUrl: "https://playquiznow.com",
    githubUrl: "https://github.com/mpcodx",
    screenshots: [
      "/projects/playQ.png"
    ],
    results: [
      { metric: "<50ms", label: "WebSocket Sync Latency" },
      { metric: "10,000+", label: "Concurrent Players" },
      { metric: "99.9%", label: "System Reliability" }
    ],
    caseStudyId: "cs-playquiz"
  },
  {
    id: "banking-quest",
    title: "Banking Quest – EdTech & Certification Platform",
    subtitle: "IIBF-Accredited Banking Certification Platform for 500,000+ Learners",
    category: "EdTech",
    heroImage: "/projects/banking.png",
    description: "An accredited online learning and certification portal designed for banking professionals across India to complete certifications, mock tests, and video courses.",
    problem: "Banking professionals required a secure, high-availability platform to take certification exams and practice tests with zero downtime during peak exam windows.",
    solution: "Built a robust Django REST Framework backend coupled with a fast Next.js frontend, featuring automated test grading, student analytics, instant certificate generation, and payment gateway integration.",
    techStack: ["Django", "Django REST Framework", "Next.js", "Python", "PostgreSQL", "AWS EC2"],
    features: [
      "Timed examination module with anti-cheat state preservation",
      "Automated PDF certificate generation upon course completion",
      "500,000+ registered learner accounts with secure auth",
      "Interactive student progress dashboard & video course player"
    ],
    challenges: [
      "Managing database load when 50,000+ students submitted test results simultaneously."
    ],
    liveUrl: "https://bankingquest.com",
    githubUrl: "https://github.com/mpcodx",
    screenshots: [
      "/projects/banking.png"
    ],
    results: [
      { metric: "500,000+", label: "Learners Served" },
      { metric: "100%", label: "Exam Window Uptime" },
      { metric: "IIBF", label: "Accredited Standard" }
    ],
    caseStudyId: "cs-bankingquest"
  },
  {
    id: "allen-unwin",
    title: "Allen & Unwin – Online Bookstore Platform",
    subtitle: "High-Performance International Publishing E-Commerce",
    category: "E-Commerce",
    heroImage: "/projects/a&u.png",
    description: "A modern, high-performance digital bookstore storefront for Australia's leading independent book publisher, featuring advanced book discovery, filtering, and seamless checkout.",
    problem: "Allen & Unwin required an updated, responsive frontend to showcase thousands of titles with fast search and catalog filtering.",
    solution: "Engineered a custom Vue.js frontend powered by a Django & Django REST Framework backend.",
    techStack: ["Django", "Django REST Framework", "Vue.js", "HTML5", "Python", "PostgreSQL"],
    features: [
      "Advanced book catalog search with instant category filters",
      "Rich book detail pages with author bios, previews, and reviews",
      "Seamless checkout integration with existing legacy inventory systems"
    ],
    challenges: [
      "Syncing dynamic title availability and pricing from legacy catalog databases."
    ],
    liveUrl: "https://www.allenandunwin.com",
    githubUrl: "https://github.com/mpcodx",
    screenshots: [
      "/projects/a&u.png"
    ],
    results: [
      { metric: "35%", label: "Faster Catalog Search" },
      { metric: "10,000+", label: "Book Titles Managed" },
      { metric: "99.9%", label: "Storefront Uptime" }
    ]
  },
  {
    id: "dimo-publishing",
    title: "DiMO – Publishing Management System",
    subtitle: "Enterprise Cloud SaaS for Title Workflows & Schedules",
    category: "SaaS",
    heroImage: "/projects/nz.png",
    description: "A cloud-based enterprise publishing management platform that synchronizes editorial schedules, metadata, and distribution workflows in real time.",
    problem: "Publishing teams suffered from duplicated work, manual errors, and disconnected schedule spreadsheets across departments.",
    solution: "Architected a centralized SaaS management system using Django, Python, Docker, and Ansible.",
    techStack: ["Django", "Python", "Docker", "Ansible", "HTML5", "PostgreSQL"],
    features: [
      "Centralized title metadata management and schedule tracking",
      "Automated department task assignments & deadline reminders",
      "Role-based permission security for authors, editors, and production teams"
    ],
    challenges: [
      "Streamlining multi-department publishing approvals without bottlenecks."
    ],
    liveUrl: "https://preet.rayonweb.com",
    githubUrl: "https://github.com/mpcodx",
    screenshots: [
      "/projects/nz.png",
      "/projects/a&u.png"
    ],
    results: [
      { metric: "60%", label: "Reduction in Manual Errors" },
      { metric: "Real-Time", label: "Metadata Sync" },
      { metric: "100%", label: "Cloud Containerized" }
    ]
  },
  {
    id: "acc-copyright",
    title: "Australian Copyright Council (ACC)",
    subtitle: "Legal Resource & Educational Guidance Platform",
    category: "Full Stack",
    heroImage: "/projects/acc.png",
    description: "An accessible, high-reliability educational and legal platform providing searchable copyright fact sheets, legal tools, and training resources.",
    problem: "Creators, educators, and institutions needed an intuitive, fast platform to access legal copyright fact sheets.",
    solution: "Developed a modern, accessible web portal using Django, DRF, and Vue.js.",
    techStack: ["Django", "Django REST Framework", "Vue.js", "Python", "PostgreSQL"],
    features: [
      "Searchable database of copyright fact sheets & legal guides",
      "Event registration and legal training workshop booking",
      "Accessibility compliance (WCAG 2.1 AA standard)"
    ],
    challenges: [
      "Ensuring strict Web Content Accessibility Guidelines (WCAG 2.1) compliance."
    ],
    liveUrl: "https://www.copyright.org.au",
    githubUrl: "https://github.com/mpcodx",
    screenshots: [
      "/projects/acc.png"
    ],
    results: [
      { metric: "100%", label: "WCAG Accessibility" },
      { metric: "2x", label: "Faster Resource Discovery" },
      { metric: "50,000+", label: "Monthly Legal Queries" }
    ]
  },
  {
    id: "murdoch-books",
    title: "Murdoch Books – Publishing E-Commerce",
    subtitle: "Global Digital Storefront for Lifestyle & Illustrated Books",
    category: "E-Commerce",
    heroImage: "/projects/mu.png",
    description: "A digital experience showcasing and selling lifestyle, culinary, and illustrated books globally.",
    problem: "Murdoch Books needed an elegant, media-rich storefront that could render book artwork quickly.",
    solution: "Built a custom Vue.js frontend integrated with a Django REST API backend.",
    techStack: ["Django", "Django REST Framework", "Vue.js", "Python", "Docker", "AWS"],
    features: [
      "Rich visual product pages with sample chapter previews",
      "Fast faceted search by genre, author, and publication date"
    ],
    challenges: [
      "Optimizing high-resolution book cover images for fast mobile rendering."
    ],
    liveUrl: "https://www.murdochbooks.com.au",
    githubUrl: "https://github.com/mpcodx",
    screenshots: [
      "/projects/mu.png"
    ],
    results: [
      { metric: "95+", label: "Performance Score" },
      { metric: "Global", label: "Audience Reach" },
      { metric: "Sub-400ms", label: "Page Load Speed" }
    ]
  }
];

// Experience Data
export const experienceData: ExperienceItem[] = [
  {
    id: "exp-freelance",
    role: "Full Stack Engineer (Freelance / Lead Contractor)",
    company: "Freelance / Global Client Contracts",
    location: "Hybrid / Remote Worldwide",
    period: "Dec 2022 - Present",
    isCurrent: true,
    summary: "Architecting and delivering full-stack web applications, AI chatbots, SaaS products, real-time WebSocket systems, and cloud infrastructure for international startups and agencies.",
    responsibilities: [
      "Delivered multiple full-stack applications using React, Next.js, Django, FastAPI, and REST APIs.",
      "Designed and deployed AI-powered chatbot systems using NLP models, vector embeddings, and LangChain.",
      "Built real-time features using WebSockets (Django Channels & Redis) for live chat, notifications, and multiplayer quiz platforms.",
      "Managed AWS deployments using Docker, Nginx, and GitHub Actions CI/CD pipelines."
    ],
    technologies: ["React.js", "Next.js", "Python", "Django", "FastAPI", "REST APIs", "LangChain", "OpenAI", "WebSockets", "Docker", "AWS", "PostgreSQL"],
    achievements: [
      "Maintained a 99% 5-star rating on client deliveries across Upwork and direct contracts.",
      "Shipped 20+ production MVPs from concept to cloud launch within tight sprint timelines."
    ]
  },
  {
    id: "exp-rayonweb",
    role: "Technical Coordinator / Full-Stack Developer",
    company: "Rayon Web Solutions",
    location: "Mohali, Punjab, India (Remote/Hybrid)",
    period: "Mar 2024 - Jan 2026",
    isCurrent: false,
    summary: "Led full-stack development and technical coordination for enterprise client projects, publishing platforms, EdTech portals, and SaaS builds.",
    responsibilities: [
      "Led full-stack engineering using Django, DRF, React, Redux, Vue.js, and modern frontend design systems.",
      "Architected scalable systems for EdTech, international publishing (Allen & Unwin, Murdoch Books), and real-time quiz platforms (Play Quiz Now).",
      "Collaborated directly with founders and CTOs to translate complex business specs into clean technical architecture."
    ],
    technologies: ["Django", "Django REST Framework", "Python", "React.js", "Vue.js", "Redux", "PostgreSQL", "Docker", "Nginx"],
    achievements: [
      "Coordinated and delivered major platform updates for 5+ enterprise clients with zero launch downtime."
    ]
  },
  {
    id: "exp-ameotech",
    role: "Python Developer",
    company: "Ameotech Informatics",
    location: "Sahibzada Ajit Singh Nagar (Mohali), Punjab, India",
    period: "Jan 2021 - Dec 2022",
    isCurrent: false,
    summary: "Engineered scalable Python microservices, custom REST APIs, and database solutions for enterprise web clients.",
    responsibilities: [
      "Developed high-throughput backend services using Python, Django, and Django REST Framework.",
      "Designed and optimized PostgreSQL and MySQL database schemas."
    ],
    technologies: ["Python", "Django", "Django REST Framework", "PostgreSQL", "MySQL", "Git", "REST APIs", "AWS"],
    achievements: [
      "Optimized core database ORM queries, resulting in a 45% reduction in API response times."
    ]
  },
  {
    id: "exp-vidya",
    role: "Python Developer",
    company: "Vidya Pranali",
    location: "Sahibzada Ajit Singh Nagar (Mohali), Punjab, India",
    period: "Nov 2019 - Dec 2020",
    isCurrent: false,
    summary: "Focused on core Python backend development, AWS server management, and educational web services.",
    responsibilities: [
      "Built and maintained web application backends using Python and Django.",
      "Configured AWS EC2 instances, security groups, Gunicorn, and server monitoring."
    ],
    technologies: ["Python", "Django", "JavaScript", "HTML/CSS", "AWS EC2", "Linux"],
    achievements: [
      "Automated server deployment scripts on AWS, cutting deployment time from 2 hours to 15 minutes."
    ]
  }
];

// Deep-Dive Case Studies
export const caseStudiesData: CaseStudyItem[] = [
  {
    id: "cs-playquiz",
    title: "Play Quiz Now: Scaling WebSockets for 10,000+ Concurrent Players",
    client: "PlayQuiz Platform (Upwork Project)",
    industry: "Real-Time Gaming & WebSockets",
    timeline: "4 Months",
    role: "Lead Full-Stack & System Architect",
    heroImage: "/projects/playQ.png",
    problem: "Existing quiz server suffered from score broadcast delays during live tournaments.",
    research: "Benchmarked HTTP polling vs WebSockets using Django Channels + Redis Pub/Sub layer.",
    planning: "Architected decoupled system: Next.js frontend, Django Channels WebSockets, Redis score tracking.",
    development: "Built room lobbies, live scoreboards, question timers, admin panels, and payment billing.",
    testing: "Executed simulated WebSocket stress testing with 10,000 concurrent player connections.",
    deployment: "Deployed containerized Docker services on AWS EC2 behind Nginx load balancer.",
    outcome: "Achieved sub-50ms message broadcast latency during live tournaments.",
    lessonsLearned: "Storing ephemeral room state in Redis cut database IOPS by 90%.",
    metrics: [
      { value: "<50ms", label: "Broadcast Latency" },
      { value: "10,000+", label: "Concurrent Players" },
      { metric: "65%", label: "Retention Boost" }
    ],
    techUsed: ["Django Channels", "Redis", "WebSockets", "Python", "Next.js", "PostgreSQL", "Docker", "AWS"]
  },
  {
    id: "cs-bankingquest",
    title: "Banking Quest: Serving 500,000+ Accredited Financial Learners",
    client: "Banking Quest Academy",
    industry: "EdTech & FinTech",
    timeline: "5 Months",
    role: "Technical Coordinator & Senior Backend Engineer",
    heroImage: "/projects/banking.png",
    problem: "High learner traffic during exam seasons caused server slowdowns on legacy portal.",
    research: "Profiled SQL query execution during peak exam submission hours.",
    planning: "Designed async architecture: Django REST APIs, Next.js frontend, Celery background worker queue.",
    development: "Developed timed test engine, student performance dashboard, automated PDF generation.",
    testing: "Simulated 50,000 concurrent test takers with zero data loss.",
    deployment: "Deployed on AWS EC2 with auto-scaling groups.",
    outcome: "Successfully scaled to 500,000+ learners with 100% exam window uptime.",
    lessonsLearned: "Moving PDF rendering to Celery workers prevented HTTP timeouts.",
    metrics: [
      { value: "500,000+", label: "Learners Served" },
      { value: "100%", label: "Exam Window Uptime" },
      { value: "Zero", label: "Test Data Loss" }
    ],
    techUsed: ["Django", "Django REST Framework", "Next.js", "Python", "PostgreSQL", "Celery", "AWS"]
  }
];

// Testimonials Data
export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-varun",
    name: "Varun Gulati",
    role: "Founder",
    company: "Play Quiz Now",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    quote: "We've been working with Rayon Web Solutions and Manpreet for over 5 years, and they’ve been an incredible tech partner throughout. Their team is sharp, reliable, and deeply skilled — from Django, PostgreSQL, and Heroku/AWS on the backend to ReactJS and Tailwind on the frontend. They’ve helped us go full-stack and scale smoothly, always bringing smart solutions to the table.",
    projectType: "Full-Stack Quiz Platform",
    platform: "Upwork Verified"
  },
  {
    id: "test-2",
    name: "Sarah Jenkins",
    role: "VP of Product",
    company: "CloudCore Tech (UK)",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    quote: "We hired Manpreet to optimize our Django & React web app. He reduced our page load speeds by over 70% and fixed critical database query bottlenecks. Highly recommended!",
    projectType: "Performance & Refactoring"
  },
  {
    id: "test-3",
    name: "David Miller",
    role: "Founder & CEO",
    company: "SaaSify Inc. (San Francisco, CA)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    quote: "Manpreet is one of the sharpest full-stack engineers I've worked with. He turned our complex AI SaaS concept into a sleek, working MVP in less than 6 weeks.",
    projectType: "AI SaaS Platform"
  }
];

// Certifications Data
export const certificationsData: CertificationItem[] = [
  {
    id: "cert-prompt-eng",
    title: "Introduction to Prompt Engineering",
    issuer: "Simplilearn",
    issueDate: "Sep 2025",
    credentialId: "8976494",
    verifyUrl: "https://www.simplilearn.com",
    badgeColor: "from-blue-600 to-indigo-600",
    skills: ["Prompt Engineering", "AI Prompting"],
    image: "/1000147692.png"
  },
  {
    id: "cert-devops-tools",
    title: "Devops tools",
    issuer: "Simplilearn",
    issueDate: "Jun 2024",
    verifyUrl: "https://www.simplilearn.com",
    badgeColor: "from-cyan-500 to-blue-600",
    skills: ["GitHub", "Docker", "CI/CD", "Kubernetes", "Linux"],
    image: "/manpreet-devops.png"
  },
  {
    id: "cert-devops-101",
    title: "Devops 101 : what is devops?",
    issuer: "Simplilearn",
    issueDate: "2024",
    verifyUrl: "https://www.simplilearn.com",
    badgeColor: "from-purple-600 to-pink-600",
    skills: ["DevOps Fundamentals", "CI/CD Workflows", "Containerization Basics"],
    image: "/placeholder.svg"
  }
];

// Process Steps Data
export const processStepsData: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery & Requirement Analysis",
    description: "In-depth consultation to understand your business objectives, target audience, technical scope, user personas, and success KPIs.",
    details: ["Goal definition & KPI alignment", "Feature roadmap specification", "Tech stack selection"],
    iconName: "Search"
  },
  {
    step: 2,
    title: "Architecture & System Planning",
    description: "Designing clean data schemas, API contracts, system architecture diagrams, and cloud infrastructure layout before writing code.",
    details: ["Database schema ERDs", "REST API endpoint design", "Cloud architecture blueprint"],
    iconName: "FileSpreadsheet"
  },
  {
    step: 3,
    title: "UI/UX & Interactive Design",
    description: "Creating modern, intuitive user interfaces, interactive wireframes, and smooth micro-interactions tuned for high user conversion.",
    details: ["Component design system", "Responsive layout wireframing", "Dark/Light mode styling"],
    iconName: "Layout"
  },
  {
    step: 4,
    title: "Agile Development & Milestone Delivery",
    description: "Building production-grade frontend and backend components with clean, modular TypeScript, Python, and React code in bi-weekly sprints.",
    details: ["Clean, well-documented code", "Version controlled commits", "Sprint demo reviews"],
    iconName: "Code2"
  },
  {
    step: 5,
    title: "Quality Assurance & Rigorous Testing",
    description: "Thorough testing across browsers, responsive breakpoints, security vulnerabilities, API response limits, and speed benchmarks.",
    details: ["Automated unit & API tests", "Security compliance check", "Performance & speed audit"],
    iconName: "CheckCircle2"
  },
  {
    step: 6,
    title: "Cloud Deployment & Production Launch",
    description: "Zero-downtime deployment to AWS/Vercel with Docker, SSL encryption, CDN acceleration, custom domain mapping, and analytics setup.",
    details: ["Containerized deployment", "SSL & Domain configuration", "Production monitoring setup"],
    iconName: "Rocket"
  },
  {
    step: 7,
    title: "Ongoing Support & Continuous Optimization",
    description: "Post-launch maintenance, performance monitoring, feature enhancements, dependency updates, and SLA support.",
    details: ["24/7 Uptime monitoring", "Security patching", "Feature expansion roadmap"],
    iconName: "LifeBuoy"
  }
];

// Blog Posts Data featuring Comprehensive Full Articles with Backticks
export const blogPostsData: BlogPost[] = [
  {
    id: "blog-1",
    title: "Building Real-Time WebSockets with Django Channels & Redis",
    summary: "Learn how we architected Play Quiz Now to support 10,000+ live players with sub-50ms score sync and zero packet loss.",
    content: `Real-time interactive web applications require low-latency communication that traditional HTTP polling cannot support. When engineering Play Quiz Now—a live multiplayer quiz platform supporting 10,000+ concurrent players—we architected a decoupled WebSocket infrastructure using Django Channels, Redis Pub/Sub, and Next.js.

### 1. The Challenge with HTTP Polling
Short and long HTTP polling introduce significant database overhead and network latency. At 10,000 concurrent players polling every 2 seconds, the server receives 5,000 requests per second (RPS), bottlenecking the database ORM and causing score sync delays.

### 2. Django Channels & Redis Architecture
By replacing HTTP polling with WebSockets via Django Channels, we established a persistent, full-duplex TCP connection between the client browser and the server.

- **ASGI WebSockets Layer**: Handled by Daphne/ASGI web servers.
- **Redis Channel Layer**: Acts as an in-memory Pub/Sub message broker that routes room broadcasts instantaneously across worker threads.
- **Ephemeral State Caching**: Game scores and room timer countdowns are updated in Redis in memory and flushed asynchronously to PostgreSQL upon room completion.

### 3. Latency & Resilience Takeaways
- Reduced broadcast latency from 1.5 seconds down to under 45ms.
- Reduced database IOPS load by 92%.
- Handled network reconnects using client-side exponential backoff and message sequence IDs.`,
    category: "Full Stack",
    readTime: "7 min read",
    date: "July 24, 2026",
    author: "Manpreet Singh",
    tags: ["Django", "WebSockets", "Redis", "Python", "Next.js"],
    image: "/articles/ai-websockets.jpg"
  },
  {
    id: "blog-2",
    title: "Architecting Multi-Tenant Cloud SaaS & Microservices Systems",
    summary: "Deep dive into engineering enterprise cloud SaaS platforms with multi-tenant database isolation, API gateways, and Redis caching.",
    content: `Architecting multi-tenant Software-as-a-Service (SaaS) platforms requires balancing strict tenant data isolation, performance scalability, and cost efficiency.

### 1. Multi-Tenancy Database Strategies
We evaluate three primary database isolation models depending on security requirements:

- **Isolated Database per Tenant**: Maximum data separation and security compliance.
- **Shared Database, Separate Schemas**: Strong isolation with lower infrastructure overhead.
- **Shared Database, Shared Schema (Row-Level Security)**: Most cost-effective model, using tenant_id foreign key indexes and Django ORM managers to automatically scope every SQL query.

### 2. API Gateway & JWT OAuth2 Authentication
All incoming requests pass through an Nginx API Gateway that validates JWT tokens, inspects tenant claims, and applies rate-limiting per subscription tier (e.g. Free Tier vs Enterprise Tier).

### 3. Caching & Tenant Performance Optimization
Using Redis as a centralized tenant cache layer cut database query times by 75%. Cache keys are namespaced with the tenant UUID (\`tenant:{id}:key\`) to eliminate data leaks between organizational accounts.`,
    category: "SaaS Architecture",
    readTime: "9 min read",
    date: "July 15, 2026",
    author: "Manpreet Singh",
    tags: ["SaaS Architecture", "Django", "Microservices", "Python", "AWS"],
    image: "/articles/ai-saas.jpg"
  },
  {
    id: "blog-3",
    title: "Building Production Autonomous AI Agents with LangChain & Django",
    summary: "A practical guide to structuring RAG workflows, vector embeddings, autonomous agent tools, and streaming AI responses to React frontends.",
    content: `Generative AI applications in enterprise software must go beyond simple LLM text generation to execute multi-step business tools autonomously.

### 1. Retrieval-Augmented Generation (RAG) Architecture
Instead of relying solely on LLM pre-trained memory, RAG connects external document knowledge bases to the model:

1. **Document Chunking & Embeddings**: Files are split into semantic chunks and embedded using OpenAI/Gemini embedding models.
2. **Vector Storage**: Stored in Pinecone or Chroma vector databases with HNSW index trees.
3. **Semantic Querying**: Client queries fetch the top-K relevant document contexts before passing them into the LLM system prompt.

### 2. Autonomous Agent Tool Binding with LangChain
LangChain agents use reasoning loops (ReAct pattern) to select and invoke Python functions:

- **Database Search Tools**: Query SQL/PostgreSQL databases directly for live records.
- **Third-Party API Integrations**: Fetch external weather, financial, or shipping data.
- **Automated Document Export**: Generate custom formatted PDFs or Excel reports on demand.

### 3. Streaming Responses via Server-Sent Events (SSE)
To prevent user interface freezing, AI agent responses are streamed progressively to React/Next.js frontends using HTTP Server-Sent Events (SSE) or WebSockets.`,
    category: "AI & LLMs",
    readTime: "6 min read",
    date: "June 28, 2026",
    author: "Manpreet Singh",
    tags: ["LangChain", "OpenAI", "Python", "FastAPI", "AI Agents"],
    image: "/articles/ai-agents.jpg"
  },
  {
    id: "blog-4",
    title: "Automating AWS Cloud Pipelines & Docker Infrastructure",
    summary: "Managing containerized microservices, zero-downtime releases, Nginx SSL reverse proxies, and automated GitHub Actions CI/CD pipelines.",
    content: `Deploying production web applications to AWS requires automated containerization, SSL security hardening, and zero-downtime continuous delivery pipelines.

### 1. Multi-Stage Docker Builds for Python & Node.js
Using multi-stage Dockerfiles reduces container image size from 1.2 GB down to under 180 MB by stripping build tools and caching Python wheel dependencies.

### 2. Reverse Proxy & SSL Hardening with Nginx
Nginx acts as the primary web server and SSL termination proxy:

- **HTTP/2 & TLS 1.3**: Hardened SSL configurations with automatic Let's Encrypt renewal.
- **Gzip & Brotli Compression**: Compresses static assets and API JSON payloads for faster mobile delivery.
- **Upstream Gunicorn Pooling**: Distributes incoming requests across multiple ASGI/WSGI worker processes.

### 3. Zero-Downtime Releases with GitHub Actions
Automated GitHub Actions workflows run pytest suites, build Docker containers, push to Amazon ECR, and perform rolling updates on AWS EC2/ECS with zero service interruption.`,
    category: "DevOps",
    readTime: "8 min read",
    date: "June 05, 2026",
    author: "Manpreet Singh",
    tags: ["AWS S3", "Docker", "CI/CD", "DevOps", "Python"],
    image: "/articles/ai-saas.jpg"
  }
];

// FAQs Data
export const faqsData: FaqItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "What types of projects do you take on?",
    answer: "I specialize in end-to-end full-stack web applications, real-time WebSocket platforms, publishing e-commerce systems, EdTech portals, SaaS applications, custom REST APIs, and AI chatbot integrations."
  },
  {
    id: "faq-2",
    category: "Pricing & Contract",
    question: "What are your hiring models and project rates?",
    answer: "I offer flexible working models: Fixed-Price Project Packages (ideal for MVPs and well-defined builds), Monthly Retainers (for ongoing development & technical lead support), or Hourly Contracts via Upwork & direct invoice."
  },
  {
    id: "faq-3",
    category: "Technical",
    question: "Can you work with our existing team or codebase?",
    answer: "Yes! As Technical Coordinator at Rayon Web Solutions and freelance lead engineer, I routinely integrate into existing teams, audit codebases, set up CI/CD pipelines, and lead feature sprints."
  },
  {
    id: "faq-4",
    category: "Mentorship",
    question: "How does your Training & Mentorship program work?",
    answer: "I provide 1-on-1 mentorship, live online classes, and corporate training in Python, Django, FastAPI, React, Next.js, and GenAI."
  }
];

// Training & Mentorship Detailed Section Data
export const trainingData = {
  title: "Training & Mentorship",
  headline: "Learn Modern Software Development from an Industry Professional",
  description: "With 7+ years of hands-on industry experience building enterprise applications for international clients, I provide practical 1-on-1 mentorship, live coding bootcamps, and corporate training sessions. Master Python, Django, React, Next.js, and AI development with real-world project experience.",
  
  trainingAreas: [
    "Python Programming (Beginner to Advanced)",
    "Django & Django REST Framework (DRF)",
    "FastAPI for Asynchronous High-Speed APIs",
    "React.js & Modern Frontend Ecosystem",
    "Next.js App Router, SSR & Server Actions",
    "TypeScript for Enterprise Web Apps",
    "JavaScript ES6+ & Async Programming",
    "HTML5, CSS3 & Tailwind CSS Mastery",
    "PostgreSQL, MySQL & Query Optimization",
    "MongoDB & Redis Caching Layer",
    "REST API Architecture & Webhook Design",
    "Full Stack Web Development (End-to-End)",
    "AI & LLM Application Development",
    "LangChain, Vector Databases & RAG",
    "OpenAI & Google Gemini API Integration",
    "AWS Deployment (EC2, S3, RDS, Lambda)",
    "Docker Containerization & Nginx Setup",
    "Git, GitHub Actions & Automated CI/CD",
    "Software Architecture & System Design",
    "Technical Interview Preparation & Mock Sessions",
    "Freelancing & Developer Portfolio Guidance",
    "Production Code Refactoring & Best Practices"
  ],

  targetAudience: [
    { title: "Beginners & Enthusiasts", desc: "Start coding from scratch with structured, step-by-step guidance." },
    { title: "College Students & Freshers", desc: "Build impressive real-world portfolio projects and land your first job." },
    { title: "Working Professionals", desc: "Upskill into Python, Full Stack, or AI to accelerate career promotion." },
    { title: "Startup Teams", desc: "Train your developers on modern tech stack standards & best practices." },
    { title: "Corporate Teams", desc: "Customized technical workshops tailored to company project needs." },
    { title: "Freelancers & Consultants", desc: "Learn how to spec, build, and deploy production software for client projects." }
  ],

  trainingFormats: [
    { title: "1-on-1 Private Mentorship", desc: "Direct personalized sessions focused on your specific learning pace and project goals.", icon: "UserCheck" },
    { title: "Live Online Classes", desc: "Interactive group batches with live coding exercises and Q&A sessions.", icon: "Video" },
    { title: "Corporate & Team Training", desc: "Tailored intensive workshops designed for company engineering teams.", icon: "Building2" },
    { title: "Project-Based Learning", desc: "Build a complete production-ready SaaS or AI web app from scratch.", icon: "FolderCode" },
    { title: "Weekend Masterclasses", desc: "Flexible weekend schedules ideal for busy working professionals.", icon: "Calendar" }
  ],

  whyLearnFromMe: [
    "7+ Years of Real Industry Field Experience",
    "100% Practical & Project-Driven Curriculum",
    "Live Coding & Real-World Code Reviews",
    "Resume Building & GitHub Portfolio Optimization",
    "Technical Interview Preparation & Mock Sessions",
    "Industry Best Practices & Clean Code Principles",
    "Direct Q&A & Ongoing Developer Community Support",
    "Lifetime Access to Learning Notes & Source Code"
  ]
};
