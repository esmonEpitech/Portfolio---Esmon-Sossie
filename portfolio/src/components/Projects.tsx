import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"; 
import { Github, ExternalLink, X, CheckCircle, Code2, Layers } from "lucide-react";

// 1. Interface
interface Project {
  id: number;
  title: string;
  role: string;
  context: string;
  technologies: string[];
  features: string[];
  challenges: string;
  result: string;
  githubUrl: string;
  demoUrl: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "ROTTEN ORANGE",
    role: "Full-stack",
    context: "Plateforme cinématographique avec gestion utilisateur, avis critiques et interface d'administration complète.",
    technologies: ["NestJS", "Next.js", "MongoDB", "Tailwind CSS"],
    features: ["Authentification JWT", "Système de notation", "Dashboard Admin", "Streaming Preview"],
    challenges: "Gestion de l'authentification et synchronisation temps réel des avis.",
    result: "Une expérience utilisateur fluide typée streaming moderne.",
    githubUrl: "#",
    demoUrl: "#",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "SHOWTIME",
    role: "Frontend",
    context: "Solution de billetterie événementielle spécialisée dans les concerts avec génération de QR codes.",
    technologies: ["NestJS", "Express", "Handlebars", "MongoDB"],
    features: ["Réservation de places", "Filtres avancés", "QR Code dynamique", "Favoris"],
    challenges: "Architecture du flux de réservation sécurisé.",
    result: "Système de ticketing robuste et responsive.",
    githubUrl: "#",
    demoUrl: "#",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "YOWL",
    role: "Full-stack",
    context: "Application collaborative permettant d'ajouter des avis et commentaires sur n'importe quel site web.",
    technologies: ["Laravel", "Vue.js", "MySQL", "Tailwind"],
    features: ["Système de vote", "Profils publics", "Extension de contenu", "Modération"],
    challenges: "Gestion des relations complexes en base de données (User/Post/Comment).",
    result: "Une plateforme sociale dynamique et scalable.",
    githubUrl: "#",
    demoUrl: "#",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "TRELLO CLONE",
    role: "Mobile",
    context: "Application de gestion de tâches inspirée de Trello utilisant l'API officielle pour synchroniser les boards.",
    technologies: ["React Native", "Expo", "REST API"],
    features: ["Gestion des Boards", "Drag & Drop", "Assignation membres", "Notifications"],
    challenges: "Optimisation des performances sur mobile avec de longues listes de cartes.",
    result: "Application mobile intuitive pour l'organisation quotidienne.",
    githubUrl: "#",
    demoUrl: "#",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "HUB STRATÉGIQUE",
    role: "Frontend",
    context: "Plateforme vitrine pour une structure d'accompagnement business et conseil stratégique.",
    technologies: ["React", "Tailwind", "Vercel"],
    features: ["Design system épuré", "Formulaires avancés", "Performance SEO", "Animation Framer"],
    challenges: "Mise en avant d'une identité visuelle forte et crédible.",
    result: "Site web haute performance convertissant les leads.",
    githubUrl: "#",
    demoUrl: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
];

interface ProjectCardProps {
  key?: React.Key;
  project: Project;
  onClick: () => void;
}

