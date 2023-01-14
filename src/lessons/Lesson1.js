import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeButton from "../images/HomeBtn.png";
import SearchIcon from "../images/SearchIcon.png";
import IndexCreation from "../images/Lesson1/IndexCreation.gif";
import Showtime from "../images/Lesson1/showtime.gif";
import MoreInfoCard from "../components/MoreInfoCard";

const Lesson1 = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  return (
    <div className="h-screen bg-white px-20 py-10 relative font-barlow text-xl text-center">
      <MoreInfoCard handleClose={setShowMoreInfo}>
        <div>Start editing</div>
        <div>See what happens</div>
      </MoreInfoCard>
      <div className="flex justify-evenly items-center mb-4">
        <div className="w-1/2 px-8 ">
          <div className="flex flex-col mb-8 ">
            <div
              className={`font-bold mb-6 uppercase text-2xl text-white bg-slateblue py-4 
         px-4 rounded-full border-8 border-green-500 mx-auto`}
            >
              {" "}
              Lesson 1. Creating Basic Search Queries
            </div>
            <div className="mb-8">
              Search adds document data to a full-text search index to make data
              searchable in a highly performant, scalable manner. In this first
              lesson, we will create a full-text search index on our
              sample_mflix movie data. Then we will query on this index to
              filter, rank and sort through those movies to quickly surface
              movies by topic.
            </div>
            <div className="flex items-center justify-center space-x-12">
              {" "}
              <div className="  my-4 text-center">
                So without further adieu...{" "}
                <span className="font-bold text-2xl">It's Showtime!</span>
              </div>
              <img
                src={Showtime}
                alt="showtime"
                className="rounded-lg mx-auto w-48"
              />
            </div>
          </div>
          {/* <hr
            style={{
              color: "green",
              backgroundColor: "green",
              height: 2,
              borderColor: "green",
            }}
          /> */}

          <div className="text-left">
            <span className="font-bold">Step 1. </span>The first thing we need
            is an Atlas Search index. Click on the tab titled Search Indexes
            under Collections. Click on the green Create Search Index button.
            Let's accept the default settings and click Create Index. That's all
            you need to do to start taking advantage of Search in your MongoDB
            Atlas data! 👊
          </div>
        </div>
        <div className="w-1/2 ">
          <img
            className="mx-auto my-auto border-4 border-rhino"
            src={IndexCreation}
            alt="index creation"
          />
        </div>
      </div>
      {/* <hr
        style={{
          color: "green",
          backgroundColor: "green",
          height: 2,
          borderColor: "green",
        }}
      /> */}

      <div>
        By accepting the default settings when we created the Search index, we
        <span className="font-bold text-green-700">
          {" "}
          dynamically mapped
        </span>{" "}
        all the fields in the collection as indicated in the default index
        configuration:{" "}
      </div>
      <div className="flex">
        <img src={SearchIcon} alt="icon" className="w-32" />
        <div>
          {" "}
          Mapping is simply how we define how the fields on our documents are
          indexed and stored. If a field's value looks like a string, we'll
          treat it as a full-text field, similarly for numbers and dates. This
          suits MongoDB's flexible data model perfectly. As you add new data to
          your collection and your schema evolves, dynamic mapping accommodates
          those changes in your schema and adds that new data to the Atlas
          Search index automatically.
        </div>
        <div
          className="mx-auto p-4 text-white h-24 bg-fuchsia-800 rounded-md flex items-center px-4 drop-shadow-2xl mb-4 uppercase "
          onClick={() => setShowMoreInfo(!showMoreInfo)}
        >
          More About Indexes
        </div>
      </div>
      {showMoreInfo && (
        <div className="flex font-barlow items-center border border-indigo-700 mt-4 relative bg-white">
          <div className="w-1/6 text-4xl">🤔</div>
          <div className="w-3/4 my-8 text-indigo-900 font-thin">
            Indexes are special data structures that enable ultra-fast querying
            and retrieval of documents based on certain identifiers. Bear in
            mind that Atlas Search indexes are different from regular MongoDB
            indexes.
            <br></br>
            Whereas the traditional MongoDB index is a b-tree index, Atlas
            Search uses{" "}
            <span className="italic font-bold text-green-700 uppercase">
              inverted indexes
            </span>{" "}
            - which are much faster and more powerful for full-text. We'll
            re-visit this more in-depth in a future lesson. Just know now that
            Atlas Search indexes are{" "}
            <span className="italic font-bold">FAST!</span>
          </div>
          <div className="w-1/4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="#86198f"
              className="w-6 h-6 absolute top-4 right-4 font-bold"
              onClick={() => setShowMoreInfo(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      )}
      <Link
        to="/"
        className=" border-8 border-green-500 rounded-full fixed bottom-10  right-20 z-10  w-60 bg-slateblue "
      >
        <img className="" src={HomeButton} alt="btn" />
      </Link>
    </div>
  );
};

export default Lesson1;
