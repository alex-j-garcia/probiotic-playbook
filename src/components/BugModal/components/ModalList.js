import BugCard from '../../BugCard/BugCard';
import Button from '../../../common/components/Button';
import List from '../../../common/components/List';

export default function ModalList({ list, handleClick }) {
  const modalList = list.map((item, index) => (
    <BugCard key={index} item={item}>
      <Button handleClick={() => handleClick(item)}>+</Button>
    </BugCard>
  ));

  return <List list={modalList} display='flex' />;
}
