import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const sections = [
    { name: 'Home', path: '/' },
    { name: 'Activities', path: '/activities' }
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container-fluid">
        <div className="navbar-brand d-flex align-items-center mb-0">
          <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3"
               style={{ width: '45px', height: '45px' }}>
            <i className="bi bi-code-square text-white fs-4"></i>
          </div>
          <div>
            <h1 className="h4 fw-bold mb-0 text-primary">MY-Web CV</h1>
            <small className="text-muted d-block" style={{ fontSize: '0.75rem', lineHeight: '1' }}>
              Portfolio & Resume
            </small>
          </div>
        </div>
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
                    className={`position-absolute bottom-0 start-0 h-2 bg-primary transition-all duration-300 ${
                      location.pathname === section.path ? 'w-100' : 'w-0'
                    }`} 
                    style={{ transition: 'width 0.3s ease' }}
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
