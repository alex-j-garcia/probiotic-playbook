export default function Badge({ type }) {
  return (
    <div>
      <span className={`Badge Badge--${type}`}>{capitalizeFirst(type)}</span>
    </div>
  );
}

function capitalizeFirst(word) {
  return word[0].toUpperCase() + word.slice(1);
}
