import React, { useState } from "react";
//components
import CodeSandbox from "../components/CodeSandbox";

import Intro from "../components/Intro";
import TutorialSections from "../components/TutorialSections";
import PDF from "../components/PDF";

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
          <hr />
          {showSetUpPDF && <PDF />}

          <hr />
          <TutorialSections />
          <hr />
        </div>
      </div>

      <CodeSandbox appLink="https://codesandbox.io/embed/github/khuaulme/AtlasSearchWorkshop2022/tree/main/?fontsize=14&hidenavigation=1&theme=dark" />
      <div className="flex px-20 items-center"></div>
    </div>
  );
}

export default Home;
