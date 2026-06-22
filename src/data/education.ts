export interface EducationEntry {
  program: string;
  school: string;
  note?: string;
  period: string;
}

export const education: EducationEntry[] = [
  {
    program: 'Graduate Degree in Programming',
    school: 'HoGent',
    note: 'High distinction',
    period: '2023 – 2025',
  },
  {
    program: 'Se-n-Se Integral Safety',
    school: 'IVV Sint Vincentius',
    period: '2020 – 2021',
  },
];
