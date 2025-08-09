export default function Sidebar() {
    return (
        <div className="col-12 col-md-3 bg-success text-white p-4 d-flex flex-column"> 
          {/* Profile Image */}
          <div className="text-center mb-4">
            <img
              src="/images/WebCv_img.JPG"
              alt="Profile"
              className="rounded-circle border border-4 border-white mb-3"
              style={{ width: '180px', height: '180px', objectFit: 'cover' }}
            />
            <h2 className="h4 fw-bold mb-2">Thippharake Na Chiengmai</h2>
            <p className="text-light mb-0">Software Engineering Student</p>
          </div>

          {/* Personal Information */}
          <div className="flex-grow-1">
            <div className="mb-4">
              <h6 className="fw-bold text-uppercase mb-3 border-bottom border-light pb-2">
                <i className="bi bi-person-circle me-2"></i>Personal Info
              </h6>
              <ul className="list-unstyled small">
                <li className="mb-2">
                  <i className="bi bi-calendar-event me-2"></i>
                  <strong>Birth Date:</strong> 27 January 2005
                </li>
                <li className="mb-2">
                  <i className="bi bi-person me-2"></i>
                  <strong>Age:</strong> 20 years old
                </li>
                <li className="mb-2">
                  <i className="bi bi-geo-alt me-2"></i>
                  <strong>Location:</strong> Chiang Mai, Thailand
                </li>
                <li className="mb-2">
                  <i className="bi bi-flag me-2"></i>
                  <strong>Nationality:</strong> Thai
                </li>
              </ul>
            </div>

            {/* Education */}
            <div className="mb-4">
              <h6 className="fw-bold text-uppercase mb-3 border-bottom border-light pb-2">
                <i className="bi bi-mortarboard me-2"></i>Education
              </h6>
              <ul className="list-unstyled small">
                <li className="mb-2">
                  <i className="bi bi-book me-2"></i>
                  <strong>Status:</strong> 3rd Year Student
                </li>
                <li className="mb-2">
                  <i className="bi bi-code-slash me-2"></i>
                  <strong>Field:</strong> Software Engineering
                </li>
                <li className="mb-2">
                  <i className="bi bi-building me-2"></i>
                  <strong>Institution:</strong> CAMT, CMU
                </li>
              </ul>
            </div>

            {/* Skills & Interests */}
            <div className="mb-4">
              <h6 className="fw-bold text-uppercase mb-3 border-bottom border-light pb-2">
                <i className="bi bi-stars me-2"></i>Skills & Interests
              </h6>
              <ul className="list-unstyled small">
                <li className="mb-2">
                  <i className="bi bi-translate me-2"></i>
                  <strong>Languages:</strong> Thai (Native), English (Medium)
                </li>
                <li className="mb-2">
                  <i className="bi bi-heart me-2"></i>
                  <strong>Interests:</strong> Web Dev, AI/ML, Sports, Music
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center mt-auto">
            <h6 className="fw-bold text-uppercase mb-3">
              <i className="bi bi-link-45deg me-2"></i>Connect
            </h6>
            <div className="d-flex justify-content-center gap-3">
              <a href="https://github.com/quentinx27" target="_blank" rel="noopener noreferrer" 
                 className="text-white text-decoration-none fs-4 hover-scale">
                <i className="bi bi-github"></i>
              </a>
              <a href="mailto:thippharake_na@cmu.ac.th" 
                 className="text-white text-decoration-none fs-4 hover-scale">
                <i className="bi bi-envelope"></i>
              </a>
              <a href="https://line.me/ti/p/~37299271" target="_blank" rel="noopener noreferrer" 
                 className="text-white text-decoration-none fs-4 hover-scale">
                <img src="https://icons.iconarchive.com/icons/bootstrap/bootstrap/128/Bootstrap-line-icon.png" 
                     alt="Line" 
                     style={{ width: '24px', height: '24px', filter: 'brightness(0) invert(1)' }} />
              </a>
              <a href="tel:+0614825222" 
                 className="text-white text-decoration-none fs-4 hover-scale">
                <i className="bi bi-telephone"></i>
              </a>
            </div>
          </div>
        </div>
    );
}