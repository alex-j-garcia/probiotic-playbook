import { useGlobalState } from "../hooks/useGlobalState";

export default function Drag({ dataItem, children }) {
  const [, { addDragTarget, } ] = useGlobalState();

  const handleDragStart = (event) => {
    addDragTarget(JSON.stringify(dataItem));
  };

  return <div draggable onDragStart={handleDragStart}>{children}</div>;
}
