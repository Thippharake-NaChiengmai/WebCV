# Award images

Each award in `src/data/awards.ts` has an `images` array. Store images in `public/images/awards/<award-name>/` and add entries like:

```ts
images: [
  { src: '/images/awards/cursor-hackathon/certificate.jpg', alt: 'Cursor Hackathon certificate' },
  { src: '/images/awards/cursor-hackathon/team-photo.jpg', alt: 'Cursor Hackathon team photo', caption: 'Award ceremony' }
]
```

The award page will display each image as a selectable thumbnail.
