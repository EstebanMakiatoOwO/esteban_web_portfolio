import { ExternalLink, Github } from "lucide-react";
import { SpotlightCard } from "@shared/ui/react-bits";
import type { Project } from "@shared/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <SpotlightCard
      className="group rounded-2xl border border-white/6 bg-surface-800 p-0 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
      spotlightColor="rgba(16, 185, 129, 0.06)"
    >
      {/* Preview image */}
      <div className="relative aspect-video w-full overflow-hidden bg-surface-700">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Status badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`rounded-lg px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
              project.status === "Deployed"
                ? "bg-accent-500/15 text-accent-400"
                : "bg-amber-500/15 text-amber-400"
            }`}
          >
            {project.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          {/* Action icons */}
          <div className="flex shrink-0 items-center gap-2">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/6 text-muted-400 transition-all duration-300 hover:border-white/15 hover:text-white"
                aria-label="Source code"
              >
                <Github size={14} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/6 text-muted-400 transition-all duration-300 hover:border-white/15 hover:text-white"
                aria-label="Live demo"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-muted-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] font-medium text-muted-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </SpotlightCard>
  );
}
