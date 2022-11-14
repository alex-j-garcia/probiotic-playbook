import './BugCard.css';

export default function BugCard({
  species,
  children,
  handleClick
}) {
  return (
    <div className='BugCard' onClick={() => handleClick(species)}>
      {species.name}
      <div>
        {children}
      </div>
    </div>
  );
}
