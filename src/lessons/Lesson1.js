import React, { useState } from "react";

import IndexCreation from "../images/Lesson1/IndexCreation.gif";
import CodeSnippetsCopy from "../components/CodeSnippetsCopy";
import LessonTemplate from "../components/LessonTemplate";

import MoreAboutCard from "../components/MoreAboutCard";
import KeyWord from "../components/KeyWord";
import SearchHero from "../images/SearchSpot2.png";
import CodeReveal from "../components/CodeReveal.js";
import Movies from "../images/PotterMovies.png";
import TipCard from "../components/TipCard";

const Lesson1 = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const toggle = (showMoreInfo) => {
    setShowMoreInfo(!showMoreInfo);
  };
  const [showDocument, setShowDocument] = useState(false);
  const toggleDoc = (showDocument) => {
    setShowDocument(!showDocument);
  };

  return (
    <LessonTemplate
      title="Lesson 1. Create a Search Index"
      next="/Lesson2"
      previous="/"
    >
      <div className="LESSON PAGE font-barlow">
        <div className="TOP-INTRO-PART flex px-20 my-10 items-center text-base  justify-evenly mb-4 w-3/4 space-x-20 mx-auto ">
          <div className="w-1/4 object-contain">
            <img src={SearchHero} alt="icon" />
          </div>
          <div className="text-xl w-3/4 px-20">
            Search adds document data to a full-text search index to make data
            searchable in a highly performant, scalable manner. In this first
            lesson, we will create a full-text search index on our sample_mflix
            movie data. Then we will query on this index to filter, rank and
            sort through those movies to quickly surface movies by topic.
          </div>
        </div>
        {/******************************* END INTRO TOP BLOCK ********************************/}
        <div className="flex px-10 items-center justify-evenly">
          <div className="STEPS-BLOCK text-left mt-4 text-base w-1/2 space-y-4">
            <div className="Step 1">
              <div className="font-bold bg-green-600 text-white uppercase px-6 rounded py-2 shadow-xl mb-4">
                Step 1. Configure in the Movies Collection in the Atlas UI{" "}
              </div>
              <div className="instructions">
                The first thing we need is an Atlas Search index. While viewing
                the movies collection, click on the{" "}
                <KeyWord type="tab">Search Indexes</KeyWord> tab. Then click on
                the green <KeyWord type="button">Create Search Index </KeyWord>
                button. <br></br>
                Atlas Search provides a powerful Visual Editor to guide you
                through the experience, and we are going to use that today.
                Select the <KeyWord type="tab">Visual Editor </KeyWord>
                option as your Configuration Method, and click on the{" "}
                <KeyWord type="button">Next </KeyWord>
                button.
              </div>
            </div>{" "}
            {/******************************* END STEP 1 ********************************/}
            <div className="Step 2">
              <div className="font-bold bg-green-600 text-white uppercase px-6 rounded py-2 shadow-xl mb-4">
                Step 2. Name and Source Movie Dataset
              </div>
              <div className="instructions">
                Give your index a name (we'll keep the name{" "}
                <KeyWord type="word">"default"</KeyWord>) and confirm the
                correct collection (<KeyWord type="word">movies</KeyWord>) to
                index is selected. You can leave the default settings here and
                click on the <KeyWord type="button">Next </KeyWord>
                button. By leaving the Index Name as{" "}
                <KeyWord type="word">default</KeyWord>, we will not have to
                specify the index name in our search queries, which is
                recommended for this tutorial.
              </div>
            </div>{" "}
            {/******************************* END STEP 2 ********************************/}
            <div className="Step 3">
              <div className="font-bold bg-green-600 text-white uppercase px-6 rounded py-2 shadow-xl mb-4">
                Step 3. Refine & Review
              </div>
              <div className="instructions">
                Atlas Search is built on the popular Apache Lucene search
                library. As such, Atlas Search is highly configurable, thus
                allowing you to employ different analyzers and map field types.
                For this first exercise, let's accept the default settings and
                click <KeyWord type="button">Create Index</KeyWord>. With that
                we are ready to move to <KeyWord type="title">Lesson 2</KeyWord>{" "}
                and build our first search queries!
              </div>
            </div>{" "}
            {/******************************* END STEP 3 ********************************/}
          </div>{" "}
          <div className="intro-image w-2/5  ">
            <img
              src={IndexCreation}
              alt="creating an index"
              className="rounded mx-auto w-3/4 border-4 border-slate-800 shadow-slateblue shadow"
            />
          </div>
        </div>{" "}
        {/******************************* END STEPS-GIF-BLOCK ********************************/}
        <div className="bg-slateblue text-white mt-6 text-center py-4">
          NOW WE HAVE AN ATLAS CLUSTER, SAMPLE DATA AND SEARCH INDEX!! <br></br>
          <br></br>
          And that’s all you need to do to take advantage of Apache Lucene and
          query across all of your MongoDB Atlas data! 👊
        </div>
        <div className="MAPPING DESCRIPTION mx-20 space-x-8">
          <div className="DYNAMIC text-base text-left w-full my-8 flex justify-center space-x-10">
            <div className="w-1/2 px-8 shadow shadow-gray-500 py-4">
              <div className="bg-teal-600 py-2 w-full text-white text-center rounded mt-1">
                but what{" "}
                <span className="text-sun text-2xl italic">EXACTLY</span> did we
                just do?
              </div>
              Each movie document contains information about a single movie,
              such as its title, release year, and cast stored as strings,
              arrays, dates, numbers, embedded objects, etc.
              <CodeReveal
                open={showDocument}
                toggle={toggleDoc}
                title="Show Sample Movie Document"
                negTitle="Hide Movie Document"
                copyTextObject={movieDocumentObject}
                lesson="1"
              />{" "}
              By creating a search index, we created a special data structure
              that categorizes data in our movie documents in an easily
              searchable format. This search index structure allows us to easily
              <KeyWord type="title">map</KeyWord> the terms in our search query
              to the movie documents containing those terms. If a field's value
              looks like a string, we map it as a full-text field, similarly for
              numbers and dates.
              <div className="w-3/4 mx-auto mt-8 ">
                <TipCard side="center">
                  <div className="flex space-x-6 items-center text-lg">
                    {" "}
                    <div>
                      <KeyWord type="title">Mapping</KeyWord> simply defines how
                      the fields on our documents are indexed and stored.{" "}
                    </div>
                    <div className="text-center text-6xl skew-y-6">🗺️</div>{" "}
                  </div>
                </TipCard>
              </div>
              <br></br>
              <div className="mt-4">
                Now once the search index is created and all of the document
                fields are mapped, we can then quickly search through those
                indexed fields. For example, let's say I were to look through
                all the <KeyWord type="code">title </KeyWord>fields in my
                sample_mflix.movies collection for the text:
                <KeyWord type="title">Harry Potter</KeyWord>. Atlas Search would
                first break this down into these two individual terms{" "}
                <span className="italic text-green-700 whitespace-nowrap">
                  ( or tokens )
                </span>{" "}
                {"  "}for our search index :{" "}
                <KeyWord type="title">harry</KeyWord> &{" "}
                <KeyWord type="title">potter</KeyWord>
                <div className="flex mx-auto space-x-4 justify-evenly mt-8">
                  {" "}
                  <div className="w-2/5 text-center text-lg text-green-800">
                    {" "}
                    ORIGINAL SEARCH TERM
                    <div className="mb-8 mt-4 text-center mx-auto px-4 text-xl text-green-700 font-bold  border-2 shadow-md shadow-slate-700 border-slate-700 rounded py-4 ">
                      Harry Potter
                    </div>
                  </div>
                  <div className="w-1/5  text-center text-lg ">
                    {" "}
                    <div className="my-8 text-center mx-auto  text-6xl text-green-700 font-bold  ">
                      ➡
                    </div>
                  </div>
                  <div className="w-2/5 text-center text-lg text-green-800">
                    {" "}
                    TOKENS
                    <div className="flex mt-4">
                      <div className="mb-8 text-center mx-auto px-4 text-xl text-green-700 font-bold  border-2 shadow-md shadow-slate-700 border-slate-700 rounded py-4">
                        harry
                      </div>

                      <div className="mb-8 text-center mx-auto px-4 text-xl text-green-700 font-bold  border-2 shadow-md shadow-slate-700 border-slate-700 rounded py-4">
                        potter
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-4 mx-auto flex justify-evenly px-20 items-center space-x-4"></div>{" "}
                <div className="flex mx-auto space-x-8">
                  <div className="w-1/4">
                    Then Atlas Search would find all the movies with{" "}
                    <span className="italic uppercase">either</span> token
                    <KeyWord type="title">harry</KeyWord>{" "}
                    <span className="italic uppercase">or</span>{" "}
                    <KeyWord type="title">potter</KeyWord> in the title to
                    return these movies (among others): <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    And just like with a treasure map{" "}
                    <span className="text-3xl">🗺️</span>, Atlas Search indexes
                    will enable to find what we are looking for{" "}
                    <span className="italic">FAST!</span>
                  </div>

                  <div className=" p-2 w-3/4 mx-auto bg-slateblue">
                    {" "}
                    <img
                      src={Movies}
                      alt="HarryPotter"
                      className="w-full  rounded my-4"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/2 px-8 shadow shadow-gray-500 py-4">
              <div className="bg-teal-600 py-2 w-full text-white text-center rounded mt-1">
                and what is{" "}
                <span className="text-sun text-2xl italic">
                  DYNAMIC MAPPING
                </span>{" "}
                ?
              </div>{" "}
              When creating an Atlas Search index, you can specify the fields to
              index using either{" "}
              <span className="text-green-600 text-lg">static </span> or
              <span className="text-green-600 text-lg"> dynamic </span> mapping.
              To use static mapping, you have to explicitly choose the fields to
              index and specify the data type of that field. Since indexes take
              up space, choosing to index only those specific fields you use can
              be tremendously helpful for performance. We will revisit this in a
              future lesson.
              <div>
                <br></br>
                In this tutorial however, we accepted the default settings which
                <span className="font-bold text-green-700">
                  {" "}
                  dynamically mapped
                </span>{" "}
                all the fields in the collection as indicated in the default
                index configuration:{" "}
              </div>
              <div className="w-1/3 mx-auto">
                {" "}
                <CodeSnippetsCopy copyTextObject={copyTextObject} />
              </div>
              <div class="relative mt-10 h-48 w-full">
                <div className="absolute w-5/6 -right-16">
                  <TipCard side="right">
                    <div className=" items-center text-lg">
                      {" "}
                      Dynamic mapping suits MongoDB's flexible data model very
                      well. As you add new data to your collection and your
                      schema evolves, dynamic mapping accommodates those changes
                      in your schema and adds that new data to the Atlas Search
                      index automatically.
                      <div className="italic">No re-indexing! 🎉🙌</div>
                    </div>
                  </TipCard>
                </div>
              </div>
              <div className="flex justify-center w-full mt-10">
                <MoreAboutCard
                  open={showMoreInfo}
                  toggle={toggle}
                  subject="Indexes"
                >
                  <div className="text-base">
                    Indexes are special data structures that enable ultra-fast
                    querying and retrieval of documents based on certain
                    identifiers. <br></br>
                    <br></br>Bear in mind that Atlas Search indexes are
                    different from regular MongoDB indexes. Whereas the
                    traditional MongoDB index is a b-tree index, Atlas Search
                    uses{" "}
                    <span className="italic font-bold text-green-700 uppercase">
                      inverted indexes
                    </span>{" "}
                    - which are much faster and more powerful for full-text.
                    We'll re-visit this more in-depth in a future lesson. Just
                    know now that Atlas Search indexes are{" "}
                    <span className="italic font-bold">FAST!</span>
                    <br></br>
                    <br></br>To learn more about indexes, see lesson 8 or visit
                    <a
                      className="underline decoration-indigo-500"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.mongodb.com/docs/atlas/atlas-search/create-index/"
                    >
                      the docs.
                    </a>
                  </div>
                </MoreAboutCard>
              </div>
              <div className="text-2xl text-center mt-20 px-10">
                Congrats! With just a few simple clicks in the Atlas UI, we did
                a lot. <br></br>
                <br></br>Now let's take our new{" "}
                <span className="text-teal-700 text-2xl italic">
                  DYNAMICALLY MAPPED SEARCH INDEX
                </span>{" "}
                to the following lesson and build our first search query.
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/******************************* END LESSON PAGE ********************************/}
    </LessonTemplate>
  );
};

