export interface CacambaSize {
  id: string;
  volume: string;
  isPopular?: boolean;
  image: string;
  idealFor: string;
  examples: [string, string];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}
