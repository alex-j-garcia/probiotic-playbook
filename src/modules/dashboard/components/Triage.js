import { useGlobalState } from '../../common/useGlobalState';
import BugCard from './BugCard';
import ThumbsUpButton from '../../common/ThumbsUpButton';
import ThumbsDownButton from '../../common/ThumbsDownButton';
import 'remixicon/fonts/remixicon.css';
import './Triage.css';

export default function Triage() {
  const [{ triage }] = useGlobalState();

  return (
    <div className='Triage troubleshooting'>
      {triage.length ?
        triage.map((item, index) => (
          <BugCard key={index} species={item}>
            <ThumbsUpButton />
            <ThumbsDownButton />
          </BugCard>
        )) :
        null
      }
    </div>
  );
}
