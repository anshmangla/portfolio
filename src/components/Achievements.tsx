import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, BookOpen, ExternalLink, ShieldCheck } from 'lucide-react';
import { achievementsData } from '../data';
import { SectionHeading } from './ui';
import { cardReveal, staggerContainer } from '../animations/variants';

export const Achievements: React.FC = () => {
  const getBadgeStyle = (type: string) => {
    switch (type) {
      case 'Hackathon':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'Research':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'Certification':
        return 'bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/20';
      case 'Award':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Internship':
      default:
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'Hackathon':
        return <Trophy className="w-4 h-4 text-amber-400" />;
      case 'Research':
        return <BookOpen className="w-4 h-4 text-purple-400" />;
      case 'Certification':
        return <ShieldCheck className="w-4 h-4 text-[#3B82F6]" />;
      case 'Award':
        return <Award className="w-4 h-4 text-emerald-400" />;
      default:
        return <Trophy className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="achievements" className="py-24 md:py-32 relative bg-[#0A0A0A]/60">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <SectionHeading
          badge="Honors & Recognition"
          title="Selected Achievements & Research."
          description="Competitive hackathon wins, peer-reviewed AI research publications, and specialized technical certifications."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievementsData.map((item) => (
            <motion.div
              key={item.id}
              variants={cardReveal}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-[#3B82F6]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge & Date */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-wider ${getBadgeStyle(
                      item.type
                    )}`}
                  >
                    {getIcon(item.type)}
                    <span>{item.type}</span>
                  </span>
                  <span className="text-xs font-mono text-[#A3A3A3]">{item.date}</span>
                </div>

                {/* Title & Organization */}
                <h3 className="text-lg font-bold font-heading text-white group-hover:text-[#3B82F6] transition-colors mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-white/80 mb-3">{item.organization}</p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Link optional */}
              {item.link && (
                <div className="mt-5 pt-4 border-t border-white/[0.06]">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3B82F6] hover:underline"
                  >
                    <span>View Publication / Code</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