// --- SOUS-COMPOSANT POUR L'EFFET TILT ---
function ProjectCard({ project, onClick }: ProjectCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs pour lisser le mouvement et donner l'effet "balance"
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Transformation des coordonnées souris en degrés de rotation (max 10deg)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      id={`project-card-${project.id}`}
      className="group relative cursor-pointer rounded-3xl overflow-hidden border border-app-border bg-app-surface/60 backdrop-blur-md transition-all duration-500 shadow-2xl hover:border-brand-blue/30"
    >
      <div style={{ transform: "translateZ(20px)" }} className="aspect-[16/10] overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          id={`project-image-${project.id}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-app-bg via-app-bg/10 to-transparent opacity-85" />
      </div>

      <div style={{ transform: "translateZ(40px)" }} className="absolute bottom-0 left-0 right-0 p-8">
        <span className="text-brand-blue text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">{project.role}</span>
        <h3 className="text-2xl font-bold group-hover:text-brand-blue transition-colors text-app-text">{project.title}</h3>
        
        <div className="flex gap-3 mt-4">
          {project.technologies.slice(0, 3).map((t) => (
            <span key={t} className="text-[10px] text-app-text-muted font-medium">#{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// --- COMPOSANT PRINCIPAL ---
export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "unset";
  }, [selectedProject]);

  return (
    <section id="portfolio-section" className="relative min-h-screen py-24 px-4 md:px-8 bg-app-bg text-app-text overflow-hidden transition-colors duration-300">
      {/* Slow rotating organic blobs in the background, matching Hero style */}
      <div className="absolute top-1/4 -left-16 w-72 h-72 bg-brand-blue/15 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-16 w-80 h-80 bg-brand-orange/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-40 h-40 bg-brand-blue/5 opacity-40 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-brand-orange/5 opacity-40 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-20" id="header-container">
          <span id="label-tag" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue mb-4">
            <Code2 size={14} /> Projets
          </span>
          <h2 id="main-title" className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-app-text via-app-text to-app-text-muted bg-clip-text text-transparent">
            Mes réalisations.
          </h2>
          <p id="main-description" className="text-app-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            Une sélection de mes travaux, mêlant interfaces intuitives et solutions techniques robustes.
          </p>
        </div>

        {/* GRID PROJETS */}
        <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12" style={{ perspective: "1000px" }}>
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} onClick={() => setSelectedProject(p)} />
          ))}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedProject && (
            <div id="project-modal" className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                id="modal-backdrop"
                className="absolute inset-0 bg-black/80 dark:bg-black/95 backdrop-blur-xl"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                id="modal-content"
                className="relative w-full max-w-5xl max-h-[90vh] bg-app-surface rounded-[2.5rem] overflow-hidden border border-app-border shadow-2xl flex flex-col md:flex-row backdrop-blur-xl"
              >
                <div className="w-full md:w-1/2 h-64 md:h-auto bg-app-bg overflow-hidden relative" id="modal-image-wrapper">
                  <img src={selectedProject.image} className="w-full h-full object-cover" alt={selectedProject.title} />
                </div>

                <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto" id="modal-details">
                  <button 
                    onClick={() => setSelectedProject(null)} 
                    id="close-modal-btn"
                    className="absolute top-6 right-6 p-3 rounded-full bg-app-bg hover:bg-app-border/40 text-app-text transition-colors z-10 shadow-sm border border-app-border"
                  >
                    <X size={20} />
                  </button>

                  <div className="mb-10">
                    <span className="text-brand-blue font-mono text-xs uppercase tracking-widest mb-3 block">{selectedProject.role}</span>
                    <h2 className="text-4xl font-black mb-6 uppercase italic tracking-tight">{selectedProject.title}</h2>
                    <p className="text-app-text-muted leading-relaxed text-lg italic border-l-4 border-brand-blue pl-6">
                      {selectedProject.context}
                    </p>
                  </div>

                  <div className="space-y-10">
                    <div>
                      <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] mb-4 text-app-text-muted/65">
                        <Layers size={14} /> Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((t) => (
                          <span key={t} className="px-4 py-1.5 rounded-full bg-brand-blue/5 border border-brand-blue/20 text-brand-blue text-xs font-medium">{t}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-app-text-muted/65">Fonctionnalités</h3>
                      <ul className="grid grid-cols-1 gap-4">
                        {selectedProject.features.map((f) => (
                          <li key={f} className="flex items-center gap-3 text-sm text-app-text-muted">
                            <CheckCircle className="text-brand-blue shrink-0" size={18} /> {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-10 border-t border-app-border flex gap-4" id="modal-actions">
                      <a 
                        href={selectedProject.githubUrl} 
                        id="github-link"
                        className="flex-1 flex items-center justify-center gap-3 px-6 py-4 border border-app-border text-app-text rounded-2xl hover:bg-app-surface transition-all font-bold"
                      >
                        <Github size={20} /> Github
                      </a>
                      <a 
                        href={selectedProject.demoUrl} 
                        id="demo-link"
                        className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-brand-blue text-white rounded-2xl hover:opacity-90 transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)] font-bold"
                      >
                        <ExternalLink size={20} /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}