import { useGlobalState } from '../../common/hooks/useGlobalState';
import DropColumn from '../DropColumn/DropColumn';
import './BugBoard.css'

export default function BugBoard() {
  const [state, handlers] = useGlobalState();

  const columns = columnMap.map(({ name, list, addFn, removeFn, }, index) => (
    <DropColumn
      key={index}
      name={name}
      list={state[list]}
      handlers={{
        add: handlers[addFn],
        remove: handlers[removeFn],
      }}
    />
  ));

  return (
    <div className='BugBoard'>
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
