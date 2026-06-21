import { Project, Experience, SkillCategory } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "zenith-studio",
    title: "Zenith Canvas",
    role: "Lead Frontend Architect",
    context: "Conçu pour permettre aux designers et développeurs de co-créer des formes vectorielles minimalistes et de les exporter instantanément en composants Tailwind CSS et React.",
    technologies: ["React 19", "TypeScript", "Tailwind CSS", "Motion", "WebSockets"],
    features: [
      "Synchronisation multi-utilisateur en temps réel via WebSockets",
      "Génération automatique de composants React hautement optimisés",
      "Canevas de dessin infini avec zoom fluide et grille interactive",
      "Menus contextuels animés et adaptatifs selon les formes sélectionnées"
    ],
    challenges: "La manipulation de formes vectorielles complexes à haute fréquence de rafraîchissement provoquait des goulets d'étranglement de rendu au niveau de l'état global React de l'application.",
    result: "Optimisation de l'architecture du canevas en déchargeant les états transitoires vers des variables de référence (useRef) et en orchestrant le rendu graphique via requestAnimationFrame, réduisant les re-rendus React de 92% tout en maintenant 60fps constants sur mobile.",
    githubUrl: "https://github.com/alex-dev/zenith-canvas",
    demoUrl: "#demo-zenith",
    color: "#5B8DEF",
    image: "canvas"
  },
  {
    id: "aura-dashboard",
    title: "Aura Performance",
    role: "Product Engineer & Designer",
    context: "Un tableau de bord d'analyse de performance en temps réel pour conteneurs Cloud Run, focalisé sur la clarté de la donnée et l'absence totale de pollution visuelle.",
    technologies: ["React 19", "Tailwind CSS", "Motion", "Recharts", "Lucide"],
    features: [
      "Grilles bento modulaires et réorganisables par simple drag-and-drop",
      "Graphiques SVG de télémétrie réactifs avec filtres d'ombres esthétiques",
      "Système d'alertes instantanées et visuelles lors du dépassement de seuils",
      "Synchronisation locale automatique des préférences de mise en page"
    ],
    challenges: "Fournir un affichage de graphiques d'une netteté parfaite dans les deux thèmes (Clair et Dark) sans détériorer les ratios d'accessibilité de contraste pour les utilisateurs malvoyants.",
    result: "Création d'un ensemble de palettes adaptatives dynamiques injectées dans Recharts, certifiant un score d'accessibilité de contraste AA sur l'ensemble des graphiques et courbes présentés.",
    githubUrl: "https://github.com/alex-dev/aura-performance",
    demoUrl: "#demo-aura",
    color: "#6BA368",
    image: "dashboard"
  },
  {
    id: "motionkit",
    title: "Motion playground",
    role: "Full Stack UX Engineer",
    context: "Une aire de jeu en ligne interactive qui permet aux développeurs de concevoir, d'ajuster et de tester des animations basées sur la physique des ressorts (spring curves) en temps réel.",
    technologies: ["React 19", "Motion", "Vite", "JetBrains Mono", "Tailwind"],
    features: [
      "Curseurs de contrôle interactifs en temps réel (tension, friction, masse)",
      "Canevas de comparaison de mouvement avec tracés physiques en temps réel",
      "Exportation instantanée d'animations prêtes à l'emploi en JSON ou CSS",
      "Modèles d'animation (entrées, sorties, rebondissements) préconfigurés"
    ],
    challenges: "Simuler et tracer de manière performante le courbe mathématique exacte d'un ressort amorti à l'écran sans induire de décalage temporel avec les curseurs d'ajustement du panneau de contrôle.",
    result: "Calcul analytique direct de l'équation différentielle du ressort dans un composant Canvas isolé, réduisant le temps de calcul à moins de 0.5 milliseconde par variation de curseur.",
    githubUrl: "https://github.com/alex-dev/motionplayground",
    demoUrl: "#demo-playground",
    color: "#F4A261",
    image: "motion"
  },
  {
    id: "arca-reader",
    title: "Arca Modern Workspace",
    role: "UX & Core Developer",
    context: "Un organizeur et lecteur de documents techniques Markdown d'inspiration éditoriale, pensé pour s'intégrer délicatement dans les navigateurs modernes.",
    technologies: ["React 19", "TypeScript", "Tailwind CSS", "Motion", "Lucide Layouts"],
    features: [
      "Structure en volets rétractables avec transitions fluides",
      "Recherche par pertinence floue (fuzzy finder) indexée localement",
      "Styles typographiques soignés offrant un confort de lecture optimal",
      "Mode offline complet grâce au caching applicatif réutilisable"
    ],
    challenges: "La désinfection et le rendu de structures Markdown imbriquées et denses contenant de nombreux blocs de tableaux et de code complexes sur de très petits écrans mobiles.",
    result: "Conception d'un parser AST modulaire combiné à des structures CSS grid autogérées, supprimant tout débordement horizontal de page et garantissant un affichage optimal de bout en bout.",
    githubUrl: "https://github.com/alex-dev/arca-workspace",
    demoUrl: "#demo-arca",
    color: "#F26D6D",
    image: "reader"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    year: "2024 - Présent",
    role: "Lead Frontend Engineer",
    company: "Studio Pixel & Spring",
    description: [
      "Direction technique sur la conception d'applications d'envergure internationale avec React et Tailwind CSS.",
      "Conception d'un système de design unifié (design system), standardisant plus de 80 composants UI hautement interactifs avec Framer Motion.",
      "Optimisation des temps de chargement mobiles (Core Web Vitals) avec un score moyen passant de 71 à 98 sur PageSpeed.",
      "Accompagnement de l'équipe produit sur l'ergonomie, la psychologie de l'utilisateur et l'animation d'interfaces."
    ],
    icon: "Briefcase"
  },
  {
    id: "exp-2",
    year: "2022 - 2024",
    role: "Product Designer & Frontend Developer",
    company: "Aura Creative Tech",
    description: [
      "Conception visuelle globale d'outils SaaS de gestion de données et d'outils internes complexes.",
      "Développement d'interfaces responsives robustes, intégrant des cinématiques d'animation travaillées.",
      "Collaboration étroite avec les équipes d'ingénieurs back-end pour structurer et consommer des API légères et sécurisées."
    ],
    icon: "Sparkles"
  },
  {
    id: "exp-3",
    year: "2020 - 2022",
    role: "Intégrateur & UI Designer Intern",
    company: "Spark Agency",
    description: [
      "Création de sites promotionnels immersifs et de portfolios d'artistes riches en transitions animées.",
      "Apprentissage approfondi de l'accessibilité numérique (normes RGAA / WCAG) et de la typographie responsive."
    ],
    icon: "GraduationCap"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Développement Frontend",
    description: "La boîte à outils essentielle avec laquelle je construis des applications web véloces et bien typées.",
    icon: "Code2",
    skills: [
      { name: "React 19", color: "#5B8DEF", icon: "Layers" },
      { name: "TypeScript", color: "#5B8DEF", icon: "FileCode" },
      { name: "Tailwind CSS", color: "#6BA368", icon: "Palette" },
      { name: "Vite & Bun", color: "#F4A261", icon: "Zap" }
    ]
  },
  {
    title: "Animation & Expérience",
    description: "Donner vie aux écrans, guider le regard de l'utilisateur et soigner la fluidité matérielle.",
    icon: "Sparkles",
    skills: [
      { name: "Framer Motion", color: "#F4A261", icon: "Compass" },
      { name: "Micro-interactions", color: "#FFD166", icon: "Activity" },
      { name: "Design System", color: "#5B8DEF", icon: "Grid" },
      { name: "Ergonomie UX", color: "#F26D6D", icon: "Smile" }
    ]
  },
  {
    title: "Outils de design & Flow",
    description: "De la page blanche au composant pixel-perfect sous contrôle de version continu.",
    icon: "HeartHandshake",
    skills: [
      { name: "Figma Prototyping", color: "#F26D6D", icon: "PenTool" },
      { name: "Git & Versioning", color: "#1F2937", icon: "GitBranch" },
      { name: "Accessibilité Web", color: "#6BA368", icon: "Eye" },
      { name: "Performance SEO", color: "#FFD166", icon: "BarChart3" }
    ]
  }
];
