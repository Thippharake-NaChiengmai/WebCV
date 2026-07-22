import React from "react";
import { Link } from 'react-router-dom';
import { appConfig } from '../../config/app';

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
                            Software Engineering intern focused on scalable, end-to-end software solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-2 col-md-6">
                        <h6 className="fw-semibold mb-3 text-dark">Quick Links</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link to="/#intro" className="text-decoration-none text-muted">About</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/activities#portfolio" className="text-decoration-none text-muted">Portfolio</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/#skills" className="text-decoration-none text-muted">Skills</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/#contact" className="text-decoration-none text-muted">Contact</Link>
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
                                <a className="text-muted text-decoration-none" href={`mailto:${appConfig.contactEmail}`}>
                                    {appConfig.contactEmail}
                                </a>
                            </li>
                            <li className="mb-2 d-flex align-items-center">
                                <i className="bi bi-building text-primary me-2"></i>
                                <span className="text-muted">CAMT, Chiang Mai University</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-lg-3 col-md-6">
                        <h6 className="fw-semibold mb-3 text-dark">Get in Touch</h6>
                        <p className="text-muted small mb-3">
                            Contact me for more information about my experience and projects.
                        </p>
                        <a href={`mailto:${appConfig.contactEmail}`} className="btn btn-outline-primary btn-sm w-100"><i className="bi bi-envelope me-2"></i>Email Me</a>
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
