import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const sections = [
    { name: 'Home', path: '/' },
    { name: 'Projects & Awards', path: '/activities' }
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center mb-0 text-decoration-none" onClick={() => setIsMenuOpen(false)} aria-label="Go to home page">
          <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3"
               style={{ width: '45px', height: '45px' }}>
            <i className="bi bi-code-square text-white fs-4"></i>
          </div>
          <div>
            <h1 className="h4 fw-bold mb-0 text-primary">Thippharake Na Chiengmai</h1>
            <small className="text-muted d-block" style={{ fontSize: '0.75rem', lineHeight: '1' }}>
              Software Engineering Portfolio
            </small>
          </div>
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? (
            <i className="bi bi-x-lg fs-4"></i>
          ) : (
            <i className="bi bi-list fs-4"></i>
          )}
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {sections.map(section => (
              <li className="nav-item" key={section.name}>
                <Link 
                  to={section.path}
                  className={`nav-link mx-2 fw-medium position-relative ${
                    location.pathname === section.path ? 'text-primary' : 'text-dark'
                  }`}
                  style={{ transition: 'color 0.3s ease' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section.name}
                  <span 
                    className={`position-absolute bottom-0 start-0 bg-primary nav-active-indicator ${
                      location.pathname === section.path ? 'is-active' : ''
                    }`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
