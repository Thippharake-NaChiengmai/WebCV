import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { Project } from '../types/portfolio';
import PortfolioAPI from '../services/portfolioAPI';
import { getProjectCover, getProjectImages } from '../utils/projectImages';
import ImageLightbox from '../components/ImageLightbox';

const Details = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);
  const [activeImage, setActiveImage] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string; caption?: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!projectId) return;
    let isCurrent = true;
    setError(null);
    setProject(null);
    PortfolioAPI.getProjectById(Number(projectId)).then(response => {
      if (!response.data) throw new Error(response.message);
      if (isCurrent) {
        setProject(response.data);
        setActiveImage(0);
      }
      return PortfolioAPI.getRelatedProjects(Number(projectId));
    }).then(response => { if (isCurrent) setRelatedProjects(response.data); }).catch(error => { if (isCurrent) setError(error.message); });
    return () => { isCurrent = false; };
  }, [projectId]);

  if (error) return <div className="alert alert-danger">{error}</div>;
  if (!project) return <div className="text-center py-5"><div className="spinner-border text-primary" /></div>;

  const projectImages = getProjectImages(project.images);
  const selectedImage = projectImages[activeImage];
  const hasActions = project.githubUrl || project.youtubeUrl || project.websiteUrl || project.webstoreUrl || project.backOfficeUrl || project.figmaUrl !== undefined || project.download;

  return <div className="container-fluid">
    <Link to="/activities" className="btn btn-outline-primary mb-4"><i className="bi bi-arrow-left me-2" />Back to Projects &amp; Awards</Link>
    <section className="card shadow-lg border-0 mb-4"><div className="row g-0"><div className="col-md-5 p-3">
      {selectedImage ? <><button type="button" className="image-zoom-trigger" onClick={() => setZoomedImage(selectedImage)} aria-label={`Zoom ${selectedImage.alt}`}><img src={selectedImage.src} alt={selectedImage.alt} className="img-fluid rounded w-100 project-cover" /><span><i className="bi bi-zoom-in me-1" />Click to zoom</span></button>{selectedImage.caption && <p className="small text-muted mt-2 mb-0">{selectedImage.caption}</p>}{projectImages.length > 1 && <div className="d-flex flex-wrap gap-2 mt-3" aria-label="Project image gallery">{projectImages.map((image, index) => <button type="button" className={`border rounded p-0 ${index === activeImage ? 'border-primary border-3' : 'border-light'}`} key={image.src} onClick={() => setActiveImage(index)} aria-label={`Show image ${index + 1}: ${image.alt}`}><img src={image.src} alt="" className="project-gallery-thumbnail" loading="lazy" /></button>)}</div>}</> : <div className="bg-light text-muted rounded d-flex flex-column align-items-center justify-content-center project-image-placeholder"><i className="bi bi-images fs-1" /><span>Project images coming soon</span></div>}
    </div><div className="col-md-7"><div className="card-body p-4"><h1 className="h2 text-primary fw-bold mb-3">{project.title}</h1><p className="text-muted mb-4">{project.description}</p><h2 className="h6 fw-bold text-secondary">Technologies Used</h2><div className="d-flex flex-wrap gap-2">{project.technologies.map(tech => <span key={tech} className="badge bg-primary fs-6 px-3 py-2">{tech}</span>)}</div>{hasActions && <div className="d-flex flex-wrap gap-2 mt-4">{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn project-link-github"><i className="bi bi-github me-2" />GitHub</a>}{project.websiteUrl && <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="btn project-link-website"><i className="bi bi-globe2 me-2" />Website</a>}{project.webstoreUrl && <a href={project.webstoreUrl} target="_blank" rel="noopener noreferrer" className="btn project-link-website"><i className="bi bi-bag me-2" />Webstore</a>}{project.backOfficeUrl && <a href={project.backOfficeUrl} target="_blank" rel="noopener noreferrer" className="btn project-link-website"><i className="bi bi-shield-lock me-2" />Back Office</a>}{project.youtubeUrl && <a href={project.youtubeUrl} target="_blank" rel="noopener noreferrer" className="btn project-link-youtube"><i className="bi bi-youtube me-2" />YouTube</a>}{project.figmaUrl !== undefined && (project.figmaUrl ? <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer" className="btn project-link-figma"><img src="/images/figma-logo.svg" alt="" className="figma-logo me-2" />Figma</a> : <span className="btn project-link-figma disabled" aria-disabled="true" title="Figma link has not been added yet"><img src="/images/figma-logo.svg" alt="" className="figma-logo me-2" />Figma</span>)}{project.download && (project.download.url ? <a href={project.download.url} className="btn project-link-download" download><i className={`bi ${project.download.icon} me-2`} />{project.download.label}</a> : <span className="btn project-link-download disabled" aria-disabled="true" title={`${project.download.label} file has not been added yet`}><i className={`bi ${project.download.icon} me-2`} />{project.download.label}</span>)}</div>}</div></div></div></section>
    <section className="card shadow border-0 mb-4"><div className="card-header bg-success text-white"><h2 className="h5 mb-0">Project Highlights</h2></div><div className="card-body"><ul className="mb-0">{project.features.map(feature => <li className="mb-2" key={feature}>{feature}</li>)}</ul></div></section>
    <section className="card shadow border-0"><div className="card-header bg-primary text-white"><h2 className="h5 mb-0">Other Projects</h2></div><div className="card-body"><div className="row">{relatedProjects.map(other => { const cover = getProjectCover(other.images); return <div className="col-md-4 mb-3" key={other.id}><Link className="text-decoration-none" to={`/details/${other.id}`}><div className="card h-100">{cover ? <img src={cover.src} alt={cover.alt} className="card-img-top related-project-cover" loading="lazy" /> : <div className="bg-light text-muted d-flex align-items-center justify-content-center project-card-cover"><i className="bi bi-images fs-3" /></div>}<div className="card-body"><h3 className="h6 text-dark">{other.title}</h3></div></div></Link></div>; })}</div></div></section>
    {zoomedImage && <ImageLightbox image={zoomedImage} onClose={() => setZoomedImage(null)} />}
  </div>;
};

export default Details;
