// Mock API service for Portfolio data
import { 
  Project, 
  ProjectSummary, 
  APIResponse, 
  PaginatedResponse, 
  PaginationParams,
  ProjectCategory 
} from '../types/portfolio';
import portfolioData from '../data/portfolioProjects.json';

// Simulate API delay for realistic behavior
const API_DELAY = 500; // milliseconds

// Helper function to simulate network delay
const delay = (ms: number): Promise<void> => 
  new Promise(resolve => setTimeout(resolve, ms));

// Helper function to create API response
const createResponse = <T>(data: T, message?: string): APIResponse<T> => ({
  data,
  status: 'success',
  message,
  timestamp: new Date().toISOString()
});

// Helper function to create paginated response
const createPaginatedResponse = <T>(
  data: T[], 
  pagination: PaginationParams,
  totalItems: number,
  message?: string
): PaginatedResponse<T> => {
  const totalPages = Math.ceil(totalItems / pagination.limit);
  
  return {
    data,
    pagination: {
      currentPage: pagination.page,
      totalPages,
      totalItems,
      itemsPerPage: pagination.limit
    },
    status: 'success',
    message,
    timestamp: new Date().toISOString()
  };
};

// Portfolio API Service Class
export class PortfolioAPI {
  private static projects: Project[] = portfolioData.projects as Project[];

  /**
   * Get all projects with optional pagination
   */
  static async getAllProjects(params?: PaginationParams): Promise<PaginatedResponse<Project>> {
    await delay(API_DELAY);
    
    try {
      const allProjects = this.projects;
      
      if (params) {
        const { page, limit } = params;
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedProjects = allProjects.slice(startIndex, endIndex);
        
        return createPaginatedResponse(
          paginatedProjects,
          params,
          allProjects.length,
          `Retrieved ${paginatedProjects.length} projects for page ${page}`
        );
      }
      
      return createPaginatedResponse(
        allProjects,
        { page: 1, limit: allProjects.length },
        allProjects.length,
        `Retrieved all ${allProjects.length} projects`
      );
    } catch (error) {
      throw new Error(`Failed to fetch projects: ${error}`);
    }
  }

  /**
   * Get project by ID
   */
  static async getProjectById(id: number): Promise<APIResponse<Project | null>> {
    await delay(API_DELAY);
    
    try {
      const project = this.projects.find(p => p.id === id);
      
      if (!project) {
        return {
          data: null,
          status: 'error',
          message: `Project with ID ${id} not found`,
          timestamp: new Date().toISOString()
        };
      }
      
      return createResponse(project, `Project ${project.title} retrieved successfully`);
    } catch (error) {
      throw new Error(`Failed to fetch project ${id}: ${error}`);
    }
  }

  /**
   * Get projects by category
   */
  static async getProjectsByCategory(category: ProjectCategory): Promise<APIResponse<Project[]>> {
    await delay(API_DELAY);
    
    try {
      const filteredProjects = this.projects.filter(p => p.category === category);
      
      return createResponse(
        filteredProjects,
        `Retrieved ${filteredProjects.length} projects in ${category} category`
      );
    } catch (error) {
      throw new Error(`Failed to fetch projects by category ${category}: ${error}`);
    }
  }

  /**
   * Get project summaries (lightweight version for listings)
   */
  static async getProjectSummaries(): Promise<APIResponse<ProjectSummary[]>> {
    await delay(API_DELAY);
    
    try {
      const summaries: ProjectSummary[] = this.projects.map(project => ({
        id: project.id,
        image: project.image,
        title: project.title,
        description: project.description,
        technologies: project.technologies,
        category: project.category
      }));
      
      return createResponse(summaries, `Retrieved ${summaries.length} project summaries`);
    } catch (error) {
      throw new Error(`Failed to fetch project summaries: ${error}`);
    }
  }

