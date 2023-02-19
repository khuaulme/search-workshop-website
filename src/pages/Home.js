import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DeviceIdentifier from "react-device-identifier";

import NoPhone from "../images/NoPhone.png";
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
      <Header />
      <DeviceIdentifier isMobile={true} isTablet={true}>
        <div className="flex space-x-8 px-4 py-2 items-center justify-center my-2 bg-slate-800 ">
          <div className=" text-2xl text-white text-center uppercase">
            Best Viewed on Desktops
          </div>

          <img src={NoPhone} className="w-28" alt="outline"></img>
        </div>
      </DeviceIdentifier>
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
                <div className="transition duration-1000 ease-in-out translate-x-12 shadow-green-900 shadow-lg ">
                  <TutorialSections />
                </div>
              )}
            </div>
          </div>

          <hr />
        </div>
      </div>
      <div className="px-20">
        <CodeSandbox appLink="https://codesandbox.io/embed/github/khuaulme/atlas-search-workshop-netflix/tree/lesson4/?fontsize=14&hidenavigation=1&theme=dark" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
