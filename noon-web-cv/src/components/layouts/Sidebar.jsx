import React, { useState } from 'react';
import { appConfig } from '../../config/app';

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  return <aside className={`col-12 col-md-3 bg-success text-white p-3 d-flex flex-column position-relative overflow-hidden sidebar ${open ? 'show-full' : ''}`}>
    <div className="text-center mb-4 sidebar-profile"><img src="/images/cvImg.png" alt="Thippharake Na Chiengmai" className="rounded-circle border border-4 border-white mb-3" style={{ width: 180, height: 180, objectFit: 'cover', objectPosition: 'top' }} /><h1 className="h4 fw-bold mb-2">Thippharake Na Chiengmai</h1><p className="text-light mb-0 opacity-90">Software Engineering Intern</p><span className="badge bg-light text-dark px-3 py-2 fw-semibold mt-3"><i className="bi bi-geo-alt me-2" />Chiang Mai, Thailand</span></div>
    <div id="sidebar-details" className={`flex-grow-1 sidebar-content ${open ? 'show' : 'hide'}`}><section className="mb-4"><h2 className="h6 fw-bold text-uppercase mb-3 border-bottom border-light pb-2">Education</h2><div className="p-3 bg-white bg-opacity-10 rounded-3"><strong>Bachelor&apos;s Degree</strong><div>Software Engineering</div><small>CAMT, Chiang Mai University</small><div><small>2023 – May 2027 (expected)</small></div><div><small>GPAX 2.68</small></div></div></section><section className="mb-4"><h2 className="h6 fw-bold text-uppercase mb-3 border-bottom border-light pb-2">Languages</h2><div className="p-3 bg-white bg-opacity-10 rounded-3"><div>Thai — Native</div><div className="mt-2">English — B1 (CEFR)</div></div></section></div>
    <div className="text-center mt-auto social-links-section">
      <div className="d-flex justify-content-center flex-wrap gap-2">
        <a href={appConfig.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light" title="GitHub" aria-label="GitHub"><i className="bi bi-github" /></a>
        <a href={`mailto:${appConfig.contactEmail}`} className="btn btn-outline-light" title="Email" aria-label="Email"><i className="bi bi-envelope" /></a>
        <a href="https://www.linkedin.com/in/thippharake-na-chiengmai" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light" title="LinkedIn" aria-label="LinkedIn"><i className="bi bi-linkedin" /></a>
        <a href="tel:+660614825222" className="btn btn-outline-light" title="Phone" aria-label="Phone"><i className="bi bi-telephone" /></a>
      </div>
    </div>
    <div className="d-md-none text-center mt-3"><button type="button" onClick={() => setOpen(!open)} className="btn btn-outline-light w-100" aria-expanded={open} aria-controls="sidebar-details">{open ? 'Show Less' : 'Show More'}</button></div>
  </aside>;
}
