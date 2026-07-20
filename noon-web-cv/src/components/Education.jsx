import React from "react";

export default function Education() {
    return (
        <section id="education" className="bg-white p-4 rounded shadow-sm mb-4">
            <div className="d-flex align-items-center mb-4">
              <div className="me-3">
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" 
                     style={{ width: '60px', height: '60px' }}>
                  <i className="bi bi-mortarboard-fill text-white fs-4"></i>
                </div>
              </div>
              <div>
                <h2 className="h3 fw-bold mb-1 text-primary">Education</h2>
              </div>
            </div>
            
            <div>
              <span className="fw-bold">Primary and Middle School in The Prince Royal's College</span>               
              <p>Primary and Middle Education <strong>(2009-2020)</strong></p>
              <hr className="my-3" />
              <span className="fw-bold">High School in Montfort College Secondary Section</span>               
              <p>Math-Science <strong>(2020-2023)</strong></p>
              <hr className="my-3" />
              <span className="fw-bold">Bachelor's Degree in Chiang Mai University</span>
              <p>CAMT, Software Engineering <strong>(Studying)</strong></p>
            </div>
          </section>
    );
}