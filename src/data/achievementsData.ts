import type { AchievementItem } from '../types';

export const achievementsData: AchievementItem[] = [
  {
    id: 'ach-1',
    title: '1st Place Winner — Autonomous Systems & AI Hackathon',
    organization: 'Global AI Summit & TechCrunch',
    date: '2024',
    type: 'Hackathon',
    description: 'Out of 250+ international teams, built a real-time multi-camera traffic anomaly engine in 48 hours using YOLOv8, Qdrant, and custom edge quantization pipelines.',
    link: 'https://github.com/anshmangla/verdantlens-anpr'
  },
  {
    id: 'ach-2',
    title: 'Co-Author: Synthetic Edge Augmentation for Computer Vision',
    organization: 'IEEE & International Machine Learning Symposium',
    date: '2023',
    type: 'Research',
    description: 'Published peer-reviewed research demonstrating a 300% improvement in OCR robustness under extreme weather conditions through generative diffusion data synthesis.'
  },
  {
    id: 'ach-3',
    title: 'Deep Learning & Advanced LLM Engineering Specialist',
    organization: 'DeepLearning.AI & Stanford Online',
    date: '2023',
    type: 'Certification',
    description: 'Completed rigorous specializations across Transformers, Multi-Modal Vision systems, LangChain production deployments, and distributed model fine-tuning.'
  },
  {
    id: 'ach-4',
    title: 'Cognitive AI Research & Engineering Fellowship',
    organization: 'National Foundation for Artificial Intelligence',
    date: '2023',
    type: 'Award',
    description: 'Awarded fellowship grant and high-performance GPU cluster access to develop open-source automated valuation models and agentic workflow orchestration frameworks.'
  },
  {
    id: 'ach-5',
    title: 'Core AI Engineer & Technical Lead Intern',
    organization: 'Cognitive Insights AI',
    date: 'Summer 2023',
    type: 'Internship',
    description: 'Led a 3-person prototype engineering squad to deliver an enterprise financial extraction product that closed a $2.5M customer pilot within 10 weeks.'
  }
];
