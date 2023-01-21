import { useGlobalState } from '../../common/hooks/useGlobalState';
import BugCard from '../BugCard/BugCard';
import List from '../../common/components/List';
import Button from '../../common/components/Button';

export default function BugCardList() {
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

  return <List list={cards} />;
}
