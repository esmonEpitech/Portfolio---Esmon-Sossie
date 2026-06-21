import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, User, MessageSquare, AtSign } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const infoCards = [
    {
      icon: Phone,
      label: "Téléphone",
      value: "+225 05 95 08 33 34",
      accent: "text-blue-500",
    },
    {
      icon: Mail,
      label: "Email",
      value: "esmon.sossie@epitech.eu",
      accent: "text-brand-orange",
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Abidjan, Côte d'Ivoire",
      accent: "text-green-500",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-app-bg/40 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-mono uppercase tracking-[0.4em] px-4 py-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/5 text-brand-blue inline-block mb-4"
          >
            Contact
          </motion.span>
         
           
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter"
          >
            Parlons de votre <span className="text-brand-blue italic">Projet</span>
          </motion.h2>
        </div>

         <div className="text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-mono uppercase tracking-[0.4em] px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/50 text-white inline-block mb-4"
          >
            Formulaire momentanément indisponible.
          </motion.span>
         </div>
        {/* FORMULAIRE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-app-surface/30 backdrop-blur-md border border-app-border rounded-[2.5rem] p-8 md:p-12 mb-10 shadow-2xl"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Champ Nom */}
             
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-app-text-muted ml-4">Nom complet</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-app-text-muted group-focus-within:text-brand-blue transition-colors" />
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-app-bg border border-app-border rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-brand-blue/50 transition-all"
                  />
                </div>
              </div>
              {/* Champ Email */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-app-text-muted ml-4">Adresse Email</label>
                <div className="relative group">
                  <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-app-text-muted group-focus-within:text-brand-blue transition-colors" />
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-app-bg border border-app-border rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-brand-blue/50 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Champ Message */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-app-text-muted ml-4">Votre Message</label>
              <div className="relative group">
                <MessageSquare className="absolute left-4 top-6 w-4 h-4 text-app-text-muted group-focus-within:text-brand-blue transition-colors" />
                <textarea 
                  rows={5}
                  placeholder="Comment puis-je vous aider ?"
                  className="w-full bg-app-bg border border-app-border rounded-3xl py-5 pl-12 pr-4 text-sm focus:outline-none focus:border-brand-blue/50 transition-all resize-none"
                />
              </div>
            </div>

            {/* Bouton Envoyer */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-auto px-10 py-4 bg-brand-blue text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20"
            >
              Envoyer le message <Send size={16} />
            </motion.button>
          </form>
        </motion.div>

        {/* PETITES CARTES D'INFO (NON CLIQUABLES) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {infoCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-app-surface/20 border border-app-border"
              >
                <div className={`w-10 h-10 rounded-xl bg-app-bg flex items-center justify-center border border-app-border`}>
                  <Icon className={`w-4 h-4 ${card.accent}`} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[9px] font-mono uppercase tracking-widest text-app-text-muted">{card.label}</p>
                  <p className="text-xs font-bold text-app-text truncate">{card.value}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}