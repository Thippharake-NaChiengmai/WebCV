import { useEffect } from 'react';

interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageLightboxProps {
  image: LightboxImage;
  onClose: () => void;
}

export default function ImageLightbox({ image, onClose }: ImageLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={`Zoomed image: ${image.alt}`} onClick={onClose}>
    <div className="image-lightbox__content" onClick={event => event.stopPropagation()}>
      <button type="button" className="image-lightbox__close" onClick={onClose} aria-label="Close image preview"><i className="bi bi-x-lg" /></button>
      <img src={image.src} alt={image.alt} />
      {image.caption && <p>{image.caption}</p>}
    </div>
  </div>;
}
