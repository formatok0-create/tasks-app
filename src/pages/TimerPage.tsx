import { TimerWidget } from '../components/widgets/TimerWidget';
import { TaskCard } from '../components/widgets/TaskCard';
import { useStore } from '../store/useStore';

export const TimerPage = () => {
  const toggleTaskStatus = useStore(state => state.toggleTaskStatus);
  const upNextTask = useStore(state => state.tasks.find(t => t.status !== 'DONE'));
  return (
    <div className="pb-8 min-h-[calc(100vh-100px)] flex flex-col pt-12 px-6">
      <header className="text-center mb-8">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-pink">
          Focus Session
        </h1>
        <p className="text-sm text-slate-400 mt-2">Minimize distractions and get back to work.</p>
      </header>

      <div className="flex-1 flex flex-col justify-center">
        <TimerWidget initialMinutes={25} />
      </div>

      <div className="mt-8">
        <h2 className="text-sm font-bold text-slate-400 mb-3 uppercase tracking-wider">Up Next</h2>
        {upNextTask ? (
          <TaskCard 
            task={upNextTask} 
            onToggleStatus={() => toggleTaskStatus(upNextTask.id)} 
          />
        ) : (
          <p className="text-slate-500 text-sm">No pending tasks.</p>
        )}
      </div>
    </div>
  );
};
