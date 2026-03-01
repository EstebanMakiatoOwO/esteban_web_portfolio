import { BlurText } from "@shared/ui/react-bits";

export function HeroHeadline() {
  return (
    <BlurText
      text="Building products that scale."
      delay={120}
      animateBy="words"
      direction="top"
      className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
    />
  );
}
