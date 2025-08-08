import React from "react";

const skills = [
    { name: "Java (OOP, JavaFX)", percent: 70 },
    { name: "JavaScript (ES6+, React, Vue)", percent: 70 },
    { name: "Web Development (HTML, CSS, EJS)", percent: 65 },
    { name: "Git & Version Control", percent: 65 },
    { name: "Linux & Command Line", percent: 60 },
    { name: "Docker & Nginx", percent: 55 },
    { name: "MongoDB", percent: 50 },
    { name: "UX/UI", percent: 50 },
  ];

export default function Skills() {
  return (
    <section id="skills" className="bg-white p-4 rounded shadow-sm mb-4">
            <h2 className="h3 fw-bold mb-3">Skills</h2>
            {skills.map((skill) => (
              <div key={skill.name} className="mb-3">
                <div className="d-flex justify-content-between mb-2">
                  <span>{skill.name}</span>
                  <span>{skill.percent}%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-progress-bar"
                    role="progressbar"
                    style={{ width: `${skill.percent}%`,'--progress-width': `${skill.percent}%` }}
                    aria-valuenow={skill.percent}
                    aria-valuemin="0"
                    aria-valuemax="100">
                  </div>
                </div>
              </div>
            ))}
          </section>
  );
}
