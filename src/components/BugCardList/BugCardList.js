import Drag from '../../common/components/Drag';
import BugCard from '../BugCard/BugCard';
import List from '../../common/components/List';

export default function BugCardList({ list, }) {
  const listItems = list.map((item, index) => (
    <Drag key={index} dataItem={item}>
      <BugCard item={item} />
    </Drag>
  ));

  return (
    <List list={listItems} />
  );
}
