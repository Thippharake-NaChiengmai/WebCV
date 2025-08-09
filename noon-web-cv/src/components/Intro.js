import React, { useState } from "react";

export default function Intro() {

    const [showFullIntro, setShowFullIntro] = useState(false);

    return (
        <section id="intro" className="bg-white p-4 rounded shadow-sm mb-4">
            <h2 className="h3 fw-bold mb-3">Personal Introduction</h2>
            <p>
                I am a passionate software developer with practical experience in building both web and desktop applications. My interests lie in creating clean, efficient, and user-friendly solutions that solve real problems.
            </p>
            {showFullIntro && (
                <>
                    <p className="mt-3">
                        I am skilled in Java (with a solid grasp of object-oriented programming), JavaFX, JavaScript (ES6+), React, Vue, HTML, and CSS. I am also familiar with backend technologies such as Node.js and MongoDB, as well as essential tools like Docker, Git, Nginx, and the Linux command line. I enjoy working across the full stack, from front-end interfaces to deployment and DevOps workflows.
                    </p>
                    <p className="mt-3">
                        Currently, I am pursuing a Bachelor's degree in Software Engineering at Chiang Mai University. While my degree is ongoing, I have gained valuable hands-on experience through academic projects, self-driven learning, and collaboration with peers on real-world software solutions.
                    </p>
                </>
            )}
            <button
                onClick={() => setShowFullIntro(!showFullIntro)}
                className="btn btn-link text-success"
            >
                {showFullIntro ? (
                    <>
                        <i className="bi bi-chevron-up me-1"></i>
                        Show Less
                    </>
                ) : (
                    <>
                        <i className="bi bi-chevron-down me-1"></i>
                        Show More
                    </>
                )}
            </button>
        </section>

    );
}