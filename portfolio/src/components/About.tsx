import React from "react";
import { motion } from "motion/react";
import { Smile, Flame, Eye, Heart, Award } from "lucide-react";

export default function About() {
  const cards = [
    {
      title: "Attention aux détails",
      description:
        "Je veille à la cohérence visuelle, aux espacements et à la qualité globale de l’interface pour garantir une expérience propre et lisible.",
      color: "bg-brand-blue/10",
      accent: "text-brand-blue",
      icon: Eye,
    },
    {
      title: "UX & performance",
      description:
        "Je construis des applications rapides et fluides, en optimisant aussi bien le frontend que la logique backend.",
      color: "bg-brand-orange/10",
      accent: "text-brand-orange",
      icon: Flame,
    },
    {
      title: "Expérience utilisateur d’abord",
      description:
        "Je conçois des interfaces accessibles et simples à utiliser, en gardant toujours l’utilisateur au centre des décisions.",
      color: "bg-brand-green/10",
      accent: "text-brand-green",
      icon: Smile,
    },
  ];

  return (
    <section
      id="about"
      className="py-24 relative px-4 md:px-8 bg-app-bg/50 border-y border-app-border/80"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-orange px-4 py-1.5 rounded-full border border-brand-orange/20 bg-brand-orange/10 shadow-sm">
            Qui je suis
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Je construis des applications web et mobiles utiles et bien pensées.
          </h2>

          <p className="text-app-text-muted max-w-xl font-medium">
            Développeur full-stack passionné, je transforme des idées en produits
            complets en combinant interface, logique métier et expérience utilisateur.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
          
          {/* LEFT MAIN CARD */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 premium-card p-6 md:p-8 flex flex-col justify-between gap-6"
          >
            <div className="space-y-4 text-left">
              
              {/* Philosophy */}
              <div className="flex items-center gap-2.5 text-brand-blue mb-2">
                <Heart className="w-5 h-5 fill-brand-blue/25 text-brand-blue" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                  Ma philosophie
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-app-text leading-snug">
                Construire des produits, pas seulement des interfaces.
              </h3>

              <p className="text-sm text-app-text-muted leading-relaxed font-medium">
                Je ne vois pas une application comme une simple interface, mais comme un produit complet
                qui doit être fonctionnel, rapide et agréable à utiliser. Mon objectif est de créer des
                expériences où la technique et le design travaillent ensemble.
              </p>

              <p className="text-sm text-app-text-muted leading-relaxed font-medium">
                Les interactions, les transitions et les détails d’interface jouent un rôle important dans
                l’expérience globale. Je cherche à rendre chaque produit fluide, cohérent et intuitif.
              </p>

              {/* PARCOURS */}
              <p className="text-sm text-app-text-muted leading-relaxed font-medium">
                Avant de me spécialiser dans le développement full-stack, j’ai commencé avec une forte curiosité
                pour la création de produits numériques, ce qui m’a conduit à travailler sur des projets web et mobiles complets.
              </p>
            </div>

            {/* Badge */}
            <div className="flex items-center gap-4 bg-app-surface p-4 rounded-2xl border border-app-border mt-3 shadow-inner">
              <div className="w-11 h-11 rounded-xl bg-brand-yellow flex items-center justify-center border border-brand-yellow/30 shadow-sm">
                <Award className="w-5 h-5 text-gray-900" />
              </div>

              <div className="text-left">
                <h4 className="font-bold text-sm text-app-text">
                  Développeur Full-Stack
                </h4>
                <p className="text-[10px] text-app-text-muted font-bold font-mono uppercase tracking-widest mt-0.5">
                  React • Next.js • NestJS • React Native
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARDS */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="premium-card p-6 flex items-start gap-4"
                >
                  <div
                    className={`p-2.5 rounded-xl border border-app-border ${card.color} ${card.accent} shadow-sm flex-shrink-0`}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="font-bold text-md text-app-text">
                      {card.title}
                    </h4>
                    <p className="text-xs text-app-text-muted font-medium leading-relaxed">
                      {card.description}
                    </p>
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