import { Question } from '../../types';

export const glossaryQuestions: Question[]=[
  {
    id: 1,
    lo: "Glossary",
    question: "The Summit Corporation established a retirement plan that allows its employees to make pre-tax contributions from their salaries. The company also matches a portion of these contributions. This type of qualified retirement plan is known as a",
    options: ["401(k) plan", "403(b) plan", "457(b) plan", "Simplified Employee Pension (SEP)"],
    answer: 0,
    explanation: "A 401(k) plan is a qualified retirement plan established by employers that allows both employers and employees to make specified contributions to the plan that reduce current taxable income."
  },
  {
    id: 2,
    lo: "Glossary",
    question: "Grace works as a teacher at a public secondary school. Her employer offers a tax-advantaged retirement plan specifically designed for employees of public schools and certain tax-exempt organizations. This plan is a",
    options: ["401(k) plan", "403(b) plan", "457(b) plan", "Profit sharing plan"],
    answer: 1,
    explanation: "A 403(b) plan is a tax-advantaged retirement plan available only to tax-exempt organizations established for religious, charitable, and educational purposes and public schools."
  },
  {
    id: 3,
    lo: "Glossary",
    question: "Marcus is an employee of a local municipal government. He participates in a deferred compensation plan established by the state government for its employees. This plan is typically categorized as a",
    options: ["401(k) plan", "403(b) plan", "457(b) plan", "Simplified Employee Pension (SEP)"],
    answer: 2,
    explanation: "A 457(b) plan is a deferred compensation plan established by a state or local government or a tax-exempt organization."
  },
  {
    id: 4,
    lo: "Glossary",
    question: "Mr. Henderson decided to transfer all of his ownership rights in his life insurance policy to his daughter, Maya, permanently and irrevocably. This transfer of ownership is known as a(n)",
    options: ["collateral assignment", "absolute assignment", "endorsement", "revocable designation"],
    answer: 1,
    explanation: "An absolute assignment is an irrevocable assignment of a life insurance policy under which a policyowner transfers all of his policy ownership rights to the assignee."
  },
  {
    id: 5,
    lo: "Glossary",
    question: "Regina has been diagnosed with a terminal illness and has a life expectancy of less than 12 months. Her life insurance policy includes a provision that allows her to receive a portion of the death benefit now to help pay for medical costs. This benefit is a(n)",
    options: ["accidental death benefit", "double indemnity benefit", "accelerated death benefit", "paid-up additions option"],
    answer: 2,
    explanation: "An accelerated death benefit (or living benefit) is a supplemental benefit that typically provides that a policyowner may elect to receive all or part of the policy’s death benefit before the insured’s death, if certain conditions (like terminal illness) are met."
  },
  {
    id: 6,
    lo: "Glossary",
    question: "In the process of forming an insurance contract, the insurer issued a policy exactly as applied for by the applicant. By receiving and agreeing to the terms of the offer, the offeree has provided a(n)",
    options: ["consideration", "acceptance", "mutual assent", "lawful purpose"],
    answer: 1,
    explanation: "Acceptance is the offeree’s unqualified agreement to be bound to the terms of the offer."
  },
  {
    id: 7,
    lo: "Glossary",
    question: "Timothy was involved in a serious car accident that resulted in the loss of both of his legs. His life insurance policy includes a rider that pays a specific sum for such a loss. This rider is known as a(n)",
    options: ["accidental death benefit", "living benefit", "accidental death and dismemberment (AD&D) benefit", "waiver of premium for disability benefit"],
    answer: 2,
    explanation: "An AD&D benefit provides an accidental death benefit and also provides a dismemberment benefit payable if an accident causes the insured to lose any two limbs or sight in both eyes."
  },
  {
    id: 8,
    lo: "Glossary",
    question: "Sarah’s life insurance policy has a face amount of $100,000 and a supplemental benefit that pays an additional $100,000 if she dies due to a covered accident. If Sarah dies in a plane crash, the insurer will pay $200,000. The supplemental $100,000 is a(n)",
    options: ["accelerated death benefit", "accidental death benefit", "survivor benefit", "face amount adjustment"],
    answer: 1,
    explanation: "An accidental death benefit requires the insurer to pay a specified amount of money in addition to the policy’s basic death benefit if the insured dies as a result of an accident."
  },
  {
    id: 9,
    lo: "Glossary",
    question: "Nora owns a deferred annuity. The current value of her contract, which includes the total premiums paid plus interest earned, minus any fees or withdrawals, is $45,000. This $45,000 is referred to as the",
    options: ["cash surrender value", "accumulated value", "annuity unit value", "payout amount"],
    answer: 1,
    explanation: "For a deferred annuity, the accumulated value (or contract value/account value) is the amount paid for the annuity, plus the interest earned, minus withdrawals and fees."
  },
  {
    id: 10,
    lo: "Glossary",
    question: "James receives annual dividends from his participating life insurance policy. He has elected to leave these dividends with the insurer to earn interest, rather than taking them in cash. This dividend option is the",
    options: ["cash dividend option", "premium reduction dividend option", "accumulation at interest dividend option", "paid-up additions dividend option"],
    answer: 2,
    explanation: "Under the accumulation at interest dividend option, policy dividends are left on deposit with the insurer to accumulate at interest."
  },
  {
    id: 11,
    lo: "Glossary",
    question: "Sofia purchased a deferred annuity at age 35, planning to start receiving payments at age 65. The 30-year span between the purchase date and the date payments begin is the",
    options: ["payout period", "liquidation period", "accumulation period", "grace period"],
    answer: 2,
    explanation: "The accumulation period is the period between the contract owner’s purchase of a deferred annuity and either the date when the annuity’s payout period begins or the date when the annuity is terminated."
  },
  {
    id: 12,
    lo: "Glossary",
    question: "In a variable deferred annuity, the ownership shares that represent the value of the policyowner's investment in a specific subaccount during the growth phase are called",
    options: ["annuity units", "accumulation units", "payout units", "stock units"],
    answer: 1,
    explanation: "An accumulation unit is an ownership share in a selected subaccount held during the accumulation period of a variable deferred annuity."
  },
  {
    id: 13,
    lo: "Glossary",
    question: "LMN Corporation offers a group life insurance plan to its employees. The plan states that an employee must be present and performing their duties on the day the coverage is scheduled to start to be eligible. This is an example of a(n)",
    options: ["eligibility period", "probationary period", "actively-at-work provision", "waiting period"],
    answer: 2,
    explanation: "An actively-at-work provision states that to be eligible for coverage, an employee must be actively at work—rather than ill or on leave—on the day the insurance coverage is to take effect."
  },
  {
    id: 14,
    lo: "Glossary",
    question: "A long-term care insurance policy uses specific functional metrics to determine if an insured is eligible for benefits. These metrics, which include bathing, dressing, and eating, are known as",
    options: ["instrumental activities of daily living", "activities of daily living (ADLs)", "cognitive impairments", "physical impairments"],
    answer: 1,
    explanation: "ADLs are activities used to measure a person’s functional status, such as eating, bathing, dressing, continence, toileting, and transferring."
  },
  {
    id: 15,
    lo: "Glossary",
    question: "Brian is a professional who uses mathematical models and statistical analysis to assess risk and set premium rates for an insurance company. Brian is a(n)",
    options: ["underwriter", "claim adjuster", "actuary", "insurance commissioner"],
    answer: 2,
    explanation: "An actuary is an expert in financial risk management and the mathematics and modeling of insurance, annuities, and financial instruments."
  },
  {
    id: 16,
    lo: "Glossary",
    question: "Maria has a participating life insurance policy. She chooses to have the insurer use her dividends to buy one-year term insurance on her life. This is the",
    options: ["paid-up additions dividend option", "cash dividend option", "additional term insurance dividend option", "accumulation at interest dividend option"],
    answer: 2,
    explanation: "The additional term insurance dividend option uses dividends to purchase one-year term insurance on the insured’s life."
  },
  {
    id: 17,
    lo: "Glossary",
    question: "The parties to a life insurance contract provide something of value to each other, but the eventual payout by the insurer depends on the occurrence of an uncertain event (death). This makes the contract",
    options: ["commutative", "aleatory", "unilateral", "formal"],
    answer: 1,
    explanation: "An aleatory contract is one in which one party provides something of value in exchange for a conditional promise (the payout depends on an uncertain event)."
  },
  {
    id: 18,
    lo: "Glossary",
    question: "Insurer ABC must prepare a detailed accounting report every year and file it with the state insurance departments where it conducts business. This report is the",
    options: ["Balance Sheet", "Annual Statement", "Market Conduct Report", "Certificate of Authority"],
    answer: 1,
    explanation: "The Annual Statement is an accounting statement prepared each calendar year and filed with the insurance departments in the states where the insurer operates."
  },
  {
    id: 19,
    lo: "Glossary",
    question: "John purchased an annuity contract. The payments he will receive are based on the life expectancy of his wife, Mary. In this contract, Mary is the",
    options: ["contract owner", "annuitant", "beneficiary", "payee"],
    answer: 1,
    explanation: "The annuitant is the person whose lifetime the insurer uses to determine the amount and duration of annuity payments."
  },
  {
    id: 20,
    lo: "Glossary",
    question: "A financial product that provides a series of periodic payments to an individual is defined as a(n)",
    options: ["life insurance policy", "annuity", "mutual fund", "certificate of deposit"],
    answer: 1,
    explanation: "An annuity is defined simply as a series of periodic payments."
  },
  {
    id: 21,
    lo: "Glossary",
    question: "An agreement where an insurer promises to pay a person a series of regular payments in exchange for a premium is a(n)",
    options: ["insurance policy", "annuity contract", "dividend option", "settlement option"],
    answer: 1,
    explanation: "An annuity contract is a contract under which an insurer promises to make a series of periodic payments to a named individual in exchange for a premium."
  },
  {
    id: 22,
    lo: "Glossary",
    question: "When Kevin’s annuity reaches the payout phase, he must decide whether he wants payments for life or for a fixed period of 10 years. These choices are known as",
    options: ["dividend options", "nonforfeiture options", "annuity options", "conversion privileges"],
    answer: 2,
    explanation: "Annuity options (or payout options) are the choices a contract owner has as to how the insurer will distribute the annuity payments."
  },
  {
    id: 23,
    lo: "Glossary",
    question: "The date specified in an annuity contract when the insurer is required to begin making periodic payments to the payee is the",
    options: ["issue date", "annuity start date", "maturity date", "expiration date"],
    answer: 1,
    explanation: "The annuity start date (or commencement date) is the date when the insurer is required to begin making annuity payments."
  },
  {
    id: 24,
    lo: "Glossary",
    question: "During the payout period of a variable annuity, the number of these shares remains constant, but their value fluctuates based on the performance of the subaccounts. These are called",
    options: ["accumulation units", "annuity units", "stock units", "investment units"],
    answer: 1,
    explanation: "An annuity unit is a share in an insurer’s subaccount that is used in the calculation of variable annuity payments."
  },
  {
    id: 25,
    lo: "Glossary",
    question: "The underwriting department at Insurer XYZ noticed that individuals with pre-existing heart conditions are more likely to apply for their life insurance than healthy individuals. This trend is known as",
    options: ["moral hazard", "antiselection", "risk avoidance", "risk transfer"],
    answer: 1,
    explanation: "Antiselection (adverse selection) is the tendency of individuals who believe they have a greater-than-average likelihood of loss to seek insurance protection more than others."
  },
  {
    id: 26,
    lo: "Glossary",
    question: "Mrs. Kim filled out a form to request a life insurance policy from an insurance company. In this scenario, Mrs. Kim is the",
    options: ["assignee", "beneficiary", "applicant", "policyowner"],
    answer: 2,
    explanation: "An applicant is the person or business that applies for an insurance policy."
  },
  {
    id: 27,
    lo: "Glossary",
    question: "An insurance company's buildings, investment portfolio, and cash reserves are together classified as its",
    options: ["liabilities", "assets", "surplus", "equity"],
    answer: 1,
    explanation: "Assets are items of value, such as cash, buildings, and investments, that a company owns."
  },
  {
    id: 28,
    lo: "Glossary",
    question: "When Robert assigned his life insurance policy to a bank as security for a loan, the bank became the",
    options: ["assignor", "assignee", "beneficiary", "policyowner"],
    answer: 1,
    explanation: "The assignee is the party to whom life insurance property rights are transferred."
  },
  {
    id: 29,
    lo: "Glossary",
    question: "When Robert assigned his life insurance policy to a bank as security for a loan, Robert acted as the",
    options: ["assignor", "assignee", "successor payee", "contingent beneficiary"],
    answer: 0,
    explanation: "The assignor is the policyowner who makes an assignment of a life insurance policy."
  },
  {
    id: 30,
    lo: "Glossary",
    question: "Li applied for life insurance on January 1, 2024. As of that date, she is exactly 45 years old. This age is her",
    options: ["issue age", "attained age", "maturity age", "annuitant age"],
    answer: 1,
    explanation: "Attained age is the age the insured has reached on a specified date."
  },
  {
    id: 31,
    lo: "Glossary",
    question: "Yusuf converted his term life insurance policy to a whole life policy at age 50. The premium for his new policy is based on his current age of 50. This is a(n)",
    options: ["original age conversion", "attained age conversion", "grace period conversion", "automatic conversion"],
    answer: 1,
    explanation: "An attained age conversion is a conversion where the premium for the new policy is based on the insured’s age at the time of conversion."
  },
  {
    id: 32,
    lo: "Glossary",
    question: "Mr. Brown’s whole life policy lapsed after the grace period ended because he didn't pay the premium. Since he didn't select an option, the insurer automatically applied the extended term insurance feature. This is a(n)",
    options: ["automatic premium loan", "automatic nonforfeiture benefit", "dividend option", "reinstatement right"],
    answer: 1,
    explanation: "An automatic nonforfeiture benefit becomes effective automatically when a premium is not paid by the end of the grace period and the owner hasn't chosen an option."
  },
  {
    id: 33,
    lo: "Glossary",
    question: "Linda’s policy has a provision that allows the insurer to pay an overdue premium by taking a loan against the policy's cash value, preventing a lapse. This is the",
    options: ["automatic nonforfeiture benefit", "automatic premium loan (APL) option", "cash dividend option", "collateral assignment"],
    answer: 1,
    explanation: "The APL option allows the insurer to automatically pay an overdue premium by making a loan against the policy’s cash value."
  },
  {
    id: 34,
    lo: "Glossary",
    question: "In a business insurance deal, two large corporations negotiated every detail of their agreement as equals. This resulting contract is a(n)",
    options: ["contract of adhesion", "bargaining contract", "aleatory contract", "unilateral contract"],
    answer: 1,
    explanation: "A bargaining contract is one in which both parties, as equals, set the terms and conditions. Most individual insurance is NOT a bargaining contract."
  },
  {
    id: 35,
    lo: "Glossary",
    question: "An insurance plan that provides separate reimbursement limits for hospital stays, surgeries, and doctor visits is providing",
    options: ["major medical coverage", "comprehensive health insurance", "basic medical expense coverage", "long-term care insurance"],
    answer: 2,
    explanation: "Basic medical expense coverage provides separate benefits for hospital, surgical, and physicians' expenses."
  },
  {
    id: 36,
    lo: "Glossary",
    question: "In a life insurance policy, Sarah named her son, Leo, to receive the $500,000 death benefit when she dies. Leo is the",
    options: ["assignee", "beneficiary", "payee", "policyowner"],
    answer: 1,
    explanation: "A beneficiary is the person or party the policyowner names to receive the policy benefit."
  },
  {
    id: 37,
    lo: "Glossary",
    question: "A company’s retirement plan calculates an employee's future pension based on their average salary and years of service. This calculation method is a(n)",
    options: ["benefit schedule", "benefit formula", "contribution limit", "annuity option"],
    answer: 1,
    explanation: "A benefit formula describes the calculation of a plan’s financial obligation to participants in a retirement plan."
  },
  {
    id: 38,
    lo: "Glossary",
    question: "Sandra has a disability income policy that will pay her monthly benefits for a maximum of 5 years for a single disability. This 5-year limit is the",
    options: ["waiting period", "elimination period", "benefit period", "accumulation period"],
    answer: 2,
    explanation: "In a disability income policy, the benefit period is the time period during which the insurer agrees to pay income benefits."
  },
  {
    id: 39,
    lo: "Glossary",
    question: "A group life insurance master contract states that 'Managers receive $100,000 of coverage, and Staff receive $50,000.' This definition of coverage amounts is the",
    options: ["benefit formula", "payout factor", "benefit schedule", "risk classification"],
    answer: 2,
    explanation: "A benefit schedule defines the amount of life insurance the policy provides for each group insured (often by job class or salary)."
  },
  {
    id: 40,
    lo: "Glossary",
    question: "A long-term care policy requires the insured to be unable to perform two ADLs or have a cognitive impairment to start receiving benefits. These requirements are",
    options: ["exclusions", "benefit triggers", "waiting periods", "nonforfeiture benefits"],
    answer: 1,
    explanation: "A benefit trigger is a policy feature specifying the conditions that establish an insured’s eligibility to receive long-term care benefits."
  },
  {
    id: 41,
    lo: "Glossary",
    question: "A contract where both parties make legally enforceable promises to each other at the time the contract is formed is a(n)",
    options: ["unilateral contract", "aleatory contract", "bilateral contract", "contract of adhesion"],
    answer: 2,
    explanation: "A bilateral contract involves legally enforceable promises from both parties (insurance is usually unilateral, not bilateral)."
  },
  {
    id: 42,
    lo: "Glossary",
    question: "An insurer calculates a group's premium by using both the group’s specific claim history and standard industry data for that type of group. This is",
    options: ["manual rating", "experience rating", "blended rating", "manual underwriting"],
    answer: 2,
    explanation: "Blended rating uses a combination of manual (industry averages) and experience (the group's history) rating."
  },
  {
    id: 43,
    lo: "Glossary",
    question: "An insurer groups together a thousand policies issued to 30-year-old non-smoking females to better track their mortality experience. This group is a(n)",
    options: ["association group", "block of policies", "risk class", "common interest association"],
    answer: 1,
    explanation: "A block of policies is a group of policies issued to insureds who are all the same age, same sex, and in the same risk classification."
  },
  {
    id: 44,
    lo: "Glossary",
    question: "The partners of a small firm purchased insurance to ensure the business remains solvent and structured if one partner dies. This is a(n)",
    options: ["key person plan", "business continuation insurance plan", "estate plan", "buy-sell agreement"],
    answer: 1,
    explanation: "A business continuation insurance plan is designed to ensure the continued financial viability of a business when faced with the death or disability of an owner/key person."
  },
  {
    id: 45,
    lo: "Glossary",
    question: "A legal agreement between two business owners states that if one dies, the survivor MUST purchase the deceased's share, and the estate MUST sell it. This is a(n)",
    options: ["absolute assignment", "collateral assignment", "buy-sell agreement", "business continuation plan"],
    answer: 2,
    explanation: "A buy-sell agreement is a contract where one party agrees to buy the interest of another owner upon their death, and the other agrees to have their estate sell it."
  },
  {
    id: 46,
    lo: "Glossary",
    question: "Herman has a health plan where he must pay the first $1,500 of his medical expenses every year before the insurer starts paying. This is a(n)",
    options: ["stop-loss provision", "usual, customary, and reasonable fee", "calendar-year deductible", "out-of-pocket maximum"],
    answer: 2,
    explanation: "In medical expense insurance, a calendar-year deductible applies to the total allowable expenses an insured incurs during a given calendar year."
  },
  {
    id: 47,
    lo: "Glossary",
    question: "The money that stockholders invested into a stock insurance company is part of the insurer's",
    options: ["surplus", "capital", "policy reserves", "liabilities"],
    answer: 1,
    explanation: "Capital is the amount of money that a company’s owners (stockholders) have invested in the company."
  },
  {
    id: 48,
    lo: "Glossary",
    question: "A policyowner receives a check in the mail from their mutual insurer representing their share of the divisible surplus. This is the",
    options: ["premium reduction option", "accumulation at interest option", "cash dividend option", "paid-up additions option"],
    answer: 2,
    explanation: "Under the cash dividend option, the insurer sends the policyowner a check for the declared dividend."
  },
  {
    id: 49,
    lo: "Glossary",
    question: "Eleanor surrendered her whole life policy and received the cash value in a single lump sum. She used the",
    options: ["extended term insurance option", "reduced paid-up insurance option", "cash payment nonforfeiture option", "automatic premium loan"],
    answer: 2,
    explanation: "The cash payment nonforfeiture option allows the policyowner to receive the cash surrender value in a lump sum upon surrendering the policy."
  },
  {
    id: 50,
    lo: "Glossary",
    question: "The net amount a policyowner is entitled to receive after surrendering a permanent policy, usually adjusted for loans or charges, is the",
    options: ["face amount", "cash surrender value", "accumulated value", "dividend amount"],
    answer: 1,
    explanation: "Cash surrender value is the amount a policyowner is entitled to receive upon surrendering a cash value policy, before adjustments."
  },
  {
    id: 51,
    lo: "Glossary",
    question: "The savings element that builds up inside a whole life insurance policy is the",
    options: ["dividend", "surplus", "cash value", "policy loan"],
    answer: 2,
    explanation: "Cash value is the savings element of a cash value (permanent) life insurance policy."
  },
  {
    id: 52,
    lo: "Glossary",
    question: "In a group insurance plan, an individual employee who is covered by the plan and has a document summarizing their coverage is the",
    options: ["policyholder", "certificate holder", "assignee", "annuitant"],
    answer: 1,
    explanation: "A certificate holder is an individual insured under a group plan who has received a certificate of insurance."
  },
  {
    id: 53,
    lo: "Glossary",
    question: "An insurance company must obtain a specific document from the state government to legally conduct business in that jurisdiction. This document is a(n)",
    options: ["Annual Statement", "Certificate of Insurance", "Certificate of Authority", "Master Contract"],
    answer: 2,
    explanation: "A certificate of authority (or license) grants an insurer the right to conduct insurance business in a jurisdiction."
  },
  {
    id: 54,
    lo: "Glossary",
    question: "In a group life plan, instead of receiving the entire master contract, each employee receives a summary document called a(n)",
    options: ["individual policy", "endorsement", "certificate of insurance", "record of coverage"],
    answer: 2,
    explanation: "A certificate of insurance is provided to each person in a group plan, describing their coverage and rights."
  },
  {
    id: 55,
    lo: "Glossary",
    question: "Mark added a provision to his life insurance policy that provides term coverage for his two young sons. This is a(n)",
    options: ["additional insured rider", "spouse insurance rider", "children’s insurance rider", "payor benefit rider"],
    answer: 2,
    explanation: "A children’s insurance rider provides term life insurance coverage on the insured’s children."
  },
  {
    id: 56,
    lo: "Glossary",
    question: "After the death of the insured, the beneficiary submitted a formal request for payment to the insurer. This request is a(n)",
    options: ["application", "claim", "offer", "acceptance"],
    answer: 1,
    explanation: "A claim is a request for payment under the terms of an insurance policy."
  },
  {
    id: 57,
    lo: "Glossary",
    question: "Tom named 'all my children' as beneficiaries of his policy rather than listing each of their names individually. This is a(n)",
    options: ["revocable designation", "irrevocable designation", "class designation", "successor designation"],
    answer: 2,
    explanation: "A class designation identifies a certain group of people rather than naming them individually."
  },
  {
    id: 58,
    lo: "Glossary",
    question: "An individual life insurance policy states that only the terms printed in the policy and the attached application constitute the agreement. This is a(n)",
    options: ["open contract", "closed contract", "informal contract", "bargaining contract"],
    answer: 1,
    explanation: "In a closed contract, only the terms and conditions printed in or attached to the contract are considered part of the agreement."
  },
  {
    id: 59,
    lo: "Glossary",
    question: "Mr. Gupta’s health insurance requires him to pay 20% of his medical bills after meeting his deductible, while the insurer pays 80%. This requirement is",
    options: ["a copayment", "coinsurance", "a deductible", "a stop-loss"],
    answer: 1,
    explanation: "Coinsurance is an expense participation requirement in which the insured pays a specified percentage of allowable expenses after the deductible."
  },
  {
    id: 60,
    lo: "Glossary",
    question: "To get a $50,000 bank loan, Jane assigned the monetary value of her $200,000 policy to the bank as security until the loan is paid off. This is a(n)",
    options: ["absolute assignment", "collateral assignment", "endorsement", "revocable designation"],
    answer: 1,
    explanation: "A collateral assignment is a temporary assignment of the monetary value of a policy as security (collateral) for a loan."
  },
  {
    id: 61,
    lo: "Glossary",
    question: "Two parties agree to trade a car for $20,000. Each party believes the values being exchanged are relatively equal. This is a(n)",
    options: ["aleatory contract", "commutative contract", "unilateral contract", "contract of adhesion"],
    answer: 1,
    explanation: "In a commutative contract, parties generally exchange items or services of relatively equal value (unlike insurance)."
  },
  {
    id: 62,
    lo: "Glossary",
    question: "Lila’s savings account earned interest not just on her original $1,000 deposit, but also on the interest she had earned in previous months. This is",
    options: ["simple interest", "compound interest", "indexed interest", "bonus interest"],
    answer: 1,
    explanation: "Compound interest is interest on both the principal and the accrued interest."
  },
  {
    id: 63,
    lo: "Glossary",
    question: "An insurer’s promise to pay a death benefit is valid ONLY IF the insured dies while the policy is in force. This type of promise is a(n)",
    options: ["unilateral promise", "absolute promise", "conditional promise", "formal promise"],
    answer: 2,
    explanation: "A conditional promise is a promise to perform a stated act if a specified, uncertain event occurs."
  },
  {
    id: 64,
    lo: "Glossary",
    question: "In an insurance contract, the policyowner pays the premium and the insurer promises to pay potential benefits. These items of value are the",
    options: ["mutual assent", "consideration", "capacity", "lawful purpose"],
    answer: 1,
    explanation: "Consideration is something of value given or promised by each party to form a valid contract."
  },
  {
    id: 65,
    lo: "Glossary",
    question: "The merger of a large bank and a national insurance company into a single holding company is an example of industry",
    options: ["convergence", "consolidation", "diversification", "liquidation"],
    answer: 1,
    explanation: "Consolidation refers to the combination of financial institutions within or across sectors."
  },
  {
    id: 66,
    lo: "Glossary",
    question: "An employer offers a plan with a very high deductible but gives employees more choice and responsibility for how their health funds are spent. This is a(n)",
    options: ["HMO", "PPO", "consumer-driven health plan (CDHP)", "qualified health plan"],
    answer: 2,
    explanation: "A CDHP gives individuals more freedom to choose but requires them to assume more financial risk."
  },
  {
    id: 67,
    lo: "Glossary",
    question: "Frank named his wife primary beneficiary and his brother as the person to receive payouts if his wife dies before him. His brother is the",
    options: ["irrevocable beneficiary", "contingent beneficiary", "successor payee", "assignee"],
    answer: 1,
    explanation: "A contingent beneficiary (or secondary/successor beneficiary) receives proceeds only if all primary beneficiaries die before the insured."
  },
  {
    id: 68,
    lo: "Glossary",
    question: "George’s whole life policy requires him to pay the same premium every year until he dies. This is a(n)",
    options: ["limited-payment policy", "single-premium policy", "continuous-premium whole life insurance policy", "extended term policy"],
    answer: 2,
    explanation: "A continuous-premium (straight life) policy requires premiums to be paid until the death of the insured."
  },
  {
    id: 69,
    lo: "Glossary",
    question: "Most insurance policies are written by the insurer, and the applicant must accept all the terms as-is or not buy the policy at all. This makes it a(n)",
    options: ["bargaining contract", "bilateral contract", "contract of adhesion", "informal contract"],
    answer: 2,
    explanation: "A contract of adhesion is prepared by one party and must be accepted or rejected as a whole by the other, without bargaining."
  },
  {
    id: 70,
    lo: "Glossary",
    question: "When a fire damaged a building, the insurance company paid exactly the amount of the financial loss suffered, no more. This building insurance is a",
    options: ["valued contract", "double indemnity contract", "contract of indemnity", "aleatory contract"],
    answer: 2,
    explanation: "A contract of indemnity pays a benefit based on the *actual* financial loss incurred, determined at the time of the event."
  },
  {
    id: 71,
    lo: "Glossary",
    question: "In an annuity, the person who has the power to name beneficiaries and choose payout options is the",
    options: ["annuitant", "payee", "contract owner", "beneficiary"],
    answer: 2,
    explanation: "The contract owner is the person or entity who owns and exercises all the rights and privileges of an annuity contract."
  },
  {
    id: 72,
    lo: "Glossary",
    question: "A group health insurance plan requires employees to pay 50% of the premium through payroll deduction. This is a(n)",
    options: ["noncontributory plan", "contributory plan", "voluntary plan", "HMO plan"],
    answer: 1,
    explanation: "A contributory plan requires group members to pay part or all of the premium."
  },
  {
    id: 73,
    lo: "Glossary",
    question: "Sheila has a group term life policy from her job. When she quits, she has the right to change her group term coverage to an individual permanent policy. This is her",
    options: ["reinstatement right", "conversion privilege", "nonforfeiture benefit", "eligibility period"],
    answer: 1,
    explanation: "The conversion privilege allows a group insured whose coverage ends to convert to an individual policy, usually without health evidence."
  },
  {
    id: 74,
    lo: "Glossary",
    question: "When visiting his primary care doctor, Mike is always required to pay a flat fee of $20 at the time of service. This is a(n)",
    options: ["deductible", "coinsurance", "copayment", "out-of-pocket maximum"],
    answer: 2,
    explanation: "In managed care, a copayment is a specified, fixed amount paid to a provider at the time services are received."
  },
  {
    id: 75,
    lo: "Glossary",
    question: "An insurance company is a legal entity created by state authority that is separate and distinct from its owners. It is a",
    options: ["partnership", "sole proprietorship", "corporation", "fraternal society"],
    answer: 2,
    explanation: "A corporation is a legal entity created by a government unit that is separate and distinct from its owners."
  },
  {
    id: 76,
    lo: "Glossary",
    question: "Pat has a disability income policy that increases her monthly benefit check마다 each year based on the inflation rate. This is the",
    options: ["future purchase option", "COLA benefit", "partial disability benefit", "waiver of premium"],
    answer: 1,
    explanation: "A COLA benefit provides for periodic increases in the disability benefit amount paid to a disabled insured."
  },
  {
    id: 77,
    lo: "Glossary",
    question: "When Ted bought a motorcycle with a loan from the dealer, he also bought insurance that will pay off the loan balance if he dies. This is",
    options: ["mortgage life insurance", "credit life insurance", "key person insurance", "decreased whole life"],
    answer: 1,
    explanation: "Credit life insurance is a type of term insurance designed to pay the balance of a loan (other than a mortgage) if the borrower dies."
  },
  {
    id: 78,
    lo: "Glossary",
    question: "An insurer announced that it will pay 4.5% interest on all its fixed annuities for the coming year, which is above the 1% guarantee. This 4.5% is the",
    options: ["guaranteed minimum rate", "current interest-crediting rate", "index performance rate", "MVA rate"],
    answer: 1,
    explanation: "The current interest-crediting rate is the rate an insurer declares and pays for a specified period of time above any minimum guarantees."
  },
  {
    id: 79,
    lo: "Glossary",
    question: "In a deferred annuity, if the annuitant dies during the growth phase, the contract owner's beneficiary receives the value of the account. This payout is a(n)",
    options: ["annuity payment", "death benefit", "nonforfeiture benefit", "cash surrender value"],
    answer: 1,
    explanation: "For a deferred annuity, the death benefit (survivor benefit) is the amount payable to a beneficiary if the owner/annuitant dies before payments begin."
  },
  {
    id: 80,
    lo: "Glossary",
    question: "An applicant has severe chronic health issues that fall outside the insurer's acceptable bounds. The insurer decides not to issue any policy. This applicant is a(n)",
    options: ["substandard risk", "standard risk", "declined risk", "uninsurable hazard"],
    answer: 2,
    explanation: "A declined risk is a proposed insured who presents a risk that is too great for the insurer to cover."
  },
  {
    id: 81,
    lo: "Glossary",
    question: "Carla has a policy where the death benefit starts at $250,000 and drops every year as her mortgage balance goes down. This is",
    options: ["level term insurance", "decreasing term life insurance", "increasing term insurance", "whole life insurance"],
    answer: 1,
    explanation: "Decreasing term life insurance provides a death benefit that decreases in amount over the policy term."
  },
  {
    id: 82,
    lo: "Glossary",
    question: "Bob bought an annuity today but doesn't want to start receiving income payments until he retires in fifteen years. This is a(n)",
    options: ["immediate annuity", "deferred annuity", "longevity annuity", "fixed period annuity"],
    answer: 1,
    explanation: "A deferred annuity is one in which the annuity payments are postponed for at least one year after purchase."
  },
  {
    id: 83,
    lo: "Glossary",
    question: "At age 60, Susan paid a lump sum for an annuity that will start paying her a guaranteed income starting at age 85 if she is still alive. This is a(n)",
    options: ["SPDA", "SPIA", "deferred income annuity (DIA)", "accumulation unit"],
    answer: 2,
    explanation: "A DIA is a fixed annuity bought near retirement that locks in a guaranteed income stream starting at a specified future date (usually many years later)."
  },
  {
    id: 84,
    lo: "Glossary",
    question: "A employer-sponsored retirement plan specifies exactly how much pension an employee will get (e.g., '$2,000 per month'). This specificity is defined by the plan's",
    options: ["defined contribution plan", "defined benefit formula", "benefit schedule", "payout factor"],
    answer: 1,
    explanation: "A defined benefit formula specifies the amount of the retirement benefit a plan sponsor agrees to provide."
  },
  {
    id: 85,
    lo: "Glossary",
    question: "In Apex Corp’s retirement plan, the company puts $2,000 a year into an account for each worker, but the final retirement amount depends on market growth. This is a(n)",
    options: ["defined benefit plan", "defined contribution plan", "annuity certain", "qualified pension plan"],
    answer: 1,
    explanation: "A defined contribution plan describes the annual contribution the sponsor will deposit, while the future benefit remains uncertain."
  },
  {
    id: 86,
    lo: "Glossary",
    question: "A health plan that pay for cleanings, fillings, and tooth extractions is providing",
    options: ["basic medical coverage", "vision care coverage", "dental expense coverage", "HMO coverage"],
    answer: 2,
    explanation: "Dental expense coverage provides benefits for routine exams, preventive work, and procedures for tooth and jaw repair."
  },
  {
    id: 87,
    lo: "Glossary",
    question: "Insurance Company A transfers some of the risks of the policies it issued to Reinsurer B. In this reinsurance deal, Company A is the",
    options: ["assuming company", "direct writer", "beneficiary", "assignee"],
    answer: 1,
    explanation: "In reinsurance, the company that transfers risk it originally issued is the direct writer (or ceding company)."
  },
  {
    id: 88,
    lo: "Glossary",
    question: "Two partners in a firm have a policy that will provide funds for one to buy out the other’s interest if the other becomes permanently disabled. This is",
    options: ["disability income coverage", "disability buyout coverage", "key person insurance", "AD&D insurance"],
    answer: 1,
    explanation: "Disability buyout coverage provides benefits to fund the buyout of a partner’s or owner’s interest if they become disabled."
  },
  {
    id: 89,
    lo: "Glossary",
    question: "Anna’s life insurance policy includes a rider that will pay her $1,000 every month if she becomes totally disabled. This is a(n)",
    options: ["accelerated death benefit", "disability income benefit", "waiver of premium benefit", "hospital expense benefit"],
    answer: 1,
    explanation: "A disability income benefit is a supplemental benefit that provides a monthly income to the insured if she becomes totally disabled."
  },
  {
    id: 90,
    lo: "Glossary",
    question: "An insurance company determined it has $10 million in extra funds that it is legally allowed to distribute to its participating policyowners. This $10 million is the",
    options: ["capital", "liabilities", "divisible surplus", "statutory reserves"],
    answer: 2,
    explanation: "Divisible surplus is the portion of an insurance company’s surplus set aside specifically for distribution to owners of participating policies."
  },
  {
    id: 91,
    lo: "Glossary",
    question: "A major U.S. federal law was passed in 2010 to promote financial stability after the 2008 crisis by improving transparency and accountability. This is the",
    options: ["McCarran-Ferguson Act", "Dodd-Frank Act", "ACA", "ERISA"],
    answer: 1,
    explanation: "The Dodd-Frank Wall Street Reform and Consumer Protection Act is a federal law designed to promote stability/transparency and protect consumers."
  },
  {
    id: 92,
    lo: "Glossary",
    question: "If Insurer XYZ is legally incorporated in the state of Delaware, Delaware is known as the insurer's",
    options: ["territory", "licensing area", "domicile", "federal unit"],
    answer: 2,
    explanation: "Domicile is the jurisdiction (state or country) in which a company incorporates."
  },
  {
    id: 93,
    lo: "Glossary",
    question: "Sam’s policy has a provision that pays him 25% of his death benefit early if he is diagnosed specifically with invasive cancer. This is a(n)",
    options: ["accidental death benefit", "living benefit / dread disease benefit", "terminal illness benefit", "disability income benefit"],
    answer: 1,
    explanation: "A dread disease (DD) benefit (or critical illness benefit) is an accelerated death benefit triggered by specific diseases like cancer or heart attack."
  },
  {
    id: 94,
    lo: "Glossary",
    question: "In a group plan, there is a 31-day window after a new hire finishes their probation during which they can join the plan without a medical exam. This window is the",
    options: ["probationary period", "eligibility period", "waiting period", "actively-at-work window"],
    answer: 1,
    explanation: "The eligibility period (or enrollment period) is the time during which a new group member may first enroll without providing evidence of insurability."
  },
  {
    id: 95,
    lo: "Glossary",
    question: "Valery must be disabled for 90 days before her disability insurance starts paying her benefits. These first 90 days are the",
    options: ["waiting period / elimination period", "probationary period", "grace period", "benefit period"],
    answer: 0,
    explanation: "The elimination period (or waiting period) is the specific amount of time an insured must be disabled before becoming eligible for benefits."
  },
  {
    id: 96,
    lo: "Glossary",
    question: "A U.S. federal law sets minimum standards for most voluntarily established retirement and health plans in private industry to protect employees. This is",
    options: ["Dodd-Frank", "ERISA", "ACA", "FINRA"],
    answer: 1,
    explanation: "ERISA is a U.S. federal law designed to protect covered employees and beneficiaries by ensuring retirement plans meet specified requirements."
  },
  {
    id: 97,
    lo: "Glossary",
    question: "A company’s retirement plan invests all employer contributions into shares of the company’s own stock. This is a(n)",
    options: ["401(k)", "403(b)", "employee stock ownership plan (ESOP)", "SIMPLE IRA"],
    answer: 2,
    explanation: "An ESOP is a qualified retirement plan in which employer contributions are invested primarily in the employer’s stock."
  },
  {
    id: 98,
    lo: "Glossary",
    question: "Harold has a policy that will pay him $50,000 if he is still alive at age 65, or pay his wife $50,000 if he dies before then. This is",
    options: ["whole life insurance", "term life insurance", "endowment insurance", "universal life"],
    answer: 2,
    explanation: "Endowment insurance provides a benefit payable either when the insured dies or on a stated date (maturity) if the insured is still alive."
  },
  {
    id: 99,
    lo: "Glossary",
    question: "The provision that defines what group of documents (e.g., policy + application) makes up the legally binding insurance agreement is the",
    options: ["incontestability provision", "entire contract provision", "free-look provision", "grace period provision"],
    answer: 1,
    explanation: "The entire contract provision defines the documents (usually policy, riders, and application) that constitute the contract."
  },
  {
    id: 100,
    lo: "Glossary",
    question: "Sarah sat down with an advisor to determine how to preserve her assets and ensure they are distributed to her children as she desires after her death. She is creating a(n)",
    options: ["business continuation plan", "estate plan", "buy-sell agreement", "trust"],
    answer: 1,
    explanation: "An estate plan considers the amount of assets and debts a person has and how best to preserve and distribute them after death."
  },
  {
    id: 101,
    lo: "Glossary",
    question: "When applying for a large amount of life insurance, Mrs. Chen was required to undergo a medical exam to provide proof that she is an insurable risk. This proof is known as",
    options: ["evidence of insurability", "an Annual Statement", "a Certificate of Authority", "a nonforfeiture benefit"],
    answer: 0,
    explanation: "Evidence of insurability is proof that a given person is an insurable risk."
  },
  {
    id: 102,
    lo: "Glossary",
    question: "A provision in a life insurance policy states that the insurer will not pay the death benefit if the insured dies while participating in professional auto racing. This provision is a(n)",
    options: ["endorsement", "exclusion", "rider", "assignment"],
    answer: 1,
    explanation: "An exclusion is a policy provision that describes circumstances under which the insurer will not pay the policy benefit."
  },
  {
    id: 103,
    lo: "Glossary",
    question: "An insurer determines the premium for a large employer's group policy primarily by looking at that specific employer's actual claims history from the past three years. This method is",
    options: ["manual rating", "experience rating", "blended rating", "retrospective rating"],
    answer: 1,
    explanation: "Experience rating is a method of setting group premium rates where the insurer considers the particular group’s prior claims and expense experience."
  },
  {
    id: 104,
    lo: "Glossary",
    question: "When Mr. O'Malley stopped paying premiums on his whole life policy, the insurer used the net cash value to purchase term insurance for the full face amount for as long a period as possible. This is the",
    options: ["cash payment nonforfeiture option", "reduced paid-up insurance option", "extended term insurance nonforfeiture option", "automatic premium loan"],
    answer: 2,
    explanation: "Under the extended term insurance option, the net cash value is used to purchase term insurance for the full coverage amount for as long a term as the cash value can provide."
  },
  {
    id: 105,
    lo: "Glossary",
    question: "David applied for a life insurance policy and was approved for $250,000 in coverage. This $250,000 figure is known as the policy's",
    options: ["accumulated value", "cash value", "face amount", "surrender value"],
    answer: 2,
    explanation: "The face amount is the amount of life insurance policy benefits for which an individual applies and that the insurer approves."
  },
  {
    id: 106,
    lo: "Glossary",
    question: "A plan of decreasing term life insurance that is designed to pay the beneficiary a stated monthly income amount if the insured dies during the policy term is",
    options: ["family income coverage", "family policy", "joint life insurance", "juvenile insurance"],
    answer: 0,
    explanation: "Family income coverage is a plan of decreasing term insurance that pays a stated monthly income benefit if the insured dies during the term."
  },
  {
    id: 107,
    lo: "Glossary",
    question: "A whole life insurance policy that includes term insurance coverage on both the primary insured and their spouse and children is known as a",
    options: ["joint life policy", "family policy", "last survivor policy", "juvenile policy"],
    answer: 1,
    explanation: "A family policy is a whole life policy that includes term life insurance coverage on the primary insured’s spouse and children."
  },
  {
    id: 108,
    lo: "Glossary",
    question: "Which US federal agency, created by the Dodd-Frank Act, is authorized to monitor the insurance industry and identify areas with inadequate state regulation?",
    options: ["FSOC", "FIO", "SEC", "FINRA"],
    answer: 1,
    explanation: "The Federal Insurance Office (FIO) was created by Dodd-Frank to monitor the insurance industry and handle international insurance issues."
  },
  {
    id: 109,
    lo: "Glossary",
    question: "A bank acts as an organization that collects funds from depositors (suppliers) and channels them to borrowers (users). In this role, the bank is a",
    options: ["financial model", "financial intermediary", "regulatory agency", "stock corporation"],
    answer: 1,
    explanation: "A financial intermediary collects funds from suppliers and channels them to users."
  },
  {
    id: 110,
    lo: "Glossary",
    question: "The broad industry that offers products to help people meet financial goals, protect against losses, and manage debt is known as the",
    options: ["banking industry", "insurance industry", "securities industry", "financial services industry"],
    answer: 3,
    explanation: "The financial services industry offers products and services to help meet financial goals, protect against losses, and manage debt/payments."
  },
  {
    id: 111,
    lo: "Glossary",
    question: "Which US agency is responsible for identifying threats to the nation's financial system and coordinating regulatory responses to those threats?",
    options: ["SEC", "FINRA", "FSOC", "FIO"],
    answer: 2,
    explanation: "The Financial Stability Oversight Council (FSOC) monitors the safety and stability of the nation’s financial system."
  },
  {
    id: 112,
    lo: "Glossary",
    question: "A medical expense insurance policy that begins to reimburse the insured for covered expenses immediately, without requiring any deductible to be paid first, provides",
    options: ["major medical coverage", "first-dollar coverage", "coinsurance", "stop-loss coverage"],
    answer: 1,
    explanation: "First-dollar coverage reimburses the insured without first requiring an out-of-pocket contribution (deductible)."
  },
  {
    id: 113,
    lo: "Glossary",
    question: "An annuity payout option where the insurer provides monthly payments of exactly $1,500 until the funds are exhausted is a",
    options: ["fixed period annuity", "fixed amount annuity", "life only annuity", "joint life annuity"],
    answer: 1,
    explanation: "A fixed amount annuity provides annuity payments of a specified amount until the funds are gone."
  },
  {
    id: 114,
    lo: "Glossary",
    question: "In this type of annuity contract, the insurer guarantees both a minimum interest rate and a minimum amount for the periodic payments. This is a",
    options: ["variable annuity", "fixed annuity", "indexed annuity", "deferred income annuity"],
    answer: 1,
    explanation: "A fixed annuity guarantees a minimum interest rate and a minimum payment amount."
  },
  {
    id: 115,
    lo: "Glossary",
    question: "A fixed deferred annuity that offers principal guarantees but also provides the possibility of extra earnings linked to the performance of a stock market index is a",
    options: ["variable annuity", "fixed indexed annuity (FIA)", "market-value-adjusted annuity", "longevity annuity"],
    answer: 1,
    explanation: "A fixed indexed annuity (FIA) offers principal/interest guarantees plus earnings based on changes in an index."
  },
  {
    id: 116,
    lo: "Glossary",
    question: "An annuity option in which the insurer provides payments for exactly 20 years, regardless of how long the annuitant lives, is a",
    options: ["fixed amount annuity", "fixed period annuity", "life income with period certain", "straight life annuity"],
    answer: 1,
    explanation: "A fixed period annuity (or annuity certain) provides payments for a specific period of time."
  },
  {
    id: 117,
    lo: "Glossary",
    question: "A type of universal life policy that allows the policyowner to change both the amount and the frequency of their premium payments within set limits is",
    options: ["fixed-premium universal life", "flexible-premium universal life", "variable universal life", "whole life insurance"],
    answer: 1,
    explanation: "A flexible-premium universal life policy allows the owner to alter the amount and frequency of premium payments."
  },
  {
    id: 118,
    lo: "Glossary",
    question: "A nonprofit organization that provides social and insurance benefits solely to its members and is often established by a common ethnic or religious background is a",
    options: ["mutual insurance company", "fraternal benefit society", "stock insurance company", "reinsurer"],
    answer: 1,
    explanation: "A fraternal benefit society is a nonprofit organization operated solely for members' benefit, providing social and insurance benefits."
  },
  {
    id: 119,
    lo: "Glossary",
    question: "A person intentionally lies on an insurance application to get coverage they wouldn't otherwise qualify for. This lie is a",
    options: ["material misrepresentation", "fraudulent misrepresentation", "mutual assent", "policy rider"],
    answer: 1,
    explanation: "Fraudulent misrepresentation is an intentional lie made to induce another party to enter a contract, resulting in loss of value or rights."
  },
  {
    id: 120,
    lo: "Glossary",
    question: "A policy provision gives the owner a 10-day period after delivery to cancel the policy for a full refund of premiums. This is the",
    options: ["entire contract provision", "grace period provision", "free-look provision", "incontestability provision"],
    answer: 2,
    explanation: "The free-look provision (or cooling-off/free-examination) allows the owner to cancel for a full refund within a specified period after delivery."
  },
  {
    id: 121,
    lo: "Glossary",
    question: "The asset account that supports an insurer's guarantees for its whole life and fixed annuity products is the",
    options: ["separate account", "segregated account", "general account", "subaccount"],
    answer: 2,
    explanation: "The general account maintains funds that support contractual obligations for guaranteed products like whole life and fixed annuities."
  },
  {
    id: 122,
    lo: "Glossary",
    question: "After a premium's due date, the policy remains in effect for a set number of days even if the premium hasn't been paid. This time is the",
    options: ["elimination period", "waiting period", "grace period", "probationary period"],
    answer: 2,
    explanation: "The grace period is the specified time (often 31 days) following a due date during which the contract remains in effect even if the premium is unpaid."
  },
  {
    id: 123,
    lo: "Glossary",
    question: "A company purchases an annuity to provide regular retirement income for its eligible employees. This is a",
    options: ["individual annuity", "group annuity", "deferred income annuity", "longevity annuity"],
    answer: 1,
    explanation: "A group annuity is purchased by a plan sponsor (like an employer) to provide payments to participants at retirement."
  },
  {
    id: 124,
    lo: "Glossary",
    question: "A bank holds a policy that covers the lives of all its current borrowers to ensure their debts are paid off if they die. This is",
    options: ["individual life insurance", "group creditor life insurance", "mortgage life insurance", "key person insurance"],
    answer: 1,
    explanation: "Group creditor life insurance is issued to a creditor to insure the lives of its debtors."
  },
  {
    id: 125,
    lo: "Glossary",
    question: "In a group insurance arrangement, the employer who negotiates the contract terms and pays the premiums to the insurer is the",
    options: ["certificate holder", "group insured", "group policyholder", "beneficiary"],
    answer: 2,
    explanation: "The group policyholder is the organization that decides on and purchases coverage for a group."
  },
  {
    id: 126,
    lo: "Glossary",
    question: "A rider that allows a policyowner to purchase additional amounts of life insurance at specific times without having to prove they are still healthy is a",
    options: ["waiver of premium benefit", "accidental death benefit", "guaranteed insurability benefit", "accelerated death benefit"],
    answer: 2,
    explanation: "The guaranteed insurability (GI) benefit gives the owner the right to buy more insurance at specified dates without evidence of insurability."
  },
  {
    id: 127,
    lo: "Glossary",
    question: "A rider on a variable annuity that allows the owner to take withdrawals for their entire life, even if the account balance drops to zero, is a",
    options: ["GMWB", "GLWB", "GMAB", "GMIB"],
    answer: 1,
    explanation: "A GLWB allows for life-long withdrawals even if the accumulated value is depleted."
  },
  {
    id: 128,
    lo: "Glossary",
    question: "An employer-sponsored plan that allows workers to set aside pre-tax money to pay for medical expenses like copays and prescriptions is a(n)",
    options: ["HMO", "HSA", "HRA", "HCFSA"],
    answer: 3,
    explanation: "An HCFSA allows employees to set aside pre-tax wages to pay for qualified medical expenses."
  },
  {
    id: 129,
    lo: "Glossary",
    question: "A health care system that provides comprehensive services through a network of providers to members (subscribers) in a specific geographic area is a(n)",
    options: ["PPO", "POS", "HMO", "CDHP"],
    answer: 2,
    explanation: "An HMO is a health care financing and delivery system providing services to members in a specific area."
  },
  {
    id: 130,
    lo: "Glossary",
    question: "A tax-advantaged account that individuals can use to save money specifically for medical expenses, often paired with a high-deductible health plan, is a(n)",
    options: ["HCFSA", "HRA", "HSA", "HMO"],
    answer: 2,
    explanation: "An HSA is a tax-advantaged account used to accumulate money for medical expenses."
  },
  {
    id: 131,
    lo: "Glossary",
    question: "A contract that begins providing periodic income payments to the payee within one year of its purchase is a(n)",
    options: ["deferred annuity", "immediate annuity", "longevity annuity", "fixed period annuity"],
    answer: 1,
    explanation: "An immediate annuity provides payments that begin no later than one year after purchase."
  },
  {
    id: 132,
    lo: "Glossary",
    question: "A policy provision that prevents the insurer from canceling a life insurance policy due to a misrepresentation on the application after it has been in force for 2 years is the",
    options: ["grace period provision", "entire contract provision", "incontestability provision", "free-look provision"],
    answer: 2,
    explanation: "The incontestability provision denies the insurer the right to cancel the contract based on material misrepresentation after it has been in force for a specific period (usually 2 years)."
  },
  {
    id: 133,
    lo: "Glossary",
    question: "In a long-term care policy, if the insurer pays a flat $200 per day to the insured regardless of the actual cost of care, it is using the",
    options: ["reimbursement method", "indemnity benefit method", "fixed amount method", "coinsurance method"],
    answer: 1,
    explanation: "The indemnity benefit method (or per diem method) pays a stated benefit amount regardless of the actual expenses incurred."
  },
  {
    id: 134,
    lo: "Glossary",
    question: "A type of universal life policy where the interest credited to the cash value is tied to the performance of an external financial index is",
    options: ["variable universal life", "indexed universal life (IUL)", "fixed-premium universal life", "whole life insurance"],
    answer: 1,
    explanation: "IUL insurance offers features of universal life but with earnings based on changes in a published index."
  },
  {
    id: 135,
    lo: "Glossary",
    question: "A tax-favored retirement savings vehicle that is established by an individual in the form of a trust or custodial account is a(n)",
    options: ["401(k)", "individual retirement account (IRA)", "pension plan", "annuity"],
    answer: 1,
    explanation: "An IRA is a tax-favored retirement savings vehicle held in a trust or custodial account."
  },
  {
    id: 136,
    lo: "Glossary",
    question: "A contract that is enforceable because its substance meets legal requirements, rather than because it follows a specific written format, is a(n)",
    options: ["formal contract", "informal contract", "closed contract", "bilateral contract"],
    answer: 1,
    explanation: "An informal contract is enforceable because it meets substance requirements rather than specific form requirements (most insurance contracts are informal)."
  },
  {
    id: 137,
    lo: "Glossary",
    question: "Activities like managing finances, cooking, and using a telephone, which are necessary for living independently but not for basic functioning, are",
    options: ["ADLs", "IADLs", "cognitive impairments", "physical impairments"],
    answer: 1,
    explanation: "IADLs are necessary for independent living but not essential to core daily functioning (unlike ADLs)."
  },
  {
    id: 138,
    lo: "Glossary",
    question: "The legal requirement that a policyowner must be likely to suffer a financial loss if the insured event occurs is known as",
    options: ["mutual assent", "consideration", "insurable interest", "lawful purpose"],
    answer: 2,
    explanation: "Insurable interest is the interest an owner has in the risk; they must suffer a loss if the insured event happens."
  },
  {
    id: 139,
    lo: "Glossary",
    question: "The top official in a state who is responsible for directing the operations of the state's insurance department is the",
    options: ["actuary", "underwriter", "insurance commissioner", "state senator"],
    answer: 2,
    explanation: "The insurance commissioner (or superintendent/director) directs the state insurance department."
  },
  {
    id: 140,
    lo: "Glossary",
    question: "In a life insurance policy, Greg is the person whose death will trigger the payment of the death benefit. Greg is the",
    options: ["policyowner", "beneficiary", "insured", "assignee"],
    answer: 2,
    explanation: "The insured is the person whose life, health, or property is protected under the policy."
  },
  {
    id: 141,
    lo: "Glossary",
    question: "An organization that moves funds from people who have extra money to those who need to borrow money is a(n)",
    options: ["actuary", "intermediary", "stockholder", "regulator"],
    answer: 1,
    explanation: "A financial intermediary channels funds from suppliers to users."
  },
  {
    id: 142,
    lo: "Glossary",
    question: "A beneficiary whose status cannot be changed by the policyowner without that beneficiary's written consent is a(n)",
    options: ["revocable beneficiary", "irrevocable beneficiary", "contingent beneficiary", "primary beneficiary"],
    answer: 1,
    explanation: "An irrevocable beneficiary's designation cannot be changed without their written consent."
  },
  {
    id: 143,
    lo: "Glossary",
    question: "An annuity option that provides payments to two people and continues as long as either person is still alive is a",
    options: ["joint life annuity", "joint and survivor annuity", "last survivor annuity", "joint whole life annuity"],
    answer: 1,
    explanation: "A joint and survivor annuity provides payments continuing until the last of two or more annuitants dies."
  },
  {
    id: 144,
    lo: "Glossary",
    question: "A policy that insures two lives (like a husband and wife) and pays the death benefit when the first person dies is",
    options: ["last survivor life insurance", "joint whole life insurance", "family policy", "juvenile insurance"],
    answer: 1,
    explanation: "Joint whole life insurance (or first-to-die) insures two people and pays when the first one dies."
  },
  {
    id: 145,
    lo: "Glossary",
    question: "An insurance policy issued on the life of a minor child but owned and paid for by their parent is a",
    options: ["family policy", "joint life policy", "juvenile insurance policy", "third-party policy"],
    answer: 2,
    explanation: "A juvenile insurance policy is issued on a child's life but owned/paid for by an adult (usually a guardian)."
  },
  {
    id: 146,
    lo: "Glossary",
    question: "A star software developer whose death would cause a massive financial loss to their tech startup is considered a",
    options: ["standard risk", "preferred risk", "key person", "declined risk"],
    answer: 2,
    explanation: "A key person is someone whose continued participation is vital to a business’s success."
  },
  {
    id: 147,
    lo: "Glossary",
    question: "The termination of an insurance policy because the owner failed to pay the required premium is a",
    options: ["grace period", "reinstatement", "lapse", "conversion"],
    answer: 2,
    explanation: "Lapse is the termination of a policy for nonpayment of premium."
  },
  {
    id: 148,
    lo: "Glossary",
    question: "A policy that covers two lives but pays the death benefit only after BOTH people have died is",
    options: ["joint whole life insurance", "last survivor life insurance", "family policy", "first-to-die insurance"],
    answer: 1,
    explanation: "Last survivor life insurance (or second-to-die) pays only after both insured people have died."
  },
  {
    id: 149,
    lo: "Glossary",
    question: "The concept that the more times an event is observed, the closer the observed results will get to the true probability is the",
    options: ["risk selection principle", "law of large numbers", "aleatory principle", "mortality assumption"],
    answer: 1,
    explanation: "The law of large numbers states that typical results approximate true probability more closely as observations increase."
  },
  {
    id: 150,
    lo: "Glossary",
    question: "A premium system where the policyowner pays the exact same premium amount every year for the duration of the policy is the",
    options: ["step-rate system", "level premium system", "experience rating system", "blended rating system"],
    answer: 1,
    explanation: "The level premium system allows a policyowner to pay the same premium amount each year a policy is in force."
  },
  {
    id: 151,
    lo: "Glossary",
    question: "In an insurance company's balance sheet, its debts and future obligations to pay policy benefits are listed as",
    options: ["assets", "capital", "surplus", "liabilities"],
    answer: 3,
    explanation: "Liabilities are a company’s debts and future obligations."
  },
  {
    id: 152,
    lo: "Glossary",
    question: "A contract that provides periodic income payments for at least the entire lifetime of a specific named individual is a(n)",
    options: ["annuity certain", "fixed amount annuity", "life annuity", "deferred annuity"],
    answer: 2,
    explanation: "A life annuity provides payments for at least the lifetime of a named individual."
  },
  {
    id: 153,
    lo: "Glossary",
    question: "A policy settlement option where the insurer pays the death benefit to the beneficiary in regular installments for the rest of their life is the",
    options: ["interest option", "fixed amount option", "life income option", "fixed period option"],
    answer: 2,
    explanation: "The life income option pays the proceeds in periodic installments over the payee’s lifetime."
  },
  {
    id: 154,
    lo: "Glossary",
    question: "The specific type of insurance that provides protection against the economic loss caused by the death of the insured person is",
    options: ["health insurance", "life insurance", "annuities", "AD&D insurance"],
    answer: 1,
    explanation: "Life insurance provides protection against economic loss caused by the death of the insured."
  },
  {
    id: 155,
    lo: "Glossary",
    question: "A policy that provides lifetime coverage but only requires premiums to be paid for 20 years or until age 65 is",
    options: ["straight life policy", "limited-payment whole life insurance policy", "single-premium policy", "term life policy"],
    answer: 1,
    explanation: "In a limited-payment policy, premiums are payable only for a stated period or until death."
  },
  {
    id: 156,
    lo: "Glossary",
    question: "A fixed annuity bought at age 65 that won't start paying income until age 85 is designed specifically to cover",
    options: ["death risk", "longevity risk", "morbidity risk", "interest rate risk"],
    answer: 1,
    explanation: "A longevity annuity (or advanced life deferred annuity) targets longevity risk—the risk of outliving one's assets."
  },
  {
    id: 157,
    lo: "Glossary",
    question: "A type of health insurance that pays for medical or health-related services needed by those who cannot perform ADLs or have cognitive issues is",
    options: ["major medical insurance", "disability income insurance", "long-term care insurance (LTCI)", "HMO coverage"],
    answer: 2,
    explanation: "LTCI pays for services needed due to advanced age or serious illness/injury requiring care in a home or facility."
  },
  {
    id: 158,
    lo: "Glossary",
    question: "Health insurance that provides substantial benefits for hospital, surgical, and physician expenses plus additional services and preventive care is",
    options: ["basic medical coverage", "major medical expense coverage", "dental coverage", "disability coverage"],
    answer: 1,
    explanation: "Major medical coverage provides substantial benefits across various medical services and preventive care."
  },
  {
    id: 159,
    lo: "Glossary",
    question: "A health plan arrangement that integrates both the financing and the actual delivery of health care services to a group of members is a(n)",
    options: ["traditional health plan", "managed care plan", "indemnity plan", "major medical plan"],
    answer: 1,
    explanation: "A managed care plan integrates the financing and management of health care with the delivery of services."
  },
  {
    id: 160,
    lo: "Glossary",
    question: "An insurer sets a group's premium by using broad industry classifications rather than the specific group's own history. This is",
    options: ["experience rating", "blended rating", "manual rating", "individual rating"],
    answer: 2,
    explanation: "Manual rating uses broad classifications and industry information rather than a specific group's experience."
  },
  {
    id: 161,
    lo: "Glossary",
    question: "A specific type of law designed to ensure that insurance companies conduct their business fairly and ethically is a(n)",
    options: ["securities law", "market conduct law", "anti-trust law", "tax law"],
    answer: 1,
    explanation: "Market conduct laws are designed to ensure insurers act fairly and ethically."
  },
  {
    id: 162,
    lo: "Glossary",
    question: "The primary document that describes the legal relationship between the insurer and the group policyholder (employer) is the",
    options: ["certificate of insurance", "Annual Statement", "master group insurance contract", "individual policy"],
    answer: 2,
    explanation: "The master group insurance contract describes the relationship between the insurer and the group policyholder."
  },
  {
    id: 163,
    lo: "Glossary",
    question: "In an endowment policy, the date on which the insurer must pay the face amount to the policyowner if the insured is still alive is the",
    options: ["issue date", "grace date", "maturity date", "anniversary date"],
    answer: 2,
    explanation: "The maturity date is when the face amount is paid to the owner if the insured is still living."
  },
  {
    id: 164,
    lo: "Glossary",
    question: "In the United States, the joint federal and state program that provides medical coverage specifically to low-income individuals is",
    options: ["Medicare", "Medicaid", "Social Security", "ERISA"],
    answer: 1,
    explanation: "Medicaid provides medical and nursing home coverage to low-income individuals."
  },
  {
    id: 165,
    lo: "Glossary",
    question: "In the United States, the federal government program that provides medical benefits specifically to people aged 65 and older is",
    options: ["Medicaid", "Medicare", "Social Security", "Affordable Care Act"],
    answer: 1,
    explanation: "Medicare provides medical benefits to people age 65 and older and some people with disabilities."
  },
  {
    id: 166,
    lo: "Glossary",
    question: "A false or misleading statement made by an applicant in an insurance application is a(n)",
    options: ["consideration", "acceptance", "misrepresentation", "rider"],
    answer: 2,
    explanation: "A misrepresentation is a false or misleading statement in an insurance application."
  },
  {
    id: 167,
    lo: "Glossary",
    question: "A whole life policy where the death benefit decreases by a specific amount when the insured reaches certain ages (like 65 and 70) is",
    options: ["straight life policy", "modified coverage whole life insurance policy", "universal life", "term life"],
    answer: 1,
    explanation: "In modified coverage whole life, the insurance amount decreases at certain ages or time periods."
  },
  {
    id: 168,
    lo: "Glossary",
    question: "A policy where the annual premium is low for the first 5 years and then increases to a higher level premium for the rest of its duration is",
    options: ["straight life policy", "modified-premium whole life insurance policy", "single-premium policy", "flexible-premium policy"],
    answer: 1,
    explanation: "Modified-premium whole life features a premium amount that changes after an initial period."
  },
  {
    id: 169,
    lo: "Glossary",
    question: "A risk characteristic that suggests an applicant might act dishonestly (e.g., a history of insurance fraud) is a(n)",
    options: ["physical hazard", "moral hazard", "insurable interest", "aleatory risk"],
    answer: 1,
    explanation: "Moral hazard exists when a person's reputation or record indicates they may act dishonestly in the transaction."
  },
  {
    id: 170,
    lo: "Glossary",
    question: "The metric used to describe the incidence of sickness and accidents within a specific group of people is the",
    options: ["mortality rate", "morbidity rate", "lapse rate", "interest rate"],
    answer: 1,
    explanation: "Morbidity rate is the incidence of sickness and accidents by age among a group."
  },
  {
    id: 171,
    lo: "Glossary",
    question: "An annual fee in a variable annuity that covers the insurer's cost of providing death benefit guarantees and administrative overhead is the",
    options: ["surrender charge", "M&E charge", "contract fee", "service fee"],
    answer: 1,
    explanation: "The M&E charge covers risks like death benefit guarantees and administrative expenses for variable annuities."
  },
  {
    id: 172,
    lo: "Glossary",
    question: "The rate at which deaths occur among a specified group of people over a specific period is the",
    options: ["morbidity rate", "mortality rate", "lapse rate", "surrender rate"],
    answer: 1,
    explanation: "Mortality rate is the rate at which death occurs among a group during a period (usually a year)."
  },
  {
    id: 173,
    lo: "Glossary",
    question: "A specific type of decreasing term insurance where the death benefit precisely follows the decreasing balance owed on a home loan is",
    options: ["credit life insurance", "mortgage life insurance", "family income coverage", "joint life insurance"],
    answer: 1,
    explanation: "Mortgage life (or mortgage redemption) insurance provides a benefit corresponding to a decreasing mortgage balance."
  },
  {
    id: 174,
    lo: "Glossary",
    question: "An insurance company that is owned by its policyowners rather than by stockholders is a",
    options: ["stock insurance company", "mutual insurance company", "fraternal benefit society", "holding company"],
    answer: 1,
    explanation: "A mutual insurance company is owned by its policyowners."
  },
  {
    id: 175,
    lo: "Glossary",
    question: "Which US organization promotes state-level regulatory uniformity by developing model laws and regulations as guidelines?",
    options: ["SEC", "FINRA", "NAIC", "FSOC"],
    answer: 2,
    explanation: "The NAIC is a nongovernmental association of state insurance commissioners that promotes regulatory uniformity."
  },
  {
    id: 176,
    lo: "Glossary",
    question: "When Kevin surrenders his policy, he receives $10,000 *after* the insurer subtracted a $500 outstanding loan. This $10,000 is the",
    options: ["accumulated value", "face amount", "net cash surrender value", "dividend amount"],
    answer: 2,
    explanation: "Net cash surrender value is the amount the owner actually receives after additions or subtractions (like loans)."
  },
  {
    id: 177,
    lo: "Glossary",
    question: "Waiters-R-Us pays 100% of the premium for its employees' group life plan. Employees don't have to pay anything. This is a(n)",
    options: ["contributory plan", "noncontributory plan", "voluntary plan", "HMO plan"],
    answer: 1,
    explanation: "In a noncontributory plan, group members are not required to pay any part of the premium."
  },
  {
    id: 178,
    lo: "Glossary",
    question: "The policy provision that summarizes the options available to a policyowner if their cash value policy lapses is the",
    options: ["grace period provision", "incontestability provision", "nonforfeiture provision", "entire contract provision"],
    answer: 2,
    explanation: "The nonforfeiture provision sets forth options (like cash, reduced paid-up, or extended term) available if a policy lapses."
  },
  {
    id: 179,
    lo: "Glossary",
    question: "A life insurance policy where the owner does *not* share in the insurer's divisible surplus and does *not* receive dividends is a(n)",
    options: ["participating policy", "nonparticipating policy", "individual policy", "standard policy"],
    answer: 1,
    explanation: "In a nonparticipating (nonpar) policy, the owner does not receive dividends from the insurer's surplus."
  },
  {
    id: 180,
    lo: "Glossary",
    question: "In the legal process of forming a contract, a proposal to enter into a binding agreement with another party is a(n)",
    options: ["acceptance", "consideration", "offer", "counter-offer"],
    answer: 2,
    explanation: "An offer is a proposal to enter into a binding contract."
  },
  {
    id: 181,
    lo: "Glossary",
    question: "A contract that identifies certain documents as part of the agreement but doesn't necessarily have all those documents physically attached is a(n)",
    options: ["closed contract", "open contract", "informal contract", "standard contract"],
    answer: 1,
    explanation: "In an open contract, some documents (like a society's bylaws) might not be physically attached but are still part of the agreement."
  },
  {
    id: 182,
    lo: "Glossary",
    question: "A group health insurer offers a yearly 30-day window during which any eligible employee can join the plan even if they declined it when they were first hired. This is a(n)",
    options: ["probationary period", "eligibility period", "open enrollment period", "waiting period"],
    answer: 2,
    explanation: "The open enrollment period is an annual window where people who didn't join initially can join without proving insurability."
  },
  {
    id: 183,
    lo: "Glossary",
    question: "In a universal life policy, an arrangement where the death benefit is always level and equal to the policy's face amount is",
    options: ["Option A plan", "Option B plan", "Option C plan", "Option D plan"],
    answer: 0,
    explanation: "In Option A (Option 1), the death benefit is level and equal to the face amount."
  },
  {
    id: 184,
    lo: "Glossary",
    question: "In a universal life policy, an arrangement where the death benefit at any time is equal to the face amount *plus* the cash value is",
    options: ["Option A plan", "Option B plan", "level death benefit plan", "standard plan"],
    answer: 1,
    explanation: "In Option B (Option 2), the death benefit increases as the cash value builds up."
  },
  {
    id: 185,
    lo: "Glossary",
    question: "A dividend option where the insurer uses the dividend to buy more whole life coverage that requires no further premium payments is the",
    options: ["cash dividend option", "paid-up additional insurance dividend option", "one-year term dividend option", "premium reduction option"],
    answer: 1,
    explanation: "The paid-up additions option uses dividends to purchase single-premium paid-up additional insurance."
  },
  {
    id: 186,
    lo: "Glossary",
    question: "A condition that prevents an insured from performing *some* of their usual duties but still allows them to work in a reduced capacity is",
    options: ["total disability", "partial disability", "presumptive disability", "cognitive impairment"],
    answer: 1,
    explanation: "Partial disability prevents an insured from performing *some* duties or engaging in their occupation on a full-time basis."
  },
  {
    id: 187,
    lo: "Glossary",
    question: "A life insurance policy where the owner shares in the mutual insurer's surplus and may receive dividends is a(n)",
    options: ["nonparticipating policy", "participating policy", "stock policy", "open policy"],
    answer: 1,
    explanation: "In a participating (par) policy, the owner shares in the divisible surplus."
  },
  {
    id: 188,
    lo: "Glossary",
    question: "A business form owned by two or more people who are legally known as the partners is a",
    options: ["corporation", "sole proprietorship", "partnership", "fraternal society"],
    answer: 2,
    explanation: "A partnership is a business owned by two or more people."
  },
  {
    id: 189,
    lo: "Glossary",
    question: "The figure that determines the dollar amount of each annuity payment per $1,000 of accumulated value is the",
    options: ["interest rate", "morbidity rate", "payout factor", "annuity unit value"],
    answer: 2,
    explanation: "The payout factor is the amount of each payment per thousand dollars of premium or accumulated value."
  },
  {
    id: 190,
    lo: "Glossary",
    question: "The phase of an annuity contract during which the insurer is actively making income payments to the payee is the",
    options: ["accumulation period", "payout period", "waiting period", "grace period"],
    answer: 1,
    explanation: "The payout period (liquidation/distribution period) is the time during which the insurer makes annuity payments."
  },
  {
    id: 191,
    lo: "Glossary",
    question: "The possibility of financial loss associated with death, illness, or outliving one's resources is categorized as a(n)",
    options: ["pure risk", "speculative risk", "personal risk", "economic hazard"],
    answer: 2,
    explanation: "Personal risk is the risk of loss associated with death, poor health, injury, and outliving resources."
  },
  {
    id: 192,
    lo: "Glossary",
    question: "An applicant's chronic high blood pressure, which increases their likelihood of suffering a stroke, is a(n)",
    options: ["moral hazard", "physical hazard", "aleatory risk", "underwriting guideline"],
    answer: 1,
    explanation: "A physical hazard is a physical characteristic (health condition) that may increase likelihood of loss."
  },
  {
    id: 193,
    lo: "Glossary",
    question: "A treatable but chronic condition like arthritis or diabetes is categorized in health insurance as a(n)",
    options: ["cognitive impairment", "physical impairment", "ADL deficiency", "nonparticipating condition"],
    answer: 1,
    explanation: "A physical impairment is a treatable but generally incurable chronic condition."
  },
  {
    id: 194,
    lo: "Glossary",
    question: "Medical charges associated with visits to a doctor's office, whether in or out of a hospital, are categorized as",
    options: ["hospital expenses", "surgical expenses", "physicians’ expenses", "ancillary expenses"],
    answer: 2,
    explanation: "Physicians' expenses include charges for doctor visits both in and out of the hospital."
  },
  {
    id: 195,
    lo: "Glossary",
    question: "The employer or organization that establishes a retirement plan for the benefit of its members is the",
    options: ["plan administrator", "plan participant", "plan sponsor", "payee"],
    answer: 2,
    explanation: "The plan sponsor is the group (business, government, education) that establishes a retirement plan."
  },
  {
    id: 196,
    lo: "Glossary",
    question: "A managed care plan that allows members to choose at the time they need care whether to use a network provider or an out-of-network provider is a(n)",
    options: ["HMO", "PPO", "point-of-service (POS) plan", "CDHP"],
    answer: 2,
    explanation: "A POS plan allows members to choose between in-network and out-of-network care at the point of service."
  },
  {
    id: 197,
    lo: "Glossary",
    question: "The yearly recurrence of the date on which an insurance policy originally became effective is the",
    options: ["policy date", "policy anniversary", "maturity date", "expiration date"],
    answer: 1,
    explanation: "The policy anniversary is the anniversary of the effective date of the policy."
  },
  {
    id: 198,
    lo: "Glossary",
    question: "The money a mutual insurer pays to its participating policyowners from its divisible surplus is a(n)",
    options: ["policy loan", "policy dividend", "interest payout", "capital gain"],
    answer: 1,
    explanation: "A policy dividend is money paid to owners of participating policies from divisible surplus."
  },
  {
    id: 199,
    lo: "Glossary",
    question: "Which policy provision specifies that a whole life policyowner can borrow money from the insurer if they use the cash value as security?",
    options: ["nonforfeiture provision", "grace period provision", "policy loan provision", "dividend provision"],
    answer: 2,
    explanation: "The policy loan provision specifies terms for borrowing against the policy's cash value."
  },
  {
    id: 200,
    lo: "Glossary",
    question: "The liabilities that an insurer sets aside to represent the estimated amount needed to pay future policy benefits are",
    options: ["statutory capital", "policy reserves", "divisible surplus", "operating expenses"],
    answer: 1,
    explanation: "Policy reserves (contractual/legal/statutory reserves) are liabilities for future benefit payments."
  },
  {
    id: 201,
    lo: "Glossary",
    question: "A policyowner wants to add a specific additional benefit to their existing life insurance policy. The document that amends the original contract to include this benefit is a",
    options: ["reinstatement form", "policy rider", "assignment", "beneficiary change"],
    answer: 1,
    explanation: "A policy rider (or endorsement) is an amendment to a policy that becomes part of the contract and changes its terms."
  },
  {
    id: 202,
    lo: "Glossary",
    question: "A life insurance policy provides coverage for exactly 10 years, after which the coverage ends unless renewed. This 10-year period is the",
    options: ["grace period", "policy term", "accumulation period", "benefit period"],
    answer: 1,
    explanation: "The policy term is the specified period of time during which a term life insurance policy provides coverage."
  },
  {
    id: 203,
    lo: "Glossary",
    question: "A universal life policy feature allows the owner to take out a portion of the cash value in cash, which permanently reduces the cash value and potentially the death benefit. This is the",
    options: ["policy loan provision", "policy withdrawal provision", "partial surrender provision", "dividend option"],
    answer: 1,
    explanation: "The policy withdrawal provision (or partial surrender provision) in universal life permits the owner to reduce the cash value by withdrawing cash."
  },
  {
    id: 204,
    lo: "Glossary",
    question: "A group insurance plan allows an employee to keep their coverage even if they leave the company to work elsewhere. This feature is a(n)",
    options: ["actively-at-work provision", "conversion privilege", "portability provision", "eligibility period"],
    answer: 2,
    explanation: "A portability provision in a group policy allows a group insured whose coverage terminates for certain reasons to continue their coverage."
  },
  {
    id: 205,
    lo: "Glossary",
    question: "A managed health care plan that offers discounted costs if members use a specific network of providers, but still provides some coverage for out-of-network care, is a(n)",
    options: ["HMO", "preferred provider organization (PPO)", "CDHP", "Traditional Indemnity Plan"],
    answer: 1,
    explanation: "A PPO plan arranges for discounted care with network providers but also covers some services from providers outside the network."
  },
  {
    id: 206,
    lo: "Glossary",
    question: "An applicant for life insurance is in excellent health, has no dangerous hobbies, and has a family history of longevity. They will likely be classified as a",
    options: ["standard risk", "preferred risk", "substandard risk", "declined risk"],
    answer: 1,
    explanation: "A preferred risk is a proposed insured who presents a significantly lower-than-average likelihood of loss."
  },
  {
    id: 207,
    lo: "Glossary",
    question: "The specific amount of money an individual must pay to an insurance company in exchange for the company's promise to pay benefits is the",
    options: ["consideration", "premium", "face amount", "surplus"],
    answer: 1,
    explanation: "A premium is the specified amount of money an insurer charges to provide a policy benefit."
  },
  {
    id: 208,
    lo: "Glossary",
    question: "A health insurance benefit that specifically pays for medications that are ordered by a doctor and are not sold over-the-counter is",
    options: ["major medical coverage", "prescription drug coverage", "physicians' expense coverage", "dental coverage"],
    answer: 1,
    explanation: "Prescription drug coverage pays for doctor-prescribed drugs and medicines not available over-the-counter."
  },
  {
    id: 209,
    lo: "Glossary",
    question: "Under many disability policies, an insured who suffers total blindness is automatically considered totally disabled without needing to prove they can't work. This is",
    options: ["partial disability", "total disability", "presumptive disability", "residual disability"],
    answer: 2,
    explanation: "Presumptive disability is a stated condition (like blindness) that automatically qualifies an insured for total disability benefits."
  },
  {
    id: 210,
    lo: "Glossary",
    question: "When an individual takes out a $10,000 policy loan, the $10,000 itself (before any interest is added) is categorized as the",
    options: ["surplus", "liabilities", "principal", "premium"],
    answer: 2,
    explanation: "Principal is the sum of money originally invested, loaned, or borrowed."
  },
  {
    id: 211,
    lo: "Glossary",
    question: "A new employee is told they must wait 90 days before they are allowed to enroll in the company's group life insurance plan. This 90-day wait is the",
    options: ["eligibility period", "probationary period", "waiting period", "grace period"],
    answer: 1,
    explanation: "The probationary period is the length of time a new group member must wait before becoming eligible to enroll in a group plan."
  },
  {
    id: 212,
    lo: "Glossary",
    question: "A qualified retirement plan where the employer makes discretionary contributions to employees' accounts from the company's earnings is a(n)",
    options: ["defined benefit plan", "profit sharing plan", "ESOP", "SIMPLE IRA"],
    answer: 1,
    explanation: "A profit sharing plan is a qualified retirement plan where contributions are funded primarily from the employer's profits."
  },
  {
    id: 213,
    lo: "Glossary",
    question: "The risk of a house burning down, where there is only a possibility of loss or no loss (but no chance of gain), is a",
    options: ["speculative risk", "pure risk", "economic risk", "aleatory risk"],
    answer: 1,
    explanation: "Pure risk involves no possibility of gain; there is either a loss or no loss."
  },
  {
    id: 214,
    lo: "Glossary",
    question: "An annuity that is purchased with pre-tax dollars within a tax-advantaged retirement plan, like a 401(k), is a(n)",
    options: ["nonqualified annuity", "qualified annuity", "immediate annuity", "flexible annuity"],
    answer: 1,
    explanation: "A qualified annuity is one purchased to fund or distribute funds from a tax-advantaged retirement plan."
  },
  {
    id: 215,
    lo: "Glossary",
    question: "If an insurer's investments earned $50,000 on a $1,000,000 initial investment, the resulting 5% figure is the",
    options: ["current interest rate", "payout factor", "rate of return", "mortality rate"],
    answer: 2,
    explanation: "Rate of return is the investment earnings expressed as a percentage of the principal."
  },
  {
    id: 216,
    lo: "Glossary",
    question: "In insurance law, a piece of land and the house permanently built upon it are classified as",
    options: ["personal property", "intangible property", "real property", "common property"],
    answer: 2,
    explanation: "Real property is land and whatever is growing on or attached to the land."
  },
  {
    id: 217,
    lo: "Glossary",
    question: "Under this nonforfeiture option, the policyowner uses the net cash value to buy a whole life policy with a smaller death benefit that requires no more premiums. This is",
    options: ["extended term insurance", "reduced paid-up insurance", "cash surrender value", "automatic premium loan"],
    answer: 1,
    explanation: "The reduced paid-up option uses the cash value as a single premium to purchase paid-up life insurance of the same plan but for a smaller face amount."
  },
  {
    id: 218,
    lo: "Glossary",
    question: "The process of putting a lapsed insurance policy back into force by paying overdue premiums and providing health evidence is",
    options: ["conversion", "reinstatement", "renewal", "grace period"],
    answer: 1,
    explanation: "Reinstatement is the process by which an insurer puts back into force a policy that has been terminated or continued under nonforfeiture options."
  },
  {
    id: 219,
    lo: "Glossary",
    question: "If Insurer A wants to limit its potential loss on a massive $10 million policy, it might buy insurance from Insurer B for a portion of that risk. This is",
    options: ["direct writing", "ceding", "reinsurance", "mutualization"],
    answer: 2,
    explanation: "Reinsurance is insurance that one company (direct writer) purchases from another (reinsurer) to transfer risk."
  },
  {
    id: 220,
    lo: "Glossary",
    question: "In a reinsurance transaction, the company that accepts the risk transferred from another insurer is the",
    options: ["direct writer", "ceding company", "reinsurer", "beneficiary"],
    answer: 2,
    explanation: "The reinsurer (or assuming company) is the insurance company that accepts risks transferred from another insurer."
  },
  {
    id: 221,
    lo: "Glossary",
    question: "A term policy that allows the owner to keep the coverage at the end of the term without a medical exam, though the premium will increase based on their new age, is",
    options: ["convertible term insurance", "renewable term insurance", "whole life insurance", "yearly level insurance"],
    answer: 1,
    explanation: "Renewable term insurance gives the owner the option to continue coverage without providing evidence of insurability."
  },
  {
    id: 222,
    lo: "Glossary",
    question: "A term policy promises to pay back all the premiums paid if the insured is still alive at the end of the 20-year term. This is",
    options: ["level term", "decreasing term", "return of premium (ROP) term insurance", "increasing term"],
    answer: 2,
    explanation: "ROP term insurance pays a death benefit if the insured dies *or* returns premiums if they survive the term."
  },
  {
    id: 223,
    lo: "Glossary",
    question: "If a policyowner can change the beneficiary designation at any time without the current beneficiary's permission, the beneficiary is a(n)",
    options: ["irrevocable beneficiary", "revocable beneficiary", "contingent beneficiary", "primary beneficiary"],
    answer: 1,
    explanation: "A revocable beneficiary's designation can be changed by the policyowner at any time before the insured's death."
  },
  {
    id: 224,
    lo: "Glossary",
    question: "A life insurance policyowner's legal power to change who receives the death benefit whenever they choose is their",
    options: ["conversion privilege", "right of revocation", "insurable interest", "nonforfeiture right"],
    answer: 1,
    explanation: "The right of revocation is the owner's right to change the beneficiary designation during the insured's lifetime."
  },
  {
    id: 225,
    lo: "Glossary",
    question: "The multi-step process where a person identifies potential financial losses and decides whether to avoid, control, or transfer them is",
    options: ["underwriting", "risk management", "risk classification", "actuarial modeling"],
    answer: 1,
    explanation: "Risk management is the process in which individuals and businesses identify and assess risks and determine how to deal with them."
  },
  {
    id: 226,
    lo: "Glossary",
    question: "An individual retirement arrangement where contributions are NOT tax-deductible, but qualified withdrawals are tax-free, is a(n)",
    options: ["Traditional IRA", "Roth IRA", "SEP IRA", "SIMPLE IRA"],
    answer: 1,
    explanation: "A Roth IRA allows for nondeductible contributions and tax-free withdrawals if certain requirements are met."
  },
  {
    id: 227,
    lo: "Glossary",
    question: "Tom added a rider to his policy that provides term coverage for his wife, Carol. This is a(n)",
    options: ["children's rider", "second insured rider", "additional insured rider", "joint life rider"],
    answer: 1, // 'additional insured rider' is also used but Glossary",
    explanation: "The Glossary",
  },
  {
    id: 228,
    lo: "Glossary",
    question: "An investment instrument like a bond (debt) or a share of stock (equity) is broadly known as a(n)",
    options: ["asset", "liability", "security", "intermediary"],
    answer: 2,
    explanation: "A security is a financial asset representing an obligation of indebtedness (debt) or an ownership interest (equity)."
  },
  {
    id: 229,
    lo: "Glossary",
    question: "To manage the funds placed in variable insurance products, an insurer maintains an account that is legally isolated from its main funds. This is a(n)",
    options: ["general account", "separate account", "escrow account", "investment account"],
    answer: 1,
    explanation: "A separate account (or segregated account) isolates funds for variable products from the insurer's general account."
  },
  {
    id: 230,
    lo: "Glossary",
    question: "When a beneficiary is notified of a death benefit, they can choose between taking a single lump sum or receiving monthly payments. These choices are",
    options: ["annuity options", "nonforfeiture options", "settlement options", "dividend options"],
    answer: 2,
    explanation: "Settlement options are alternative methods the owner or beneficiary can elect for receiving policy proceeds."
  },
  {
    id: 231,
    lo: "Glossary",
    question: "A disability policy that provides income benefits for a maximum period of two years is categorized as",
    options: ["short-term disability", "long-term disability", "presumptive disability", "partial disability"],
    answer: 0,
    explanation: "Short-term individual disability coverage usually has a benefit period of 1 to 5 years (Glossary",
  },
  {
    id: 232,
    lo: "Glossary",
    question: "A law in many jurisdictions helps insurers determine who to pay if BOTH the insured and the primary beneficiary die in the same accident. This is the",
    options: ["McCarran-Ferguson Act", "ERISA", "SIMULTANEOUS DEATH ACT", "Dodd-Frank Act"],
    answer: 2,
    explanation: "The Simultaneous Death Act governs how insurance companies evaluate common-disaster situations."
  },
  {
    id: 233,
    lo: "Glossary",
    question: "Rachel bought an annuity by paying the entire cost in one large $100,000 payment. This is a",
    options: ["flexible-premium annuity", "single-premium annuity", "deferred income annuity", "indexed annuity"],
    answer: 1,
    explanation: "A single-premium annuity is purchased with the payment of a single, lump-sum premium amount."
  },
  {
    id: 234,
    lo: "Glossary",
    question: "A government-administered welfare plan established by law to provide assistance to the elderly, disabled, or unemployed is a(n)",
    options: ["private insurance plan", "group insurance plan", "social insurance program", "individual insurance program"],
    answer: 2,
    explanation: "Social insurance programs (like Social Security) are government welfare plans established by law."
  },
  {
    id: 235,
    lo: "Glossary",
    question: "A small plumbing business that is owned and operated entirely by one person is a",
    options: ["corporation", "partnership", "sole proprietorship", "fraternal society"],
    answer: 2,
    explanation: "A sole proprietorship is a business owned and operated by one person."
  },
  {
    id: 236,
    lo: "Glossary",
    question: "An insurance company that has enough assets to meet all its debts and pay all policy benefits as they come due is described as",
    options: ["liquid", "insolvent", "solvent", "consolidated"],
    answer: 2,
    explanation: "Solvent describes a company able to meet debts and pay policy benefits when they come due."
  },
  {
    id: 237,
    lo: "Glossary",
    question: "Investing in the stock market involves a chance for gain, a chance for loss, or no change. This is categorized as a",
    options: ["pure risk", "speculative risk", "personal risk", "aleatory risk"],
    answer: 1,
    explanation: "Speculative risk involves three possible outcomes: loss, gain, or no change."
  },
  {
    id: 238,
    lo: "Glossary",
    question: "The rate charged to insurance applicants who have an average likelihood of loss and fit within normal health guidelines is the",
    options: ["preferred rate", "standard premium rate", "substandard rate", "blended rate"],
    answer: 1,
    explanation: "A standard premium rate is charged to insureds classified as standard risks (average likelihood of loss)."
  },
  {
    id: 239,
    lo: "Glossary",
    question: "The set of laws in a specific state that regulates the insurance business within that state is the",
    options: ["Annual Statement", "state insurance code", "McCarran-Ferguson Act", "master contract"],
    answer: 1,
    explanation: "The state insurance code is the set of laws in each state that regulates insurance."
  },
  {
    id: 240,
    lo: "Glossary",
    question: "The administrative agency in a state responsible for ensuring that insurance companies operating there follow all laws is the",
    options: ["NAIC", "state insurance department", "FSOC", "FIO"],
    answer: 1,
    explanation: "The state insurance department is the agency that ensures insurers comply with state regulations."
  },
  {
    id: 241,
    lo: "Glossary",
    question: "A company whose ownership is divided into units called shares that can be bought and sold by investors is a",
    options: ["mutual company", "stock corporation", "partnership", "fraternal society"],
    answer: 1,
    explanation: "A stock corporation's ownership is divided into units known as shares or shares of stock."
  },
  {
    id: 242,
    lo: "Glossary",
    question: "The portion of a corporation's earnings that is paid out to the owners of its stock is a",
    options: ["policy dividend", "stockholder dividend", "surplus distribution", "premium refund"],
    answer: 1,
    explanation: "A stockholder dividend is a portion of earnings paid to owners of a corporation's stock."
  },
  {
    id: 243,
    lo: "Glossary",
    question: "An insurance company that is owned by investors who hold shares of the company's stock is a",
    options: ["mutual insurance company", "stock insurance company", "fraternal insurer", "reinsurer"],
    answer: 1,
    explanation: "A stock insurance company is owned by stockholders."
  },
  {
    id: 244,
    lo: "Glossary",
    question: "One of the several different investment funds that a variable policyowner can choose to put their premiums into is a",
    options: ["general account", "subaccount", "dividend account", "escrow account"],
    answer: 1,
    explanation: "A subaccount is an investment fund within an insurer's separate account used with variable products."
  },
  {
    id: 245,
    lo: "Glossary",
    question: "An applicant has a history of high-risk activities and some health issues but is still insurable at a higher-than-average premium. They are classified as a(n)",
    options: ["standard risk", "preferred risk", "substandard risk", "declined risk"],
    answer: 2,
    explanation: "A substandard risk (or special class risk) has a significantly greater-than-average likelihood of loss but is still insurable."
  },
  {
    id: 246,
    lo: "Glossary",
    question: "A policy provision states that the insurer won't pay if the insured dies by suicide within the first two years of the policy. This is the",
    options: ["incontestability provision", "suicide exclusion provision", "nonforfeiture provision", "grace period provision"],
    answer: 1,
    explanation: "The suicide exclusion provision states the insurer won't pay if death is by suicide within a specified period (usually 2 years)."
  },
  {
    id: 247,
    lo: "Glossary",
    question: "The part of medical coverage that specifically covers the costs of operations, whether done in an operating room or as an outpatient, pays for",
    options: ["hospital expenses", "surgical expenses", "physicians' expenses", "dental expenses"],
    answer: 1,
    explanation: "Surgical expenses include charges for inpatient and outpatient surgical procedures."
  },
  {
    id: 248,
    lo: "Glossary",
    question: "An insurance company's assets minus its total liabilities and capital equals its",
    options: ["profit", "surplus", "policy reserves", "premium revenue"],
    answer: 1,
    explanation: "Surplus is the amount by which a company’s assets exceed its liabilities and capital."
  },
  {
    id: 249,
    lo: "Glossary",
    question: "If Lisa cancels her deferred annuity just two years after buying it, the insurer will subtract a fee from her account for early termination. This is a(n)",
    options: ["contract fee", "surrender charge", "M&E charge", "service fee"],
    answer: 1,
    explanation: "A surrender charge (or CDSC) is an early withdrawal fee or full surrender fee imposed by an insurer."
  },
  {
    id: 250,
    lo: "Glossary",
    question: "In most annuities, the amount of money paid to a beneficiary if the owner dies during the accumulation phase is the",
    options: ["payout", "survivor benefit", "annuity unit", "dividend"],
    answer: 1,
    explanation: "For annuities, 'survivor benefit' is an alternate term for death benefit."
  },
  {
    id: 251,
    lo: "Glossary",
    question: "A policy provision states that a beneficiary must outlive the insured by at least 30 days to receive the death benefit. This is a(n)",
    options: ["Simultaneous Death Act", "survivorship clause", "incontestability clause", "settlement option"],
    answer: 1,
    explanation: "A survivorship clause requires a beneficiary to survive the insured for a specified period (e.g., 30 days) to get the proceeds."
  },
  {
    id: 252,
    lo: "Glossary",
    question: "A bank or insurer whose failure could pose a major risk to the entire U.S. financial system and is thus subject to stricter regulation is a",
    options: ["standard insurer", "fraternal society", "SIFI", "HMO"],
    answer: 2,
    explanation: "A SIFI is a financial institution whose failure could potentially pose a risk to the U.S. financial system."
  },
  {
    id: 253,
    lo: "Glossary",
    question: "A provision that pays a portion of the death benefit early ONLY if a doctor certifies that the insured has less than 24 months to live is a(n)",
    options: ["dread disease benefit", "terminal illness (TI) benefit", "LTC benefit", "AD&D benefit"],
    answer: 1,
    explanation: "A TI benefit typically pays a part of the death benefit if the insured has a physician-certified life expectancy of less than a stated time (e.g., 24 months)."
  },
  {
    id: 254,
    lo: "Glossary",
    question: "A life insurance policy that provides a death benefit ONLY IF the insured dies within a set period of 10 or 20 years is",
    options: ["whole life insurance", "term life insurance", "universal life", "endowment insurance"],
    answer: 1,
    explanation: "Term life insurance provides a benefit only if the insured dies during the specified period."
  },
  {
    id: 255,
    lo: "Glossary",
    question: "A business buys a life insurance policy on its president to protect the business interests. This policy is a(n)",
    options: ["individual policy", "joint policy", "third-party policy", "family policy"],
    answer: 2,
    explanation: "A third-party policy is one purchased by a person or business on the life of another person."
  },
  {
    id: 256,
    lo: "Glossary",
    question: "A condition that perfectly fits a policy's definition for being unable to perform work and thus qualifies the insured for broad income benefits is",
    options: ["partial disability", "total disability", "survivorship disability", "vested disability"],
    answer: 1,
    explanation: "Total disability meets policy requirements to qualify a person for full disability income benefits."
  },
  {
    id: 257,
    lo: "Glossary",
    question: "A retirement arrangement into which individuals can make annual pre-tax contributions that are often tax-deductible is a(n)",
    options: ["Roth IRA", "Traditional IRA", "pension plan", "annuity certain"],
    answer: 1,
    explanation: "A Traditional IRA allows for annual contributions which may be tax deductible."
  },
  {
    id: 258,
    lo: "Glossary",
    question: "An insurance company employee whose job is to evaluate applicants to determine their risk class and decide if they should get a policy is a(n)",
    options: ["actuary", "underwriter", "agent", "commissioner"],
    answer: 1,
    explanation: "An underwriter evaluates proposed risks."
  },
  {
    id: 259,
    lo: "Glossary",
    question: "The entire process of assessing applicants, classifying their risk, and making a final decision on issuing coverage is",
    options: ["risk management", "underwriting", "claims adjusting", "market conduct"],
    answer: 1,
    explanation: "Underwriting is the process of assessing and classifying risk and making a decision to accept or decline that risk."
  },
  {
    id: 260,
    lo: "Glossary",
    question: "The set of internal rules an insurer follow so that all applicants are treated consistently when determining their risk class are",
    options: ["Annual Statements", "model laws", "underwriting guidelines", "policy provisions"],
    answer: 2,
    explanation: "Underwriting guidelines are general rules an insurer uses when assigning risks to a class."
  },
  {
    id: 261,
    lo: "Glossary",
    question: "In an insurance policy, only the insurer makes a legally enforceable promise (to pay benefits). The policyowner doesn't promise to pay premiums; they just must pay to keep coverage. This makes it a(n)",
    options: ["bilateral contract", "unilateral contract", "commutative contract", "bargaining contract"],
    answer: 1,
    explanation: "In a unilateral contract, only one party (the insurer) makes a legally enforceable promise."
  },
  {
    id: 262,
    lo: "Glossary",
    question: "A form of permanent life insurance where the three elements—death benefit, cash value, and premiums—are separated and flexible is",
    options: ["whole life insurance", "universal life insurance", "term life insurance", "endowment insurance"],
    answer: 1,
    explanation: "Universal life is characterized by the separation of policy elements and its flexible face amount and premiums."
  },
  {
    id: 263,
    lo: "Glossary",
    question: "The standard amount that most doctors in a specific city charge for a particular check-up is the",
    options: ["coinsurance amount", "deductible amount", "usual, customary, and reasonable (UCR) fee", "flat fee"],
    answer: 2,
    explanation: "A UCR fee is the amount providers in a region commonly charge for a particular medical service."
  },
  {
    id: 264,
    lo: "Glossary",
    question: "A document that meets all legal requirements and is thus legally enforceable by a court is a",
    options: ["void contract", "voidable contract", "valid contract", "standard contract"],
    answer: 2,
    explanation: "A valid contract is enforceable at law."
  },
  {
    id: 265,
    lo: "Glossary",
    question: "A life insurance policy pays a fixed $500,000 benefit regardless of the actual financial loss suffered by the family. This makes it a",
    options: ["contract of indemnity", "valued contract", "bargaining contract", "bilateral contract"],
    answer: 1,
    explanation: "A valued contract pays a specified amount when a loss occurs, regardless of the actual financial loss (unlike indemnity)."
  },
  {
    id: 266,
    lo: "Glossary",
    question: "An annuity payout where the monthly benefit amount changes based on how well the chosen investment funds perform is a",
    options: ["fixed annuity", "variable annuity", "indexed annuity", "deferred annuity"],
    answer: 1,
    explanation: "In a variable annuity, payments fluctuate based on the performance of underlying investment funds."
  },
  {
    id: 267,
    lo: "Glossary",
    question: "A whole life policy where the death benefit and cash values depend on the performance of subaccounts, and premiums are set and fixed, is",
    options: ["universal life", "variable life (VL) insurance", "indexed universal life", "term life insurance"],
    answer: 1,
    explanation: "Variable life (VL) has fixed premiums but variable death benefits and values reflecting subaccount performance."
  },
  {
    id: 268,
    lo: "Glossary",
    question: "A policy that combines the investment flexibility of variable life with the premium and face amount flexibility of universal life is",
    options: ["variable universal life (VUL)", "whole life insurance", "indexed life", "family policy"],
    answer: 0,
    explanation: "VUL combines universal life flexibility with variable life investment subaccounts."
  },
  {
    id: 269,
    lo: "Glossary",
    question: "When an irrevocable beneficiary's right to policy proceeds is locked-in and cannot be taken away without their consent, they have a(n)",
    options: ["insurable interest", "vested interest", "contingent interest", "ownership interest"],
    answer: 1,
    explanation: "A vested interest is a property right that has taken effect and cannot be altered or changed without the person's consent."
  },
  {
    id: 270,
    lo: "Glossary",
    question: "The rules that define when a retirement plan participant has an absolute right to keep the money contributed by their employer are",
    options: ["eligibility requirements", "probationary requirements", "vesting requirements", "benefit formulas"],
    answer: 2,
    explanation: "Vesting requirements define when a plan participant is entitled to receive partial or full benefits even if their employment ends."
  },
  {
    id: 271,
    lo: "Glossary",
    question: "A medical benefit that specifically pays for eye exams, glasses, and contact lenses is",
    options: ["major medical coverage", "vision care coverage", "dental coverage", "physicians' expense coverage"],
    answer: 1,
    explanation: "Vision care coverage provides benefits for eye exams and corrective lenses."
  },
  {
    id: 272,
    lo: "Glossary",
    question: "A contract where one party (like a minor) has the legal right to cancel or avoid their obligations is a",
    options: ["valid contract", "void contract", "voidable contract", "bargaining contract"],
    answer: 2,
    explanation: "A voidable contract is one in which one party has the right to avoid his obligations."
  },
  {
    id: 273,
    lo: "Glossary",
    question: "A contract that was never legally enforceable from the start (e.g., it was for an illegal purpose) is a",
    options: ["valid contract", "void contract", "voidable contract", "formal contract"],
    answer: 1,
    explanation: "A void contract does not meet legal requirements and is never enforceable."
  },
  {
    id: 274,
    lo: "Glossary",
    question: "In a long-term care policy, the first 60 days of care that the insured must pay for before insurer benefits begin is the",
    options: ["probationary period", "waiting period / elimination period", "grace period", "enrollment period"],
    answer: 1,
    explanation: "The waiting period (elimination period) is the time before benefits begin."
  },
  {
    id: 275,
    lo: "Glossary",
    question: "A supplemental benefit that allows a policyowner to stop paying premiums if they become totally disabled is the",
    options: ["AD&D benefit", "accelerated death benefit", "WP benefit", "disability income benefit"],
    answer: 2,
    explanation: "The WP benefit waves the insurer's right to collect premiums while the insured is totally disabled."
  },
  {
    id: 276,
    lo: "Glossary",
    question: "A rider on a child's policy states that if the parent paying the premiums dies, the child's coverage will stay in force for free. This is the",
    options: ["juvenile insurance rider", "waiver of premium for payor benefit", "family insurance rider", "survivor benefit"],
    answer: 1,
    explanation: "This benefit waives renewal premiums if the payor (who pays premiums for another) dies or becomes totally disabled."
  },
  {
    id: 277,
    lo: "Glossary",
    question: "A type of permanent life insurance providing coverage for the insured's entire life, usually at a level premium rate, is",
    options: ["term life insurance", "whole life insurance", "endowment insurance", "annuity"],
    answer: 1,
    explanation: "Whole life provides lifetime coverage, usually with level premiums."
  },
  {
    id: 278,
    lo: "Glossary",
    question: "A term policy that provides coverage for one year at a time and automatically allows the owner to renew for next year is",
    options: ["level term insurance", "YRT insurance", "decreasing term", "whole life"],
    answer: 1,
    explanation: "YRT (or ART) insurance is a one-year term policy renewable for a stated number of years."
  },
  {
    id: 279,
    lo: "Glossary",
    question: "Jen's employer group policy was set to begin on May 1st. However, Jen was hospitalized for a severe illness on April 28th and did not return to the office until May 15th. Her coverage did not start on May 1st because of the",
    options: ["eligibility period", "actively-at-work provision", "waiting period", "grace period"],
    answer: 1,
    explanation: "The actively-at-work provision requires employees to be present at work on the effective date for coverage to begin."
  },
  {
    id: 280,
    lo: "Glossary",
    question: "Insurance companies often ask medical questions to applicants to prevent the tendency of unhealthy people to seek insurance more aggressively than healthy people. This tendency is",
    options: ["risk selection", "antiselection", "risk management", "loss control"],
    answer: 1,
    explanation: "Antiselection (or adverse selection) is the tendency of those at higher risk to seek insurance more than those at average risk."
  },
  {
    id: 281,
    lo: "Glossary",
    question: "Sam paid $500 in premiums for a life insurance policy and died shortly after. The insurer paid his beneficiary $100,000. This massive difference between the premium paid and the benefit received illustrates that insurance is",
    options: ["commutative", "aleatory", "bargaining", "bilateral"],
    answer: 1,
    explanation: "Aleatory contracts involve unequal exchanges of value based on an uncertain event."
  },
  {
    id: 282,
    lo: "Glossary",
    question: "In a real estate transaction, both the buyer and seller agree that the $300,000 price is a fair exchange for the property. This type of contract is",
    options: ["aleatory", "commutative", "unilateral", "adhesion"],
    answer: 1,
    explanation: "Commutative contracts involve a fair exchange of items or services the parties believe are of equal value."
  },
  {
    id: 283,
    lo: "Glossary",
    question: "When applying for insurance, the customer was told they could not change any of the policy's fine print. They had to 'take it or leave it.' This contract structure is a",
    options: ["bargaining contract", "contract of adhesion", "negotiated contract", "formal contract"],
    answer: 1,
    explanation: "A contract of adhesion is prepared by one party and must be accepted or rejected as a whole without bargaining."
  },
  {
    id: 284,
    lo: "Glossary",
    question: "An employee named Alex is covered under a group policy provided by their employer. Alex is known in insurance terminology as the",
    options: ["policyholder", "group insured", "assignor", "beneficiary"],
    answer: 1,
    explanation: "An individual covered by a group insurance policy is the group insured (or simply the insured)."
  },
  {
    id: 285,
    lo: "Glossary",
    question: "The beneficiary of a $100,000 policy chose to have the insurance company keep the $100,000 for 10 years and only send them monthly interest checks. This is the",
    options: ["fixed amount option", "fixed period option", "interest option", "life income option"],
    answer: 2,
    explanation: "Under the interest option, the insurer invests the proceeds and pays only the interest periodically to the payee."
  },
  {
    id: 286,
    lo: "Glossary",
    question: "The beneficiary chose to receive the policy proceeds in equal monthly installments for exactly 120 months. This is the",
    options: ["fixed period option", "fixed amount option", "interest option", "life income option"],
    answer: 0,
    explanation: "The fixed period option pays proceeds in equal installments for a specific period of time."
  },
  {
    id: 287,
    lo: "Glossary",
    question: "A widow chose to receive her husband's $250,000 death benefit in $5,000 monthly chunks until all the money and interest is gone. This is the",
    options: ["fixed period option", "fixed amount option", "interest option", "life income option"],
    answer: 1,
    explanation: "The fixed amount option pays equal installments of a stated amount until the funds are exhausted."
  },
  {
    id: 288,
    lo: "Glossary",
    question: "A man applied for insurance stating he was 35, when he was actually 40. Upon his death, the insurer adjusted the death benefit to what the premiums would have bought at the correct age. This action is allowed by the",
    options: ["incontestability provision", "misstatement of age or sex provision", "grace period provision", "nonforfeiture provision"],
    answer: 1,
    explanation: "The misstatement of age or sex provision defines the actions an insurer takes if age or sex was incorrectly stated."
  },
  {
    id: 289,
    lo: "Glossary",
    question: "A policyowner switches from paying their premium once a year to paying once a month. They have changed their",
    options: ["premium rate", "premium payment mode", "nonforfeiture option", "dividend option"],
    answer: 1,
    explanation: "The premium payment mode is the frequency at which renewal premiums are payable."
  },
  {
    id: 290,
    lo: "Glossary",
    question: "An insurer groupings insureds into 'Smoker,' 'Non-Smoker,' and 'Preferred Non-Smoker' categories to set different prices. Each category is a",
    options: ["benefit schedule", "risk class", "block of policies", "subaccount"],
    answer: 1,
    explanation: "A risk class is a grouping of insureds who represent a similar level of risk."
  },
  {
    id: 291,
    lo: "Glossary",
    question: "Why must insurers maintain separate accounts for variable products?",
    options: ["To avoid paying taxes on those funds", "To isolate investment risk and support non-guaranteed benefits", "To comply with the Simultaneous Death Act", "To manage policy loans"],
    answer: 1,
    explanation: "Separate accounts isolate funds for variable products where the investment risk is borne by the policyowner."
  },
  {
    id: 292,
    lo: "Glossary",
    question: "In a stock insurance company, extra funds beyond what is owed to policyowners and stockholders' initial investment is",
    options: ["statutory reserves", "surplus", "liabilities", "capital"],
    answer: 1,
    explanation: "Surplus is the assets remaining after all liabilities and capital are subtracted."
  },
  {
    id: 293,
    lo: "Glossary",
    question: "Company X issues a policy but sells the risk to Company Y. Company X is the:",
    options: ["Reinsurer", "Direct Writer", "Annuitant", "Beneficiary"],
    answer: 1,
    explanation: "The company that originally issues the policy is the direct writer (also known as the ceding company)."
  },
  {
    id: 294,
    lo: "Glossary",
    question: "Marcus wants to switch his 10-year term policy to whole life insurance without having to take another physical exam. He should exercise his:",
    options: ["reinstatement right", "conversion privilege", "renewal provision", "dividend option"],
    answer: 1,
    explanation: "The conversion privilege allows term insurance to be converted to cash value insurance without evidence of insurability."
  },
  {
    id: 295,
    lo: "Glossary",
    question: "Which of the following is an Activity of Daily Living (ADL)?",
    options: ["Cooking", "Bathing", "Managing Money", "Shopping"],
    answer: 1,
    explanation: "Bathing is an ADL (core functioning). Cooking and managing money are IADLs (independent living)."
  },
  {
    id: 296,
    lo: "Glossary",
    question: "Another name for the Annuity Start Date is the:",
    options: ["Liquidation period", "Income date", "Policy anniversary", "Maturity date"],
    answer: 1,
    explanation: "The annuity start date is also known as the income date (and sometimes maturity date for annuities)."
  },
  {
    id: 297,
    lo: "Glossary",
    question: "Which of the following represents the potential death benefit of a life insurance policy?",
    options: ["Accumulated value", "Face amount", "Cash surrender value", "Surrender benefit"],
    answer: 1,
    explanation: "The face amount is the amount of life insurance benefits for which an individual applies and is approved."
  },
  {
    id: 298,
    lo: "Glossary",
    question: "Which type of policy allows the owner to possibly receive dividends based on the insurer's surplus?",
    options: ["Nonparticipating", "Participating", "Term Life", "Standard"],
    answer: 1,
    explanation: "Participating policies allow owners to share in the insurer's divisible surplus (usually via dividends)."
  },
  {
    id: 299,
    lo: "Glossary",
    question: "A policy that pays $10,000 if you die, but also pays $10,000 if you reach age 100, is a(n):",
    options: ["Pure term policy", "Endowment policy", "Fixed annuity", "HMO plan"],
    answer: 1,
    explanation: "Endowment insurance pays the benefit either upon death or on a stated maturity date if the insured is alive."
  },
  {
    id: 300,
    lo: "Glossary",
    question: "The legal document that directs how an individual's property should be distributed after their death is a(n):",
    options: ["Assignment", "Will", "Bilateral contract", "Option A plan"],
    answer: 1,
    explanation: "A will is the legal document directing the distribution of property after death."
  }
];
