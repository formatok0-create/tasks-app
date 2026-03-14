import { DailyProgressWidget } from '../components/widgets/DailyProgressWidget';
import { ProjectCard } from '../components/widgets/ProjectCard';
import { StatWidget } from '../components/widgets/StatWidget';
import { useStore } from '../store/useStore';

export const Dashboard = () => {
  const projects = useStore((state) => state.projects);

  return (
    <div className="pb-8">
      {/* Daily Progress Hero Widget */}
      <section className="px-6 py-4">
        <DailyProgressWidget />
      </section>

      {/* Active Projects */}
      <section className="px-6 py-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Active Projects</h2>
          <button className="text-primary text-sm font-semibold">See All</button>
        </div>
        <div className="space-y-4">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Quick Insights */}
      <section className="px-6 py-4 grid grid-cols-2 gap-4">
        <StatWidget 
          icon="bolt" 
          label="Streak" 
          value="12 Days" 
          iconColorClass="text-accent-pink" 
        />
        <StatWidget 
          icon="bedtime" 
          label="Sleep" 
          value="7.2h" 
          iconColorClass="text-accent-orange" 
        />
      </section>
    </div>
  );
};
