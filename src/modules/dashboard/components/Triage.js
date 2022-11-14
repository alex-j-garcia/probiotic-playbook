import { useGlobalState } from '../../common/useGlobalState';
import BugCard from './BugCard';
import './Triage.css';

export default function Triage() {
  const [{ triage }] = useGlobalState();

  return (
    <div className='Triage troubleshooting'>
      {triage.length ?
        triage.map((item, index) => <BugCard key={index} species={item} />) :
        <p>No items found</p>
      }
    </div>
  );
}
