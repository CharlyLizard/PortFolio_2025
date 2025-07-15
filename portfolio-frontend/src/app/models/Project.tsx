export interface Project {
  id: number;
  name: string;
  description: string;
  languages: string[];
  frameworks: string[];
  technologies: string[];
  github: string;
  demo?: string;
  image: string;
  featured: boolean;
}