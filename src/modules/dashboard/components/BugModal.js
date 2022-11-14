import useJsonData from '../../common/useJsonData';
import { useGlobalState } from '../../common/useGlobalState';
import BugCard from './BugCard';
import Button from '../../common/Button';
import 'remixicon/fonts/remixicon.css';
import './BugModal.css';

export default function BugModal() {
  const [, { addToTriage }] = useGlobalState();
  const data = useJsonData();

  return (
    <div className='BugModal troubleshooting'>
      {data.length ?
        data.map((species, i) => (
          <BugCard key={i} species={species}>
            <Button handleClick={() => addToTriage(species)}>
              <i className="ri-add-line"></i>
            </Button>
          </BugCard>
        )) :
        null
      }
    </div>
  );
}
