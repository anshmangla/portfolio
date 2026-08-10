import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BrainCircuit, Server, Layout, Database, Cloud, Wrench } from 'lucide-react';
import { skillsData } from '../data';
import { SectionHeading } from './ui';
import { cardReveal, staggerContainer } from '../animations/variants';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#3B82F6]" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-[#3B82F6]" />;
      case 'Server':
        return <Server className="w-5 h-5 text-[#3B82F6]" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-[#3B82F6]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-[#3B82F6]" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-[#3B82F6]" />;
      case 'Wrench':
      default:
        return <Wrench className="w-5 h-5 text-[#3B82F6]" />;
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <SectionHeading
          badge="Technical Skills"
          title="Architectural Capabilities & Expertise."
          description="Categorized stack without artificial progress bars or arbitrary percentages—just practical, production-verified proficiency."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((category) => (
            <motion.div
              key={category.id}
              variants={cardReveal}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-[#3B82F6]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-5 border-b border-white/[0.08] pb-4">
                  <div className="p-2.5 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 group-hover:scale-110 transition-transform duration-300">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <h3 className="text-lg font-bold font-heading text-white group-hover:text-[#3B82F6] transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Pill Technologies Container */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-xl bg-[#1A1A1A]/80 border border-white/10 hover:border-[#3B82F6]/60 hover:text-[#3B82F6] hover:bg-[#3B82F6]/10 hover:-translate-y-0.5 transition-all duration-200 text-xs sm:text-sm font-medium text-white/90 cursor-default shadow-sm"
                    >
                      {skill}
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
