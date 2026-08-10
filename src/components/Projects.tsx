import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Sparkles } from 'lucide-react';
import { projectsData } from '../data';
import type { Project } from '../types';
import { SectionHeading, GithubIcon } from './ui';
import { ProjectModal } from './ProjectModal';
import { cardReveal, staggerContainer } from '../animations/variants';

export const Projects: React.FC<{ limit?: number }> = ({ limit }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'GenAI', 'Computer Vision', 'Automation', 'Platform'];

  let filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  const totalFiltered = filteredProjects.length;
  
  if (limit && limit > 0) {
    filteredProjects = filteredProjects.slice(0, limit);
  }

  return (
    <section id="projects" className="py-24 md:py-32 relative bg-[#0A0A0A]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <SectionHeading
          badge="Featured Engineering"
          title="Production Systems."
          description="High-impact products combining advanced engineering with scalable full-stack architectures. Click any card to view deep-dive technical specs."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#3B82F6] text-white shadow-lg shadow-[#3B82F6]/25'
                  : 'bg-[#141414] border border-white/10 text-[#A3A3A3] hover:text-white hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardReveal}
              onClick={() => setActiveProject(project)}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group cursor-pointer shadow-xl hover:border-[#3B82F6]/50 transition-all duration-300"
            >
              {/* Image Container with Zoom Animation */}
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#141414] border-b border-white/[0.08]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80" />

                  {/* Category Badge overlay */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#0A0A0A]/80 border border-white/10 text-[#3B82F6] text-xs font-semibold backdrop-blur-md uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      {project.category}
                    </span>
                  </div>

                  {/* Top-Right Expand Prompt */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0A0A0A]/80 border border-white/10 flex items-center justify-center text-white backdrop-blur-md opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-[#3B82F6]" />
                  </div>

                  {/* Quick Metrics Badges Overlay */}
                  {project.metrics && (
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2 overflow-x-auto pb-1">
                      {project.metrics.slice(0, 2).map((m, idx) => (
                        <div
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-[#0A0A0A]/85 border border-white/10 backdrop-blur-md text-xs font-mono"
                        >
                          <span className="text-[#A3A3A3] mr-1.5">{m.label}:</span>
                          <span className="text-[#3B82F6] font-bold">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-bold font-heading text-white group-hover:text-[#3B82F6] transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-[#A3A3A3] group-hover:text-[#3B82F6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-[#A3A3A3] leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-[#1A1A1A] border border-white/[0.08] text-xs font-medium text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="px-2 py-1 rounded-lg bg-white/5 text-xs text-[#A3A3A3]">
                        +{project.techStack.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Footer Bar */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="px-6 sm:px-8 py-4 border-t border-white/[0.06] bg-[#141414]/50 flex items-center justify-between"
              >
                <button
                  onClick={() => setActiveProject(project)}
                  className="text-xs sm:text-sm font-semibold text-[#3B82F6] hover:underline flex items-center gap-1"
                >
                  <span>Explore Architecture & Spec</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#1A1A1A] border border-white/10 hover:border-[#3B82F6]/50 hover:text-[#3B82F6] text-white/80 transition-colors"
                      aria-label="View Source Code"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/20 hover:bg-[#3B82F6] hover:text-white text-[#3B82F6] transition-all"
                      aria-label="Launch Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {limit && totalFiltered > limit && (
          <div className="mt-16 flex justify-center">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#141414] border border-white/10 text-white font-medium hover:bg-[#1A1A1A] hover:border-[#3B82F6]/50 hover:text-[#3B82F6] transition-all duration-300 shadow-lg group"
            >
              <span>View All Projects</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        )}
      </div>

      {/* Deep-Dive Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
