export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: '.NET & XR Developer',
    company: 'In The Pocket',
    location: 'Dok Noord, Ghent',
    period: '2025',
    points: [
      'Built C# back-end logic and a WebSocket system for real-time AI interaction.',
      'Built Web API integrations and fixed threading bugs in production.',
      'Performed code reviews and UI improvements via a GitLab workflow.',
      'Built front-end in TypeScript and Remix with a component-based architecture.',
      'Built an XR app for Apple VisionOS with Unity & PolySpatial; live-demoed on Vision Pro.',
      'Implemented object tracking with CreateML on a Polestar 2.',
      'Developed React Native and cross-platform components.',
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
