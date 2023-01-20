import React from "react";
import CodeSnippetsCopy from "../components/CodeSnippetsCopy";

const SearchOperators = () => {
  return (
    <div className="flex justify-evenly py-2 space-x-4">
      <div className="p-2 shadow-lg shadow-gray-500 w-1/4">
        {" "}
        <div className="text-center bg-green-600 rounded-lg p-2 uppercase">
          phrase
        </div>
        <CodeSnippetsCopy copyTextObject={phraseText} />
        *notice how to query multiple fields with an array
      </div>

      <div className="p-2 shadow-lg shadow-gray-500 w-1/4">
        {" "}
        <div className="text-center bg-green-600 rounded-lg p-2 uppercase">
          range
        </div>
        <CodeSnippetsCopy copyTextObject={rangeText} />* can query numbers and
        embedded fields
      </div>
      <div className="p-2 shadow-lg shadow-gray-500 w-1/4">
        {" "}
        <div className="text-center bg-green-600 rounded-lg p-2 uppercase">
          wildcard
        </div>
        <CodeSnippetsCopy copyTextObject={wildcardText} />
        *Supports special characters to match any character(s).
      </div>
      <div className="p-2 shadow-lg shadow-gray-500 w-1/4">
        {" "}
        <div className="text-center bg-green-600 rounded-lg p-2 uppercase">
          near
        </div>
        <CodeSnippetsCopy copyTextObject={dateText} type="date" />
        *supports querying and scoring numeric, date, and GeoJSON. Higher scores
        are returned by proximity.
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
