import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import About from "../About/About";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";

const LandingPage = () => {
  return (
    <>
      <div className="landing">
        <h1>
          Hello!
          <br />
          I'm Malik
        </h1>
        <p>
          A software engineer and designer passionate about crafting exceptional
          user experiences.
        </p>
        <PrimaryButton>Get a Website</PrimaryButton>
        <SecondaryButton>Meet Malik</SecondaryButton>
      </div>
      <Work />
      <About />
      <Contact />
    </>
  );
};

export default LandingPage;
