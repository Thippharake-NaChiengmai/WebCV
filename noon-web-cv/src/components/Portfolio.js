import React, { useState } from "react";

export default function Portfolio() {
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
    return (
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
    );
}