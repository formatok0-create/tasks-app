import { RoutineCard } from '../components/widgets/RoutineCard';
import type { Routine } from '../types';

export const RoutinesPage = () => {
  const routines: Routine[] = [
    { id: 'morning', title: 'Morning Setup', progress: 100, color: '#f47a25' },
    { id: 'workout', title: 'Daily Workout', progress: 50, color: '#f425b4' },
    { id: 'evening', title: 'Evening Review', progress: 0, color: '#af25f4' },
  ];

  return (
    <div className="pb-8">
      <header className="px-6 py-4">
        <h1 className="text-2xl font-bold">Routines & Habits</h1>
        <p className="text-sm text-slate-400 mt-1">Keep the momentum going.</p>
      </header>

      <section className="px-6 py-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Today</h2>
        </div>
        
        {/* Horizontal scrollable container for Routines */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
          {routines.map((routine, i) => (
            <div key={routine.id} className="snap-start min-w-[200px]">
              <RoutineCard routine={routine} streak={12 - (i * 2)} />
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-4">
        <h2 className="text-lg font-bold mb-4">Habit Tracker</h2>
        <div className="glass-card rounded-xl p-6 border-primary/20">
          <p className="text-sm text-slate-400 text-center py-8">Monthly calendar view coming soon...</p>
        </div>
      </section>
    </div>
  );
};
