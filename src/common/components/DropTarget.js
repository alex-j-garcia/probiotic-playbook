export default function DropTarget({ children, handlers, }) {
  const { add, remove, } = handlers;

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

  const handleDragLeave = ({ dataTransfer }) => {
    const draggedElement = dataTransfer.getData('drag-item');
    if (draggedElement) {
      remove(JSON.parse(draggedElement));
    }
  }

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className='DropTarget'
    >
      {children}
    </div>
  );
}
