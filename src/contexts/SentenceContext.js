import React, { useState, createContext } from "react";

export const SentenceContext = createContext({});

export const SentenceProvider = (props) => {
  const [indexes] = useState({
    ExampleSentence:
      "As I was walking to work, I listened to 2 of Mike Lynn's podcasts, and I dropped my keys.",

    ExampleIndexes: [
      {
        name: "Standard (Default)",
        position: 0,
        tokenArray: [
          {
            id: 1,
            term: "as",
          },
          {
            id: 2,
            term: "i (3)",
          },
          {
            id: 3,
            term: "was",
          },
          {
            id: 4,
            term: "walking",
          },
          {
            id: 5,
            term: "to (2)",
          },
          {
            id: 6,
            term: "work",
          },
          {
            id: 7,
            term: "listened",
          },
          {
            id: 8,
            term: "to",
          },
          {
            id: 9,
            term: "2",
          },
          {
            id: 10,
            term: "of",
          },

          {
            id: 11,
            term: "mike",
          },
          {
            id: 12,
            term: "lynn's",
          },
          {
            id: 13,
            term: "podcasts",
          },
          {
            id: 14,
            term: "and",
          },

          {
            id: 15,
            term: "dropped",
          },
          {
            id: 16,
            term: "my",
          },
          {
            id: 17,
            term: "keys",
          },
        ],
      },
      {
        name: "English:",
        position: 1,
        tokenArray: [
          {
            id: 1,
            term: "i (3)",
          },
          {
            id: 2,
            term: "walk",
          },
          {
            id: 3,
            term: "work",
          },
          {
            id: 4,
            term: "listen",
          },
          {
            id: 5,
            term: "mike",
          },

          {
            id: 6,
            term: "lynn",
          },
          {
            id: 7,
            term: "podcast",
          },
          {
            id: 8,
            term: "2",
          },
          {
            id: 9,
            term: "drop",
          },
          {
            id: 10,
            term: "my",
          },
          {
            id: 11,
            term: "kei",
          },
        ],
      },
      {
        name: "Simple",
        position: 2,
        tokenArray: [
          {
            id: 1,
            term: "as",
          },
          {
            id: 2,
            term: "i (3)",
          },
          {
            id: 3,
            term: "was",
          },
          {
            id: 4,
            term: "walking",
          },
          {
            id: 5,
            term: "to (2)",
          },
          {
            id: 6,
            term: "work",
          },
          {
            id: 7,
            term: "listened",
          },
          {
            id: 8,
            term: "of",
          },

          {
            id: 9,
            term: "mike",
          },

          {
            id: 10,
            term: "lynn",
          },
          {
            id: 11,
            term: "s",
          },

          {
            id: 12,
            term: "podcasts",
          },
          {
            id: 13,
            term: "and",
          },
          {
            id: 14,
            term: "dropped",
          },
          {
            id: 15,
            term: "my",
          },
          {
            id: 16,
            term: "keys",
          },
        ],
      },
      {
        name: "Whitespace",
        position: 3,
        tokenArray: [
          {
            id: 1,
            term: "As",
          },
          {
            id: 2,
            term: "I (3)",
          },
          {
            id: 3,
            term: "was",
          },
          {
            id: 4,
            term: "walking",
          },
          {
            id: 5,
            term: "to (2)",
          },
          {
            id: 6,
            term: "work,",
          },
          {
            id: 7,
            term: "listened",
          },
          {
            id: 8,
            term: "2",
          },
          {
            id: 9,
            term: "of",
          },
          {
            id: 10,
            term: "Mike",
          },
          {
            id: 11,
            term: "Lynn's",
          },
          {
            id: 12,
            term: "podcasts,",
          },
          {
            id: 13,
            term: "and",
          },
          {
            id: 14,
            term: "dropped",
          },
          {
            id: 15,
            term: "my",
          },
          {
            id: 16,
            term: "keys.",
          },
        ],
      },
      {
        name: "Keyword",
        position: 4,
        tokenArray: [
          {
            id: 1,
            term: "As I was walking to work, I listened to 2 of Mike Lynn's podcasts, and I dropped my keys.",
          },
        ],
      },
      {
        name: "French",
        position: 5,
        tokenArray: [
          {
            id: 1,
            term: "i (3)",
          },
          {
            id: 2,
            term: "was",
          },
          {
            id: 3,
            term: "walking",
          },
          {
            id: 4,
            term: "to (2)",
          },
          {
            id: 5,
            term: "work",
          },
          {
            id: 6,
            term: "listened",
          },
          {
            id: 7,
            term: "2",
          },

          {
            id: 8,
            term: "of",
          },

          {
            id: 9,
            term: "mike",
          },
          {
            id: 10,
            term: "lyn'",
          },
          {
            id: 11,
            term: "podcast",
          },
          {
            id: 12,
            term: "and",
          },

          {
            id: 13,
            term: "droped",
          },
          {
            id: 14,
            term: "my",
          },
          {
            id: 15,
            term: "key",
          },
        ],
      },
      {
        name: "Multi",
        position: 6,
        tokenArray: [
          {
            id: 1,
            term: "i (3)",
          },
          {
            id: 2,
            term: "was",
          },
          {
            id: 3,
            term: "walking",
          },
          {
            id: 4,
            term: "to (2)",
          },
          {
            id: 5,
            term: "work",
          },
          {
            id: 6,
            term: "listened",
          },
          {
            id: 7,
            term: "2",
          },

          {
            id: 8,
            term: "of",
          },

          {
            id: 9,
            term: "mike",
          },
          {
            id: 10,
            term: "lynn's",
          },
          {
            id: 11,
            term: "podcasts",
          },
          {
            id: 12,
            term: "and",
          },

          {
            id: 13,
            term: "dropped",
          },
          {
            id: 14,
            term: "my",
          },
          {
            id: 15,
            term: "keys",
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
            term: "As",
          },
          {
            id: 1,
            term: "was",
          },
          {
            id: 2,
            term: "-ing",
          },
          {
            id: 3,
            term: "to",
          },
          {
            id: 4,
            term: ",",
          },
          {
            id: 5,
            term: "-ed",
          },
          {
            id: 6,
            term: "of",
          },
          {
            id: 7,
            term: "-'s",
          },
          {
            id: 8,
            term: "-s",
          },
          {
            id: 9,
            term: "and",
          },
        ],
      },
      {
        name: "Simple",
        position: 2,
        tokenArray: [
          {
            id: 0,
            term: ",",
          },
          {
            id: 1,
            term: "2",
          },
          {
            id: 2,
            term: ".",
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
            term: "As",
          },
          {
            id: 1,
            term: ",",
          },
          {
            id: 2,
            term: ".",
          },
        ],
      },
      {
        name: "Multi",
        position: 6,
        tokenArray: [
          {
            id: 0,
            term: "As",
          },
          {
            id: 1,
            term: ",",
          },
          {
            id: 2,
            term: ".",
          },
        ],
      },
    ],
  });

  return (
    <SentenceContext.Provider value={[indexes]}>
      {props.children}
    </SentenceContext.Provider>
  );
};
