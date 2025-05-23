export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  caseStudy?: string;
  category: 'frontend' | 'backend' | 'fullstack';
}

export const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with Next.js and a headless CMS. Features include product filtering, user authentication, and shopping cart functionality.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
    tags: ["Next.js", "React", "Stripe", "Tailwind CSS", "Prisma","ts"],
    github: "https://github.com",
    demo: "https://demo.com",
    caseStudy: "/projects/ecommerce-platform-redesign",
    category: "fullstack"
  },
  {
    title: "Task Management App",
    description: "A Kanban-style task management application with drag-and-drop functionality, user collaboration, and real-time updates.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "Firebase", "Redux", "Material UI"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "frontend"
  },
  {
    title: "API Gateway Service",
    description: "A high-performance API gateway that handles request routing, composition, and protocol translation for a microservices architecture.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
    tags: ["Node.js", "Express", "Docker", "Redis", "MongoDB"],
    github: "https://github.com",
    category: "backend"
  },
  {
    title: "Finance Dashboard",
    description: "An interactive dashboard for financial data visualization with real-time updates, customizable widgets, and historical data analysis.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "D3.js", "TypeScript", "Styled Components"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "frontend"
  },
  {
    title: "Social Networking Platform",
    description: "A feature-rich social networking platform with real-time messaging, news feed, user profiles, and content sharing capabilities.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop",
    tags: ["Next.js", "GraphQL", "PostgreSQL", "WebSockets", "AWS"],
    github: "https://github.com",
    demo: "https://demo.com",
    caseStudy: "/projects/social-networking-app",
    category: "fullstack"
  },
  {
    title: "Inventory Management System",
    description: "A comprehensive inventory management system for tracking products, managing stock levels, and generating detailed reports.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Docker"],
    github: "https://github.com",
    caseStudy: "/projects/inventory-management-system",
    category: "backend"
  }
]; 