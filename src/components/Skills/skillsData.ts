import type { IconType } from 'react-icons';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiGreensock,
  SiFramer,
  SiThreedotjs,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiVite,
  SiRedux,
  SiHtml5,
  SiCss,
} from 'react-icons/si';

export interface SkillMilestone {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
  color: string;
  icon: IconType;
}

export const skillsMilestones: SkillMilestone[] = [
  // Frontend
  { name: 'React', category: 'Frontend', color: '#61DAFB', icon: SiReact },
  { name: 'Next.js', category: 'Frontend', color: '#000000', icon: SiNextdotjs },
  { name: 'TypeScript', category: 'Frontend', color: '#3178C6', icon: SiTypescript },
  { name: 'JavaScript', category: 'Frontend', color: '#F7DF1E', icon: SiJavascript },
  { name: 'Tailwind CSS', category: 'Frontend', color: '#06B6D4', icon: SiTailwindcss },
  { name: 'HTML5', category: 'Frontend', color: '#E34F26', icon: SiHtml5 },
  { name: 'CSS3', category: 'Frontend', color: '#1572B6', icon: SiCss },
  { name: 'Redux', category: 'Frontend', color: '#764ABC', icon: SiRedux },
  { name: 'Bootstrap', category: 'Frontend', color: '#7952B3', icon: SiBootstrap },
  { name: 'GSAP', category: 'Frontend', color: '#88CE02', icon: SiGreensock },
  { name: 'Framer Motion', category: 'Frontend', color: '#0055FF', icon: SiFramer },
  { name: 'Three.js', category: 'Frontend', color: '#000000', icon: SiThreedotjs },
  
  // Backend
  { name: 'Node.js', category: 'Backend', color: '#5FA04E', icon: SiNodedotjs },
  { name: 'Express.js', category: 'Backend', color: '#000000', icon: SiExpress },
  { name: 'NestJS', category: 'Backend', color: '#E0234E', icon: SiNestjs },
  
  // Database
  { name: 'MongoDB', category: 'Database', color: '#47A248', icon: SiMongodb },
  
  // Tools
  { name: 'Git', category: 'Tools', color: '#F05032', icon: SiGit },
  { name: 'GitHub', category: 'Tools', color: '#181717', icon: SiGithub },
  { name: 'Docker', category: 'Tools', color: '#2496ED', icon: SiDocker },
  { name: 'Postman', category: 'Tools', color: '#FF6C37', icon: SiPostman },
  { name: 'Vite', category: 'Tools', color: '#646CFF', icon: SiVite },
];

