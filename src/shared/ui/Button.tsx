import { cn } from "@shared/utils/cn";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

const base =
  "inline-flex items-center justify-center font-medium transition-all duration-300 ease-in-out rounded-xl text-sm";

const variantStyles = {
  primary:
    "bg-accent-500 text-surface-950 hover:bg-accent-400 shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]",
  outline:
    "border border-white/10 text-muted-200 hover:border-white/25 hover:text-white",
  ghost: "text-muted-400 hover:text-white hover:bg-white/5",
};

const sizeStyles = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const classes = cn(
    base,
    variantStyles[variant],
    sizeStyles[size],
    disabled && "opacity-50 pointer-events-none",
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
