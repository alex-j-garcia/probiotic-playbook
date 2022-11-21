import { useGlobalState } from '../../common/hooks/useGlobalState';
import ModalList from './components/ModalList'
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

  if (!modalList.length) return null;

  return (
    <div className='BugModal troubleshooting'>
      <ModalList list={modalList} handleClick={handleClick} />
    </div>
  );
}
