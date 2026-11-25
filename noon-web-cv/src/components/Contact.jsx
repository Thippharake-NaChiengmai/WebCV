import React, { useState } from "react";
import { appConfig } from '../config/app';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStatus('');
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, message } = formData;
    const subject = `Message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const mailtoLink = `mailto:${appConfig.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setStatus('Your email app is opening with your message ready to send.');
    window.location.href = mailtoLink;
  };
  
  return (
    <section id="contact" className="bg-white p-4 rounded shadow-sm mb-4">
      <div className="d-flex align-items-center mb-4">
        <div className="me-3">
          <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" 
               style={{ width: '60px', height: '60px' }}>
            <i aria-hidden="true" className="bi bi-envelope-fill text-white fs-4"></i>
          </div>
        </div>
        <div>
          <h2 className="h3 fw-bold mb-1 text-primary">Contact Me</h2>
        </div>
      </div>
      
      <p id="contact-help" className="text-secondary mb-4">This opens your email app with a draft. Review it there before sending.</p>
      <form onSubmit={handleSubmit} aria-describedby="contact-help">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            placeholder="Your name…"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            spellCheck={false}
            placeholder="you@example.com…"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            autoComplete="off"
            placeholder="What would you like to discuss?…"
            className="form-control"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-success w-100"
        >
          Open Email Draft
        </button>
        {status && <p className="text-success small mt-3 mb-0" role="status">{status}</p>}
      </form>
    </section>
  );
}
