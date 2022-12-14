import DashboardHeader from '../DashboardHeader/DashboardHeader';
import BugTriage from '../BugTriage/BugTriage';
import BugBoard from '../BugBoard/BugBoard';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <main className='Dashboard'>
      <DashboardHeader />
      <BugTriage />
      <BugBoard />
    </main>
  );
}
