import { Question } from '../../types';

export const chapter1Questions: Question[] = [
  // Objective 1A: Stakeholder groups
  {
    id: 1,
    lo: "principle",
    question: "A party that has an interest in or a reason to concern itself with how an insurance company conducts its business is known as a:",
    options: ["Competitor", "Stakeholder", "Reinsurer", "Policyowner"],
    answer: 1,
    explanation: "A stakeholder (or constituent) is any party with an interest in the company's business conduct, ranging from owners to regulators."
  },
  {
    id: 2,
    lo: "principle",
    question: "Scenario: The Forbright Financial Company is owned by individuals who have purchased shares of the company's stock. Periodically, the board of directors distributes a portion of excess profits to these individuals. These payments are called:",
    options: ["Policy dividends", "Stockholder dividends", "Premium refunds", "Interest credits"],
    answer: 1,
    explanation: "Stockholders receive dividends as a share of the company's excess profits."
  },
  {
    id: 3,
    lo: "principle",
    question: "Unlike stock insurance companies, mutual insurance companies are owned by their:",
    options: ["Board of Directors", "Stockholders", "Policyowners", "Bondholders"],
    answer: 2,
    explanation: "Mutual insurance companies are owned by the policyowners who have purchased policies from the company."
  },
  {
    id: 4,
    lo: "principle",
    question: "Scenario: The Unity Circle is a nonprofit organization that provides social and insurance benefits to its members. Members may periodically receive premium refunds. This entity is most likely a:",
    options: ["Stock insurer", "Mutual insurer", "Fraternal benefit society", "Holding company"],
    answer: 2,
    explanation: "Fraternal benefit societies are nonprofit organizations formed for social and insurance benefits for their members."
  },
  {
    id: 5,
    lo: "principle",
    question: "In the context of the insurance industry, which of the following groups are considered 'customers' of an insurer?",
    options: ["Only policyowners", "Policyowners, insureds, and beneficiaries", "Only regulators and rating agencies", "Only employees"],
    answer: 1,
    explanation: "Customers include policyowners, insureds, beneficiaries, applicants, and even financial professionals who advise them."
  },
  {
    id: 6,
    lo: "principle",
    question: "Scenario: Sarah is a licensed independent agent who advises clients on which insurance products best meet their needs. From the perspective of the insurance company, Sarah is considered a:",
    options: ["Regulator", "Support function", "Customer", "Sub-contractor"],
    answer: 2,
    explanation: "Financial professionals are considered customers of an insurer because they advise buyers and expect quality service to serve their clients."
  },
  {
    id: 7,
    lo: "principle",
    question: "Most financial professionals receive the majority of their compensation for selling insurance products in the form of:",
    options: ["Salaries", "Bonuses", "Commissions", "Dividends"],
    answer: 2,
    explanation: "A commission is a percentage of the premiums the customer pays for an insurance policy."
  },

  // Objective 1B: Solvency vs Market Conduct Laws
  {
    id: 8,
    lo: "principle",
    question: "Regulations that focus on an insurance company's ability to pay its debts, contractual obligations, and operating expenses on time are known as:",
    options: ["Market conduct laws", "Solvency laws", "Employment laws", "Taxation laws"],
    answer: 1,
    explanation: "Solvency laws (prudential regulation) ensure that insurance companies remain financially capable of meeting their obligations."
  },
  {
    id: 9,
    lo: "principle",
    question: "Scenario: A regulator is reviewing the sales practices and claim administration procedures of a life insurer to ensure they are operating fairly. This review falls under:",
    options: ["Solvency regulation", "Market conduct regulation", "Taxation regulation", "Investment regulation"],
    answer: 1,
    explanation: "Market conduct laws (marketplace regulation) ensure that companies conduct nonfinancial operations fairly and ethically."
  },

  // Rating Agencies
  {
    id: 10,
    lo: "principle",
    question: "Which of the following describes a rating agency?",
    options: ["A government body that sets insurance laws", "A private organization that evaluates an insurer's financial condition", "An internal department that audits company expenses", "A trade organization for financial professionals"],
    answer: 1,
    explanation: "Rating agencies (like A.M. Best or S&P) are private, independent organizations that rank insurers on financial stability."
  },

  // Reinsurers
  {
    id: 11,
    lo: "principle",
    question: "Scenario: Global Life transfers a portion of its death benefit risk to Secure Re to safeguard its financial stability. Global Life is known in this transaction as the:",
    options: ["Reinsurer", "Assuming company", "Direct writer", "Subsidiary"],
    answer: 2,
    explanation: "The company that transfers the risk is the direct writer (or ceding company); the company assuming it is the reinsurer."
  },

  // Balancing Stakeholders
  {
    id: 12,
    lo: "principle",
    question: "Scenario: Apex Life has excess profits. Owners want a large dividend, while employees want a pay raise. The responsibility for identifying and prioritizing these conflicting interests lies with:",
    options: ["The Customers", "Management", "Regulators", "The Reinsurer"],
    answer: 1,
    explanation: "Management is responsible for identifying, safeguarding, and prioritizing the interests of various stakeholder groups."
  },

  // Objective 1C: Levels of management & 4 functions
  {
    id: 13,
    lo: "principle",
    question: "Which group of people is elected by the owners of a company to set broad policies and appoint the CEO?",
    options: ["Senior-level managers", "Board of directors", "Middle-level managers", "Department supervisors"],
    answer: 1,
    explanation: "The board of directors is the top level of management, elected by owners to oversee the company."
  },
  {
    id: 14,
    lo: "principle",
    question: "Scenario: Mr. Chen serves on the board of directors of Zenith Life and also holds the position of Chief Financial Officer (CFO) within the company. Mr. Chen is an:",
    options: ["Outside director", "Inside director", "Independent director", "Ad hoc director"],
    answer: 1,
    explanation: "Inside directors hold positions within the company in addition to their board seats."
  },
  {
    id: 15,
    lo: "principle",
    question: "The most senior member of management, often also serving as the company president, is the:",
    options: ["CFO", "COO", "CEO", "CIO"],
    answer: 2,
    explanation: "The Chief Executive Officer (CEO) is the most senior manager and is entrusted with broad authority by the board."
  },
  {
    id: 16,
    lo: "principle",
    question: "Scenario: Maria is an expert in claim administration and manages the Claim Department. She reports to a Vice President. Maria is a:",
    options: ["First-level manager", "Middle-level manager", "Senior-level manager", "Inside director"],
    answer: 1,
    explanation: "Middle-level managers are typically functional experts in charge of smaller units like departments."
  },
  {
    id: 17,
    lo: "principle",
    question: "Management activities such as leading, influencing, and motivating employees are part of the management function called:",
    options: ["Planning", "Organizing", "Directing", "Controlling"],
    answer: 2,
    explanation: "Directing involves leading and motivating; Organizing involves coordinating resources; Planning sets goals; Controlling monitors performance."
  },

  // Objective 1D: Organizational Concepts
  {
    id: 18,
    lo: "principle",
    question: "An employee's right to make decisions, take action, and direct others is known as:",
    options: ["Responsibility", "Authority", "Accountability", "Delegation"],
    answer: 1,
    explanation: "Authority is the right to decide or act; Responsibility is the duty to perform the task."
  },
  {
    id: 19,
    lo: "principle",
    question: "The process of assigning authority and responsibility to another employee for completing a specific task is:",
    options: ["Centralization", "Delegation", "Departmentalization", "Supervision"],
    answer: 1,
    explanation: "Delegation allows managers to assign tasks and the authority to complete them to others."
  },
  {
    id: 20,
    lo: "principle",
    question: "In a centralized organization, top management:",
    options: ["Shares decision-making authority with lower levels", "Retains most of the decision-making authority", "Does not create any strategic plans", "Delegates most policy decisions to supervisors"],
    answer: 1,
    explanation: "Centralization involves retaining authority at the top; Decentralization shares it."
  },

  // Objective 1E: Functional Areas (Line vs Support)
  {
    id: 21,
    lo: "principle",
    question: "Which of the following is considered a 'line function' in an insurance company?",
    options: ["Human Resources", "Underwriting", "Legal", "Accounting"],
    answer: 1,
    explanation: "Line functions directly affect the production or administration of products. Examples: Marketing, Underwriting, Claim Administration."
  },
  {
    id: 22,
    lo: "principle",
    question: "Functional areas that provide services like Actuarial, Investments, or Legal are known as:",
    options: ["Line functions", "Support (Staff) functions", "Profit centers", "Strategic business units"],
    answer: 1,
    explanation: "Support functions provide assistance to line functions or other support units."
  },

  // Objective 1F: Traditional Organization Ways
  {
    id: 23,
    lo: "principle",
    question: "When an insurer divides its operations according to the work each division performs (e.g., separate units for Accounting and Marketing that serve all products), it is organized by:",
    options: ["Product", "Function", "Territory", "Customer"],
    answer: 1,
    explanation: "Functional organization groups divisions by the type of work performed."
  },
  {
    id: 24,
    lo: "principle",
    question: "Scenario: Reliance Life has three divisions: Individual Life, Group Life, and Individual Annuities. Each division has its own marketing and actuarial teams. This company is organized by:",
    options: ["Function", "Product", "Distribution Channel", "Market Type"],
    answer: 1,
    explanation: "Product-based organization distributes work according to lines of insurance products."
  },

  // Objective 1G: Profit Center vs SBU
  {
    id: 25,
    lo: "principle",
    question: "A line of business that is evaluated on its profitability and is responsible for its own revenues and expenses is a:",
    options: ["Support function", "Profit center", "Holding company", "Centralized unit"],
    answer: 1,
    explanation: "Profit centers are independent business lines evaluated on their financial performance."
  },
  {
    id: 26,
    lo: "principle",
    question: "An organizational unit that acts like an independent business, with its own set of customers, competitors, and budget, is most specifically called a:",
    options: ["Line function", "Strategic Business Unit (SBU)", "Standing committee", "Ad hoc committee"],
    answer: 1,
    explanation: "SBUs are highly autonomous units within a large corporation that act as independent businesses."
  },

  // Objective 1H: Committees
  {
    id: 27,
    lo: "principle",
    question: "A permanent committee used by executives as a source of continuing advice is a:",
    options: ["Ad hoc committee", "Project team", "Standing committee", "Task force"],
    answer: 2,
    explanation: "Standing committees are permanent; Ad hoc (project teams/tasks forces) are temporary."
  },
  {
    id: 28,
    lo: "principle",
    question: "Which committee of the Board of Directors reviews the company's internal audit plan and periodic financial statements?",
    options: ["Executive committee", "Investment committee", "Audit committee", "Product development committee"],
    answer: 2,
    explanation: "The Audit Committee oversees accounting policies, audits, and financial reporting."
  },

  // Objective 1I: Holding Company Structure
  {
    id: 29,
    lo: "principle",
    question: "A company that has a controlling interest in one or more other companies is a:",
    options: ["Subsidiary", "Reinsurer", "Holding company", "Profit center"],
    answer: 2,
    explanation: "Holding companies control other companies (subsidiaries)."
  },
  {
    id: 30,
    lo: "principle",
    question: "Scenario: Best Life creates 'Best Holdings Inc.' as its owner. Best Holdings now controls Best Life. This is an example of an:",
    options: ["Downstream holding company", "Upstream holding company", "Independent SBU", "Ad hoc structure"],
    answer: 1,
    explanation: "An upstream holding company controls the corporation that formed it."
  },

  // ... (Continuing with more specific definitions and nuances to reach depth)
  {
    id: 31,
    lo: "principle",
    question: "The 'overriding common interest' of all stakeholders in an insurance company is:",
    options: ["Large dividend payments", "Higher pay for employees", "Continued solvency and profitable operations", "Low prices for all products"],
    answer: 2,
    explanation: "While interests diverge, the fundamental common interest is the company's survival (solvency) and profitability."
  },
  {
    id: 32,
    lo: "principle",
    question: "Strategic planning usually covers a time horizon of:",
    options: ["One year or less", "Three to five years", "Ten to twenty years", "One month"],
    answer: 1,
    explanation: "Strategic planning sets long-term goals, typically 3-5 years, whereas operational planning is 1 year or less."
  },
  {
    id: 33,
    lo: "principle",
    question: "Breaking down the processing of a life insurance application into underwriting activities and policy issue activities is an example of:",
    options: ["Departmentalization", "Division of labor", "Authority delegation", "Centralization"],
    answer: 1,
    explanation: "Division of labor divides large tasks into smaller, specialized activities."
  },
  {
    id: 34,
    lo: "principle",
    question: "Which functional area ensures that the company conducts operations on a mathematically sound basis and determines reserve liabilities?",
    options: ["Marketing", "Accounting", "Actuarial", "Treasury"],
    answer: 2,
    explanation: "The Actuarial function handles mathematical soundness, product design, and reserve calculation."
  },
  {
    id: 35,
    lo: "principle",
    question: "One advantage of a holding company structure is that it allows a company to:",
    options: ["Violate solvency laws", "Diversify products and protect from concentration risk", "Merge all corporate cultures instantly", "Avoid all government regulation"],
    answer: 1,
    explanation: "Holding companies allow for diversification into different businesses and easier access to funds."
  },
  {
    id: 36,
    lo: "principle",
    question: "Scenario: Forbright Financial borrows money from a major bank to fund a new technology platform. In this context, the bank becomes a:",
    options: ["Regulator", "Reinsurer", "Creditor stakeholder", "Supplier stakeholder"],
    answer: 2,
    explanation: "Banks and other lenders are creditor stakeholders who have an interest in the company's ability to repay debt."
  },
  {
    id: 37,
    lo: "principle",
    question: "A formal written statement of a company's fundamental purpose or reason for being is its:",
    options: ["Strategic plan", "Org chart", "Mission statement", "Policy dividend"],
    answer: 2,
    explanation: "The mission statement outlines the company's core purpose."
  },
  {
    id: 38,
    lo: "principle",
    question: "Prudential regulation is another term for:",
    options: ["Market conduct regulation", "Solvency regulation", "Labor law regulation", "Tax regulation"],
    answer: 1,
    explanation: "Prudential regulation focuses on financial stability and solvency."
  },
  {
    id: 39,
    lo: "principle",
    question: "The process of assembling and coordinating required resources to attain organizational goals is:",
    options: ["Planning", "Organizing", "Directing", "Controlling"],
    answer: 1,
    explanation: "Organizing involves coordinating resources like people, money, and technology."
  },
  {
    id: 40,
    lo: "principle",
    question: "When an employee is answerable for how well he or she carries out assigned responsibilities, this is known as:",
    options: ["Authority", "Accountability", "Delegation", "Centralization"],
    answer: 1,
    explanation: "Accountability means being answerable for performance."
  },
  {
    id: 41,
    lo: "principle",
    question: "Which functional area oversees the management of corporate data and uses technology to optimize company operations?",
    options: ["Actuarial", "Underwriting", "Information Technology", "Treasury operations"],
    answer: 2,
    explanation: "IT manages data and optimizes operations through technological solutions."
  },
  {
    id: 42,
    lo: "principle",
    question: "Scenario: Global Life has separate divisions for its North American operations and its Asian operations. This is an example of organization by:",
    options: ["Product", "Distribution channel", "Territory", "Function"],
    answer: 2,
    explanation: "Territorial organization divides the company based on geographic regions."
  },
  {
    id: 43,
    lo: "principle",
    question: "A temporary committee established for a specific purpose, such as investigating why claims are escalating in one region, is an:",
    options: ["Standing committee", "Audit committee", "Ad hoc committee", "Executive committee"],
    answer: 2,
    explanation: "Ad hoc committees (or task forces) represent temporary groups for specific projects."
  },
  {
    id: 44,
    lo: "principle",
    question: "Scenario: Best Life Insurance Company creates a holding company called 'Best Holdings' which it owns. Best Holdings then owns two other subsidiaries. Best Holdings is an:",
    options: ["Upstream holding company", "Downstream holding company", "Strategic business unit", "Ad hoc committee"],
    answer: 1,
    explanation: "A downstream holding company is formed and owned by the company that created it."
  },
  {
    id: 45,
    lo: "principle",
    question: "Scenario: Mr. Smith is named as the recipient of the death benefit in his wife's life insurance policy. In the insurer's view, Mr. Smith is a:",
    options: ["Stockholder", "Policyowner", "Customer", "Regulator"],
    answer: 2,
    explanation: "Beneficiaries are considered customers of the insurance company."
  },
  {
    id: 46,
    lo: "principle",
    question: "The management function that involves monitoring whether the company's performance is meeting its goals and taking corrective action if it is not is:",
    options: ["Planning", "Organizing", "Directing", "Controlling"],
    answer: 3,
    explanation: "Controlling monitors and corrects performance."
  },
  {
    id: 47,
    lo: "principle",
    question: "A visual display of the lines of authority and responsibility within a company is an:",
    options: ["Strategic plan", "Organization chart", "SWOT analysis", "Reinsurance treaty"],
    answer: 1,
    explanation: "An org chart displays reporting lines and the chain of command."
  },
  {
    id: 48,
    lo: "principle",
    question: "Which functional area is responsible for ensuring the company classifies proposed insureds so they fall within the range of mortality rates assumed during product design?",
    options: ["Actuarial", "Underwriting", "Marketing", "Claim administration"],
    answer: 1,
    explanation: "Underwriting assesses and classifies risk to match pricing assumptions."
  },
  {
    id: 49,
    lo: "principle",
    question: "The primary advantage of creating profit centers or SBUs is that it allows management to:",
    options: ["Avoid duplicating support functions", "Identify which business lines are performing above or below expectations", "Ensure centralized decision making", "Reduce the number of managers needed"],
    answer: 1,
    explanation: "Profit centers allow for better performance tracking by segment."
  },
  {
    id: 50,
    lo: "principle",
    question: "Which board committee deals with questions of overall company policy and items not specifically assigned to other board committees?",
    options: ["Audit committee", "Investment committee", "Executive committee", "Product development committee"],
    answer: 2,
    explanation: "The Executive Committee handles broad policy and unassigned items."
  },
  {
    id: 51,
    lo: "principle",
    question: "Scenario: A potential investor is checking the financial strength of Best Life. They consult A.M. Best and Standard & Poor's. These organizations are called:",
    options: ["Regulators", "Rating agencies", "Trade organizations", "Reinsurers"],
    answer: 1,
    explanation: "Rating agencies are independent organizations that evaluate and rank the financial condition of insurers."
  },
  {
    id: 52,
    lo: "principle",
    question: "Groups that represent the interests of the insurance industry as a whole, such as the American Council of Life Insurers (ACLI), are examples of:",
    options: ["Rating agencies", "Regulators", "Trade organizations", "Profit centers"],
    answer: 2,
    explanation: "Trade organizations represent collective industry interests and provide research and advocacy."
  },
  {
    id: 53,
    lo: "principle",
    question: "Managers who are in charge of subunits of departments and spend more time in direct supervision of nonmanagement employees are:",
    options: ["Senior-level managers", "Middle-level managers", "Supervisors (First-level managers)", "Inside directors"],
    answer: 2,
    explanation: "First-level managers or supervisors directly oversee the work of nonmanagement staff."
  },
  {
    id: 54,
    lo: "principle",
    question: "The process of preparing for the future by establishing goals and formulating strategies is:",
    options: ["Planning", "Organizing", "Directing", "Controlling"],
    answer: 0,
    explanation: "Planning is the foundational function that sets future direction."
  },
  {
    id: 55,
    lo: "principle",
    question: "Scenario: Zenith Life decides to expand into the Asian market (a long-term goal). To do this, they plan to hire 50 new agents in Tokyo (a specific task). The long-term goal is a ______, and the hiring task is a ______.",
    options: ["Tactic; Strategy", "Strategy; Tactic", "Goal; Objective", "Plan; Goal"],
    answer: 1,
    explanation: "Strategies are broad courses of action for long-term goals; tactics are the specific tasks required to achieve them."
  },
  {
    id: 56,
    lo: "principle",
    question: "Middle-level managers conduct _______ planning, which typically covers a period of one year or less.",
    options: ["Strategic", "Operational (Tactical)", "Long-range", "Fiduciary"],
    answer: 1,
    explanation: "Operational planning translates strategic goals into short-term, day-to-day activity plans."
  },
  {
    id: 57,
    lo: "principle",
    question: "The process of grouping similar or related work activities into units is known as:",
    options: ["Division of labor", "Departmentalization", "Delegation", "Decentralization"],
    answer: 1,
    explanation: "Departmentalization groups jobs to facilitate supervision and coordination."
  },
  {
    id: 58,
    lo: "principle",
    question: "A major advantage of a decentralized organization is that it:",
    options: ["Ensures absolute consistency in all policy decisions", "Allows decisions to be made closer to the customer", "Requires fewer managers than centralized firms", "Eliminates the need for middle management"],
    answer: 1,
    explanation: "Decentralization allows for faster responses and more personalized customer decisions."
  },
  {
    id: 59,
    lo: "principle",
    question: "Which functional area oversees the process from the receipt of an application through the issuance of the insurance policy?",
    options: ["Underwriting", "New business administration", "Annuity administration", "Marketing"],
    answer: 1,
    explanation: "New business administration handles the logistics of the policy issuance process."
  },
  {
    id: 60,
    lo: "principle",
    question: "Interacting with customers and providing them information to help perform transactions is the primary role of:",
    options: ["New business administration", "Marketing", "Customer service", "Accounting"],
    answer: 2,
    explanation: "Customer service is the primary point of contact for ongoing policyowner needs."
  },
  {
    id: 61,
    lo: "principle",
    question: "The functional area that manages and invests the cash coming into and out of a company is:",
    options: ["Accounting", "Treasury operations", "Investments", "Actuarial"],
    answer: 1,
    explanation: "Treasury operations handles cash management and liquidity."
  },
  {
    id: 62,
    lo: "principle",
    question: "Scenario: Best Life has two separate divisions: one for household markets and another for corporate markets. This is organization by:",
    options: ["Product", "Customer type", "Territory", "Function"],
    answer: 1,
    explanation: "Organization by customer type creates divisions based on specific market segments."
  },
  {
    id: 63,
    lo: "principle",
    question: "An insurer that has an 'Agency division' and a 'Direct-to-consumer division' is organized by:",
    options: ["Territory", "Distribution system", "Function", "Product"],
    answer: 1,
    explanation: "Distribution system organization focuses on how products reach the buyer."
  },
  {
    id: 64,
    lo: "principle",
    question: "Which board-level committee determines the broad investment policy of the company?",
    options: ["Audit committee", "Investment committee", "Executive committee", "Budget committee"],
    answer: 1,
    explanation: "The Investment Committee sets the overall guidelines for company asset management."
  },
  {
    id: 65,
    lo: "principle",
    question: "The committee that analyzes the unique asset and liability characteristics of a company's products is the:",
    options: ["Product development committee", "Asset/liability committee (ALCO)", "Budget committee", "Corporate communications committee"],
    answer: 1,
    explanation: "ALCO coordinates investment strategy with product design to manage financial risk."
  },
  {
    id: 66,
    lo: "principle",
    question: "A company that is owned or controlled by another company is known as a:",
    options: ["Parent company", "Holding company", "Subsidiary", "Reinsurer"],
    answer: 2,
    explanation: "Subsidiaries are the individual companies controlled by a holding company."
  },
  {
    id: 67,
    lo: "principle",
    question: "Which type of insurance company CANNOT be owned by another company, thus cannot be part of an upstream holding company system?",
    options: ["Stock insurance company", "Mutual insurance company", "Fraternal benefit society", "Both B and C"],
    answer: 3,
    explanation: "Mutual companies and fraternal societies are owned by policyowners/members and do not issue stock; they cannot be owned by others."
  },
  {
    id: 68,
    lo: "principle",
    question: "Scenario: A company that provides office equipment and software to Forbright Financial is a stakeholder known as a:",
    options: ["Customer", "Vendor/Supplier", "Creditor", "Regulator"],
    answer: 1,
    explanation: "Suppliers provide the goods and services necessary for the company to operate."
  },
  {
    id: 69,
    lo: "principle",
    question: "Functional experts who manage specific departments, like the claim or actuarial department, are typically:",
    options: ["Senior-level managers", "Middle-level managers", "First-level supervisors", "Independent directors"],
    answer: 1,
    explanation: "Middle-level managers are the departmental experts between seniors and supervisors."
  },
  {
    id: 70,
    lo: "principle",
    question: "Which of the following is a focus of market conduct laws?",
    options: ["Adequacy of reserve liabilities", "Company investment limits", "Fair claim administration practices", "Minimum capital requirements"],
    answer: 2,
    explanation: "Market conduct laws focus on fair business practices like claims, sales, and service."
  },
  {
    id: 71,
    lo: "principle",
    question: "Insurance company employees are stakeholders because their efforts significantly impact:",
    options: ["The company's social media presence", "Success and profitability of company operations", "The election of the Board of Directors", "Taxation laws in their region"],
    answer: 1,
    explanation: "Employees' work directly determines the company's operational success."
  },
  {
    id: 72,
    lo: "principle",
    question: "Taking into consideration company resources, strengths, weaknesses, and the environment is part of:",
    options: ["Organizing", "Planning", "Controlling", "Delegating"],
    answer: 1,
    explanation: "Planning requires analyzing the internal and external environment."
  },
  {
    id: 73,
    lo: "principle",
    question: "When a manager assigns a task to an employee, they must also provide the ______ to meet their responsibilities.",
    options: ["Accountability", "Authority", "Liability", "Supervision"],
    answer: 1,
    explanation: "Delegation is ineffective without giving the person the authority to take action."
  },
  {
    id: 74,
    lo: "principle",
    question: "Which function ensures that the company's operations comply with financial services and insurance department regulations in every jurisdiction it operates in?",
    options: ["Legal", "Compliance", "Accounting", "HR"],
    answer: 1,
    explanation: "Compliance is specifically focused on meeting regulatory requirements."
  },
  {
    id: 75,
    lo: "principle",
    question: "Matters related to hiring, training, evaluating, and terminating employees are handled by:",
    options: ["Accounting", "Human Resources", "Legal", "Directing"],
    answer: 1,
    explanation: "HR manages the workforce lifecycle."
  },
  {
    id: 76,
    lo: "principle",
    question: "The major advantage of organizing operations by function is its:",
    options: ["Personalized customer focus", "Simplicity and focus on technical skills in each area", "Ease of diversifying into separate markets", "Avoidance of duplicate support functions"],
    answer: 1,
    explanation: "Functional organization is simple and build-up deep expertise in specific work areas."
  },
  {
    id: 77,
    lo: "principle",
    question: "A Strategic Business Unit (SBU) typically has its own identifying ______ and its own set of ______.",
    options: ["Legal name; Employees", "Profits; Competitors", "Tax ID; Reinsurers", "CEO; Regulators"],
    answer: 1,
    explanation: "SBUs act like independent businesses with their own financial targets and rivals."
  },
  {
    id: 78,
    lo: "principle",
    question: "Officers of a company and members of its board make up several of the most important ______ committees of any business.",
    options: ["Ad hoc", "Standing", "Temporal", "External"],
    answer: 1,
    explanation: "Standing committees are permanent fixtures for ongoing governance."
  },
  {
    id: 79,
    lo: "principle",
    question: "The word used to describe a permanent committee that executives use for continuing advice is:",
    options: ["Task force", "Project team", "Standing committee", "Ad hoc group"],
    answer: 2,
    explanation: "Standing committees are permanent; other terms imply temporary structures."
  },
  {
    id: 80,
    lo: "principle",
    question: "A holding company exists when a company owns enough shares of another company's stock to control its operations. This is known as a:",
    options: ["Shared interest", "Controlling interest", "Statutory interest", "Minority interest"],
    answer: 1,
    explanation: "A controlling interest gives the parent company authority over the subsidiary."
  },
  {
    id: 81,
    lo: "principle",
    question: "Stockholders receive excess profits in the form of stockholder dividends. These dividends are payments to the:",
    options: ["Customers", "Owners", "Regulators", "Creditors"],
    answer: 1,
    explanation: "As owners of a stock company, stockholders are entitled to a share of profits."
  },
  {
    id: 82,
    lo: "principle",
    question: "In a mutual company, policy dividends are considered to be a:",
    options: ["Stockholder profit", "Return of a portion of the premium", "Guaranteed interest credit", "Taxable salary"],
    answer: 1,
    explanation: "Mutual policy dividends are conceptually a refund of surplus premium."
  },
  {
    id: 83,
    lo: "principle",
    question: "Supervision corresponds to the formal functions of:",
    options: ["Planning and Organizing", "Directing and Controlling", "Accounting and Legal", "Marketing and Sales"],
    answer: 1,
    explanation: "Managers supervise through directing (leading) and controlling (checking progress)."
  },
  {
    id: 84,
    lo: "principle",
    question: "The chain of command identifies:",
    options: ["The company's mission", "Who reports to whom", "The profitability of each department", "The company's investment policy"],
    answer: 1,
    explanation: "The chain of command defines the vertical reporting structure."
  },
  {
    id: 85,
    lo: "principle",
    question: "Which functional area drafts the contracts that insurers use in the course of business?",
    options: ["Marketing", "Accounting", "Legal", "Actuarial"],
    answer: 2,
    explanation: "Legal drafts and reviews policy forms and contracts."
  },
  {
    id: 86,
    lo: "principle",
    question: "Organizing by territory makes sense when ______ differences exist among the various regions.",
    options: ["Product", "Regulatory or language", "Marketing", "Employee salary"],
    answer: 1,
    explanation: "Local differences in laws and languages often necessitate territorial divisions."
  },
  {
    id: 87,
    lo: "principle",
    question: "The interdepartmental committee that decides whether enough consumer demand exists for a new product is the:",
    options: ["Budget committee", "Product development committee", "Corporate communications committee", "Audit committee"],
    answer: 1,
    explanation: "The PDC evaluates market research for potential new product launches."
  },
  {
    id: 88,
    lo: "principle",
    question: "In a downstream holding company arrangement, Best Life creates Best Holdings, which in turn owns subsidiaries. Who does the President of Best Holdings report to?",
    options: ["Regulators", "The CEO of Best Life", "The policyowners", "The Reinsurer"],
    answer: 1,
    explanation: "Since the holding company is owned by Best Life, its leader reports to the creator's CEO."
  },
  {
    id: 89,
    lo: "principle",
    question: "The ability of a company to pay its debts and contractual obligations on time is:",
    options: ["Profitability", "Solvency", "Liquidity", "Efficiency"],
    answer: 1,
    explanation: "Solvency is the core requirement for an insurer to remain viable."
  },
  {
    id: 90,
    lo: "principle",
    question: "Each vice president in an insurance company usually supervises and coordinates the activities of a:",
    options: ["Profit center", "Strategic Business Unit", "Major division", "Temporary task force"],
    answer: 2,
    explanation: "VPs typically head major organizational divisions."
  },
  {
    id: 91,
    lo: "principle",
    question: "Which functional area is specifically responsible for processing annuity payments?",
    options: ["Claim administration", "Actuarial", "Annuity administration", "Treasury"],
    answer: 2,
    explanation: "Annuity administration handles the payouts for annuity products."
  },
  {
    id: 92,
    lo: "principle",
    question: "What is a common drawback of organizing as profit centers or SBUs?",
    options: ["Slower decision making", "Duplication of some support functions", "Lack of technical expertise", "Too much centralization"],
    answer: 1,
    explanation: "Having separate divisions often means duplicating departments like IT or Accounting for each product."
  },
  {
    id: 93,
    lo: "principle",
    question: "A profit center is evaluated on its:",
    options: ["Number of employees", "Profitability (revenues vs expenses)", "Compliance reports", "Marketing reach"],
    answer: 1,
    explanation: "The primary metric for a profit center is its financial result."
  },
  {
    id: 94,
    lo: "principle",
    question: "Once an ad hoc committee's purpose is accomplished, the committee is:",
    options: ["Promoted to a standing committee", "Disbanded", "Sent to the Board of Directors", "Reorganized by territory"],
    answer: 1,
    explanation: "Ad hoc teams are temporary by definition."
  },
  {
    id: 95,
    lo: "principle",
    question: "A holding company often has greater access to external funds than an individual insurance company. This is through:",
    options: ["Only policy dividends", "Borrowing or issuing shares of stock in the holding company", "Regulatory grants", "Customer premiums"],
    answer: 1,
    explanation: "Holding companies have broader capital market reach."
  },
  {
    id: 96,
    lo: "principle",
    question: "Scenario: A manager gives an employee the task to audit files but does not give the login credentials to the system. This manager has assigned ______ without ______.",
    options: ["Authority; Responsibility", "Responsibility; Authority", "Accountability; Planning", "Strategy; Tactics"],
    answer: 1,
    explanation: "Responsibility is the duty; authority is the power to perform it."
  },
  {
    id: 97,
    lo: "principle",
    question: "Which area maintains financial records and files required financial statements with regulators?",
    options: ["Treasury operations", "Accounting", "Investments", "Legal"],
    answer: 1,
    explanation: "Accounting deals with financial reporting and external records."
  },
  {
    id: 98,
    lo: "principle",
    question: "A holding company structure helps eliminate potential problems like:",
    options: ["Corporate culture clashes", "Taxes", "Government audits", "Competition from other SBUs"],
    answer: 0,
    explanation: "Keeping companies as distinct entities under a holding structure can reduce integration friction."
  },
  {
    id: 99,
    lo: "principle",
    question: "The owners of a company elect the board of directors. In a stock company, these owners are ______; in a mutual company, they are ______.",
    options: ["Policyowners; Stockholders", "Stockholders; Policyowners", "Managers; Employees", "Regulators; Reinsurers"],
    answer: 1,
    explanation: "Stockholders own stock; mutual policyowners own the company through their policies."
  },
  {
    id: 100,
    lo: "principle",
    question: "Beyond the common goal of solvency, different stakeholder interests can diverge from, and এমনকি conflict with, each other. This must be managed by:",
    options: ["Regulators", "Owners", "Management", "Rating Agencies"],
    answer: 2,
    explanation: "Deciding whose interest to prioritize in a conflict is a core management duty."
  }
];
