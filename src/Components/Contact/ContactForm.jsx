import { useState } from "react";
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
    </form>
  );
};

export default ContactForm;
