export const navigationItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Resume', href: '#resume' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const skillGroups = [
  {
    title: 'Frontend & Web UI',
    subtitle: 'Responsive, component-driven and type-safe interfaces',
    skills: [
      { name: 'React', value: 92 },
      { name: 'TypeScript', value: 90 },
      { name: 'Tailwind CSS', value: 94 },
      { name: 'Framer Motion & UX', value: 85 },
    ],
  },
  {
    title: 'Backend & Systems',
    subtitle: 'Server architecture, APIs, and relational databases',
    skills: [
      { name: 'Java & Spring Boot', value: 88 },
      { name: 'PostgreSQL & Database Design', value: 86 },
      { name: 'RESTful API Architecture', value: 88 },
      { name: 'Docker & Containerization', value: 80 },
    ],
  },
  {
    title: 'Data & Engineering Workflow',
    subtitle: 'Data pipeline concepts, system thinking, and shipping',
    skills: [
      { name: 'Data Pipelines & ETL', value: 80 },
      { name: 'SQL & Data Modeling', value: 88 },
      { name: 'System Thinking & Problem Solving', value: 92 },
      { name: 'Git & Deployment', value: 90 },
    ],
  },
]

export const experienceItems = [
  {
    year: '2023 - Present',
    title: 'Computer Science Student',
    company: 'University of Transport Ho Chi Minh City',
    description: 'Studying core software engineering, operating systems, database management systems, and distributed system fundamentals.',
  },
  {
    year: '2024 - Present',
    title: 'Full-Stack Developer & Data Explorer',
    company: 'Academic & independent projects',
    description: 'Developing end-to-end applications using React, TypeScript, Java Spring Boot, PostgreSQL, and Docker with a focus on clean system architecture and data reliability.',
  },
  {
    year: '2023 - 2024',
    title: 'Backend & System Development',
    company: 'Project collaboration',
    description: 'Designed relational schemas, implemented business logic in Spring Boot, and integrated PostgreSQL databases for civic-tech and educational platforms.',
  },
]

export const educationItems = [
  {
    degree: 'Computer Science',
    institution: 'University of Transport Ho Chi Minh City',
    year: '2023 - Present',
    description: 'Focusing on computer systems, software architecture, relational databases, algorithms, and analytical problem-solving.',
  },
  {
    degree: 'Software & Data Engineering Track',
    institution: 'Self-directed & practical systems',
    year: 'Continuous',
    description: 'Building deep foundations across the entire application lifecycle—connecting intuitive frontends with robust backends, and steering toward scalable Data Pipelines & Warehouses.',
  },
]

export const projects = [
  {
    slug: 'flood-rescue',
    category: 'Full Stack',
    label: 'Civic Tech / Full Stack',
    year: '2024',
    title: 'Flood Rescue Coordination & Management',
    description: 'An emergency platform connecting relief supplies, volunteer matching, and real-time crisis dispatching.',
    tech: ['Java', 'Spring Boot', 'React', 'MySQL', 'PostgreSQL'],
    image: '/images/portfolio/product-1.jpg',
    githubUrl: 'https://github.com/longtq2501/Flood-Rescue-Coordination-and-Relief-Management-System',
  },
  {
    slug: 'edu-student-management',
    category: 'Full Stack',
    label: 'Education Platform / Full Stack',
    year: '2024',
    title: 'Edu Student & Course Management',
    description: 'A modular education management system handling student profiles, grading workflows, and classroom modules.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Docker'],
    image: '/images/portfolio/books-1.jpg',
    githubUrl: 'https://github.com/ho4ngTien/Edu',
  },
  {
    slug: 'system-dashboard',
    category: 'Product',
    label: 'Data & System Dashboard',
    year: '2025',
    title: 'System Metrics & Data Dashboard Mockup',
    description: 'A concept for data metrics visualization, process monitoring, and real-time status scanning in one view.',
    tech: ['React', 'TypeScript', 'Data Visualization', 'UI Motion'],
    image: '/images/portfolio/branding-1.jpg',
    githubUrl: 'https://github.com/ho4ngTien',
  },
  {
    slug: 'personal-portfolio',
    category: 'Frontend',
    label: 'Portfolio & System Showcase',
    year: '2026',
    title: 'Personal Portfolio & Engineering Showcase',
    description: 'A responsive developer portfolio highlighting end-to-end full-stack capabilities, system mindset, and data focus.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: '/images/portfolio/app-1.jpg',
    githubUrl: 'https://github.com/ho4ngTien/my-profile',
  },
]

