import useJsonData from '../../common/useJsonData';
import { useGlobalState } from '../../common/useGlobalState';
import BugCard from './BugCard';
import './BugModal.css';

export default function BugModal() {
  const data = useJsonData();
  const [, { add }] = useGlobalState();

  return (
    <div className='BugModal troubleshooting'>
      {data.length ?
        data.map((species, i) => (
          <BugCard key={i} species={species} handleClick={add} />)
        ) :
        null
      }
    </div>
  );
}
