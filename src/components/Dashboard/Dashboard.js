import Header from '../Header/Header';
import Triage from '../BugTriage/BugTriage';
import BugBoard from '../BugBoard/BugBoard';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <main className='Dashboard'>
      <Header />
      <Triage />
      <BugBoard />
    </main>
  );
}
