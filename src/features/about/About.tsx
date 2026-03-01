import { Section, SectionHeading, Card } from "@shared/ui";
import { FadeIn, StaggerContainer, StaggerItem, AnimatedCounter } from "@shared/ui/motion";
import { ShinyText } from "@shared/ui/react-bits";

const highlights = [
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Projects Shipped", value: 20, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        label="About"
        title="Who I am"
        subtitle="A developer with a product mindset and a passion for clean architecture."
      />
      <div className="grid gap-12 md:grid-cols-2 items-start">
        <div className="space-y-4 text-muted-300 leading-relaxed">
          <FadeIn delay={0} blur>
            <p>
              I specialize in building{" "}
              <ShinyText text="full-stack web applications" speed={4} className="text-base font-medium text-white" color="#8b99a8" shineColor="#34d399" />{" "}
              with a strong emphasis on scalability, maintainability, and user experience.
              My approach combines solid engineering principles with an eye for design.
            </p>
          </FadeIn>
          <FadeIn delay={0.15} blur>
            <p>
              I believe that great software is not just about writing code — it's
              about{" "}
              <ShinyText text="solving real problems" speed={4} className="text-base font-medium text-white" color="#8b99a8" shineColor="#34d399" delay={1} />{" "}
              with elegant, well-structured solutions that teams can confidently build upon.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-3 gap-3">
          {highlights.map((item) => (
            <StaggerItem key={item.label} blur scale>
              <Card className="text-center" starBorder starSpeed="8s">
                <AnimatedCounter
                  target={item.value}
                  suffix={item.suffix}
                  className="text-2xl font-bold text-white"
                />
                <p className="mt-1 text-[11px] uppercase tracking-wider text-muted-400">
                  {item.label}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
