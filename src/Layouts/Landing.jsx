import About from "./About/About";
import Work from "./Work/Work";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import "./Landing.css";

const Landing = () => {
  return (
    <>
      <Hero />
      <Work />
      <About />
      <Contact />
    </>
  );
};

export default Landing;
