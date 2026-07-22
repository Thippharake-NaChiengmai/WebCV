import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { Project } from '../types/portfolio';
import PortfolioAPI from '../services/portfolioAPI';

const Details = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);
  const [activeImage, setActiveImage] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => { if (!projectId) return; PortfolioAPI.getProjectById(Number(projectId)).then(response => { if (!response.data) throw new Error(response.message); setProject(response.data); setActiveImage(0); return PortfolioAPI.getRelatedProjects(Number(projectId)); }).then(response => setRelatedProjects(response.data)).catch(error => setError(error.message)); }, [projectId]);
  if (error) return <div className="alert alert-danger">{error}</div>;
  if (!project) return <div className="text-center py-5"><div className="spinner-border text-primary" /></div>;
  const selectedImage = project.images[activeImage];

  return <div className="container-fluid"><Link to="/activities" className="btn btn-outline-primary mb-4"><i className="bi bi-arrow-left me-2" />Back to Projects &amp; Awards</Link>
    <section className="card shadow-lg border-0 mb-4"><div className="row g-0"><div className="col-md-5 p-3">
      {selectedImage ? <><img src={selectedImage.src} alt={selectedImage.alt} className="img-fluid rounded w-100" style={{ minHeight: 300, maxHeight: 420, objectFit: 'cover' }} />{selectedImage.caption && <p className="small text-muted mt-2 mb-0">{selectedImage.caption}</p>}{project.images.length > 1 && <div className="d-flex flex-wrap gap-2 mt-3" aria-label="Project image gallery">{project.images.map((image, index) => <button className={`border rounded p-0 ${index === activeImage ? 'border-primary border-3' : 'border-light'}`} key={image.src} onClick={() => setActiveImage(index)} aria-label={`Show image ${index + 1}: ${image.alt}`}><img src={image.src} alt="" style={{ width: 72, height: 54, objectFit: 'cover' }} /></button>)}</div>}</> : <div className="bg-light text-muted rounded d-flex flex-column align-items-center justify-content-center" style={{ minHeight: 300 }}><i className="bi bi-images fs-1" /><span>Project images coming soon</span></div>}
    </div><div className="col-md-7"><div className="card-body p-4"><h1 className="h2 text-primary fw-bold mb-3">{project.title}</h1><p className="text-muted mb-4">{project.description}</p><h2 className="h6 fw-bold text-secondary">Technologies Used</h2><div className="d-flex flex-wrap gap-2">{project.technologies.map(tech => <span key={tech} className="badge bg-primary fs-6 px-3 py-2">{tech}</span>)}</div><div className="d-flex flex-wrap gap-2 mt-4">{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn project-link-github"><i className="bi bi-github me-2" />GitHub</a>}{project.youtubeUrl ? <a href={project.youtubeUrl} target="_blank" rel="noopener noreferrer" className="btn project-link-youtube"><i className="bi bi-youtube me-2" />YouTube</a> : <span className="btn project-link-youtube disabled" aria-disabled="true" title="YouTube link has not been added yet"><i className="bi bi-youtube me-2" />YouTube</span>}</div></div></div></div></section>
    <section className="card shadow border-0 mb-4"><div className="card-header bg-success text-white"><h2 className="h5 mb-0">Project Highlights</h2></div><div className="card-body"><ul className="mb-0">{project.features.map(feature => <li className="mb-2" key={feature}>{feature}</li>)}</ul></div></section>
    <section className="card shadow border-0"><div className="card-header bg-primary text-white"><h2 className="h5 mb-0">Other Projects</h2></div><div className="card-body"><div className="row">{relatedProjects.map(other => <div className="col-md-4 mb-3" key={other.id}><Link className="text-decoration-none" to={`/details/${other.id}`}><div className="card h-100">{other.images[0] ? <img src={other.images[0].src} alt={other.images[0].alt} className="card-img-top" style={{ height: 150, objectFit: 'cover' }} /> : <div className="bg-light text-muted d-flex align-items-center justify-content-center" style={{ height: 150 }}><i className="bi bi-images fs-3" /></div>}<div className="card-body"><h3 className="h6 text-dark">{other.title}</h3></div></div></Link></div>)}</div></div></section>
  </div>;
};

export default Details;
