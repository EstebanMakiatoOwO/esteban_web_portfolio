import { cn } from "@shared/utils/cn";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-24 px-6 md:px-8 scroll-mt-24", className)}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
