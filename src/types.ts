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

export interface Course {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  chapters: Chapter[];
  simulationRounds: Question[][];
  tpgQuestions?: Question[]; // This was used for getting all TPG questions
  tpgChapters?: Chapter[];    // For specific TPG chapters if different from Bloom
  finalExam?: Question[];     // Bloom Level Final
  tpgFinalExam?: Question[];  // TPG Level Final
  masteryChallenge?: Question[]; // Simulation Level Mastery
}
