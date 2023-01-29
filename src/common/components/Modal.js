import { useGlobalState } from '../hooks/useGlobalState';
import BugDetails from '../../components/BugDetails/BugDetails';
import BugCardList from '../../components/BugCardList/BugCardList';

export default function Modal() {
  const [{ modalContent, }] = useGlobalState();
  const lastElement = [...modalContent].pop();
  const Component = OverlayComponents[lastElement];

  if (!lastElement) return null;

  return (
    <div className='Modal'>
      <div className='Modal-content'>
        <Component />
      </div>
    </div>
  );
}

const OverlayComponents = {
  bugCardList: BugCardList,
  bugDetails: BugDetails,
};
