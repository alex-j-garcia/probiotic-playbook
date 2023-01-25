export default function Tooltip({ associatedEl, text }) {
  return (
    <div role='tooltip' id={`${associatedEl}-label`}>
      {capitalizeFirstLetter(text)}
    </div>
  );
}

function capitalizeFirstLetter(text) {
  return text[0].toUpperCase() + text.slice(1);
}
