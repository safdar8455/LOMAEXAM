import { Course } from '../types';

// LOMA 280
import { chapter1Questions } from './loma280/chapter1';
import { chapter2Questions } from './loma280/chapter2';
import { chapter3Questions } from './loma280/chapter3';
import { chapter4Questions } from './loma280/chapter4';
import { chapter5Questions } from './loma280/chapter5';
import { chapter6Questions } from './loma280/chapter6';
import { chapter7Questions } from './loma280/chapter7';
import { chapter8Questions } from './loma280/chapter8';
import { chapter9Questions } from './loma280/chapter9';
import { chapter10Questions } from './loma280/chapter10';
import { chapter11Questions } from './loma280/chapter11';
import { chapter12Questions } from './loma280/chapter12';
import { chapter13Questions } from './loma280/chapter13';
import { chapter14Questions } from './loma280/chapter14';
import { glossaryQuestions } from './loma280/chapter15';
import { tpgChapterQuestions } from './loma280/tpgChapterQuestions';
import { simulationRounds } from './loma280/simulationExams';
import { finalExamQuestions } from './loma280/finalExam';
import { tpgMaster100 } from './loma280/tpgMaster100';

// OTHER COURSES
import { chapter1Questions as loma290Chapter1 } from './loma290/chapter1';
import { chapter2Questions as loma290Chapter2 } from './loma290/chapter2';
import { administrationQuestions } from './loma301';
import { businessLawQuestions } from './loma307';
import { marketingQuestions } from './loma311';
import { lifeInsuranceLawQuestions } from './loma320';
import { managementQuestions } from './loma335';
import { investingQuestions } from './loma357';
import { accountingQuestions } from './loma361';
import { riskManagementQuestions } from './loma371';

export const loma280: Course = {
  id: 'loma280',
  shortTitle: 'LOMA 280',
  title: 'Principles of Insurance',
  description: 'Life and health insurance, annuities, and the insurance industry.',
  chapters: [
    { id: 1, title: "Chapter 1: Risk and Insurance", description: "Natures of risk, insurance, and the industry.", questions: chapter1Questions },
    { id: 2, title: "Chapter 2: Financial Services Industry", description: "Market structure and financial institutions.", questions: chapter2Questions },
    { id: 3, title: "Chapter 3: Life Insurance Contracts", description: "Legal basis and contract formation.", questions: chapter3Questions },
    { id: 4, title: "Chapter 4: Principles of Pricing", description: "Premium components and reserve systems.", questions: chapter4Questions },
    { id: 5, title: "Chapter 5: Term Life Insurance", description: "Temporary protection products.", questions: chapter5Questions },
    { id: 6, title: "Chapter 6: Permanent Life Insurance", description: "Cash value and lifetime coverage.", questions: chapter6Questions },
    { id: 7, title: "Chapter 7: Supplemental Benefits", description: "Riders and added value options.", questions: chapter7Questions },
    { id: 8, title: "Chapter 8: Policy Provisions", description: "Standard clauses and policyowner rights.", questions: chapter8Questions },
    { id: 9, title: "Chapter 9: The Beneficiary", description: "Rights, designations, and settlement options.", questions: chapter9Questions },
    { id: 10, title: "Chapter 10: Annuities", description: "Retirement and income products.", questions: chapter10Questions },
    { id: 11, title: "Chapter 11: Medical Expense Insurance", description: "Healthcare funding and coverage.", questions: chapter11Questions },
    { id: 12, title: "Chapter 12: Underwriting", description: "Risk selection and classification.", questions: chapter12Questions },
    { id: 13, title: "Chapter 13: Claim Administration", description: "Settlement process and ethical standards.", questions: chapter13Questions },
    { id: 14, title: "Chapter 14: Ethics & Standards", description: "Professional conduct in insurance.", questions: chapter14Questions },
    { id: 15, title: "Chapter 15: Glossary Master", description: "Deep dive into 100+ key terms.", questions: glossaryQuestions }
  ],
  simulationRounds: simulationRounds,
  tpgQuestions: tpgChapterQuestions.flatMap(c => c.questions),
  tpgChapters: tpgChapterQuestions.map(c => ({ id: c.id, title: c.title, description: `Official TPG review for ${c.title}`, questions: c.questions })),
  finalExam: finalExamQuestions,
  tpgFinalExam: finalExamQuestions, // Reusing bloom final as TPG final placeholder or if they are the same
  masteryChallenge: tpgMaster100
};

