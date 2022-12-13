import { useState } from 'react';

export default function DropTarget({ children, updateOnDrop }) {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (event) => {
    // Default drag over behavior prevents dropping.
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDrop = (event) => {
    const droppedItem = event.dataTransfer.getData('drag-item');
    setIsDragOver(false);
    if (droppedItem) {
      updateOnDrop(JSON.parse(droppedItem));
    }
  };

  const styles = {
    background: isDragOver ? 'hsl(0, 0%, 95%)' : '',
  };

  return (
    <div
      style={styles}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={() => setIsDragOver(false)}
    >
      {children}
    </div>
  );
}
