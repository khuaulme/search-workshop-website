import React from "react";
import LessonTemplate from "../components/LessonTemplate";

const Lesson2 = () => {
  return (
    <LessonTemplate
      title="Lesson 2. Creating Basic Search Queries"
      next="/Lesson3"
    >
      <div className="LESSON PAGE font-barlow text-base mx-20">
        <div className="mb-8 text-black ml-auto w-2/3">
          The next step in building our movie 📽️ search engine is to build our
          queries. Atlas Search queries take the form of an aggregation pipeline
          stage using the{" "}
          <span className="text-xl font-bold text-green-600">$search</span>{" "}
          pipeline stage. To build our pipeline, let’s use the Aggregation
          Pipeline builder in the Atlas Collections tab.
        </div>
      </div>
    </LessonTemplate>
  );
};

export default Lesson2;
