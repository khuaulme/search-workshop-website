import Title from "./Title";
import SearchHero from "../images/Spot_Search.png";
import Presenters from "../components/Presenters";
import AppPreview from "./AppPreview";
import SearchIcon from "../images/SearchIcon.png";

const Intro = ({ showSetUpPDF, setShowSetUpPDF }) => {
  return (
    <div className="flex mx-auto mb-8 justify-around w-full">
      <div className="mx-auto text-center items-center w-1/2 p-10 mt-12 text-lg font-barlow">
        <div className="flex">
          {" "}
          <img src={SearchIcon} alt="search hero" className="mx-2 w-24" />
          <div className="mx-4 my-4 w-full">
            With Atlas Search, we have made it even easier to work with data by
            allowing you to build powerful, flexible, and sophisticated search
            capabilities into your MongoDB applications!
          </div>
        </div>
        <div className="">
          In this workshop, we will build out our very own Netflix Clone using
          the{" "}
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
        <div className="mx-4  mt-4 mb-10 w-full">
          Because this workshop is broken down into different lessons, you can
          start from the absolute beginning or jump directly to the more
          advanced features. The frontend application is hosted on GitHub and
          CodeSandbox.io and sits ready for you to fork.
        </div>
        <hr
          style={{
            color: "green",
            backgroundColor: "green",
            height: 2,
            borderColor: "green",
          }}
        />
      </div>
      <div className="w-1/2 p-8">
        <AppPreview />
        {/* <Presenters /> */}
      </div>
    </div>
  );
};

export default Intro;
