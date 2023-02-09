import { useGlobalState } from '../../common/hooks/useGlobalState';
import Modal from '../../common/components/Modal';
import OverlayHeader from './components/OverlayHeader';

export default function Overlay() {
  const [{ modalContent, }, { removeModalContent, }] = useGlobalState();

  if (!modalContent.length) return null;

  return (
    <div
      className='Overlay'
      onClick={(e) => isOverlayOrButton(e.target) && removeModalContent()}>
      <OverlayHeader />
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
