import { Section, SectionHeading } from "@shared/ui";
import { LogoLoop } from "@shared/ui/react-bits";
import type { LogoItem } from "@shared/ui/react-bits";
import { techStack } from "./data/stack";
import { TechCategory } from "./components/TechCategory";
import type { TechCategory as TechCategoryType } from "@shared/types";

const categoryLabels: Record<TechCategoryType, string> = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools & Workflow",
  cloud: "Cloud & Deploy",
};

const categoryOrder: TechCategoryType[] = [
  "frontend",
  "backend",
  "tools",
  "cloud",
];

// Tech logos from devicon CDN
const techLogos: LogoItem[] = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", alt: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", alt: "TypeScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", alt: "Next.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", alt: "TailwindCSS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg", alt: "Vite" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", alt: "Express" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg", alt: "Prisma" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg", alt: "GraphQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", alt: "Git" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", alt: "Docker" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", alt: "Figma" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", alt: "AWS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg", alt: "Vercel" },
];

export function TechStack() {
  return (
    <Section id="tech-stack">
      <SectionHeading
        label="Stack"
        title="Technologies I Use"
        subtitle="Tools and frameworks I work with on a daily basis."
      />

      {/* LogoLoop marquee with actual logos */}
      <div className="mb-14 -mx-6 md:-mx-8 overflow-hidden">
        <LogoLoop
          logos={techLogos}
          speed={50}
          gap={40}
          logoHeight={32}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#0B0F14"
        />
      </div>

      <div className="grid gap-10 sm:grid-cols-2">
        {categoryOrder.map((cat, i) => (
          <TechCategory
            key={cat}
            title={categoryLabels[cat]}
            items={techStack.filter((t) => t.category === cat)}
            delay={i * 0.12}
          />
        ))}
      </div>
    </Section>
  );
}
