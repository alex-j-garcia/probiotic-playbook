import DragCard from '../BugCard/BugCard';
import List from '../../common/components/List';

export default function DragCardList ({ list, }) {
  const listItems = list.map((item, index) => (
    <DragCard key={index} item={item} />
  ));

  return <List list={listItems} />;
}
