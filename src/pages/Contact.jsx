import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="page">
      <h1>Contact Us</h1>
      <p>Questions, feedback, or partnership inquiries? We'd love to hear from you.</p>

      <div className="contact-layout">
        <div className="contact-info">
          <p>📍 Kubwa, Abuja, Nigeria</p>
          <p>📞 +234 901 592 4533</p>
          <p>✉️ support@foodexpress.ng</p>
          <p>🕒 Open daily, 8am – 10pm</p>
        </div>

        {sent ? (
          <div className="success-card">
            <span>✅</span>
            <h3>Message sent!</h3>
            <p>Thanks for reaching out — we'll get back to you within 24 hours.</p>
            <button className="btn-primary" onClick={() => setSent(false)}>
              Send another message
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
            <input name="email" type="email" placeholder="Your email" value={form.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Your message" rows="5" value={form.message} onChange={handleChange} required />
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        )}
      </div>
    </main>
  );
}

export default Contact;