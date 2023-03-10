import React from "react";

const Step = ({ title, children, color = "fuchsia" }) => {
  let classStyle =
    "font-bold bg-fuchsia-800 text-white uppercase px-6 rounded py-2 shadow-xl text-lg mb-2  w-full";

  return (
    <div className="STAGE mb-4">
      <div className={`${classStyle}`}>{title}</div>
      <div className="px-6">{children}</div>
    </div>
  );
};

export default Step;
