import React, { useState, createContext } from "react";

export const IndexDescriptionContext = createContext({});

export const IndexDescriptionProvider = (props) => {
  const [indexDefinitions] = useState({
    long: [
      {
        name: "Standard (Default)",
        position: 0,
        textArray: [
          {
            id: 1,
            text: "The standard analyzer is the default for all Atlas Search indexes and queries.",
          },
          {
            id: 2,
            text: "It provides grammar-based tokenization that recognizes email addresses, acronyms, alphanumerics, and more.",
          },
        ],
        ruleArray: [
          {
            id: 1,
            term: "lowercase",
          },
          {
            id: 2,
            term: "removes punctuation",
          },
          {
            id: 3,
            term: "keeps accents",
          },
        ],
      },
      {
        name: "English",
        position: 1,
        textArray: [
          {
            id: 1,
            text: `The English analyzer is tailored to respect the nuances of the English language. 
            For instance, it will REMOVE STOP WORDS, such as 'and', 'the', 'is', etc. 
            It also STEMS words to their root, ex. removing the -ed, -ing, as well as recognizing pluralization.`,
          },
          {
            id: 2,
            text: "This means that you can look for PLURALS or different VERB TENSES, for instance. So you can expect more related search matches, ex. 'drinking' will match 'drinks'.",
          },
        ],
        ruleArray: [
          {
            id: 1,
            term: "lowercase",
          },
          {
            id: 2,
            term: "removes stop words",
          },
          {
            id: 3,
            term: "'stems' to root",
          },
          {
            id: 4,
            term: "pluralization",
          },
          {
            id: 5,
            term: "removes punctuation",
          },
        ],
      },
      {
        name: "Simple",
        position: 2,
        textArray: [
          {
            id: 1,
            text: "The simple analyzer simply divides text into tokens wherever it finds a non-letter character. Whitespaces, punctuation, digits are removed. All tokens are lowercased.",
          },
        ],
        ruleArray: [
          {
            id: 1,
            term: "lowercase",
          },
          {
            id: 2,
            term: "removes punctuation",
          },
          {
            id: 3,
            term: "separates at non-letters",
          },
        ],
      },
      {
        name: "Whitespace",
        position: 3,
        textArray: [
          {
            id: 1,
            text: "The whitespace analyzer divides text into searchable tokens wherever it finds a whitespace character. It leaves all terms in their ORIGINAL case and KEEPS punctuation.",
          },
        ],
        ruleArray: [
          {
            id: 1,
            term: "keeps case ",
          },
          {
            id: 2,
            term: "keeps punctuation",
          },
          {
            id: 3,
            term: "separates at whitespace",
          },
        ],
      },
      {
        name: "Keyword",
        position: 4,
        textArray: [
          {
            id: 1,
            text: "The keyword analyzer accepts a string or array of strings as a parameter and indexes them as SINGLE token. Casing and punctuation are preserved completely.",
          },
          {
            id: 3,
            text: "Only EXACT matches on the field are returned.",
          },
        ],
        ruleArray: [
          {
            id: 1,
            term: "keeps everything intact!",
          },
        ],
      },
      {
        name: "French",
        position: 5,
        textArray: [
          {
            id: 1,
            text: `Specific for the French language. As the English language removes common words in English, 
            the French analyzer will removes common French words, ex. le, au, mon, etre.`,
          },
          {
            id: 2,
            text: "Stems and pluralizes as appropriate in French.",
          },
        ],
        ruleArray: [
          {
            id: 1,
            term: "removes common French stop words",
          },
          {
            id: 2,
            term: "observes pluralization and stemming",
          },
          {
            id: 3,
            term: "removes punctuation",
          },
        ],
      },
    ],
    short: [
      {
        name: "Standard (Default)",
        position: 0,
        textArray: [
          {
            id: 1,
            text: "The standard analyzer is the default for all Atlas Search indexes and queries.",
          },
          {
            id: 2,
            text: "It provides grammar-based tokenization that recognizes email addresses, acronyms, alphanumerics, and more.",
          },
        ],
        ruleArray: [
          {
            id: 1,
            term: "lowercase",
          },
          {
            id: 2,
            term: "removes punctuation",
          },
          {
            id: 3,
            term: "keeps accents",
          },
        ],
      },
      {
        name: "English",
        position: 1,
        textArray: [
          {
            id: 1,
            text: `The English analyzer is tailored to respect the nuances of the English language. 
            For instance, it will REMOVE STOP WORDS, such as 'and', 'the', 'is', etc. 
            It also STEMS words to their root, ex. removing the -ed, -ing, as well as recognizing pluralization.`,
          },
          {
            id: 2,
            text: "This means that you can look for PLURALS or different VERB TENSES, for instance. So you can expect more related search matches, ex. 'drinking' will match 'drinks'.",
          },
        ],
        ruleArray: [
          {
            id: 1,
            term: "lowercase",
          },
          {
            id: 2,
            term: "removes stop words",
          },
          {
            id: 3,
            term: "'stems' to root",
          },
          {
            id: 4,
            term: "pluralization",
          },
          {
            id: 5,
            term: "removes punctuation",
          },
        ],
      },
      {
        name: "French",
        position: 5,
        textArray: [
          {
            id: 1,
            text: `Specific for the French language. As the English language removes common words in English, 
            the French analyzer will removes common French words, ex. le, au, mon, etre.`,
          },
          {
            id: 2,
            text: "Stems and pluralizes as appropriate in French.",
          },
        ],
        ruleArray: [
          {
            id: 1,
            term: "removes common French stop words",
          },
          {
            id: 2,
            term: "observes pluralization and stemming",
          },
          {
            id: 3,
            term: "removes punctuation",
          },
        ],
      },
      {
        name: "Multi: English & French",
        position: 6,
        textArray: [
          {
            id: 1,
            text: "You can apply multiple analyzers to a field with the 'multi' object in the index definition.",
          },
          {
            id: 2,
            text: "In this example, we apply both the English and French analyzers.",
          },
        ],
        ruleArray: [
          {
            id: 1,
            term: "removes common French and English stop words",
          },
          {
            id: 2,
            term: "observes pluarlization and stemming",
          },
          {
            id: 3,
            term: "removes punctuation",
          },
        ],
      },
    ],
  });

  return (
    <IndexDescriptionContext.Provider value={[indexDefinitions]}>
      {props.children}
    </IndexDescriptionContext.Provider>
  );
};

export default IndexDescriptionContext;
