import { useEffect, useState, useRef } from "react";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import { Link as RouterLink } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const headlineRef = useRef(null);
  const [typingStarted, setTypingStarted] = useState(false);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    if (!typingStarted) {
      const headline = headlineRef.current;
      const lines = ["Hello!", "I'm Malik"];
      let index = 0;
      let charIndex = 0;
      let currentLine = "";

      const clearContent = () => {
        while (headline.firstChild) {
          headline.removeChild(headline.firstChild);
        }
      };

      const type = () => {
        if (index < lines.length) {
          if (charIndex < lines[index].length) {
            currentLine += lines[index].charAt(charIndex);
            setCurrentText(currentLine);
            charIndex++;
            setTimeout(type, 100);
          } else {
            index++;
            charIndex = 0;
            currentLine += "\n";
            setTimeout(type, 500);
          }
        } else {
          headline.classList.add("finished");
        }
      };

      clearContent();
      type();
      setTypingStarted(true);
    }
  }, [typingStarted]);

  return (
    <>
      <div className="hero">
        <div className="intro">
          <div className="headline">
            <h1 ref={headlineRef} className="typewriter">
              {currentText}
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
