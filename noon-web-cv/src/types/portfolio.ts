// TypeScript interfaces for Portfolio data

export interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  results: string[];
  category?: string;
  startDate?: string;
  endDate?: string;
  status?: 'completed' | 'in-progress' | 'planned';
  githubUrl?: string;
  liveUrl?: string;
}

export interface ProjectSummary {
  id: number;
  image: string;
  title: string;
  description: string;
  technologies: string[];
  category?: string;
}

export interface APIResponse<T> {
  data: T;
  status: 'success' | 'error';
  message?: string;
  timestamp: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
  status: 'success' | 'error';
  message?: string;
  timestamp: string;
}

export type ProjectCategory = 'web-development' | 'game-development' | 'ai-ml' | 'image-processing' | 'other';

export type ProjectStatus = 'completed' | 'in-progress' | 'planned';
