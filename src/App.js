import { Route, Routes } from "react-router-dom";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";

//pages
import AdditionalResourcesPage from "./pages/AdditionalResourcesPage";
import Lesson1 from "./lessons/Lesson1";
import Lesson2 from "./lessons/Lesson2";
import Home from "./pages/Home";

function App() {
  // const [showSetUpPDF, setShowSetUpPDF] = useState(false);
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="Lesson1" element={<Lesson1 />} />
        <Route exact path="Lesson2" element={<Lesson2 />} />
        <Route exact path="resources" element={<AdditionalResourcesPage />} />
      </Routes>
    </div>
  );
}

export default App;
