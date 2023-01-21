import { useGlobalState } from '../hooks/useGlobalState';
import BugCardList from '../../components/BugCardList/BugCardList';
import BugDetails from '../../components/BugDetails/BugDetails';

export default function Modal() {
  const [{ modalContent, }] = useGlobalState();
  const Component = OverlayComponents[modalContent];

  return (
    <div className='Modal'>
      <div className='Modal-content'>
        <Component />
      </div>
    </div>);
}

const OverlayComponents = {
  bugCardList: BugCardList,
  bugDetails: BugDetails,
};

// The Overlay displays a modal, but the modal is what dictates what the content will be

// The Overlay has to render a certain type of modal:
  // either the bug modal, or the bug details modal.
  // first, I should create a common modal component. [√]
  // The bugCard should have a handler that sets the content of the modal to the bug details.
  // Anytime a bugCard is clicked on, it should display the bug details modal
    // that means it has to trigger the overlay
    // the modal has to render the bug details component
    // the bug details component's body has to have the expected content