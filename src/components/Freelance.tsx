import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { freelanceData } from '../data';
import { SectionHeading } from './ui';
import { slideUp, staggerContainer } from '../animations/variants';

export const Freelance: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'mobile'>('all');

  return (
    <section id="freelance" className="py-24 md:py-32 relative bg-[#0A0A0A]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <SectionHeading
          badge="Freelance"
          title="Client Work & Commercial Deliverables."
          description="End-to-end full-stack systems and cross-platform mobile apps engineered for commercial clients, currently operating live in production."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {freelanceData.map((project) => (
            <motion.div
              key={project.id}
              variants={slideUp}
              className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 hover:border-[#3B82F6]/40 transition-all duration-300 relative shadow-2xl overflow-hidden group"
            >
              {/* Subtle Ambient Background Glow */}
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#3B82F6]/15 transition-all duration-500" />
              <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

              {/* Header: Client & Status */}
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.08] pb-6 mb-8">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Live in Production
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#1A1A1A] border border-white/10 text-[#A3A3A3] text-xs font-medium">
                      {project.role}
                    </span>
                    <span className="text-xs text-[#737373] font-mono">
                      {project.period} • {project.location}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight flex items-center gap-3">
                    {project.projectTitle}
                  </h3>
                  <p className="text-sm font-medium text-[#3B82F6] mt-1 flex items-center gap-1.5">
                    <Layers className="w-4 h-4" />
                    Client: {project.client}
                  </p>
                </div>

                {project.liveUrl && (
                  <div className="flex items-center gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm font-semibold transition-all shadow-lg shadow-[#3B82F6]/20 hover:shadow-[#3B82F6]/40 hover:-translate-y-0.5"
                    >
                      <span>Visit Live Platform</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>

              {/* Project Overview */}
              <div className="relative z-10 mb-10">
                <p className="text-[#D4D4D4] text-base sm:text-lg leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* Key Impact & Production Results Highlights */}
              <div className="relative z-10 mb-10 p-5 sm:p-6 rounded-2xl bg-[#141414]/80 border border-white/[0.06]">
                <h4 className="text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#3B82F6]" />
                  Key Impact & Production Milestones
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {project.impactHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                      <span className="text-sm text-[#E5E5E5] leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverable Selector Tabs */}
              <div className="relative z-10 flex items-center gap-2 mb-6 border-b border-white/[0.08] pb-4">
                <span className="text-xs font-semibold text-[#737373] uppercase tracking-wider mr-2">
                  Deliverables:
                </span>
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'all'
                      ? 'bg-white/10 text-white border border-white/20'
                      : 'text-[#A3A3A3] hover:text-white'
                  }`}
                >
                  Both (Web + Mobile)
                </button>
                <button
                  onClick={() => setActiveTab('web')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'web'
                      ? 'bg-[#3B82F6]/20 text-[#60A5FA] border border-[#3B82F6]/40'
                      : 'text-[#A3A3A3] hover:text-white'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                  Web Platform
                </button>
                <button
                  onClick={() => setActiveTab('mobile')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'mobile'
                      ? 'bg-[#3B82F6]/20 text-[#60A5FA] border border-[#3B82F6]/40'
                      : 'text-[#A3A3A3] hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  Mobile App
                </button>
              </div>

              {/* Deliverables Grid */}
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
                {project.deliverables
                  .filter((item) => {
                    if (activeTab === 'web') return item.type === 'Web Platform';
                    if (activeTab === 'mobile') return item.type === 'Mobile Application';
                    return true;
                  })
                  .map((deliv, index) => {
                    const isWeb = deliv.type === 'Web Platform';
                    return (
                      <div
                        key={index}
                        className="rounded-2xl p-6 bg-[#0E0E0E] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between"
                      >
                        <div>
                          {/* Deliverable Header */}
                          <div className="flex items-center justify-between gap-3 mb-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-[#171717] border border-white/10 flex items-center justify-center text-[#3B82F6]">
                                {isWeb ? (
                                  <Globe className="w-5 h-5" />
                                ) : (
                                  <Smartphone className="w-5 h-5" />
                                )}
                              </div>
                              <div>
                                <h5 className="text-lg font-bold text-white font-heading">
                                  {deliv.title}
                                </h5>
                                <span className="text-xs text-[#A3A3A3] font-mono">
                                  {deliv.platformBadge}
                                </span>
                              </div>
                            </div>
                            {deliv.liveUrl && isWeb && (
                              <a
                                href={deliv.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#A3A3A3] hover:text-white transition-colors"
                                title="Open Live Site"
                              >
                                <ArrowUpRight className="w-4 h-4" />
                              </a>
                            )}
                          </div>

                          <p className="text-sm text-[#A3A3A3] mb-5 leading-relaxed">
                            {deliv.description}
                          </p>

                          {/* Key Features */}
                          <div className="space-y-2 mb-6">
                            <span className="text-[11px] font-semibold text-[#737373] uppercase tracking-wider block">
                              Architecture & Features:
                            </span>
                            {deliv.features.map((feature, fIdx) => (
                              <div key={fIdx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0 mt-1.5" />
                                <span className="text-xs text-[#D4D4D4] leading-relaxed">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          {/* Metrics Pill Grid */}
                          {deliv.metrics && deliv.metrics.length > 0 && (
                            <div className="grid grid-cols-3 gap-2 mb-5 p-3 rounded-xl bg-[#141414] border border-white/5 text-center">
                              {deliv.metrics.map((m, mIdx) => (
                                <div key={mIdx}>
                                  <span className="block text-xs font-bold text-white">
                                    {m.value}
                                  </span>
                                  <span className="block text-[10px] text-[#737373] uppercase tracking-wider">
                                    {m.label}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Tech Stack Pills */}
                          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                            {deliv.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 rounded-md bg-[#181818] border border-white/[0.08] text-xs font-medium text-[#A3A3A3]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
