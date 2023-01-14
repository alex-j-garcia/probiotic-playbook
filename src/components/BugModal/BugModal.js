import { useGlobalState } from '../../common/hooks/useGlobalState';
import BugCard from '../BugCard/BugCard';
import Button from '../../common/components/Button';
import './BugModal.css';

export default function BugModal() {
  const [{
    modalList
  }, {
    addToTriage,
    removeFromModalList
  }] = useGlobalState();

  function handleClick(item) {
    addToTriage(item);
    removeFromModalList(item);
  }

  const cards = modalList.map((item, index) => (
    <BugCard key={index} item={item}>
      <Button handleClick={() => handleClick(item)}>+</Button>
    </BugCard>
  ));

  if (!modalList.length) return null;

  return (
    <div className='BugModal'>
      <div className='BugModal-content'>{cards}</div>
    </div>);
}
