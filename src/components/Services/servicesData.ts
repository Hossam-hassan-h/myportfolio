export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  accent: string;
  features: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'fullstack',
    title: 'Full Stack Development',
    description: 'Building complete modern web applications from frontend interfaces to backend systems and databases.',
    icon: 'Boxes',
    accent: '#8b5cf6',
    features: ['End-to-End Architecture', 'MERN Stack Systems', 'Production Deployment', 'High Performance']
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Creating modern, responsive, and interactive user interfaces with smooth user experiences.',
    icon: 'Monitor',
    accent: '#00f0ff',
    features: ['React & Modern TS', 'Tailwind & Fluid Motion', 'Mobile-First Layouts', 'Pixel-Perfect UI']
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Building secure APIs, authentication systems, databases, and scalable backend architecture.',
    icon: 'Server',
    accent: '#f43f5e',
    features: ['Scalable REST APIs', 'Node.js & Express', 'MongoDB & Aggregations', 'JWT & OAuth Security']
  },
  {
    id: 'dashboards',
    title: 'Dashboard & Management Systems',
    description: 'Developing powerful dashboards, admin panels, workspace systems, and business management solutions.',
    icon: 'LayoutDashboard',
    accent: '#38bdf8',
    features: ['Real-time Metrics', 'Role-Based Access (RBAC)', 'Interactive Data Tables', 'Modular Admin UI']
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Solutions',
    description: 'Creating modern online stores with product management, orders, customer experience, and smart business features.',
    icon: 'ShoppingBag',
    accent: '#10b981',
    features: ['Product Catalog & Filters', 'Cart & Checkout Flows', 'Payment Integrations', 'Order Processing']
  }
];

