export default function Button({ handleClick, children, className, }) {
  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
}
