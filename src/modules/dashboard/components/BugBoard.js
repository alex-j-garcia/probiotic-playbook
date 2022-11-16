import { useGlobalState } from "../../common/useGlobalState";
import Column from "./Column";
import './BugBoard.css'

export default function BugBoard() {
  const [{ bugBoard }] = useGlobalState();
  return (
    // <div className='BugBoard troubleshooting'>
    //   {bugBoard.map((item, index) => <div key={index}>{item.name}</div>)}
    // </div>
    <div className='BugBoard troubleshooting'>
      <Column name='To Improve' />
      <Column name='In Progress' />
      <Column name='Going Well' />
    </div>
  );
}
