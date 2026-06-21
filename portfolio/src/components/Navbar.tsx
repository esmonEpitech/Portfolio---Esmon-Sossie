import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Sun, Moon, Menu, X, Terminal, Compass, Sparkles } from "lucide-react";

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "À propos", href: "#about" },
    { name: "Compétences", href: "#skills" },
    { name: "Projets", href: "#projects" },
    { name: "Parcours", href: "#journey" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 pt-6 md:px-8"
    >
      <div
        className={`max-w-5xl mx-auto rounded-full border border-app-border bg-app-surface/70 backdrop-blur-md px-6 py-2.5 shadow-sm transition-all duration-300 ${
          scrolled ? "shadow-md bg-app-surface/90" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="/" className="flex items-center gap-2.5 group">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 350, damping: 15 }}
              className="w-9 h-9 rounded-xl bg-brand-blue border border-brand-blue/30 flex items-center justify-center shadow-md shadow-brand-blue/15"
            >
              <Terminal className="w-4.5 h-4.5 text-white" />
            </motion.div>
            <span className="font-mono font-bold text-md tracking-tight hover:text-brand-blue transition-colors duration-200">
              esmon<span className="text-brand-blue">.dev</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-semibold text-sm text-app-text/90 hover:text-brand-blue relative transition-colors duration-200 py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </div>

            <div className="w-px h-5 bg-app-border" />

            {/* Actions */}
            <div className="flex items-center gap-2.5">
              {/* Theme Toggle Button */}
              <motion.button
                whileTap={{ scale: 0.92 }}
                whileHover={{ scale: 1.04 }}
                onClick={onToggleTheme}
                className="w-9 h-9 rounded-full border border-app-border flex items-center justify-center bg-app-surface shadow-sm cursor-pointer"
                aria-label="Changer de thème"
              >
                {isDark ? (
                  <Sun className="w-4.5 h-4.5 text-brand-yellow" />
                ) : (
                  <Moon className="w-4.5 h-4.5 text-brand-blue" />
                )}
              </motion.button>

              {/* Sparkle CTA */}
              <a
                href="#contact"
                className="flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-full bg-brand-yellow text-gray-900 shadow-sm border border-brand-yellow/30 hover:shadow-md transition-all active:translate-y-[1px]"
              >
                <Sparkles className="w-3.5 h-3.5 fill-current text-gray-905" /> Let's Talk!
              </a>
            </div>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onToggleTheme}
              className="w-8 h-8 rounded-full border border-app-border flex items-center justify-center bg-app-surface cursor-pointer"
              aria-label="Changer de thème"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-brand-yellow" />
              ) : (
                <Moon className="w-4 h-4 text-brand-blue" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-8 h-8 rounded-full border border-app-border flex items-center justify-center bg-app-surface cursor-pointer text-app-text"
              aria-label="Menu principal"
            >
              {isOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden mt-2 px-1"
        >
          <div className="rounded-2xl border border-app-border bg-app-surface/95 backdrop-blur-md p-4 shadow-lg flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-app-bg hover:text-brand-blue transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-1 text-center py-2 text-xs font-bold rounded-full bg-brand-yellow text-gray-900 shadow-sm"
            >
              Me contacter ✨
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
