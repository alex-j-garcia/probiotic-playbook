import useJsonData from "../../common/useJsonData";
import BugCard from "./BugCard";
import './BugModal.css';

export default function BugModal() {
  const data = useJsonData();

  return (
    <div className='BugModal troubleshooting'>
      {data.length ?
        data.map((species, i) => <BugCard key={i} species={species} />) :
        null
      }
    </div>
  );
}