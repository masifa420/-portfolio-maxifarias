export interface SkillGroup {
  category: string;
  items: string[];
}

export interface WorkExperience {
  company: string;
  type: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface Certification {
  name: string;
  source: string;
  year?: number;
  inProgress?: boolean;
}

export interface CertGroup {
  group: string;
  items: Certification[];
}

export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  email: string;
  linkedin: string;
  summary: string;
  skills: SkillGroup[];
  experience: WorkExperience[];
  certifications: CertGroup[];
  competencies: string[];
  languages: { lang: string; level: string }[];
}
