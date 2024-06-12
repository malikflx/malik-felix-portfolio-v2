import Hero from "./Hero/Hero";
import Work from "./Work/Work";
import About from "./About/About";
import Contact from "./Contact/Contact";
import "./Landing.css";
import Testimonal from "./Testimonial/Testimonial";

const Landing = () => {
  return (
    <>
      <div className="landing">
        <Hero />
        <Testimonal />
        <Work />
        <About />
        <Contact />
      </div>
    </>
  );
};

export default Landing;
