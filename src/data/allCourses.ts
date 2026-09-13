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
import { glossary280Questions } from './loma280/chapter15';
import { tpgChapterQuestions } from './loma280/tpgChapterQuestions';
import { simulationRounds } from './loma280/simulationExams';
import { finalExamQuestions } from './loma280/finalExam';
import { tpgMaster100 } from './loma280/tpgMaster100';

// OTHER COURSES
import { chapter1Questions as loma290Chapter1 } from './loma290/chapter1';
import { chapter2Questions as loma290Chapter2 } from './loma290/chapter2';
import { chapter3Questions as loma290Chapter3 } from './loma290/chapter3';
import { chapter4Questions as loma290Chapter4 } from './loma290/chapter4';
import { chapter5Questions as loma290Chapter5 } from './loma290/chapter5';
import { chapter6Questions as loma290Chapter6 } from './loma290/chapter6';
import { chapter7Questions as loma290Chapter7 } from './loma290/chapter7';
import { chapter8Questions as loma290Chapter8 } from './loma290/chapter8';
import { chapter9Questions as loma290Chapter9 } from './loma290/chapter9';
import { chapter10Questions as loma290Chapter10 } from './loma290/chapter10';
import { chapter11Questions as loma290Chapter11 } from './loma290/chapter11';
import { chapter12Questions as loma290Chapter12 } from './loma290/chapter12';
import { chapter13Questions as loma290Chapter13 } from './loma290/chapter13';
import { chapter14Questions as loma290Chapter14 } from './loma290/chapter14';
import { glossary290Questions as loma290Glossary } from './loma290/glossary';

// LOMA 301

import {chapter1Questions as loma301Chapter1 } from './loma301/chapter1';
import {chapter2Questions as loma301Chapter2 } from './loma301/chapter2';
import {chapter3Questions as loma301Chapter3 } from './loma301/chapter3';
import {chapter4Questions as loma301Chapter4 } from './loma301/chapter4';
import {chapter5Questions as loma301Chapter5 } from './loma301/chapter5';
import {chapter6Questions as loma301Chapter6 } from './loma301/chapter6';
import {chapter7Questions as loma301Chapter7 } from './loma301/chapter7';
import {chapter8Questions as loma301Chapter8 } from './loma301/chapter8';
import {chapter9Questions as loma301Chapter9 } from './loma301/chapter9';
import {chapter10Questions as loma301Chapter10 } from './loma301/chapter10';
import {chapter11Questions as loma301Chapter11 } from './loma301/chapter11';
import {chapter12Questions as loma301Chapter12 } from './loma301/chapter12';
import { glossary301Questions as loma301Glossary } from './loma301/glossary';

import { businessLawQuestions, chapter1Questions as loma307Chapter1, chapter2Questions as loma307Chapter2, chapter3Questions as loma307Chapter3, chapter4Questions as loma307Chapter4, chapter5Questions as loma307Chapter5, chapter6Questions as loma307Chapter6, chapter7Questions as loma307Chapter7, chapter8Questions as loma307Chapter8, chapter9Questions as loma307Chapter9, chapter10Questions as loma307Chapter10, glossaryQuestions as loma307Glossary } from './loma307';


import { administrationQuestions } from './loma301';
import { marketingQuestions } from './loma311';
import { lifeInsuranceLawQuestions } from './loma320';
import { managementQuestions } from './loma335';
import { investingQuestions } from './loma357';
import { accountingQuestions } from './loma361';
import { riskManagementQuestions } from './loma371';


// LOMA 320

