import React from 'react';
import type { Task } from '../../types';
import { cn } from '../../utils/cn';

interface TaskCardProps {
  task: Task;
  onToggleStatus?: () => void;
  onClick?: () => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onToggleStatus, onClick }) => {
  const isDone = task.status === 'DONE';

  return (
    <div 
      onClick={onClick}
      className={cn(
        "glass-card rounded-xl p-4 flex items-center justify-between transition-all cursor-pointer",
        isDone ? "opacity-60" : "hover:bg-white/5"
      )}
    >
      <div className="flex items-center gap-4">
        <button 
          onClick={(e) => { e.stopPropagation(); onToggleStatus?.(); }}
          className={cn(
            "size-6 flex items-center justify-center rounded border-2 transition-colors",
            isDone 
              ? "bg-primary border-primary text-white" 
              : "border-slate-500 hover:border-primary text-transparent"
          )}
        >
          <span className="material-symbols-outlined text-[16px] font-bold">check</span>
        </button>
        <div>
          <h3 className={cn(
            "font-semibold text-sm",
            isDone ? "text-slate-400 line-through" : "text-slate-900 dark:text-slate-100"
          )}>
            {task.title}
          </h3>
          {!isDone && task.projectId && (
            <p className="text-xs text-primary mt-1">Project Name</p> // Mapped from state later
          )}
        </div>
      </div>
      
      {!isDone && (
         <button 
           className="size-8 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-primary transition-colors hover:border-primary/50"
         >
           <span className="material-symbols-outlined text-sm">play_arrow</span>
         </button>
      )}
    </div>
  );
};
