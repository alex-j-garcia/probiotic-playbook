export default function DropTarget({ children, handlers, dragSource }) {
  const { add, remove, onDragStart } = handlers;

  const handleDragOver = (event) => {
    // Default drag over behavior prevents dropping.
    event.preventDefault();
  };

  const handleDrop = ({ dataTransfer, }) => {
    const droppedItem = dataTransfer.getData('drag-item');
    if (droppedItem) {
      add(JSON.parse(droppedItem));
    }
  };

  const handleDragLeave = ({ target, relatedTarget, dataTransfer }) => {
    const isDropTarget = [...target.classList].includes('DropTarget');
    const isBugCard =
      relatedTarget && [...relatedTarget.classList].includes('BugCard');

    if (isDropTarget && !isBugCard) {
      const draggedElement = dataTransfer.getData('drag-item');
      if (draggedElement) remove(JSON.parse(draggedElement));
    }
  }

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDragStart={onDragStart}
      className='DropTarget'
    >
      {children}
    </div>
  );
}
