import React from 'react';
import type { Routine } from '../../types';

interface RoutineCardProps {
  routine: Routine;
  streak: number;
}

export const RoutineCard: React.FC<RoutineCardProps> = ({ routine, streak }) => {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const dashoffset = circumference - (routine.progress / 100) * circumference;

  return (
    <div className="glass-card rounded-xl p-4 flex flex-col justify-between hover:bg-white/5 transition-colors cursor-pointer min-w-[140px]">
      <div className="flex justify-between items-start mb-4">
        <div className="size-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${routine.color}20`, color: routine.color }}>
           <span className="material-symbols-outlined">{routine.id === 'morning' ? 'wb_sunny' : routine.id === 'evening' ? 'nights_stay' : 'fitness_center'}</span>
        </div>
        <div className="relative size-8 flex items-center justify-center">
          <svg className="size-full transform -rotate-90">
            <circle className="text-slate-500/20" cx="16" cy="16" fill="transparent" r={radius} stroke="currentColor" strokeWidth="3"></circle>
            <circle 
              cx="16" cy="16" fill="transparent" r={radius} 
              stroke={routine.color}
              strokeDasharray={circumference} 
              strokeDashoffset={dashoffset} 
              strokeLinecap="round" strokeWidth="3"
            ></circle>
          </svg>
        </div>
      </div>
      <div>
        <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">{routine.title}</h3>
        <div className="flex items-center gap-1 mt-1">
          <span className="material-symbols-outlined text-[12px] text-accent-pink">local_fire_department</span>
          <span className="text-xs text-slate-400">{streak} Day Streak</span>
        </div>
      </div>
    </div>
  );
};
