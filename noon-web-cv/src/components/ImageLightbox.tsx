import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import imageVariants from '../data/imageVariants.json';

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
  const dimensions = (imageVariants as Record<string, { width: number; height: number }>)[image.src];
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    const dialog = dialogRef.current;
    dialog?.showModal();
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, []);

  return createPortal(<dialog ref={dialogRef} className="image-lightbox" aria-label={`Zoomed image: ${image.alt}`} onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="image-lightbox__content">
      <button type="button" className="image-lightbox__close" onClick={onClose} aria-label="Close image preview"><i aria-hidden="true" className="bi bi-x-lg" /></button>
      <img src={image.src} alt={image.alt} width={dimensions?.width} height={dimensions?.height} decoding="async" />
      {image.caption && <p>{image.caption}</p>}
    </div>
  </dialog>, document.body);
}
