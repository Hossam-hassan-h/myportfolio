export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string; // Dynamic placeholder/image url
  features: string[];
  liveDemoUrl?: string;
  isPrivate?: boolean;
  githubUrl: string;
  accentColor: string;
  mockupType: 'dashboard' | 'ecommerce' | 'saas' | 'social';
}

export const projectsData: ProjectItem[] = [
  {
    id: 'meshmo-parmeg',
    title: 'Meshmo Parmeg',
    subtitle: 'Instructor-Led Learning System (LMS)',
    description: 'A complete, full-scale learning management system engineered for instructors to deliver interactive education pipelines, host virtual video materials, and track student outcomes.',
    image: '/meshmoparmeg.png',
    features: [
      'Course building workflow & video lesson host',
      'Comprehensive content organization categories',
      'Modular student testing, quizzes, and exams',
      'Student performance evaluations & grade logs',
      'Instructor control panel & admin access control'
    ],
    liveDemoUrl: 'https://meshmoparmeg-front.vercel.app/',
    githubUrl: 'https://github.com/Hossam-hassan-h/meshmoparmeg-front',
    accentColor: '#38bdf8',
    mockupType: 'social'
  },
  {
    id: 'sanda',
    title: 'Sanda',
    subtitle: 'Flexible Work Platform',
    description: 'A flexible work platform that connects employers with flexible workers based on available hours and days.',
    image: '/sanda.png',
    features: [
      'Finding suitable workers',
      'Managing work requests',
      'Organizing shifts',
      'Tracking the process',
      'Ensuring trust and protection for both employers and workers'
    ],
    liveDemoUrl: 'https://sanda-ten.vercel.app/',
    githubUrl: 'https://github.com/Hossam-hassan-h',
    accentColor: '#00ED64',
    mockupType: 'saas'
  },
  {
    id: 'sooq-kasem',
    title: 'Sooq Kasem',
    subtitle: 'Smart E-Commerce Platform',
    description: 'A modern e-commerce platform for selling fruits and vegetables with a highly integrated smart customer experience, custom client-facing rewards systems, and detailed management logs.',
    image: '/sooqkasem-ecommerce.png',
    features: [
      'Smart customer rewards & loyalty points tracker',
      'Detailed admin dashboard for real-time inventory control',
      'Optimized shopping cart with persistent caching',
      'Category management & modular product cataloging',
      'Secure checkout flows & order histories'
    ],
    liveDemoUrl: 'https://sooqkasem.com',
    githubUrl: 'https://github.com/Hossam-hassan-h',
    accentColor: '#a855f7',
    mockupType: 'ecommerce'
  },
  {
    id: 'project-tracker',
    title: 'Project Tracker',
    subtitle: 'Enterprise Workspace Management',
    description: 'A large-scale task management platform built for Imam Abdulrahman Bin Faisal University in Saudi Arabia, offering high-throughput performance tracking and complete role-based operations control.',
    image: '/project-tracker.jpeg',
    features: [
      'Workspaces & complete team structures',
      'Granular role and permission systems',
      'Task assignments & live status workflows',
      'Enterprise dashboard analytics & reports',
      'Advanced document & file management system'
    ],
    isPrivate: true,
    githubUrl: 'https://github.com/Hossam-hassan-h',
    accentColor: '#00f0ff',
    mockupType: 'saas'
  },
  {
    id: 'virtual-clinic',
    title: 'Virtual Clinic System',
    subtitle: 'Multi-Hospital Digital Healthcare',
    description: 'A complete virtual clinic healthcare technology solution connecting four hospitals at Imam Abdulrahman Bin Faisal University to stream direct medical video-consultations and log records securely.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    features: [
      'Online medical video consultations & consultations log',
      'Multi-hospital secure patient medical history records',
      'Secure diagnostic reports & digital radiology file viewer',
      'Automated medical calendar scheduling & appointment flags',
      'HIPAA-inspired encrypted workflow channels'
    ],
    isPrivate: true,
    githubUrl: 'https://github.com/Hossam-hassan-h',
    accentColor: '#10b981',
    mockupType: 'dashboard'
  }
];
