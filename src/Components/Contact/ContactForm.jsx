import { useState, useEffect } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    projectType: "Select a project type",
    services: "Design Only",
    budget: "$5,000 - $10,000",
    timeline: "Within a month",
    prompt: "",
    goals: "",
    name: "",
    email: "",
    url: "",
  });

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      projectype: "Select a project type",
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
                className={formData.services === "Design Only" ? "active" : ""}
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
                  setFormData({ ...formData, services: "Design & Development" })
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
              <option value="$5,000 - $10,000">$5,000 - $10,000</option>
              {/* More options here */}
            </select>

            <label>When do you need this project completed?</label>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
            >
              <option value="Within a month">Within a month</option>
              {/* More options here */}
            </select>

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
          </>
        )}

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
