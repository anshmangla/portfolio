import type { ExperienceItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-sodhani',
    role: 'AI Product Engineer Intern',
    company: 'Sodhani Capital',
    duration: 'Jul 2026 — Sep 2026',
    location: 'Remote',
    description: [
      'Built Caplore’s financial data platform, automating market data, corporate filings, and exchange feeds for 4,600+ companies using Node.js, TypeScript, PostgreSQL, and Python.',
      'Engineered an AI fundamental analysis pipeline computing 50+ financial metrics and generating validated equity research reports using Gemini; deployed services on Azure with HTTPS and Cloudflare caching.',
      'Developed an automated financial OCR pipeline using Chandra OCR to extract and consolidate multi-year statements from annual reports into structured Excel, JSON, HTML, and Markdown outputs.'
    ],
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Python', 'Azure', 'Gemini', 'Chandra OCR', 'Cloudflare'],
    highlights: [
      'Automated market data feeds for 4,600+ companies',
      'Engineered AI fundamental analysis pipeline computing 50+ financial metrics',
      'Developed automated financial OCR pipeline for multi-year statements'
    ]
  },
  {
    id: 'exp-esri',
    role: 'AI/ML Intern',
    company: 'ESRI India Tech Pvt. Ltd.',
    duration: 'Aug 2025 — Sep 2025',
    location: 'Noida, Uttar Pradesh',
    description: [
      'Developed multi-source geospatial query agents integrating shapefiles, POI data, and crime/news datasets to generate insights and interactive map visualizations.',
      'Built AI-driven tools including Grad-CAM for satellite imagery interpretation, a 2,000+ PDF RAG-based document assistant, news location extractor, and an automated RFP analyzer.'
    ],
    technologies: ['Python', 'LangChain', 'RAG', 'Grad-CAM', 'OpenCV', 'Geospatial AI', 'Transformers', 'FastAPI'],
    highlights: [
      'Integrated shapefiles, POI data, and crime/news datasets for interactive map generation',
      'Deployed 2,000+ document RAG assistant and Grad-CAM satellite imagery tools'
    ]
  },
  {
    id: 'exp-ove',
    role: 'AI/ML Intern',
    company: 'Optimal Virtual Employee',
    duration: 'Oct 2024 — Dec 2024',
    location: 'Noida, Uttar Pradesh',
    description: [
      'Developed machine learning model with 94% accuracy to predict employee attrition and built a real-time productivity dashboard using Python and React.js.',
      'Reduced organizational turnover costs and manual tracking time by 60%+ through intelligent workflow automation and automated data reporting.'
    ],
    technologies: ['Python', 'React.js', 'Scikit-learn', 'Pandas', 'REST APIs', 'Data Analysis', 'Automation'],
    highlights: [
      'Achieved 94% prediction accuracy for employee attrition',
      'Cut manual tracking overhead by 60%+ with Python & React.js real-time dashboard'
    ]
  }
];
