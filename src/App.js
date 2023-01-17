import { Route, Routes } from "react-router-dom";

//pages
import AdditionalResourcesPage from "./pages/AdditionalResourcesPage";
import Lesson1 from "./lessons/Lesson1";
import Lesson2 from "./lessons/Lesson2";
import Lesson3 from "./lessons/Lesson3";
import Lesson4 from "./lessons/Lesson4";
import Lesson5 from "./lessons/Lesson5";
import Lesson6 from "./lessons/Lesson6";
import Lesson7 from "./lessons/Lesson7";
import Lesson8 from "./lessons/Lesson8";
import Lesson9 from "./lessons/Lesson9";
import Lesson10 from "./lessons/Lesson10";
import Home from "./pages/Home";

function App() {
  // const [showSetUpPDF, setShowSetUpPDF] = useState(false);
  return (
    <div className="flex flex-col justify-between h-screen">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="Lesson1" element={<Lesson1 />} />
        <Route exact path="Lesson2" element={<Lesson2 />} />
        <Route exact path="Lesson3" element={<Lesson3 />} />
        <Route exact path="Lesson4" element={<Lesson4 />} />
        <Route exact path="Lesson5" element={<Lesson5 />} />
        <Route exact path="Lesson6" element={<Lesson6 />} />
        <Route exact path="Lesson7" element={<Lesson7 />} />
        <Route exact path="Lesson8" element={<Lesson8 />} />
        <Route exact path="Lesson9" element={<Lesson9 />} />
        <Route exact path="Lesson10" element={<Lesson10 />} />
        <Route exact path="resources" element={<AdditionalResourcesPage />} />
      </Routes>
    </div>
  );
}

export default App;
