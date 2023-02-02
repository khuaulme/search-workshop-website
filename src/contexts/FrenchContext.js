import React, { useState, createContext } from "react";

export const FrenchContext = createContext({});

export const FrenchProvider = (props) => {
  const [indexes] = useState({
    ExampleSentence:
      "Bonjour. Je m’appelle Thérèse, et je suis la gérante de cet établissement.",

    ExampleIndexes: [
      {
        name: "Standard (Default)",
        position: 0,
        tokenArray: [
          {
            id: 1,
            term: "bonjour",
          },
          {
            id: 2,
            term: "je (2)",
          },
          {
            id: 3,
            term: "m'appelle",
          },
          {
            id: 4,
            term: "thérèse",
          },
          {
            id: 5,
            term: "et",
          },
          {
            id: 6,
            term: "suis",
          },
          {
            id: 7,
            term: "la",
          },
          {
            id: 8,
            term: "gérante",
          },
          {
            id: 9,
            term: "de",
          },
          {
            id: 10,
            term: "cet",
          },
          {
            id: 11,
            term: "établissement",
          },
        ],
      },
      {
        name: "Lucene.English:",
        position: 1,
        tokenArray: [
          {
            id: 1,
            term: "bonjour",
          },
          {
            id: 2,
            term: "je (2)",
          },
          {
            id: 3,
            term: "m'appel",
          },
          {
            id: 4,
            term: "thérèse",
          },
          {
            id: 5,
            term: "et",
          },
          {
            id: 6,
            term: "sui",
          },

          {
            id: 7,
            term: "la",
          },
          {
            id: 8,
            term: "gérant",
          },
          {
            id: 9,
            term: "de",
          },
          {
            id: 10,
            term: "cet",
          },
          {
            id: 11,
            term: "etabliss",
          },
        ],
      },
      {
        name: "Simple",
        position: 2,
        tokenArray: [
          {
            id: 1,
            term: "bonjour",
          },
          {
            id: 2,
            term: "je (2)",
          },
          {
            id: 3,
            term: "m",
          },
          {
            id: 4,
            term: "appelle",
          },
          {
            id: 4,
            term: "thérèse",
          },
          {
            id: 5,
            term: "suis",
          },

          {
            id: 6,
            term: "la",
          },
          {
            id: 7,
            term: "gérante",
          },
          {
            id: 8,
            term: "de",
          },
          {
            id: 9,
            term: "cet",
          },
          {
            id: 10,
            term: "etablissement",
          },
        ],
      },
      {
        name: "Whitespace",
        position: 3,
        tokenArray: [
          {
            id: 1,
            term: "Bonjour.",
          },
          {
            id: 2,
            term: "Je (2)",
          },
          {
            id: 3,
            term: "m'appelle",
          },

          {
            id: 4,
            term: "Thérèse.",
          },
          {
            id: 5,
            term: "suis",
          },

          {
            id: 6,
            term: "la",
          },
          {
            id: 7,
            term: "gérante",
          },
          {
            id: 8,
            term: "de",
          },
          {
            id: 9,
            term: "cet",
          },
          {
            id: 10,
            term: "établissement.",
          },
        ],
      },
      {
        name: "Keyword",
        position: 4,
        tokenArray: [
          {
            id: 1,
            term: "Bonjour. Je m’appelle Thérèse. Je suis la gérante de cet établissement.",
          },
        ],
      },
      {
        name: "French",
        position: 5,
        tokenArray: [
          {
            id: 1,
            term: "bonjou",
          },
          {
            id: 2,
            term: "apel",
          },
          {
            id: 3,
            term: "theres",
          },
          {
            id: 4,
            term: "gerant",
          },
          {
            id: 5,
            term: "etabli",
          },
        ],
      },
      {
        name: "Multi",
        position: 6,
        tokenArray: [
          {
            id: 1,
            term: "bonjou",
          },
          {
            id: 2,
            term: "apel",
          },
          {
            id: 3,
            term: "theres",
          },
          {
            id: 4,
            term: "gerant",
          },
          {
            id: 5,
            term: "etabli",
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
            id: 0,
            term: ",",
          },
          {
            id: 1,
            term: ".",
          },
          {
            id: 2,
            term: "!",
          },
        ],
      },
      {
        name: "English",
        position: 1,
        tokenArray: [
          {
            id: 0,
            term: ".",
          },
          {
            id: 1,
            term: "m'",
          },

          {
            id: 2,
            term: "-le",
          },
          {
            id: 3,
            term: "-s",
          },
          {
            id: 4,
            term: "-e",
          },
          {
            id: 5,
            term: "-ement",
          },
        ],
      },
      {
        name: "Simple",
        position: 2,
        tokenArray: [
          {
            id: 0,
            term: ".",
          },
          {
            id: 1,
            term: "'",
          },
        ],
      },
      {
        name: "Whitespace",
        position: 3,
        tokenArray: [
          {
            id: 1,
            term: " ",
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
            id: 0,
            term: "-r",
          },
          {
            id: 1,
            term: "-m'",
          },
          {
            id: 2,
            term: "-le",
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
            term: "-r",
          },
          {
            id: 1,
            term: "-m'",
          },
          {
            id: 2,
            term: "-le",
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
    ],
  });

  return (
    <FrenchContext.Provider value={[indexes]}>
      {props.children}
    </FrenchContext.Provider>
  );
};
