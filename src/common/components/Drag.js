export default function Drag({ dataItem, children }) {
  const handleDragStart = (event) => (
    event.dataTransfer.setData('drag-item', JSON.stringify(dataItem))
  );

  return (
    <div draggable onDragStart={handleDragStart}>
      {children}
    </div>
  )
}
