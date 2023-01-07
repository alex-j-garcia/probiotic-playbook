import useCalcTextWidth from '../../common/hooks/useCalcTextWidth';
import Badge from '../../common/components/Badge';
import './BugCard.css';

export default function BugCard({
  item,
  children = null,
}) {
  const { name, type } = item;
  const clientWidth = useCalcTextWidth(name);
  return (
    <div className='BugCard'>
      <span title={clientWidth > 152 ? name : null}>{name}</span>
      <Badge type={type} />
      <div className='BugCard-children'>{children}</div>
    </div>
  );
}
