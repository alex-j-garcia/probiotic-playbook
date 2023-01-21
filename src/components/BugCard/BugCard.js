import { useGlobalState } from '../../common/hooks/useGlobalState';
import useCalcTextWidth from '../../common/hooks/useCalcTextWidth';
import Badge from '../../common/components/Badge';
import './BugCard.css';

export default function BugCard({ item, children, }) {
  const [ ,
    { setModalContent, showOverlay, setBugDetailsContent, }
  ] = useGlobalState();
  const { name, type } = item;
  const clientWidth = useCalcTextWidth(name);

  function handleClick({ target }) {
    if (target.nodeName === 'button'.toUpperCase()) {
      return;
    }
    showOverlay();
    setModalContent('bugDetails');
    setBugDetailsContent(item);
  }

  return (
    <div className='BugCard' onClick={handleClick}>
      <span title={clientWidth > 152 ? name : null}>{name}</span>
      <Badge type={type} />
      <div className='BugCard-children'>{children}</div>
    </div>
  );
}
