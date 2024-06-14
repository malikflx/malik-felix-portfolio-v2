import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import { Link as RouterLink } from "react-router-dom";
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
          <RouterLink to="/contact">
            <PrimaryButton className="cta-button">Get a Website</PrimaryButton>
          </RouterLink>
          <RouterLink to="/about">
            <SecondaryButton className="cta-button">Meet Malik</SecondaryButton>
          </RouterLink>
        </div>
      </div>
    </>
  );
};

export default Hero;
