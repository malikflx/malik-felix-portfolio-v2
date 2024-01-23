import { Link } from "react-router-dom";
import PureVibez from "../../assets/images/pure-vibez-screen.png";
import AwdcLanding from "../../assets/images/awdc-logo-lower-spaced-no-background.png";
import "./Work.css";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";

const Work = () => {
  return (
    <div className="work">
      <h2 className="work-title">Work</h2>
      <div className="work-container">
        <div className="work-item pv-image">
          <img src={PureVibez} alt="pure-vibez-logo" />
          <div className="content">
            <h3>Pure Vibez</h3>
            <p>Website for a bartending & catering service</p>
            <SecondaryButton className="work-button pv-button">
              Visit Website
            </SecondaryButton>
          </div>
        </div>
        <div className="work-item awdc-image">
          <img src={AwdcLanding} alt="awdc-landing-page-thumbnail" />
          <div className="content awdc-content">
            <h3>A Web Development Company (Landing Page)</h3>
            <p>Landing Page for an upcoming agency</p>
            <SecondaryButton className="work-button">
              Visit Website
            </SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
