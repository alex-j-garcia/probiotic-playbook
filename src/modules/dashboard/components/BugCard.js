import { useState } from 'react';
import './BugCard.css';

export default function BugCard({
  species,
  children = null,
}) {
  const [isVisible, setIsVisible] = useState(true);

  function handleClick() {
    setIsVisible(false);
  }

  if (!isVisible) return null;

  return (
    <div className='BugCard' onClick={handleClick}>
      {species.name}
      <div>
        {children}
      </div>
    </div>
  );
}
