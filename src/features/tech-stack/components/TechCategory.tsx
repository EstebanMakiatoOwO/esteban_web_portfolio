import { motion } from "motion/react";
import type { TechItem } from "@shared/types";

interface TechCategoryProps {
  title: string;
  items: TechItem[];
  delay?: number;
}

export function TechCategory({ title, items, delay = 0 }: TechCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent-400">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <motion.span
            key={item.name}
            className="rounded-lg border border-white/6 bg-surface-800 px-3.5 py-1.5 text-sm text-muted-200 transition-all duration-300 hover:border-accent-500/30 hover:text-white hover:scale-105"
            initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{
              duration: 0.35,
              delay: delay + 0.15 + i * 0.04,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {item.name}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
