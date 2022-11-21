import { useGlobalState } from '../../common/hooks/useGlobalState';
import Header from '../../common/components/Header';
import Button from '../../common/components/Button';

export default function DashboardHeader() {
  const [, { toggleIsVisible }] = useGlobalState();

  return (
    <Header>
      <Button handleClick={toggleIsVisible}>Add a 🐛</Button>
    </Header>
  );
}
