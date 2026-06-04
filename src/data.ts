import { ExperienceItem, ProjectItem, SkillCategory } from './types';

export const PERSONAL_INFO = {
  fullName: 'Phạm Lê Sơn',
  title: 'Junior Backend Developer & AI Engineer',
  phone: '0789.282.470',
  email: 'sonphaman5@gmail.com',
  address: 'Bắc Từ Liêm, Hà Nội',
  github: 'https://github.com/son261103',
  education: {
    school: 'EAST ASIA UNIVERSITY OF TECHNOLOGY (EAUT)',
    major: 'Information Technology',
    period: '2021 – Present',
    status: 'Final-year IT Student',
    courses: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'Database Management',
      'Software Engineering',
      'Computer Networks',
      'OOP with Java'
    ]
  },
  additionalTraining: {
    school: 'Devmaster – Institute of Technology',
    period: '11/2023 – 10/2024',
    courses: ['Java Backend', 'React.js Web Development']
  }
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'redai',
    company: 'Red AI (redai.vn)',
    role: 'Junior Backend Developer – AI Media Platform',
    period: '2025 – Present',
    type: 'Full-time / High-scale Platform',
    link: 'https://www.redai.vn/',
    description: [
      'Architected and built a FastAPI backend for a full-featured AI media generation platform, covering Text-to-Image, Image-to-Video, motion/dance transfer, voice cloning, face swap, lip sync, upscale, and music generation capabilities.',
      'Designed a provider abstraction layer with a centralized model registry, enabling seamless multi-provider orchestration across WaveSpeed, fal.ai, SiliconFlow, Fish Audio, piapi.ai, and OpenRouter.',
      'Implemented robust fallback chains, async retry logic, and per-provider rate-limit handling to ensure high availability when calling external AI APIs.',
      'Built a RAG (Retrieval-Augmented Generation) pipeline to enable context-aware AI responses, integrating vector search and embedding models for efficient knowledge retrieval.',
      'Explored and prototyped GraphRAG, leveraging knowledge graph structures to improve multi-hop reasoning and retrieval accuracy over complex document sets.',
      'Applied prompt engineering techniques to optimize output quality across different generative model providers and media types.',
      'Containerized all services with Docker, maintaining consistent environments across local development and production deployments.'
    ],
    technologies: [
      'Python',
      'FastAPI',
      'Docker',
      'RAG',
      'GraphRAG',
      'LangChain',
      'fal.ai',
      'SiliconFlow',
      'Fish Audio',
      'OpenRouter',
      'Vector Search',
      'Embedding Models'
    ]
  },
  {
    id: 'dtn',
    company: 'DTN E-Commerce Solutions',
    role: 'Intern Java Developer',
    period: '12/2024 – 03/2025',
    type: 'Internship / E-Commerce System',
    description: [
      'Developed and optimized RESTful APIs using Spring Boot 3 and MySQL, handling product catalog, order management, inventory, and user authentication for a high-traffic e-commerce platform.',
      'Implemented role-based access control with Spring Security 6 and JWT token authentication to secure API endpoints.',
      'Integrated React.js frontend components with backend services via REST API, collaborating closely with frontend developers to align on data contracts.',
      'Wrote complex MySQL queries and optimized slow queries using indexing strategies, improving average response time on product listing endpoints.',
      'Debugged and resolved production issues including memory leaks, race conditions, and N+1 query problems to improve overall system reliability.'
    ],
    technologies: [
      'Java',
      'Spring Boot 3',
      'Spring Security 6',
      'MySQL',
      'React.js',
      'Gradle',
      'Postman',
      'GitHub'
    ]
  },
  {
    id: 'vptech',
    company: 'VPTECH VN',
    role: 'Technical Staff',
    period: '11/2022 – 07/2024',
    type: 'Hardware & Systems Support',
    description: [
      'Provided technical support and resolved hardware/software issues for internal teams in a fast-paced, high-volume environment, developing a structured approach to troubleshooting complex problems.',
      'Documented recurring technical issues and created internal knowledge-base entries to reduce repeat incident resolution time.',
      'Coordinated with vendors and senior engineers to escalate and resolve critical infrastructure issues within SLA timelines.',
      'Self-studied Python programming and backend development concepts during this period, building the technical foundation for subsequent software engineering roles.'
    ],
    technologies: [
      'Technical Troubleshooting',
      'Systems Documentation',
      'Python Scripting',
      'Infrastructure Support',
      'Cross-team Communication'
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'sell-clothes',
    title: 'E-Commerce Sell Clothes Store',
    category: 'Full-Stack Web App',
    period: '11/2024 – Present',
    github: 'https://github.com/son261103/api-sell-clothes-v1-.git',
    demoUrl: 'https://github.com/son261103/sell_clothes_auras_v1.git',
    adminUrl: 'https://github.com/son261103/sell-clothes-admin-v1.git',
    tags: ['Spring Boot 3', 'Spring Security 6', 'MySQL', 'React 18', 'Redux Toolkit', 'GitHub Actions'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    description: 'A comprehensive, cloud-oriented clothes marketplace tailored for high performance and smooth modern checkout flows.',
    highlights: [
      'Designed and implemented a complete RESTful API covering product catalog, categories, inventory, cart, order lifecycle, payment integration, and user management.',
      'Secured all API endpoints with JWT-based authentication and fine-grained role-based access control (RBAC) using Spring Security 6.',
      'Built a separate React 18 admin dashboard for managing products, orders, and users, with Redux Toolkit handling global state.',
      'Coded a responsive customer-facing storefront with product browsing, sorting, interactive category filtering, cart drawers, and checkout.',
      'Configured GitHub Actions CI/CD pipeline for automated build, test, and deployment on every pull request.'
    ]
  },
  {
    id: 'object-detection',
    title: 'Real-Time Object Detection System',
    category: 'AI / Computer Vision',
    period: '11/2024 – 12/2024',
    github: 'https://github.com/son261103/computer_vision_v1',
    tags: ['Python', 'YOLO11x', 'OpenCV', 'PyTorch', 'Ultralytics', 'Qt6', 'QML'],
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800',
    description: 'An AI-powered high-FPS custom bounding box rendering pipeline for desktop streams or webcams.',
    highlights: [
      'Built an end-to-end real-time object detection system processing live webcam/video streams at a sustained 20–30 FPS using YOLO11x models via the Ultralytics framework.',
      'Achieved 85%+ detection accuracy across 80+ COCO dataset object categories by fine-tuning inference parameters.',
      'Integrated OpenCV for video capture, frame pre-processing, and bounding box rendering, piped into PyTorch-based inference on GPU/CPU.',
      'Designed and built a desktop GUI using Qt6 Widgets and QML Visualizations, displaying real-time bounding boxes, class labels, and per-object confidence scores.'
    ]
  },
  {
    id: 'rag-engine',
    title: 'Custom GraphRAG & Provider Abstraction',
    category: 'Core AI Backend',
    period: '2025',
    tags: ['FastAPI', 'LangChain', 'GraphRAG', 'Neo4j', 'Embedding Model', 'Vector Search'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
    description: 'An orchestration backend simulating fallback chains, Graph-RAG structures, and highly optimized LLM parsing parameters.',
    highlights: [
      'Prototyped GraphRAG pipelines utilizing knowledge graph structures to resolve complex multi-hop data extraction logic.',
      'Programmed multi-provider adapters that automatically shift loads when external endpoints encounter rate-limits or timeouts.',
      'Developed vector base workflows that ingest massive PDFs and query relevant nodes with extreme accuracy.'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Core AI & LLMs',
    skills: [
      { name: 'RAG Pipeline & vector search', level: 93, info: 'Vector database lookup, chunking architectures, hybrid search' },
      { name: 'GraphRAG', level: 85, info: 'Knowledge graph connections, complex multi-hop extraction reasoning' },
      { name: 'LangChain & Multi-agent', level: 90, info: 'Agent orchestration, conversational histories, customizable tools' },
      { name: 'Computer Vision (YOLO11, OpenCV)', level: 88, info: 'Real-time processing, custom object segmentation, frame pipelines' },
      { name: 'PyTorch / TensorFlow', level: 80, info: 'Model fine-tuning, tensor flow optimizations, inference benchmarks' }
    ]
  },
  {
    title: 'Backend Engineering',
    skills: [
      { name: 'Python (FastAPI, Django, Flask)', level: 95, info: 'Asynchronous routers, dependency injections, highly performant APIs' },
      { name: 'Java (Spring Boot 3)', level: 88, info: 'Enterprise standard MVC, customized filters, hibernate performance tuning' },
      { name: 'Spring Security 6 & JWT Token', level: 92, info: 'Custom security managers, stateless authentications, fine-grained access profiles' },
      { name: 'Node.js & Express', level: 85, info: 'REST design, middleware compositions, custom file system gateways' }
    ]
  },
  {
    title: 'Databases & Infrastructure',
    skills: [
      { name: 'MySQL & PostgreSQL', level: 90, info: 'Sub-queries optimizing, indices building, relational integrity' },
      { name: 'Docker Containerization', level: 87, info: 'Multistage compilations, Docker Compose orchestration layers' },
      { name: 'GitHub Actions & CI/CD', level: 85, info: 'Automatic compile routines, static tests, self-hosted deployment runbooks' },
      { name: 'Rest API design & Postman', level: 94, info: 'Meticulous payload structural contracts, comprehensive endpoints collections' }
    ]
  },
  {
    title: 'Frontend Web Dev',
    skills: [
      { name: 'React 18 / Vite.js', level: 87, info: 'Dynamic viewport optimizations, lazy loading, complex state hierarchies' },
      { name: 'Redux Toolkit', level: 85, info: 'Centralized slices, robust persistent hooks, cross-component communications' },
      { name: 'Tailwind CSS', level: 92, info: 'Fully fluid response layouts, interactive dynamic class setups, gorgeous mesh aesthetics' }
    ]
  }
];
