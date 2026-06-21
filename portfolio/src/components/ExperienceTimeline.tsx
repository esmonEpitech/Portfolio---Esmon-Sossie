import React from "react";
import { motion } from "framer-motion";
import { Calendar, GraduationCap, Award, Rocket } from "lucide-react";

export default function ExperienceTimeline() {
  const timeline = [
  {
    title: "Certification WeCode",
    status: "En cours",
    subtitle: "Développement web & mobile (Full-Stack)",
    year: "2026",
    icon: Rocket,
    accent: "brand-orange",
    description:
      "Formation orientée projets pratiques en développement full-stack moderne avec Next.js, React Native et Node.js. Accent sur la création d’applications complètes et déploiement.",
  },
  {
    title: "Certification IISAN Abidjan/ Simplon ",
    subtitle: "Formation intensive",
    year: "2025",
    icon: Award,
    accent: "brand-blue",
    description:
      "Formation intensive axée sur l’acquisition de compétences pratiques en développement informatique (IDA)",
  },
  {
    title: "BTS IDA – GEIGE",
    subtitle: "Informatique & Développement d’Applications",
    year: "2025",
    icon: GraduationCap,
    accent: "brand-blue",
    description:
      "Formation en développement logiciel : conception d’applications, bases de données (SQL/NoSQL), algorithmique et logique de programmation.",
  },
  {
    title: "Baccalauréat D – LYCÉE DE GARÇONS DE BINGERVILLE",
    subtitle: "Série scientifique",
    year: "2023",
    icon: Calendar,
    accent: "slate-500",
    description:
      "Formation scientifique ayant renforcé la rigueur, l’analyse logique et les bases mathématiques nécessaires en informatique.",
  },
];

  return (
    <section id="journey" className="py-24 px-4 md:px-8 bg-app-bg/40 relative overflow-hidden">
      {/* Cercles de lumière diffus en arrière-plan pour l'esthétique */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-mono uppercase tracking-[0.4em] px-4 py-1.5 rounded-full border border-brand-orange/20 bg-brand-orange/5 text-brand-orange inline-block mb-4"
          >
            Mon Parcours
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter"
          >
            Mon Évolution<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400"> ACADÉMIQUE</span>
          </motion.h2>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* Ligne centrale (Desktop) / Latérale (Mobile) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-app-border to-transparent md:-translate-x-1/2" />

          <div className="space-y-20">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, ease: "circOut" }}
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* NODE (Le point sur la ligne) */}
                  <div className="absolute left-4 md:left-1/2 w-12 h-12 -translate-x-1/2 flex items-center justify-center z-20">
                    <motion.div 
                      whileHover={{ scale: 1.2 }}
                      className="w-full h-full rounded-2xl bg-app-bg border border-app-border flex items-center justify-center shadow-xl backdrop-blur-sm"
                    >
                      <Icon className={`w-5 h-5 ${item.status ? 'text-brand-orange animate-pulse' : 'text-brand-blue'}`} />
                    </motion.div>
                  </div>

                  {/* ESPACEUR POUR LE LAYOUT */}
                  <div className="hidden md:block w-1/2" />

                  {/* CARD */}
                  <div className={`w-full md:w-[42%] ml-14 md:ml-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      className="relative p-6 md:p-8 rounded-[2rem] bg-app-surface/30 backdrop-blur-sm border border-app-border hover:border-brand-blue/30 transition-all duration-500 group"
                    >
                      {/* Badge Année flottant */}
                      <div className="absolute -top-4 left-6 px-4 py-1 bg-app-bg border border-app-border rounded-full shadow-lg">
                        <span className="text-xs font-mono font-black text-brand-orange">{item.year}</span>
                      </div>

                      {/* Header Card */}
                      <div className="mb-4 mt-2">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-xl font-black uppercase tracking-tight text-app-text group-hover:text-brand-blue transition-colors">
                            {item.title}
                          </h3>
                          {item.status && (
                            <motion.div 
                              animate={{ opacity: [0.4, 1, 0.4] }} 
                              transition={{ repeat: Infinity, duration: 2 }}
                              className="text-[9px] font-bold px-2 py-0.5 rounded bg-brand-orange/10 text-brand-orange border border-brand-orange/20 uppercase"
                            >
                              {item.status}
                            </motion.div>
                          )}
                        </div>
                        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-blue/80">
                          {item.subtitle}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-app-text-muted leading-relaxed font-medium">
                        {item.description}
                      </p>

                      {/* Décoration angle (petit accent de couleur) */}
                      <div className={`absolute bottom-4 right-6 w-8 h-8 opacity-10 group-hover:opacity-100 transition-opacity`}>
                        <Icon size={32} className={item.status ? 'text-brand-orange' : 'text-brand-blue'} />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}