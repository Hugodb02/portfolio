export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Core',
    items: ['C#', '.NET / ASP.NET', 'Entity Framework', 'Web API', 'TypeScript', 'React Native', 'Remix'],
  },
  { label: 'Frontend', items: ['JavaScript', 'HTML & CSS', 'Tailwind'] },
  { label: 'Database', items: ['MySQL', 'Firebase', 'Supabase'] },
  { label: 'Tools & DevOps', items: ['Git', 'GitLab', 'Docker', 'Jira', 'Confluence'] },
  { label: 'XR & other', items: ['Unity XR', 'PolySpatial', 'VisionOS', 'CreateML', 'Blender'] },
];

export const softSkills = [
  'Analytical & solution-oriented',
  'Eager to learn & proactive',
  'Strong communicator',
  'Sense of responsibility',
  'Team player',
];

export interface Language {
  name: string;
  level: string;
}

export const languages: Language[] = [
  { name: 'Dutch', level: 'Native' },
  { name: 'English', level: 'Professional' },
  { name: 'French', level: 'Basic' },
];
