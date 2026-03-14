import { TimelineBlock } from '../components/widgets/TimelineBlock';
import type { TimelineBlockData } from '../components/widgets/TimelineBlock';
import { DailyProgressWidget } from '../components/widgets/DailyProgressWidget';

export const Planning = () => {
  const blocks: TimelineBlockData[] = [
    { id: '1', title: 'Deep Work: UI Design', startTime: '09:00', endTime: '11:00', type: 'work', color: 'primary' },
    { id: '2', title: 'Daily Workout', startTime: '11:15', endTime: '12:00', type: 'routine', color: 'accent-orange' },
    { id: '3', title: 'Lunch Break & Walk', startTime: '12:00', endTime: '13:00', type: 'break', color: 'slate-500' },
    { id: '4', title: 'React Performance Tuning', startTime: '13:00', endTime: '14:30', type: 'training', color: 'accent-pink' },
    { id: '5', title: 'Client Sync', startTime: '15:00', endTime: '15:30', type: 'work', color: 'primary' },
  ];

  return (
    <div className="pb-8">
      <header className="px-6 py-4">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-pink">
          Daily Plan
        </h1>
        <p className="text-sm text-slate-400 mt-1">Thursday, March 24</p>
      </header>

      <section className="px-6 mb-6">
        <DailyProgressWidget />
      </section>

      <section className="px-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Timeline</h2>
          <button className="text-primary text-sm font-semibold flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">add</span> Add Block
          </button>
        </div>
        
        <div className="space-y-3 relative before:absolute before:inset-y-0 before:left-[35px] before:w-[2px] before:bg-primary/20 before:rounded-full">
          {blocks.map(block => (
            <div key={block.id} className="relative z-10 transition-transform hover:-translate-y-1">
              <TimelineBlock block={block} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
