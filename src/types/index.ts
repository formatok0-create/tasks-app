export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'DONE';

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  progress: number; // 0-100
  projectId?: string;
}

export interface Project {
  id: string;
  title: string;
  tasksRemaining: number;
  progress: number;
  color: 'primary' | 'accent-pink' | 'accent-orange' | string;
}

export interface Routine {
  id: string;
  title: string;
  progress: number;
  color: string;
}
