import { IconFolder } from "components/icons";
import React from "react";
import { Link } from "react-router-dom";

const CampCategory = ({text = "Crypto",className="text-xs"}) => {
  return (
    <Link
      to={"/"}
      className={`flex items-baseline gap-x-3 font-medium text-text3 mb-4 ${className}`}
    >
      <IconFolder></IconFolder>
      <span>{text}</span>
    </Link>
  );
};

export default CampCategory;
