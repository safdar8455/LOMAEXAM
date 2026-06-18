import { Question } from '../../types';

export const chapter13Questions: Question[] = [
  // ==========================================
  // OBJECTIVE 13A: Organization, Philosophy, and Practices (1-10)
  // ==========================================
  {
    id: 1,
    lo: "principle",
    question: "Scenario: Apex Life's CEO wants to review the core corporate guidelines that reflect the fundamental principles of fairness, promptness, and courtesy followed by the company when conducting claim administration. The department is consulting Apex's official statement of:",
    options: [
      "Claim practices",
      "Claim philosophy",
      "Retention limits",
      "Loss ratio targets"
    ],
    answer: 1,
    explanation: "Incorrect. An insurer’s claim philosophy is a high-level statement of the general principles the insurer follows when conducting claim administration (e.g., 'to act promptly, fairly, and courteously...'). Specific step-by-step procedures are instead known as claim practices."
  },
  {
    id: 2,
    lo: "principle",
    question: "Scenario: A claim manager at Sentinel Life is drafting a set of detailed daily instructions for analysts to ensure privacy compliance, swift email turnaround, and consistent document-gathering on high-value policies. Under LOMA, these operational day-to-day rules represent:",
    options: [
      "Claim philosophy",
      "Claim practices",
      "Reinsurance treaties",
      "Actuarial assumptions"
    ],
    answer: 1,
    explanation: "Incorrect. Claim practices are the detailed, actionable statements developed by claim department management to guide employees in their day-to-day handling of individual claims under the umbrella of the broader claim philosophy."
  },
  {
    id: 3,
    lo: "principle",
    question: "Scenario: Integrity Mutual is a small, specialized life insurer that serves only a single state. Rather than having multiple regional departments with individual managers, Integrity hires a single leader who oversees all claims for all lines of business. This role is best described as the:",
    options: [
      "Supervisory Claim Analyst",
      "Chief Claim Officer",
      "Third-Party Administrator",
      "Regional Sales Representative"
    ],
    answer: 1,
    explanation: "Incorrect. Smaller life insurance companies often consolidate leadership, utilizing a single 'chief claim officer' who oversees claims across all business lines rather than dividing the structure by region or product line."
  },
  {
    id: 4,
    lo: "principle",
    question: "Scenario: Clara, a customer service representative in a centralized corporate call center, receives an inquiry from a policyowner asking for copies of claim forms. According to standard corporate structure in Chapter 13, general customer questions are handled by:",
    options: [
      "Senior Claim Analysts",
      "Customer service representatives or call-center staff",
      "The Chief Underwriter",
      "Medical Underwriting Directors"
    ],
    answer: 1,
    explanation: "Incorrect. Customer service representatives, either within the claim department or in the company’s general call center, typically handle routine Customer inquiries and basic status updates so analysts can focus on evaluating files."
  },
  {
    id: 5,
    lo: "principle",
    question: "Scenario: Harold is a newly hired employee in the claim department at Vanguard Life. He has just completed intensive training that enables him to independently review files, check the validity of proofs of loss, and determine the company’s legal liability under each claim. Harold’s official job title is most likely:",
    options: [
      "Claim Supervisor",
      "Claim Analyst",
      "Actuarial Associate",
      "Risk Assessor"
    ],
    answer: 1,
    explanation: "Incorrect. Under LOMA, a claim analyst (also called a claim examiner, adjuster, specialist, or approver) is the designated worker trained to review individual files and determine liability."
  },
  {
    id: 6,
    lo: "principle",
    question: "Scenario: Under standard corporate authority schedules (Figure 13.1), a junior employee, who is a registered 'Analyst Trainee,' receives a routine claim for $45,000 that occurred after the contestable period had already expired. How much authority does Harold have to approve this routine claim?",
    options: [
      "He has up to $25,000 in claim approval authority.",
      "He has up to $200,000 in claim approval authority.",
      "He has up to $600,000 in claim approval authority.",
      "He has zero authority on any claim amount."
    ],
    answer: 0,
    explanation: "Incorrect. According to Figure 13.1, for routine claims that are not within the contestable period, an Analyst Trainee has an approval limit of $25,000. For claims above that amount, a standard Analyst or higher must sign off."
  },
  {
    id: 7,
    lo: "principle",
    question: "Scenario: A claimant submits a death benefit request for $150,000 on a policy that is not within the contestable period. The claim is routine and has no suspicious indicators. According to Figure 13.1, which of the following positions has sufficient authority to approve this claim?",
    options: [
      "An Analyst Trainee, because it is outside the contestable period",
      "A standard Claim Analyst (with up to $200,000 authority limit)",
      "Only a Senior Claim Analyst or higher can sign off",
      "Only the Vice President of new business operations can approve claims"
    ],
    answer: 1,
    explanation: "Incorrect. According to Figure 13.1, a standard Claim Analyst has authority to approve routine claims up to $200,000. An Analyst Trainee is capped at $25,000."
  },
  {
    id: 8,
    lo: "principle",
    question: "Scenario: A claim analyst receives a claim for $500,000 on a policy that is currently in its contestable period. According to standard claim approval limits (Figure 13.1), what is the level of authority held by an Analyst Trainee and a standard Analyst for higher-risk claims of this nature?",
    options: [
      "Both can approve it, since it does not exceed $600,000.",
      "Neither the Analyst Trainee nor the standard Analyst has any authority to approve contestable or high-risk claims.",
      "The Trainee has no authority, but the standard Analyst has up to $250,000.",
      "Both have up to $500,000 of authority under concurrent supervisory guidelines."
    ],
    answer: 1,
    explanation: "Incorrect. According to Figure 13.1, for higher-risk claims (such as those within the contestable period), both Analyst Trainees and standard Analysts have 'No authority.' They must refer the claim to a Senior Claim Analyst or higher."
  },
  {
    id: 9,
    lo: "principle",
    question: "Scenario: A Senior Claim Analyst at Apex Life is reviewing a highly complex accidental death claim for $550,000. According to Figure 13.1, up to what maximum claim amount does a Senior Claim Analyst have approval authority for high-risk claims?",
    options: [
      "$200,000",
      "$600,000",
      "$700,000",
      "$1,000,000"
    ],
    answer: 1,
    explanation: "Incorrect. According to Figure 13.1, a Senior Claim Analyst has approval authority up to $600,000 for both routine and higher-risk claims (such as those within the contestable period or involving accidental death benefits)."
  },
  {
    id: 10,
    lo: "principle",
    question: "Scenario: A difficult accidental death claim for $850,000 is submitted. The Senior Claim Analyst reviews the file and determines a supervisor's approval is required. According to Figure 13.1, what is the maximum approval authority for a Claim Supervisor on high-risk claims, and who must authorize a claim exceeding that amount?",
    options: [
      "$600,000; the Senior Claim Analyst",
      "$700,000; the Claim Manager (who has up to $1,000,000 authority)",
      "$700,000; only the Chief Actuary can approve it",
      "$1,000,000; only the corporate Board of Directors"
    ],
    answer: 1,
    explanation: "Incorrect. Figure 13.1 indicates that a Claim Supervisor has authority up to $700,000 for high-risk claims. To approve an $850,000 high-risk claim, the file must be routed to the Claim Manager, who has authority up to $1,000,000."
  },

  // ==========================================
  // OBJECTIVE 13B: Basic Steps in Claim Decision Process & Validity (11-22)
  // ==========================================
  {
    id: 11,
    lo: "principle",
    question: "Under LOMA, what is the correct chronological sequence of the four basic steps in the routine life insurance claim processing cycle?",
    options: [
      "(1) Calculating the amount payable, (2) paying the proceeds, (3) identifying the proper payee, and (4) determining if benefits are payable",
      "(1) Determining if benefits are payable, (2) calculating the amount payable, (3) identifying the proper payee, and (4) paying the proceeds",
      "(1) Identifying the proper payee, (2) determining if benefits are payable, (3) calculating the amount payable, (4) paying the proceeds",
      "(1) Conducting a SIU investigation, (2) auditing policyowner competence, (3) applying flat extras, and (4) initiating interpleader"
    ],
    answer: 1,
    explanation: "Incorrect. The correct standard sequence for processing routine claims is: first, determine if benefits are payable; second, calculate the exact amount payable; third, identify the proper payee; and fourth, pay the proceeds."
  },
  {
    id: 12,
    lo: "principle",
    question: "Scenario: An analyst receives a claim notification. To perform the very first step in determining whether benefits are payable (Figure 13.2), the analyst should check the company's policy administration system to answer which question?",
    options: [
      "Was the deceased the insured?",
      "Was the policy in force at the time of the loss?",
      "Is the policy currently contestable?",
      "Is there a material misrepresentation?"
    ],
    answer: 1,
    explanation: "Incorrect. The first action in determining if a benefit is payable is checking the policy administration system to see if the insurance policy was 'in force' (all premium payments are up-to-date and coverage was active) at the time of the loss."
  },
  {
    id: 13,
    lo: "principle",
    question: "Scenario: Vanguard Life outsources the record keeping and administrative processing of its block of employer-sponsored group life insurance policies to a specialized third-party firm. This external service provider is known as a:",
    options: [
      "Claims syndicate",
      "Third-party administrator (TPA)",
      "Independent underwriter pool",
      "Clearing house"
    ],
    answer: 1,
    explanation: "Incorrect. A third-party administrator (TPA) is an outside service provider or firm that manages administrative tasks, record keeping, and claim processing, which is very common for group insurance blocks."
  },
  {
    id: 14,
    lo: "principle",
    question: "Scenario: A customer submits a death claim. The analyst checks the policy records and sees that the policy was issued on May 10, but the insured had actually passed away on March 15. What will a claim analyst do?",
    options: [
      "Pay the claim plus accrued interest, as the policy was eventually approved.",
      "Deny the claim and notify the claimant of the reason, because the loss occurred before the policy issue date.",
      "Initiate an interpleader process with the court.",
      "Refer the file to a jet unit for exception-based underwriting."
    ],
    answer: 1,
    explanation: "Incorrect. If a loss occurrs before the policy is officially in force (such as before the policy issue date) or after the coverage has lapsed, no benefit is payable, and the claim analyst will deny the claim and notify the claimant of the reason."
  },
  {
    id: 15,
    lo: "principle",
    question: "Scenario: A claimant submits a death certificate for 'Johnathon Smith' to collect the proceeds of a policy issued to 'John Smith.' The claim analyst must verify whether 'John' and 'Johnathon' are the exact same person. This process is important to prevent:",
    options: [
      "Retrocession errors",
      "Claim fraud or mistaken claims",
      "Material misrepresentations on the application",
      "Lapse during the grace period"
    ],
    answer: 1,
    explanation: "Incorrect. Comparing the deceased's identity in the proof of loss with the policy records protects the insurer from making payouts to the wrong person through honest error (mistaken claim) or intentional deception (claim fraud)."
  },
  {
    id: 16,
    lo: "principle",
    question: "Scenario: A beneficiary honestly, but mistakenly, believes that her deceased uncle was the covered insured under a life policy, when in fact he was only named on the application as a contingent payee. Under LOMA, this type of filing is classified as a:",
    options: [
      "Fraudulent claim",
      "Mistaken claim",
      "Pretext claim",
      "Rescinded claim"
    ],
    answer: 1,
    explanation: "Incorrect. A claim is considered a 'mistaken claim' when a claimant makes an honest mistake in presenting a claim to the insurer, such as misidentifying who was the insured under the terms of a policy."
  },
  {
    id: 17,
    lo: "principle",
    question: "Under LOMA, what is the defined term for a scenario in which a beneficiary intentionally presents false information to an insurer in an unlawful attempt to collect policy benefits?",
    options: [
      "Material misrepresentation",
      "Claim fraud",
      "Recalled coverage",
      "Pretext underestimation"
    ],
    answer: 1,
    explanation: "Incorrect. Claim fraud occurs when a claimant intentionally submits false details or documents in a deceptive, unlawful attempt to collect benefits (e.g., claiming a living insured is dead)."
  },
  {
    id: 18,
    lo: "principle",
    question: "Scenario: After confirming that a policy was in force and that the deceased was indeed the covered insured, the claim analyst notices that the policy was issued exactly 14 months ago. According to Figure 13.2, what is the next critical question the analyst must review?",
    options: [
      "Did the loss occur outside the country of issue?",
      "Is the policy contestable?",
      "Is there an accidental death rider?",
      "Has the claimant initiated a suit?"
    ],
    answer: 1,
    explanation: "Incorrect. According to the standard decision flowchart in Figure 13.2, if the policy is in force and the deceased is the insured, the analyst checks 'Is the policy contestable?' (typically within 2 years of issue) to verify if the application should be reviewed for misrepresentations."
  },
  {
    id: 19,
    lo: "principle",
    question: "Scenario: A claim analyst discovers that a death claim was submitted during the policy's contestable period. If the analyst wants to consult with other corporate functional teams, which department regularly reviews death claims occurring during this period?",
    options: [
      "Accounting department",
      "Underwriting department",
      "Product development department",
      "Information technology department"
    ],
    answer: 1,
    explanation: "Incorrect. Depending on the insurer, underwriters regularly review claims submitted during the contestable period to evaluate whether any misrepresentations were made on the initial application."
  },
  {
    id: 20,
    lo: "principle",
    question: "Scenario: In evaluating a claim, the analyst determines that a claim is valid and payable. Under LOMA, after approval, the analyst's next operational task during complete claim administration is to:",
    options: [
      "Audit the customer's medical records for the past 20 years",
      "Determine the amount of the policy benefit payable, identify the correct payee, and distribute the proceeds",
      "Transmit a notification to the National Association of Insurance Commissioners",
      "Convert the whole life coverage to a deferred annuity contract"
    ],
    answer: 1,
    explanation: "Incorrect. Once a claim has been approved, the insurer must determine the exact benefit amount payable, identify the person or entity entitled to receive it, and arrange the payout."
  },
  {
    id: 21,
    lo: "principle",
    question: "Scenario: A claim analyst determines that a death claim must be denied. To ensure accuracy and maintain compliance with quality controls, who must review and approve the denial before notifying the claimant in writing?",
    options: [
      "The state administrative court",
      "A claim manager or a member of the corporate legal department",
      "An actuarial analyst trainee",
      "The registered third-party broker-dealer"
    ],
    answer: 1,
    explanation: "Incorrect. Denying a claim is a significant decision. To ensure quality control, typically a claim manager or a member of the legal department must review and approve all claim denials."
  },
  {
    id: 22,
    lo: "principle",
    question: "Scenario: Integrity Life issues a standard denial letter to a beneficiary. In addition to clearly explaining the reasons for the claim denial, the insurer is required to inform the claimant that Vanguard will:",
    options: [
      "Refer the file to the federal prosecutor's office",
      "Reexamine the claim if the claimant can provide additional facts that might refute the information on which the denial was based",
      "Reimburse them for all personal expenses incurred in submitting the proof of loss",
      "Automatically convert the policy to a pension program"
    ],
    answer: 1,
    explanation: "Incorrect. Denial letters must state that the insurer will willingly reexamine the claim if the claimant can supply new, corrective facts that refute the basis of the denial."
  },

  // ==========================================
  // OBJECTIVE 13C: Misrepresentations, Materiality, and Rescission (23-34)
  // ==========================================
  {
    id: 23,
    lo: "principle",
    question: "Under LOMA, which of the following is the precise definition of a 'material misrepresentation' in a life insurance application?",
    options: [
      "An honest mistake regarding the applicant's middle initial or spelling of their street name",
      "A statement made in an application that is not true and that caused the insurer to enter into a contract it would not have agreed to if it had known the truth",
      "Any statement about health that is entered into an electronic application by a teleunderwriter",
      "A change in the beneficiary designation that occurred during the policy contestable period"
    ],
    answer: 1,
    explanation: "Incorrect. A material misrepresentation is a false statement on an application that alters the carrier's risk assessment such that, had the truth been known, the insurer would have rejected the risk or charged a higher rate."
  },
  {
    id: 24,
    lo: "principle",
    question: "Scenario: An applicant states on his application that he broke his left arm in an auto accident, when in fact it was his right arm. How does a claim analyst view this statement under LOMA guidelines?",
    options: [
      "It is a material misrepresentation that voids the policy entirely.",
      "It is an inaccurate statement that is NOT a material misrepresentation, because it would not have affected the underwriter's decision to accept the risk.",
      "It is claim fraud that must be reported to the state insurance department.",
      "It requires immediate rescission of the policy and a full refund of premiums."
    ],
    answer: 1,
    explanation: "Incorrect. Minor inaccuracies that do not affect the underwriting decision (such as mixing up the left arm and right arm for a fully healed fracture) are not material misrepresentations and have no impact on the claim."
  },
  {
    id: 25,
    lo: "principle",
    question: "Scenario: A proposed insured concealed the fact that she had been diagnosed with systemic heart disease and was taking prescription heart medications. This concealment represents a:",
    options: [
      "Routine clerical mistake",
      "Material misrepresentation related to health",
      "Discrepancy in the proof of loss",
      "Standard policy exclusion"
    ],
    answer: 1,
    explanation: "Incorrect. Concealing a known, severe medical impairment (like heart disease) that adversely affects life expectancy directly alters the underwriting assessment, representing a classic material health misrepresentation."
  },
  {
    id: 26,
    lo: "principle",
    question: "Scenario: An applicant fails to disclose that his primary employment is structural building demolition (a high-hazard occupation) and that his favorite hobby is professional motorcycle racing. According to Figure 13.3, this scenario is a material misrepresentation in which category?",
    options: [
      "Health",
      "Occupation or avocation",
      "Habits",
      "Number of traffic violations"
    ],
    answer: 1,
    explanation: "Incorrect. Failing to disclose a dangerous job or extreme hobby is a material misrepresentation in the 'occupation or avocation' category."
  },
  {
    id: 27,
    lo: "principle",
    question: "Scenario: A claim analyst reviews an application completed 15 months ago. The analyst discovers that the applicant concealed a history of deep chemical dependence and past substance abuse. According to Figure 13.3, this represents a material misrepresentation in which category?",
    options: [
      "Health",
      "Habits",
      "Other insurance applications denied",
      "Occupation or avocation"
    ],
    answer: 1,
    explanation: "Incorrect. Concealing the past abuse of alcohol or controlled substances is classified as a material misrepresentation related to personal 'habits' (Figure 13.3)."
  },
  {
    id: 28,
    lo: "principle",
    question: "Scenario: An applicant lists '0' moving violations on an application, but a post-death motor vehicle report reveals seven citations for reckless speeding and two DUI arrests. Under LOMA, this false representation falls under:",
    options: [
      "Health misrepresentations",
      "Number of traffic violations",
      "Exclusionary provisions",
      "Suitability standards"
    ],
    answer: 1,
    explanation: "Incorrect. Misstatements regarding the number or severity of moving violations or collisions represent a material misrepresentation in the 'number of traffic violations' category (Figure 13.3)."
  },
  {
    id: 29,
    lo: "principle",
    question: "Scenario: In applying for a policy, Sarah conceals that two other insurers had recently declined her applications for life insurance due to severe medical impairments. Under Figure 13.3, this concealment is a material misrepresentation in which category?",
    options: [
      "Underwriting philosophy deviations",
      "Other insurance applications denied or rated",
      "Personal avocation factors",
      "Rescission limitations"
    ],
    answer: 1,
    explanation: "Incorrect. Concealing that other insurance applications have been denied, rated, or assigned to high-risk pools is a material misrepresentation in the 'other insurance applications denied or rated' category (Figure 13.3)."
  },
  {
    id: 30,
    lo: "principle",
    question: "Under LOMA Chapter 13, what is 'rescission'?",
    options: [
      "The premium rate recalculation based on an age misstatement",
      "The legal process of voiding an insurance contract because of a material misrepresentation",
      "The structural sharing of premium risks with a reinsurance provider",
      "A suit filed to resolve conflicting beneficiary claims"
    ],
    answer: 1,
    explanation: "Incorrect. Rescission is the legal process of voiding an insurance contract on the grounds that, because of a material misrepresentation, no valid contract ever existed."
  },
  {
    id: 31,
    lo: "principle",
    question: "Scenario: Integrity Life discovers a material misrepresentation and successfully rescinds a policy. What is the standard financial requirement regarding the premiums paid by the policyowner?",
    options: [
      "The insurer retains 100% of all premiums paid.",
      "The insurer refunds the premiums paid on the policy, minus any outstanding policy loan amounts.",
      "The insurer must pay the full face amount to the state treasury department.",
      "The insurer refunds only the interest accrued on the cash value."
    ],
    answer: 1,
    explanation: "Incorrect. When an insurer rescinds a policy, it is legally required to return the premiums paid by the policyowner, minus any outstanding policy loans, to restore the parties to their pre-contract positions."
  },
  {
    id: 32,
    lo: "principle",
    question: "Scenario: An insurer discovers a clear material misrepresentation on a policy, but the policy was issued 36 months ago. The state's statutory contestable period is two years. Under LOMA, can the insurer rescind this contract?",
    options: [
      "Yes, because material misrepresentations can be voided at any time during the life of the insured.",
      "Generally no, because once the contestable period has expired, an insurer cannot contest the validity of the policy because of a material misrepresentation.",
      "Yes, but only if they pay a penalty fee to the beneficiary.",
      "Yes, because the contestable period restarts every 12 months."
    ],
    answer: 1,
    explanation: "Incorrect. Once the contestable period has expired, the insurer generally loses the right to contest the policy's validity or rescind the contract based on misrepresentations."
  },
  {
    id: 33,
    lo: "principle",
    question: "In what specific situation can some jurisdictions allow an insurer to contest and rescind a policy even AFTER the contestable period has officially expired?",
    options: [
      "If the beneficiary changed their residential address",
      "If the insurer can prove that the policy was taken out with the explicit intention of defrauding the insurer",
      "Only if the face amount of the contract exceeds $1,000,000",
      "If the agent who wrote the application retires from the business"
    ],
    answer: 1,
    explanation: "Incorrect. In some jurisdictions, if the insurer can prove that the policy was procured with the deliberate intention of defrauding the company, the contract may be rescinded even after the contestable period has run."
  },
  {
    id: 34,
    lo: "principle",
    question: "Scenario: A claim analyst suspects that an applicant committed a material misrepresentation on an application that was submitted 10 months ago. To resolve this suspicion, what action will the analyst take?",
    options: [
      "Immediately deny the claim without further contact",
      "Launch a claim investigation to gather additional medical, motor vehicle, or court records",
      "Initiate an interpleader lawsuit",
      "Pay the claim immediately but reduce the benefit by 50%"
    ],
    answer: 1,
    explanation: "Incorrect. When a claim analyst suspects a material misrepresentation or fraud on a contestable policy, they will launch a claim investigation to obtain the necessary documents (medical records, MVRs, autopsy reports, etc.) to make an informed decision."
  },

  // ==========================================
  // OBJECTIVE 13D: Proof of Loss & Disappearance (35-46)
  // ==========================================
  {
    id: 35,
    lo: "principle",
    question: "Under LOMA, what is the standard, most commonly accepted legal document that serves as proof of an insured's death in the United States?",
    options: [
      "A newspaper obituary notice",
      "An official death certificate",
      "A signed statement from the local sales agent",
      "A copy of the insured's last will and testament"
    ],
    answer: 1,
    explanation: "Incorrect. In the United States, life insurers generally require and accept an official death certificate bearing the authorized signature or seal of a public registrar as standard proof of death."
  },
  {
    id: 36,
    lo: "principle",
    question: "Scenario: An insured covered under a lower-face-amount life insurance policy passes away in a rural international jurisdiction. According to LOMA, besides an official death certificate, what document might the insurer accept as proof of loss for lower-face-amount policies?",
    options: [
      "A financial profit-and-loss spreadsheet",
      "A funeral director’s certificate",
      "An annual tax filing statement",
      "A copy of the initial sales illustration"
    ],
    answer: 1,
    explanation: "Incorrect. For lower-face-amount policies in certain international contexts, some life insurance companies can accept a funeral director's certificate as proof of loss."
  },
  {
    id: 37,
    lo: "principle",
    question: "Besides a death certificate or a funeral director's certificate, which of the following is an accepted document for verifying a loss in some international jurisdictions?",
    options: [
      "An underwriting guidelines manual",
      "An attending physician’s statement (APS) or a coroner's/hospital's certificate of death",
      "A copy of a credit bureau check",
      "A registered billing receipt from a pharmacy database"
    ],
    answer: 1,
    explanation: "Incorrect. Depending on the country and circumstances, acceptable proofs of loss can include an APS or a coroner’s or hospital's certificate of death."
  },
  {
    id: 38,
    lo: "principle",
    question: "Scenario: An insured under a US term policy passes away while traveling in a remote foreign mountain village. What challenges does a claim analyst face in evaluating this proof of death?",
    options: [
      "The state department will automatically cancel the policy.",
      "Documents offered as proof of death may be difficult to obtain, authenticate, or translate, which can increase the likelihood of fraud.",
      "The insurer is legally forced to pay the death benefit in foreign currency.",
      "The suicide exclusion period is automatically restarted."
    ],
    answer: 1,
    explanation: "Incorrect. When an insured dies outside the country of policy issue, the procedures for registering and verifying deaths might not be as rigorous, making documents hard to translate, authenticate, or obtain, and elevating overall fraud risk."
  },
  {
    id: 39,
    lo: "principle",
    question: "Under LOMA, what represents an 'explainable disappearance' of an insured person?",
    options: [
      "A scenario where the insured relocates to another state and stops paying their renewal premiums",
      "A scenario where the insured disappeared as a result of a specific peril that can reasonably account for the disappearance",
      "A scenario where the insured is missing for more than 25 years without any explanation",
      "A scenario where the policy is successfully rescinded inside the contestable period"
    ],
    answer: 1,
    explanation: "Incorrect. An explainable disappearance occurs when the insured disappears due to a specific peril (such as a commercial airplane crash over the ocean where no bodies are recovered) that accounts for the disappearance."
  },
  {
    id: 40,
    lo: "principle",
    question: "Scenario: Marcus is a passenger on a cruise ship that experiences a catastrophic boiler explosion and sinks. Several witness reports confirm Marcus was on board, but his body is never found. How will the claim analyst handle this situation?",
    options: [
      "Close the file permanently and deny the claim.",
      "Accept the claim form and attached reports of the peril as acceptable proof of loss, classify it as an explainable disappearance, and process the claim.",
      "Wait exactly seven years before taking any action.",
      "File an interpleader suit to let the court determine if Marcus is alive."
    ],
    answer: 1,
    explanation: "Incorrect. Because Marcus’s disappearance is explainable by a specific, documented peril (the ship sinking), the analyst will generally accept the reports of the accident as proof of loss and proceed with processing the claim."
  },
  {
    id: 41,
    lo: "principle",
    question: "Scenario: Clara's husband leaves for a routine walk in a safe suburban park and never returns. Months pass, and local police find zero evidence of any accident, foul play, or specific peril. Clara submits a claim. How should the analyst proceed?",
    options: [
      "Pay the claim immediately, as his absence is stressful for Clara.",
      "Classify this as an unexplainable disappearance and close the claim file pending acceptable proof of loss (such as a future court order).",
      "Declare the policy void due to material misrepresentation.",
      "Order a paramedical exam of Clara."
    ],
    answer: 1,
    explanation: "Incorrect. Because no specific peril explains the disappearance, the insurer must classify this as an unexplainable disappearance and close the claim file until acceptable proof of loss (like a court order presuming death) is provided."
  },
  {
    id: 42,
    lo: "principle",
    question: "In the United States, after an unexplainable disappearance occurs, what is the typical statutory period of time that must elapse before a claimant can petition a court for an order presuming the insured's death?",
    options: [
      "One or two years",
      "Five or seven years",
      "Exactly ten years",
      "There is no waiting period"
    ],
    answer: 1,
    explanation: "Incorrect. In many jurisdictions (including the United States), if an insured remains missing with no explanation, the claimant can petition a court for an order presuming death after a continuous period of five or seven years."
  },
  {
    id: 43,
    lo: "principle",
    question: "Scenario: An insured disappears unexplainably. The court eventually issues an order presuming the insured's death after seven years. What must Clara have done during those seven years for the insurer to pay the claim?",
    options: [
      "She must have filed a motion to rescind the policy.",
      "She must have kept the life insurance policy in force (by paying premiums) during the entire period of disappearance.",
      "She must have converted the policy into a mutual fund.",
      "Nothing; life policies are automatically kept in force for free when someone is missing."
    ],
    answer: 1,
    explanation: "Incorrect. To collect the death benefit after an unexplainable disappearance, the policy must have been kept in force (premiums paid) during the entire waiting period. Otherwise, the policy would have lapsed before the presumption of death was established."
  },
  {
    id: 44,
    lo: "principle",
    question: "Scenario: An employer-sponsored group life plan covers employees and their dependents. The child of an employee passes away. How is the claim processed in the insurer's records?",
    options: [
      "Under the child's own separate policy ID number as the contract owner",
      "Under the employee's name (the insured), rather than the name of the deceased dependent",
      "As an annuity payout option",
      "Through a direct retrocession to the reinsurer"
    ],
    answer: 1,
    explanation: "Incorrect. For dependents (spouse or child) covered under a group life policy, the employee is the primary policyholder. Hence, the claim for a deceased dependent is processed under the employee’s name (the insured)."
  },
  {
    id: 45,
    lo: "principle",
    question: "Under LOMA, why do insurers establish strict procedures for authenticating proofs of death that occur in foreign countries?",
    options: [
      "To avoid paying premium taxes to foreign governments",
      "To verify the authenticity of documents and protect against fraud, as death registration systems abroad may be less rigorous",
      "To bypass the need to verify whether the policy is currently in force",
      "To automatically apply a flat extra premium rate"
    ],
    answer: 1,
    explanation: "Incorrect. Foreign death claims carry higher administrative risks because foreign registration systems and documents can be difficult to verify, requiring extra scrutiny to prevent fraudulent filings."
  },
  {
    id: 46,
    lo: "principle",
    question: "Scenario: A claim analyst receives an unexplainable disappearance file. No court order has been issued, and the insured has only been missing for three months. What action will the analyst take?",
    options: [
      "Approve the claim immediately",
      "Close the claim file pending acceptable proof of loss",
      "Rescind the contract immediately and refund the cash value",
      "Assign the case to a jet unit for automated billing"
    ],
    answer: 1,
    explanation: "Incorrect. Without acceptable proof of death or a court order presuming death, the claim analyst must close the claim file pending future proof of loss."
  },

  // ==========================================
  // OBJECTIVE 13E: Suicide and Policy Exclusions (47-57)
  // ==========================================
  {
    id: 47,
    lo: "principle",
    question: "Under LOMA Chapter 13, what are 'exclusions' in a life insurance policy?",
    options: [
      "Clauses that outline who cannot be named as a beneficiary",
      "Provisions that describe specific circumstances or activities under which the insurer will NOT pay the policy’s proceeds following the death of the insured",
      "Methods of paying claims into interest-bearing accounts",
      "The rules for determining which claim analysts have higher approval authority"
    ],
    answer: 1,
    explanation: "Incorrect. Exclusions are policy provisions that define specific situations, hazards, or activities (such as hazardous sports or war) that are not covered under the contract, meaning no benefits will be paid if death results from them."
  },
  {
    id: 48,
    lo: "principle",
    question: "Scenario: A proposed insured frequently participates in high-risk, unlicensed skydiving events. How might the insurer handle this hazardous activity during underwriting?",
    options: [
      "They must deny the application immediately",
      "They can issue the policy with an exclusion for skydiving, or write the policy without the exclusion but charge a higher premium rate",
      "They can issue the policy but limit the beneficiary to the insured's estate",
      "They can force the insured to purchase an annuity payout option"
    ],
    answer: 1,
    explanation: "Incorrect. For hazardous lifestyles or avocations, insurers either exclude the specific activity (meaning no payout if they die from it) or accept the risk but charge a higher-than-average premium."
  },
  {
    id: 49,
    lo: "principle",
    question: "Under LOMA, what is the most common exclusion found in an individual life insurance policy?",
    options: [
      "The hazardous aviation exclusion",
      "The war exclusion",
      "The suicide exclusion",
      "The reckless driving exclusion"
    ],
    answer: 2,
    explanation: "Incorrect. The suicide exclusion is the most common exclusion in individual life insurance policies, designed to protect the insurer from adverse selection."
  },
  {
    id: 50,
    lo: "principle",
    question: "What primary risk does the standard suicide exclusion protect the life insurance company from?",
    options: [
      "The risk of a lapse in the grace period",
      "Antiselection on the part of individuals who purchase life insurance intending to commit suicide shortly thereafter",
      "Reinsurance retrocession disputes",
      "Changes in GAAP or SAP accounting rules"
    ],
    answer: 1,
    explanation: "Incorrect. The suicide exclusion prevents adverse selection (antiselection) by ensuring that individuals cannot buy a policy with the immediate intention of committing suicide to enrich their beneficiaries."
  },
  {
    id: 51,
    lo: "principle",
    question: "Scenario: An individual purchases a life insurance policy with a standard two-year suicide exclusion. Seven months later, the insured dies by suicide. How does LOMA steer the claim analyst’s decision in this case?",
    options: [
      "The insurer pays the full face amount of the policy.",
      "The insurer does not have to pay the policy proceeds, and its liability is limited to refunding the premiums paid, minus any outstanding policy loans.",
      "The insurer does not have to pay any benefits, and all premiums paid are permanently forfeited.",
      "The insurer must pay the accidental death benefit instead."
    ],
    answer: 1,
    explanation: "Incorrect. If suicide occurs within the exclusion period (usually 1 or 2 years), the insurer is not liable for the face amount; it only returns the premiums paid, minus outstanding policy loans."
  },
  {
    id: 52,
    lo: "principle",
    question: "Scenario: An insured purchased a life policy with a standard one-year suicide exclusion. Five years later, the insured tragically dies by suicide. How will the claim analyst handle this claim?",
    options: [
      "Deny the claim and refund only the premiums paid.",
      "Pay the full policy proceeds, because the suicide exclusion period had already expired.",
      "Pay 50% of the proceeds and charge a penalty to the estate.",
      "Rescind the policy retroactive to the issue date."
    ],
    answer: 1,
    explanation: "Incorrect. If suicide occurs after the exclusion period has expired, the suicide exclusion is no longer in effect, and the insurer must pay the full death benefit proceeds."
  },
  {
    id: 53,
    lo: "principle",
    question: "Scenario: A claim analyst is evaluating a death claim that occurred 18 months into a two-year suicide exclusion period. The cause of death is ambiguous. Under LOMA, which party carries the burden of proof to demonstrate suicide in a court of law?",
    options: [
      "The claimant (the beneficiary)",
      "The insurance company (the direct writer)",
      "The independent medical examiner",
      "The state department of insurance"
    ],
    answer: 1,
    explanation: "Incorrect. In most jurisdictions, the burden of proof lies heavily on the insurance company to prove that the death was a result of suicide in order to deny the full benefit payout."
  },
  {
    id: 54,
    lo: "principle",
    question: "Scenario: An employee is covered under an employer’s group term life insurance program. In many group term life policies, how does the suicide exclusion typically differ from individual life insurance?",
    options: [
      "The suicide exclusion period is always extended to 10 years.",
      "Many group term policies do not contain a suicide exclusion, or the suicide exclusion period does not apply.",
      "If group suicide occurs, the insurer pays triple the benefits.",
      "Group policies are immediately rescinded upon any suicide."
    ],
    answer: 1,
    explanation: "Incorrect. Unlike individual life insurance, many group term life insurance policies do not include a suicide exclusion, meaning benefits are payable regardless of the timing or cause of death."
  },
  {
    id: 55,
    lo: "principle",
    question: "Scenario: An insured’s death was caused by a specific hobby that was formally excluded in the policy's rider. How does LOMA guide the analyst’s decision?",
    options: [
      "The insurer pays the claim in full anyway to avoid public criticism.",
      "The insurer denies the claim, because the death resulted from an excluded activity.",
      "The insurer pays 50% of the benefit.",
      "The insurer refers the file to interpleader."
    ],
    answer: 1,
    explanation: "Incorrect. If death is caused by an excluded activity, hazard, or condition, the loss is not covered, and the insurer denies the claim."
  },
  {
    id: 56,
    lo: "principle",
    question: "Why is the suicide exclusion period typically capped at a maximum of one or two years rather than lasting for the entire life of the policy?",
    options: [
      "To encourage policyowners to purchase more annuities",
      "Because after one or two years, the statistical threat of planning a purchase of coverage solely to commit suicide is greatly reduced, making the risk insurable",
      "To comply with federal securities laws governing variable products",
      "Because that is the maximum duration of a group lease"
    ],
    answer: 1,
    explanation: "Incorrect. The risk of standard suicide is insurable if it is not planned at the time of purchase. A 1 or 2-year exclusion effectively deters the adverse selection of buying insurance with immediate suicidal intent."
  },
  {
    id: 57,
    lo: "principle",
    question: "Scenario: Marcus is evaluating a death claim under a life policy. While investigating, he discovers the death was caused by a highly unusual hazard. What should Marcus check to determine if the claim is valid?",
    options: [
      "The insurer's current quarterly stock report",
      "The policy’s list of exclusions to verify whether that specific hazard was excluded from coverage",
      "The agent's statement regarding the client's financial status",
      "The premium tax guidelines for that region"
    ],
    answer: 1,
    explanation: "Incorrect. To determine if a loss is covered, the analyst must check the policy contract's provisions and exclusions to see if the specific cause of death was excluded."
  },

  // ==========================================
  // OBJECTIVE 13F: Calculating the Benefit Amount & Misstatements (58-70)
  // ==========================================
  {
    id: 58,
    lo: "principle",
    question: "Scenario: In calculating the total benefit amount payable for a traditional life insurance policy (Figure 13.5), which of the following items is classified as an ADDITION to the basic death benefit?",
    options: [
      "Outstanding policy loans",
      "Premiums that the policyowner paid in advance",
      "Accrued policy loan interest",
      "Premiums due and unpaid"
    ],
    answer: 1,
    explanation: "Incorrect. Advance premiums represent money the customer paid ahead of schedule. At death, this overpayment is added to the basic face amount payout (Figure 13.5)."
  },
  {
    id: 59,
    lo: "principle",
    question: "Scenario: In calculating a life policy payout (Figure 13.5), which of the following is classified as a SUBTRACTION from the basic death benefit?",
    options: [
      "Accumulated policy dividends",
      "Accidental death benefits payable",
      "Outstanding policy loans and accrued policy loan interest",
      "Paid-up additional coverage"
    ],
    answer: 2,
    explanation: "Incorrect. Any outstanding policy loans and the interest that has accrued on those loans are subtractions that reduce the final payout to the beneficiary (Figure 13.5)."
  },
  {
    id: 60,
    lo: "principle",
    question: "Scenario: An insured dies during the policy's 31-day grace period, and the annual premium has not yet been paid. Under LOMA, how does the analyst handle this premium oversight?",
    options: [
      "The claim is immediately denied and the policy lapses.",
      "The claim is approved, but the premium due and unpaid is subtracted from the basic death benefit.",
      "The claim is paid in full, and the premium oversight is waived automatically.",
      "The insurer charges a flat fee penalty of $5,000 to the beneficiary."
    ],
    answer: 1,
    explanation: "Incorrect. If death occurs during the grace period, the policy remains in force. However, the insurer will subtract the overdue premium from the final death benefit payout (Figure 13.5)."
  },
  {
    id: 61,
    lo: "principle",
    question: "Scenario: An insured previously withdrew $15,000 from her life policy's cash value under a terminal illness acceleration rider. At her death, how are these accelerated benefits treated?",
    options: [
      "They are added to the death benefit as an accidental benefit.",
      "They are subtracted from the final death benefit payable to the beneficiary.",
      "They have no impact on the final payout.",
      "The policy is voided and no further payouts are made."
    ],
    answer: 1,
    explanation: "Incorrect. Any accelerated death benefits paid out during the insured's lifetime are subtracted from the final death benefit payable (Figure 13.5)."
  },
  {
    id: 62,
    lo: "principle",
    question: "Scenario: Marcus is evaluating a death claim with the following record:\n- Basic face amount: $150,000\n- Accidental death benefit rider: $75,000\n- Outstanding policy loan: $12,000\n- Accrued loan interest: $600\n- Policy dividends paid in advance (credit): $1,000\n- Dividends declared but unpaid (addition): $500\nIf the death is ruled a covered accident, what is the correct benefit amount payable?",
    options: [
      "$211,900",
      "$213,900",
      "$225,000",
      "$138,400"
    ],
    answer: 1,
    explanation: "Incorrect. Payout = Face ($150,000) + Accidental ($75,000) + Advance/Unpaid Dividends ($1,000 + $500) - Loan ($12,000) - Interest ($600). Calculation: $150,000 + $75,000 + $1,500 - $12,600 = $213,900."
  },
  {
    id: 63,
    lo: "principle",
    question: "Scenario: Under a life policy, the analyst discovers that the insured’s age was misstated on the application. According to LOMA, how is an age or sex misstatement treated?",
    options: [
      "As a material misrepresentation that rescinds the contract.",
      "As an honest mistake that must be corrected by adjusting the benefit amount.",
      "As a fraudulent act that must be reported to the state agency.",
      "It is ignored in full if the policy is past its contestable period."
    ],
    answer: 1,
    explanation: "Incorrect. Age and sex misstatements are not treated as material misrepresentations, so they do not void the policy. Instead, they are corrected by adjusting the death benefit to what the premiums paid would have purchased at the correct age/sex."
  },
  {
    id: 64,
    lo: "principle",
    question: "Scenario: Franny’s $100,000 life insurance policy shows her age as 40 at issue. Upon her death, the analyst discovers she was actually age 45 at policy issue. Because she was older than stated, how will the analyst adjust the death benefit?",
    options: [
      "Raise the death benefit to $112,500 to cover her advanced age.",
      "Reduce the death benefit to the amount that the premiums actually paid would have purchased for a 45-year-old at issue.",
      "Cancel the policy and refund only the premiums paid.",
      "Pay the full $100,000 but charge her estate a flat fee penalty of $500."
    ],
    answer: 1,
    explanation: "Incorrect. If the insured was older than stated, the premiums paid were too low for that actual risk. The insurer will reduce the death benefit to the amount the premiums would have purchased at the correct, older age."
  },
  {
    id: 65,
    lo: "principle",
    question: "Scenario: An analyst discovers that an insured was actually age 35 at policy issue, though the application listed their age as 40. Since the insured was younger than stated at issue, how is the benefit adjusted?",
    options: [
      "The benefit is kept at the face amount, and the excess premium is kept by the insurer as a fee.",
      "The death benefit is increased to the amount that the premiums paid would have purchased for a 35-year-old at issue.",
      "The policy is voided due to inaccurate information.",
      "The insurer must pay double indemnity proceeds."
    ],
    answer: 1,
    explanation: "Incorrect. If the insured was younger than stated at issue, they overpaid for the risk. The insurer adjusts by increasing the benefit to the amount the premiums paid would have purchased at the correct, younger age."
  },
  {
    id: 66,
    lo: "principle",
    question: "Scenario: Integrity Life adjusts a death benefit due to an age misstatement. Under LOMA, on what premium rates is this benefit adjustment calculated?",
    options: [
      "The insurer’s published premium rates on the date of the insured’s death",
      "The insurer’s published premium rates on the policy issue date",
      "The average pricing assumptions of the state department of insurance",
      "The historical prime interest rate"
    ],
    answer: 1,
    explanation: "Incorrect. Misstatement of age or sex adjustments are calculated based on the insurer's published premium rates on the policy issue date, reflecting the pricing structure in effect when the contract was made."
  },
  {
    id: 67,
    lo: "principle",
    question: "Scenario: An insured dies, and the beneficiary submits a claim. The analyst reviews the file and notices that $5,000 of policy dividends had accumulated on deposit over the years. According to Figure 13.5, these accumulated dividends are:",
    options: [
      "Exempt from payout and retained by the insurer",
      "Added to the basic death benefit pay-out",
      "Subtracted from the basic death benefit",
      "Transferred to a separate account annuity index"
    ],
    answer: 1,
    explanation: "Incorrect. Accumulated policy dividends are cash values owned by the policyholder, which must be added to the basic death benefit payout (Figure 13.5)."
  },
  {
    id: 68,
    lo: "principle",
    question: "Scenario: An insured purchased a supplementary 'accidental death benefit' rider on a $100,000 policy. The insured dies in a verified automobile accident. How much additional money is paid under this supplementary benefit?",
    options: [
      "Nothing, because auto accidents are excluded.",
      "An amount of money in addition to the basic death benefit (typically doubling the payout, known as double indemnity).",
      "Only the return of the premiums paid for the rider.",
      "The entire separate account asset accumulation."
    ],
    answer: 1,
    explanation: "Incorrect. An accidental death benefit is a supplementary benefit under which the insurer pays an additional amount of money (often equal to the face amount) if death results from a covered accident."
  },
  {
    id: 69,
    lo: "principle",
    question: "If an insured dies due to suicide during the suicide exclusion period, what are the subtractions made to determine the final premium refund payout?",
    options: [
      "The insurer subtracts the cost of underwriting and commissions.",
      "The insurer subtracts the amount of any outstanding policy loans from the total premiums paid.",
      "The insurer subtracts nothing and pays the full premiums plus double interest.",
      "The insurer is not required to return anything."
    ],
    answer: 1,
    explanation: "Incorrect. During the suicide exclusion period, the refund of premiums is reduced by any outstanding policy loan balances."
  },
  {
    id: 70,
    lo: "principle",
    question: "Scenario: An insured has a policy with a basic face amount of $200,000. Before his death, he takes out a policy loan of $20,000 and accumulates $1,000 of accrued loan interest. He also has paid $2,000 of premiums in advance. What is the final benefit amount payable?",
    options: [
      "$221,000",
      "$181,000",
      "$179,000",
      "$200,000"
    ],
    answer: 1,
    explanation: "Incorrect. Payout = Face ($200,000) + Advance Premiums ($2,000) - Policy Loan ($20,000) - Accrued Interest ($1,000) = $181,000."
  },

  // ==========================================
  // OBJECTIVE 13G: Policy Settlement Options (71-81)
  // ==========================================
  {
    id: 71,
    lo: "principle",
    question: "Scenario: Upon the death of her mother, Tonya chooses to leave the $100,000 policy proceeds on deposit with Vanguard Life. The insurer periodically sends Tonya interest checks, and she retains the right to withdraw the principal or have it paid to a contingent beneficiary at her death. This is the:",
    options: [
      "Fixed-period option",
      "Interest option",
      "Fixed-amount option",
      "Life income option"
    ],
    answer: 1,
    explanation: "Incorrect. Under the interest option, the policy proceeds are left on deposit with the insurer, which pays interest to the payee at stated intervals. The principal remains intact for future withdrawal or distribution."
  },
  {
    id: 72,
    lo: "principle",
    question: "Scenario: Tonya elects to leave her mother's life insurance proceeds on deposit with the insurer and receive equal monthly payments of principal and interest for exactly the next ten years. Under Figure 13.6, this is the:",
    options: [
      "Interest option",
      "Fixed-period option",
      "Fixed-amount option",
      "Life income option"
    ],
    answer: 1,
    explanation: "Incorrect. Under the fixed-period option, the proceeds are left on deposit and paid out in equal installments of principal and interest over a specified duration of time (e.g., 10 years)."
  },
  {
    id: 73,
    lo: "principle",
    question: "Scenario: Polly Winder decides to leave her father's insurance proceeds with the company and receive a specific monthly payout of $1,200 for as long as the proceeds plus interest last. Under Figure 13.6, this is the:",
    options: [
      "Interest option",
      "Fixed-period option",
      "Fixed-amount option",
      "Life income option"
    ],
    answer: 2,
    explanation: "Incorrect. Under the fixed-amount option, the payee elects to receive a specific, constant dollar payout (e.g., $1,200/month) for as long as the principal and interest last."
  },
  {
    id: 74,
    lo: "principle",
    question: "Scenario: Damian Barrow elects to have his father's life insurance proceeds used to purchase an annuity that will provide him with a series of periodic payments of a specified amount for the remainder of his lifetime. Under Figure 13.6, this is the:",
    options: [
      "Interest option",
      "Fixed-period option",
      "Fixed-amount option",
      "Life income option"
    ],
    answer: 3,
    explanation: "Incorrect. Under the life income option, the proceeds are converted into a life annuity that guarantees periodic payments to the payee for the rest of their life."
  },
  {
    id: 75,
    lo: "principle",
    question: "Scenario: An insurer pays life insurance proceeds into an interest-bearing checking account in the beneficiary's name, allowing them to write checks to withdraw any portion of the funds at any time. This payment method is the:",
    options: [
      "Fixed-period distribution",
      "Retained asset account (RAA) option",
      "Mutual clearing option",
      "Unilateral escrow option"
    ],
    answer: 1,
    explanation: "Incorrect. A retained asset account (RAA) is an interest-bearing account in the payee's name where proceeds are deposited, allowing the beneficiary to withdraw funds easily via draft checks."
  },
  {
    id: 76,
    lo: "principle",
    question: "Scenario: Several competing beneficiaries file conflicting claims for a $500,000 policy. The claim analyst cannot determine who should legally receive the proceeds. To resolve this, what legal process will the insurer initiate in the United States?",
    options: [
      "Rescission",
      "Interpleader",
      "Arbitration",
      "Retrocession"
    ],
    answer: 1,
    explanation: "Incorrect. Interpleader is a legal process where an insurer pays the disputed proceeds into a court, asks the court to determine the rightful payee, and is discharged from further liability."
  },
  {
    id: 77,
    lo: "principle",
    question: "Why is the interpleader process highly valuable to a life insurance company in cases where multiple claimants dispute a benefit payout?",
    options: [
      "Because it is entirely free of legal expenses for the insurer",
      "Because it eliminates the risk that the insurer may have to pay the proceeds more than once for the same claim",
      "Because it automatically assigns the proceeds to the insurer's general account",
      "Because it forces the claimants to accept an annuity payout option"
    ],
    answer: 1,
    explanation: "Incorrect. Interpleader protects the insurer from double exposure (accidentally paying two different claimants) by letting the court rule on the correct payee, though the legal costs can be high."
  },
  {
    id: 78,
    lo: "principle",
    question: "Scenario: In checking a deceased's file, a claim analyst discovers the named beneficiary was convicted of murdering of the insured. Under LOMA, how is the payee identified?",
    options: [
      "The murderer is paid in full to fulfill contract terms.",
      "The murderer is disqualified by law from receiving proceeds, and the benefit is typically paid to contingent beneficiaries or the insured's estate.",
      "The policy is voided and no one is paid.",
      "The files are sent to the SEC for standard escrow."
    ],
    answer: 1,
    explanation: "Incorrect. Under 'slayer statutes' and standard insurance law, a beneficiary convicted of killing the insured is disqualified from receiving the policy proceeds."
  },
  {
    id: 79,
    lo: "principle",
    question: "Scenario: A policyowner dies, and there are no surviving named beneficiaries on the active life insurance policy. To whom does LOMA instruct the insurer to pay the proceeds?",
    options: [
      "The state department of insurance",
      "The insured's estate",
      "The local writing agent",
      "A charitable foundation of the insurer's choosing"
    ],
    answer: 1,
    explanation: "Incorrect. If no named primary or contingent beneficiaries survive the insured, the death benefit is paid to the insured's estate."
  },
  {
    id: 80,
    lo: "principle",
    question: "Scenario: In checking a claim on a policy that was reinsured, when does the direct writer request reimbursement from the reinsurer?",
    options: [
      "Before paying the beneficiary, to ensure they have the cash",
      "After approving and paying the full policy proceeds to the beneficiary first",
      "Rebated automatically through a state premium tax pool",
      "After the contestable period expires, regardless of when death occurred"
    ],
    answer: 1,
    explanation: "Incorrect. For reinsured claims, the direct writer (the company that issued the policy) pays the beneficiary the full amount and then submits a claim to the reinsurer for reimbursement of the reinsured portion."
  },
  {
    id: 81,
    lo: "principle",
    question: "Scenario: A reinsurer disagrees with a direct writer's decision to approve a claim on a reinsured policy. Under LOMA, who has the final authority to approve or deny the claim?",
    options: [
      "The reinsurer, since they pool the ultimate risk",
      "The direct writer, because the reinsurer is not a party to the underlying contract",
      "The NAIC",
      "The federal Department of Insurance"
    ],
    answer: 1,
    explanation: "Incorrect. The final decision rests with the direct writer because the reinsurer is not a direct party to the policy contract between the insurer and the policyowner."
  },

  // ==========================================
  // OBJECTIVE 13H: Investigations, Fraud, SIU, & Controls (82-89)
  // ==========================================
  {
    id: 82,
    lo: "principle",
    question: "Scenario: An insurer discovers that a beneficiary submitted a death claim on a newly issued policy, but the insured had actually died under mysterious, unexplained circumstances. To resolve this, what specialized corporate team will handle this file?",
    options: [
      "The product development committee",
      "The special investigative unit (SIU)",
      "The general corporate accounting team",
      "The underwriting billing jet unit"
    ],
    answer: 1,
    explanation: "Incorrect. Most life insurers establish a special investigative unit (SIU)—a team of claim, legal, and audit specialists—to detect, investigate, and resolve suspected cases of fraud."
  },
  {
    id: 83,
    lo: "principle",
    question: "Scenario: An applicant pays a healthier friend to take his physical exam under his name so he can qualify for a standard preferred rate. Under LOMA, this action is a prime example of:",
    options: [
      "An explainable disappearance",
      "Claim fraud",
      "A mistaken claim",
      "A non-material misstatement"
    ],
    answer: 1,
    explanation: "Incorrect. Hiring a healthy double to take a medical exam is an intentional, deceptive act to secure policy coverage illegally, representing claim fraud."
  },
  {
    id: 84,
    lo: "principle",
    question: "Scenario: A policyowner purchases coverage on several vulnerable, homeless individuals, lies about having an insurable relationship, and collects the face amount when they pass away. This is:",
    options: [
      "A mistaken claim",
      "Claim fraud",
      "A standard settlement option",
      "An explainable hazard"
    ],
    answer: 1,
    explanation: "Incorrect. Fabricating relative status and buying policies on strangers to profit from their deaths is a highly illegal form of claim fraud."
  },
  {
    id: 85,
    lo: "principle",
    question: "Scenario: In monitoring compliance, Vanguard Life’s internal auditors pull a random batch of recently approved and denied claims to check if decisions match policy wording and timeliness standards. This audit represents which type of administrative control?",
    options: [
      "Steering control",
      "Feedback control",
      "Concurrent control",
      "Pretext control"
    ],
    answer: 1,
    explanation: "Incorrect. Internal and external audits of approved or denied claims evaluate actions that have already occurred, making them feedback controls (Figure 13.7)."
  },
  {
    id: 86,
    lo: "principle",
    question: "Scenario: Integrity Life's guidelines require that any claim check exceeding $500,000 must be reviewed and signed off by a senior supervisor before it can be printed and mailed. According to Figure 13.7, this is a:",
    options: [
      "Steering control",
      "Concurrent control",
      "Feedback control",
      "Pre-licensing control"
    ],
    answer: 1,
    explanation: "Incorrect. Controls that operate actively during the process of a transaction (such as requiring a supervisor's countersignature on checks above a certain threshold) are concurrent controls (Figure 13.7)."
  },
  {
    id: 87,
    lo: "principle",
    question: "According to LOMA Chapter 13 (Figure 13.7), which of the following is classified as a 'steering control' in claim administration?",
    options: [
      "Internal audit of denied claims",
      "The insurer’s claim philosophy and claim guidelines",
      "Supervisory approval on high-value checks",
      "Underwriting reviews during the contestable period"
    ],
    answer: 1,
    explanation: "Incorrect. Steering controls guide organizational behavior before actions occur. Prime examples include the insurer's formal claim philosophy, guidelines, and employee training (Figure 13.7)."
  },
  {
    id: 88,
    lo: "principle",
    question: "Scenario: A life insurer uses data analytics to scan its massive repository of past claims to search for patterns, timing, and behavioral anomalies that correlate with fraudulent activities. What is the goal of this analysis?",
    options: [
      "To automatically deny all claims that contain a policy loan subtraction",
      "To identify claims that indicate a heightened risk of fraud, allowing the insurer to flag them for further investigation",
      "To eliminate the need to obtain any official death certificates",
      "To bypass state model unfair claim practice laws"
    ],
    answer: 1,
    explanation: "Incorrect. Data analytics helps insurers identify statistical predictors and behaviors linked to fraud, allowing analysts to proactively flag files for further SIU review."
  },
  {
    id: 89,
    lo: "principle",
    question: "Scenario: An insurer discovers that an applicant’s body was cremated with extreme haste in a foreign country where none of their relatives reside. How should a claim analyst treat this record?",
    options: [
      "Disregard it and pay the claim instantly to avoid delays",
      "Flag it as a suspicious/unusual circumstance and perform further claim investigation",
      "Automatically rescind the policy without any review",
      "Pay the proceeds directly to the local writing agent"
    ],
    answer: 1,
    explanation: "Incorrect. Hasty cremations or burials in countries with no ties to the insured are red flags for potential fraud, necessitating a thorough investigation."
  },

  // ==========================================
  // OBJECTIVE 13I: Regulatory Requirements (90-94)
  // ==========================================
  {
    id: 90,
    lo: "principle",
    question: "In the United States, most state laws governing the practices of claim processing are modeled directly on which NAIC act?",
    options: [
      "The GLB privacy act",
      "The Model Unfair Claims Settlement Practices Act",
      "The Fair Credit Reporting Act",
      "The NAIC Model Privacy Act"
    ],
    answer: 1,
    explanation: "Incorrect. The Model Unfair Claims Settlement Practices Act, developed by the NAIC, is the template adopted by states to define and outlaw unfair claim behaviors."
  },
  {
    id: 91,
    lo: "principle",
    question: "Under the Model Unfair Claims Settlement Practices Act, which of the following is defined as a prohibited, unfair claim practice?",
    options: [
      "Refusing to pay a claim if the policy was not in force at the time of the loss",
      "Failing to promptly acknowledge receipt of claim-related communications",
      "Initiating an interpleader process when payees are ambiguous",
      "Ordering a credit report for a personal underwriting check"
    ],
    answer: 1,
    explanation: "Incorrect. Prohibited practices under the NAIC model act include failing to promptly acknowledge communications, failing to affirm/deny coverage within a reasonable time, and offering unreasonably low settle-out amounts (inducing lawsuits)."
  },
  {
    id: 92,
    lo: "principle",
    question: "Scenario: Vanguard Life receives a clear proof of loss, completes its investigation, but delays affirming or denying coverage for nine months with no explanation. Under the Model Unfair Claims Settlement Practices Act, this delay violates the rule against:",
    options: [
      "Basing settlements on materially altered applications",
      "Failing to affirm or deny coverage of claims within a reasonable time after the claim investigation is completed",
      "Failing to report suspected fraud to the SEC",
      "Failing to utilize standard settlement options"
    ],
    answer: 1,
    explanation: "Incorrect. Insurers are legally required to make a decision to affirm or deny coverage within a reasonable time frame once their investigations are complete."
  },
  {
    id: 93,
    lo: "principle",
    question: "Scenario: To settle a legitimate $100,000 claim, Vanguard Life offers a beneficiary $15,000, telling them that if they want more, they will have to file an expensive lawsuit. Which prohibited practice under the NAIC model act does this violate?",
    options: [
      "Compelling claimants to initiate lawsuits to recover death benefits by offering substantially less than the amounts due",
      "Attempting to settle claims based on applications that were altered with knowledge",
      "Failing to conduct audits on denied claims",
      "Failing to notify the third-party administrator"
    ],
    answer: 0,
    explanation: "Incorrect. Forcing claimants into litigation by making lowball settlement offers is a prohibited, unfair claims practice under the NAIC Model Act."
  },
  {
    id: 94,
    lo: "principle",
    question: "Under standard privacy regulations, what is the 'pretext' guideline regarding claim investigations?",
    options: [
      "Insurers are encouraged to lie about their identity to gather medical records.",
      "Many jurisdictions prohibit insurers from conducting a claim investigation under a false pretext (pretending to be someone else or hiding their purpose) in most circumstances.",
      "Insurers are exempt from child privacy laws during an SIU investigation.",
      "Pretexting is only allowed if the policy is in its first month of coverage."
    ],
    answer: 1,
    explanation: "Incorrect. Privacy and insurance laws restrict deceptive investigative methods, generally banning insurers from using false pretexts (deceitful personas or pretexts) to obtain records."
  },

  // ==========================================
  // OBJECTIVE 13J: Annuity Death Benefit & Payout Options (95-100)
  // ==========================================
  {
    id: 95,
    lo: "principle",
    question: "Scenario: An annuitant passes away during the accumulation phase of his deferred annuity contract. Under standard deferred annuity terms, what does the insurer pay as a death benefit?",
    options: [
      "The face value of the contract's basic term rider plus 10%",
      "The greater of (1) the premium amount paid into the contract, or (2) the contract’s accumulation value on the day the insurer receives proofs of loss",
      "Nothing, because annuity cash accumulation is forfeited upon death during accumulation",
      "The flat extra premium multiplied by the annuity units"
    ],
    answer: 1,
    explanation: "Incorrect. The death benefit of a deferred annuity during its accumulation phase is typically the greater of the premiums paid in or the contract's accumulation value on the day proof of death is received."
  },
  {
    id: 96,
    lo: "principle",
    question: "How do individual annuity death benefit payouts typically differ from life insurance death benefit payouts regarding federal income taxes?",
    options: [
      "Annuity death benefits are completely tax-free to the beneficiary, while life insurance is fully taxable.",
      "Unlike life insurance death benefits (which are generally tax-free), annuity death benefits typically result in taxable income to the beneficiary.",
      "Neither product has any tax implications or reporting requirements.",
      "Annuities are subject to state sales tax while life insurance has a stamp duty."
    ],
    answer: 1,
    explanation: "Incorrect. While life insurance proceeds paid to a beneficiary are generally income tax-free under U.S. law, annuity death benefit gains are taxable, requiring the insurer to obtain tax IDs and report distributions."
  },
  {
    id: 97,
    lo: "principle",
    question: "Scenario: John chooses an annuity payout option that provides him with scheduled monthly payments for the rest of his life. If John passes away after only receiving three payments, the insurer stops all future payouts and retains the remaining cash. According to Figure 13.8, this is a:",
    options: [
      "Joint and survivor life annuity",
      "Life annuity (also called a life only annuity)",
      "Life income with period certain annuity",
      "Life income with refund annuity"
    ],
    answer: 1,
    explanation: "Incorrect. A life annuity (life-only) makes periodic payments solely for the duration of the annuitant’s lifetime. No benefits continue to a beneficiary or estate once the annuitant dies, even if they die very early."
  },
  {
    id: 98,
    lo: "principle",
    question: "Scenario: John and Mary purchase an annuity payout option that provides a continuous stream of monthly payments based on their joint lives, which will continue without reduction until the second of them passes away. This represents a:",
    options: [
      "Life income with refund annuity",
      "Joint and survivor life annuity",
      "Fixed-period annuity distribution",
      "Life income with period certain annuity"
    ],
    answer: 1,
    explanation: "Incorrect. A joint and survivor life annuity provides scheduled periodic income payments based on the life expectancies of two or more individuals, continuing until the last surviver dies."
  },
  {
    id: 99,
    lo: "principle",
    question: "Scenario: An annuitant selects a 'life income with period certain' annuity payout option with a 10-year certain period. If the annuitant passes away seven years after starting payouts, how does the insurer handle the remaining benefit?",
    options: [
      "All payments stop immediately and the remaining cash is kept by the insurer.",
      "The insurer will continue making scheduled payments to the designated contingent payee for the remaining three years of the certain period.",
      "The insurer is legally forced to pay a lump sum of $500,000 to the estate.",
      "The insurer converts the annuity to a standard standard life policy."
    ],
    answer: 1,
    explanation: "Incorrect. A life income with period certain guarantees lifetime payments, plus a minimum guaranteed duration (the certain period, e.g., 10 years). If the annuitant dies before that period ends, payments continue to the beneficiary for the remaining years."
  },
  {
    id: 100,
    lo: "principle",
    question: "Scenario: An annuitant selects a 'life income with refund annuity' (refund annuity). If the annuitant passes away before receiving total annuity payments equal to the contract's purchase price, how does the insurer settle the contract?",
    options: [
      "The insurer stops all payments and retains the cash.",
      "The insurer issues a refund to the contingent payee equal to the difference between the purchase price and the amount that has been paid out.",
      "The insurer pays double the remaining purchase price to the state.",
      "The insurer converts the remaining balance into a variable term index fund."
    ],
    answer: 1,
    explanation: "Incorrect. A refund annuity guarantees that at least the purchase price will be returned. If the annuitant dies before this threshold is met in benefits, the insurer refunds the remaining untransferred principal to the contingent payee."
  }
];
