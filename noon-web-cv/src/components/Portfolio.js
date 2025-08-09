import React, { useState } from "react";

export default function Portfolio() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const portfolioProjects = [
    {
      image: '/images/adpro1.jpg',
      title: 'Image Crop & Edge Detector Program',
      description: 'A Java-based image processing application that implements advanced algorithms for automatic image cropping and edge detection. Features include real-time image analysis, customizable detection parameters, and export functionality.',
      link: 'https://github.com/quentinx27/adpro-project'
    },
    {
      image: '/images/adpro2.jpg',
      title: 'Asteroid Game',
      description: 'An interactive 2D space shooter game built with Java and JavaFX. Players control a spaceship to destroy asteroids while avoiding collisions. Features include score tracking, multiple difficulty levels, and smooth animations.',
      link: 'https://github.com/quentinx27/adproProject2'
    },
    {
      image: '/images/CJ.png',
      title: 'CJ Streetware Store',
      description: 'A full-stack web application for streetwear retail management built with React, Node.js, and MongoDB. Features include real-time inventory tracking, automated sales analytics, customer relationship management, and comprehensive reporting dashboards with data visualization.',
      link: 'https://github.com/Thippharake-NaChiengmai/DevOps-zerotohero-1'
    },
    {
      image: '/images/AI.jpg',
      title: 'AI Chat Bot',
      description: 'An intelligent conversational AI chatbot developed using natural language processing techniques. Capable of understanding user queries, providing relevant responses, and learning from interactions to improve accuracy over time.',
      link: 'https://aigenfootball-noon.vercel.app/'
    }
  ];

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % portfolioProjects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + portfolioProjects.length) % portfolioProjects.length);
  };

  const { image, title, description, link } = portfolioProjects[currentProjectIndex];
    return (
        <section id="portfolio" className="bg-white p-4 rounded shadow-sm mb-4">
            <h2 className="h3 fw-bold mb-3">Portfolio</h2>

                         <a href={link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
               <div className="card h-100 hover-shadow" style={{ cursor: 'pointer', transition: 'transform 0.2s' }}>
                 <img
                   src={image}
                   alt={title}
                   className="card-img-top img-fluid"
                   style={{ height: 'auto', objectFit: 'cover' }}
                 />
                 <div className="card-body">
                   <h5 className="card-title text-dark">{title}</h5>
                   <p className="card-text text-muted">{description}</p>
                 </div>
               </div>
             </a>

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