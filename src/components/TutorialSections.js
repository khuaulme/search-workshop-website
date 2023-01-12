import React, { useState, useEffect, useRef } from "react";
import LessonPreview from "./LessonPreview";

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
      <div className="bg-gradient-to-r from-green-900 to-emerald-700 py-10 place-items-center shadow-xl">
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 px-10 w-full">
          {lessonData.map((data, index) => {
            return (
              <LessonPreview
                key={index}
                title={data.title}
                description={data.description}
                open={index === open}
                toggle={() => toggle(index)}
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
    iconImage: "",
  },
  {
    title: "2. Create RESTful API to Access Data",
    description:
      "In this workshop, we will build out our very own Netflix Clone using the sample_mflix database in the Atlas sample dataset. We will quickly construct and combine varied search parameters while implementing fuzzy-matching, autocomplete, highlighting and many other search features. Along the way, we'll also go deep on Lucene analyzers and indexes.",
  },
  {
    title: "3. Call API from Movie Application Front-End",
    description:
      "In this workshop, we will build out our very own Netflix Clone using the sample_mflix database in the Atlas sample dataset. We will quickly construct and combine varied search parameters while implementing fuzzy-matching, autocomplete, highlighting and many other search features. Along the way, we'll also go deep on Lucene analyzers and indexes.",
  },
  {
    title: "4. Relevance-based Scoring and Custom Score Modifiers",
    description:
      "In this workshop, we will build out our very own Netflix Clone using the sample_mflix database in the Atlas sample dataset. We will quickly construct and combine varied search parameters while implementing fuzzy-matching, autocomplete, highlighting and many other search features. Along the way, we'll also go deep on Lucene analyzers and indexes.",
  },
  {
    title: "5. Highlights: How to Show Matching Search Terms in Context ",
    description:
      "With Atlas Search, we have made it even easier to work with data by allowing you to build powerful, flexible, and sophisticated search capabilities into your MongoDB applications!",
    linkedPage: "Lesson1",
    iconImage: "",
  },
  {
    title: '6. "Autocom... " : How to Implement Autocomplete',
    description:
      "With Atlas Search, we have made it even easier to work with data by allowing you to build powerful, flexible, and sophisticated search capabilities into your MongoDB applications!",
    linkedPage: "Lesson1",
    iconImage: "",
  },
  {
    title: "7. Compound Operator to Combine Search Parameters",
    description:
      "With Atlas Search, we have made it even easier to work with data by allowing you to build powerful, flexible, and sophisticated search capabilities into your MongoDB applications!",
    linkedPage: "Lesson1",
    iconImage: "",
  },
  {
    title: "8. Indexes and Analyzers",
    description:
      "With Atlas Search, we have made it even easier to work with data by allowing you to build powerful, flexible, and sophisticated search capabilities into your MongoDB applications!",
    linkedPage: "Lesson1",
    iconImage: "",
  },
  {
    title: "9. Facets",
    description:
      "With Atlas Search, we have made it even easier to work with data by allowing you to build powerful, flexible, and sophisticated search capabilities into your MongoDB applications!",
    linkedPage: "Lesson1",
    iconImage: "",
  },
  {
    title: "10. Pagination",
    description:
      "With Atlas Search, we have made it even easier to work with data by allowing you to build powerful, flexible, and sophisticated search capabilities into your MongoDB applications!",
    linkedPage: "Lesson1",
    iconImage: "",
  },
];
