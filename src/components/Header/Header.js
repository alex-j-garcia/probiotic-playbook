import { useGlobalState } from '../../common/hooks/useGlobalState';
import Button from '../../common/components/Button';

export default function Header() {
  const [, { toggleIsVisible }] = useGlobalState();

  return (
    <header>
      <Button handleClick={toggleIsVisible}>
        Add a 🐛
      </Button>
    </header>
  );
}
