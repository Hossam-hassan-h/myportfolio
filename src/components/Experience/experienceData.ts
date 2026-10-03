export interface ExperienceItem {
  id: string;
  title: string;
  company?: string;
  period?: string;
  description: string;
  highlights: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: 'freelance-fullstack',
    title: 'Freelance Full Stack Developer',
    company: 'Regional Clients & Institutions',
    period: '2023 — Present',
    description: 'Delivering production-grade web applications and full-stack systems for organizations and businesses across the Middle East.',
    highlights: [
      'Built custom educational platforms & virtual classroom tools',
      'Engineered scalable e-commerce platforms & retail tools',
      'Designed enterprise management software & workflow automation',
    ],
  },
  {
    id: 'enterprise-management',
    title: 'Enterprise Systems Engineer',
    company: 'Enterprise Platforms',
    period: '2023 — 2024',
    description: 'Architected end-to-end management platforms focusing on scalable database architecture, clean code, and granular security controls.',
    highlights: [
      'Multi-role user authentication & RBAC authorization',
      'Real-time analytics dashboards & reporting metrics',
      'Automated data workflows & optimized DB queries',
    ],
  },
  {
    id: 'educational-platforms',
    title: 'LMS Platform Developer',
    company: 'EdTech Solutions',
    period: '2022 — 2023',
    description: 'Developed comprehensive Learning Management Systems (LMS) for instructors and students to streamline online course delivery.',
    highlights: [
      'Interactive course management & video lesson streaming',
      'Automated quizzes, grading systems & student progress tracking',
      'Instructor CMS command dashboards & access control',
    ],
  },
  {
    id: 'smart-ecommerce',
    title: 'E-Commerce Solutions Architect',
    company: 'Retail Systems',
    period: '2022 — 2023',
    description: 'Engineered modern e-commerce systems with dynamic cart management, automated order processing, and customer loyalty engines.',
    highlights: [
      'Dynamic product catalogs & real-time inventory management',
      'Automated order processing & PDF invoice generation',
      'Loyalty reward points & merchant analytics dashboard',
    ],
  },
  {
    id: 'virtual-clinic',
    title: 'Virtual Healthcare System Developer',
    company: 'Imam Abdulrahman Bin Faisal University',
    period: '2021 — 2022',
    description: 'Contributed to a major healthcare tech platform unifying multi-hospital clinic operations into a secure virtual care ecosystem.',
    highlights: [
      'Secure patient directory management & medical records archiving',
      'Real-time doctor-patient video consultation streams',
      'Interactive 3D UI elements & digital healthcare scheduling',
    ],
  },
];
