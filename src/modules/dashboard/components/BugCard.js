import './BugCard.css';

export default function BugCard({
  species,
  children = null,
}) {
  return (
    <div className='BugCard'>
      {species.name}
      <div>
        {children}
      </div>
    </div>
  );
}
