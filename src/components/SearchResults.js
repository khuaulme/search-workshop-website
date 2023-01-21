import React from "react";
import CodeSnippetsCopy from "./CodeSnippetsCopy";

const SearchResults = ({ children, screenTitle, screenImage, query }) => {
  return (
    <div className="w-full flex  shadow shadow-slate-700 p-4">
      <div className="flex flex-col w-1/3">
        <div className="">{children}</div>
        <div className="w-2/3 mx-auto">
          <CodeSnippetsCopy copyTextObject={query} />
        </div>
      </div>
      <div className="w-2/3 p-4 my-auto">
        <div className="bg-fuchsia-800 text-white rounded px-4 py-2 text-center">
          {screenTitle}
        </div>

        <img src={screenImage} alt="screenshot" />
      </div>
    </div>
  );
};

export default SearchResults;
