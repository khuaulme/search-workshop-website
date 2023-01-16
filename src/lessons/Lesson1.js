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
      <div className="LESSON PAGE">
        <div className="TOP-INTRO-PART flex px-20 items-center text-base justify-evenly ">
          <div className="mb-8 w-1/2">
            Search adds document data to a full-text search index to make data
            searchable in a highly performant, scalable manner. In this first
            lesson, we will create a full-text search index on our sample_mflix
            movie data. Then we will query on this index to filter, rank and
            sort through those movies to quickly surface movies by topic.
          </div>
          <div className="flex items-center justify-center space-x-12 mb-4 w-1/2">
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
        {/******************************* END INTRO TOP BLOCK ********************************/}
        <div className="flex px-10 items-center justify-evenly">
          <div className="STEPS-BLOCK text-left mt-4 text-base w-1/2 space-y-4">
            <div className="Step 1">
              <div className="font-bold bg-green-600 text-white uppercase px-6 rounded py-2 shadow-xl">
                Step 1. Configure in the Movies Collection in the Atlas UI{" "}
              </div>
              <div className="instructions">
                The first thing we need is an Atlas Search index. While viewing
                the movies collection, click on the{" "}
                <span className="font-bold text-green-600 text-xl">
                  Search Indexes
                </span>{" "}
                tab. Then click on the green{" "}
                <span
                  className="
              font-bold
              text-green-600
              text-xl"
                >
                  Create Search Index{" "}
                </span>
                button. <br></br>
                Atlas Search provides a powerful Visual Editor to guide you
                through the experience, and we are going to use that today.
                Select the{" "}
                <span
                  className="
              font-bold
              text-green-600
              text-xl"
                >
                  Visual Editor{" "}
                </span>
                option as your Configuration Method, and click on the{" "}
                <span
                  className="
              font-bold
              text-green-600
              text-xl"
                >
                  Next{" "}
                </span>
                button.
              </div>
            </div>{" "}
            {/******************************* END STEP 1 ********************************/}
            <div className="Step 2">
              <div className="font-bold bg-green-600 text-white uppercase px-6 rounded py-2 shadow-xl">
                Step 2. Name and Source Movie Dataset
              </div>
              <div className="instructions">
                Give your index a name and confirm the correct collection
                (movies) to index is selected. You can leave the default
                settings here and click on{" "}
                <span
                  className="
              font-bold
              text-green-600
              text-xl"
                >
                  Next{" "}
                </span>
                button. By leaving the Index Name as “default”, we will not have
                to specify the index name in our search queries, which is
                recommended for this tutorial.
              </div>
            </div>{" "}
            {/******************************* END STEP 2 ********************************/}
            <div className="Step 3">
              <div className="font-bold bg-green-600 text-white uppercase px-6 rounded py-2 shadow-xl">
                Step 3. Refine & Review
              </div>
              <div className="instructions">
                Atlas Search is built on the popular Apache Lucene search
                library. As such, Atlas Search is highly configurable, thus
                allowing you to employ different analyzers and map field types.
                For this first exercise, we are going to stick with all the
                defaults. Let's accept the default settings and click{" "}
                <span
                  className="
              font-bold
              text-green-600
              text-xl"
                >
                  Create Index
                </span>
                . That's all you need to do to start taking advantage of Search
                in your MongoDB Atlas data! 👊
              </div>
            </div>{" "}
            {/******************************* END STEP 3 ********************************/}
          </div>{" "}
          <div className="intro-image w-2/5 ">
            <img
              src={IndexCreation}
              alt="creating an index"
              className="rounded mx-auto w-3/4 border-4 border-slate-800 drop-shadow-xl"
            />
          </div>
        </div>{" "}
        {/******************************* STEPS-BLOCK ********************************/}
        <div className="MAPPING DESCRIPTION">
          <div className="DYNAMIC text-base w-1/2 ml-auto">
            <div className="">
              By accepting the default settings when we created the Search
              index, we
              <span className="font-bold text-green-700">
                {" "}
                dynamically mapped
              </span>{" "}
              all the fields in the collection as indicated in the default index
              configuration:{" "}
            </div>
            <div className="flex">
              <img
                src={SearchIcon}
                alt="icon"
                className="w-24 object-contain"
              />
              <div>
                {" "}
                Mapping is simply how we define how the fields on our documents
                are indexed and stored. If a field's value looks like a string,
                we'll treat it as a full-text field, similarly for numbers and
                dates. This suits MongoDB's flexible data model perfectly. As
                you add new data to your collection and your schema evolves,
                dynamic mapping accommodates those changes in your schema and
                adds that new data to the Atlas Search index automatically.
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <MoreAboutCard open={showMoreInfo} toggle={toggle} subject="Indexes">
            <div className="text-base">
              Indexes are special data structures that enable ultra-fast
              querying and retrieval of documents based on certain identifiers.{" "}
              <br></br>
              <br></br>Bear in mind that Atlas Search indexes are different from
              regular MongoDB indexes. Whereas the traditional MongoDB index is
              a b-tree index, Atlas Search uses{" "}
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
      </div>{" "}
      {/******************************* END LESSON PAGE ********************************/}
    </LessonTemplate>
  );
};

export default Lesson1;
