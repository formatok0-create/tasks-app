import React from 'react';

interface StatWidgetProps {
  icon: string;
  label: string;
  value: string;
  iconColorClass: string;
}

export const StatWidget: React.FC<StatWidgetProps> = ({ icon, label, value, iconColorClass }) => {
  return (
    <div className="glass-card rounded-xl p-4 flex flex-col items-start hover:bg-white/5 transition-colors cursor-pointer">
      <span className={`material-symbols-outlined ${iconColorClass} mb-2`}>{icon}</span>
      <p className="text-xs font-medium text-slate-400">{label}</p>
      <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{value}</p>
    </div>
  );
};
