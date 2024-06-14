import Blockquote from "../../Components/Typography/Blockquote";
import "./Testimonial.css";

const Testimonal = () => {
  return (
    <div className="testimonial">
      <div className="testimonial-container">
        <h2 className="testimonial-title">Testimonials</h2>
        <div className="review-list">
          <div className="review">
            <Blockquote>
              &quot;Malik was not only incredibly efficient but also quickly
              understood my project&apos;s needs without a lot of explanation.
              After a quick call, our website was properly functioning again.{" "}
              <span className="client-highlight">
                I would highly recommend Malik for any website job!&quot;
              </span>
            </Blockquote>
            <p className="review-client">
              <span className="review-client-name">Michael P.</span>, Executive
              Director at Youth Represent
            </p>
          </div>
          <div className="review">
            <Blockquote>
              &quot;Malik Felix &amp; his expertise has been a TRUE ASSET to me
              & my ventures. From calibrating & improving my branded app&apos;s
              in the Play Store & App Store to{" "}
              <span className="client-highlight">
                lending his proficiency in web development by improving the
                overall function &amp; user experience for my multiple sites.
              </span>{" "}
              Coupled with his pleasant demeanor & exceptional
              professionalism... he&apos;s undoubtedly worth EVERY cent! I look
              forward to working with him moving forward...indefinitely!&quot;
            </Blockquote>
            <p className="review-client">
              <span className="review-client-name">
                D.R. &#39;Solo&#39; Perry.
              </span>
              , Director/Founder of Ka-Pow!! The Comic Art Academy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
