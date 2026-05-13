import { Question } from '../../types';

export const administrationQuestions: Question[] = [
  {
    id: 1,
    lo: "Understand policy administration systems.",
    question: "Which system is the 'heart' of life insurance operations, maintaining the master record of all active policies?",
    options: ["CRM System", "Policy Administration System (PAS)", "General Ledger", "Workflow Engine"],
    answer: 1,
    explanation: "The PAS is the primary database for policy records, values, and status."
  },
  {
    id: 2,
    lo: "Compliance in administration.",
    question: "The process of ensuring all administrative actions follow state and federal laws is called:",
    options: ["Underwriting", "Marketing", "Compliance", "Auditing"],
    answer: 2,
    explanation: "Compliance ensures adherence to regulations and internal standards."
  }
];
