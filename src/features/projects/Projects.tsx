import { Section, SectionHeading } from "@shared/ui";
import { StaggerContainer, StaggerItem } from "@shared/ui/motion";
import { projects } from "./data/projects";
import { ProjectCard } from "./components/ProjectCard";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        label="Work"
        title="Featured Projects"
        subtitle="A selection of projects that showcase my approach to building software."
      />
      <StaggerContainer staggerDelay={0.18} className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <StaggerItem key={project.id} blur scale distance={40} duration={0.7}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
