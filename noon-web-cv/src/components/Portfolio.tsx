import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../types/portfolio';
import PortfolioAPI from '../services/portfolioAPI';

const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  useEffect(() => { PortfolioAPI.getAllProjects().then(response => setProjects(response.data)).catch(error => setError(error.message)).finally(() => setLoading(false)); }, []);

  if (loading) return <div className="card shadow-lg border-0 mb-4"><div className="card-body p-4 text-center"><div className="spinner-border text-primary" /><p className="mt-3 text-muted mb-0">Loading projects...</p></div></div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const currentProjects = projects.slice((currentPage - 1) * projectsPerPage, currentPage * projectsPerPage);
  return <section id="portfolio" className="card shadow-lg border-0 mb-4">
    <div className="card-header bg-primary text-white py-3"><h2 className="h4 mb-0 fw-bold"><i className="bi bi-briefcase me-2" />Academic &amp; Projects</h2></div>
    <div className="card-body p-4"><p className="text-muted mb-4">Selected academic and personal projects.</p><div className="row">
      {currentProjects.map(project => { const cover = project.images[0]; return <div key={project.id} className="col-lg-4 col-md-6 mb-4"><article className="card h-100 shadow-sm">
        {cover ? <img src={cover.src} alt={cover.alt} className="card-img-top" style={{ height: 200, objectFit: 'cover' }} /> : <div className="bg-light text-muted d-flex flex-column align-items-center justify-content-center" style={{ height: 200 }}><i className="bi bi-images fs-2" /><span className="small">Project images coming soon</span></div>}
        <div className="card-body d-flex flex-column"><h3 className="h5 card-title fw-bold">{project.title}</h3><p className="card-text text-muted flex-grow-1">{project.description}</p><Link to={`/details/${project.id}`} className="btn btn-primary btn-sm">View Details</Link></div>
      </article></div>; })}
    </div>
    {totalPages > 1 && <nav aria-label="Project pages"><ul className="pagination justify-content-center mb-0">{Array.from({ length: totalPages }, (_, i) => <li className={`page-item ${currentPage === i + 1 ? 'active' : ''}`} key={i}><button className="page-link" onClick={() => setCurrentPage(i + 1)}>{i + 1}</button></li>)}</ul></nav>}
    </div>
  </section>;
};

export default Portfolio;
