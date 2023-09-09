import React from "react";
import { Link } from "react-router-dom";

const LayoutAuthentication = ({ children, heading }) => {
  return (
    <div className="relative w-full min-h-screen p-10 bg-lite isolate">
        <img src="./Ellipse.png" alt="bg" className="absolute bottom-0 left-0 right-0 pointer-events-none z-[-1]" />
      <Link to="/" className="inline-block mb-[60px]">
        <img src="./Logo.png" alt="logo" />
      </Link>
      <div className="w-full max-w-[556px] bg-white rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto">
        <h1 className="mb-1 text-lg font-semibold text-center lg:text-xl lg:mb-3 text-text1">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default LayoutAuthentication;
