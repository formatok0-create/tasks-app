import React, { useState, useEffect } from 'react';

interface TimerWidgetProps {
  initialMinutes?: number;
}

export const TimerWidget: React.FC<TimerWidgetProps> = ({ initialMinutes = 25 }) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const toggleTimer = () => setIsRunning(!isRunning);
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(initialMinutes * 60);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const progress = (timeLeft / (initialMinutes * 60)) * 100;
  const dashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-6 py-8">
      <div className="relative size-64 flex items-center justify-center">
        <svg className="size-full transform -rotate-90 drop-shadow-2xl">
          <circle className="text-primary/10" cx="128" cy="128" fill="transparent" r={radius} stroke="currentColor" strokeWidth="6"></circle>
          <circle 
            className="text-primary transition-all duration-1000 ease-linear"
            cx="128" cy="128" fill="transparent" r={radius} 
            stroke="url(#timerGrad)" 
            strokeDasharray={circumference} 
            strokeDashoffset={dashoffset} 
            strokeLinecap="round" strokeWidth="8"
          ></circle>
          <defs>
            <linearGradient id="timerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#f425b4', stopOpacity: 1 }}></stop>
              <stop offset="100%" style={{ stopColor: '#af25f4', stopOpacity: 1 }}></stop>
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="text-5xl font-bold font-display tracking-tighter text-slate-900 dark:text-white drop-shadow-md">
            {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
          </span>
          <span className="text-xs uppercase font-bold tracking-widest text-primary mt-2">Focus Session</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button 
          onClick={resetTimer}
          className="size-12 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined">refresh</span>
        </button>
        <button 
          onClick={toggleTimer}
          className="size-16 rounded-full glowing-gradient flex items-center justify-center text-white shadow-lg shadow-primary/40 hover:scale-105 transition-transform"
        >
          <span className="material-symbols-outlined text-3xl">
            {isRunning ? 'pause' : 'play_arrow'}
          </span>
        </button>
        <button className="size-12 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-white transition-colors">
          <span className="material-symbols-outlined">skip_next</span>
        </button>
      </div>
    </div>
  );
};
