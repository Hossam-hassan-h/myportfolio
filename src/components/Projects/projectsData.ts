export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string; // Dynamic placeholder/image url
  features: string[];
  liveDemoUrl: string;
  githubUrl: string;
  accentColor: string;
  mockupType: 'dashboard' | 'ecommerce' | 'saas' | 'social';
}

export const projectsData: ProjectItem[] = [
  {
    id: 'project-tracker',
    title: 'Project Tracker',
    subtitle: 'Enterprise Workspace Management',
    description: 'A large-scale task management platform built for Imam Abdulrahman Bin Faisal University in Saudi Arabia, offering high-throughput performance tracking and complete role-based operations control.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80',
    features: [
      'Workspaces & complete team structures',
      'Granular role and permission systems',
      'Task assignments & live status workflows',
      'Enterprise dashboard analytics & reports',
      'Advanced document & file management system'
    ],
    liveDemoUrl: 'https://github.com',
    githubUrl: 'https://github.com/Hossam-hassan-h',
    accentColor: '#00f0ff',
    mockupType: 'saas'
  },
  {
    id: 'smart-ecommerce',
    title: 'Smart E-Commerce Platform',
    subtitle: 'Next-Gen Smart Retail Solution',
    description: 'A modern e-commerce platform for selling fruits and vegetables with a highly integrated smart customer experience, custom client-facing rewards systems, and detailed management logs.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    features: [
      'Smart customer rewards & loyalty points tracker',
      'Detailed admin dashboard for real-time inventory control',
      'Optimized shopping cart with persistent caching',
      'Category management & modular product cataloging',
      'Secure checkout flows & order histories'
    ],
    liveDemoUrl: 'https://github.com',
    githubUrl: 'https://github.com/Hossam-hassan-h',
    accentColor: '#a855f7',
    mockupType: 'ecommerce'
  },
  {
    id: 'educational-platform',
    title: 'Educational Platform',
    subtitle: 'Instructor-Led Learning System (LMS)',
    description: 'A complete, full-scale learning management system engineered for instructors to deliver interactive education pipelines, host virtual video materials, and track student outcomes.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    features: [
      'Course building workflow & video lesson host',
      'Comprehensive content organization categories',
      'Modular student testing, quizzes, and exams',
      'Student performance evaluations & grade logs',
      'Instructor control panel & admin access control'
    ],
    liveDemoUrl: 'https://github.com',
    githubUrl: 'https://github.com/Hossam-hassan-h',
    accentColor: '#38bdf8',
    mockupType: 'social'
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
    liveDemoUrl: 'https://github.com',
    githubUrl: 'https://github.com/Hossam-hassan-h',
    accentColor: '#10b981',
    mockupType: 'dashboard'
  }
];
