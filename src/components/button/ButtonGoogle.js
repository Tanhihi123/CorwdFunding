import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";
const ButtonGoogle = ({ text = "Google" , onClick=() => {} }) => {
  return (
    <button
      className="flex items-center justify-center w-full py-4 mb-5 text-base font-semibold border gap-x-3 border-strock dark:text-white dark:border-darkStroke rounded-xl text-text2"
      onClick={onClick}
    >
      <img src="./icon-google.png" alt="icon" />
      <span>{text}</span>
    </button>
  );
};
ButtonGoogle.propTypes = {
    text : PropTypes.string,
    onClick : PropTypes.func,
}
export default withErrorBoundary(ButtonGoogle,{
    FallbackComponent : ErrorComponent,
});
