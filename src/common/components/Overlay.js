import { useGlobalState } from '../hooks/useGlobalState';
import Header from './Header';
import Button from './Button';
import './Overlay.css';

export default function Overlay({ children }) {
  const [{ modalIsVisible }, { toggleIsVisible }] = useGlobalState();

  if (!modalIsVisible) return null;

  return (
    <div className='Overlay'>
      <Header>
        <Button handleClick={toggleIsVisible}>X</Button>
      </Header>
      {children}
    </div>
  );
}
