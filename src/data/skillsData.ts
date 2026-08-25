import type { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    id: 'cat-ai',
    title: 'Artificial Intelligence',
    iconName: 'Sparkles',
    skills: [
      'Large Language Models (LLMs)',
      'LangChain & Ollama',
      'Retrieval-Augmented Generation (RAG)',
      'AI Agents & Workflows',
      'Prompt Engineering',
      'Natural Language Processing (NLP)'
    ]
  },
  {
    id: 'cat-ml',
    title: 'Machine Learning',
    iconName: 'BrainCircuit',
    skills: [
      'Scikit-learn',
      'Hugging Face Transformers',
      'TensorFlow & Neural Networks',
      'OpenCV & Computer Vision',
      'Pandas & NumPy'
    ]
  },
  {
    id: 'cat-backend',
    title: 'Backend',
    iconName: 'Server',
    skills: [
      'Python',
      'Node.js & TypeScript',
      'Django',
      'Flask & FastAPI',
      'Express.js',
      'C / C++'
    ]
  },
  {
    id: 'cat-frontend',
    title: 'Frontend',
    iconName: 'Layout',
    skills: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'HTML5 & CSS3',
      'Data Visualization (Chart.js)'
    ]
  },
  {
    id: 'cat-databases',
    title: 'Databases',
    iconName: 'Database',
    skills: [
      'PostgreSQL',
      'SQL / Relational Queries',
      'Vector Search',
      'Data Indexing'
    ]
  },
  {
    id: 'cat-cloud',
    title: 'Cloud',
    iconName: 'Cloud',
    skills: [
      'Microsoft Azure',
      'Cloudflare Caching & CDN',
      'Render & Vercel',
      'Git & GitHub Workflows',
      'Google Earth Engine API',
      'E2B Code Interpreter'
    ]
  }
];
