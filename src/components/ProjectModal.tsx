import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Cpu, CheckCircle2, AlertTriangle, Trophy, Layers, Sparkles } from 'lucide-react';
import type { Project } from '../types';
import { modalBackdrop, modalContent } from '../animations/variants';
import { GithubIcon } from './ui';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'deepdive' | 'gallery'>('deepdive');

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        variants={modalBackdrop}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md overflow-y-auto"
      >
        <motion.div
          variants={modalContent}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
          className="glass-card w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/15 bg-[#141414] text-white shadow-2xl relative my-auto"
        >
          {/* Top Sticky Header */}
          <div className="sticky top-0 z-20 glass-nav px-6 sm:px-8 py-5 border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-xs font-semibold uppercase tracking-wider">
                {project.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-white">
                {project.title}
              </h2>
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#1A1A1A] border border-white/10 hover:border-[#3B82F6]/50 hover:text-[#3B82F6] transition-colors"
                  aria-label="GitHub Repository"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors shadow-lg shadow-[#3B82F6]/20"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              <button
                onClick={onClose}
                className="p-2.5 rounded-xl bg-[#1A1A1A] border border-white/10 text-[#A3A3A3] hover:text-white hover:border-white/30 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Navigation Tabs */}
          <div className="px-6 sm:px-8 pt-6 flex gap-4 border-b border-white/[0.06]">
            <button
              onClick={() => setActiveTab('deepdive')}
              className={`pb-3 text-sm font-semibold transition-colors relative ${
                activeTab === 'deepdive' ? 'text-[#3B82F6]' : 'text-[#A3A3A3] hover:text-white'
              }`}
            >
              <span>Architecture & Engineering Spec</span>
              {activeTab === 'deepdive' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3B82F6] rounded-full shadow-[0_0_8px_#3B82F6]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`pb-3 text-sm font-semibold transition-colors relative ${
                activeTab === 'gallery' ? 'text-[#3B82F6]' : 'text-[#A3A3A3] hover:text-white'
              }`}
            >
              <span>Visual Gallery ({project.gallery.length})</span>
              {activeTab === 'gallery' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3B82F6] rounded-full shadow-[0_0_8px_#3B82F6]" />
              )}
            </button>
          </div>

          {/* Modal Content Area */}
          <div className="p-6 sm:p-8 space-y-8">
            {activeTab === 'deepdive' ? (
              <>
                {/* Hero Banner Image */}
                <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
                </div>

                {/* Overview Paragraph */}
                <div>
                  <h3 className="text-sm uppercase font-semibold text-[#A3A3A3] tracking-wider mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#3B82F6]" />
                    <span>Executive Overview</span>
                  </h3>
                  <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                    {project.fullDescription}
                  </p>
                </div>

                {/* Problem vs Solution Split */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="glass-card p-6 rounded-2xl border border-red-500/20 bg-red-500/[0.02]">
                    <h4 className="text-sm font-bold text-red-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      <span>The Problem</span>
                    </h4>
                    <p className="text-sm text-[#A3A3A3] leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="glass-card p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.02]">
                    <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Our Solution</span>
                    </h4>
                    <p className="text-sm text-[#A3A3A3] leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* System Architecture */}
                <div className="glass-card p-6 rounded-2xl border border-white/10 bg-[#0A0A0A]/60">
                  <h3 className="text-sm uppercase font-semibold text-[#3B82F6] tracking-wider mb-3 flex items-center gap-2">
                    <Cpu className="w-4 h-4" />
                    <span>System Architecture Pipeline</span>
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-white/90 leading-relaxed bg-[#141414] p-4 rounded-xl border border-white/[0.06]">
                    {project.architecture}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-sm uppercase font-semibold text-[#A3A3A3] tracking-wider mb-4 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#3B82F6]" />
                    <span>Core Features & Capabilities</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-[#1A1A1A]/80 border border-white/[0.08] flex items-start gap-3"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#3B82F6] mt-1.5 flex-shrink-0" />
                        <span className="text-sm text-white/90 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Challenges & Engineering Results */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="glass-card p-6 rounded-2xl border border-white/10">
                    <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Technical Challenges Solved</span>
                    </h4>
                    <ul className="space-y-2 text-sm text-[#A3A3A3]">
                      {project.challenges.map((c, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-amber-400 font-mono text-xs mt-0.5">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="glass-card p-6 rounded-2xl border border-[#3B82F6]/30 bg-[#3B82F6]/[0.03]">
                    <h4 className="text-sm font-bold text-[#3B82F6] uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Trophy className="w-4 h-4" />
                      <span>Quantitative Results & Impact</span>
                    </h4>
                    <ul className="space-y-2 text-sm text-white/90">
                      {project.results.map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#3B82F6] flex-shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <h3 className="text-xs uppercase font-semibold text-[#A3A3A3] tracking-wider mb-3">
                    Verified Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-[#141414] border border-white/10 text-xs font-semibold text-white/90"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              /* Visual Gallery View */
              <div className="space-y-6">
                <p className="text-sm text-[#A3A3A3]">
                  High-resolution snapshots illustrating user flows, architecture diagrams, and production dashboards.
                </p>
                <div className="grid grid-cols-1 gap-6">
                  {project.gallery.map((imgUrl, index) => (
                    <div
                      key={index}
                      className="w-full rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-xl group"
                    >
                      <img
                        src={imgUrl}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="sticky bottom-0 z-20 glass-nav px-6 sm:px-8 py-4 border-t border-white/[0.08] flex items-center justify-between">
            <span className="text-xs font-mono text-[#A3A3A3]">
              ID: {project.id} // SYSTEM: PRODUCTION
            </span>
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-semibold transition-colors"
            >
              Close Spec
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
