import Hero from "./Hero/Hero";
import Work from "./Work/Work";
import About from "./About/About";
import Contact from "./Contact/Contact";
import "./Landing.css";
import Testimonal from "./Testimonial/Testimonial";
import Service from "./Service/Service";
import CtaSection from "./CTASection/CtaSection";

const Landing = () => {
  return (
    <>
      <div className="landing">
        <Hero />
        <Testimonal />
        <Service />
        <CtaSection />
        <Work />
        <About />
        <Contact />
      </div>
    </>
  );
};

export default Landing;
