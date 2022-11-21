import { useGlobalState } from '../hooks/useGlobalState';
import Button from './Button';
import './Overlay.css';

export default function Overlay({ children }) {
  const [{ modalIsVisible }, { toggleIsVisible }] = useGlobalState();

  if (!modalIsVisible) return null;

  return (
    <div className='Overlay'>
      <header>
        <Button handleClick={toggleIsVisible}>X</Button>
      </header>
      {children}
    </div>
  );
}
