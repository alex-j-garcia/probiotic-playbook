export default function Tooltip({ associatedEl, text }) {
  return (
    <div className='Tooltip-container'>
      <div role='tooltip' id={associatedEl}>{capitalizeFirstLetter(text)}</div>
    </div>
  );
}

function capitalizeFirstLetter(text) {
  return text[0].toUpperCase() + text.slice(1);
}
