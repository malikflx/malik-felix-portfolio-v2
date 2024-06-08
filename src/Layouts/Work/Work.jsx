import { Link } from "react-router-dom";
import PureVibez from "../../assets/images/pure-vibez-screen.png";
import AwdcLanding from "../../assets/images/awdc-logo-lower-spaced-no-background.png";
import "./Work.css";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";

const Work = () => {
  return (
    <div className="work">
      <h2 className="work-title">Work</h2>
      <hr />
      <div className="work-container">
        <div className="work-item pv-image">
          <img src={PureVibez} alt="pure-vibez-logo" />
          <div className="content pv-content">
            <h3>Pure Vibez</h3>
            <p>Website for a bartending & catering service</p>
            <Link to="https://purevibez.netlify.app/">
              <SecondaryButton className="work-button">
                Visit Website
              </SecondaryButton>
            </Link>
          </div>
        </div>
        <div className="work-item awdc-image">
          <img src={AwdcLanding} alt="awdc-landing-page-thumbnail" />
          <div className="content awdc-content">
            <h3>A Web Development Company (Landing Page)</h3>
            <p>Landing Page for an upcoming agency</p>
            <Link to="https://awdc.netlify.app/">
              <SecondaryButton className="work-button">
                Visit Website
              </SecondaryButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
