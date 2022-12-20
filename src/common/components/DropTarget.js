import { useState } from 'react';

export default function DropTarget({ children, handlers, dragSource }) {
  const [isDragOver, setIsDragOver] = useState(false);
  const { add, remove, onDragStart } = handlers;

  const handleDragOver = (event) => {
    // Default drag over behavior prevents dropping.
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDrop = ({ dataTransfer, target, }) => {
    if (target === dragSource) {
      return;
    }

    const droppedItem = dataTransfer.getData('drag-item');
    if (droppedItem) {
      add(JSON.parse(droppedItem));
    }
    setIsDragOver(false);
  };

  const handleDragLeave = ({ target, relatedTarget, dataTransfer }) => {
    const isDropTarget = [...target.classList].includes('DropTarget');
    const isBugCard =
      relatedTarget && [...relatedTarget.classList].includes('BugCard');

    if (isDropTarget && !isBugCard) {
      const draggedElement = dataTransfer.getData('drag-item');
      if (draggedElement) remove(JSON.parse(draggedElement));
      setIsDragOver(false);
    }
  }

  const styles = {
    background: isDragOver ? 'hsl(0, 0%, 95%)' : '',
  };

  return (
    <div
      style={styles}
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
