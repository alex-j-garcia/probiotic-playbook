import './BugCard.css';

export default function BugCard({
  species,
  children = null,
  isDraggable = false,
}) {
  return (
    <div
      className='BugCard'
      draggable={isDraggable}
      onDragStart={() => console.log(`I'm being dragged!`)}
    >
      {species.name}
      <div>
        {children}
      </div>
    </div>
  );
}