export const services = [
  {
    slug: 'full-stack-web-apps',
    title: 'Full-Stack Web Applications',
    description: 'Complete web solutions bridging intuitive React frontends with resilient Spring Boot backends and normalized PostgreSQL databases.',
  },
  {
    slug: 'backend-api-architecture',
    title: 'Backend & API Architecture',
    description: 'Designing secure, scalable RESTful APIs, relational schema models, and containerized Docker environments.',
  },
  {
    slug: 'data-processing-pipelines',
    title: 'Data Pipelines & Workflows',
    description: 'Designing structured data flows, ETL pipelines, and scalable database schemas geared toward analytics and data warehousing.',
  },
  {
    slug: 'frontend-systems',
    title: 'Modern Frontend Systems',
    description: 'High-performance, type-safe interfaces built with React, TypeScript, Tailwind CSS, and polished modern animations.',
  },
]

export const collaborationOptions = [
  {
    name: 'Discovery & System Design',
    detail: 'Define requirements, design the data model, and outline clean frontend and backend architecture.',
  },
  {
    name: 'Full-Stack Implementation',
    detail: 'Develop resilient APIs, build type-safe user interfaces, and establish database migrations.',
  },
  {
    name: 'Testing & Containerized Deployment',
    detail: 'Containerize with Docker, ensure responsive behavior across devices, and prepare production deployment.',
  },
]

export const faqs = [
  {
    question: 'What is your core technical background?',
    answer: 'I have strong competencies across Full-Stack development: React, TypeScript, and Tailwind on the frontend, combined with Java, Spring Boot, PostgreSQL, and Docker on the backend.',
  },
  {
    question: 'Why are you pursuing Data Engineering?',
    answer: 'I have an innate passion for system architecture and large-scale data flow. Leveraging my software engineering foundation, I aim to specialize in scalable data pipelines, ETL workflows, and modern Data Warehousing.',
  },
  {
    question: 'Do you build entire systems or just frontend?',
    answer: 'From the start of university, I have focused on whole-system architecture—including database design, backend services, API communication, and frontend interfaces.',
  },
  {
    question: 'How do you approach code quality and collaboration?',
    answer: 'I value system thinking, modular component architecture, Git branching workflows, clear API contracts, and containerization with Docker to ensure reproducible environments.',
  },
]

export const testimonials = [
  {
    name: 'Sophia Martinez',
    role: 'Operations Director',
    company: 'TechVision Corp',
    quote: 'The resulting system was robust, easy to navigate, and demonstrated deep architectural care across both frontend and backend.',
    image: '/images/testimonials/testimonials-1.jpg',
  },
  {
    name: 'Michael Anderson',
    role: 'Project Manager',
    company: 'InnovateTech Ltd',
    quote: 'Hoàng Tiến showed strong system thinking, delivered well-organized services, and quickly addressed complex requirements.',
    image: '/images/testimonials/testimonials-2.jpg',
  },
  {
    name: 'Jennifer Wilson',
    role: 'Digital Strategy Lead',
    company: 'FutureScope Inc',
    quote: 'Clean architectural vision, thoughtful UI execution, and a forward-looking mindset towards data scalability.',
    image: '/images/testimonials/testimonials-3.jpg',
  },
]

export const contactEmail = 'maichilanoob@gmail.com'
