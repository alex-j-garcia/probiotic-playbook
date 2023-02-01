import { useGlobalState } from '../../common/hooks/useGlobalState';
import DragCard from '../DragCard/DragCard';
import DropTarget from '../../common/components/DropTarget';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import ThumbsUpButton from '../../common/components/ThumbsUpButton';
import ThumbsDownButton from '../../common/components/ThumbsDownButton';
import './BugTriage.css';

export default function Triage() {
  const [{
    triage,
  }, {
    removeFromTriage,
    addToImprove,
    addToGoingWell,
    addToTriage,
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
    <DragCard key={index} item={item}>
      <ThumbsUpButton handleClick={() => handleThumbsUpClick(item)}/>
      <ThumbsDownButton handleClick={() => handleThumbsDownClick(item)}/>
    </DragCard>
  ));

  return (
    <div className='BugTriage'>
      <DropTarget handlers={{ add: addToTriage, remove: removeFromTriage, }}>
        <DashboardHeader />
        <div className='BugTriage-content'>{cards}</div>
      </DropTarget>
    </div>
  );
}
