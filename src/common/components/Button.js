export default function Button({
  handleClick,
  children,
  className,
  accessibilityOpts
}) {
  return (
    <button className={className} onClick={handleClick} {...accessibilityOpts}>
      {children}
    </button>
  );
}
