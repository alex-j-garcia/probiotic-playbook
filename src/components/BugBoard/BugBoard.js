import { useGlobalState } from '../../common/hooks/useGlobalState';
import DropColumn from '../DropColumn/DropColumn';
import './BugBoard.css'

export default function BugBoard() {
  const [state, handlers] = useGlobalState();

  const columns = columnMap.map(({ name, list, dispatch }, index) => (
    <DropColumn
      key={index}
      name={name}
      list={state[list]}
      updateFn={handlers[dispatch]}
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
    dispatch: 'addToImprove',
  },
  {
    name: 'In Progress',
    list: 'inProgress',
    dispatch: 'addToInProgress',
  },
  {
    name: 'Going Well',
    list: 'goingWell',
    dispatch: 'addToGoingWell',
  },
];
