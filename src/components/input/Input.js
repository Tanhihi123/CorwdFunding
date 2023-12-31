import React from "react";
import { useController } from "react-hook-form";
import { PropTypes } from "prop-types";
import {withErrorBoundary} from "react-error-boundary"
import ErrorComponent from "components/common/ErrorComponent";
const Input = ({
  control,
  name,
  type = "text",
  placeholder = "",
  error = "",
  children,
  ...rest
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        className={`w-full px-6 py-4 text-sm font-medium border rounded-xl text-text1 bg-transparent dark:text-white ${
          error.length > 0
            ? "border-error placeholder:text-error text-error"
            : "border-strock dark:border-darkStroke placeholder:text-text4 dark:placeholder:text-text2"
        }
        ${children && "pr-16"}
        `}
        placeholder={error.length <=0 ? placeholder : error}
        {...rest}
        {...field}
      />
      {children && (
        <span className="absolute right-6 top-2/4 -translate-y-2/4 cursor-pointer select-none">
          {children}
        </span>
      )}
    </div>
  );
};
Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  control: PropTypes.any.isRequired,
};
export default withErrorBoundary(Input,{
  FallbackComponent : ErrorComponent,
});
