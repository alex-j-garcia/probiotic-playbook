import { useGlobalState } from '../hooks/useGlobalState';
import BugModal from '../../components/BugModal/BugModal';
import Header from './Header';
import Button from './Button';

export default function Overlay({ children }) {
  const [{ modalIsVisible, overlayChild, }, { hideOverlay }] = useGlobalState();
  const Component = OverlayComponents[overlayChild];

  if (!modalIsVisible) return null;

  return (
    <div className='Overlay'>
      <Header>
        <Button handleClick={hideOverlay}>X</Button>
      </Header>
      <Component />
    </div>
  );
}

const OverlayComponents = {
  bugModal: BugModal,
  bugCard: {},
};

// The Overlay has to render a certain type of modal:
  // either the bug modal, or the card details modal.
  // first, I should create a common modal component.