import { loma320Chapter1Questions } from './loma320/chapter1';
import { loma320Chapter2Questions } from './loma320/chapter2';
import { loma320Chapter3Questions } from './loma320/chapter3';
import { loma320Chapter4Questions } from './loma320/chapter4';
import { loma320Chapter5Questions } from './loma320/chapter5';
import { loma320Chapter6Questions } from './loma320/chapter6';
import { loma320Chapter7Questions } from './loma320/chapter7';
import { loma320Chapter8Questions } from './loma320/chapter8';
import { loma320Chapter9Questions } from './loma320/chapter9';
import { loma320Chapter10Questions } from './loma320/chapter10';
import { loma320GlossaryQuestions } from './loma320/glossary';

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
    { id: 15, title: "Chapter 15: Glossary Master", description: "Deep dive into 100+ key terms.", questions: glossary280Questions }
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
    description: 'LOMA 290 — Insurance Company Operations describes how life insurance companies operate in today’s global environment: how they are organized, how they are managed, and the roles of functional and support units in developing, distributing, issuing, and administering life insurance and annuity products. Learners who take this course will better understand how an individual job fits into the entire scope of the company as well as the importance of each employee’s contribution to overall organizational success.',
    chapters: [
      { id: 1, title: 'Chapter 1: Organization and Operations', description: 'Stakeholders, management levels, and organizational structures.', questions: loma290Chapter1 },
      { id: 2, title: 'Chapter 2: Corporate Governance, Ethics, and Control', description: 'Laws, directing activities, ethical conduct, and control mechanisms.', questions: loma290Chapter2 },
      { id: 3, title: 'Chapter 3: Legal and Compliance', description: 'Understand legal vs compliance functions, corporate features, entry strategies, litigation structures, and market audits.', questions: loma290Chapter3 },
      { id: 4, title: 'Chapter 4: Human Resources Management', description: 'Explore HR planning, international staffing structures, employee recruitment, pre-employment testing, and compliance guides.', questions: loma290Chapter4 },
      { id: 5, title: 'Chapter 5: Information and Technology', description: 'Describe IT organization, internal operations tech, web and mobile customer interfaces, databases, data analytics, and cybercrime defense.', questions: loma290Chapter5 },
      { id: 6, title: 'Chapter 6: Financial Management', description: 'Describe how insurers organize financial operations, strategies, risks, risk management through diversification/hedging/ERM, capital, cash flow, statements, ratios, and solvency monitoring tools.', questions: loma290Chapter6 },
      { id: 7, title: 'Chapter 7: Accounting, Treasury Operations, and Auditing', description: 'Understand segregation of duties, financial vs management accounting, standards (GAAP, SAP, IFRS), financial statements (Balance Sheet, Income Statement, Cash Flow, Owners Equity), assets, and internal controls.', questions: loma290Chapter7 },
      { id: 8, title: 'Chapter 8: Investment Management', description: 'Describe necessary elements in an insurer’s investment policy, risk-return trade-off, risk premium, diversification, types of investments (bonds, mortgages, stocks, real estate, derivatives, policy loans), bond characteristics/rating risk, active and passive investment management, and general versus separate accounts.', questions: loma290Chapter8 },
      { id: 9, title: 'Chapter 9: Marketing', description: 'Describe essential elements of a marketing plan, traditional marketing mix vs the Four Cs, personal selling/advertising/publicity promotional tools, branding/positioning, market segmentation and target marketing, types of target marketing strategies, internal/external marketing environments, and marketing control tools.', questions: loma290Chapter9 },
      { id: 10, title: 'Chapter 10: Product Development', description: 'Describe three product development strategies, the basic steps of the process, comprehensive business analysis variables, cross-functional responsibilities, financial computer models, policy filing, readability standards, Day 1/Day 2 functionalities, and performance monitoring reviews.', questions: loma290Chapter10 },
      { id: 11, title: 'Chapter 11: Product Distribution', description: 'Distinguish direct and intermediary distribution channels, describe sales support resources (screening, licensing, training, compensation), identify illegal market conduct (churning, twisting, rebating), and review factors shaping distribution decisions.', questions: loma290Chapter11 },
      { id: 12, title: 'Chapter 12: Underwriting', description: 'Define underwriting, explore individual and group underwriting procedures (using the numerical rating system), review critical supporting medical or financial reports, identify underwriting roles, and understand regulations such as FCRA, GLBA, and PIPEDA governing consumer privacy.', questions: loma290Chapter12 },
      { id: 13, title: 'Chapter 13: Claim and Annuity Benefit Administration', description: 'Describe the organization and goals of claim departments, identify key steps of the life insurance claim decision process, analyze material misrepresentation and policy exclusions, learn calculations for adjustments like age or sex misstatements, explore policy settlement options, and review annuity death benefits and payout variants.', questions: loma290Chapter13 },
      { id: 14, title: 'Chapter 14: Customer Service', description: 'Explain the role of customer service in Customer Experience Management (CEM), define work teams and contact centers, outline typical job roles, identify effective service characteristics and loyalty builders, analyze self-service and human-assisted technology (IVR, ACD, SBR), describe fulfillment, complaint, up-selling, and cross-selling workflows, compare individual vs group member services processes, and review qualitative/quantitative performance measures.', questions: loma290Chapter14 },
      { id: 15, title: 'Chapter 15: Glossary', description: 'Comprehensive 300 MCQ scenario-based review covering all terminology and definitions across company operations.', questions: loma290Glossary }

    ],
    simulationRounds: [loma290Chapter1, loma290Chapter2]
  },
  {
    id: 'loma301',
    shortTitle: 'LOMA 301',
    title: 'Insurance Administration',
    description: 'LOMA 301 provides a detailed discussion of the activities of insurance administration for individual and group life coverages, focusing on underwriting, reinsurance, claims, and customer service.',
    chapters: [
      { id: 1, title: 'Chapter 1: Insurance Administration and the Customer Experience', description: 'Comprehensive 100 MCQ review of the policy life cycle, supportive corporate operations, customer journeys, CEM challenges, and professional ethical obligations.', questions: loma301Chapter1 },
      { id: 2, title: 'Chapter 2: Considerations for Insurance Administration', description: 'Comprehensive 100 MCQ review of regulatory compliance, privacy, fraud, quality control, paperless processing, systems, cybersecurity, and data analytics.', questions: loma301Chapter2 },
      { id: 3, title: 'Chapter 3: The New Business Process and Underwriting Principles', description: 'Comprehensive 100 MCQ review of field underwriting, teleunderwriting, applications flow, risk assessment factors, risk classification parameters, job authorization levels, and automated or simplified efficiencies.', questions: loma301Chapter3 },
      { id: 4, title: 'Chapter 4: Individual Life Insurance: Assessing Mortality Risk', description: 'Comprehensive 100 MCQ review of applicant disclosures, medical files, attending vs examining physician reports, lab results, personal history interviews, credit records, BMI build metrics, and specialized lifestyle risk assessments.', questions: loma301Chapter4 },
      { id: 5, title: 'Chapter 5: Individual Life Insurance: Financial Underwriting and Risk Classification', description: 'Comprehensive 100 MCQ review of financial risk selection, lapse and speculation deterrence, STOLI/AML warning signs, premium affordability, numerical rating system, and charging substandard extra premiums.', questions: loma301Chapter5 },
      { id: 6, title: 'Chapter 6: Underwriting Specialized Individual Life Insurance Products', description: 'Comprehensive 100 MCQ review of joint and last survivor policies, juvenile, D2C sales, buy-sell funding, key-person multiples, ratios, replacements, and supplemental benefit riders.', questions: loma301Chapter6 },
      { id: 7, title: 'Chapter 7: Underwriting Group Life Insurance', description: 'Comprehensive 100 MCQ review of Request for Proposal (RFP) procedures, contributory vs noncontributory plans, group size and industry risk factor assessments, blended rating calculations, and late enrollee and renewal underwriting.', questions: loma301Chapter7 },
      { id: 8, title: 'Chapter 8: Reinsurance: Insurance for Insurers', description: 'Comprehensive 100 MCQ review of assumption vs. traditional indemnity reinsurance, financial capacity and surplus relief goals, automatic, facultative and fac-ob structures, proportional vs. nonproportional risk sharing, and in-force and termination administration.', questions: loma301Chapter8 },
      { id: 9, title: 'Chapter 9: Effective Customer Service', description: 'Comprehensive 100 MCQ review of customer service representative roles, work team types, organizational models, communication technologies, multichannel vs. omnichannel design, metrics analytics, and compliance or privacy rules.', questions: loma301Chapter9 },
      { id: 10, title: 'Chapter 10: Customer Service Practices', description: 'Comprehensive 100 MCQ review of routine vs. complex service requests, absolute vs. collateral assignments, dividend payout options, policy loan repayment structures, Net Cash Surrender Value math, group to individual conversion rules, policy reinstatements, and quantitative vs. qualitative performance metrics.', questions: loma301Chapter10 },
      { id: 11, title: 'Chapter 11: Overview of Claim Administration', description: 'Comprehensive 100 MCQ review of claim philosophy and daily practices, standard claim evaluation process, staffing hierarchies, job authorization thresholds, express processing parameters, auto-adjudication, unfair claim settlement laws, and market conduct audits.', questions: loma301Chapter11 },
      { id: 12, title: 'Chapter 12: Claim Administration Practices', description: 'Comprehensive 100 MCQ review of verifying coverage, Temporary Insurance Agreements (TIAs), proof of death certifications, disappearance elements, suicide/exclusion riders, change of health statements, assignee/payee priorities, simultaneous deaths, community property, calculations with misstatements, and claim denial practices.', questions: loma301Chapter12 },
      { id: 13, title: 'Glossary: Master Terminology Review', description: 'Comprehensive LOMA-aligned 300 MCQ review of all key insurance administration, underwriting, reinsurance, operations, and claims terminology from the master course glossary, applied through structured scenario-based assessments.', questions: loma301Glossary }
    
            ],
    simulationRounds: [administrationQuestions]
  },
  {
    id: 'loma307',
    shortTitle: 'LOMA 307',
    title: 'Business and Financial Concepts for Insurance Professionals',
    description: 'An Introduction to the Economy, financial markets, sectors, participants, indicators, and business cycles for insurance professionals.',
    chapters: [
      { 
        id: 1, 
        title: 'Chapter 1: An Introduction to the Economy', 
        description: 'Comprehensive 100 MCQ scenario-based review covering economic scarcity, economic sectors, markets, flow of funds, money roles', 
        questions: loma307Chapter1 
      },
      { 
        id: 2, 
        title: 'Chapter 2: The Role of Insurance Companies in the Economy', 
        description: 'Comprehensive 100 MCQ scenario-based review covering financial institutions (depository, contractual savings, investment)..', 
        questions: loma307Chapter2 
      },
      { 
        id: 3, 
        title: 'Chapter 3: Managing Solvency and Profitability', 
        description: 'Comprehensive 100 MCQ scenario-based review covering solvency vs profitability, 4 risk management techniques (avoiding, controlling, transferring, accepting).', 
        questions: loma307Chapter3 
      },
      { 
        id: 4, 
        title: 'Chapter 4: The Time Value of Money', 
        description: 'Comprehensive 100 MCQ scenario-based review covering time value of money, simple vs compound interest, nominal vs effective rates.', 
        questions: loma307Chapter4 
      },
      { 
        id: 5, 
        title: 'Chapter 5: Product Design and Development', 
        description: 'Comprehensive 100 MCQ scenario-based review covering the product mix hierarchy (class, line, form, item, width, depth, consistency).', 
        questions: loma307Chapter5 
      },
      { 
        id: 6, 
        title: 'Chapter 6: Achieving Operational Efficiency', 
        description: 'Comprehensive 100 MCQ scenario-based review covering insurance operations & cost accumulation (investment vs G&A, value-added vs support functions).', 
        questions: loma307Chapter6 
      },
      { 
        id: 7, 
        title: 'Chapter 7: Managing Information', 
        description: 'Comprehensive 100 MCQ scenario-based review covering information technology components & 3-part architecture (technical, application, data architecture).', 
        questions: loma307Chapter7 
      },
      { 
        id: 8, 
        title: 'Chapter 8: Analyzing Statistical Data', 
        description: 'Comprehensive 100 MCQ scenario-based review covering descriptive vs inferential statistics (facts vs inferences, populations vs samples), measures of central tendency (mean, median, mode calculations, strengths, outlier distortions, multimodal distributions), measures of dispersion.', 
        questions: loma307Chapter8 
      },
      { 
        id: 9, 
        title: 'Chapter 9: Presenting Data Visually', 
        description: 'Comprehensive 100 MCQ scenario-based review covering tables & data organization (descending vs ascending, chronological, alphabetical, cash value tables, pivot tables), mortality tables (CSO tables, death rates per 1,000 & percentages, living/dying cohorts, remaining life expectancy, reserve/pricing uses), grouped vs ungrouped data (precision vs high-level patterns, grouped frequency distributions), primary chart types (bar charts, trend lines, comparative side-by-side bar charts, component 100% stacked bar charts, histograms, pictographs).', 
        questions: loma307Chapter9 
      },
      { 
        id: 10, 
        title: 'Chapter 10: Financial Reports and Plans', 
        description: 'Comprehensive 100 MCQ scenario-based review covering financial statements (Income Statement/P&L, dynamic nature, premium/investment/fee revenues, contractual benefits & operating expenses, Net Income = Revenues - Expenses; Balance Sheet/financial position, static snapshot, Assets = Liabilities + Capital & Surplus, Own/Owe/Worth, contractual reserves as major liability, capital vs surplus, owners\' equity), statement linkages (transferring net income/loss to surplus roll-forward), Cash Flow Statement.', 
        questions: loma307Chapter10 
      },
      {
        id: 11,
        title: 'Glossary: Master Terminology & Definitions',
        description: 'Comprehensive 500 MCQ scenario-based review covering all terminology, definitions, objectives, and foundational concepts across the complete LOMA 307 curriculum with in-depth explanations.',
        questions: loma307Glossary
      }
    ],
    simulationRounds: [loma307Chapter1, loma307Chapter2, loma307Chapter3, loma307Chapter4, loma307Chapter5, loma307Chapter6, loma307Chapter7, loma307Chapter8, loma307Chapter9, loma307Chapter10, loma307Glossary]
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
    title: 'Insurance Marketing',
    description: 'LOMA 320 covers marketing principles and the functions of marketing as an integral aspect of the life and health insurance industry.',
    chapters: [
      { id: 1, title: 'Chapter 1: An Introduction to Marketing', description: 'Define marketing, utility, the Four Ps and Cs, and external macro, micro, and internal environments.', questions: loma320Chapter1Questions },
      { id: 2, title: 'Chapter 2: Creating Customer Value and Satisfaction', description: 'Stages of the purchase decision, Maslow\'s hierarchy of needs, LTV, and persistency rates.', questions: loma320Chapter2Questions },
      { id: 3, title: 'Chapter 3: Managing Information to Gain Customer Insights', description: 'Primary and secondary research, exploratory/descriptive/causal studies, probability sampling, data warehouse, and security challenges.', questions: loma320Chapter3Questions },
       { id: 4, title: 'Chapter 4: How Companies Manage Marketing', description: 'Basic management stages, SWOT & PEST strategic indicators, BCG cash-flow matrices, and performance audits.', questions: loma320Chapter4Questions },
     { id: 5, title: 'Chapter 5: Market Segmentation and Target Marketing', description: 'Define market segmentation and explain geographic, demographic, geodemographic, psychographic, behavioristic, and benefit targeting.', questions: loma320Chapter5Questions },
     { id: 6, title: 'Chapter 6: Basic Product Concepts', description: 'Describe goods vs services, consumer product classes, product mix properties, product life cycles, branding, positioning, and insurance product regulations.', questions: loma320Chapter6Questions },
     { id: 7, title: 'Chapter 7: Pricing Insurance Products', description: 'Explain factors affecting pricing decisions, elasticity of demand, pricing objectives, pricing strategies, specialized rate structures, and price review audits.', questions: loma320Chapter7Questions },

      { id: 8, title: 'Chapter 8: Marketing and the Customer Experience', description: 'Explore customer journeys, journeys mapping, customer experience management (CEM), IMC programs, broker-dealer and bank distribution channels, and omnichannel strategies.', questions: loma320Chapter8Questions },
       { id: 9, title: 'Chapter 9: Personal Selling', description: 'Define agency contracts and roles of sales agents, group representatives, and financial advisors. Understand licensing, the seven steps of personal selling, lead prospecting, suitability/fiduciary rules, replacement compliance, and qualitative/quantitative evaluations.', questions: loma320Chapter9Questions },
        { id: 10, title: 'Chapter 10: Marketing Communications', description: 'Understand marketing communication tools, goals, the communication process, media types/vehicles/scheduling, trade vs consumer sales promotion, advertising formats/costs (CPM), publicity benefits, pretesting/posttesting, and NAIC model disclosures.', questions: loma320Chapter10Questions },
{ id: 11, title: 'Glossary: Terminology & Definitions Practice', description: 'Comprehensive 300 MCQ scenario-based review covering legal, pricing, promotion, research, customer value, and distribution definitions.', questions: loma320GlossaryQuestions }
    

      
      
      
    ],
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