  /**
   * Search projects by title or description
   */
  static async searchProjects(query: string): Promise<APIResponse<Project[]>> {
    await delay(API_DELAY);
    
    try {
      const lowercaseQuery = query.toLowerCase();
      const matchingProjects = this.projects.filter(project => 
        project.title.toLowerCase().includes(lowercaseQuery) ||
        project.description.toLowerCase().includes(lowercaseQuery) ||
        project.technologies.some(tech => tech.toLowerCase().includes(lowercaseQuery))
      );
      
      return createResponse(
        matchingProjects,
        `Found ${matchingProjects.length} projects matching "${query}"`
      );
    } catch (error) {
      throw new Error(`Failed to search projects: ${error}`);
    }
  }

  /**
   * Get projects by technology
   */
  static async getProjectsByTechnology(technology: string): Promise<APIResponse<Project[]>> {
    await delay(API_DELAY);
    
    try {
      const matchingProjects = this.projects.filter(project =>
        project.technologies.some(tech => 
          tech.toLowerCase() === technology.toLowerCase()
        )
      );
      
      return createResponse(
        matchingProjects,
        `Found ${matchingProjects.length} projects using ${technology}`
      );
    } catch (error) {
      throw new Error(`Failed to fetch projects by technology ${technology}: ${error}`);
    }
  }

  /**
   * Get all unique technologies
   */
  static async getAllTechnologies(): Promise<APIResponse<string[]>> {
    await delay(API_DELAY);
    
    try {
      const allTechnologies = this.projects.reduce((acc: string[], project) => {
        project.technologies.forEach(tech => {
          if (!acc.includes(tech)) {
            acc.push(tech);
          }
        });
        return acc;
      }, []);
      
      return createResponse(
        allTechnologies.sort(),
        `Retrieved ${allTechnologies.length} unique technologies`
      );
    } catch (error) {
      throw new Error(`Failed to fetch technologies: ${error}`);
    }
  }

  /**
   * Get all project categories
   */
  static async getAllCategories(): Promise<APIResponse<ProjectCategory[]>> {
    await delay(API_DELAY);
    
    try {
      const categories = portfolioData.metadata.categories as ProjectCategory[];
      return createResponse(categories, `Retrieved ${categories.length} categories`);
    } catch (error) {
      throw new Error(`Failed to fetch categories: ${error}`);
    }
  }

  /**
   * Get related projects (excluding the current project)
   */
  static async getRelatedProjects(projectId: number, limit: number = 3): Promise<APIResponse<Project[]>> {
    await delay(API_DELAY);
    
    try {
      const currentProject = this.projects.find(p => p.id === projectId);
      if (!currentProject) {
        throw new Error(`Project with ID ${projectId} not found`);
      }
      
      // Find projects with similar technologies or category
      const relatedProjects = this.projects
        .filter(p => p.id !== projectId)
        .map(project => {
          let score = 0;
          
          // Same category gets higher score
          if (project.category === currentProject.category) {
            score += 3;
          }
          
          // Shared technologies get points
          const sharedTechs = project.technologies.filter(tech =>
            currentProject.technologies.includes(tech)
          );
          score += sharedTechs.length;
          
          return { project, score };
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map(item => item.project);
      
      return createResponse(
        relatedProjects,
        `Found ${relatedProjects.length} related projects`
      );
    } catch (error) {
      throw new Error(`Failed to fetch related projects: ${error}`);
    }
  }

  /**
   * Get portfolio statistics
   */
  static async getPortfolioStats(): Promise<APIResponse<{
    totalProjects: number;
    completedProjects: number;
    inProgressProjects: number;
    totalTechnologies: number;
    categoriesCount: Record<string, number>;
  }>> {
    await delay(API_DELAY);
    
    try {
      const stats = {
        totalProjects: this.projects.length,
        completedProjects: this.projects.filter(p => p.status === 'completed').length,
        inProgressProjects: this.projects.filter(p => p.status === 'in-progress').length,
        totalTechnologies: portfolioData.metadata.technologies.length,
        categoriesCount: this.projects.reduce((acc: Record<string, number>, project) => {
          const category = project.category || 'other';
          acc[category] = (acc[category] || 0) + 1;
          return acc;
        }, {})
      };
      
      return createResponse(stats, 'Portfolio statistics retrieved successfully');
    } catch (error) {
      throw new Error(`Failed to fetch portfolio statistics: ${error}`);
    }
  }
}

// Export default instance for convenience
export default PortfolioAPI;
