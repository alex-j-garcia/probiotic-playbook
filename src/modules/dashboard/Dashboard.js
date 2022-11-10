import Header from './components/Header';
import Triage from './components/Triage';
import BugBoard from './components/BugBoard';

export default function Dashboard() {
  return (
    <main className='Dashboard'>
      <Header />
      <Triage />
      <BugBoard />
    </main>
  );
}
