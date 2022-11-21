import { useGlobalState } from '../../common/hooks/useGlobalState';
import BugCard from '../BugCard/BugCard';
import ThumbsUpButton from '../../common/components/ThumbsUpButton';
import ThumbsDownButton from '../../common/components/ThumbsDownButton';
import './BugTriage.css';

export default function Triage() {
  const [{
    triage
  }, {
    removeFromTriage,
    addToImprove,
    addToGoingWell
  }] = useGlobalState();

  function handleThumbsUpClick(item) {
    removeFromTriage(item);
    addToGoingWell(item);
  }

  function handleThumbsDownClick(item) {
    removeFromTriage(item);
    addToImprove(item);
  }

  return (
    <div className='Triage troubleshooting'>
      {triage.length ?
        triage.map((item, index) => (
          <BugCard key={index} item={item}>
            <ThumbsUpButton handleClick={() => handleThumbsUpClick(item)} />
            <ThumbsDownButton handleClick={() => handleThumbsDownClick(item)} />
          </BugCard>
        )) :
        null
      }
    </div>
  );
}
