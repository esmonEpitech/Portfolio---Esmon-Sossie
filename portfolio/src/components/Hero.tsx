import { motion } from "motion/react";
import { Sparkles, ArrowDownRight, ArrowRight, Github, ExternalLink, Code2 } from "lucide-react";
// @ts-ignore
import photo from "../assets/images/Esmon.png";

export default function Hero() {
  const fileEntranceVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: custom * 0.15,
      },
    }),
  };

  return (
    <section className="relative min-h-screen pt-32 pb-16 flex items-center justify-center overflow-hidden px-4 md:px-8">
      {/* Slow rotating organic blobs in the background */}
      <div className="absolute top-1/4 -left-16 w-72 h-72 bg-brand-blue/15 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-16 w-80 h-80 bg-brand-orange/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-40 h-40 bg-[#5B8DEF] opacity-5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-[#F4A261] opacity-5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left column - Content */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          {/* Status Tag */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fileEntranceVariant}
            className="inline-flex items-center gap-2 bg-[#6BA368]/10 text-[#6BA368] px-4 py-1.5 rounded-full border border-[#6BA368]/20 text-xs font-bold uppercase tracking-wider shadow-sm"
          >
            <div className="w-2 h-2 bg-[#6BA368] rounded-full animate-pulse"></div>
            Disponible pour construire votre prochain produit ✨🚀
          </motion.div>

          {/* Heading */}
          <div className="space-y-4">
            <div className="relative">
              <motion.h1
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fileEntranceVariant}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-app-text"
              >
                Je transforme des idées en {""}
                 <span className="text-brand-blue italic underline decoration-4 underline-offset-8">
                  applications web et mobiles
                </span>{" "}
                  d'exception.
              </motion.h1>
              <div className="absolute -top-6 -right-6 text-[#FFD166] opacity-80">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0l2.5 8.5h8.5l-7 5.5 2.5 8.5-6.5-5.5-6.5 5.5 2.5-8.5-7-5.5h8.5z" />
                </svg>
              </div>
            </div>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible" 
              variants={fileEntranceVariant}
              className="text-lg sm:text-xl text-app-text-muted max-w-xl font-medium leading-relaxed pt-2"
            >
              Développeur Full-Stack {/* spécialisé en React, Next.js, NestJS et React Native */} . J'accompagne la création d'applications web et mobiles modernes, de l'interface utilisateur jusqu'au back-end, avec une attention particulière portée aux performances et à l'expérience utilisateur.
            </motion.p>
          </div>

          {/* Action Callouts */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fileEntranceVariant}
            className="flex flex-wrap gap-4 pt-4 w-full sm:w-auto"
          >
            
            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl font-bold text-md transition-all border-b-4 bg-[#111827] text-white border-black hover:opacity-90 active:translate-y-1 active:border-b-0 shadow-md text-center flex items-center justify-center gap-2"
            >
              Me contacter <ArrowRight className="w-5 h-5 text-brand-yellow" />
            </a>

            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl font-bold text-md border border-app-border hover:bg-app-bg transition-all border-b-4 bg-app-surface text-app-text text-center flex items-center justify-center gap-2"
            >
              Voir mes projets <ArrowDownRight className="w-5 h-5 text-brand-blue" />
            </a>
          </motion.div>

          {/* Quick Attributes Banner */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fileEntranceVariant}
            className="flex flex-wrap items-center gap-6 mt-6 border-t border-app-border/80 pt-6 w-full text-xs font-mono font-bold text-app-text-muted/80"
          >
            <div className="flex items-center gap-2">
              <span className="text-brand-orange font-extrabold text-md">Interfaces </span>
              <span>modernes</span>
            </div>
            <div className="w-1.5 h-1.5 bg-app-border rounded-full hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-brand-green font-extrabold text-md"> Applications </span>
              <span>performantes</span>
            </div>
            <div className="w-1.5 h-1.5 bg-app-border rounded-full hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-brand-blue font-extrabold text-md">Expérience </span>
              <span>utilisateur</span>
            </div>
          </motion.div>
        </div>

        {/* Right column - Interactive Frame & Avatar Card (High Density) */}
        <div className="lg:col-span-5 flex flex-col gap-6 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="bg-app-surface p-8 rounded-[40px] border border-app-border shadow-xl shadow-gray-200/10 relative overflow-hidden flex-1"
          >
            {/* Top Mac-browser Style Dots */}
            <div className="absolute top-0 right-0 p-6">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#F26D6D]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFD166]"></div>
                <div className="w-3 h-3 rounded-full bg-[#6BA368]"></div>
              </div>
            </div>

            <div className="h-full flex flex-col justify-center items-center text-center">
              {/* Profile Wrapper circle */}
              <div className="w-64 h-94 bg-app-bg rounded-2xl border-4 border-app-surface shadow-inner mb-6 flex items-center justify-center overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-yellow/10 via-transparent to-brand-blue/10 pointer-events-none" />
                <img
                  src={photo}
                  alt="Illustration avatar développeur moderne"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain object-top select-none transition-transform duration-500 group-hover:scale-115"
                />
              </div>

              <h3 className="text-2xl font-bold mb-1.5 text-app-text">Esmon Sémandé Sossié</h3>
              <p className="text-app-text-muted font-semibold text-xs"> Développeur Full-Stack</p>

              {/* High Density nested quick grid */}
              {/* <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                <div className="bg-app-bg/50 p-4 rounded-2xl border border-app-border/40 hover:border-brand-blue/10 transition-colors">
                  <div className="text-2xl font-black text-brand-blue">5+</div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-app-text-muted">Années Exp.</div>
                </div>
                <div className="bg-app-bg/50 p-4 rounded-2xl border border-app-border/40 hover:border-brand-green/10 transition-colors">
                  <div className="text-2xl font-black text-brand-green">24</div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-app-text-muted">Projets Livrés</div>
                </div>
              </div> */}
            </div>
          </motion.div>

          {/* Quick horizontal tech badge card beneath */}
          {/* <div className="bg-app-surface border border-app-border p-6 rounded-[32px] flex items-center justify-between shadow-sm">
            <div>
              <div className="text-[10px] uppercase font-black text-app-text-muted/80 mb-1 tracking-widest font-mono">Tech Stack</div>
              <div className="flex gap-3">
                <span className="text-md font-bold text-app-text">Next.js</span>
                <span className="text-md font-bold text-brand-blue">TypeScript</span>
                <span className="text-md font-bold text-brand-red">Motion</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center border border-brand-blue/20">
              <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
