export default function Button({
  children,
  className,
  handleClick,
  accessibilityOpts,
}) {
  return (
    <button
      onClick={handleClick}
      className={className}
      {...accessibilityOpts}
    >
      {children}
    </button>
  );
}
