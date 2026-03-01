import { cn } from "@shared/utils/cn";
import { StarBorder } from "@shared/ui/react-bits";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  starBorder?: boolean;
  starColor?: string;
  starSpeed?: string;
}

export function Card({
  children,
  className,
  hover = true,
  starBorder = false,
  starColor = "#34d399",
  starSpeed = "6s",
}: CardProps) {
  const inner = (
    <div
      className={cn(
        "rounded-2xl border border-white/6 bg-surface-800 p-6 transition-all duration-300 ease-in-out",
        hover &&
          "hover:border-white/10 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]",
        className
      )}
    >
      {children}
    </div>
  );

  if (starBorder) {
    return (
      <StarBorder
        as="div"
        className="w-full"
        color={starColor}
        speed={starSpeed}
      >
        {inner}
      </StarBorder>
    );
  }

  return inner;
}
