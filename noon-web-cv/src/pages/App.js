import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NoonWebCV = () => {

  // ✅ Fade-in effect เมื่อโหลดหน้าเว็บ
  useEffect(() => {
    document.body.classList.add("fade-in");
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showFullIntro, setShowFullIntro] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const skills = [
    { name: 'Algorithm Analysis', level: 80 },
    { name: 'Optimization', level: 70 },
    { name: 'Web Development', level: 60 },
    { name: 'UX/UI', level: 45 },
    { name: 'JAVA', level: 70 },
    { name: 'HTML & CSS', level: 60 }
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const portfolioProjects = [
    {
      image: '/images/adpro1.jpg',
      title: 'Advanced-Programming Project 1',
      description: 'This project about creating crop & edge detecting program'
    },
    {
      image: '/images/adpro2.jpg',
      title: 'Advanced-Programming Project 2',
      description: 'This project about creating Asteroid game'
    },
    {
      image: '/images/data.png',
      title: 'Database Project',
      description: 'This project about creating database for some organization'
    },
    {
      image: '/images/eng4.png',
      title: 'English in Science and Technology Project 1',
      description: 'This project about creating new innovation'
    }
  ];

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % portfolioProjects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + portfolioProjects.length) % portfolioProjects.length);
  };

  const { image, title, description } = portfolioProjects[currentProjectIndex];

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
    <div className="min-vh-100 bg-light font-ubuntu">
      {/* Navigation */}
      <Navbar />

      <div className="row g-0">
        {/* Sidebar */}
        <div className="col-12 col-md-3 bg-success text-white text-center p-4">
          <img
            src="/images/my2.jpg"
            alt="Profile"
            className="rounded-circle border border-4 border-white mb-3"
            style={{ width: '192px', height: '192px', objectFit: 'cover' }}
          />
          <h2 className="h4 fw-bold">Thippharake Na Chiengmai</h2>
          <div className="mt-4 text-start">
            <p><strong>Birth Date:</strong> 27 January 2005</p>
            <p><strong>Studying:</strong> 2nd Software Engineer, CAMT, CMU</p>
          </div>
          <div className="d-flex justify-content-center mt-4 gap-3">
            <a href="https://github.com/quentinx27" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
              <i className="bi bi-github"></i>
            </a>
            <a href="mailto:thippharake_na@cmu.ac.th" className="text-white text-decoration-none">
              <i className="bi bi-envelope"></i>
            </a>
            <a href="tel:+0614825222" className="text-white text-decoration-none">
              <i className="bi bi-telephone"></i>
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-12 col-md-9 p-4">
          {/* Intro Section */}
          <section id="intro" className="bg-white p-4 rounded shadow-sm mb-4">
            <h2 className="h3 fw-bold mb-3">Personal Introduction</h2>
            <p>
              I am a passionate and dedicated software engineer with over many years of experience in the tech industry.
            </p>
            {showFullIntro && (
              <>
                <p className="mt-3">
                  Specializing in web development, I have worked on numerous projects that range from small websites to large-scale web applications. My expertise includes front-end and back-end technologies, with a strong foundation in HTML, CSS, JavaScript, and frameworks such as React and Node.js.
                </p>
                <p className="mt-3">
                  Currently, I am pursuing a Bachelor's degree in Software Engineering at Chiang Mai University. Although I have not yet completed my degree, I have gained valuable knowledge and hands-on experience through both academic coursework and practical projects.
                </p>
              </>
            )}
            <button
              onClick={() => setShowFullIntro(!showFullIntro)}
              className="btn btn-link text-success"
            >
              {showFullIntro ? 'Show Less' : 'Show More'}
            </button>
          </section>

          {/* Hobby Section */}
          <section id="hobby" className="bg-white p-4 rounded shadow-sm mb-4">
            <h2 className="h3 fw-bold mb-3">Hobby</h2>
            <p>
              I balance my technical pursuits with a love for the outdoors, often found hiking or exploring nature trails.
              I also enjoy the creative outlet of playing acoustic guitar and experimenting with new recipes in the kitchen.
            </p>
          </section>

          {/* Experience Section */}
          <section id="experience" className="bg-white p-4 rounded shadow-sm mb-4">
            <h2 className="h3 fw-bold mb-3">Experience</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Basic Java:</strong> Developed foundational knowledge in Java programming, including object-oriented principles, data structures, and algorithms.
              </li>
              <li className="list-group-item">
                <strong>Basic HTML & CSS:</strong> Learned the fundamentals of web development using HTML for structuring content and CSS for styling.
              </li>
              <li className="list-group-item">
                <strong>Web Development:</strong> Applied HTML, CSS, and JavaScript to build interactive web applications.
              </li>
            </ul>
          </section>

          {/* Education Section */}
          <section id="education" className="bg-white p-4 rounded shadow-sm mb-4">
            <h2 className="h3 fw-bold mb-3">Education</h2>
            <div>
              <h6 className="fw-bold">High School in Montfort College Secondary Section</h6>
              <p>Math-Science <strong>(2020-2023)</strong></p>
              <hr className="my-3" />
              <h6 className="fw-bold">Bachelor's Degree in Chiang Mai University</h6>
              <p>CAMT, Software Engineering <strong>(Studying)</strong></p>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="bg-white p-4 rounded shadow-sm mb-4">
            <h2 className="h3 fw-bold mb-3">Skills</h2>
            {skills.map((skill) => (
              <div key={skill.name} className="mb-3">
                <div className="d-flex justify-content-between mb-2">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-progress-bar"
                    role="progressbar"
                    style={{ width: `${skill.level}%`,'--progress-width': `${skill.level}%` }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100">
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Portfolio Section */}
          <section id="portfolio" className="bg-white p-4 rounded shadow-sm mb-4">
            <h2 className="h3 fw-bold mb-3">Portfolio</h2>

            <div className="card h-100">
              <img
                src={image}
                alt={title}
                className="card-img-top img-fluid"
                style={{ height: 'auto', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
              </div>
            </div>

            <div className="d-flex justify-content-between mt-4">
              <button className="btn btn-success" onClick={prevProject}>
                <i className="bi bi-arrow-left-circle"></i> Previous
              </button>
              <button className="btn btn-success" onClick={nextProject}>
                Next <i className="bi bi-arrow-right-circle"></i>
              </button>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="bg-white p-4 rounded shadow-sm mb-4">
            <h2 className="h3 fw-bold mb-3">Contact Me</h2>
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
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NoonWebCV;