import OptimizedImage from './OptimizedImage';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import type { Project } from '../types/portfolio';
import PortfolioAPI from '../services/portfolioAPI';
import { getProjectCover } from '../utils/projectImages';

const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const requestedPage = Number(searchParams.get('page') || 1);
  const projectsPerPage = 3;

  useEffect(() => { PortfolioAPI.getAllProjects().then(response => setProjects(response.data)).catch(error => setError(error.message)).finally(() => setLoading(false)); }, []);

  if (loading) return <div role="status" className="card shadow-lg border-0 mb-4"><div className="card-body p-4 text-center"><div aria-hidden="true" className="spinner-border text-primary" /><p className="mt-3 text-muted mb-0">Loading projects…</p></div></div>;
  if (error) return <div role="alert" className="alert alert-danger">Unable to load projects. Please reload the page to try again. <span className="visually-hidden">{error}</span></div>;

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const currentPage = Number.isSafeInteger(requestedPage) ? Math.max(1, Math.min(requestedPage, totalPages || 1)) : 1;
  const pageSearch = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', String(page));
    return params.toString();
  };
  const currentProjects = projects.slice((currentPage - 1) * projectsPerPage, currentPage * projectsPerPage);
  return <section id="portfolio" className="card shadow-lg border-0 mb-4">
    <div className="card-header bg-primary text-white py-3"><h2 className="h4 mb-0 fw-bold"><i aria-hidden="true" className="bi bi-briefcase me-2" />Academic &amp; Personal Projects</h2></div>
    <div className="card-body p-4"><p className="text-muted mb-4">Selected academic and personal projects.</p><p className="small text-secondary" role="status">{projects.length ? `Showing ${(currentPage - 1) * projectsPerPage + 1}–${Math.min(currentPage * projectsPerPage, projects.length)} of ${projects.length} projects` : 'No projects available yet. Check back soon.'}</p><div className="row">
      {currentProjects.map(project => { const cover = getProjectCover(project.images); return <div key={project.id} className="col-lg-4 col-md-6 mb-4"><article className="card h-100 shadow-sm">
        {cover ? <OptimizedImage sizes="(min-width: 1200px) 25vw, (min-width: 768px) 38vw, 100vw" src={cover.src} alt={cover.alt} className="card-img-top portfolio-card-cover" loading="lazy" /> : <div className="bg-light text-muted d-flex flex-column align-items-center justify-content-center portfolio-card-placeholder"><i aria-hidden="true" className="bi bi-images fs-2" /><span className="small">Project images coming soon</span></div>}
        <div className="card-body d-flex flex-column"><h3 className="h5 card-title fw-bold">{project.title}</h3><p className="card-text text-muted flex-grow-1">{project.description}</p><Link to={`/details/${project.id}`} className="btn btn-primary btn-sm" aria-label={`View ${project.title} details`}>View Details</Link></div>
      </article></div>; })}
    </div>
    {totalPages > 1 && <nav aria-label="Project pages"><ul className="pagination justify-content-center mb-0">{Array.from({ length: totalPages }, (_, i) => <li className={`page-item ${currentPage === i + 1 ? 'active' : ''}`} key={i}><Link className="page-link" aria-label={`Project page ${i + 1}`} aria-current={currentPage === i + 1 ? 'page' : undefined} to={{ search: pageSearch(i + 1), hash: '#portfolio' }}>{i + 1}</Link></li>)}</ul></nav>}
    </div>
  </section>;
};

export default Portfolio;
