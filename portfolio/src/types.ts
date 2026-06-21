export interface Project {
  id: string;
  title: string;
  role: string;
  context: string;
  technologies: string[];
  features: string[];
  challenges: string;
  result: string;
  githubUrl: string;
  demoUrl: string;
  color: string; // Hex code for border/badge accent
  image: string; // Project illustration or icon representation
}

export interface Experience {
  id: string;
  year: string;
  role: string;
  company: string;
  description: string[];
  icon: string; // Lucide icon identifier
}

export interface Skill {
  name: string;
  color: string;
  icon: string; // Lucide icon identifier
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: Skill[];
}
