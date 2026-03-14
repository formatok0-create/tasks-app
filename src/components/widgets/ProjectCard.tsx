import React from 'react';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  // Map color names to raw colors for SVG stroke or use Tailwind classes
  const strokeColorClass = 
    project.color === 'primary' ? 'text-primary' :
    project.color === 'accent-pink' ? 'text-accent-pink' :
    project.color === 'accent-orange' ? 'text-accent-orange' : 'text-primary';

  const borderColorClass = 
    project.color === 'primary' ? 'border-l-primary' :
    project.color === 'accent-pink' ? 'border-l-accent-pink' :
    project.color === 'accent-orange' ? 'border-l-accent-orange' : 'border-l-primary';

  // Calculate Dashoffset
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const dashoffset = circumference - (project.progress / 100) * circumference;

  return (
    <div 
      onClick={onClick}
      className={`glass-card rounded-xl p-4 flex items-center gap-4 border-l-4 ${borderColorClass} cursor-pointer hover:bg-white/5 transition-colors`}
    >
      <div className="relative size-12 flex items-center justify-center">
        <svg className="size-full transform -rotate-90">
          <circle className="text-primary/10" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeWidth="3"></circle>
          <circle 
            className={strokeColorClass}
            cx="24" cy="24" fill="transparent" r="20" 
            stroke="currentColor" 
            strokeDasharray={circumference} 
            strokeDashoffset={dashoffset} 
            strokeLinecap="round" 
            strokeWidth="3"
          ></circle>
        </svg>
        <span className="absolute text-[10px] font-bold">{project.progress}%</span>
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">{project.title}</h3>
        <p className="text-xs text-slate-400">{project.tasksRemaining} tasks remaining</p>
      </div>
      <span className="material-symbols-outlined text-slate-500">chevron_right</span>
    </div>
  );
};
