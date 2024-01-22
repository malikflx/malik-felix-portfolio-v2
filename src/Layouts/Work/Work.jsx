import { Link } from "react-router-dom";
import PureVibez from "../../assets/images/pure-vibez-screen.png";
import "./Work.css";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";

const Work = () => {
  return (
    <div className="work">
      <h2 className="work-title">Work</h2>
      <div className="work-container">
        <div className="image">
          <img src={PureVibez} alt="pure-vibez-logo" />
          <div className="content">
            <h3>Pure Vibez</h3>
            <p>Website for bartending & catering service</p>
            <SecondaryButton className="work-button pv-button">
              Visit Website
            </SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
