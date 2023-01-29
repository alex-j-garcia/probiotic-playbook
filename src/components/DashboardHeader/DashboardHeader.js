import { useGlobalState } from '../../common/hooks/useGlobalState';
import Header from '../../common/components/Header';
import Button from '../../common/components/Button';

export default function DashboardHeader() {
  const [, { setModalContent, }] = useGlobalState();

  function handleClick() {
    setModalContent('bugCardList');
  }

  return (
    <Header>
      <Button handleClick={handleClick}>Add a 🐛</Button>
    </Header>
  );
}
