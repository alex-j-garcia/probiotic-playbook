import { useGlobalState } from "../hooks/useGlobalState";

export default function DropTarget({ children, handlers, }) {
  const [
    { dragTarget, },
    { removeDragTarget, }
  ] = useGlobalState();
  const { add, remove, } = handlers;


  const handleDragOver = (event) => {
    // Default drag over behavior prevents dropping.
    event.preventDefault();
  };

  const handleDrop = () => {
    const droppedItem = dragTarget;
    if (droppedItem) {
      add(JSON.parse(droppedItem));
      removeDragTarget(droppedItem);
    }
  };

  const handleDragLeave = () => {
    const draggedItem = dragTarget;
    if (draggedItem) {
      remove(JSON.parse(draggedItem));
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
