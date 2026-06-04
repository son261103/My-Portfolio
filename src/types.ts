export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  type: string;
  description: string[];
  technologies: string[];
  link?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  period: string;
  github?: string;
  demoUrl?: string;
  adminUrl?: string;
  tags: string[];
  highlights: string[];
  description: string;
  image: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; info?: string }[];
}
