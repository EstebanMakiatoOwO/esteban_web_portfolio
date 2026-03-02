import type { Project } from "@shared/types";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce with real-time inventory, Stripe payments, and admin dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    status: "Deployed",
    imageUrl: "https://placehold.co/800x500/131920/242d3d?text=E-Commerce",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: "project-2",
    title: "Task Management App",
    description:
      "Collaborative project management with drag-and-drop boards and real-time updates.",
    tags: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    status: "Deployed",
    imageUrl: "https://placehold.co/800x500/131920/242d3d?text=Task+App",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: "project-3",
    title: "Analytics Dashboard",
    description:
      "Data visualization dashboard with interactive charts, custom filters, and exports.",
    tags: ["React", "D3.js", "TailwindCSS", "REST API"],
    status: "In Development",
    imageUrl: "https://placehold.co/800x500/131920/242d3d?text=Analytics",
    repoUrl: "https://github.com",
  },
  {
    id: "project-4",
    title: "Developer Portfolio",
    description:
      "This portfolio — feature-driven architecture, React Bits animations, TailwindCSS v4.",
    tags: ["React", "Vite", "TailwindCSS", "GSAP"],
    status: "Deployed",
    imageUrl: "https://placehold.co/800x500/131920/242d3d?text=Portfolio",
    repoUrl: "https://github.com",
  },
];
