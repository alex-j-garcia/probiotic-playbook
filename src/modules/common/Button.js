export default function BugButton({ handleClick, children }) {
  return (
    <button onClick={handleClick}>{children}</button>
  );
}
