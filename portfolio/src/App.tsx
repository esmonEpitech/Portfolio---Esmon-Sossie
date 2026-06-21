/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("portfolio-theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      return false; // Soft off-white light theme is dominant by default
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("portfolio-theme", "light");
    }
  }, [isDark]);

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-app-bg text-app-text flex flex-col font-sans antialiased selection:bg-brand-blue selection:text-white pb-0">
      {/* Dynamic Theme and Responsive Header Nav */}
      <Navbar isDark={isDark} onToggleTheme={handleToggleTheme} />

      {/* Main Single Screen Layout Flow */}
      <main className="flex-1 w-full flex flex-col">
        {/* Intro Banner and Hero */}
        <Hero />

        {/* Qui je suis */}
        <About />

        {/* Compétences techniques */}
        <Skills />

        {/* Mes projets vivants */}
        <Projects />

        {/* Parcours Timeline */}
        <ExperienceTimeline />

        {/* Contact form interaction */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

