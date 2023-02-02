import { useState, useContext } from "react";
import { Tab } from "@headlessui/react";
import { SentenceContext } from "../contexts/SentenceContext";
import { IndexDescriptionContext } from "../contexts/IndexDescriptionContext";

import { PromptContext } from "../contexts/PromptContext";
import { FrenchContext } from "../contexts/FrenchContext";
import { ArrayContext } from "../contexts/ArrayContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const IndexTabs = ({ data }) => {
  const [sentenceIndexes] = useContext(SentenceContext);
  const [promptIndexes] = useContext(PromptContext);
  const [frenchIndexes] = useContext(FrenchContext);
  const [multiIndexes] = useContext(ArrayContext);
  let indexes;

  switch (data) {
    case "prompt":
      indexes = promptIndexes;
      break;
    case "sentence":
      indexes = sentenceIndexes;
      break;
    case "phrase":
      indexes = frenchIndexes;
      break;
    case "favoriteMovies":
      indexes = multiIndexes;
      break;
    default:
      console.log("Hmmm.... I'm sorry I don't know that data.");
  }

  const [definitionsBoth] = useContext(IndexDescriptionContext);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [multiIndex, setMultiIndex] = useState(0);
  const definitions = definitionsBoth.short;

  return (
    <div className="w-full px-10 sm:px-0">
      <Tab.Group
        onChange={(index) => {
          setSelectedIndex(index); // these are integers starting at 0-standard, english - 1, french 2, multi - 3

          if (index === 2) setMultiIndex(5);
          else if (index === 3) setMultiIndex(6);
          else setMultiIndex(index);
        }}
      >
        <Tab.List className="flex p-1 space-x-1 bg-forestgreen rounded-xl">
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
                    <h3 className="font-sans text-lexend font-medium leading-5">
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

              <hr
                style={{
                  color: "darkblue",
                  backgroundColor: "darkblue",
                  height: 4,
                  borderColor: "darkblue",
                }}
              />

              <div className="bg-white font-bold py-4 px-2 my-2 rounded-lg text-center">
                {`${indexes.ExampleSentence}`}
              </div>

              {/* ---------------------------------TOKENS REMOVED  ---------------------------------*/}
              {data !== "prompt" && (
                <div className="flex flex-wrap justify-center">
                  {indexes.ExampleRemovals[multiIndex].tokenArray.map(
                    (post) => (
                      <ul
                        key={post.id}
                        className="relative p-3 rounded-md hover:bg-coolGray-100"
                      >
                        <h3 className="font-sans text-lexend font-medium leading-5 bg-red-600 text-white px-3 py-2 rounded-lg shadow-lg">
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
                  {indexes.ExampleIndexes[multiIndex].tokenArray.map((post) => (
                    <ul
                      key={post.id}
                      className="relative p-3 rounded-md hover:bg-coolGray-100"
                    >
                      <h3 className="font-sans text-lexend font-medium leading-5 bg-chromeyellow px-3 py-2 rounded-lg shadow-lg">
                        {post.term}
                      </h3>
                    </ul>
                  ))}
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

/*





        -----

          <Tab.List className="flex p-1 space-x-1 bg-forestgreen rounded-xl">
          {definitions.map((definition, idx) =>
            data !== "favoriteMovies" && definition.position !== 6 ? (
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
            ) : data === "favoriteMovies" &&
              definition.position !== 2 &&
              definition.position !== 3 ? (
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
            ) : null
          )}
        </Tab.List>
        */
