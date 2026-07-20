import React from 'react';

const Achievements = () => {
  return (
    <div className="card shadow-lg border-0 mb-4">
      <div className="card-header bg-primary text-white py-3">
        <h2 className="h4 mb-0 fw-bold">
          <i className="bi bi-calendar-event me-2"></i>
          Activities & Achievements
        </h2>
      </div>
      <div className="card-body p-4">
        <div className="row">
          <div className="col-12">
            <p className="text-muted mb-4">
              Here are some of my notable activities, achievements, and extracurricular involvement.
            </p>

            {/* Activity Timeline */}
            <div className="timeline">
              <div className="timeline-item mb-4">
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center"
                         style={{ width: '40px', height: '40px' }}>
                      <i className="bi bi-trophy text-white"></i>
                    </div>
                  </div>
                  <div className="ms-3">
                    <h5 className="fw-bold text-primary">Academic Excellence Award</h5>
                    <p className="text-muted small mb-1">2023 - Present</p>
                    <p className="mb-0">Recognized for outstanding academic performance and dedication to learning.</p>
                  </div>
                </div>
              </div>

              <div className="timeline-item mb-4">
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <div className="bg-success rounded-circle d-flex align-items-center justify-content-center"
                         style={{ width: '40px', height: '40px' }}>
                      <i className="bi bi-people text-white"></i>
                    </div>
                  </div>
                  <div className="ms-3">
                    <h5 className="fw-bold text-success">Student Leadership Program</h5>
                    <p className="text-muted small mb-1">2022 - 2023</p>
                    <p className="mb-0">Led various student initiatives and participated in community service projects.</p>
                  </div>
                </div>
              </div>

              <div className="timeline-item mb-4">
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <div className="bg-info rounded-circle d-flex align-items-center justify-content-center"
                         style={{ width: '40px', height: '40px' }}>
                      <i className="bi bi-code-slash text-white"></i>
                    </div>
                  </div>
                  <div className="ms-3">
                    <h5 className="fw-bold text-info">Coding Competition Participant</h5>
                    <p className="text-muted small mb-1">2021 - 2023</p>
                    <p className="mb-0">Participated in multiple programming contests and hackathons, developing problem-solving skills.</p>
                  </div>
                </div>
              </div>

              <div className="timeline-item mb-4">
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center"
                         style={{ width: '40px', height: '40px' }}>
                      <i className="bi bi-heart text-white"></i>
                    </div>
                  </div>
                  <div className="ms-3">
                    <h5 className="fw-bold text-warning">Volunteer Work</h5>
                    <p className="text-muted small mb-1">2020 - Present</p>
                    <p className="mb-0">Regular volunteer at local community center, teaching basic computer skills to seniors.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills & Certifications */}
            <div className="row mt-5">
              <div className="col-12">
                <h4 className="fw-bold text-primary mb-3">Certifications & Courses</h4>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="card border-primary h-100">
                      <div className="card-body">
                        <h6 className="card-title text-primary">Web Development Fundamentals</h6>
                        <p className="card-text small text-muted">Completed comprehensive course covering HTML, CSS, JavaScript, and React.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card border-success h-100">
                      <div className="card-body">
                        <h6 className="card-title text-success">Database Management</h6>
                        <p className="card-text small text-muted">Certification in SQL and database design principles.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
