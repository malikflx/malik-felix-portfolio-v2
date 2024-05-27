import { useState } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    projectype: "Website Redesign",
    services: "Design Only",
    budget: "$5,000 - $10,000",
    timeline: "Within a month",
    prompt: "",
    goals: "",
    name: "",
    email: "",
  });

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
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Tell me about your project!</h2>
      <p>With just a few details, we&apos;ll get you up and ready to go.</p>
      <label>What type of project do you need done?</label>
      <select
        name="projectType"
        value={formData.projectType}
        onChange={handleChange}
      >
        <option value="Website Redesign">Website Redesign</option>
        {/* More options here */}
      </select>

      <label>What services do you need?</label>
      <div className="services">
        <SecondaryButton
          className={formData.services === "Design Only" ? "active" : ""}
          onClick={() => setFormData({ ...formData, services: "Design Only" })}
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
      <select name="budget" value={formData.budget} onChange={handleChange}>
        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
        {/* More options here */}
      </select>

      <label>When do you need this project completed?</label>
      <select name="timeline" value={formData.timeline} onChange={handleChange}>
        <option value="Within a month">Within a month</option>
        {/* More options here */}
      </select>

      <label>What prompted you to start this project?</label>
      <textarea name="prompt" value={formData.prompt} onChange={handleChange} />

      <label>What business goals are you trying to achieve?</label>
      <textarea name="goals" value={formData.goals} onChange={handleChange} />

      <label>Full Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <PrimaryButton type="submit">Submit Project Details!</PrimaryButton>
    </form>
  );
};

export default ContactForm;
