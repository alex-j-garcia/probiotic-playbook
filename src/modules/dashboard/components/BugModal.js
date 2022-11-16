import { useGlobalState } from '../../common/useGlobalState';
import BugCard from './BugCard';
import Button from '../../common/Button';
import 'remixicon/fonts/remixicon.css';
import './BugModal.css';

export default function BugModal() {
  const [{ 
    modalList 
  }, { 
    addToTriage, 
    updateModalList 
  }] = useGlobalState();
                                     
  function handleClick(species) {
    const { name } = species;
    addToTriage(species);
    updateModalList(modalList.filter(item => item.name !== name));
  }

  return (
    <div className='BugModal troubleshooting'>
      {modalList.length ?
        modalList.map((species, i) => (
          <BugCard key={i} species={species}>
            <Button handleClick={() => handleClick(species)}>
              <i className="ri-add-line"></i>
            </Button>
          </BugCard>
        )) :
        null
      }
    </div>
  );
}
