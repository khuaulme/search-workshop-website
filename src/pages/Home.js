import React, { useState } from "react";
//components
import CodeSandbox from "../components/CodeSandbox";

import Intro from "../components/Intro";
import TutorialSections from "../components/TutorialSections";
import PDF from "../components/PDF";

import SearchSpot from "../images/SearchDocs.png";

function Home() {
  const [showSetUpPDF, setShowSetUpPDF] = useState(false);
  return (
    <div h-screen bg-white>
      <div className="flex px-20">
        <div className="flex flex-col pt-10">
          <Intro
            showSetUpPDF={showSetUpPDF}
            setShowSetUpPDF={setShowSetUpPDF}
          />

          {showSetUpPDF && <PDF />}

          <div className="flex w-full justify-evenly items-center">
            <div className="w-1/4">
              <img src={SearchSpot} alt="searchIcon" />
            </div>
            <div className="w-3/4">
              <TutorialSections />
            </div>
          </div>

          <hr />
        </div>
      </div>

      <CodeSandbox appLink="https://codesandbox.io/embed/github/khuaulme/AtlasSearchWorkshop2022/tree/main/?fontsize=14&hidenavigation=1&theme=dark" />
    </div>
  );
}

export default Home;
