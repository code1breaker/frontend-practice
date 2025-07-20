import React, { useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form?.name?.trim()) newErrors.name = "Name is required";
    if (!form?.email?.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(form.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!form?.message?.trim()) newErrors.message = "Message is required";

    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      return setError(validationErrors);
    }

    setSubmittedName(form.name);
    setForm({ name: "", email: "", message: "" });
    setSuccess(true);
  };
  return (
    <div className="p-4">
      {!success ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name :</label>
          <div>
            <input
              id="name"
              type="text"
              value={form?.name}
              name="name"
              onChange={handleChange}
            />
            {error?.name && <p style={{ color: "red" }}>{error?.name}</p>}
          </div>
          <label htmlFor="email">Email:</label>
          <div>
            <input
              id="email"
              type="text"
              value={form?.email}
              name="email"
              onChange={handleChange}
            />
            {error?.email && <p style={{ color: "red" }}>{error?.email}</p>}
          </div>
          <label htmlFor="message">Message:</label>
          <div>
            <textarea
              id="message"
              value={form?.message}
              name="message"
              onChange={handleChange}
            />
            {error?.message && <p style={{ color: "red" }}>{error?.message}</p>}
          </div>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <h1>Thank you, {submittedName}</h1>
      )}
    </div>
  );
};

export default ContactForm;
