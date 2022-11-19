import { useGlobalState } from '../../common/useGlobalState';
import Button from '../../common/Button';

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
