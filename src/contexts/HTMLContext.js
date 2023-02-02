import React, { useState, createContext } from "react";

export const HTMLContext = createContext({});

export const HTMLProvider = (props) => {
  const [indexes] = useState({
    ExampleSentence:
      "<head>I demand to speak to the head of the department.</head>",

    ExampleIndexes: [
      {
        name: "Standard (Default)",
        position: 0,
        tokenArray: [
          {
            id: 1,
            term: "i",
          },
          {
            id: 2,
            term: "demand",
          },
          {
            id: 3,
            term: "to (2)",
          },
          {
            id: 4,
            term: "speak",
          },
          {
            id: 5,
            term: "the (2)",
          },
          {
            id: 6,
            term: "head (3)",
          },
          {
            id: 7,
            term: "of",
          },

          {
            id: 8,
            term: "department",
          },
        ],
      },
      {
        name: "Lucene.English",
        position: 1,
        tokenArray: [
          {
            id: 1,
            term: "i",
          },
          {
            id: 2,
            term: "demand",
          },
          {
            id: 3,
            term: "speak",
          },
          {
            id: 4,
            term: "head (3)",
          },
          {
            id: 5,
            term: "depart",
          },
        ],
      },
      {
        name: "Simple",
        position: 2,
        tokenArray: [
          {
            id: 1,
            term: "i",
          },
          {
            id: 2,
            term: "demand",
          },
          {
            id: 3,
            term: "to (2)",
          },
          {
            id: 4,
            term: "speak",
          },
          {
            id: 5,
            term: "the (2)",
          },
          {
            id: 6,
            term: "head (3)",
          },
          {
            id: 7,
            term: "of",
          },

          {
            id: 8,
            term: "department",
          },
        ],
      },
      {
        name: "Whitespace",
        position: 3,
        tokenArray: [
          {
            id: 1,
            term: "<head>I",
          },
          {
            id: 2,
            term: "demand",
          },
          {
            id: 3,
            term: "to (2)",
          },
          {
            id: 4,
            term: "speak",
          },
          {
            id: 5,
            term: "the (2)",
          },
          {
            id: 6,
            term: "head",
          },
          {
            id: 7,
            term: "of",
          },

          {
            id: 8,
            term: "department.</head>",
          },
        ],
      },
      {
        name: "Keyword",
        position: 4,
        tokenArray: [
          {
            id: 1,
            term: "<head>I demand to speak to the head of the department.</head>",
          },
        ],
      },
      {
        name: "French",
        position: 0,
        tokenArray: [
          {
            id: 1,
            term: "i",
          },
          {
            id: 2,
            term: "demand",
          },
          {
            id: 3,
            term: "to (2)",
          },
          {
            id: 4,
            term: "speak",
          },
          {
            id: 5,
            term: "the (2)",
          },
          {
            id: 6,
            term: "head (3)",
          },
          {
            id: 7,
            term: "of",
          },

          {
            id: 8,
            term: "depart",
          },
        ],
      },
    ],
    ExampleRemovals: [
      {
        name: "Standard (Default)",
        position: 0,
        tokenArray: [
          {
            id: 1,
            term: "<",
          },
          {
            id: 2,
            term: ">",
          },
          {
            id: 3,
            term: ".",
          },
          {
            id: 4,
            term: ">",
          },
        ],
      },
      {
        name: "English",
        position: 1,
        tokenArray: [
          {
            id: 1,
            term: "<",
          },
          {
            id: 2,
            term: ">",
          },
          {
            id: 3,
            term: "to",
          },
          {
            id: 4,
            term: "the",
          },
          {
            id: 5,
            term: "-ment",
          },
          {
            id: 6,
            term: ".",
          },
          {
            id: 7,
            term: ">",
          },
        ],
      },
      {
        name: "Simple",
        position: 2,
        tokenArray: [
          {
            id: 1,
            term: "<",
          },
          {
            id: 2,
            term: ">",
          },
          {
            id: 3,
            term: ".",
          },
          {
            id: 4,
            term: ">",
          },
        ],
      },
      {
        name: "Whitespace",
        position: 3,
        tokenArray: [
          {
            id: 1,
            term: "  ",
          },
        ],
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
            id: 1,
            term: "<",
          },
          {
            id: 2,
            term: ">",
          },

          {
            id: 3,
            term: "-ment",
          },
          {
            id: 4,
            term: ".",
          },
          {
            id: 5,
            term: ">",
          },
        ],
      },
    ],
  });

  return (
    <HTMLContext.Provider value={[indexes]}>
      {props.children}
    </HTMLContext.Provider>
  );
};
