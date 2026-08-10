import type { EducationItem } from '../types';

export const educationData: EducationItem[] = [
  {
    id: 'edu-mait',
    institution: 'Maharaja Agrasen Institute of Technology',
    degree: 'Bachelor of Technology (Artificial Intelligence and Machine Learning)',
    duration: '2022 — 2026',
    location: 'New Delhi, India',
    coursework: [
      'Data Analysis',
      'Software Engineering',
      'Operating Systems',
      'Algorithms & Data Structures',
      'Artificial Intelligence',
      'Machine Learning & Deep Learning',
      'Natural Language Processing'
    ],
    gpa: '8.29 / 10.0'
  },
  {
    id: 'edu-dps',
    institution: 'Delhi Public School, Rohini',
    degree: 'CBSE — Grade XII & Grade X',
    duration: '2020 — 2022',
    location: 'New Delhi, India',
    coursework: [
      'Computer Science',
      'Mathematics',
      'Physics',
      'Chemistry'
    ],
    gpa: 'Grade XII (2022): 94.2% | Grade X (2020): 93.2%'
  }
];
