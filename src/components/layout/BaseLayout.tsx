import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '../../utils/cn'; // Will create this

export const BaseLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'dashboard', icon: 'grid_view', path: '/' },
    { id: 'calendar', icon: 'calendar_month', path: '/planning' },
    { id: 'monitoring', icon: 'monitoring', path: '/stats' },
    { id: 'person', icon: 'person', path: '/profile' },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen pb-32">
      {/* Header */}
      <header className="flex items-center justify-between p-6 pt-8">
        <div className="flex items-center gap-3">
          <div className="relative size-12 rounded-full overflow-hidden border-2 border-primary/30">
            <div className="absolute inset-0 bg-primary/20"></div>
            <img 
              className="w-full h-full object-cover" 
              alt="User" 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=b6e3f4" 
            />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Good Morning</p>
            <h1 className="text-xl font-bold">Alex Rivers</h1>
          </div>
        </div>
        <button className="size-12 rounded-full glass-card flex items-center justify-center text-primary">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </header>

      {/* Main Content Area */}
      <main>
        <Outlet />
      </main>

      {/* Floating Quick Actions Bar */}
      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50">
        <div className="glass-card rounded-full p-2 flex items-center justify-between border-primary/30 shadow-2xl shadow-primary/20">
          <button onClick={() => navigate('/tasks/new')} className="flex-1 flex flex-col items-center justify-center gap-1 py-2 text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">add_task</span>
            <span className="text-[9px] font-bold uppercase tracking-tighter">Task</span>
          </button>
          
          <button onClick={() => navigate('/timer')} className="size-14 rounded-full glowing-gradient flex items-center justify-center text-white shadow-lg shadow-primary/40 -translate-y-4 border-4 border-background-dark">
            <span className="material-symbols-outlined scale-125">timer</span>
          </button>
          
          <button onClick={() => navigate('/routines')} className="flex-1 flex flex-col items-center justify-center gap-1 py-2 text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">sync</span>
            <span className="text-[9px] font-bold uppercase tracking-tighter">Routine</span>
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-xl border-t border-primary/10 px-6 py-4 flex justify-between items-center z-40">
        {navItems.map((item, index) => {
          if (index === 2) {
            return (
              <React.Fragment key="spacer">
                <div className="w-16"></div> {/* Spacer for floating button */}
                <button 
                  key={item.id}
                  onClick={() => navigate(item.path)}
                  className={cn(
                    "flex flex-col items-center gap-1 transition-colors",
                    location.pathname === item.path ? "text-primary" : "text-slate-500 hover:text-slate-300"
                  )}
                >
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: location.pathname === item.path ? "'FILL' 1" : "'FILL' 0" }}>
                    {item.icon}
                  </span>
                </button>
              </React.Fragment>
            );
          }
          return (
            <button 
              key={item.id}
              onClick={() => navigate(item.path)}
              className={cn(
                "flex flex-col items-center gap-1 transition-colors",
                location.pathname === item.path ? "text-primary" : "text-slate-500 hover:text-slate-300"
              )}
            >
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: location.pathname === item.path ? "'FILL' 1" : "'FILL' 0" }}>
                {item.icon}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
