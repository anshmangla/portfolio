import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, Code2, ShieldCheck, TerminalSquare } from 'lucide-react';
import { aboutParagraph, aboutStats } from '../data';
import { SectionHeading } from './ui';
import { fadeIn, slideUp, staggerContainer, cardReveal } from '../animations/variants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <SectionHeading
          badge="About Me"
          title="Engineering AI Systems for the Real World."
          description="Bridging deep learning models with high-throughput production infrastructure."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column: Professional Photo Card Placeholder (5 cols) */}
          <motion.div variants={fadeIn} className="lg:col-span-5 relative">
            <div className="glass-card rounded-2xl p-4 sm:p-6 relative border border-white/10 shadow-2xl overflow-hidden group">
              {/* Decorative accent glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#3B82F6]/20 rounded-full blur-3xl pointer-events-none group-hover:bg-[#3B82F6]/30 transition-all duration-500" />
              
              {/* Photo Frame / Image Container */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#0A0A0A] border border-white/[0.08]">
                <img
                  src="/profile-photo.jpeg"
                  alt="Ansh Mangla AI Engineer"
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out opacity-90"
                />
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
                
                {/* Floating Stat Pill Overlay */}
                <div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-heading font-bold text-white text-base">Ansh Mangla</h4>
                      <p className="text-xs text-[#3B82F6] font-medium">AI/ML Engineer &bull; B.Tech Graduate</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-[#A3A3A3] block uppercase font-mono">MAIT GPA</span>
                      <span className="text-sm font-bold font-mono text-emerald-400">8.29 / 10</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Highlights */}
              <div className="mt-4 pt-4 border-t border-white/[0.06] grid grid-cols-2 gap-3 text-xs text-[#A3A3A3]">
                <div className="flex items-center gap-2">
                  <TerminalSquare className="w-4 h-4 text-[#3B82F6]" />
                  <span>AI/ML Developer</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>LangChain & RAG Expert</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Paragraph & Stats Grid (7 cols) */}
          <motion.div variants={slideUp} className="lg:col-span-7 flex flex-col justify-center">
            {/* Short Paragraph */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 mb-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#3B82F6]" />
              <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed font-normal">
                {aboutParagraph}
              </p>
              
              <div className="mt-6 flex flex-wrap gap-4 pt-6 border-t border-white/[0.06] text-xs font-semibold text-white/90">
                <span className="flex items-center gap-2 bg-[#141414] px-3 py-1.5 rounded-lg border border-white/[0.08]">
                  <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
                  Generative AI & LLMs
                </span>
                <span className="flex items-center gap-2 bg-[#141414] px-3 py-1.5 rounded-lg border border-white/[0.08]">
                  <Code2 className="w-3.5 h-3.5 text-[#3B82F6]" />
                  Computer Vision & OCR
                </span>
                <span className="flex items-center gap-2 bg-[#141414] px-3 py-1.5 rounded-lg border border-white/[0.08]">
                  <Award className="w-3.5 h-3.5 text-[#3B82F6]" />
                  Full-Stack Architecture
                </span>
              </div>
            </div>

            {/* Statistics Cards Grid */}
            <h3 className="text-sm uppercase font-semibold text-[#A3A3A3] tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              <span>Key Impact & Metrics</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
              {aboutStats.map((stat) => (
                <motion.div
                  key={stat.id}
                  variants={cardReveal}
                  className="glass-card p-5 sm:p-6 rounded-xl border border-white/10 flex flex-col justify-between group hover:border-[#3B82F6]/50 transition-all duration-300"
                >
                  <span className="text-3xl sm:text-4xl font-bold font-heading text-white group-hover:text-[#3B82F6] transition-colors">
                    {stat.value}
                  </span>
                  <div>
                    <span className="text-sm font-semibold text-white/90 block mt-2">
                      {stat.label}
                    </span>
                    <span className="text-[11px] text-[#A3A3A3] block mt-1 line-clamp-2">
                      {stat.description}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
