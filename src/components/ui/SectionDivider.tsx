import React from 'react';

export const SectionDivider: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`w-full relative py-6 flex items-center justify-center overflow-hidden pointer-events-none ${className}`}>
      {/* Base subtle horizontal gradient line */}
      <div className="w-full max-w-[1200px] h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent relative">
        {/* Center blue glow beam */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-[2px] bg-gradient-to-r from-transparent via-[#3B82F6]/60 to-transparent blur-[1px]" />
        {/* Central accent point */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#3B82F6] shadow-[0_0_8px_#3B82F6]" />
      </div>
    </div>
  );
};