export const COURSES: Course[] = [
  loma280,
  {
    id: 'loma290',
    shortTitle: 'LOMA 290',
    title: 'Insurance Company Operations',
    description: 'Operational excellence and organizational structure in the global insurance landscape.',
    chapters: [
      { id: 1, title: 'Chapter 1: Organization and Operations', description: 'Stakeholders, management levels, and organizational structures.', questions: loma290Chapter1 },
      { id: 2, title: 'Chapter 2: Corporate Governance, Ethics, and Control', description: 'Laws, directing activities, ethical conduct, and control mechanisms.', questions: loma290Chapter2 }
    ],
    simulationRounds: [loma290Chapter1, loma290Chapter2]
  },
  {
    id: 'loma301',
    shortTitle: 'LOMA 301',
    title: 'Insurance Administration',
    description: 'Deep dive into policy life-cycle management and regulatory compliance.',
    chapters: [{ id: 1, title: 'Policy Systems', description: 'Modern administration frameworks.', questions: administrationQuestions }],
    simulationRounds: [administrationQuestions]
  },
  {
    id: 'loma307',
    shortTitle: 'LOMA 307',
    title: 'Business Law for Insurance',
    description: 'Foundations of agency, contract law, and fiduciary responsibilities.',
    chapters: [{ id: 1, title: 'Agency Law', description: 'Legal relationship between insurers and representatives.', questions: businessLawQuestions }],
    simulationRounds: [businessLawQuestions]
  },
  {
    id: 'loma311',
    shortTitle: 'LOMA 311',
    title: 'Financial Services Marketing',
    description: 'Strategic marketing to reach global customers in financial sectors.',
    chapters: [{ id: 1, title: 'Marketing Mix', description: 'The 4 Ps of insurance product distribution.', questions: marketingQuestions }],
    simulationRounds: [marketingQuestions]
  },
  {
    id: 'loma320',
    shortTitle: 'LOMA 320',
    title: 'Life Insurance Law',
    description: 'Case law and statutory requirements for life insurance contracts.',
    chapters: [{ id: 1, title: 'Contract Provisions', description: 'Core legal clauses and incontestability.', questions: lifeInsuranceLawQuestions }],
    simulationRounds: [lifeInsuranceLawQuestions]
  },
  {
    id: 'loma335',
    shortTitle: 'LOMA 335',
    title: 'Operational Management',
    description: 'Leading teams and managing performance in financial institutions.',
    chapters: [{ id: 1, title: 'Strategic Analysis', description: 'SWOT and managerial planning.', questions: managementQuestions }],
    simulationRounds: [managementQuestions]
  },
  {
    id: 'loma357',
    shortTitle: 'LOMA 357',
    title: 'Institutional Investing',
    description: 'Portfolio management and asset allocation for institutional wealth.',
    chapters: [{ id: 1, title: 'Asset Diversification', description: 'Risk mitigation through strategic investing.', questions: investingQuestions }],
    simulationRounds: [investingQuestions]
  },
  {
    id: 'loma361',
    shortTitle: 'LOMA 361',
    title: 'Accounting & Reporting',
    description: 'Financial reporting standards and statutory solvency monitoring.',
    chapters: [{ id: 1, title: 'SAP Framework', description: 'Principles of regulatory accounting.', questions: accountingQuestions }],
    simulationRounds: [accountingQuestions]
  },
  {
    id: 'loma371',
    shortTitle: 'LOMA 371',
    title: 'Risk Management & Capital',
    description: 'Enterprise-wide risk frameworks and capital adequacy.',
    chapters: [{ id: 1, title: 'ERM Integration', description: 'Holistic risk management across silos.', questions: riskManagementQuestions }],
    simulationRounds: [riskManagementQuestions]
  }
];
