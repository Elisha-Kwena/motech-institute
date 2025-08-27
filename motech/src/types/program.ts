// src/types/program.ts

// Define the structure for a single course
export type Course = {
  name: string;
  levels?: string[] | string;
  duration?: string[] | string;
  examBody?: string[] | string;
  fee?: string[] | string;
  totalFee?: string;
};

export type Program = {
  id: string;
  title: string;
  slug: string;
  description: string;
  banner: string; // Image URL or path
  stats: string;
  cta: string;
  link: string;
  category?: string; // Optional: e.g., "Undergraduate", "Graduate"
  duration?: string; // Optional: e.g., "4 years", "2 semesters"
  degreeType?: string; // Optional: e.g., "Bachelor", "Certificate"
  courses?: Course[];
};
