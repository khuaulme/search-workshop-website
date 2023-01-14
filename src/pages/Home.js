import React, { useState } from "react";
import { Transition, Popover } from "@headlessui/react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { usePopper } from "react-popper";

//components
import CodeSandbox from "../components/CodeSandbox";

import Intro from "../components/Intro";
import TutorialSections from "../components/TutorialSections";
import PDF from "../components/PDF";

import Instructions from "../components/Instructions";

function Home() {
  const [showSetUpPDF, setShowSetUpPDF] = useState(false);

  return (
    <div className="h-screen bg-white">
      <div className="flex px-20">
        <div className="flex flex-col pt-10 text-lg">
          <Intro
            showSetUpPDF={showSetUpPDF}
            setShowSetUpPDF={setShowSetUpPDF}
          />

          <div className="flex w-full justify-evenly relative ">
            <div className="w-1/5">
              <Instructions
                showSetUpPDF={showSetUpPDF}
                setShowSetUpPDF={setShowSetUpPDF}
              />
            </div>
            <div className="w-3/4 mx-8">
              {showSetUpPDF ? (
                <div className="transition duration-1000 transform hover:scale-110 ease-in-out translate-x-12 duration">
                  <PDF />
                </div>
              ) : (
                <div className="transition duration-1000 ease-in-out translate-x-12 ">
                  <TutorialSections />
                </div>
              )}
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

/*
 <Popover>
                <Popover.Button className="w-4/5 mx-auto py-4 px-6 text-white bg-fuchsia-800 rounded-md flex items-center drop-shadow-2xl mb-4 justify justify-evenly uppercase">
                  Show set-up instructions PDF
                  <HiOutlineChevronRight className="ui-open:rotate-180 ui-open:transform" />
                </Popover.Button>
                <Popover.Panel
                  className="absolute z-10"
                  ref={setPopperElement}
                  style={styles.popper}
                  {...attributes.popper}
                >
                  <PDF />
                </Popover.Panel>
              </Popover>
              */
