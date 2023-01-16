import React from "react";

const Step = ({ color, title, children }) => {
  return (
    <div className="STAGE mb-4">
      <div
        className={`font-bold ${color} text-white uppercase px-6 rounded py-2 shadow-xl`}
      >
        {title}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Step;
