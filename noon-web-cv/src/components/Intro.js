import React, { useState } from "react";

export default function Intro() {
    const [showFullIntro, setShowFullIntro] = useState(false);

    return (
        <section id="intro" className="animate-slide-up">
            <div className="d-flex align-items-center mb-4">
                <div className="me-3">
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" 
                         style={{ width: '60px', height: '60px' }}>
                        <i className="bi bi-person-badge text-white fs-4"></i>
                    </div>
                </div>
                <div>
                    <h2 className="h3 fw-bold mb-1 text-primary">Introduction</h2>
                </div>
            </div>
            
            <div className="row">
                <div className="col-lg-8">
                    <p className="lead mb-4">
                        I am a passionate software developer with practical experience in building both web and desktop applications. My interests lie in creating clean, efficient, and user-friendly solutions that solve real problems.
                    </p>
                    
                    {showFullIntro && (
                        <div className="fade-in">
                            <div className="bg-light p-4 rounded-3 mb-4">
                                <h5 className="fw-semibold mb-3 text-primary">
                                    <i className="bi bi-code-slash me-2"></i>
                                    Technical Skills
                                </h5>
                                <p className="mb-3">
                                    I am skilled in <strong>Java</strong> (with a solid grasp of object-oriented programming), <strong>JavaFX</strong>, <strong>JavaScript</strong> (ES6+), <strong>React</strong>, <strong>Vue</strong>, <strong>HTML</strong>, and <strong>CSS</strong>. I am also familiar with backend technologies such as <strong>Node.js</strong> and <strong>MongoDB</strong>, as well as essential tools like <strong>Docker</strong>, <strong>Git</strong>, <strong>Nginx</strong>, and the <strong>Linux</strong> command line.
                                </p>
                                <p className="mb-0">
                                    I enjoy working across the full stack, from front-end interfaces to deployment and DevOps workflows.
                                </p>
                            </div>
                            
                            <div className="bg-light p-4 rounded-3">
                                <h5 className="fw-semibold mb-3 text-primary">
                                    <i className="bi bi-mortarboard me-2"></i>
                                    Education & Experience
                                </h5>
                                <p className="mb-0">
                                    Currently, I am pursuing a Bachelor's degree in Software Engineering at <strong>Chiang Mai University</strong>. While my degree is ongoing, I have gained valuable hands-on experience through academic projects, self-driven learning, and collaboration with peers on real-world software solutions.
                                </p>
                            </div>
                        </div>
                    )}
                    
                    <button
                        onClick={() => setShowFullIntro(!showFullIntro)}
                        className="btn btn-outline-primary mt-3"
                    >
                        {showFullIntro ? (
                            <>
                                <i className="bi bi-chevron-up me-2"></i>
                                Show Less
                            </>
                        ) : (
                            <>
                                <i className="bi bi-chevron-down me-2"></i>
                                Show More
                            </>
                        )}
                    </button>
                </div>
            </div>
        </section>
    );
}