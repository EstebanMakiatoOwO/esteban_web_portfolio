import { Section, SectionHeading, Card } from "@shared/ui";
import { StaggerContainer, StaggerItem } from "@shared/ui/motion";
import { Palette, LayoutGrid, MousePointerClick } from "lucide-react";

const philosophyPoints = [
  {
    icon: Palette,
    title: "Minimalism with Purpose",
    description:
      "Every element earns its place. Clean interfaces reduce cognitive load and guide users naturally.",
  },
  {
    icon: LayoutGrid,
    title: "Consistent Systems",
    description:
      "Reusable components, defined spacing scales, and strong typography hierarchy create cohesive experiences.",
  },
  {
    icon: MousePointerClick,
    title: "Micro-Interactions",
    description:
      "Subtle animations and hover states provide feedback that makes interfaces feel responsive and polished.",
  },
];

export function UiUx() {
  return (
    <Section id="ui-ux">
      <SectionHeading
        label="Design"
        title="UI/UX Philosophy"
        subtitle="Design is not just how it looks — it's how it works."
      />
      <StaggerContainer staggerDelay={0.15} className="grid gap-5 sm:grid-cols-3">
        {philosophyPoints.map((item) => (
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
