import Tooltip from './Tooltip';
import Button from './Button';

export default function ThumbsDownButton({ handleClick }) {
  return (
    <div className='button-and-tooltip'>
      <Button
        accessibilityOpts={{ 'aria-labelledby': 'thumbs-down-label' }}
        handleClick={handleClick}
        className='ThumbsButton ThumbsButton--down'
      >
        👎
      </Button>
      <Tooltip associatedEl='thumbs-down' text='to improve' />
    </div>
  );
}
