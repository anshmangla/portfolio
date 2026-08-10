const fs = require('fs');
const path = require('path');

// Exact resume text from Ansh Mangla's B.Tech AI & ML resume
const textContent = `
ANSH MANGLA - AI/ML ENGINEER
Phone: 8287346252 | Email: anshmangla3107@gmail.com | LinkedIn: linkedin.com/in/anshmangla | GitHub: github.com/anshmangla

SUMMARY
Artificial Intelligence and Machine Learning developer with hands-on experience in developing ML models, Natural Language Processing (NLP) workflows, and data analysis pipelines. Proficient in AI/ML model development with a focus on emerging technologies including generative AI and Large Language Models (LLMs). Eager to apply skills to build impactful, data-driven solutions.

EDUCATION
MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY (2022 - 2026)
Bachelor of Technology (Artificial Intelligence and Machine Learning) | Cumulative GPA: 8.29
Relevant Coursework: Data Analysis; Software Engineering; Operating Systems; Artificial Intelligence

DELHI PUBLIC SCHOOL, ROHINI
CBSE Grade XII (2022): 94.2% | Grade X (2020): 93.2%

WORK EXPERIENCE
AI/ML INTERN - ESRI India Tech Pvt. Ltd. (Aug 2025 - Sep 2025; Noida, Uttar Pradesh)
- Developed multi-source geospatial query agents integrating shapefiles, POI data, and crime/news datasets to generate insights and interactive map visualizations.
- Built AI-driven tools including Grad-CAM for satellite imagery, a 2,000+ PDF RAG-based document assistant, news location extractor, and an RFP analyzer.

AI/ML INTERN - Optimal Virtual Employee (Oct 2024 - Dec 2024; Noida, Uttar Pradesh)
- Developed ML model (94% accuracy) to predict employee attrition and built a real-time productivity dashboard (Python, React.js), reducing turnover costs and manual tracking time by 60%+ through automation.

ACADEMIC & INTERNSHIP PROJECTS
- GOOGLE EARTH ENGINE ANALYTICS PLATFORM (June 2025): Dynamic generation of Google Earth Engine code through context-driven LLMs to answer environmental queries using live data and responsive UI. Server-side execution using E2B Sandbox.
- AI AUTOMATED PITCH DECK PARSER (Feb 2025): Built AI pitch deck parser (NLP/NER) with 92% accuracy, cutting manual analysis time by 70%. Deployed Django web app with real-time scorecards.
- MULTI-SOURCE GEOSPATIAL QUERY & RAG ASSISTANT: Enterprise RAG across 2,000+ technical documents and Grad-CAM explainable CV for satellite interpretation.
- EMPLOYEE ATTRITION PREDICTION DASHBOARD: Machine learning pipeline (94% accuracy) and React dashboard cutting tracking overhead by 60%+.

CERTIFICATIONS
- Machine Learning Specialization - DeepLearning.AI, Stanford University (2024)
- Web Development (HTML, CSS, JavaScript, Node, React, PostgreSQL, Web3 & DApps) - Udemy (2023)
- AI Agents and MCP Course - Udemy (2025)

TECHNICAL SKILLS
Languages & Scripting: Python, C++, C, SQL, JavaScript
AI/ML & Data Science: Pandas, Scikit-learn, TensorFlow, Hugging Face, OpenCV, LSTMs, NLP, Transformers, NER
GenAI & LLMs: Prompt Engineering, LangChain, Ollama, Whisper, pyttsx3, RAG, AI Agents, E2B Sandbox
Web Development: HTML, CSS, React.js, Node.js, PostgreSQL, Django, Flask
Languages Spoken: Fluent in English, Hindi; Elementary Proficiency in German
`;

// Simple PDF wrapper structure
const pdfContent = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length ${textContent.length + 200} >>
stream
BT
/F1 9 Tf
11.5 TL
40 750 Td
(${textContent.replace(/\n/g, ') Tj\nT* (')}) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000056 00000 n 
0000000113 00000 n 
0000000224 00000 n 
0000000500 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
570
%%EOF`;

const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
fs.writeFileSync(path.join(publicDir, 'Ansh_Mangla_Resume.pdf'), pdfContent);
console.log('Successfully generated public/Ansh_Mangla_Resume.pdf with college graduate details.');
