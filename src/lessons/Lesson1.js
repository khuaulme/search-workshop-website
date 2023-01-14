import React from "react";
import { Link } from "react-router-dom";
import HomeButton from "../images/HomeBtn.png";
import IndexCreation from "../images/Lesson1/IndexCreation.gif";
import Showtime from "../images/Lesson1/showtime.gif";

const Lesson1 = () => {
  return (
    <div className="h-screen bg-white p-20 relative font-barlow text-xl text-center">
      <div className="font-bold mb-12 uppercase text-2xl">
        {" "}
        Let's get this show on the road!
      </div>
      <div className="flex justify-evenly items-center mb-4">
        <div className="w-1/2 px-8 ">
          <div className="flex flex-col mb-8 ">
            <div className="mb-8">
              Built on Apache Lucene, Full-Text Search adds document data to a
              full-text search index to make that data searchable in a highly
              performant, scalable manner. In this first lesson, we will create
              an full-text search index on that sample data. Then we will query
              on this index to filter, rank and sort through those movies to
              quickly surface movies by topic.
            </div>
            <img
              src={Showtime}
              alt="showtime"
              className="rounded-lg mx-auto w-1/3"
            />
          </div>
          <hr
            style={{
              color: "green",
              backgroundColor: "green",
              height: 2,
              borderColor: "green",
            }}
          />

          <div className="font-bold text-2xl my-4">
            Building Our 1st Atlas Search Index!
          </div>
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
      <div className="flex font-barlow items-center border border-indigo-700 mt-4">
        <div className="w-1/6 text-4xl">🤔</div>
        <div className="w-3/4 my-8 text-indigo-900 font-thin">
          Indexes are special data structures that enable ultra-fast querying
          and retrieval of documents based on certain identifiers. Bear in mind
          that Atlas Search indexes are different from regular MongoDB indexes.
          <br></br>
          Whereas the traditional MongoDB index is a b-tree index, Atlas Search
          uses{" "}
          <span className="italic font-bold text-green-700 uppercase">
            inverted indexes
          </span>{" "}
          - which are much faster and more powerful for full-text. We'll
          re-visit this more in-depth in a future lesson. Just know now that
          Atlas Search indexes are{" "}
          <span className="italic font-bold">FAST!</span>
        </div>
        <div className="w-1/4"></div>
      </div>
      <div>
        By accepting the default settings when we created the Search index, we
        <span className="font-bold text-green-700">
          {" "}
          dynamically mapped
        </span>{" "}
        all the fields in the collection as indicated in the default index
        configuration:{" "}
      </div>
      <div>
        {" "}
        Mapping is simply how we define how the fields on our documents are
        indexed and stored. If a field's value looks like a string, we'll treat
        it as a full-text field, similarly for numbers and dates. This suits
        MongoDB's flexible data model perfectly. As you add new data to your
        collection and your schema evolves, dynamic mapping accommodates those
        changes in your schema and adds that new data to the Atlas Search index
        automatically.
      </div>
      <Link
        to="/"
        className=" border-8 border-green-500 rounded-full fixed bottom-40  right-20 z-10  w-60 bg-slateblue "
      >
        <img className="" src={HomeButton} alt="btn" />
      </Link>
    </div>
  );
};

export default Lesson1;
