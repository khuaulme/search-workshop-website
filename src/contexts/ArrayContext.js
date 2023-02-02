import React, { useState, createContext } from "react";

export const ArrayContext = createContext({});

export const ArrayProvider = (props) => {
  const [indexes] = useState({
    ExampleSentence:
      "['Ne le Dis à Personne', 'Raiders of the Lost Ark', 'Rocky II']",
    ExampleIndexes: [
      {
        name: "Standard (Default)",
        position: 0,
        tokenArray: [
          {
            id: 1,
            term: "ne",
          },
          {
            id: 2,
            term: "le",
          },
          {
            id: 3,
            term: "dis",
          },
          {
            id: 4,
            term: "à",
          },
          {
            id: 5,
            term: "personne",
          },
          {
            id: 6,
            term: "raiders",
          },
          {
            id: 7,
            term: "of",
          },
          {
            id: 8,
            term: "the",
          },
          {
            id: 9,
            term: "lost",
          },
          {
            id: 10,
            term: "ark",
          },
          {
            id: 11,
            term: "rocky",
          },
          {
            id: 12,
            term: "ii",
          },
        ],
      },
      {
        name: "Lucene.English",
        position: 1,
        tokenArray: [
          {
            id: 1,
            term: "ne",
          },
          {
            id: 2,
            term: "le",
          },
          {
            id: 3,
            term: "di",
          },
          {
            id: 4,
            term: "à",
          },
          {
            id: 5,
            term: "personn",
          },
          {
            id: 6,
            term: "raider",
          },
          {
            id: 7,
            term: "lost",
          },
          {
            id: 8,
            term: "ark",
          },
          {
            id: 9,
            term: "rocki",
          },
          {
            id: 10,
            term: "ii",
          },
        ],
      },
      {
        name: "Simple",
        position: 2,
        tokenArray: [],
      },
      {
        name: "Whitespace",
        position: 3,
        tokenArray: [],
      },
      {
        name: "Keyword",
        position: 4,
        tokenArray: [
          {
            id: 1,
            term: "Ne le Dis à Personne",
          },
          {
            id: 2,
            term: "Raiders of the Lost Ark",
          },
          {
            id: 3,
            term: "Rocky II",
          },
        ],
      },
      {
        name: "French",
        position: 5,
        tokenArray: [
          {
            id: 1,
            term: "dis",
          },
          {
            id: 2,
            term: "person",
          },
          {
            id: 3,
            term: "raid",
          },
          {
            id: 4,
            term: "of",
          },
          {
            id: 5,
            term: "the",
          },
          {
            id: 6,
            term: "lost",
          },
          {
            id: 7,
            term: "ark",
          },
          {
            id: 8,
            term: "rocky",
          },
          {
            id: 9,
            term: "ii",
          },
        ],
      },
      {
        name: "Multi",
        position: 6,
        tokenArray: [
          {
            id: 1,
            term: "ne",
          },
          {
            id: 2,
            term: "le",
          },
          {
            id: 3,
            term: "di",
          },
          {
            id: 4,
            term: "personn",
          },
          {
            id: 5,
            term: "raider",
          },
          {
            id: 6,
            term: "lost",
          },
          {
            id: 7,
            term: "ark",
          },
          {
            id: 8,
            term: "rocki",
          },
          {
            id: 9,
            term: "ii",
          },
        ],
      },
    ],
    ExampleRemovals: [
      {
        name: "Standard (Default)",
        position: 0,
        tokenArray: [],
      },
      {
        name: "English",
        position: 1,
        tokenArray: [],
      },
      {
        name: "Simple",
        position: 2,
        tokenArray: [],
      },
      {
        name: "Whitespace",
        position: 3,
        tokenArray: [],
      },
      {
        name: "Keyword",
        position: 4,
        tokenArray: [],
      },
      {
        name: "French",
        position: 5,
        tokenArray: [
          {
            id: 0,
            term: "ne",
          },
          {
            id: 1,
            term: "le'",
          },
          {
            id: 2,
            term: "à",
          },
          {
            id: 3,
            term: "-e",
          },
          {
            id: 4,
            term: "'",
          },
          {
            id: 5,
            term: ".",
          },
          {
            id: 6,
            term: "-ssment",
          },
        ],
      },
      {
        name: "Multi",
        position: 6,
        tokenArray: [
          {
            id: 0,
            term: "-s",
          },
          {
            id: 1,
            term: "-e'",
          },
          {
            id: 2,
            term: "of",
          },
          {
            id: 3,
            term: "the",
          },
        ],
      },
    ],
  });
  return (
    <ArrayContext.Provider value={[indexes]}>
      {props.children}
    </ArrayContext.Provider>
  );
};
