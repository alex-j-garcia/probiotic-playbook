import { useGlobalState } from '../../common/hooks/useGlobalState';
import BugCard from '../BugCard/BugCard';
import Button from '../../common/components/Button';
import './BugModal.css';

export default function BugModal() {
  const [{
    modalList 
  }, { 
    addToTriage, 
    removeFromModalList
  }] = useGlobalState();
                                     
  function handleClick(item) {
    addToTriage(item);
    removeFromModalList(item);
  }

  return (
    <div className='BugModal troubleshooting'>
      {modalList.length ?
        modalList.map((item, i) => (
          <BugCard key={i} species={item}>
            <Button handleClick={() => handleClick(item)}>
              ➕
            </Button>
          </BugCard>
        )) :
        null
      }
    </div>
  );
}
