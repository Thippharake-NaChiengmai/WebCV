import { useEffect, useRef } from 'react';

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
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={`Zoomed image: ${image.alt}`} onClick={onClose}>
    <div className="image-lightbox__content" onClick={event => event.stopPropagation()}>
      <button ref={closeButtonRef} type="button" className="image-lightbox__close" onClick={onClose} aria-label="Close image preview"><i className="bi bi-x-lg" /></button>
      <img src={image.src} alt={image.alt} />
      {image.caption && <p>{image.caption}</p>}
    </div>
  </div>;
}
