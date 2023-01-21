import React from "react";
import CodeSnippetsCopy from "../components/CodeSnippetsCopy";

const SearchOperators = () => {
  return (
    <div className="flex justify-evenly text-white text-xl drop-shadow shadow-green-900 py-2 space-x-4 text-center">
      <div className="p-2 shadow-lg shadow-gray-500 w-1/4">
        {" "}
        <div className="text-center bg-green-600 rounded-lg p-2 uppercase">
          phrase
        </div>
        <CodeSnippetsCopy copyTextObject={phraseText} />
        <div className="text-black text-base">
          *notice how to query multiple fields with an array
        </div>
      </div>

      <div className="p-2 shadow-lg shadow-gray-500 w-1/4">
        {" "}
        <div className="text-center bg-green-600 rounded-lg p-2 uppercase">
          range
        </div>
        <CodeSnippetsCopy copyTextObject={rangeText} />
        <div className="text-black text-base">
          * can query numbers and embedded fields
        </div>
      </div>
      <div className="p-2 shadow-lg shadow-gray-500 w-1/4">
        {" "}
        <div className="text-center bg-green-600 rounded-lg p-2 uppercase">
          wildcard
        </div>
        <CodeSnippetsCopy copyTextObject={wildcardText} />
        <div className="text-black text-base">
          *Supports special characters to match any character(s).
        </div>
      </div>
      <div className="p-2 shadow-lg shadow-gray-500 w-1/4">
        {" "}
        <div className="text-center bg-green-600 rounded-lg p-2 uppercase">
          near
        </div>
        <CodeSnippetsCopy copyTextObject={dateText} type="date" />{" "}
        <div className="text-black text-base">
          *supports querying and scoring numeric, date, and GeoJSON. Higher
          scores are returned by proximity.
        </div>
      </div>
    </div>
  );
};

export default SearchOperators;

const phraseText = {
  index: "default",
  phrase: {
    query: "Harry Potter",
    path: ["title", "fullplot", "plot"],
  },
  highlight: {
    path: "fullplot",
  },
};

const wildcardText = {
  index: "default",
  wildcard: {
    query: "Ha*ter",
    path: "title",
    allowAnalyzedField: true,
  },
};

const rangeText = {
  index: "default",
  range: {
    gt: 8,
    lte: 10,
    path: "imdb.rating",
  },
};

const dateText = {
  index: "default",
  near: {
    path: "released",
    origin: Date("1915-09-13T"),
    pivot: 7776000000,
  },
};
