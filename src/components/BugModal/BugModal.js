import { useGlobalState } from '../../common/hooks/useGlobalState';
import BugCard from '../BugCard/BugCard';
import Modal from '../../common/components/Modal';
import Button from '../../common/components/Button';

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

  return <Modal>{cards}</Modal>;
}
