import Button from '../common/Button';
import 'remixicon/fonts/remixicon.css';

export default function ThumbsUpButton({ handleClick }) {
  return (
    <Button handleClick={handleClick}>
      <i className="ri-thumb-up-line"></i>
    </Button>
  );
}
