import SectionBorder from "../../Components/Dividers/SectionBorder";
import Blockquote from "../../Components/Typography/Blockquote";
import "./Testimonial.css";

const Testimonal = () => {
  return (
    <div className="testimonial">
      <div className="testimonial-container">
        <h2 className="testimonial-title">Testimonials</h2>
        <SectionBorder />
        <div className="review">
          <Blockquote>
            &quot;Malik was not only incredibly efficient but also quickly
            understood my project&apos;s needs without a lot of explanation.
            After a quick call, our website was properly functioning again. I
            would highly recommend Malik for any website job!&quot;
          </Blockquote>
          <p className="review-client">
            <span className="review-client-name">Michael P.</span>, Executive
            Director at Youth Represent
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
