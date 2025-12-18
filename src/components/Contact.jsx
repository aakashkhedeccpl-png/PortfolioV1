import React, { useState } from "react";
import "./ContactSection.css";

export default function ContactSection({ useMailto = false }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ sending: false, ok: null, msg: "" });

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Message must be at least 10 characters";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eObj = validate();
    setErrors(eObj);
    if (Object.keys(eObj).length > 0) return;

    if (useMailto) {
      const subject = encodeURIComponent(form.subject);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      );
      window.location.href = `mailto:youremail@domain.com?subject=${subject}&body=${body}`;
      return;
    }

    setStatus({ sending: true, ok: null, msg: "Sending..." });
    await new Promise((r) => setTimeout(r, 1000));
    setStatus({ sending: false, ok: true, msg: "Message sent successfully!" });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="contact-root">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-text">
            Let’s build something amazing together! Feel free to contact me for freelance,
            collaborations, or full-time opportunities.
          </p>

          <div className="contact-meta">
            <p><b>Email:</b> <a href="mailto:youremail@domain.com">youremail@domain.com</a></p>
            <p><b>Location:</b> India</p>
            <p><b>Available:</b> Open for projects</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className={errors.name ? "error-input" : ""}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className={errors.email ? "error-input" : ""}
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            className={errors.subject ? "error-input" : ""}
          />

          <textarea
            name="message"
            placeholder="Your Message..."
            rows="6"
            value={form.message}
            onChange={handleChange}
            className={errors.message ? "error-input" : ""}
          />

          <button type="submit" disabled={status.sending}>
            {status.sending ? "Sending..." : "Send Message"}
          </button>

          {status.ok && <p className="success-msg">{status.msg}</p>}
        </form>
      </div>
    </section>
  );
}
