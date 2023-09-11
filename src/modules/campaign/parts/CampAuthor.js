import { defaultImg } from "constants/Global";
import React from "react";

const CampAuthor = ({img = defaultImg , author="Mahfuzul Nabil" }) => {
  return (
    <div className="flex items-center gap-x-2">
      <img
        src={img}
        alt=""
        className="w-8 h-8 rounded-full object-cover"
      />
      <p className="text-xs text-text3">
        By <span className="font-semibold text-text2">{author}</span>
      </p>
    </div>
  );
};

export default CampAuthor;
