import type { ProjectImage } from '../types/portfolio';

/** Returns valid, non-duplicate project images in their display order. */
export const getProjectImages = (images: ProjectImage[] = []): ProjectImage[] => {
  const seen = new Set<string>();
  return images.filter(image => {
    if (!image?.src || !image?.alt || seen.has(image.src)) return false;
    seen.add(image.src);
    return true;
  });
};

/** The first valid image is used as the project cover. */
export const getProjectCover = (images: ProjectImage[] = []): ProjectImage | undefined => getProjectImages(images)[0];
