import './BugCard.css';

export default function BugCard({
  item,
  children = null,
}) {
  return (
    <div className='BugCard'>{item.name}
      <div>{children}</div>
    </div>
  );
}
