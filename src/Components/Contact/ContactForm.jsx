import { useState, useEffect } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../../assets/images/malik_headshot.png";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    projectType: "Select a project type",
    services: "Design Only",
    budget: "Select a budget range",
    timeline: "Select a project completion time",
    prompt: "",
    goals: "",
    additionalData: "",
    name: "",
    email: "",
    url: "",
  });

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      projectype: "Select a project type",
      budget: "Select a budget range",
      timeline: "Select a project completion time",
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // come back here to add code to send the form data to a server or email
    console.log(formData);
  };

  return (
    <>
      <div className="hr-title-rule"></div>
      <div className="contact-form-header">
        <h2>Tell me about your project!</h2>
        <p>
          Just answer a few questions to help me understand your specific needs
          and I&apos;ll take it from there!
        </p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-intro">
          <div className="contact-image-container">
            <img src={Avatar} alt="malik-felix-headshot" />
          </div>
          <div className="contact-form-intro-greeting">
            <h3>Hi, I&apos;m Malik Felix!</h3>
            <p>
              I&apos;ll personally respond to your submission in 1-3 business
              days. I&apos;m looking forward to hearing about your project!
            </p>
          </div>
        </div>
        <div className="project-info">
          <label>What type of project do you need?</label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
          >
            <option value="Select a project type">Select a project type</option>
            <option value="Website Redesign">Website Redesign</option>
            {/* More options here */}
          </select>

          {formData.projectType !== "Select a project type" && (
            <>
              <label>What services do you need?</label>
              <div className="services">
                <SecondaryButton
                  className={
                    formData.services === "Design Only" ? "active" : ""
                  }
                  onClick={() =>
                    setFormData({ ...formData, services: "Design Only" })
                  }
                >
                  Design Only
                </SecondaryButton>
                <SecondaryButton
                  className={
                    formData.services === "Design & Development" ? "active" : ""
                  }
                  onClick={() =>
                    setFormData({
                      ...formData,
                      services: "Design & Development",
                    })
                  }
                >
                  Design &amp; Development
                </SecondaryButton>
              </div>

              <label>What are your budget expectations for this project?</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="Select a budget range">
                  Select a budget range
                </option>
                <option value="Less than $2,000">Less than $2,000</option>
                <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000 - $20,000">$10,000 - $20,000</option>
                <option value="$20,000+">$20,000+</option>
              </select>

              {formData.budget === "Less than $2,000" && (
                <div className="field-notice">
                  <FontAwesomeIcon
                    className="exclamation"
                    icon={faCircleExclamation}
                  />
                  <p>
                    Creating a custom solution within this budget might be
                    challenging, but I still encourage you to share your project
                    details. I&apos;m committed to guiding you in the right
                    direction and can recommend alternatives to a custom
                    solution or trusted professionals who can help meet your
                    needs.
                  </p>
                </div>
              )}

              <label>When do you need this project completed?</label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
              >
                <option value="Select a project completion time">
                  Select a project completion time
                </option>
                <option value="Less than 1 month">Less than 1 month</option>
                <option value="1-3 months">1-3 months</option>
                <option value="3-6 months">3-6 months</option>
                <option value="6+ months">6+ months</option>
                {/* More options here */}
              </select>

              {formData.timeline === "Less than 1 month" && (
                <div className="field-notice">
                  <FontAwesomeIcon
                    className="exclamation"
                    icon={faCircleExclamation}
                  />
                  <p>
                    If you need this project completed in less than a month,
                    immediate availability may be limited. However, I&apos;d
                    love to discuss your needs further to confirm availability.
                    Please note that a 20% expedited service fee may apply in
                    these cases.
                  </p>
                </div>
              )}

              {formData.timeline !== "Select a project completion time" && (
                <>
                  <label>What prompted you to start this project?</label>
                  <textarea
                    name="prompt"
                    value={formData.prompt}
                    onChange={handleChange}
                    rows="5"
                  />

                  <label>What business goals are you trying to achieve?</label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    rows="5"
                  />
                  <label>Anything else I should know about your project?</label>
                  <textarea
                    type="text"
                    name="additional-information"
                    value={formData.additionalData}
                    onChange={handleChange}
                    rows="5"
                  />
                </>
              )}
            </>
          )}
        </div>

        <label>Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Robert Freeman"
          value={formData.name}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="youremail@example.com"
          value={formData.email}
          onChange={handleChange}
        />

        <label>
          Website URL <span className="optional">(optional)</span>
        </label>
        <input
          type="url"
          name="url"
          placeholder="https://example.com"
          value={formData.url}
          onChange={handleChange}
        ></input>
        <PrimaryButton type="submit">Submit Project Details</PrimaryButton>
      </form>
    </>
  );
};

export default ContactForm;
