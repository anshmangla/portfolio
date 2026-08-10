import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'google-earth-engine-analytics',
    title: 'AI-Powered Google Earth Engine Analytics Platform',
    shortDescription: 'AI-powered geospatial analytics platform that converts natural-language questions into Google Earth Engine workflows. Uses LLMs for parameter extraction, dataset selection, dynamic code generation, and result interpretation.',
    fullDescription: 'Built an AI-powered geospatial analytics platform that allows users to interact with Google Earth Engine through natural-language queries instead of manually writing scripts. The platform combines a React and TypeScript frontend with a Python/Flask backend and a multi-stage LLM orchestration pipeline that converts user questions into executable analysis workflows. The system dynamically generates GEE Python code, executes it in an isolated sandbox, performs statistical analysis, and uses an LLM to translate results into human-readable insights.',
    problem: 'Traditional Google Earth Engine workflows require users to understand Earth Engine APIs, dataset identifiers, geospatial operations, and scripting before they can perform an analysis, locking non-technical users out of critical satellite insights.',
    solution: 'The platform abstracts this complexity by allowing natural language queries. A multi-stage AI pipeline translates the intent into parameters, dynamically generates and executes the required GEE code, and provides clear explanations.',
    architecture: '1. Parameter Extraction -> 2. Dataset Selection -> 3. Dynamic GEE Code Generation -> 4. Isolated Execution (E2B Sandbox) -> 5. Programmatic Statistical Analysis -> 6. LLM Interpretation (Groq Llama 3.3).',
    features: [
      'Natural-language interface with interactive map-based location selection',
      'Dynamic Google Earth Engine Python code generation and execution in an isolated E2B Sandbox',
      'Parallelized time-series data retrieval and automated statistical anomaly detection',
      'LLM-generated interpretation of statistical results providing human-readable environmental findings',
      'Modular dataset configuration through JSON and instruction files'
    ],
    techStack: ['React', 'TypeScript', 'Python', 'Flask', 'Google Earth Engine', 'Groq (Llama 3.3)', 'E2B Code Interpreter', 'Scikit-learn', 'Statsmodels'],
    challenges: [
      'Designing an orchestration pipeline that uses LLMs primarily for reasoning and code generation while keeping numerical analysis deterministic and programmatic.',
      'Dynamically dividing long date ranges and parallelizing GEE data retrieval to reduce synchronous bottleneck latency.'
    ],
    results: [
      'Built a fully modular AI-driven analysis pipeline that supports adding new datasets without restructuring the application logic.',
      'Separated query interpretation, dataset selection, code generation, and execution into distinct processing stages.',
      'Enabled seamless environmental insights through interactive Recharts visualizations and actionable AI suggestions.'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1600&q=80'
    ],
    githubUrl: 'https://github.com/anshmangla/gee',
    demoUrl: 'https://github.com/anshmangla/GEEUI',
    featured: true,
    category: 'GenAI',
    metrics: [
      { label: 'Code Gen Speed', value: 'Sub-second' },
      { label: 'Execution Sandbox', value: 'E2B Cloud' },
      { label: 'Data Source', value: 'Live GEE' }
    ],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'ai-automated-pitch-deck-parser',
    title: 'AI-Powered Pitch Deck Analyzer',
    shortDescription: 'Developed a Django-based AI application that leverages Ollama\'s Llama 3.2 model to automatically analyze startup pitch deck PDFs and extract structured business insights.',
    fullDescription: 'The AI-Powered Pitch Deck Analyzer is a full-stack web application that automates the evaluation and structuring of startup pitch decks using Large Language Models (LLMs). Built using Django and PostgreSQL, the system provides an end-to-end workflow for document upload, AI-powered analysis, structured data storage, and Excel export. Using Ollama enables privacy-preserving, offline document analysis while avoiding dependency on external APIs.',
    problem: 'Evaluating pitch decks manually is time-consuming and unstructured. The project aims to eliminate the need for reading lengthy presentations slide by slide to find critical investment parameters.',
    solution: 'The application leverages Ollama\'s Llama 3.2 model to extract key startup information from pitch decks, generating a comprehensive breakdown of company information, business model, market opportunity, and financial projections.',
    architecture: '1. Upload PDF -> 2. Extract Text -> 3. Ollama (Llama 3.2) Inference -> 4. Generate Insights -> 5. Store in PostgreSQL -> 6. Export to Excel / View on Web Interface.',
    features: [
      'AI-powered startup pitch deck analysis using Ollama (Llama 3.2) for privacy-preserving local inference',
      'Automated extraction of company profile, founders, market classification, and product value proposition',
      'Extraction of pain points, solutions, competitive advantages, and market opportunities',
      'Financial analysis including current financials, projections, and funding asks',
      'PostgreSQL-backed document and analysis storage with structured Excel export capabilities'
    ],
    techStack: ['Python', 'Django', 'Ollama (Llama 3.2)', 'Prompt Engineering', 'PostgreSQL', 'HTML/CSS', 'Gunicorn', 'WhiteNoise'],
    challenges: [
      'Integrating local LLM inference (Ollama) into a production-ready Django web application.',
      'Designing a prompt-driven extraction pipeline that reliably converts unstructured PDF content into structured business intelligence.'
    ],
    results: [
      'Developed a robust end-to-end workflow for document upload, AI analysis, storage, and export.',
      'Built a modular architecture extensible with OCR, vector search, or Retrieval-Augmented Generation (RAG).',
      'Included response logging and debugging utilities to continuously monitor and improve LLM output quality.'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80'
    ],
    githubUrl: 'https://github.com/anshmangla/pitchdeck',
    demoUrl: 'https://github.com/anshmangla/pitchdeck',
    featured: true,
    category: 'GenAI',
    metrics: [
      { label: 'Parser Accuracy', value: '92%' },
      { label: 'Time Saved', value: '70%' },
      { label: 'Framework', value: 'Django / NLP' }
    ],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'geospatial-rag-assistant',
    title: 'Multi-Source Geospatial Query & RAG Assistant',
    shortDescription: 'Built multi-source geospatial query agents and a 2,000+ PDF RAG document assistant with Grad-CAM satellite imagery interpretation.',
    fullDescription: 'Developed during my AI/ML engineering internship at ESRI India Tech Pvt. Ltd., this system unifies complex geospatial shapefiles, Point of Interest (POI) data, and news/crime datasets into intelligent query agents. It includes an enterprise RAG assistant capable of retrieving insights from over 2,000 complex documents and Grad-CAM visual tools for satellite interpretation.',
    problem: 'Geospatial analysts often work with siloed data: heavy shapefiles on one end, unstructured government reports and PDF contracts on the other, and raw satellite raster feeds requiring deep computer vision expertise.',
    solution: 'Created an integrated AI agent ecosystem that combines LangChain-powered RAG across 2,000+ PDFs with spatial query engines and Grad-CAM heatmaps to explain deep neural network predictions over satellite tiles.',
    architecture: 'Multi-source ingestion (Shapefiles, POI, News/Crime feeds) -> LangChain RAG index across 2,000+ PDFs using vector embeddings -> Grad-CAM explainable CV pipeline for satellite imagery -> FastAPI query router -> Interactive map visualizations.',
    features: [
      'Multi-source geospatial query agents integrating shapefiles, POI data, and news/crime feeds',
      'Enterprise RAG document assistant indexed across 2,000+ complex technical and RFP PDFs',
      'Grad-CAM visual explanation tools providing interpretable heatmaps for satellite imagery models',
      'Automated news location extractor and RFP analyzer for rapid decision making'
    ],
    techStack: ['Python', 'LangChain', 'RAG', 'Grad-CAM', 'OpenCV', 'Geospatial AI', 'FastAPI', 'Transformers'],
    challenges: [
      'Synchronizing high-dimensional vector similarity search across 2,000+ PDFs with real-time spatial coordinate filtering.',
      'Generating clear Grad-CAM heatmaps over multi-spectral satellite imagery.'
    ],
    results: [
      'Successfully indexed and queried over 2,000 technical PDF documents with sub-second retrieval.',
      'Empowered geospatial analysts to cross-reference satellite anomalies with local news and crime reports instantly.',
      'Delivered robust RFP analysis automation saving significant administrative effort.'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1600&q=80'
    ],
    githubUrl: 'https://github.com/anshmangla',
    demoUrl: 'https://github.com/anshmangla',
    featured: true,
    category: 'Computer Vision',
    metrics: [
      { label: 'PDF RAG Scale', value: '2,000+' },
      { label: 'CV Explainability', value: 'Grad-CAM' },
      { label: 'Data Integration', value: 'Multi-Source' }
    ],
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'employee-attrition-dashboard',
    title: 'Real-Time Employee Attrition & Productivity Dashboard',
    shortDescription: 'Developed machine learning model with 94% accuracy predicting employee attrition, coupled with a Python/React.js productivity dashboard reducing tracking time by 60%+.',
    fullDescription: 'Engineered during my AI/ML internship at Optimal Virtual Employee, this production system predicts employee turnover risks using machine learning models while automating organizational productivity tracking. By replacing tedious manual spreadsheet reporting with an intelligent Python and React.js web dashboard, the solution significantly reduced retention costs.',
    problem: 'High employee attrition and fragmented manual tracking methods cost organizations substantial resources while offering zero predictive foresight into workforce dissatisfaction.',
    solution: 'Built a predictive machine learning pipeline (Scikit-learn/Pandas) trained on organizational metrics achieving 94% accuracy, deployed behind a responsive React.js and Python real-time dashboard.',
    architecture: 'Data pre-processing & feature engineering (Pandas/NumPy) -> Predictive classification model (Scikit-learn) achieving 94% accuracy -> Python REST API backend -> Real-time interactive React.js web dashboard.',
    features: [
      'Machine learning classification model achieving verified 94% prediction accuracy on employee attrition',
      'Real-time automated productivity tracking dashboard built with Python and React.js',
      'Reduced manual administrative tracking time and turnover overhead by over 60%',
      'Interactive risk breakdowns and departmental trend analysis for proactive HR intervention'
    ],
    techStack: ['Python', 'React.js', 'Scikit-learn', 'Pandas', 'REST APIs', 'HTML/CSS', 'JavaScript'],
    challenges: [
      'Balancing class distribution in historical turnover datasets to prevent biased predictions toward dominant classes.',
      'Translating raw ML probability outputs into clean, intuitive dashboard visuals for non-technical managers.'
    ],
    results: [
      'Achieved 94% model accuracy in identifying high-risk employee attrition factors.',
      'Slashed manual productivity tracking and reporting overhead by over 60%.',
      'Enabled data-driven retention strategies that directly reduced departmental turnover.'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80'
    ],
    githubUrl: 'https://github.com/anshmangla',
    demoUrl: 'https://github.com/anshmangla',
    featured: true,
    category: 'Automation',
    metrics: [
      { label: 'Model Accuracy', value: '94%' },
      { label: 'Time Reduction', value: '60%+' },
      { label: 'Stack', value: 'Python / React' }
    ],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'bookvault',
    title: 'BookVault',
    shortDescription: 'Full-stack personal reading library with Google Books API integration, reading analytics, and PostgreSQL storage.',
    fullDescription: 'BookVault is a full-stack personal reading library for discovering books, recording reading history, writing notes and reviews, and exploring reading analytics. It uses the Google Books API for normalized book metadata while keeping API credentials securely on the server. Each authenticated user receives a private library stored in PostgreSQL.',
    problem: 'Keeping track of reading history, notes, and reviews across disparate platforms often lacks personalization, unified analytics, and privacy.',
    solution: 'Built a robust Node.js and Express platform that integrates with Google Books for rich metadata, implements custom PostgreSQL data schemas for private user libraries, and visualizes reading habits with Chart.js.',
    architecture: 'Browser (EJS/Bootstrap) -> Express App (Auth, Cache, Services) -> Google Books API & PostgreSQL DB.',
    features: [
      'Guided book discovery via Google Books API with caching and duplicate detection',
      'Personal library dashboard with sorting, filtering, and server-side pagination',
      'Detailed reading analytics including rating distributions, reading goals, and monthly charts',
      'Secure authentication using Passport.js with optional Google OAuth integration'
    ],
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'Google Books API', 'Passport.js', 'Chart.js', 'EJS', 'Bootstrap 5'],
    challenges: [
      'Handling sparse metadata and missing covers gracefully from external API sources.',
      'Structuring additive PostgreSQL migrations for features like soft-deletion and reading goals without data loss.'
    ],
    results: [
      'Delivered a fully responsive and keyboard-accessible web application with light and dark themes.',
      'Achieved robust error handling with centralized Express error logging and duplicate-submission protection.',
      'Successfully deployed the production environment on Render and Neon PostgreSQL.'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1600&q=80'
    ],
    githubUrl: 'https://github.com/anshmangla/BookVault',
    demoUrl: 'https://bookvault-elmm.onrender.com/',
    featured: true,
    category: 'Platform',
    metrics: [
      { label: 'Database', value: 'PostgreSQL' },
      { label: 'Integration', value: 'Google Books' },
      { label: 'Backend', value: 'Node/Express' }
    ],
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80'
  }
];
