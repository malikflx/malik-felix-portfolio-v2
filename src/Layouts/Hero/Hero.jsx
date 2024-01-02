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
              I&apos;m Malik
            </h1>
            <p className="tagline">
              A <span className="highlight">software engineer</span> and{" "}
              <span className="highlight">designer</span> passionate about
              crafting exceptional user experiences.
            </p>
          </div>
        </div>
        <div className="cta">
          <PrimaryButton className="cta-button">Get a Website</PrimaryButton>
          <SecondaryButton className="cta-button">Meet Malik</SecondaryButton>
        </div>
      </div>
    </>
  );
};

export default Hero;
