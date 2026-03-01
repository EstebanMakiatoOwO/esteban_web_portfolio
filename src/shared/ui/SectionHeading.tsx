import { cn } from "@shared/utils/cn";
import { ShinyText } from "@shared/ui/react-bits";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-14", align === "center" && "text-center")}>
      {label && (
        <div className="mb-3">
          <ShinyText
            text={label}
            speed={3}
            className="text-xs font-semibold uppercase tracking-widest text-accent-400"
            color="#34d399"
            shineColor="#ffffff"
          />
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed text-muted-400 max-w-2xl",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
