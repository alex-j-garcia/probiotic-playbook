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
                                     
  function handleClick(species) {
    const { name } = species;
    addToTriage(species);
    removeFromModalList(name);
  }

  return (
    <div className='BugModal troubleshooting'>
      {modalList.length ?
        modalList.map((species, i) => (
          <BugCard key={i} species={species}>
            <Button handleClick={() => handleClick(species)}>
              ➕
            </Button>
          </BugCard>
        )) :
        null
      }
    </div>
  );
}
