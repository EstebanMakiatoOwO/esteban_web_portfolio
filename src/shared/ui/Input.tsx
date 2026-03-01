import { cn } from "@shared/utils/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className, id, ...props }: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={id}
          className="block text-xs font-medium uppercase tracking-wider text-muted-400"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(
          "w-full rounded-xl border border-white/6 bg-surface-900 px-4 py-3 text-sm text-white placeholder-muted-400",
          "outline-none transition-all duration-300 ease-in-out",
          "focus:border-accent-500/50 focus:shadow-[0_0_0_3px_rgba(16,185,129,0.08)]",
          className
        )}
        {...props}
      />
    </div>
  );
}
