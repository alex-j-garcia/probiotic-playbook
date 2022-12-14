import { useState } from 'react';

export default function DropTarget({ children, handlers, }) {
  const [isDragOver, setIsDragOver] = useState(false);
  const { add, remove } = handlers;

  const handleDragOver = (event) => {
    // Default drag over behavior prevents dropping.
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDrop = (event) => {
    const droppedItem = event.dataTransfer.getData('drag-item');
    if (droppedItem) {
      add(JSON.parse(droppedItem));
    }
    setIsDragOver(false);
  };

  const handleDragLeave = ({ dataTransfer, target }) => {
    const draggedElement = dataTransfer.getData('drag-item');
    const isDropTarget = [...target.classList].includes('DropTarget');
    if (draggedElement && isDropTarget) {
      remove(JSON.parse(draggedElement));
    }
    setIsDragOver(false);
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
      className='DropTarget'
    >
      {children}
    </div>
  );
}
