import Landing from "./Layouts/Landing";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import About from "./Layouts/About/About";
import Work from "./Layouts/Work/Work";
import Contact from "./Layouts/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ScrollTop from "./Components/Utility/ScrollTop/ScrollTop";
import TransitionWrapper from "./Components/Transitions/TransitionWrapper";

const AppRoutes = () => {
  const location = useLocation();
  return (
    <TransitionWrapper location={location}>
      <Routes location={location}>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </TransitionWrapper>
  );
};

function App() {
  return (
    <>
      <Router>
        <ScrollTop />
        <Header />
        <AppRoutes />
        <Footer />
      </Router>
    </>
  );
}

export default App;
