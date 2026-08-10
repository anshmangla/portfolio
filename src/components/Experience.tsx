import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data';
import { SectionHeading } from './ui';
import { slideUp, staggerContainer } from '../animations/variants';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative bg-[#0A0A0A]/50">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <SectionHeading
          badge="Experience"
          title="Career & Technical Track Record."
          description="Proven impact delivering scalable AI models and full-stack software across production environments."
        />

        <div className="relative mt-12">
          {/* Vertical connecting line */}
          <div className="absolute top-6 bottom-6 left-4 md:left-1/2 md:-translate-x-1/2 w-0.5 bg-gradient-to-b from-[#3B82F6] via-white/15 to-transparent" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-12"
          >
            {experienceData.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  variants={slideUp}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glowing Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-1.5 w-4 h-4 rounded-full bg-[#3B82F6] border-4 border-[#0A0A0A] shadow-[0_0_12px_#3B82F6] z-10" />

                  {/* Card Content Spacer for alternate side */}
                  <div className="hidden md:block md:w-1/2 md:px-10" />

                  {/* Timeline Card */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-10">
                    <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#3B82F6]/40 transition-all duration-300 relative group">
                      {/* Top Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.08] pb-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold font-heading text-white group-hover:text-[#3B82F6] transition-colors">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 mt-1 text-sm font-medium text-white/90">
                            <Briefcase className="w-4 h-4 text-[#3B82F6]" />
                            <span>{exp.company}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center sm:flex-col sm:items-end gap-2 text-xs text-[#A3A3A3]">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-white/80">
                            <Calendar className="w-3.5 h-3.5 text-[#3B82F6]" />
                            {exp.duration}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-[#A3A3A3]" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Description Bullets */}
                      <ul className="space-y-2.5 mb-6 text-sm text-[#A3A3A3]">
                        {exp.description.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-[#3B82F6] flex-shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies Pill Container */}
                      <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-[#141414] border border-white/10 text-xs font-medium text-white/80 hover:border-[#3B82F6]/50 hover:text-[#3B82F6] transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
