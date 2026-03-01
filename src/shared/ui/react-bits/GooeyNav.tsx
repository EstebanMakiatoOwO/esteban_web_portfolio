import React, { useRef, useEffect, useState, useCallback } from 'react';

interface GooeyNavItem {
  label: string;
  href: string;
}

export interface GooeyNavProps {
  items: GooeyNavItem[];
  animationTime?: number;
  particleCount?: number;
  particleDistances?: [number, number];
  particleR?: number;
  timeVariance?: number;
  initialActiveIndex?: number;
  pillColor?: string;
  particleColors?: string[];
}

const GooeyNav: React.FC<GooeyNavProps> = ({
  items,
  animationTime = 500,
  particleCount = 12,
  particleDistances = [70, 8],
  particleR = 80,
  timeVariance = 250,
  initialActiveIndex = 0,
  pillColor = '#10b981',
  particleColors = ['#34d399', '#10b981', '#6ee7b7', '#059669'],
}) => {
  const navRef = useRef<HTMLUListElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const particleContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(initialActiveIndex);

  const noise = (n = 1) => n / 2 - Math.random() * n;

  const spawnParticles = useCallback((centerX: number, centerY: number) => {
    const container = particleContainerRef.current;
    if (!container) return;

    for (let i = 0; i < particleCount; i++) {
      const lifetime = animationTime * 1.5 + noise(timeVariance * 2);
      const color = particleColors[Math.floor(Math.random() * particleColors.length)];
      const size = 4 + Math.random() * 4;

      // Each particle gets a random angle for a full radial burst
      const angle = (Math.PI * 2 / particleCount) * i + noise(0.4);
      // Start near center with small offset, end far out
      const startDist = particleDistances[1] + noise(6);
      const endDist = particleDistances[0] + noise(20);

      const startX = Math.cos(angle) * startDist;
      const startY = Math.sin(angle) * startDist;
      const endX = Math.cos(angle) * endDist;
      const endY = Math.sin(angle) * endDist;

      const delay = Math.random() * 60;

      setTimeout(() => {
        const particle = document.createElement('span');
        Object.assign(particle.style, {
          position: 'absolute',
          left: `${centerX - size / 2}px`,
          top: `${centerY - size / 2}px`,
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '50%',
          background: color,
          pointerEvents: 'none',
          zIndex: '50',
          opacity: '0.9',
          transform: `translate(${startX}px, ${startY}px) scale(0.3)`,
          transition: `transform ${lifetime}ms cubic-bezier(0.16, 1, 0.3, 1), opacity ${lifetime * 0.4}ms ease ${lifetime * 0.5}ms`,
        });

        container.appendChild(particle);

        requestAnimationFrame(() => {
          particle.style.transform = `translate(${endX}px, ${endY}px) scale(1)`;
          particle.style.opacity = '0';
        });

        setTimeout(() => {
          try { container.removeChild(particle); } catch { /* noop */ }
        }, lifetime + 100);
      }, delay);
    }
  }, [animationTime, particleCount, particleDistances, particleR, timeVariance, particleColors]);

  const updatePill = useCallback((index: number) => {
    if (!navRef.current || !pillRef.current) return;
    const items = navRef.current.querySelectorAll('li');
    const target = items[index] as HTMLElement;
    if (!target) return;

    const navRect = navRef.current.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    Object.assign(pillRef.current.style, {
      left: `${targetRect.left - navRect.left}px`,
      top: `${targetRect.top - navRect.top}px`,
      width: `${targetRect.width}px`,
      height: `${targetRect.height}px`,
    });
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
    e.preventDefault();
    if (activeIndex === index) return;

    const target = e.currentTarget.parentElement as HTMLElement;
    const navRect = navRef.current?.getBoundingClientRect();
    if (target && navRect) {
      const rect = target.getBoundingClientRect();
      spawnParticles(
        rect.left - navRect.left + rect.width / 2,
        rect.top - navRect.top + rect.height / 2
      );
    }

    setActiveIndex(index);
    updatePill(index);

    // Smooth scroll to section
    const href = items[index].href;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    updatePill(activeIndex);

    const handleResize = () => updatePill(activeIndex);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex, updatePill]);

  return (
    <div className="relative">
      {/* Particle container */}
      <div
        ref={particleContainerRef}
        className="pointer-events-none absolute inset-0 overflow-visible z-50"
      />

      <nav className="relative">
        <ul
          ref={navRef}
          className="relative flex gap-1 list-none p-0 m-0 z-3"
        >
          {/* Animated pill */}
          <div
            ref={pillRef}
            className="absolute rounded-lg transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] z-0"
            style={{ background: pillColor }}
          />

          {items.map((item, index) => (
            <li
              key={index}
              className="relative cursor-pointer z-1"
            >
              <a
                href={item.href}
                onClick={e => handleClick(e, index)}
                className={`outline-none py-2 px-3.5 inline-block text-sm font-medium transition-colors duration-300 rounded-lg ${
                  activeIndex === index
                    ? 'text-surface-950'
                    : 'text-muted-300 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export { GooeyNav };
export type { GooeyNavItem };
export default GooeyNav;
