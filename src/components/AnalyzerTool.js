import React, { useState } from "react";
import IndexTabs from "../components/IndexTabs";
import IndexTabsMulti from "../components/IndexTabsMulti";
import ListBox from "../components/ListBox";
import SearchBar from "./SearchBar";
import Instructions from "../images/WorkingSteps.png";

import { SentenceProvider } from "../contexts/SentenceContext";
import { IndexDescriptionProvider } from "../contexts/IndexDescriptionContext";
import { EmailProvider } from "../contexts/EmailContext";
import { HTMLProvider } from "../contexts/HTMLContext";
import { PromptProvider } from "../contexts/PromptContext";
import { FrenchProvider } from "../contexts/FrenchContext";
import { ArrayProvider } from "../contexts/ArrayContext";

const AnalyzerTool = () => {
  const [data, setData] = useState("prompt");
  const [indexForAggregation, setIndexForAggregation] = useState("standard");
  const [level, setLevel] = useState("basic"); // or "multi"
  const [field, setField] = useState(""); // get from the Input.js

  return (
    <SentenceProvider>
      <EmailProvider>
        <HTMLProvider>
          <PromptProvider>
            <FrenchProvider>
              <ArrayProvider>
                <IndexDescriptionProvider>
                  <div className=" pb-10 min-96 text-white w-full mb-10 rounded">
                    {/* ----------BEGIN CARD ----------- */}
                    <div className="w-full justify-evenly flex bg-slateblue py-6 rounded shadow-2xl">
                      <div className="flex flex-col  z-10 w-1/2 px-10">
                        <ListBox
                          choice={data}
                          setChoice={setData}
                          choices={stringsToIndex}
                        ></ListBox>
                        <IndexTabs data={data} />
                      </div>

                      {/* 2nd col */}
                      <div className="lastRow w-2/5 flex flex-col pt-6">
                        <img
                          alt="instructions"
                          src={Instructions}
                          className="mx-auto"
                        />

                        <div className="flex w-full pr-10">
                          <SearchBar
                            className="w-full"
                            indexForAggregation={indexForAggregation}
                            setIndexForAggregation={setIndexForAggregation}
                            data={data}
                            level={level}
                          />
                        </div>
                      </div>
                    </div>

                    {/*------------ END CARD  --------*/}
                  </div>
                </IndexDescriptionProvider>
              </ArrayProvider>
            </FrenchProvider>
          </PromptProvider>
        </HTMLProvider>
      </EmailProvider>
    </SentenceProvider>
  );
};

const stringsToIndex = [
  {
    dataType: "prompt",
    dataString: "CHOOSE TEXT TO ANALYZE",
  },
  {
    dataType: "sentence",
    dataString:
      "As I was walking to work, I listened to 2 of Mike Lynn's podcasts, and I dropped my keys.",
  },
  {
    dataType: "email",
    dataString: "KarenLikeTheMeme@mongodb.com",
  },
  {
    dataType: "html",
    dataString: "<head>I demand to speak to the head of the department.</head>",
  },
  {
    dataType: "phrase",
    dataString:
      "Bonjour. Je m’appelle Thérèse, et je suis la gérante de cet établissement.",
  },
];
const stringsToIndexMulti = [
  {
    dataType: "prompt",
    dataString: "CHOOSE TEXT TO ANALYZE",
  },
  {
    dataType: "sentence",
    dataString:
      "As I was walking to work, I listened to 2 of Mike Lynn's podcasts, and I dropped my keys.",
  },
  {
    dataType: "phrase",
    dataString:
      "Bonjour. Je m’appelle Thérèse, et je suis la gérante de cet établissement.",
  },
  {
    dataType: "favoriteMovies",
    dataString:
      '[ " Ne le Dis à Personne ", " Raiders of the Lost Ark ", " Rocky II " ]',
  },
];

export default AnalyzerTool;
