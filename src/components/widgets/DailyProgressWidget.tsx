import React from 'react';

interface CircularProgressProps {
  label: string;
  value: string;
  percentage: number;
  gradientId: string;
  gradientColors: { start: string; end: string };
}

const CircularProgress: React.FC<CircularProgressProps> = ({ label, value, percentage, gradientId, gradientColors }) => {
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const dashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative size-20 flex items-center justify-center">
        <svg className="size-full transform -rotate-90">
          <circle className="text-primary/10" cx="40" cy="40" fill="transparent" r={radius} stroke="currentColor" strokeWidth="6"></circle>
          <circle 
            cx="40" cy="40" fill="transparent" r={radius} 
            stroke={`url(#${gradientId})`} 
            strokeDasharray={circumference} 
            strokeDashoffset={dashoffset} 
            strokeLinecap="round" strokeWidth="6"
          ></circle>
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: gradientColors.start, stopOpacity: 1 }}></stop>
              <stop offset="100%" style={{ stopColor: gradientColors.end, stopOpacity: 1 }}></stop>
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute text-sm font-bold">{value}</span>
      </div>
      <span className="text-[10px] uppercase font-bold text-slate-400">{label}</span>
    </div>
  );
};

export const DailyProgressWidget = () => {
  return (
    <div className="glass-card rounded-xl p-6 relative overflow-hidden border-primary/20">
      <div className="absolute -top-24 -right-24 size-48 bg-primary/20 blur-3xl rounded-full"></div>
      
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-lg font-bold">Daily Progress</h2>
        <span className="text-xs font-semibold text-primary px-2 py-1 bg-primary/10 rounded-full">MARCH 24</span>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <CircularProgress 
          label="Tasks" 
          value="75%" 
          percentage={75} 
          gradientId="gradTask" 
          gradientColors={{ start: '#af25f4', end: '#f425b4' }} 
        />
        <CircularProgress 
          label="Routines" 
          value="90%" 
          percentage={90} 
          gradientId="gradRoutine" 
          gradientColors={{ start: '#f425b4', end: '#f47a25' }} 
        />
        <CircularProgress 
          label="Productive" 
          value="6.5h" 
          percentage={80} // Example static percentage
          gradientId="gradFocus" 
          gradientColors={{ start: '#f47a25', end: '#af25f4' }} 
        />
      </div>
    </div>
  );
};
