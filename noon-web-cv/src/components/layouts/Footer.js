import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-light border-top">
            <div className="container py-5">
                <div className="row g-4">
                    {/* Main Footer Content */}
                    <div className="col-lg-4 col-md-6">
                        <div className="d-flex align-items-center mb-3">
                            <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                                 style={{ width: '40px', height: '40px' }}>
                                <i className="bi bi-code-slash text-white"></i>
                            </div>
                            <h5 className="mb-0 fw-bold">Thippharake Na Chiengmai</h5>
                        </div>
                        <p className="text-muted mb-3">
                            Software Engineering Student passionate about creating innovative solutions and learning new technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-2 col-md-6">
                        <h6 className="fw-semibold mb-3 text-dark">Quick Links</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#intro" className="text-decoration-none text-muted">About</a>
                            </li>
                            <li className="mb-2">
                                <a href="#portfolio" className="text-decoration-none text-muted">Portfolio</a>
                            </li>
                            <li className="mb-2">
                                <a href="#skills" className="text-decoration-none text-muted">Skills</a>
                            </li>
                            <li className="mb-2">
                                <a href="#contact" className="text-decoration-none text-muted">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-lg-3 col-md-6">
                        <h6 className="fw-semibold mb-3 text-dark">Contact Info</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2 d-flex align-items-center">
                                <i className="bi bi-geo-alt text-primary me-2"></i>
                                <span className="text-muted">Chiang Mai, Thailand</span>
                            </li>
                            <li className="mb-2 d-flex align-items-center">
                                <i className="bi bi-envelope text-primary me-2"></i>
                                <span className="text-muted">thippharake_na@cmu.ac.th</span>
                            </li>
                            <li className="mb-2 d-flex align-items-center">
                                <i className="bi bi-building text-primary me-2"></i>
                                <span className="text-muted">CAMT, CMU</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter/Download */}
                    <div className="col-lg-3 col-md-6">
                        <h6 className="fw-semibold mb-3 text-dark">Get My CV</h6>
                        <p className="text-muted small mb-3">
                            Download my resume for detailed information about my experience and skills.
                        </p>
                        <button className="btn btn-outline-primary btn-sm w-100">
                            <i className="bi bi-download me-2"></i>
                            Download CV
                        </button>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-top pt-4 mt-4">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <p className="text-muted mb-0 small">
                                &copy; {currentYear} Thippharake Na Chiengmai. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;