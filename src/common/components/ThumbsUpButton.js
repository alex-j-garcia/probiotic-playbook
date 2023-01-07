import Button from './Button';

export default function ThumbsUpButton({ handleClick }) {
  return (
    <Button
      className='ThumbsButton ThumbsButton--up'
      handleClick={handleClick}
    >
      👍
    </Button>
  );
}
