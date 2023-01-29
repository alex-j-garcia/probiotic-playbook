import { useGlobalState } from '../hooks/useGlobalState';
import Modal from './Modal';
import Header from './Header';
import Button from './Button';

export default function Overlay() {
  const [{ modalContent, }, { removeModalContent, }] = useGlobalState();

  function handleClick({ target }) {
    if (!isOverlayOrButton(target)) {
      return;
    }
    removeModalContent();
  }

  if (!modalContent.length) return null;

  return (
    <div className='Overlay' onClick={handleClick}>
      <Header>
        <Button className='Overlay-close'>X</Button>
      </Header>
      <Modal />
    </div>
  );
}

function isOverlayOrButton({ className }) {
  className = className.toLowerCase();
  if (className.includes('overlay') || className.includes('overlay-close')) {
    return true;
  }
  return false;
}