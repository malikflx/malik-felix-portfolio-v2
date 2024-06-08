import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Mailto from "../../Components/Buttons/Mailto.jsx";
import ContactForm from "../../Components/Contact/ContactForm.jsx";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Let&apos;s Connect</h2>
        <p className="contact-intro">
          Get in touch with me in a way that works best for you! If you&apos;re
          looking for a speedy response, feel free to drop me a quick message
          using the form below. Alternatively, if you prefer a more personalized
          touch, click on my email address to craft a custom messge. Looking
          forward to hearing from you!
        </p>
        <div className="contact-info">
          <ul className="contact-info-list">
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <Mailto
                label="malikfelix50@gmail.com"
                mailto="mailto:malikfelix50@gmail.com"
              />
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
