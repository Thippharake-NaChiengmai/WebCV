import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import Sidebar from '../components/layouts/Sidebar';
import { Project } from '../types/portfolio.ts';
import PortfolioAPI from '../services/portfolioAPI.ts';

const Details: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  
  // State management
  const [project, setProject] = useState<Project | null>(null);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch project data
  useEffect(() => {
    const fetchProjectData = async () => {
      if (!projectId) {
        setError('No project ID provided');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        const projectResponse = await PortfolioAPI.getProjectById(parseInt(projectId));
        
        if (projectResponse.status === 'success' && projectResponse.data) {
          setProject(projectResponse.data);
          
          // Fetch related projects
          const relatedResponse = await PortfolioAPI.getRelatedProjects(parseInt(projectId), 3);
          if (relatedResponse.status === 'success') {
            setRelatedProjects(relatedResponse.data);
          }
        } else {
          setError(projectResponse.message || 'Project not found');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load project details');
      } finally {
        setLoading(false);
      }
    };

    fetchProjectData();
  }, [projectId]);

  // Loading state
  if (loading) {
    return (
      <div className="min-vh-100 bg-light">
        <Navbar />
        <div className="row g-0">
          <Sidebar />
          <div className="col-12 col-md-9 p-4">
            <div className="container-fluid">
              <div className="text-center mt-5">
                <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3 text-muted">Loading project details...</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Error state
  if (error || !project) {
    return (
      <div className="min-vh-100 bg-light">
        <Navbar />
        <div className="row g-0">
          <Sidebar />
          <div className="col-12 col-md-9 p-4">
            <div className="container-fluid">
              <div className="text-center mt-5">
                <div className="alert alert-danger" role="alert">
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  {error || 'Project not found'}
                </div>
                <Link to="/activities" className="btn btn-primary">
                  <i className="bi bi-arrow-left me-2"></i>
                  Back to Activities
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }



  return (
    <div className="min-vh-100 bg-light">
      {/* Navigation */}
      <Navbar />

      <div className="row g-0">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="col-12 col-md-9 p-4">
          <div className="container-fluid">
            {/* Back Button */}
            <div className="mb-4">
              <Link to="/activities" className="btn btn-outline-primary">
                <i className="bi bi-arrow-left me-2"></i>
                Back to Activities
              </Link>
            </div>

            {/* Project Header */}
            <div className="card shadow-lg border-0 mb-4">
              <div className="row g-0">
                <div className="col-md-5">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="img-fluid rounded-start h-100"
                    style={{ objectFit: 'cover', minHeight: '300px' }}
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body p-4">
                    <h1 className="card-title text-primary fw-bold mb-3">{project.title}</h1>
                    <p className="card-text text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                      {project.description}
                    </p>
                    <div className="mb-4">
                      <h6 className="fw-bold text-secondary mb-2">Technologies Used:</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="badge bg-primary fs-6 px-3 py-2">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="d-flex gap-2">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <i className="bi bi-github me-2"></i>
                        View Source Code
                      </a>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary"
                      >
                        <i className="bi bi-box-arrow-up-right me-2"></i>
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="row">
              {/* Key Features */}
              <div className="col-md-6 mb-4">
                <div className="card shadow border-0 h-100">
                  <div className="card-header bg-success text-white">
                    <h5 className="mb-0">
                      <i className="bi bi-check-circle me-2"></i>
                      Key Features
                    </h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-unstyled">
                      {project.features.map((feature, index) => (
                        <li key={index} className="mb-3 d-flex">
                          <i className="bi bi-check-lg text-success me-2 mt-1"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="col-md-6 mb-4">
                <div className="card shadow border-0 h-100">
                  <div className="card-header bg-warning text-white">
                    <h5 className="mb-0">
                      <i className="bi bi-lightning me-2"></i>
                      Challenges & Solutions
                    </h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-unstyled">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="mb-3 d-flex">
                          <i className="bi bi-exclamation-triangle text-warning me-2 mt-1"></i>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Results & Impact */}
            <div className="card shadow border-0 mb-4">
              <div className="card-header bg-info text-white">
                <h5 className="mb-0">
                  <i className="bi bi-graph-up me-2"></i>
                  Results & Impact
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  {project.results.map((result, index) => (
                    <div key={index} className="col-md-4 mb-3">
                      <div className="d-flex">
                        <i className="bi bi-trophy text-info me-2 mt-1"></i>
                        <span>{result}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation to Other Projects */}
            <div className="card shadow border-0">
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0">
                  <i className="bi bi-collection me-2"></i>
                  Other Projects
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  {relatedProjects.map((otherProject) => (
                    <div key={otherProject.id} className="col-md-4 mb-3">
                      <Link to={`/details/${otherProject.id}`} className="text-decoration-none">
                        <div className="card h-100 hover-shadow" style={{ transition: 'transform 0.2s' }}>
                          <img 
                            src={otherProject.image} 
                            alt={otherProject.title}
                            className="card-img-top"
                            style={{ height: '150px', objectFit: 'cover' }}
                          />
                          <div className="card-body">
                            <h6 className="card-title text-dark">{otherProject.title}</h6>
                            <p className="card-text text-muted small">
                              {otherProject.description.substring(0, 100)}...
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Details;
