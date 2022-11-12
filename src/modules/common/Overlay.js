import { useModalContext } from './useModalContext';
import Button from './Button';
import './Overlay.css';

export default function Overlay({ children }) {
  const { isVisible, toggleIsVisible } = useModalContext()

  if (!isVisible) return null;

  return (
    <div className="Overlay">
      <header>
        <Button handleClick={toggleIsVisible}>X</Button>
      </header>
      {children}
    </div>
  );
}
