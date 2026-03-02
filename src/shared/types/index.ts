export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: "Deployed" | "In Development";
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface TechItem {
  name: string;
  category: TechCategory;
}

export type TechCategory = "frontend" | "backend" | "tools" | "cloud";

export interface NavLink {
  label: string;
  href: string;
}
