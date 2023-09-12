import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
const Button = ({
  type,
  children,
  className = "",
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 rounded-full border-4 border-white border-t-transparent border-b-transparent animate-spin"></div>
  ) : (
    children
  );
  // !! là convert boolean
  let defaultBtnClassName =
    "py-3 text-base font-semibold rounded-xl flex justify-center items-center min-h-[56px]";
  switch (rest.kind) {
    case "primary":
      defaultBtnClassName = defaultBtnClassName + " bg-primary text-white";
      break;
    case "secondary":
      defaultBtnClassName = defaultBtnClassName + " bg-secondary text-white";
      break;
    case "ghost":
      defaultBtnClassName = defaultBtnClassName + " bg-secondary bg-opacity-10 text-secondary";
      break;
    default:
      break;
  }
  if (rest.href)
    return (
      <Link to={rest.href} className={`${defaultBtnClassName} ${className}`}>
        {child}
      </Link>
    );
  return (
    <button
      className={`${defaultBtnClassName} ${
        !!isLoading ? "opacity-50 pointer-events-none" : ""
      }  ${className}`}
      type={type}
      {...rest}
    >
      {child}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  href: PropTypes.string,
  kind: PropTypes.oneOf(["primary","secondary","ghost"]),
};
export default Button;
