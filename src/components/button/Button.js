import React from "react";
import { PropTypes } from "prop-types";
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
  return (
    <button
      className={`py-3 text-base font-semibold rounded-xl flex justify-center items-center min-h-[56px] ${!!isLoading ? "opacity-50 pointer-events-none" : ""} text-white ${className}`}
      type={type}
      {...rest}
    >
      {child}
      
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
};
export default Button;
