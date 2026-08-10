import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, Cpu, Layers, Terminal, Activity, CheckCircle2 } from 'lucide-react';
import { contactData } from '../data';
import { fadeIn, slideUp, staggerContainer } from '../animations/variants';

export const Hero: React.FC = () => {
  const [viewMode, setViewMode] = useState<'node' | 'profile'>('node');

  const techPills = [
    'Python', 'LLMs', 'LangChain', 'React.js', 'Django',
    'NLP', 'Transformers', 'OpenCV', 'PostgreSQL', 'Git'
  ];

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-20 md:pt-16 md:pb-16 overflow-hidden bg-radial-gradient"
    >
      {/* Background Subtle Noise & Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      
      {/* Subtle glowing ambient orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-[#1D4ED8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-8 w-full relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Split Column (7 cols) */}
          <motion.div variants={slideUp} className="lg:col-span-7 flex flex-col justify-center">
            {/* Live System Status & Telemetry Ticker */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/25 text-[#3B82F6] text-xs sm:text-sm font-semibold tracking-wide">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span>AI/ML Engineer & Developer</span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141414] border border-white/10 text-xs font-mono text-[#A3A3A3]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-white/80">STATUS:</span>
                <span className="text-emerald-400 font-semibold">OPEN TO FULL-TIME ROLES</span>
              </div>
            </div>

            {/* Large Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-heading text-white tracking-tight leading-[1.08]">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#A3A3A3]">Ansh Mangla.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-xl sm:text-2xl font-medium text-[#3B82F6] font-heading tracking-wide">
              Engineering practical AI/ML solutions & NLP workflows.
            </p>

            {/* Small Introduction Paragraph */}
            <p className="mt-5 text-base sm:text-lg text-[#A3A3A3] leading-relaxed max-w-xl">
              Artificial Intelligence and Machine Learning developer with hands-on experience building end-to-end ML models, Natural Language Processing workflows, and RAG pipelines. B.Tech in AI & ML (8.29 GPA).
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#3B82F6] text-white font-semibold hover:bg-[#2563EB] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] transition-all duration-200 shadow-lg shadow-[#3B82F6]/25 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href={contactData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#141414] border border-white/10 text-white font-semibold hover:bg-[#1A1A1A] hover:border-[#3B82F6]/40 hover:text-[#3B82F6] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] transition-all duration-200"
              >
                <Download className="w-4 h-4 text-[#3B82F6]" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Technology Pills */}
            <div className="mt-12 pt-8 border-t border-white/[0.06]">
              <p className="text-xs uppercase font-semibold text-[#A3A3A3] tracking-wider mb-4 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>Core Engineering Stack</span>
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {techPills.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-[#141414] border border-white/[0.08] text-xs font-medium text-white/90 hover:border-[#3B82F6]/50 hover:text-[#3B82F6] transition-colors duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Split Column (5 cols) - Animated Sphere / Abstract Node Illustration */}
          <motion.div variants={fadeIn} className="lg:col-span-5 flex flex-col items-center justify-center relative mt-8 lg:mt-0">
            {/* Mode Selector Toggle for Recruiter exploration */}
            <div className="absolute -top-10 right-0 z-20 flex items-center gap-1 bg-[#141414]/90 border border-white/10 rounded-full p-1 backdrop-blur-md">
              <button
                onClick={() => setViewMode('node')}
                className={`px-3.5 py-1 rounded-full text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3B82F6] ${
                  viewMode === 'node'
                    ? 'bg-[#3B82F6] text-white shadow-sm'
                    : 'text-[#A3A3A3] hover:text-white'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-3 h-3" />
                  AI Core Sphere
                </span>
              </button>
              <button
                onClick={() => setViewMode('profile')}
                className={`px-3.5 py-1 rounded-full text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3B82F6] ${
                  viewMode === 'profile'
                    ? 'bg-[#3B82F6] text-white shadow-sm'
                    : 'text-[#A3A3A3] hover:text-white'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3 h-3" />
                  Architecture Spec
                </span>
              </button>
            </div>

            {viewMode === 'node' ? (
              /* Minimal Abstract Animated Sphere & Orbital Node System */
              <div className="relative w-full aspect-square max-w-[440px] flex items-center justify-center">
                {/* Outer orbital ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-4 rounded-full border border-dashed border-white/15"
                />
                
                {/* Inner orbital ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-16 rounded-full border border-white/10"
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#3B82F6] shadow-[0_0_12px_#3B82F6]" />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white/60" />
                </motion.div>

                {/* Central Gradient Sphere */}
                <motion.div
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-[#1D4ED8] via-[#3B82F6] to-white/20 p-0.5 shadow-[0_0_60px_-10px_rgba(59,130,246,0.5)] flex items-center justify-center relative"
                >
                  <div className="w-full h-full rounded-full bg-[#0A0A0A] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#3B82F6]/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
                    <Sparkles className="w-8 h-8 text-[#3B82F6] mb-2 relative z-10" />
                    <span className="font-heading font-bold text-lg text-white relative z-10">Ansh Mangla</span>
                    <span className="text-xs text-[#A3A3A3] mt-0.5 relative z-10">AI/ML Engineer</span>
                    <span className="mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-[#3B82F6]/20 text-[#3B82F6] border border-[#3B82F6]/30 relative z-10 flex items-center gap-1">
                      <Activity className="w-2.5 h-2.5" />
                      SYS://ACTIVE
                    </span>
                  </div>
                </motion.div>

                {/* Floating Node Badges */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute top-8 left-0 glass-card px-3.5 py-2 rounded-xl text-xs font-semibold text-white flex items-center gap-2 shadow-xl border border-white/10"
                >
                  <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                  <span>GenAI & RAG Pipelines</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute bottom-10 right-0 glass-card px-3.5 py-2 rounded-xl text-xs font-semibold text-white flex items-center gap-2 shadow-xl border border-white/10"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>94% Attrition ML Model</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                  className="absolute bottom-16 left-4 glass-card px-3 py-1.5 rounded-lg text-[11px] font-mono text-[#A3A3A3] border border-white/10 flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#3B82F6]" />
                  <span>2,000+ PDF RAG Assistant</span>
                </motion.div>
              </div>
            ) : (
              /* Professional Architecture Spec Card */
              <div className="w-full max-w-[440px] glass-card rounded-2xl p-6 sm:p-8 relative border border-white/10 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3B82F6] to-transparent" />
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center font-heading font-bold text-[#3B82F6]">
                      AM
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-white text-base">Ansh Mangla</h3>
                      <p className="text-xs text-[#A3A3A3]">AI/ML Engineer Profile Spec</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-medium">
                    B.Tech Graduate
                  </span>
                </div>

                <div className="space-y-4 text-xs font-mono">
                  <div className="flex justify-between items-center py-2 border-b border-white/[0.04]">
                    <span className="text-[#A3A3A3]">Primary Focus:</span>
                    <span className="text-white font-semibold">Generative AI, LLMs & RAG</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/[0.04]">
                    <span className="text-[#A3A3A3]">Computer Vision:</span>
                    <span className="text-white font-semibold">Grad-CAM & OpenCV</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/[0.04]">
                    <span className="text-[#A3A3A3]">Academic Status:</span>
                    <span className="text-[#3B82F6] font-semibold">B.Tech Graduate (MAIT)</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/[0.04]">
                    <span className="text-[#A3A3A3]">Full-Stack Engine:</span>
                    <span className="text-white font-semibold">Python + React.js & Django</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#A3A3A3]">
                  <span>Status: Open to Full-Time Roles</span>
                  <a href="#contact" className="text-[#3B82F6] hover:underline font-semibold">Get in touch &rarr;</a>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
