import { motion } from "motion/react";
import type { ReactNode } from "react";

interface StaggerItemProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  blur?: boolean;
  scale?: boolean;
  duration?: number;
  className?: string;
}

export function StaggerItem({
  children,
  direction = "up",
  distance = 30,
  blur = false,
  scale = false,
  duration = 0.5,
  className,
}: StaggerItemProps) {
  const directionOffset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          ...directionOffset[direction],
          ...(blur ? { filter: "blur(8px)" } : {}),
          ...(scale ? { scale: 0.85 } : {}),
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          ...(blur ? { filter: "blur(0px)" } : {}),
          ...(scale ? { scale: 1 } : {}),
          transition: {
            duration,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
