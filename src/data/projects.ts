export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  year?: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  /** Shown as a small note on the card, e.g. for the finished XR showcase. */
  note?: string;
}

/** The flagship is rendered with its screenshots; kept separate for clarity. */
export const flagship: Project = {
  id: 'xr',
  title: 'XR Training & Assistance',
  role: '.NET & XR Developer · In The Pocket',
  year: '2025',
  description:
    'A proof-of-concept spatial-computing app for the Apple Vision Pro that overlays interactive hotspots and a real-time multimodal AI assistant onto real equipment — demoed on a Polestar 2 — enabling hands-free industrial training and troubleshooting.',
  tags: ['Unity', 'PolySpatial', 'VisionOS', 'C#', 'RealityKit Object Capture', 'Multimodal AI', 'Blender'],
  links: [
    {
      label: 'GitHub',
      href: 'https://github.com/Hugodb02/Hugodb02-XR-Training-Assistance-for-Apple-Vision-Pro',
    },
    { label: 'Demo & presentation', href: 'https://canva.link/9mtzwwxeh5b0pt2' },
  ],
  note: 'Built during my In The Pocket internship and presented as a finished showcase — it runs on Vision Pro hardware.',
};

export const featuredProjects: Project[] = [
  {
    id: 'tracker',
    title: 'Job Application Tracker',
    role: 'Solo full-stack build',
    description:
      'A full-stack job-tracking app with table and drag-and-drop Kanban views, an analytics dashboard (applications per week, pipeline breakdown, response rate), per-application notes, authentication and row-level security so each user only sees their own data.',
    tags: ['React 19', 'TypeScript', 'Vite', 'Tailwind', 'Supabase', 'Recharts', 'dnd-kit'],
    links: [{ label: 'GitHub', href: 'https://github.com/Hugodb02/job-application-tracker' }],
  },
  {
    id: 'todo',
    title: 'Mobile Todo App',
    role: 'School capstone · eindproject',
    description:
      'A cross-platform mobile to-do app with Firebase-backed data, persisted global state, form validation and multi-pattern navigation — the capstone project for the Mobile module.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'Redux Toolkit', 'React Query', 'Formik'],
    links: [{ label: 'GitHub', href: 'https://github.com/Hugodb02/todo-app' }],
  },
];

export const moreProjects: Project[] = [
  {
    id: 'habit',
    title: 'Habit Tracker',
    role: 'Mobile app',
    description:
      'A lightweight habit-tracking mobile app built with Expo Router and a performant list & animation stack.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Reanimated', 'FlashList'],
    links: [{ label: 'GitHub', href: 'https://github.com/Hugodb02/habit-tracker' }],
  },
];
