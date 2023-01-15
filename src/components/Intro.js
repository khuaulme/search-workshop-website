import AppPreview from "./AppPreview";

import SearchSpot from "../images/SearchDocs.png";

const Intro = ({ showSetUpPDF, setShowSetUpPDF }) => {
  return (
    <div className="flex mx-auto mb-8 justify-around w-full items-center">
      <div className="mx-auto text-center items-center w-1/2 pr-10 mt-12 text-lg font-barlow">
        <div className="flex items-center">
          <img
            src={SearchSpot}
            alt="search hero"
            className="object-contain w-1/2"
          />
          <div>
            In this workshop, we will learn about Atlas Search by building out
            our very own Netflix clone using the{" "}
            <a
              className="underline decoration-indigo-500"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.mongodb.com/docs/atlas/sample-data/sample-mflix/"
            >
              sample_mflix
            </a>{" "}
            database in the Atlas sample dataset. In no time you'll implement:
            <br></br>
            <div className="ml-10 text-left pl-6 text mt-4 mb-2">
              <ul>
                <li>✅ fuzzy matching</li>
                <li>✅ autocomplete</li>
                <li>✅ highlighting</li>
                <li>✅ relevance-based scoring</li>
                <li>✅ facets and counts</li>
                <li>✅ synonyms</li>
              </ul>
            </div>
            as well as many other advanced features.
          </div>
        </div>
        <div className="mt-4">
          Along the way, we'll also combine these varied search parameters
          across a wide variety of data types as we look for just the right
          movie. Expect deeper dives on Lucene analyzers and indexes, too.
        </div>
        <div className="text-center text-4xl">🍿{"  "} 🎥</div>
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
