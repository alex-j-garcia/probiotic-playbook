import { useGlobalState } from "../../common/hooks/useGlobalState";
import Column from "../Column/Column";
import './BugBoard.css'

export default function BugBoard() {
  const [
    { goingWell, toImprove, inProgress },
    { addToImprove, addToGoingWell, addToInProgress }
  ] = useGlobalState();

  return (
    <div className='BugBoard troubleshooting'>
      <Column name='To Improve' list={toImprove} update={addToImprove} />
      <Column name='In Progress' list={inProgress} update={addToInProgress } />
      <Column name='Going Well' list={goingWell} update={addToGoingWell} />
    </div>
  );
}
