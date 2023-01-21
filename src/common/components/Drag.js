import { useGlobalState } from "../hooks/useGlobalState";

export default function Drag({ dataItem, children }) {
  const [, { addDragTarget, } ] = useGlobalState();

  return (
    <div
      draggable
      onDragStart={() => addDragTarget(JSON.stringify(dataItem))}
    >
      {children}
    </div>
  );
}
