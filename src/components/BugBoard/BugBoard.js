import { useGlobalState } from "../../common/hooks/useGlobalState";
import Column from "../Column/Column";
import './BugBoard.css'

export default function BugBoard() {
  const [{ bugBoard }] = useGlobalState();
  const goingWellList = getGoingWell(bugBoard);
  const toImproveList = getToImprove(bugBoard);

  return (
    <div className='BugBoard troubleshooting'>
      <Column name='To Improve' list={toImproveList} />
      <Column name='In Progress' />
      <Column name='Going Well' list={goingWellList} />
    </div>
  );
}

function getGoingWell(bugs) {
  return bugs.filter(({ button }) => button === '👍');
}

function getToImprove(bugs) {
  return bugs.filter(({ button }) => button === '👎');
}
