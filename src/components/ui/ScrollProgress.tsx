import React from 'react';
import { useScrollProgress } from '../../hooks';

export const ScrollProgress: React.FC = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] bg-transparent z-50 pointer-events-none">
      <div
        className="h-full bg-[#3B82F6] transition-all duration-150 ease-out shadow-[0_0_10px_#3B82F6]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
