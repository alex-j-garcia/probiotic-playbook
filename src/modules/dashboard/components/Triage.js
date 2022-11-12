import BugCard from "./BugCard";
import './Triage.css';

export default function Triage() {
  const data = [];

  return (
    <div className='Triage'>
      {data.length ?
        data.map((species, i) => <BugCard key={i} species={species} />) :
        null
      }
    </div>
  );
}
