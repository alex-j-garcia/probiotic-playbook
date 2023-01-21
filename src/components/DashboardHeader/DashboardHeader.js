import { useGlobalState } from '../../common/hooks/useGlobalState';
import Header from '../../common/components/Header';
import Button from '../../common/components/Button';

export default function DashboardHeader() {
  const [, { showOverlay, setOverlayChild }] = useGlobalState();

  function handleClick() {
    showOverlay();
    setOverlayChild('bugModal');
  }

  return (
    <Header>
      <Button handleClick={handleClick}>Add a 🐛</Button>
    </Header>
  );
}
