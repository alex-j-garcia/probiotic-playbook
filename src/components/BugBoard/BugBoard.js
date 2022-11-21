import { useGlobalState } from "../../common/hooks/useGlobalState";
import Column from "../Column/Column";
import './BugBoard.css'

export default function BugBoard() {
  const [{ goingWell, toImprove }] = useGlobalState();

  return (
    <div className='BugBoard troubleshooting'>
      <Column name='To Improve' list={toImprove} />
      <Column name='In Progress' />
      <Column name='Going Well' list={goingWell} />
    </div>
  );
}
