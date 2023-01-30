import { useRef } from 'react';
import Tooltip from './Tooltip';
import Button from './ForwardRefButton';

export default function ThumbsUpButton({ handleClick }) {
  const ref = useRef(null);

  function handleClickAndBlur() {
    handleClick();
    ref.current.blur();
  }

  return (
    <div className='ThumbsButton-container'>
      <Button
        ref={ref}
        className='ThumbsButton ThumbsButton--up'
        handleClick={handleClickAndBlur}
        accessibilityOpts={{ 'aria-labelledby': 'thumbs-up-label' }}
      >
        👍
      </Button>
      <Tooltip associatedEl='thumbs-up-label' text='going well' />
    </div>
  );
}
