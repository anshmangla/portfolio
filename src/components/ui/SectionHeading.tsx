import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  description,
  centered = false
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center mx-auto max-w-2xl' : ''}`}>
      {badge && (
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-xs font-semibold tracking-wider uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] pulse-glow"></span>
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-[#A3A3A3] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
