import React, { useState } from 'react';

export default function Sidebar() {
    const [showFullSidebar, setShowFullSidebar] = useState(false); // false = show less by default

    const toggleSidebar = () => {
        setShowFullSidebar(!showFullSidebar);
    };

    return (
        <div className={`col-12 col-md-3 bg-success text-white p-3 d-flex flex-column position-relative overflow-hidden sidebar ${showFullSidebar ? 'show-full' : ''}`}> 
          {/* Profile Image - Always Visible */}
          <div className="text-center mb-4 sidebar-profile">
            <div className="position-relative mb-3">
              <img
                src="/images/WebCv_img.JPG"
                alt="Profile"
                className="rounded-circle border border-4 border-white"
                style={{ width: '180px', height: '180px', objectFit: 'cover' }}
              />
            </div>
            <h2 className="h4 fw-bold mb-2">Thippharake Na Chiengmai</h2>
            <p className="text-light mb-0 opacity-90">Software Engineering Student</p>
            <div className="mt-3">
              <span className="badge bg-light text-dark px-3 py-2 fw-semibold">
                <i className="bi bi-geo-alt me-2 text-dark" style={{ color: '#1f2937 !important' }}></i>
                Chiang Mai, Thailand
              </span>
            </div>
          </div>

          {/* Content Sections - Hidden by default on mobile */}
          <div className={`flex-grow-1 sidebar-content ${showFullSidebar ? 'show' : 'hide'}`}>
            {/* Personal Information */}
            <div className="mb-4">
              <h6 className="fw-bold text-uppercase mb-3 border-bottom border-light pb-2 d-flex align-items-center">
                <i className="bi bi-person me-2" style={{ fontSize: '2rem' }}></i>Personal Info
              </h6>
              <div className="space-y-3">
                <div className="d-flex align-items-center p-3 bg-white bg-opacity-10 rounded-3">
                  <i className="bi bi-calendar me-3" style={{ fontSize: '2rem', color: 'white' }}></i>
                  <div>
                    <div className="text-white-50 small fw-semibold">Birth Date</div>
                    <div className="fw-medium">27 January 2005</div>
                  </div>
                </div>
                
                <div className="d-flex align-items-center p-3 bg-white bg-opacity-10 rounded-3">
                  <i className="bi bi-person me-3" style={{ fontSize: '2rem', color: 'white' }}></i>
                  <div>
                    <div className="text-white-50 small fw-semibold">Age</div>
                    <div className="fw-medium">20 years old</div>
                  </div>
                </div>
                
                <div className="d-flex align-items-center p-3 bg-white bg-opacity-10 rounded-3">
                  <i className="bi bi-geo-alt me-3" style={{ fontSize: '2rem', color: 'white' }}></i>
                  <div>
                    <div className="text-white-50 small fw-semibold">Location</div>
                    <div className="fw-medium">Chiang Mai, Thailand</div>
                  </div>
                </div>
                
                <div className="d-flex align-items-center p-3 bg-white bg-opacity-10 rounded-3">
                  <i className="bi bi-flag me-3" style={{ fontSize: '2rem', color: 'white' }}></i>
                  <div>
                    <div className="text-white-50 small fw-semibold">Nationality</div>
                    <div className="fw-medium">Thai</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-4">
              <h6 className="fw-bold text-uppercase mb-3 border-bottom border-light pb-2 d-flex align-items-center">
                <i className="bi bi-mortarboard me-2" style={{ fontSize: '2rem' }}></i>Education
              </h6>
              <div className="space-y-3">
                <div className="d-flex align-items-center p-3 bg-white bg-opacity-10 rounded-3">
                  <i className="bi bi-book me-3" style={{ fontSize: '2rem', color: 'white' }}></i>
                  <div>
                    <div className="text-white-50 small fw-semibold">Status</div>
                    <div className="fw-medium">3rd Year Student</div>
                  </div>
                </div>
                
                <div className="d-flex align-items-center p-3 bg-white bg-opacity-10 rounded-3">
                  <i className="bi bi-code me-3" style={{ fontSize: '2rem', color: 'white' }}></i>
                  <div>
                    <div className="text-white-50 small fw-semibold">Field</div>
                    <div className="fw-medium">Software Engineering</div>
                  </div>
                </div>
                
                <div className="d-flex align-items-center p-3 bg-white bg-opacity-10 rounded-3">
                  <i className="bi bi-building me-3" style={{ fontSize: '2rem', color: 'white' }}></i>
                  <div>
                    <div className="text-white-50 small fw-semibold">Institution</div>
                    <div className="fw-medium">CAMT, CMU</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills & Interests */}
            <div className="mb-4">
              <h6 className="fw-bold text-uppercase mb-3 border-bottom border-light pb-2 d-flex align-items-center">
                <i className="bi bi-star me-2" style={{ fontSize: '2rem' }}></i>Skills & Interests
              </h6>
              <div className="space-y-3">
                <div className="d-flex align-items-center p-3 bg-white bg-opacity-10 rounded-3">
                  <i className="bi bi-translate me-3" style={{ fontSize: '2rem', color: 'white' }}></i>
                  <div>
                    <div className="text-white-50 small fw-semibold">Languages</div>
                    <div className="fw-medium">Thai (Native), English (Medium)</div>
                  </div>
                </div>
                
                <div className="d-flex align-items-center p-3 bg-white bg-opacity-10 rounded-3">
                  <i className="bi bi-heart me-3" style={{ fontSize: '2rem', color: 'white' }}></i>
                  <div>
                    <div className="text-white-50 small fw-semibold">Interests</div>
                    <div className="fw-medium">Web Dev, AI/ML, Sports, Music</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links - Always Visible */}
          <div className="text-center mt-auto social-links-section">
            <h6 className="fw-bold text-uppercase mb-3 d-flex align-items-center justify-content-center text-white">
              <i className="bi bi-link me-2" style={{ fontSize: '1.5rem' }}></i>Connect With Me
            </h6>
            <div className="d-flex justify-content-center gap-3 mb-3">
              <a href="https://github.com/quentinx27" target="_blank" rel="noopener noreferrer" 
                 className="social-icon-link" title="GitHub">
                <div className="social-icon-wrapper">
                  <i className="bi bi-github" style={{ fontSize: '1.8rem' }}></i>
                </div>
              </a>
              <a href="mailto:thippharake_na@cmu.ac.th" 
                 className="social-icon-link" title="Email">
                <div className="social-icon-wrapper">
                  <i className="bi bi-envelope" style={{ fontSize: '1.8rem' }}></i>
                </div>
              </a>
              <a href="https://line.me/ti/p/~your_line_id" target="_blank" rel="noopener noreferrer" 
                 className="social-icon-link" title="Line">
                <div className="social-icon-wrapper">
                  <img src="https://icons.iconarchive.com/icons/bootstrap/bootstrap/128/Bootstrap-line-icon.png" 
                       alt="Line" 
                       style={{ width: '28px', height: '28px', filter: 'brightness(0) invert(1)' }} />
                </div>
              </a>
              <a href="tel:+0614825222" 
                 className="social-icon-link" title="Phone">
                <div className="social-icon-wrapper">
                  <i className="bi bi-telephone" style={{ fontSize: '1.8rem' }}></i>
                </div>
              </a>
            </div>
          </div>

          {/* Mobile Show More/Less Button */}
          <div className="d-md-none text-center mt-3">
            <button 
              onClick={toggleSidebar}
              className="btn btn-outline-light w-100"
              style={{ 
                borderColor: 'rgba(255,255,255,0.5)', 
                color: 'white',
                fontSize: '1rem',
                padding: '0.75rem 1rem',
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: '2px solid rgba(255,255,255,0.3)'
              }}
            >
              {showFullSidebar ? (
                <>
                  <i className="bi bi-chevron-up me-2" style={{ fontSize: '1.2rem' }}></i>
                  Show Less
                </>
              ) : (
                <>
                  <i className="bi bi-chevron-down me-2" style={{ fontSize: '1.2rem' }}></i>
                  Show More
                </>
              )}
            </button>
          </div>
        </div>
    );
}