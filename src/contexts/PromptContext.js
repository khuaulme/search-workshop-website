import React, { useState, createContext } from "react";

export const PromptContext = createContext({});

export const PromptProvider = (props) => {
  const [indexes] = useState({
    ExampleSentence:
      "SELECT TEXT ABOVE AND CHOOSE BUILT-IN ANALYZER TO VIEW TOKENS",

    ExampleIndexes: [
      {
        name: "PROMPT",

        tokenArray: [],
      },
    ],
  });

  return (
    <PromptContext.Provider value={[indexes]}>
      {props.children}
    </PromptContext.Provider>
  );
};

export default PromptContext;
