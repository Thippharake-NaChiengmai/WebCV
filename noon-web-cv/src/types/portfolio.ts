export interface ProjectImage { src: string; alt: string; caption?: string; }
export interface ProjectDownload { label: string; url: string; icon: string; }
export interface Project { id: number; images: ProjectImage[]; title: string; description: string; technologies: string[]; features: string[]; challenges: string[]; results: string[]; category?: string; startDate?: string; endDate?: string; status?: ProjectStatus; githubUrl?: string; youtubeUrl?: string; websiteUrl?: string; webstoreUrl?: string; backOfficeUrl?: string; figmaUrl?: string; download?: ProjectDownload; liveUrl?: string; }
export interface ProjectSummary { id: number; images: ProjectImage[]; title: string; description: string; technologies: string[]; category?: string; }
export interface APIResponse<T> { data: T; status: 'success' | 'error'; message?: string; timestamp: string; }
export interface PaginationParams { page: number; limit: number; }
export interface PaginatedResponse<T> { data: T[]; pagination: { currentPage: number; totalPages: number; totalItems: number; itemsPerPage: number; }; status: 'success' | 'error'; message?: string; timestamp: string; }
export type ProjectCategory = 'web-development' | 'game-development' | 'ai-ml' | 'mobile-development' | 'image-processing' | 'other';
export type ProjectStatus = 'completed' | 'in-progress' | 'planned';
