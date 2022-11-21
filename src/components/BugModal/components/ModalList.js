import BugCard from '../../BugCard/BugCard';
import Button from '../../../common/components/Button';

export default function ModalList({ list, handleClick }) {
  const modalList = list.map((item, index) => (
    <BugCard key={index} species={item}>
      <Button handleClick={() => handleClick(item)}>➕</Button>
    </BugCard>
  ));

  return (
    <>{modalList}</>
  );
}
