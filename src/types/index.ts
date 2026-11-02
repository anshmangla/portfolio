export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  architecture: string;
  features: string[];
  techStack: string[];
  challenges: string[];
  results: string[];
  gallery: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  metrics?: { label: string; value: string }[];
  category: 'GenAI' | 'Computer Vision' | 'Automation' | 'Platform';
  image: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  highlights?: string[];
}

export interface SkillCategory {
  id: string;
  title: 'Artificial Intelligence' | 'Machine Learning' | 'Backend' | 'Frontend' | 'Databases' | 'Cloud' | 'Tools';
  skills: string[];
  iconName: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  type: 'Internship' | 'Hackathon' | 'Certification' | 'Award' | 'Research';
  description: string;
  link?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  location: string;
  coursework: string[];
  gpa?: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  location: string;
  status: string;
  calendarUrl?: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  description: string;
}

export interface FreelanceDeliverable {
  type: 'Web Platform' | 'Mobile Application';
  title: string;
  platformBadge: string;
  description: string;
  techStack: string[];
  features: string[];
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
  codeUrl?: string;
}

export interface FreelanceItem {
  id: string;
  client: string;
  clientUrl?: string;
  projectTitle: string;
  badge: string;
  tagline: string;
  role: string;
  period: string;
  location: string;
  liveUrl?: string;
  overview: string;
  deliverables: FreelanceDeliverable[];
  impactHighlights: string[];
}

