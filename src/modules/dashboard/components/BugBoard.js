import { useGlobalState } from "../../common/useGlobalState";

export default function BugBoard() {
  const [{ bugBoard }] = useGlobalState();
  return (
    <div className='BugBoard troubleshooting'>
      {bugBoard.map((item, index) => <div key={index}>{item.name}</div>)}
    </div>
  );
}
