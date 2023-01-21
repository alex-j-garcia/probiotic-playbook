import { useGlobalState } from '../hooks/useGlobalState';
import Modal from './Modal';
import Header from './Header';
import Button from './Button';

export default function Overlay() {
  const [{ overlayIsVisible, }, { hideOverlay, }] = useGlobalState();

  if (!overlayIsVisible) return null;

  return (
    <div className='Overlay'>
      <Header>
        <Button handleClick={hideOverlay}>X</Button>
      </Header>
      <Modal />
    </div>
  );
}
