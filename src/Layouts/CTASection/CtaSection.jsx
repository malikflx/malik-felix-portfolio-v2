import { Link } from "react-router-dom";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import "./CtaSection.css";

const CtaSection = () => {
  return (
    <div className="cta-section">
      <div className="cta-section-container">
        <h2 className="cta-section-title">
          Let&apos;s discover your digital edge!
        </h2>
        <p className="cta-section-tagline">
          You can rely on receiving high-quality, mobile-first design and
          development that enhances user experience and accessibility, always
          delivered promptly.
        </p>
        <div className="cta-section-buttons">
          <Link to="/contact">
            <PrimaryButton className="cta-button primary">
              Get in Touch
            </PrimaryButton>
          </Link>
          <SecondaryButton className="cta-button">
            Schedule a Call
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
