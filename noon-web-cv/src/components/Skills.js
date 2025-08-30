import React, { useState, useEffect, useRef } from "react";

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
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState(skills.map(skill => ({ ...skill, animatedPercent: 0 })));
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Start animation with staggered delay
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => 
                prev.map((s, i) => 
                  i === index ? { ...s, animatedPercent: skill.percent } : s
                )
              );
            }, index * 200); // 200ms delay between each skill
          });
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section id="skills" className="bg-white p-4 rounded shadow-sm mb-4" ref={skillsRef}>
      <div className="d-flex align-items-center mb-4">
        <div className="me-3">
          <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" 
               style={{ width: '60px', height: '60px' }}>
            <i className="bi bi-gear-fill text-white fs-4"></i>
          </div>
        </div>
        <div>
          <h2 className="h3 fw-bold mb-1 text-primary">Skills</h2>
        </div>
      </div>
      
      {animatedSkills.map((skill, index) => (
        <div key={skill.name} className="mb-3 skill-item">
          <div className="d-flex justify-content-between mb-2">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-percent">{skill.animatedPercent}%</span>
          </div>
          <div className="progress skill-progress">
            <div
              className="progress-bar bg-primary skill-progress-bar"
              role="progressbar"
              style={{ 
                width: `${skill.animatedPercent}%`,
                transition: 'width 1.5s ease-in-out',
                transitionDelay: `${index * 0.2}s`
              }}
              aria-valuenow={skill.animatedPercent}
              aria-valuemin="0"
              aria-valuemax="100">
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
