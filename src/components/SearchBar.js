import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SearchIcon from "../images/SearchIcon.png";
import ListBox from "../components/ListBox";
import ResetButton from "../images/ResetButton.png";
import { FaCoins } from "react-icons/fa";

const SearchBar = ({
  indexForAggregation,
  setIndexForAggregation,
  data,
  level,
  srcPage,
  field,
  setField,
}) => {
  const { register, handleSubmit, errors, reset } = useForm();

  const [searchTerm, setSearchTerm] = useState("");
  const [highlightString, setHighlightString] = useState("");

  // devaddemos - atlassearchindexes-swlql
  //searchwebinar- searchtokens-qfsos

  const fetchSentence = async () => {
    let FetchSentenceURL = `https://us-east-1.aws.data.mongodb-api.com/app/atlassearchindexes-swlql/endpoint/getTokens?arg=${searchTerm}&index=${indexForAggregation}&field=${data}`;
    if (srcPage === "TokenTest") {
      FetchSentenceURL = `https://us-east-1.aws.data.mongodb-api.com/app/atlassearchindexes-swlql/endpoint/testTokens?arg=${searchTerm}&index=${indexForAggregation}&field=${field}`;
      console.log("FROM TOKEN TEST URL:", FetchSentenceURL);
    }
    let response = await (await fetch(FetchSentenceURL)).json();

    console.log("RESPONSE: ", response.highlights); // response.highlights is an array
    console.log("AGGSTRING", response.aggString);

    if (response.highlights.length !== 0) {
      let builtHighlightString = buildPlotHighlights(
        response.highlights[0].highlights
      );

      if (data === "html" && srcPage === "Home") {
        if (
          searchTerm.includes("head") &&
          indexForAggregation !== "whitespace"
        ) {
          console.log("HEAD IS INSERTED");
          const first = builtHighlightString.split(".")[0];

          builtHighlightString = `<div className="flex">${first}. &#60; &#47;<span style="color: yellow; font-size: 28px; font-weight:bold">head</span>&#62;</div>`;
        } else {
          builtHighlightString = `<div className="text-white text-2xl my-8 font-bold text-center">
              &#60;
              <span className="text-yellow-400 text-3xl my-8 font-bold">
                head
              </span>
              &#62;${builtHighlightString} &#60; &#47; head &#62; </div>`;
        }
      }

      setHighlightString(builtHighlightString);
    } else {
      if (searchTerm !== "")
        setHighlightString(
          `There was <span style="color: red; font-size: 30px;"><b>NO</b></span> match for <span style="color: yellow; font-size: 30px;"><b>"${searchTerm}"</b></span> with the <span style="color: yellow; font-size: 30px;"><b>${indexForAggregation}</b></span> index. <span style="font-size: 48px;">😞</span>`
        );
    }
  }; // END OF FUNCTION DEFINTION

  const buildPlotHighlights = (highlights) => {
    // takes an array
    let highlightString = "";

    highlights.forEach((highlight) => {
      console.log(highlight.texts);
      let texts = highlight.texts;
      texts.forEach((text) => {
        if (text.type === "hit")
          highlightString += `<span style="color: yellow; font-size: 30px;"><b> ${text.value} </b></span>`;
        else highlightString += text.value;
      });
    });
    console.log(highlightString);
    return highlightString;
  };

  const onSubmit = (data) => {
    console.log("DATA SUBMITTED ON SEARCH FORM");
    console.log(data);
    if (data.searchString.includes("<")) {
      setSearchTerm(String(data.searchString));
    } else setSearchTerm(data.searchString);
  };

  useEffect(() => {
    fetchSentence(searchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, indexForAggregation]);

  useEffect(() => {
    reset();
    setSearchTerm("");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="w-full">
      <form className="flex mx-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-full space-x-2">
          <div className="flex items-center bg-white w-5/6 px-6 text-lg text-black placeholder-green-500 duration-700 ease-in-out transform border border-green-800 rounded transition-width hover:shadow-xl">
            <input
              type="text"
              name="term"
              id="search"
              placeholder="what are you looking for?"
              autocomplete="off"
              className="text-black outline-none w-full"
              {...register("searchString")}
            ></input>
            <img
              src={SearchIcon}
              alt="magnifier"
              className="w-16 transform -rotate-12"
              onClick={() => {
                handleSubmit(onSubmit);
              }}
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col">
          <div className="text-sun text-center">CHOOSE ANALYZER:</div>

          <ListBox
            choice={indexForAggregation}
            setChoice={setIndexForAggregation}
            choices={analyzers}
            data={data}
          />
        </div>
        <button
          type="button"
          onClick={() => {
            reset();
          }}
        >
          <img src={ResetButton} alt="reset" className="w-16 shadow-2xl ml-6" />
        </button>
      </form>
      {searchTerm && (data !== "prompt" || srcPage === "TokenTest") && (
        <>
          <div
            className="text-white text-center text-2xl my-2 mt-4"
            dangerouslySetInnerHTML={{ __html: highlightString }}
          ></div>

          <div className="flex border-t-2 border-forestgreen mt-6 px-10 justify-center">
            <div className="text-white text-2xl my-4 text-center">
              Was there a <span className="text-springgreen">match</span>{" "}
              highlighted in{" "}
              <span className="text-yellow-200 font-bold">yellow</span>? Try a
              different analyzer.
            </div>
            <FaCoins
              className="w-16 h-16 text-yellow-400 ml-10 mt-8"
              aria-hidden="true"
            />
          </div>
        </>
      )}
    </div>
  );
};

const analyzers = [
  {
    dataType: "standard",
    dataString: "Standard (Default)",
  },
  {
    dataType: "english",
    dataString: "English",
  },
  {
    dataType: "simple",
    dataString: "Simple",
  },
  {
    dataType: "whitespace",
    dataString: "Whitespace",
  },
  {
    dataType: "keyword",
    dataString: "Keyword",
  },
  {
    dataType: "french",
    dataString: "French",
  },
];
const analyzersMulti = [
  {
    dataType: "standard",
    dataString: "Standard (Default)",
  },
  {
    dataType: "english",
    dataString: "English",
  },
  {
    dataType: "french",
    dataString: "French",
  },
  {
    dataType: "multi",
    dataString: "Multi",
  },
];

export default SearchBar;
