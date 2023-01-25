import Button from './Button';
import Tooltip from './Tooltip';

export default function ThumbsUpButton({ handleClick }) {
  return (
    <div className='button-and-tooltip'>
      <Button
        handleClick={handleClick}
        className='ThumbsButton ThumbsButton--up'
        accessibilityOpts={{ 'aria-labelledby': 'thumbs-up-label' }}
      >
        👍
      </Button>
      <Tooltip associatedEl='thumbs-up' text='going well' />
    </div>
  );
}
