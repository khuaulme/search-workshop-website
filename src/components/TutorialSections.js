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
    title: "1. Creating Basic Search Queries",
    description: `In our first lesson, a few simple clicks in the Atlas UI builds the default search index to dynamically map 
      our movie data documents. After that, we will play around with a few different operators and options using the 
      $search stage in an aggregation pipeline
       to look for topics in the plot fields in our movie dataset.`,
    linkedPage: "Lesson1",
    iconImage: Fuzzy,
  },
  {
    title: "2. Create RESTful API to Access Data",
    description: `Now that we have the heart of our movie search engine in the form of an aggregation pipeline, 
    how will we use it in an application? There are lots of ways to do this, but we will simply create a RESTful API 
    using Atlas App Services, MongoDB's serverless platform, to expose this data. The beauty of a REST API is that it 
    provides the flexibility to consume the movie data in so many ways and can be called from just about anywhere. `,
    linkedPage: "Lesson2",
    iconImage: Webhooks,
  },
  {
    title: "3. Call API from Movie Application Front-End",
    description: ` Now that we have this endpoint, it takes a single call from the front-end application using the Fetch API 
    to retrieve this data. In this lesson, we will use our hosted Code Sandbox. Typing in a search bar will bring us movies about 
    whatever topic comes to mind. `,
    linkedPage: "Lesson3",
    iconImage: Platform,
  },
  {
    title: "4. Relevance-based Scoring and Custom Score Modifiers",
    description: `Atlas Search computes a score for every movie in our data collection based on relevance. Scoring is the whole reason we get our search results back in  order
       so it is important to understand. In this lesson, not only do we unravel the meaning of "relevance", but we will also play around 
       with special score modifiers: constant - boost -function to change the score and therefore your search results, so you can get the right results to ou
       users.`,
    linkedPage: "Lesson4",
    iconImage: Score,
  },
  {
    title: "5. Highlights: How to Show Matching Search Terms in Context ",
    description:
      "With Atlas Search, we have made it even easier to work with data by allowing you to build powerful, flexible, and sophisticated search capabilities into your MongoDB applications!",
    linkedPage: "Lesson5",
    iconImage: Highlighting,
  },
  {
    title: '6. "Autocom... " : How to Implement Autocomplete',
    description:
      "With Atlas Search, we have made it even easier to work with data by allowing you to build powerful, flexible, and sophisticated search capabilities into your MongoDB applications!",
    linkedPage: "Lesson6",
    iconImage: Autocomplete,
  },
  {
    title: "7. Compound Operator to Combine Search Parameters",
    description:
      "With Atlas Search, we have made it even easier to work with data by allowing you to build powerful, flexible, and sophisticated search capabilities into your MongoDB applications!",
    linkedPage: "Lesson7",
    iconImage: SearchParameters,
  },
  {
    title: "8. Indexes and Analyzers",
    description:
      "With Atlas Search, we have made it even easier to work with data by allowing you to build powerful, flexible, and sophisticated search capabilities into your MongoDB applications!",
    linkedPage: "Lesson8",
    iconImage: "",
  },
  {
    title: "9. Facets",
    description:
      "With Atlas Search, we have made it even easier to work with data by allowing you to build powerful, flexible, and sophisticated search capabilities into your MongoDB applications!",
    linkedPage: "Lesson9",
    iconImage: Facets,
  },
  {
    title: "10. Pagination",
    description:
      "With Atlas Search, we have made it even easier to work with data by allowing you to build powerful, flexible, and sophisticated search capabilities into your MongoDB applications!",
    linkedPage: "Lesson10",
    iconImage: FTS,
  },
];
