import React from 'react';
import { cn } from '../../utils/cn';

interface TrainingCardProps {
  title: string;
  moduleCount: number;
  progress: number; // 0-100
  colorClass: string;
}

export const TrainingCard: React.FC<TrainingCardProps> = ({ title, moduleCount, progress, colorClass }) => {
  return (
    <div className="glass-card rounded-xl p-4 flex flex-col gap-3 cursor-pointer hover:bg-white/5 transition-colors">
      <div className="flex justify-between items-start">
        <div className={cn("size-12 rounded-xl flex items-center justify-center bg-primary/10", colorClass)}>
          <span className="material-symbols-outlined text-xl">school</span>
        </div>
        <div className="bg-background-dark/50 px-2 py-1 rounded text-[10px] font-bold text-slate-400">
          {moduleCount} Modules
        </div>
      </div>
      <div>
        <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">{title}</h3>
        <div className="mt-2 flex items-center justify-between text-xs text-slate-400 mb-1">
          <span>Progress</span>
          <span className="font-bold text-slate-300">{progress}%</span>
        </div>
        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
          <div 
            className={cn("h-full glowing-gradient")} 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
