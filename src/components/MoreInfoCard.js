import React from "react";

const MoreInfoCard = (props) => {
  return (
    <div className="flex font-barlow items-center border border-indigo-700 mt-4 relative drop-shadow-2xl rounded">
      <div className="w-1/6 text-4xl">🤔</div>
      <div className="w-3/4 my-8 text-indigo-900 font-thin">
        {props.children}
      </div>
      <div className="w-1/4 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="#86198f"
          className="w-6 h-6 absolute top-4 right-4 font-bold"
          onClick={() => props.handleClose(false)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default MoreInfoCard;
