const fallbackContactEmail = 'thippharake_na@cmu.ac.th';
const fallbackGithubUrl = 'https://github.com/quentinx27';

export const appConfig = {
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || fallbackContactEmail,
  githubUrl: import.meta.env.VITE_GITHUB_URL || fallbackGithubUrl,
  siteUrl: import.meta.env.VITE_SITE_URL || window.location.origin,
};
