import { useGlobalState } from '../../common/useGlobalState';
import BugButton from './BugButton';

export default function Header() {
  const [, { toggleIsVisible }] = useGlobalState();

  return (
    <header>
      <BugButton handleClick={toggleIsVisible} />
    </header>
  );
}
