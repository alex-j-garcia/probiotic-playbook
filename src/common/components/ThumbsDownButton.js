import { useRef } from 'react';
import Tooltip from './Tooltip';
import Button from './ForwardRefButton';

export default function ThumbsDownButton({ handleClick }) {
  const ref = useRef(null);

  function handleClickAndBlur() {
    handleClick();
    ref.current.blur();
  }

  return (
    <div className='button-and-tooltip'>
      <Button
        ref={ref}
        className='ThumbsButton ThumbsButton--down'
        handleClick={handleClickAndBlur}
        accessibilityOpts={{ 'aria-labelledby': 'thumbs-down-label' }}
      >
        👎
      </Button>
      <Tooltip associatedEl='thumbs-down' text='to improve' />
    </div>
  );
}
