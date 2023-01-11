import { Route, Routes, Link } from "react-router-dom";

import React, { useState } from "react";
//components
import CodeSandbox from "./components/CodeSandbox";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import TutorialSections from "./components/TutorialSections";
import PDF from "./components/PDF";

import AdditionalResouces from "./components/AdditionalResouces";
import Section1 from "./pages/Section1";
import Home from "./pages/Home";

function App() {
  // const [showSetUpPDF, setShowSetUpPDF] = useState(false);
  return (
    <>
      <div> Routing Set-up</div>{" "}
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="section1" element={<Section1 />} />
      </Routes>
    </>

    // <div h-screen bg-white>
    //   <Header />
    //   <div className="flex px-20">
    //     <div className="flex flex-col pt-10">
    //       <Intro
    //         showSetUpPDF={showSetUpPDF}
    //         setShowSetUpPDF={setShowSetUpPDF}
    //       />
    //       <hr />
    //       {showSetUpPDF && <PDF />}

    //       <hr />
    //       <TutorialSections />
    //       <hr />
    //     </div>
    //   </div>

    //   <CodeSandbox appLink="https://codesandbox.io/embed/github/khuaulme/AtlasSearchWorkshop2022/tree/main/?fontsize=14&hidenavigation=1&theme=dark" />
    //   <div className="flex px-20 items-center"></div>

    //   <AdditionalResouces />
    //   <Footer />
    // </div>
  );
}

export default App;
