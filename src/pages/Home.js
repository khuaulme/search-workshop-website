import React, { useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
//components
import CodeSandbox from "../components/CodeSandbox";

import Intro from "../components/Intro";
import TutorialSections from "../components/TutorialSections";
import PDF from "../components/PDF";

import SearchSpot from "../images/SearchDocs.png";
import Instructions from "../components/Instructions";

function Home() {
  const [showSetUpPDF, setShowSetUpPDF] = useState(false);
  return (
    <div h-screen bg-white>
      <div className="flex px-20">
        <div className="flex flex-col pt-10 text-lg">
          <Intro
            showSetUpPDF={showSetUpPDF}
            setShowSetUpPDF={setShowSetUpPDF}
          />

          <div className="flex w-full justify-evenly ">
            <div className="w-1/5">
              <Instructions
                showSetUpPDF={showSetUpPDF}
                setShowSetUpPDF={setShowSetUpPDF}
              />
            </div>
            <div
              className="w-3/4 transition ease-in-out duration-500"
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              exit={{ x: -100 }}
              transition={{ duration: 1 }}
            >
              {!showSetUpPDF ? <TutorialSections /> : <PDF />}
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
