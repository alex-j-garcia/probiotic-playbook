import Badge from '../../common/components/Badge';
import './BugCard.css';

export default function BugCard({
  item,
  children = null,
}) {
  return (
    <div title={item.name} className='BugCard'>{item.name}
      <Badge type={item.type} />
      <div>{children}</div>
    </div>
  );
}
