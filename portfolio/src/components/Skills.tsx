import React from "react";
import { motion } from "motion/react";
import {
  Code2,
  Globe,
  Server,
  Database,
  Wrench,
} from "lucide-react";

export default function Skills() {
  const categories = [
    {
      title: "Langages de programmation",
      icon: Code2,
      skills: [
        "JavaScript",
        "TypeScript",
        "PHP",
        "Python",
        "Sql",
        "HTML5 / CSS3",
      ],
    },
    {
      title: "Front-end",
      icon: Globe,
      skills: [
        "React.js",
        "Next.js",
        "Vue.js",
        "React Native (Expo)",
        "Tailwind CSS / NativeWind",
        "Responsive Design",
      ],
    },
    {
      title: "Back-end",
      icon: Server,
      skills: [
        "Node.js",
        "Nest.js",
        "Laravel",
        "API REST",
        "Authentification (JWT / sessions)",
        "CRUD / gestion de données",
        "Mongoose",
      ],
    },
    {
      title: "Bases de données",
      icon: Database,
      skills: [
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        
      ],
    },
    {
      title: "Outils",
      icon: Wrench,
      skills: [
        "Git / GitHub",
        "VS Code",
        "Postman",
        "Vercel",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-brand-green px-4 py-1.5 rounded-full border border-brand-green/20 bg-brand-green/10">
            Compétences
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
            Mon écosystème technique
          </h2>

          <p className="text-app-text-muted max-w-xl mx-auto mt-3">
            Technologies et outils que j’utilise pour concevoir des applications web et mobiles complètes.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {categories.map((cat, index) => {
            const Icon = cat.icon;

            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="premium-card p-6 transition-shadow duration-300 hover:shadow-xl"
              >
                {/* HEADER */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ rotate: 8 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-10 h-10 rounded-xl bg-app-bg border border-app-border flex items-center justify-center"
                  >
                    <Icon className="w-5 h-5 text-brand-blue" />
                  </motion.div>

                  <h3 className="font-bold text-lg text-app-text">
                    {cat.title}
                  </h3>
                </div>

                {/* SKILLS */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: i * 0.03,
                        duration: 0.2,
                      }}
                      whileHover={{
                        scale: 1.08,
                        backgroundColor: "rgba(255,255,255,0.05)",
                      }}
                      className="px-3 py-1.5 text-xs font-medium rounded-xl border border-app-border bg-app-surface text-app-text cursor-default transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}