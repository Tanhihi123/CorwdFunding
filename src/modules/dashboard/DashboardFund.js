import React from 'react';

const DashboardFund = () => {
    return (
        <span className="flex items-center gap-x-2 text-text2 text-base font-medium cursor-pointer">
        <img src="./Vector.png" alt="" />
        <span>Fundrising for</span>
        <span className="w-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </span>
    );
};

export default DashboardFund;