let copyTextObject = {
  mappings: {
    dynamic: true,
  },
};

let movieDocumentObject = {
  _id: {
    $oid: "573a1390f29313caabcd413b",
  },
  title: "The Arrival of a Train",
  year: {
    $numberInt: "1896",
  },
  runtime: {
    $numberInt: "1",
  },
  released: {
    $date: {
      $numberLong: "-2335219200000",
    },
  },
  poster:
    "http://ia.media-imdb.com/images/M/MV5BMjEyNDk5MDYzOV5BMl5BanBnXkFtZTgwNjIxMTEwMzE@._V1_SX300.jpg",
  plot: `A group of people are standing in a straight line along the
    platform of a railway station, waiting for a train, which is seen
    coming at some distance. When the train stops at the platform, ...",
  "fullplot": "A group of people are standing in a straight line along
    the platform of a railway station, waiting for a train, which is
    seen coming at some distance. When the train stops at the platform,
    the line dissolves. The doors of the railway-cars open, and people
    on the platform help passengers to get off.`,
  lastupdated: "2015-08-15 00:02:53.443000000",
  type: "movie",
  directors: ["Auguste Lumière", "Louis Lumière"],
  imdb: {
    rating: {
      $numberDouble: "7.3",
    },
    votes: {
      $numberInt: "5043",
    },
    id: {
      $numberInt: "12",
    },
  },
  cast: ["Madeleine Koehler"],
  countries: ["France"],
  genres: ["Documentary", "Short"],
  tomatoes: {
    viewer: {
      rating: {
        $numberDouble: "3.7",
      },
      numReviews: {
        $numberInt: "59",
      },
    },
    lastUpdated: {
      $date: {
        $numberLong: "1441993589000",
      },
    },
  },
  num_mflix_comments: {
    $numberInt: "1",
  },
};

export default Lesson1;
