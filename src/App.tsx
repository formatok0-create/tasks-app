
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BaseLayout } from './components/layout/BaseLayout';
import { Dashboard } from './pages/Dashboard';
import { Planning } from './pages/Planning';
import { Stats } from './pages/Stats';
import { TimerPage } from './pages/TimerPage';
import { RoutinesPage } from './pages/RoutinesPage';
// import { Profile } from './pages/Profile';

const Placeholder = ({ title }: { title: string }) => (
  <div className="flex items-center justify-center p-8 text-slate-400 h-[calc(100vh-200px)]">
    <p>{title} Screen Coming Soon</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="planning" element={<Planning />} />
          <Route path="stats" element={<Stats />} />
          <Route path="profile" element={<Placeholder title="Profile" />} />
          <Route path="tasks/new" element={<Placeholder title="New Task" />} />
          <Route path="timer" element={<TimerPage />} />
          <Route path="routines" element={<RoutinesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
