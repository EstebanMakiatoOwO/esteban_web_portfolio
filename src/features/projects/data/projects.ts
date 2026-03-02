import type { Project } from "@shared/types";

export const projects: Project[] = [
  {
    id: "seer-trade",
    title: "Seer Trade",
    description:
      "Crypto trading web app with real-time market discovery, portfolio tracking, and advanced charting tools.",
    tags: ["React", "TailwindCSS", "Prisma", "Axios"],
    status: "Deployed",
    imageUrl: "/projects/seer-trade.png",
    liveUrl: "https://www.seer.trade/discover",
  },
  {
    id: "monii-app",
    title: "Monii",
    description:
      "Mobile-first digital payments platform for events — bars, restaurants, and concerts. Seamless checkout experience.",
    tags: ["React", "TailwindCSS", "Axios", "PWA"],
    status: "Deployed",
    imageUrl: "/projects/monii.png",
    liveUrl: "https://monii.app/",
  },
  {
    id: "xiles-abuela",
    title: "Xiles de mi Abuela",
    description:
      "Blog platform with admin panel and Supabase backend for content management. Rich reading experience with clean typography.",
    tags: ["React", "TailwindCSS", "Supabase", "Admin Panel"],
    status: "Deployed",
    imageUrl: "/projects/xiles.png",
    liveUrl: "https://xilesdemiabuela.com/",
  },
  {
    id: "valeria-vega",
    title: "Valeria Vega Danza",
    description:
      "Professional portfolio for dancer Valeria Vega Solorzano. Multi-section informational site with smooth animations.",
    tags: ["React", "TailwindCSS", "Responsive", "Animation"],
    status: "Deployed",
    imageUrl: "/projects/valeria-vega.png",
    liveUrl: "https://valeriavegadanza.com/",
  },
];
