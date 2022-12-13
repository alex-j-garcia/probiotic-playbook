export default function DropTarget({ children, updateOnDrop }) {
  const handleDragOver = (event) => {
    // Default drag over behavior prevents dropping.
    event.preventDefault();
  };

  const handleDrop = (event) => {
    const droppedItem = event.dataTransfer.getData('drag-item');
    if (droppedItem) {
      updateOnDrop(JSON.parse(droppedItem));
    }
  };

  return (
    <div onDragOver={handleDragOver} onDrop={handleDrop}>
      {children}
    </div>
  );
}
