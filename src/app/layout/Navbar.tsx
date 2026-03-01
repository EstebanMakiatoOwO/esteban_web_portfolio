import { GooeyNav } from "@shared/ui/react-bits";
import type { GooeyNavItem } from "@shared/ui/react-bits";

const navItems: GooeyNavItem[] = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Engineering", href: "#engineering" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4">
      <div className="rounded-2xl border border-white/6 bg-surface-900/80 px-4 py-2 backdrop-blur-md">
        <GooeyNav
          items={navItems}
          animationTime={500}
          particleCount={12}
          particleDistances={[70, 8]}
          particleR={80}
          timeVariance={250}
          initialActiveIndex={0}
          pillColor="#10b981"
          particleColors={["#34d399", "#10b981", "#6ee7b7", "#059669"]}
        />
      </div>
    </header>
  );
}
