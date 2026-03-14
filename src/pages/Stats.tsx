import { StatWidget } from '../components/widgets/StatWidget';
import { SkillCard } from '../components/widgets/SkillCard';

export const Stats = () => {
  return (
    <div className="pb-8">
      <header className="px-6 py-4">
        <h1 className="text-2xl font-bold">Insights & Stats</h1>
        <p className="text-sm text-slate-400 mt-1">Weekly Overview</p>
      </header>

      {/* Overview Grid */}
      <section className="px-6 py-4 grid grid-cols-2 gap-4">
        <StatWidget icon="bolt" label="Active Streak" value="12 Days" iconColorClass="text-accent-pink" />
        <StatWidget icon="bedtime" label="Avg Sleep" value="7.2h" iconColorClass="text-accent-orange" />
        <StatWidget icon="check_circle" label="Tasks Done" value="48" iconColorClass="text-primary" />
        <StatWidget icon="timer" label="Focus Time" value="38.5h" iconColorClass="text-accent-pink" />
      </section>

      {/* Focus Chart Placeholder */}
      <section className="px-6 py-4">
        <h2 className="text-lg font-bold mb-4">Productivity Trend</h2>
        <div className="glass-card rounded-xl p-6 h-48 flex items-end justify-between border-primary/20">
          {/* Simple simulated bar chart using HTML divs */}
          {[40, 70, 45, 90, 65, 80, 50].map((height, i) => (
            <div key={i} className="w-8 bg-primary/20 rounded-t-lg relative group transition-all hover:bg-primary/40 cursor-pointer" style={{ height: `${height}%` }}>
              <div 
                className="absolute bottom-0 w-full rounded-t-lg glowing-gradient transition-all duration-300"
                style={{ height: `${height * 0.8}%` }}
              />
              {/* Tooltip on hover */}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-background-dark text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {height}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Tracking */}
      <section className="px-6 py-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Skills Training</h2>
          <button className="text-primary text-sm font-semibold">Manage</button>
        </div>
        <div className="space-y-4">
          <SkillCard title="UI/UX Design Masterclass" hours={12.5} icon="brush" colorClass="text-primary" />
          <SkillCard title="Advanced React Patterns" hours={8.0} icon="code" colorClass="text-accent-pink" />
          <SkillCard title="Financial Markets" hours={4.5} icon="monitoring" colorClass="text-accent-orange" />
        </div>
      </section>
    </div>
  );
};
