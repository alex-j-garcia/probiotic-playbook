import './BugCard.css';

export default function BugCard({
  item,
  children = null,
  isDraggable = false,
}) {
  return (
    <div
      className='BugCard'
      draggable={isDraggable}
      onDragStart={() => console.log(`I'm being dragged!`)}
    >
      {item.name}
      <div>
        {children}
      </div>
    </div>
  );
}
