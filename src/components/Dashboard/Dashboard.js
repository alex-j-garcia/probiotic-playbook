import { useGlobalState } from '../../common/hooks/useGlobalState';
import BugBoard from '../BugBoard/BugBoard';
import BugTriage from '../BugTriage/BugTriage';
import DropTarget from '../../common/components/DropTarget';
import './Dashboard.css';

export default function Dashboard() {
  const [ , { addToTriage } ] = useGlobalState();

  return (
    <DropTarget handlers={{ add: addToTriage, }}>
      <main className='Dashboard'>
        <BugTriage />
        <BugBoard />
      </main>
    </DropTarget>
  );
}
