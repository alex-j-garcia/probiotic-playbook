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
