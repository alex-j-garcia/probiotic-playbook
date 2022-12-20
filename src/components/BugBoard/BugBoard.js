import { useState } from 'react';
import { useGlobalState } from '../../common/hooks/useGlobalState';
import DropColumn from '../DropColumn/DropColumn';
import './BugBoard.css'

export default function BugBoard() {
  const [state, handlers] = useGlobalState();
  const [dragSource, setDragSource] = useState(null)

  const handleDragStart = ({ currentTarget, }) => setDragSource(currentTarget);

  const columns = columnMap.map(({ name, list, addFn, removeFn, }, index) => (
    <DropColumn
      key={index}
      name={name}
      list={state[list]}
      dragSource={dragSource}
      handlers={{
        add: handlers[addFn],
        remove: handlers[removeFn],
        onDragStart: handleDragStart,
      }}
    />
  ));

  return (
    <div className='BugBoard troubleshooting'>
      {columns}
    </div>
  );
}

const columnMap = [
  {
    name: 'To Improve',
    list: 'toImprove',
    addFn: 'addToImprove',
    removeFn: 'removeFromToImprove',
  },
  {
    name: 'In Progress',
    list: 'inProgress',
    addFn: 'addToInProgress',
    removeFn: 'removeFromInProgress',
  },
  {
    name: 'Going Well',
    list: 'goingWell',
    addFn: 'addToGoingWell',
    removeFn: 'removeFromGoingWell',
  },
];
