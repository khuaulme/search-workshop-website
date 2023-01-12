import Title from "./Title";
import SearchHero from "../images/Spot_Search.png";
import Presenters from "../components/Presenters";
import AppPreview from "./AppPreview";
import Instructions from "./Instructions";

const Intro = ({ showSetUpPDF, setShowSetUpPDF }) => {
  return (
    <div className="flex mx-auto mb-8 justify-evenly w-full">
      <div className="mx-auto text-center items-center w-2/5">
        <Title />
        <div className="mx-4 text-lg my-4 w-full">
          With Atlas Search, we have made it even easier to work with data by
          allowing you to build powerful, flexible, and sophisticated search
          capabilities into your MongoDB applications!
          <br></br> <br></br>In this workshop, we will build out our very own
          Netflix Clone using the{" "}
          <a
            className="underline decoration-indigo-500"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.mongodb.com/docs/atlas/sample-data/sample-mflix/"
          >
            sample_mflix
          </a>{" "}
          database in the Atlas sample dataset. We will quickly construct and
          combine varied search parameters while implementing fuzzy-matching,
          autocomplete, highlighting and many other search features. Along the
          way, we'll also go deep on Lucene analyzers and indexes.
        </div>
        <hr
          style={{
            color: "green",
            backgroundColor: "green",
            height: 2,
            borderColor: "green",
          }}
        />
        {/* <Instructions
          showSetUpPDF={showSetUpPDF}
          setShowSetUpPDF={setShowSetUpPDF}
        /> */}
      </div>
      <div className="w-2/5">
        <AppPreview />
        {/* <Presenters /> */}
      </div>
    </div>
  );
};

export default Intro;
