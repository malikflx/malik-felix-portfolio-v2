import Landing from "./Layouts/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import About from "./Layouts/About/About";
import Work from "./Layouts/Work/Work";
import Contact from "./Layouts/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ScrollTop from "./Components/Utility/ScrollTop/ScrollTop";

function App() {
  return (
    <>
      <Router>
        <ScrollTop />
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
