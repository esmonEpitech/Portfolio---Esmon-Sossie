import { motion } from "motion/react";
import {
  ArrowUp,
  Github,
  Heart,
  Linkedin,
  Twitter,
  Terminal,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/esmonEpitech",
      icon: Github,
      color: "hover:bg-brand-blue",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/esmon-sossié-521864387?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      icon: Linkedin,
      color: "hover:bg-brand-green",
    },
    // {
    //   name: "Twitter",
    //   href: "https://twitter.com",
    //   icon: Twitter,
    //   color: "hover:bg-brand-orange",
    // },
  ];

  return (
    <footer className="bg-app-bg border-t border-app-border/80 py-16 px-4 md:px-8 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-brand-yellow/15 rounded-full blob-shape pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Brand & Credit Column */}
        <div className="space-y-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-orange flex items-center justify-center border border-brand-orange/30 shadow-sm">
              <Terminal className="w-4 h-4 text-white" />
            </div>
            <span className="font-mono font-bold text-md text-app-text">
              esmon<span className="text-brand-orange">.dev</span>
            </span>
          </div>

          <p className="text-xs text-app-text-muted font-medium max-w-sm">
            Transformer des idées en expériences numériques qui ont du
            sens.{" "}
          </p>

          <p className="text-[10px] text-app-text-muted font-mono font-bold uppercase tracking-widest flex items-center justify-center md:justify-start gap-1">
            © {new Date().getFullYear()} — Tous droits réservés.
          </p>
        </div>

        {/* Social Icons & Back-To-Top Row */}
        <div className="flex flex-col items-center md:items-end gap-6 text-center md:text-right">
          {/* Social icons with direct spring bounces */}
          <div className="flex items-center gap-3">
            {socials.map((soc) => {
              const Icon = soc.icon;
              return (
                <motion.a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className={`w-10 h-10 rounded-xl bg-app-surface border border-app-border flex items-center justify-center shadow-sm text-app-text hover:text-white transition-all ${soc.color}`}
                  aria-label={soc.name}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>

          {/* Connect node with back to top button */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono font-extrabold text-app-text-muted uppercase tracking-wider flex items-center gap-1.5 select-none pt-1">
              <Sparkles className="w-3.5 h-3.5 text-brand-yellow fill-brand-yellow animate-pulse" />{" "}
              Accueil
            </span>
            <motion.button
              onClick={handleScrollToTop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl bg-app-surface border border-app-border flex items-center justify-center shadow-sm hover:bg-app-bg transition-all cursor-pointer"
              aria-label="Retourner en haut"
            >
              <ArrowUp className="w-5 h-5 text-app-text" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
