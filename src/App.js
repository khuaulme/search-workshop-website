import { Route, Routes, Link } from "react-router-dom";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";

//pages
import AdditionalResourcesPage from "./pages/AdditionalResourcesPage";
import Section1 from "./pages/Section1";
import Home from "./pages/Home";

function App() {
  // const [showSetUpPDF, setShowSetUpPDF] = useState(false);
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="section1" element={<Section1 />} />
        <Route exact path="resources" element={<AdditionalResourcesPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
