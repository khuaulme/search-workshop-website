import { useState, useContext } from "react";
import { Tab } from "@headlessui/react";
import { SentenceContext } from "../contexts/SentenceContext";
import { IndexDescriptionContext } from "../contexts/IndexDescriptionContext";
import { EmailContext } from "../contexts/EmailContext";
import { HTMLContext } from "../contexts/HTMLContext";
import { PromptContext } from "../contexts/PromptContext";
import { FrenchContext } from "../contexts/FrenchContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const IndexTabs = ({ data }) => {
  const [sentenceIndexes] = useContext(SentenceContext);
  const [emailIndexes] = useContext(EmailContext);
  const [htmlIndexes] = useContext(HTMLContext);
  const [promptIndexes] = useContext(PromptContext);
  const [frenchIndexes] = useContext(FrenchContext);

  let indexes;

  switch (data) {
    case "prompt":
      indexes = promptIndexes;
      break;
    case "sentence":
      indexes = sentenceIndexes;
      break;
    case "email":
      indexes = emailIndexes;
      break;
    case "html":
      indexes = htmlIndexes;
      break;
    case "phrase":
      indexes = frenchIndexes;
      break;

    default:
      console.log("Hmmm.... I'm sorry I don't know that data.");
  }

  const [definitionsBoth] = useContext(IndexDescriptionContext);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const definitions = definitionsBoth.long;

  return (
    <div className="w-full sm:px-0">
      <Tab.Group
        onChange={(index) => {
          setSelectedIndex(index);
        }}
      >
        <Tab.List className="flex space-x-1 bg-forestgreen rounded-xl">
          {definitions.map((definition, idx) => (
            <Tab
              key={idx}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-black rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-evergreen ring-white ring-opacity-60",
                  selected
                    ? "bg-white shadow"
                    : "text-green-50 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              <button>{definition.name}</button>
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="mt-2">
          {definitions.map((definition, idx) => (
            // definition.position === selectedIndex &&
            <Tab.Panel
              key={idx}
              className={classNames(
                "bg-white rounded-xl py-3 px-10",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
              )}
            >
              <ul>
                {definition.textArray.map((post) => (
                  <li
                    key={post.id}
                    className="relative p-3 rounded-md hover:bg-coolGray-100"
                  >
                    <h3 className="font-sans text-lexend text-black font-medium leading-5">
                      {post.text}
                    </h3>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap justify-center">
                {definition.ruleArray.map((post) => (
                  <div
                    key={post.id}
                    className="flex relative p-3 rounded-md hover:bg-coolGray-100"
                  >
                    <h3 className="font-sans text-lexend font-medium leading-5 bg-slateblue text-sun px-3 py-2 rounded-lg shadow-lg">
                      {post.term}
                    </h3>
                  </div>
                ))}
              </div>

              {data !== "prompt" && (
                <>
                  <div className=" text-forestgreen font-bold py-4 px-2 my-2 rounded-lg text-center">
                    {/* {`${indexes.ExampleSentence}`} */}
                    {`Tokens Resulting from the ${definitions[selectedIndex].name} Analyzer:`}
                  </div>
                  <div className="bg-fuchsia-800 rounded h-1"></div>
                </>
              )}
              {/* ---------------------------------TOKENS REMOVED  ---------------------------------*/}
              {data !== "prompt" && (
                <div className="flex flex-wrap justify-center">
                  {indexes.ExampleRemovals[selectedIndex].tokenArray.map(
                    (post) => (
                      <ul
                        key={post.id}
                        className="relative p-3 rounded-md hover:bg-coolGray-100"
                      >
                        <h3 className="font-sans text-lexend font-medium leading-5 bg-red-700 text-white px-3 py-2 rounded-lg shadow-lg">
                          {post.term}
                        </h3>
                      </ul>
                    )
                  )}
                </div>
              )}

              {/* --------------------------------- TOKENS KEPT  ---------------------------------*/}
              {data !== "prompt" && (
                <div className="flex flex-wrap justify-center">
                  {indexes.ExampleIndexes[selectedIndex].tokenArray.map(
                    (post) => (
                      <ul
                        key={post.id}
                        className="relative p-3 rounded-md hover:bg-coolGray-100"
                      >
                        <h3 className="font-sans text-lexend font-medium leading-5 bg-chromeyellow px-3 py-2 rounded-lg shadow-lg">
                          {post.term}
                        </h3>
                      </ul>
                    )
                  )}
                </div>
              )}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default IndexTabs;
