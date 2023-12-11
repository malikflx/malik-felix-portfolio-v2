import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="intro">
          <div className="headline">
            <h1>
              Hello!
              <br />
              I'm Malik
            </h1>
            <p className="tagline">
              A software engineer and designer passionate about crafting
              exceptional user experiences.
            </p>
          </div>
        </div>
        <div className="cta">
          <PrimaryButton>Get a Website</PrimaryButton>
          <SecondaryButton>Meet Malik</SecondaryButton>
        </div>
      </div>
    </>
  );
};

export default Hero;
