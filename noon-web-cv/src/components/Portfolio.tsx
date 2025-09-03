import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Project } from "../types/portfolio.ts";
import PortfolioAPI from "../services/portfolioAPI.ts";

const Portfolio: React.FC = () => {
  // State for projects and loading
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const projectsPerPage = 3;
  
  // Calculate pagination
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  // Fetch projects from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await PortfolioAPI.getAllProjects();
        
        if (response.status === 'success') {
          setProjects(response.data);
        } else {
          setError('Failed to load projects');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred while loading projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handlePageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = (): void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = (): void => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="card shadow-lg border-0 mb-4">
        <div className="card-header bg-primary text-white py-3">
          <h2 className="h4 mb-0 fw-bold">
            <i className="bi bi-briefcase me-2"></i>
            Portfolio Projects
          </h2>
        </div>
        <div className="card-body p-4 text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-muted">Loading portfolio projects...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="card shadow-lg border-0 mb-4">
        <div className="card-header bg-primary text-white py-3">
          <h2 className="h4 mb-0 fw-bold">
            <i className="bi bi-briefcase me-2"></i>
            Portfolio Projects
          </h2>
        </div>
        <div className="card-body p-4 text-center">
          <div className="alert alert-danger" role="alert">
            <i className="bi bi-exclamation-triangle me-2"></i>
            {error}
          </div>
          <button 
            className="btn btn-primary" 
            onClick={() => window.location.reload()}
          >
            <i className="bi bi-arrow-clockwise me-2"></i>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="card shadow-lg border-0 mb-4">
      <div className="card-header bg-primary text-white py-3">
        <h2 className="h4 mb-0 fw-bold">
          <i className="bi bi-briefcase me-2"></i>
          Portfolio Projects
        </h2>
      </div>
      <div className="card-body p-4">
        <div className="row">
          <div className="col-12">
            <p className="text-muted mb-4">
              Here are some of my featured projects showcasing various technologies and skills.
            </p>
            
            {/* Portfolio Grid - 3 columns */}
            <div className="row">
              {currentProjects.map((project, index) => (
                <div key={startIndex + index} className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100 hover-shadow" 
                       style={{ 
                         cursor: 'pointer', 
                         transition: 'transform 0.2s, box-shadow 0.2s',
                         border: '1px solid rgba(0,0,0,0.125)'
                       }}
                       onMouseEnter={(e) => {
                         e.currentTarget.style.transform = 'translateY(-5px)';
                         e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                       }}
                       onMouseLeave={(e) => {
                         e.currentTarget.style.transform = 'translateY(0)';
                         e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                       }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="card-img-top"
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title text-dark fw-bold">{project.title}</h5>
                      <p className="card-text text-muted flex-grow-1" 
                         style={{ 
                           fontSize: '0.9rem',
                           display: '-webkit-box',
                           WebkitLineClamp: 4,
                           WebkitBoxOrient: 'vertical',
                           overflow: 'hidden'
                         }}>
                        {project.description}
                      </p>
                      <div className="mt-auto d-flex gap-2">
                        <Link 
                          to={`/details/${project.id}`} 
                          className="btn btn-primary btn-sm flex-grow-1"
                        >
                          <i className="bi bi-eye me-1"></i>
                          View Details
                        </Link>
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-outline-secondary btn-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="bi bi-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="d-flex justify-content-center align-items-center mt-4">
                <nav aria-label="Portfolio pagination">
                  <ul className="pagination mb-0">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                      <button 
                        className="page-link" 
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        aria-label="Previous page"
                      >
                        <i className="bi bi-chevron-left"></i>
                      </button>
                    </li>
                    
                    {[...Array(totalPages)].map((_, index) => {
                      const pageNumber = index + 1;
                      return (
                        <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}>
                          <button 
                            className="page-link" 
                            onClick={() => handlePageChange(pageNumber)}
                          >
                            {pageNumber}
                          </button>
                        </li>
                      );
                    })}
                    
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                      <button 
                        className="page-link" 
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        aria-label="Next page"
                      >
                        <i className="bi bi-chevron-right"></i>
                      </button>
                    </li>
                  </ul>
                </nav>
                
                <div className="ms-3 text-muted small">
                  Page {currentPage} of {totalPages} • Showing {currentProjects.length} of {projects.length} projects
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;