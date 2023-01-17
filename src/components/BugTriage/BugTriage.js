import { useGlobalState } from '../../common/hooks/useGlobalState';
import ThumbsUpButton from '../../common/components/ThumbsUpButton';
import ThumbsDownButton from '../../common/components/ThumbsDownButton';
import BugCard from '../BugCard/BugCard';
import Drag from '../../common/components/Drag';
import './BugTriage.css';

export default function Triage() {
  const [{
    triage,
  }, {
    removeFromTriage,
    addToImprove,
    addToGoingWell,
  }] = useGlobalState();

  function handleThumbsUpClick(item) {
    removeFromTriage(item);
    addToGoingWell(item);
  }

  function handleThumbsDownClick(item) {
    removeFromTriage(item);
    addToImprove(item);
  }

  const cards = triage.map((item, index) => (
    <Drag key={index} dataItem={item}>
      <BugCard item={item}>
        <ThumbsUpButton handleClick={() => handleThumbsUpClick(item)}/>
        <ThumbsDownButton handleClick={() => handleThumbsDownClick(item)}/>
      </BugCard>
    </Drag>
  ));

  return (
    <div className='Triage'>
      {cards.length ? cards : null}
    </div>
  );
}
