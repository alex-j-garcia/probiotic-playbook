import { useGlobalState } from '../../common/hooks/useGlobalState';
import BugCard from '../BugCard/BugCard';
import ThumbsUpButton from '../../common/components/ThumbsUpButton';
import ThumbsDownButton from '../../common/components/ThumbsDownButton';
import './BugTriage.css';

export default function Triage() {
  const [{ 
    triage 
  }, { 
    addToBugBoard,
    removeFromTriage 
  }] = useGlobalState();

  function handleClick(item) {
    removeFromTriage(item);
    addToBugBoard(item);
  }

  return (
    <div className='Triage troubleshooting'>
      {triage.length ?
        triage.map((item, index) => (
          <BugCard key={index} species={item}>
            <ThumbsUpButton handleClick={() => (
              handleClick({ item, button: '👍' })
            )} />
            <ThumbsDownButton handleClick={() => (
              handleClick({ item, button: '👎' })
            )} />
          </BugCard>
        )) :
        null
      }
    </div>
  );
}
