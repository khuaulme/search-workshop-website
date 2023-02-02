import React, { useState, createContext } from "react";

export const EmailContext = createContext({});

export const EmailProvider = (props) => {
  const [indexes] = useState({
    ExampleSentence: "KarenLikeTheMeme@mongodb.com",

    ExampleIndexes: [
      {
        name: "Standard (Default)",
        position: 0,
        tokenArray: [
          {
            id: 1,
            term: "karenlikethememe",
          },
          {
            id: 2,
            term: "mongodb.com",
          },
        ],
      },
      {
        name: "Lucene.English",
        position: 1,
        tokenArray: [
          {
            id: 1,
            term: "karenlikethemem",
          },
          {
            id: 2,
            term: "mongodb.com",
          },
        ],
      },
      {
        name: "Simple",
        position: 2,
        tokenArray: [
          {
            id: 1,
            term: "karenlikethememe",
          },
          {
            id: 2,
            term: "mongodb",
          },
          {
            id: 3,
            term: "com",
          },
        ],
      },
      {
        name: "Whitespace",
        position: 3,
        tokenArray: [
          {
            id: 1,
            term: "KarenLikeTheMeme@mongodb.com",
          },
        ],
      },
      {
        name: "Keyword",
        position: 4,
        tokenArray: [
          {
            id: 1,
            term: "KarenLikeTheMeme@mongodb.com",
          },
        ],
      },
      {
        name: "French",
        position: 5,
        tokenArray: [
          {
            id: 1,
            term: "karenlikethemem",
          },
          {
            id: 2,
            term: "mongodb.com",
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
            term: "@",
          },
        ],
      },
      {
        name: "English",
        position: 1,
        tokenArray: [
          {
            id: 0,
            term: "@",
          },
        ],
      },
      {
        name: "Simple",
        position: 2,
        tokenArray: [
          {
            id: 1,
            term: "@",
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
            id: 1,
            term: "@",
          },
        ],
      },
    ],
  });

  return (
    <EmailContext.Provider value={[indexes]}>
      {props.children}
    </EmailContext.Provider>
  );
};
