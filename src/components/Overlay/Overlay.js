import { useGlobalState } from '../../common/hooks/useGlobalState';
import Modal from '../../common/components/Modal';
import OverlayHeader from './components/OverlayHeader';

export default function Overlay() {
  const [{ modalContent, }, { removeModalContent, }] = useGlobalState();

  if (!modalContent.length) return null;

  return (
    <div
      className='Overlay'
      onClick={(e) => isOverlayOrButton(e.target) && removeModalContent()}
    >
      <OverlayHeader />
      <Modal />
    </div>
  );
}

const isOverlayOrButton = ({ className }) => (
  ['overlay', 'overlay-close'].includes(className.toLowerCase())
);
