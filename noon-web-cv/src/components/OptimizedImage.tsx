import type { ImgHTMLAttributes } from 'react';
import imageVariants from '../data/imageVariants.json';

type Variant = { src: string; width: number };
type ImageInfo = { width: number; height: number; variants: Variant[] };
const images: Record<string, ImageInfo> = imageVariants;

export default function OptimizedImage({ src, sizes, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const image = src ? images[src] : undefined;
  if (!image) return <img src={src} sizes={sizes} {...props} />;

  return <img
    width={image.width}
    height={image.height}
    decoding="async"
    {...props}
    src={image.variants[image.variants.length - 1].src}
    srcSet={image.variants.map(variant => `${variant.src} ${variant.width}w`).join(', ')}
    sizes={sizes || '100vw'}
  />;
}
