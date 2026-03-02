import { Section, SectionHeading, Card } from "@shared/ui";
import { StaggerContainer, StaggerItem } from "@shared/ui/motion";
import { Layers, TestTube, GitBranch, Zap } from "lucide-react";

const principles = [
  {
    icon: Layers,
    title: "Clean Architecture",
    description:
      "Feature-driven structure with clear separation of concerns. Every module is self-contained.",
  },
  {
    icon: TestTube,
    title: "Testing Culture",
    description:
      "Unit, integration, and end-to-end testing ensure confidence in every deployment.",
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description:
      "Atomic commits, meaningful PRs, and branch strategies that keep codebases reviewable.",
  },
  {
    icon: Zap,
    title: "Performance First",
    description:
      "Optimized bundles, lazy loading, and efficient rendering. Every millisecond counts.",
  },
];

export function Engineering() {
  return (
    <Section id="engineering">
      <SectionHeading
        label="Process"
        title="Engineering Approach"
        subtitle="Principles that guide how I write and ship code."
      />
      <StaggerContainer staggerDelay={0.12} className="grid gap-5 sm:grid-cols-2">
        {principles.map((item) => (
          <StaggerItem key={item.title} blur scale>
            <Card starBorder>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10">
                <item.icon size={20} className="text-accent-400" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-400">
                {item.description}
              </p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
