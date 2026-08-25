import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, Code2 } from 'lucide-react';
import { aboutParagraph, aboutStats } from '../data';
import { SectionHeading } from './ui';
import { slideUp, staggerContainer, cardReveal } from '../animations/variants';

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
          className="flex flex-col gap-10"
        >
          {/* Bio Paragraph */}
          <motion.div variants={slideUp} className="flex flex-col justify-center">
            <div className="glass-card p-6 sm:p-10 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#3B82F6]" />
              <p className="text-base sm:text-lg lg:text-xl text-[#A3A3A3] leading-relaxed font-normal">
                {aboutParagraph}
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4 pt-6 border-t border-white/[0.06] text-xs sm:text-sm font-semibold text-white/90">
                <span className="flex items-center gap-2 bg-[#141414] px-4 py-2 rounded-lg border border-white/[0.08]">
                  <Sparkles className="w-4 h-4 text-[#3B82F6]" />
                  Generative AI & LLMs
                </span>
                <span className="flex items-center gap-2 bg-[#141414] px-4 py-2 rounded-lg border border-white/[0.08]">
                  <Code2 className="w-4 h-4 text-[#3B82F6]" />
                  Computer Vision & OCR
                </span>
                <span className="flex items-center gap-2 bg-[#141414] px-4 py-2 rounded-lg border border-white/[0.08]">
                  <Award className="w-4 h-4 text-[#3B82F6]" />
                  Full-Stack Architecture
                </span>
              </div>
            </div>
          </motion.div>

          {/* Statistics Cards Grid */}
          <motion.div variants={slideUp}>
            <h3 className="text-sm uppercase font-semibold text-[#A3A3A3] tracking-wider mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              <span>Key Impact & Metrics</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-5">
              {aboutStats.map((stat) => (
                <motion.div
                  key={stat.id}
                  variants={cardReveal}
                  className="glass-card p-5 sm:p-6 rounded-xl border border-white/10 flex flex-col justify-between group hover:border-[#3B82F6]/50 transition-all duration-300"
                >
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white group-hover:text-[#3B82F6] transition-colors">
                    {stat.value}
                  </span>
                  <div className="mt-4">
                    <span className="text-sm font-semibold text-white/90 block">
                      {stat.label}
                    </span>
                    <span className="text-[11px] sm:text-xs text-[#A3A3A3] block mt-1.5 leading-relaxed line-clamp-3">
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
