import { Hero } from "@features/hero/Hero";
import { About } from "@features/about/About";
import { TechStack } from "@features/tech-stack/TechStack";
import { Projects } from "@features/projects/Projects";
import { Engineering } from "@features/engineering/Engineering";
import { UiUx } from "@features/ui-ux/UiUx";
import { Contact } from "@features/contact/Contact";

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Engineering />
      <UiUx />
      <Contact />
    </>
  );
}
