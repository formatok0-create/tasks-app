import React from 'react';
import { cn } from '../../utils/cn';

export interface TimelineBlockData {
  id: string;
  title: string;
  startTime: string; // e.g., '09:00'
  endTime: string;   // e.g., '10:30'
  type: 'work' | 'routine' | 'break' | 'training';
  color: string;
}

interface TimelineBlockProps {
  block: TimelineBlockData;
  onClick?: () => void;
}

export const TimelineBlock: React.FC<TimelineBlockProps> = ({ block, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "glass-card rounded-xl p-3 flex gap-4 items-start cursor-pointer hover:bg-white/5 transition-colors border-l-4",
        block.type === 'work' ? 'border-l-primary' :
        block.type === 'training' ? 'border-l-accent-pink' :
        block.type === 'routine' ? 'border-l-accent-orange' : 'border-l-slate-500'
      )}
    >
      <div className="flex flex-col items-center justify-center min-w-[50px] font-medium text-xs text-slate-400">
        <span>{block.startTime}</span>
        <span className="text-[10px] text-slate-600 my-0.5">|</span>
        <span>{block.endTime}</span>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">{block.title}</h3>
        <p className="text-xs text-slate-500 capitalize">{block.type}</p>
      </div>
      <button className="text-slate-500 hover:text-white transition-colors">
        <span className="material-symbols-outlined text-sm">more_vert</span>
      </button>
    </div>
  );
};
