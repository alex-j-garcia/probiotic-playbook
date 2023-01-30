import { useGlobalState } from '../../common/hooks/useGlobalState';
import useCalcTextWidth from '../../common/hooks/useCalcTextWidth';
import Badge from '../../common/components/Badge';
import Tooltip from '../../common/components/Tooltip';
import './BugCard.css';

export default function BugCard({ item, children, }) {
  const [ , { setModalContent, setBugDetailsContent, } ] = useGlobalState();
  const { name, type } = item;
  const clientWidth = useCalcTextWidth(name);
  const ariaOptions = { 'aria-labelledby': `${name}-label` };

  function handleClick({ target }) {
    if (target.nodeName === 'button'.toUpperCase()) {
      return;
    }
    setBugDetailsContent(item);
    setModalContent('bugDetails');
  }

  if (clientWidth > 152) {
    return (
      <div className='BugCard' onClick={handleClick}>
      <span {...ariaOptions}>{name}</span>
      <Tooltip associatedEl={`${name}-label`} text={name} />
      <Badge type={type} />
      <div className='BugCard-children'>{children}</div>
    </div>
    );
  }

  return (
    <div className='BugCard' onClick={handleClick}>
      <span {...ariaOptions}>{name}</span>
      <Badge type={type} />
      <div className='BugCard-children'>{children}</div>
    </div>
  );
}
