import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeButton from "../images/HomeBtn.png";
import SearchIcon from "../images/SearchIcon.png";
import IndexCreation from "../images/Lesson1/IndexCreation.gif";
import Showtime from "../images/Lesson1/showtime.gif";
import LessonTemplate from "../components/LessonTemplate";

import MoreAboutCard from "../components/MoreAboutCard";

const Lesson1 = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const toggle = (showMoreInfo) => {
    setShowMoreInfo(!showMoreInfo);
  };
  return (
    <LessonTemplate title="Lesson 1. Building a Basic Search Index">
      <div className="flex px-10 items-center">
        <div className="intro w-3/5">
          <div className="mb-8">
            Search adds document data to a full-text search index to make data
            searchable in a highly performant, scalable manner. In this first
            lesson, we will create a full-text search index on our sample_mflix
            movie data. Then we will query on this index to filter, rank and
            sort through those movies to quickly surface movies by topic.
          </div>
          <div className="flex items-center justify-center space-x-12 mb-4">
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

          <div className="text-left mt-4">
            <div className="font-bold bg-green-600 text-white uppercase px-6 rounded py-2 shadow-xl">
              Step 1. In the Movies Collection in the Atlas UI{" "}
            </div>
            The first thing we need is an Atlas Search index. Click on the tab
            titled Search Indexes under Collections. Click on the green Create
            Search Index button. Let's accept the default settings and click
            Create Index. That's all you need to do to start taking advantage of
            Search in your MongoDB Atlas data! 👊
          </div>
        </div>
        <div className="intro-image w-2/5">
          <img
            src={IndexCreation}
            alt="creating an index"
            className="rounded-lg mx-auto w-3/4"
          />
        </div>
      </div>
      {/******************************* END INTRO TOP BLOCK ********************************/}
      <hr
        style={{
          color: "green",
          backgroundColor: "green",
          height: 2,
          borderColor: "green",
          marginTop: 6,
        }}
      />
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
      </div>
      <div className="flex justify-center w-full">
        <MoreAboutCard open={showMoreInfo} toggle={toggle} subject="Indexes">
          <div>
            Indexes are special data structures that enable ultra-fast querying
            and retrieval of documents based on certain identifiers. <br></br>
            <br></br>Bear in mind that Atlas Search indexes are different from
            regular MongoDB indexes. Whereas the traditional MongoDB index is a
            b-tree index, Atlas Search uses{" "}
            <span className="italic font-bold text-green-700 uppercase">
              inverted indexes
            </span>{" "}
            - which are much faster and more powerful for full-text. We'll
            re-visit this more in-depth in a future lesson. Just know now that
            Atlas Search indexes are{" "}
            <span className="italic font-bold">FAST!</span>
            <br></br>
            <br></br>To learn more about indexes, see lesson 9 or visit the
            docs.
          </div>
        </MoreAboutCard>
      </div>
    </LessonTemplate>
  );
};

export default Lesson1;
