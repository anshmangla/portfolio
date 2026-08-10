import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Navbar,
  Footer,
  ScrollProgress,
  BackToTop,
} from './components';
import { Home, AllProjects } from './pages';
import { useActiveSection } from './hooks';

export const App: React.FC = () => {
  const sectionIds = [
    'hero',
    'about',
    'experience',
    'skills',
    'projects',
    'education',
    'contact'
  ];

  const activeSection = useActiveSection(sectionIds, 250);

  return (
    <Router>
      <div className="min-h-screen bg-[#0A0A0A] text-[#FFFFFF] font-sans antialiased selection:bg-[#3B82F6] selection:text-white relative overflow-x-hidden">
        {/* Top Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Sticky Navigation Bar */}
        <Navbar activeSection={activeSection} />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>

        {/* Footer */}
        <Footer />

        {/* Back to Top Floating Button */}
        <BackToTop />
      </div>
    </Router>
  );
};

export default App;
