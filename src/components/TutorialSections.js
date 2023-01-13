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
    title: "1. Create Basic Index and 1st $search Text Query",
    description:
      "With Atlas Search, we have made it even easier to work with data by allowing you to build powerful, flexible, and sophisticated search capabilities into your MongoDB applications!",
    linkedPage: "Lesson1",
    iconImage: Fuzzy,
  },
  {
    title: "2. Create RESTful API to Access Data",
    description:
      "In this workshop, we will build out our very own Netflix Clone using the sample_mflix database in the Atlas sample dataset. We will quickly construct and combine varied search parameters while implementing fuzzy-matching, autocomplete, highlighting and many other search features. Along the way, we'll also go deep on Lucene analyzers and indexes.",
    linkedPage: "Lesson2",
    iconImage: Webhooks,
  },
  {
    title: "3. Call API from Movie Application Front-End",
    description:
      "In this workshop, we will build out our very own Netflix Clone using the sample_mflix database in the Atlas sample dataset. We will quickly construct and combine varied search parameters while implementing fuzzy-matching, autocomplete, highlighting and many other search features. Along the way, we'll also go deep on Lucene analyzers and indexes.",
    linkedPage: "Lesson3",
    iconImage: Platform,
  },
  {
    title: "4. Relevance-based Scoring and Custom Score Modifiers",
    description:
      "In this workshop, we will build out our very own Netflix Clone using the sample_mflix database in the Atlas sample dataset. We will quickly construct and combine varied search parameters while implementing fuzzy-matching, autocomplete, highlighting and many other search features. Along the way, we'll also go deep on Lucene analyzers and indexes.",
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
