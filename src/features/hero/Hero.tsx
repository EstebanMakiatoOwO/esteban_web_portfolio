import { motion } from "motion/react";
import { Button } from "@shared/ui";
import { HeroHeadline } from "./components/HeroHeadline";
import { ShinyText, LetterGlitch } from "@shared/ui/react-bits";
import { Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/EstebanMakiatoOwO", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/rivera-p%C3%A9rez-carlos-esteban-b11732224", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

const techBadges = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "TailwindCSS",
  "PostgreSQL",
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-6 overflow-hidden">
      {/* LetterGlitch background */}
      <div className="absolute inset-0 opacity-10">
        <LetterGlitch
          glitchColors={["#10b981", "#059669", "#34d399"]}
          glitchSpeed={70}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
          characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890<>/{}()=;"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 pt-24 pb-16 md:grid-cols-[1.4fr_1fr] md:items-center">
        {/* Left column */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ShinyText
              text="Hi, I'm Carlos Esteban Rivera Perez"
              speed={3}
              className="mb-5 text-sm font-medium uppercase tracking-widest text-accent-400"
            />
          </motion.div>

          <HeroHeadline />

          {/* Social icons — staggered blur entrance */}
          <div className="mt-8 flex items-center gap-3">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/6 bg-surface-800 text-muted-400 transition-all duration-300 hover:border-white/15 hover:text-white hover:scale-110"
                aria-label={link.label}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.5,
                  delay: 1.0 + i * 0.12,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <link.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* CTA buttons — slide in with blur */}
          <div className="mt-10 flex gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Button href="#projects">View Projects</Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 1.55, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Button href="#contact" variant="outline">
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Right column — description card slides in from right with blur */}
        <motion.div
          className="rounded-2xl border border-white/6 bg-surface-800/60 p-6 backdrop-blur-sm"
          initial={{ opacity: 0, x: 40, filter: "blur(12px)", scale: 0.95 }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-sm leading-relaxed text-muted-300">
            Full-stack developer specializing in building{" "}
            <ShinyText text="scalable web applications" speed={4} className="text-sm font-medium text-white" color="#a8b5c4" shineColor="#34d399" />{" "}
            with modern technologies. Focused on{" "}
            <ShinyText text="clean architecture" speed={4} className="text-sm font-medium text-white" color="#a8b5c4" shineColor="#34d399" delay={1} />,{" "}
            exceptional user experience, and shipping products
            that make an impact.
          </p>
        </motion.div>
      </div>

      {/* Tech badges row — staggered float up with blur */}
      <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center">
        <div className="flex flex-wrap justify-center gap-2 px-6">
          {techBadges.map((tech, i) => (
            <motion.span
              key={tech}
              className="rounded-full border border-white/6 bg-surface-900/80 px-3.5 py-1 text-xs text-muted-400 backdrop-blur-sm"
              initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.4,
                delay: 1.8 + i * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
