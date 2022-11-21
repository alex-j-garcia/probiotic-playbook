import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Triage from '../BugTriage/BugTriage';
import BugBoard from '../BugBoard/BugBoard';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <main className='Dashboard'>
      <DashboardHeader />
      <Triage />
      <BugBoard />
    </main>
  );
}
