import React from "react";

export default function Exprience() {
  return (
    <section className="bg-white p-4 rounded shadow-sm mb-4">
                  <div className="d-flex align-items-center mb-4">
                <div className="me-3">
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" 
                         style={{ width: '60px', height: '60px' }}>
                        <i className="bi bi-briefcase-fill text-white fs-4"></i>
                    </div>
                </div>
                <div>
                    <h2 className="h3 fw-bold mb-1 text-primary">Experience</h2>
                </div>
            </div>
      
      <div className="mb-4">
        <span className="fw-bold text-lg">Programming Languages:</span>
        <ul className="list-disc ml-6">
          <li>Java (OOP, Basic JavaFX)</li>
          <li>JavaScript (ES6+), HTML5, CSS3</li>
        </ul>
      </div>
      <div className="mb-4">
        <span className="fw-bold text-lg">Frontend:</span>
        <ul className="list-disc ml-6">
          <li>React.js, Vue.js, EJS, JavaFX</li>
        </ul>
      </div>
      <div className="mb-4">
        <span className="fw-bold text-lg">Backend &amp; Database:</span>
        <ul className="list-disc ml-6">
          <li>Node.js, MongoDB</li>
        </ul>
      </div>
      <div className="mb-4">
        <span className="fw-bold text-lg">DevOps / Deployment:</span>
        <ul className="list-disc ml-6">
          <li>Docker, Nginx, Linux Command Line</li>
        </ul>
      </div>
      <div className="mb-4">
        <span className="fw-bold text-lg">Version Control:</span>
        <ul className="list-disc ml-6">
          <li>Git (Branching, Merge, Pull Request)</li>
        </ul>
      </div>
      <div>
        <span className="fw-bold text-lg">Core Concepts:</span>
        <ul className="list-disc ml-6">
          <li>
            Object-Oriented Programming (OOP): Inheritance, Polymorphism, Encapsulation, Abstraction
          </li>
        </ul>
      </div>
    </section>
  );
}
