import React from 'react';

interface SkillCardProps {
  title: string;
  hours: number;
  icon: string;
  colorClass: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({ title, hours, icon, colorClass }) => {
  return (
    <div className="glass-card rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors">
      <div className="flex items-center gap-4">
        <div className={`size-10 rounded-xl flex items-center justify-center bg-primary/10 ${colorClass}`}>
          <span className="material-symbols-outlined text-lg">{icon}</span>
        </div>
        <div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">{title}</h3>
          <p className="text-xs text-slate-400">{hours}h this week</p>
        </div>
      </div>
      <span className="material-symbols-outlined text-slate-500">chevron_right</span>
    </div>
  );
};
