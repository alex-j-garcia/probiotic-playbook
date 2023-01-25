import { forwardRef } from "react";

const Button = forwardRef(function Button({
  children,
  className,
  handleClick,
  accessibilityOpts
}, ref) {
  return (
    <button
      ref={ref ? ref : null}
      onClick={handleClick}
      className={className}
      {...accessibilityOpts}
    >
      {children}
    </button>
  );
});

export default Button;
