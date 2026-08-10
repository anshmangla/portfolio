import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { educationData } from '../data';
import { SectionHeading } from './ui';
import { slideUp, staggerContainer } from '../animations/variants';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 md:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <SectionHeading
          badge="Academic Background"
          title="Education & Foundations."
          description="Rigorous theoretical foundations in Computer Science, Artificial Intelligence, and Systems Engineering."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              variants={slideUp}
              className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden group hover:border-[#3B82F6]/40 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-[#3B82F6]" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.08] pb-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] flex-shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-[#3B82F6] transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-base font-semibold text-white/90 mt-1">{edu.institution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#A3A3A3]">
                  {edu.gpa && (
                    <span className="px-3 py-1 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] border border-[#3B82F6]/20 font-bold font-mono">
                      GPA: {edu.gpa}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-white/80">
                    <Calendar className="w-3.5 h-3.5 text-[#3B82F6]" />
                    {edu.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[#A3A3A3]">
                    <MapPin className="w-3.5 h-3.5 text-[#A3A3A3]" />
                    {edu.location}
                  </span>
                </div>
              </div>

              {/* Coursework Pills */}
              <div>
                <p className="text-xs uppercase font-semibold text-[#A3A3A3] tracking-wider mb-3 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>Key Coursework & Advanced Topics</span>
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1.5 rounded-xl bg-[#1A1A1A] border border-white/10 text-xs font-medium text-white/90 hover:border-[#3B82F6]/40 hover:text-[#3B82F6] transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
