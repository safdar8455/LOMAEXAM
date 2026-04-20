export interface Question {
  id: number;
  lo: string;
  question: string;
  options: string[];
  answer: number; // 0-indexed
  explanation: string;
}

export interface Chapter {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}
