import './BugCard.css';
import 'remixicon/fonts/remixicon.css';

export default function BugCard({
  species,
  children,
  handleClick
}) {
  return (
    <div className='BugCard' onClick={() => handleClick(species)}>
      {species.name}
      {/* <div> */}
        {/* {children} */}
        {/* <i className="ri-thumb-down-line"></i>
        <i className="ri-thumb-up-line"></i> */}
      {/* </div> */}
    </div>
  );
}
