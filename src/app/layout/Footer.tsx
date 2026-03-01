import { Github, Linkedin, Mail, Music } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/EstebanMakiatoOwO", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/rivera-p%C3%A9rez-carlos-esteban-b11732224", label: "LinkedIn" },
  { icon: Mail, href: "mailto:estebansoft2003@gmail.com", label: "Email" },
];

const SPOTIFY_PLAYLIST_ID = "37i9dQZEVXd3gY9ffLbq46";

export function Footer() {
  return (
    <footer className="border-t border-white/6 py-14 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Two-column layout */}
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          {/* Left column — info + socials */}
          <div className="space-y-6">
            <div>
              <p className="text-lg font-semibold text-white">Esteban Makiato</p>
              <p className="mt-1 text-sm text-muted-400">
                Building scalable, design-driven products.
              </p>
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/6 text-muted-400 transition-all duration-300 hover:border-white/15 hover:text-white"
                  aria-label={link.label}
                >
                  <link.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Right column — Spotify */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-400">
              <Music size={14} className="text-accent-400" />
              <span>What I'm listening to</span>
            </div>
            <div className="overflow-hidden rounded-xl">
              <iframe
                src={`https://open.spotify.com/embed/playlist/${SPOTIFY_PLAYLIST_ID}?utm_source=generator&theme=0`}
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-xl border-0"
                title="Spotify Playlist"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-white/6 pt-6 text-center">
          <p className="text-xs text-muted-400">
            &copy; {new Date().getFullYear()} Esteban Makiato. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
