import Button from './Button';

export default function ThumbsDownButton({ handleClick }) {
  return (
    <Button
      className='ThumbsButton ThumbsButton--down'
      handleClick={handleClick}
    >
      👎
    </Button>
  );
}
