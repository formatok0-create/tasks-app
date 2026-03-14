import { create } from 'zustand';
import type { Task, Project, Routine } from '../types';

interface AppState {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  
  tasks: Task[];
  addTask: (task: Omit<Task, 'id' | 'status' | 'progress'>) => void;
  toggleTaskStatus: (taskId: string) => void;

  projects: Project[];
  routines: Routine[];
}

// Initial mockup data
const initialProjects: Project[] = [
  { id: '1', title: 'Design System v2', tasksRemaining: 4, progress: 70, color: 'primary' },
  { id: '2', title: 'Mobile App Launch', tasksRemaining: 12, progress: 35, color: 'accent-pink' },
  { id: '3', title: 'Quarterly Review', tasksRemaining: 1, progress: 90, color: 'accent-orange' },
];

const initialTasks: Task[] = [
  { id: 't1', title: 'Finish UI Component Library', status: 'IN_PROGRESS', progress: 50, projectId: '1' },
  { id: 't2', title: 'Review Q3 Metrics', status: 'TODO', progress: 0, projectId: '3' },
  { id: 't3', title: 'Draft Launch Email', status: 'DONE', progress: 100, projectId: '2' },
];

export const useStore = create<AppState>((set) => ({
  theme: 'dark',
  toggleTheme: () => set((state) => {
    const newTheme = state.theme === 'dark' ? 'light' : 'dark';
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    return { theme: newTheme };
  }),

  tasks: initialTasks,
  addTask: (taskData) => set((state) => ({
    tasks: [...state.tasks, { ...taskData, id: Math.random().toString(), status: 'TODO', progress: 0 }]
  })),
  toggleTaskStatus: (taskId) => set((state) => ({
    tasks: state.tasks.map(t => 
      t.id === taskId 
        ? { ...t, status: t.status === 'DONE' ? 'TODO' : 'DONE', progress: t.status === 'DONE' ? 0 : 100 } 
        : t
    )
  })),

  projects: initialProjects,
  routines: [
    { id: 'morning', title: 'Morning Setup', progress: 100, color: '#f47a25' },
    { id: 'workout', title: 'Daily Workout', progress: 50, color: '#f425b4' },
    { id: 'evening', title: 'Evening Review', progress: 0, color: '#af25f4' },
  ]
}));
