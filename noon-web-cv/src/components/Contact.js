import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, message } = formData;
    const myEmail = 'thippharake_na@cmu.ac.th';
    const subject = `Message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const mailtoLink = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    // Reset form after sending
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    alert("Message sent successfully (if your email client is configured correctly).");
  };
  
  return (
    <section id="contact" className="bg-white p-4 rounded shadow-sm mb-4">
      <div className="d-flex align-items-center mb-4">
        <div className="me-3">
          <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" 
               style={{ width: '60px', height: '60px' }}>
            <i className="bi bi-envelope-fill text-white fs-4"></i>
          </div>
        </div>
        <div>
          <h2 className="h3 fw-bold mb-1 text-primary">Contact Me</h2>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="form-control"
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
            placeholder="Enter your email"
            className="form-control"
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
            placeholder="Enter your message"
            className="form-control"
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-success w-100 w-md-auto"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
