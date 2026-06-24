export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Full Stack Developer (.NET / TypeScript) & XR',
    company: 'In The Pocket',
    location: 'Dok Noord, Ghent',
    period: '2025',
    points: [
      'Built front-end features for the internal ITP Profile Tool with React, TypeScript and Remix, in a component-based architecture.',
      'Built Web API integrations and fixed threading bugs in production.',
      'Built C# back-end logic and a WebSocket system for real-time AI interaction.',
      'Performed code reviews and UI improvements via a GitLab workflow.',
      'Developed React Native and cross-platform components.',
      'Built an XR app for Apple VisionOS with Unity & PolySpatial; live-demoed on Vision Pro.',
      'Implemented object tracking with CreateML on a Polestar 2.',
    ],
  },
  {
    role: 'Order Picker Outbound',
    company: 'Volvo Logistics',
    location: 'Oostakker',
    period: '2021 – 2023',
    points: ['Picking and dispatching orders; managing goods flows and warehouse processes.'],
  },
];
