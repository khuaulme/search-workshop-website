import React from "react";
import CodeSnippetsCopy from "./CodeSnippetsCopy";

const ScoreModifierCard = ({ title, description, codeObject, children }) => {
  return (
    <div className="w-5/6 text-left p-6 shadow-lg shadow-slate-700 rounded">
      <div className="w-full rounded text-xl text-white bg-slate-800 py-2 px-4 text-center uppercase">
        {title}
      </div>
      <div>{description}</div>
      <CodeSnippetsCopy copyTextObject={codeObject} />
      <div>{children}</div>
    </div>
  );
};

export default ScoreModifierCard;
