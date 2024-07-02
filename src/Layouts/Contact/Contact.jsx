import Mailto from "../../Components/Buttons/Mailto.jsx";
import ContactForm from "../../Components/Contact/ContactForm.jsx";
import "./Contact.css";
import SecondaryButton from "../../Components/Buttons/SecondaryButton.jsx";
import Socials from "../../Components/Socials/Socials.jsx";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-intro">
          <h2 className="contact-title">Let&apos;s Connect</h2>
          <p>
            Get in touch with me in a way that works best for you! If
            you&apos;re looking for a speedy response, feel free to drop me a
            quick message using the form below. Alternatively, if you prefer a
            more personalized touch, email me directly at{" "}
            <Mailto
              className="email-link"
              label="malikfelix50@gmail.com"
              mailto="mailto:malikfelix50@gmail.com"
            />
            . Looking forward to hearing from you!
          </p>
          <div className="contact-info">
            <SecondaryButton className="cta-button">
              Schedule a call
            </SecondaryButton>
            <Socials />
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
