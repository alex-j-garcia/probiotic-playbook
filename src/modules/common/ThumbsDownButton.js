import Button from '../common/Button';
import 'remixicon/fonts/remixicon.css';

export default function ThumbsDownButton({ handleClick }) {
  return (
    <Button handleClick={handleClick}>
      <i className="ri-thumb-down-line"></i>
    </Button>
  );
}
