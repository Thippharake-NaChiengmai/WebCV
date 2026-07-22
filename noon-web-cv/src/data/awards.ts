export interface AwardImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Award {
  title: string;
  date: string;
  details: string[];
  images: AwardImage[];
}

export const awards: Award[] = [
  {
    title: '1st Prize — Cursor Hackathon Chiang Mai',
    date: 'December 2025',
    details: [
      'Won 1st Place (Convex Track) and a $500 prize at the first-ever Cursor AI Hackathon in Chiang Mai for technical excellence.',
      'Developed a property management solution leveraging the Convex database and AI-assisted coding techniques.'
    ],
    images: [
      {
        src: '/images/awards/Cursor-Hackathon-Chiang-Mai-2025/img1.jpg',
        alt: 'Cursor Hackathon Chiang Mai 2025 photo 1'
      },
      {
        src: '/images/awards/Cursor-Hackathon-Chiang-Mai-2025/img2.JPG',
        alt: 'Cursor Hackathon Chiang Mai 2025 photo 2'
      },
      {
        src: '/images/awards/Cursor-Hackathon-Chiang-Mai-2025/img3.jpg',
        alt: 'Cursor Hackathon Chiang Mai 2025 photo 3'
      },
      {
        src: '/images/awards/Cursor-Hackathon-Chiang-Mai-2025/img4.JPG',
        alt: 'Cursor Hackathon Chiang Mai 2025 photo 4'
      },
      {
        src: '/images/awards/Cursor-Hackathon-Chiang-Mai-2025/img5.jpg',
        alt: 'Cursor Hackathon Chiang Mai 2025 photo 5'
      }
    ]
  }
];
