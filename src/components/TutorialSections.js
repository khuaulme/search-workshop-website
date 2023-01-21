import React, { useState } from "react";
import LessonPreview from "./LessonPreview";
import Compass from "../images/Compass.png";
import SearchParameters from "../images/SearchParameters.png";
import Autocomplete from "../images/Autocomplete.png";
import Highlighting from "../images/Highlighting.png";
import Facets from "../images/Facets.png";
import FTS from "../images/FTS.png";
import Webhooks from "../images/Webhooks.png";
import Score from "../images/Score.png";
import Fuzzy from "../images/Fuzzy.png";
import Aggregation from "../images/Aggregation.png";
import Synonyms from "../images/Synonyms.png";
import Platform from "../images/Platform.png";
import SearchQuery from "../images/SearchQuery.png";

const TutorialSections = () => {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };
  return (
    <>
      <div className="bg-gradient-to-r from-emerald-700 to-green-600 py-10 place-items-center shadow-xl ">
        <div className="grid grid-cols-2 gap-x-8 px-10 w-full">
          {lessonData.map((data, index) => {
            return (
              <LessonPreview
                key={index}
                index={index}
                title={data.title}
                description={data.description}
                open={index === open}
                toggle={() => toggle(index)}
                icon={data.iconImage}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TutorialSections;

const lessonData = [
  {
    title: "1. Create a Search Index",
    description: `In our first lesson, a few simple clicks in the Atlas UI builds the default Search index to dynamically map 
      our movie data documents. These special data structures map the fields in our movie sample dataset. This is our first step 
      needed to quickly look for topics in the plot fields in our movie dataset.`,
    linkedPage: "Lesson1",
    iconImage: Fuzzy,
  },
  {
    title: "2. Creating Basic Search Queries",
    description: `Now that we have our first Atlas Search index created, let's play around with a few different basic operators and options using the 
      $search stage in an aggregation pipeline to look for topics in the plot fields in our movie dataset.`,
    linkedPage: "Lesson1",
    iconImage: SearchQuery,
  },
  {
    title: "3. Complete the Search Aggregation Pipeline with Other Stages",
    description: `Now that we have our first Atlas Search index created, let's play around with a few different basic operators and options using the 
      $search stage in an aggregation pipeline to look for topics in the plot fields in our movie dataset.`,
    linkedPage: "Lesson2",
    iconImage: Aggregation,
  },

  {
    title: "4. Create RESTful API to Access Data",
    description: `Now that we have the heart of our movie search engine in the form of an aggregation pipeline, 
    how will we use it in an application? There are lots of ways to do this, but we will simply create a RESTful API 
    using Atlas App Services, MongoDB's serverless platform, to expose this data. The beauty of a REST API is that it 
    provides the flexibility to consume the movie data in so many ways and can be called from just about anywhere. `,
    linkedPage: "Lesson3",
    iconImage: Webhooks,
  },
  {
    title: "5. Call API from Movie Application the Front End",
    description: ` Now that we have this endpoint, it takes a single call from the front-end application using the Fetch API 
    to retrieve this data. In this lesson, we will use our hosted Code Sandbox. Typing in a search bar will bring us movies about 
    whatever topic comes to mind. `,
    linkedPage: "Lesson4",
    iconImage: Platform,
  },
  {
    title:
      "6. The Score Matters: Relevance-based Scoring and Custom Score Modifiers",
    description: `Atlas Search computes a score for every movie in our data collection based on relevance. Scoring is the whole reason we get our search results back in  order
       so it is important to understand. In this lesson, not only do we unravel the meaning of "relevance", but we will also play around 
       with special score modifiers: constant - boost -function to change the score and therefore your search results, so you can get the right results to ou
       users.`,
    linkedPage: "Lesson5",
    iconImage: Score,
  },

  {
    title: '7. "Autocom... " : How to Implement Autocomplete',
    description:
      "With Atlas Search, we have made it even easier to work with data by allowing you to build powerful, flexible, and sophisticated search capabilities into your MongoDB applications!",
    linkedPage: "Lesson6",
    iconImage: Autocomplete,
  },
  {
    title: "8. Compound Operator to Combine Search Parameters",
    description:
      "With Atlas Search, we have made it even easier to work with data by allowing you to build powerful, flexible, and sophisticated search capabilities into your MongoDB applications!",
    linkedPage: "Lesson7",
    iconImage: SearchParameters,
  },
  {
    title: "9. Indexes and Analyzers",
    description:
      "With Atlas Search, we have made it even easier to work with data by allowing you to build powerful, flexible, and sophisticated search capabilities into your MongoDB applications!",
    linkedPage: "Lesson8",
    iconImage: "",
  },
  {
    title: "10. Facets",
    description:
      "With Atlas Search, we have made it even easier to work with data by allowing you to build powerful, flexible, and sophisticated search capabilities into your MongoDB applications!",
    linkedPage: "Lesson9",
    iconImage: Facets,
  },
];
