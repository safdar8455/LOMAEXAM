import { Question } from '../../types';

export const chapter14Questions: Question[] = [
  {
    id: 1,
    lo: "14A",
    question: "The Moonbeam Corporation failed to pay the premium for its group life insurance plan on January 1st, the due date. The policy has a 31-day grace period. On January 15th, an employee dies. Which statement is correct?",
    options: [
      "The claim is denied because the premium was not paid.",
      "The claim is paid because the policy remains in force during the grace period.",
      "The claim is paid only if the employer pays the premium before the funeral.",
      "The claim is denied, but the employer gets a refund of previous premiums."
    ],
    answer: 1,
    explanation: "Group life insurance policies remain in force during the 30- or 31-day grace period, just like individual policies."
  },
  {
    id: 2,
    lo: "14A",
    question: "Moonbeam Corporation's group policy terminates on February 1st after the 31-day grace period expires without payment. According to typical group life provisions, what is Moonbeam's obligation?",
    options: [
      "No obligation once the policy terminates.",
      "Obligated to pay the premium for the 31 days of coverage provided during the grace period.",
      "Obligated to pay the full annual premium.",
      "Obligated to pay a 10% penalty to the state."
    ],
    answer: 1,
    explanation: "Unlike individual life insurance, the group policyholder is legally obligated to pay the premium for the coverage provided during the grace period even if the policy terminates."
  },
  {
    id: 3,
    lo: "14A",
    question: "Jocelyn Picard made material misrepresentations on a medical questionnaire to qualify for group coverage (which was required for her specific class). She died 6 months later. The insurer discovers the fraud while investigating. The master contract is 5 years old. The insurer will likely:",
    options: [
      "Pay the claim because the master contract is past the 2-year contestable period.",
      "Contest Jocelyn's individual coverage without affecting the master contract.",
      "Cancel the entire group policy for all employees.",
      "Sue the employer for negligence."
    ],
    answer: 1,
    explanation: "An insurer can contest an individual group member's coverage for material misrepresentation (within the contestable period, usually 2 years from their effective date) without contesting the validity of the master group contract itself."
  },
  {
    id: 4,
    lo: "14A",
    question: "In standard group life insurance policies, who is generally allowed to be named as a beneficiary?",
    options: [
      "The group policyholder (employer) only.",
      "Any person or entity except the group policyholder (unless it is creditor life).",
      "Only the annuitant's spouse.",
      "Only the insurance company."
    ],
    answer: 1,
    explanation: "Employees have the right to name their beneficiary, but they are generally prohibited from naming the group policyholder (employer) to avoid conflicts of interest, except in group creditor life."
  },
  {
    id: 5,
    lo: "14A",
    question: "Sarah leaves her job at a tech firm. Her group life policy allows her to continue her term coverage under the same group plan for 31 days by paying a premium based on her attained age. This provision is known as:",
    options: [
      "Conversion privilege",
      "Portability provision",
      "Reinstatement provision",
      "Incontestability provision"
    ],
    answer: 1,
    explanation: "The portability provision allows an insured to continue coverage under the group plan after leaving the group. This is usually term insurance."
  },
  {
    id: 6,
    lo: "14A",
    question: "When Sarah leaves her job, she is also given the right to change her group coverage into an individual permanent life insurance policy without proving her health status. This is the:",
    options: [
      "Portability provision",
      "Conversion privilege",
      "Settlement option",
      "Grace period"
    ],
    answer: 1,
    explanation: "The conversion privilege allows a group insured to convert their coverage to an individual policy without evidence of insurability, typically within 31 days."
  },
  {
    id: 7,
    lo: "14A",
    question: "Patricia McElroy's age was mistakenly reported as 45 instead of 35 in a voluntary group life plan. The insurer discovers this after her death. How will the insurer likely handle the claim?",
    options: [
      "Adjust the death benefit amount based on the correct age.",
      "Refund the excess premium to the beneficiary and pay the full benefit schedule amount.",
      "Deny the claim due to misstatement.",
      "Pay nothing and keep all premiums."
    ],
    answer: 1,
    explanation: "In group life, since the benefit is usually fixed by a schedule, misstatements of age result in premium adjustments (retroactive refunds or bills) rather than benefit amount adjustments."
  },
  {
    id: 8,
    lo: "14A",
    question: "Which of the following describes the most common way group life insurance death benefits are paid out to beneficiaries?",
    options: [
      "Life income option",
      "Lump sum",
      "Fixed period option",
      "Interest option"
    ],
    answer: 1,
    explanation: "While other settlement options may be available, the vast majority of group life death benefits are paid in a lump sum."
  },
  {
    id: 9,
    lo: "14B",
    question: "The majority of all group life insurance policies issued today are of which type?",
    options: [
      "Whole Life",
      "Yearly Renewable Term (YRT)",
      "Universal Life",
      "Variable Universal Life"
    ],
    answer: 1,
    explanation: "Group Yearly Renewable Term (YRT) is the most common form of group life insurance."
  },
  {
    id: 10,
    lo: "14B",
    question: "An employer adds a benefit that pays an additional amount if an employee dies in a car accident or loses a limb. This is called:",
    options: [
      "Group cash value insurance",
      "Accidental death and dismemberment (AD&D) insurance",
      "Group creditor life",
      "Portability insurance"
    ],
    answer: 1,
    explanation: "AD&D provides specific benefits for accidental death or the loss of certain body parts/functions."
  },
  {
    id: 11,
    lo: "14B",
    question: "Karl Bernhard has $100,000 in group term life and $100,000 in AD&D coverage. He dies in a plane crash while on a family vacation. His beneficiary will receive:",
    options: ["$100,000", "$200,000", "$300,000", "$50,000"],
    answer: 1,
    explanation: "The beneficiary receives the basic term life ($100k) plus the AD&D benefit ($100k) because the death was accidental. Total $200,000."
  },
  {
    id: 12,
    lo: "14B",
    question: "In the same scenario as Karl Bernhard, if he also had a $50,000 'business travel accident' benefit and died while traveling to a client meeting for work, the total payout would be:",
    options: ["$200,000", "$150,000", "$250,000", "$300,000"],
    answer: 2,
    explanation: "$100k (Term) + $100k (AD&D) + $50k (Business Travel Accident) = $250,000."
  },
  {
    id: 13,
    lo: "14B",
    question: "Why might an employer offer group 'Cash Value' life insurance instead of just term insurance?",
    options: [
      "To provide coverage that continues after retirement.",
      "Because it is cheaper for the employer.",
      "To avoid all taxes forever.",
      "To comply with AD&D laws."
    ],
    answer: 0,
    explanation: "Group term insurance typically ends at retirement; cash value products (Whole Life, UL, VUL) allow employees to build values that persist or can be converted for retirement use."
  },
  {
    id: 14,
    lo: "14B",
    question: "Under a noncontributory group level premium whole life plan, who usually owns the accumulated cash values if the employee leaves?",
    options: ["The employee", "The employer", "The insurance company", "The state"],
    answer: 1,
    explanation: "In noncontributory plans (employer pays 100%), the employer typically owns the cash values."
  },
  {
    id: 15,
    lo: "14B",
    question: "Group Universal Life (UL) and Group Variable Universal Life (VUL) plans often function more like individual policies because:",
    options: [
      "The employer pays the full premium.",
      "The employee chooses their own premium amount and subaccounts.",
      "They are mandatory for all employees.",
      "They cannot be ported to other jobs."
    ],
    answer: 1,
    explanation: "In these plans, the employer often pays nothing, and the employee treats it like a personal investment/insurance account with payroll deduction ease."
  },
  {
    id: 16,
    lo: "14B",
    question: "Which of the following is a key advantage for employees enrolling in a Group VUL plan compared to buying an individual VUL policy?",
    options: [
      "Higher guaranteed interest rates.",
      "Minimal underwriting and lower costs.",
      "The employer pays for the investment gains.",
      "No investment risk."
    ],
    answer: 1,
    explanation: "Group versions offer group pricing and more liberal underwriting than individual equivalent policies."
  },
  {
    id: 17,
    lo: "14B",
    question: "A bank issues a policy that covers its mortgage borrowers. If a borrower dies, the policy pays the bank the remaining loan balance. This is:",
    options: [
      "A pension plan",
      "Group creditor life insurance",
      "Annuity life",
      "AD&D insurance"
    ],
    answer: 1,
    explanation: "Group creditor life is issued to lenders to cover the lives of their borrowers, with the lender as the beneficiary."
  },
  {
    id: 18,
    lo: "14B",
    question: "Who is the beneficiary in a group creditor life insurance policy?",
    options: ["The borrower's spouse", "The insurance company", "The group policyholder (the creditor)", "The state treasury"],
    answer: 2,
    explanation: "Unlike most other group life, the creditor (bank/lender) is the beneficiary of the coverage on the debtors."
  },
  {
    id: 19,
    lo: "14C",
    question: "Which US law is designed to protect covered employees and beneficiaries in retirement plans by ensuring plans meet specific requirements?",
    options: ["Social Security Act", "ERISA (Employee Retirement Income Security Act)", "Affordable Care Act", "Glass-Steagall Act"],
    answer: 1,
    explanation: "ERISA is the primary federal law governing private pension and benefit plans."
  },
  {
    id: 20,
    lo: "14C",
    question: "In a 'qualified' retirement plan, employer contributions are generally:",
    options: [
      "Taxable as current income to the employee.",
      "Considered a deductible business expense for the employer.",
      "Limited to $1,000 per year.",
      "Paid in gold bricks."
    ],
    answer: 1,
    explanation: "Tax qualification allows employers to deduct contributions while they are made."
  },
  {
    id: 21,
    lo: "14C",
    question: "An employee participates in a qualified plan. Taxes on employer contributions and investment gains are:",
    options: [
      "Paid every year by the employee.",
      "Deferred until the employee withdraws funds from the plan.",
      "Waived completely and forever.",
      "Paid by the state government."
    ],
    answer: 1,
    explanation: "One of the major benefits of qualified plans is tax deferral on both contributions and growth."
  },
  {
    id: 22,
    lo: "14D",
    question: "The detailed legal agreement that establishes the retirement plan, its benefits, and its funding method is the:",
    options: ["Certificate of insurance", "Plan document", "Summary plan description", "Funding vehicle"],
    answer: 1,
    explanation: "The plan document is the core legal instrument defining the plan's existence and terms."
  },
  {
    id: 23,
    lo: "14D",
    question: "Peaberry Company's retirement plan requires employees to be age 21 and have 1 year of service to join. These are examples of:",
    options: ["Vesting requirements", "Eligibility requirements", "Lapse provisions", "Settlement options"],
    answer: 1,
    explanation: "Age and service are standard criteria for becoming eligible for a retirement plan."
  },
  {
    id: 24,
    lo: "14D",
    question: "A company implements a plan where all employees are automatically enrolled unless they explicitly opt-out. This is known as:",
    options: ["Vesting enrollment", "Automatic enrollment", "Mandatory enrollment", "Creditor enrollment"],
    answer: 1,
    explanation: "Automatic enrollment helps increase participation rates in contributory plans."
  },
  {
    id: 25,
    lo: "14D",
    question: "The period of time after which a participant is entitled to keep their retirement benefits even if they leave the company is the:",
    options: ["Probationary period", "Vesting scale/requirements", "Eligibility period", "Portability period"],
    answer: 1,
    explanation: "Vesting defines when the right to employer-funded benefits becomes non-forfeitable."
  },
  {
    id: 26,
    lo: "14D",
    question: "How does the vesting of employee contributions compare to the vesting of employer contributions?",
    options: [
      "Both vest immediately.",
      "Employee contributions vest immediately, while employer contributions vest according to a schedule.",
      "Employer contributions vest immediately, while employee contributions take 10 years.",
      "Neither vests until age 65."
    ],
    answer: 1,
    explanation: "Employees are always 100% entitled to their own contributions immediately. Employer contributions usually follow a specific time-based schedule (vesting)."
  },
  {
    id: 27,
    lo: "14D",
    question: "A plan that guarantees a specific monthly income amount (e.g., $2,000/month) based on a formula is a:",
    options: ["Defined contribution plan", "Defined benefit plan", "Profit sharing plan", "ESOP"],
    answer: 1,
    explanation: "Defined benefit plans specify the outcome/benefit rather than the input/contribution."
  },
  {
    id: 28,
    lo: "14D",
    question: "In which type of plan does the EMPLOYER bear the investment risk?",
    options: ["Defined contribution plan", "Defined benefit plan", "401(k) plan", "Roth IRA"],
    answer: 1,
    explanation: "In a defined benefit plan, the employer must pay the promised amount regardless of how investments perform; thus, the employer bears the risk."
  },
  {
    id: 29,
    lo: "14D",
    question: "In a 'defined contribution' plan, what is uncertain at the time of enrollment?",
    options: [
      "The amount of the employer's contribution",
      "The exact amount of the participant's retirement benefits",
      "The name of the plan administrator",
      "The vesting schedule"
    ],
    answer: 1,
    explanation: "Because benefits depend on investment performance, the final retirement amount in a DC plan can only be estimated."
  },
  {
    id: 30,
    lo: "14D",
    question: "Who is responsible for the day-to-day operation of the retirement plan and ensuring it follows the plan document?",
    options: ["Plan participant", "Plan administrator", "Funding vehicle", "Investigator"],
    answer: 1,
    explanation: "The plan administrator oversees operation and compliance."
  },
  {
    id: 31,
    lo: "14D",
    question: "The 'funding vehicle' for a retirement plan refers to:",
    options: [
      "The truck that delivers the pension checks.",
      "The specific arrangement for investing assets (like a group annuity).",
      "The building where the HR department is located.",
      "The employee's private bank account."
    ],
    answer: 1,
    explanation: "A funding vehicle is the investment instrument where plan assets are held and grown."
  },
  {
    id: 32,
    lo: "14E",
    question: "The most common type of defined benefit plan provides a lifetime monthly income often called a:",
    options: ["Dividend", "Pension", "401(k) match", "Vested sum"],
    answer: 1,
    explanation: "Traditional pensions are the hallmark of defined benefit systems."
  },
  {
    id: 33,
    lo: "14E",
    question: "Which of the following has become the most popular type of employer-sponsored retirement plan in the US?",
    options: ["Defined benefit pension plan", "401(k) plan", "ESOP", "Profit sharing plan"],
    answer: 1,
    explanation: "The 401(k) is the dominant DC plan in the contemporary US workforce."
  },
  {
    id: 34,
    lo: "14E",
    question: "Jonathan Rydal earned $70,000 and contributed $7,000 to his standard 401(k). What is his taxable income for that year?",
    options: ["$70,000", "$63,000", "$77,000", "$35,000"],
    answer: 1,
    explanation: "Standard 401(k) contributions are pre-tax, reducing current taxable income. $70,000 - $7,000 = $63,000."
  },
  {
    id: 35,
    lo: "14E",
    question: "To participate in a 401(k), an employee enters into a:",
    options: ["Salary reduction arrangement", "Profit sharing pool", "Mandatory pension contract", "Noncontributory waiver"],
    answer: 0,
    explanation: "Employees agree to have contributions deducted directly from their wages (salary reduction)."
  },
  {
    id: 36,
    lo: "14E",
    question: "A company feature that allows an employer to contribute a portion of its profits to employee retirement accounts, but allows the employer to skip some years if profits are low, is a:",
    options: ["Pension plan", "401(k) plan", "Profit sharing plan", "ESOP"],
    answer: 2,
    explanation: "Profit sharing plans are discretionary; contributions vary based on the firm's success."
  },
  {
    id: 37,
    lo: "14E",
    question: "An ESOP (Employee Stock Ownership Plan) primary characteristic is that employer contributions are invested in:",
    options: ["Government bonds", "Gold and silver", "The employer's own stock", "Competitor stocks"],
    answer: 2,
    explanation: "ESOPs are designed to give employees ownership in their own company."
  },
  {
    id: 38,
    lo: "14E",
    question: "A small business with 50 employees wants a retirement plan with low administrative costs. Which 'SIMPLE' plan using IRAs is designed for them?",
    options: ["ESOP", "SIMPLE IRA", "SEP IRA", "457(b)"],
    answer: 1,
    explanation: "The SIMPLE (Savings Incentive Match Plan for Employees) IRA is for small businesses (generally <100 employees)."
  },
  {
    id: 39,
    lo: "14E",
    question: "A teacher at a public school or a worker at a non-profit hospital would typically participate in which type of 401(k)-like plan?",
    options: ["401(k)", "403(b) plan", "457(b) plan", "ESOP"],
    answer: 1,
    explanation: "403(b) plans are specialized for tax-exempt organizations and public schools."
  },
  {
    id: 40,
    lo: "14E",
    question: "A state or local government employee (like a city firefighter or clerk) would typically use which deferred compensation plan?",
    options: ["401(k)", "403(b) plan", "457(b) plan", "SEP IRA"],
    answer: 2,
    explanation: "457(b) plans are for government and certain non-profit executive deferrals."
  },
  {
    id: 41,
    lo: "14E",
    question: "Which of the following plans allows ONLY the employer to contribute?",
    options: ["401(k)", "Roth IRA", "SEP IRA (Simplified Employee Pension)", "SIMPLE IRA"],
    answer: 2,
    explanation: "Under a SEP IRA, only the employer makes contributions into IRAs for the employees."
  },
  {
    id: 42,
    lo: "14F",
    question: "In the United States, nearly all workers contribute mandatory payments to which large government-sponsored retirement program?",
    options: ["ERISA", "Social Security", "401(k)", "OAS"],
    answer: 1,
    explanation: "Social Security is the foundational government retirement system in the US."
  },
  {
    id: 43,
    lo: "14F",
    question: "Social Security provides monthly income benefits to covered individuals starting at age:",
    options: ["55", "62 (with reduced benefits)", "Only at age 75", "Any age after 10 years work"],
    answer: 1,
    explanation: "Retirement benefits are available starting at age 62, though 'full retirement age' is higher."
  },
  {
    id: 44,
    lo: "14F",
    question: "The universal public pension plan in Canada that provides a flat benefit amount to residents age 65 and older regardless of earnings history is the:",
    options: ["Canada Pension Plan (CPP)", "Old Age Security (OAS)", "Quebec Pension Plan (QPP)", "Social Security"],
    answer: 1,
    explanation: "OAS is a universal residencies-based flat benefit."
  },
  {
    id: 45,
    lo: "14F",
    question: "In Canada, which mandatory programs are funded through compulsory contributions from employees, employers, and the self-employed?",
    options: [
      "OAS only",
      "CPP (Canada Pension Plan) and QPP (Quebec Pension Plan)",
      "Social Security and Medicare",
      "Only the Quebec Pension Plan"
    ],
    answer: 1,
    explanation: "CPP and QPP function similarly and are funded by work-based contributions."
  },
  {
    id: 46,
    lo: "14A",
    question: "Compare the grace period in group vs individual life insurance. What is the key difference?",
    options: [
      "Group insurance has no grace period.",
      "The individual policyholder is obligated to pay for grace period coverage even if it lapses.",
      "The group policyholder is legally obligated to pay for coverage provided during the grace period even if the policy terminates.",
      "Individual policies have 90-day grace periods."
    ],
    answer: 2,
    explanation: "Standard group provisions specifically mandate the employer pay for the coverage given during those 31 days even if they don't renew."
  },
  {
    id: 47,
    lo: "14A",
    question: "The 'Incontestability' provision in group life usually limits the insurer's right to contest back to how many years from the date of issue?",
    options: ["1 year", "2 years", "5 years", "Forever"],
    answer: 1,
    explanation: "2 years is the standard contestability limit."
  },
  {
    id: 48,
    lo: "14A",
    question: "If an employee leaves a group but wants to convert her coverage to a permanent policy, she must typically do so within how many days?",
    options: ["10 days", "31 days", "90 days", "One year"],
    answer: 1,
    explanation: "31 days is the typical window for conversion or portability election."
  },
  {
    id: 49,
    lo: "14B",
    question: "Which type of insurance provides 'reduced benefits' if an insured loses a single eye or hand in an accident?",
    options: ["Term life", "AD&D", "Whole Life", "Pension"],
    answer: 1,
    explanation: "The 'Dismemberment' portion of AD&D handles loss of limbs or sight."
  },
  {
    id: 50,
    lo: "14B",
    question: "One reason group cash value life insurance is less common than group term is:",
    options: [
      "It is illegal in the US.",
      "Employees usually must pay a significant portion of the premium, leading to lower participation.",
      "It never builds value.",
      "Insurers hate it."
    ],
    answer: 1,
    explanation: "The higher cost to employees (since it builds cash) often makes it less popular than free or cheap term insurance."
  },
  {
    id: 51,
    lo: "14E",
    question: "A 401(k) plan with a 'Roth contribution feature' differs from a standard 401(k) because:",
    options: [
      "Contributions are made with after-tax dollars.",
      "The employer pays all the taxes.",
      "There is no investment risk.",
      "Distributions are always taxed twice."
    ],
    answer: 0,
    explanation: "Roth features use after-tax money today for tax-free growth and distributions later."
  },
  {
    id: 52,
    lo: "14D",
    question: "In a defined benefit plan, actuaries use assumptions about investment returns and the employee group to determine:",
    options: [
      "How much the employer MUST contribute each year to fund the promise.",
      "The name of the company stock.",
      "The color of the pension checks.",
      "The beneficiary's phone number."
    ],
    answer: 0,
    explanation: "Actuarial work is critical to ensure DB plans are sufficiently funded to meet future liabilities."
  },
  {
    id: 53,
    lo: "14C",
    question: "The phrase 'tax-deferred basis' means:",
    options: [
      "No taxes are ever paid.",
      "Taxes are paid immediately at the highest rate.",
      "Income tax payment is postponed until a later date (usually retirement).",
      "Taxes are paid by the employer instead of the employee."
    ],
    answer: 2,
    explanation: "Deferral move the tax event to the future."
  },
  {
    id: 54,
    lo: "14E",
    question: "SEP IRAs are most commonly used by:",
    options: [
      "Large corporations with 10,000+ staff.",
      "Small business owners and self-employed individuals.",
      "Teachers only.",
      "Only state governments."
    ],
    answer: 1,
    explanation: "SEPs are simple for small employers to set up."
  },
  {
    id: 55,
    lo: "14F",
    question: "What happens if a US citizen claims Social Security at age 62 instead of their full retirement age (e.g., age 67)?",
    options: [
      "Their monthly benefit is increased.",
      "Their monthly benefit is reduced.",
      "They pay no taxes on the benefit.",
      "The benefit is delayed until age 80."
    ],
    answer: 1,
    explanation: "Early retirement results in lower monthly checks relative to waiting for 'full' retirement age."
  },
  {
    id: 56,
    lo: "14A",
    question: "Does the misstatement of age provision in group life typically ADJUST THE DEATH BENEFIT?",
    options: [
      "Yes, always.",
      "No, it usually adjusts the premium required.",
      "Only for officers.",
      "Only in Canada."
    ],
    answer: 1,
    explanation: "Because group benefits are tied to schedules (like 2x salary), the insurer changes the price of the plan rather than the payout."
  },
  {
    id: 57,
    lo: "14D",
    question: "If participation in a noncontributory retirement plan is 'automatic', who is enrolled?",
    options: [
      "Only the CEO.",
      "All eligible group members.",
      "Only those who sign a 10-page contract.",
      "Nobody, unless they ask."
    ],
    answer: 1,
    explanation: "Automatic enrollment means the employer puts everyone eligible into the plan by default."
  },
  {
    id: 58,
    lo: "14B",
    question: "In a group universal life plan, the employer typically pays:",
    options: ["100% of premiums.", "50% of premiums.", "Nothing (premiums usually paid entirely by employee).", "Only the interest portion."],
    answer: 2,
    explanation: "GUL is usually an employee-pay-all voluntary benefit."
  },
  {
    id: 59,
    lo: "14E",
    question: "Savings incentive match plans (SIMPLE IRAs) are limited to businesses with no more than how many employees?",
    options: ["10", "100", "500", "1,000"],
    answer: 1,
    explanation: "The 100-employee limit is a key defining feature of SIMPLE IRAs."
  },
  {
    id: 60,
    lo: "14C",
    question: "Employee contributions to a qualified plan are typically made on a:",
    options: ["Tax-free basis.", "Tax-deferred basis.", "Double-taxed basis.", "Pre-birth basis."],
    answer: 1,
    explanation: "Income used for contributions is not taxed until taken out in the future."
  },
  {
    id: 61,
    lo: "14A",
    question: "Under the conversion privilege, the premium for the new individual policy is typically based on the insured's:",
    options: ["Original age when the group policy started", "Attained age at the time of conversion", "Average age of the group", "Beneficiary's age"],
    answer: 1,
    explanation: "Conversion uses the current (attained) age, making the new individual policy more expensive than the group coverage."
  },
  {
    id: 62,
    lo: "14B",
    question: "A group life plan that allows an employee to pay extra for a 'Total Disability' benefit is similar to which provision in individual policies?",
    options: ["Waiver of premium", "Dividend option", "Reinstatement", "Suicide clause"],
    answer: 0,
    explanation: "Group plans often offer disability-related riders or provisions like waiver of premium."
  },
  {
    id: 63,
    lo: "14D",
    question: "If a plan participant is '100% vested', what does this mean if they quit today?",
    options: [
      "They lose all benefits.",
      "They keep all contributions and all employer-funded benefits built to date.",
      "They can only keep their own contributions.",
      "The employer must double their salary."
    ],
    answer: 1,
    explanation: "Full vesting means the employee owns the rights to 100% of the accumulation in their name."
  },
  {
    id: 64,
    lo: "14E",
    question: "Which plan is primarily funded by mandatory employer contributions and provides a lifetime benefit?",
    options: ["Profit sharing", "401(k)", "Defined benefit pension", "SIMPLE IRA"],
    answer: 2,
    explanation: "Defined benefit pensions generally feature mandatory employer funding to guarantee the benefit."
  },
  {
    id: 65,
    lo: "14F",
    question: "In the US Social Security system, 'full retirement age' depends on an individual's:",
    options: ["Wealth", "Year of birth", "Number of children", "State of residence"],
    answer: 1,
    explanation: "Law changes have gradually increased the full retirement age based on when a person was born."
  },
  {
    id: 66,
    lo: "14A",
    question: "Can an insurance company contest the validity of the master group contract after 10 years for a simple clerical error in the application?",
    options: ["Yes", "No, it is past the 2-year incontestable period", "Only if it involves the CEO's health", "Only in December"],
    answer: 1,
    explanation: "The incontestability period applies to the master contract as well as individuals."
  },
  {
    id: 67,
    lo: "14B",
    question: "In group creditor life, the amount of insurance on a debtor's life usually:",
    options: [
      "Increases over time.",
      "Decreases as the loan balance is paid down.",
      "Stays at exactly $100,000 for everyone.",
      "Is set by the debtor's spouse."
    ],
    answer: 1,
    explanation: "The coverage matches the outstanding debt to ensure the loan is cleared if the debtor dies."
  },
  {
    id: 68,
    lo: "14D",
    question: "A Summary Plan Description (SPD) is provided to participants to:",
    options: [
      "Ask for more money.",
      "Inform them of their rights and how the plan works in plain language.",
      "List the names of all other employees.",
      "Sell them more insurance."
    ],
    answer: 1,
    explanation: "The SPD is a required disclosure to ensure participants understand their benefits."
  },
  {
    id: 69,
    lo: "14E",
    question: "If a company goes bankrupt, what happened to the participants' VESTED benefits in a qualified plan?",
    options: [
      "They are lost forever.",
      "They are protected by law and remain the property of the participants.",
      "They are used to pay off the company's creditors.",
      "They are converted into company stock automatically."
    ],
    answer: 1,
    explanation: "Vested benefits in qualified plans are generally held in trust and protected from the employer's creditors."
  },
  {
    id: 70,
    lo: "14F",
    question: "Quebec is unique in Canada because it has its own pension plan called the:",
    options: ["Canada Pension Plan", "Quebec Pension Plan (QPP)", "Montreal Retirement Fund", "OAS"],
    answer: 1,
    explanation: "Quebec opted out of CPP to run its own QPP."
  },
  {
    id: 71,
    lo: "14A",
    question: "A group insured dies during the 31-day window while they were CONSIDERERATING whether to convert their policy. The insurer will:",
    options: [
      "Deny the claim because they hadn't signed the new policy.",
      "Pay the death benefit anyway under the conversion coverage window provision.",
      "Pay only half the benefit.",
      "Refund the last month's premium only."
    ],
    answer: 1,
    explanation: "Insurance laws usually mandate that the coverage stays in force during that 31-day decision window."
  },
  {
    id: 72,
    lo: "14C",
    question: "Tax benefits of qualified plans are intended to:",
    options: [
      "Bankrupt the government.",
      "Encourage employers to provide retirement security for employees.",
      "Help insurers avoid all regulation.",
      "Encourage people to work until age 90."
    ],
    answer: 1,
    explanation: "Governments use tax incentives to promote private retirement savings."
  },
  {
    id: 73,
    lo: "14D",
    question: "A 'service requirement' of 2 years for a retirement plan means:",
    options: [
      "The employee must work 2 years before they are eligible to join.",
      "The employee must work 2 years before they get paid.",
      "The employer must exist for 2 years.",
      "The employee must serve on a jury for 2 years."
    ],
    answer: 0,
    explanation: "This is a common eligibility gate."
  },
  {
    id: 74,
    lo: "14E",
    question: "In a 401(k) plan, who usually determines how the money in an individual's account is invested?",
    options: ["The employer", "The government", "The individual participant", "The insurance regulator"],
    answer: 2,
    explanation: "Self-direction is a standard feature of 401(k) plans."
  },
  {
    id: 75,
    lo: "14A",
    question: "Under standard beneficiary rules, can an employee's minor child be named as a beneficiary?",
    options: ["Yes", "No", "Only if the employer agrees", "Only if the child is an employee"],
    answer: 0,
    explanation: "Minors can be named, though benefits are usually managed by a guardian or trust until they reach legal age."
  },
  {
    id: 76,
    lo: "14B",
    question: "Portable coverage under a portability provision usually consists of which type of insurance?",
    options: ["Whole Life", "Term Insurance", "Variable Annuity", "Disability Income"],
    answer: 1,
    explanation: "Ported coverage is typically term life."
  },
  {
    id: 77,
    lo: "14D",
    question: "If a plan participant is 'graded' vested (e.g., 20% more each year), and they leave after 3 years, they keep:",
    options: ["0%", "60%", "100%", "Their own contributions only"],
    answer: 1,
    explanation: "3 years x 20% = 60% of the employer contributions (plus 100% of their own)."
  },
  {
    id: 78,
    lo: "14E",
    question: "What happens to the gains if an employee sells their ESOP stock after it has increased in value?",
    options: [
      "The employer keeps the profit.",
      "The employee keeps the profit, usually subject to favorable tax treatment.",
      "The profit must be donated.",
      "The profit is illegal to keep."
    ],
    answer: 1,
    explanation: "The potential for long-term growth is the primary draw for ESOP participants."
  },
  {
    id: 79,
    lo: "14F",
    question: "Which Canadian plan is universal and not dependent on have worked or contributed previously?",
    options: ["OAS", "CPP", "QPP", "SIMPLE"],
    answer: 0,
    explanation: "Old Age Security (OAS) is a residency-based universal benefit."
  },
  {
    id: 80,
    lo: "14A",
    question: "Can an employee name a charity as their group life insurance beneficiary?",
    options: ["Yes", "No", "Only if the charity employs them", "Only if they have no living relatives"],
    answer: 0,
    explanation: "Charities are valid beneficiaries."
  },
  {
    id: 81,
    lo: "14C",
    question: "Investment earnings in a qualified plan 'accrue on a tax-deferred basis.' This means:",
    options: [
      "Dividends are taxed as they are received.",
      "The account grows without immediate taxation on gains.",
      "The insurer pays the taxes for you and sends a bill.",
      "Earnings are taxed twice."
    ],
    answer: 1,
    explanation: "Compounding growth is much more powerful when taxes aren't taken out annually."
  },
  {
    id: 82,
    lo: "14D",
    question: "In a defined benefit plan, the plan's assets are typically managed by:",
    options: ["The individual employees", "Professional investment managers for the entire plan", "The state police", "The beneficiaries"],
    answer: 1,
    explanation: "Since the employer bears the risk, they manage the total pool of assets centrally."
  },
  {
    id: 83,
    lo: "14E",
    question: "SIMPLE IRAs generally allow employees to make salary reductions up to:",
    options: ["100% of their pay", "A limit established by law", "$1 per year", "Whatever the CEO says"],
    answer: 1,
    explanation: "Like all qualified plans, the IRS sets annual dollar limits on contributions."
  },
  {
    id: 84,
    lo: "14F",
    question: "Social Security identifies those eligible for disability benefits as those who:",
    options: [
      "Have a minor cold.",
      "Are qualified disabled individuals.",
      "Choose to stop working for fun.",
      "Are under age 18 only."
    ],
    answer: 1,
    explanation: "Social Security also covers long-term disability, not just retirement."
  },
  {
    id: 85,
    lo: "14A",
    question: "Sarah's portability premium for continued coverage is based on her 'attained age.' This means as she gets older, the price will:",
    options: ["Stay the same", "Increase", "Decrease", "Disappear"],
    answer: 1,
    explanation: "Term insurance costs rise with age."
  },
  {
    id: 86,
    lo: "14B",
    question: "Standard AD&D benefits usually pay a 'principal sum' for death. Loss of one hand usually pays:",
    options: [
      "The full principal sum",
      "Half the principal sum (capital sum)",
      "Nothing",
      "A lifetime pension"
    ],
    answer: 1,
    explanation: "Partial losses pay a percentage of the total benefit."
  },
  {
    id: 87,
    lo: "14D",
    question: "Defined Contribution plans have become 'increasingly popular' because employers find them:",
    options: [
      "Easier to calculate predictable annual costs.",
      "More dangerous.",
      "Required by international law.",
      "Cheaper to pay in cash."
    ],
    answer: 0,
    explanation: "Employers prefer knowing exactly what their 'match' cost is going to be rather than the unknown liability of a DB pension."
  },
  {
    id: 88,
    lo: "14E",
    question: "The '457(b)' plan is named after:",
    options: ["The year 457 BC", "The number of pages in the bill", "A section of the Internal Revenue Code", "The speed of sound"],
    answer: 2,
    explanation: "Like 401(k) and 403(b), the names come from tax code sections."
  },
  {
    id: 89,
    lo: "14F",
    question: "Canada's Old Age Security (OAS) benefit might have to be 'repaid' by retirees who:",
    options: [
      "Have very high incomes.",
      "Live in Quebec.",
      "Are younger than 80.",
      "Don't like the government."
    ],
    answer: 0,
    explanation: "High-income earners are subject to a recovery tax (clawback) of OAS benefits."
  },
  {
    id: 90,
    lo: "14A",
    question: "If an employer-sponsored plan is 'noncontributory', who pays 100% of the premium?",
    options: ["The employee", "The employer", "The insurance company", "The state"],
    answer: 1,
    explanation: "This is a basic definition from both chapters 13 and 14."
  },
  {
    id: 91,
    lo: "14C",
    question: "Under US law, what is the maximum age a person can work until before a retirement plan CAN prevent them from participating?",
    options: ["65", "70", "75", "There is no allowed maximum age limit by law"],
    answer: 3,
    explanation: "Age discrimination laws prevent plans from setting upper age limits for participation."
  },
  {
    id: 92,
    lo: "14D",
    question: "Vesting requirements for EMPLOYEE contributions is always:",
    options: ["0% until death", "At least 50% after 5 years", "100% immediately", "5% per year"],
    answer: 2,
    explanation: "Your own money is always yours."
  },
  {
    id: 93,
    lo: "14E",
    question: "In a 'Standard Amount' benefit schedule, do benefits usually change based on salary?",
    options: ["Yes", "No", "Only if you move to Canada", "Only if you die in an accident"],
    answer: 1,
    explanation: "Standard (flat) amounts are the same for all employees regardless of pay."
  },
  {
    id: 94,
    lo: "14F",
    question: "Which Canadian plan depends on 'earnings history' and 'contributions'?",
    options: ["OAS", "CPP/QPP", "SIMPLE IRA", "401(k)"],
    answer: 1,
    explanation: "OAS is universal; CPP/QPP are work-based."
  },
  {
    id: 95,
    lo: "14A",
    question: "The 'portability' premium rate is based on the insured's age when the __________ coverage begins.",
    options: ["Initial group", "Continued (portable)", "Childhood", "Retirement"],
    answer: 1,
    explanation: "Pricing resets based on the age when you take the portability option."
  },
  {
    id: 96,
    lo: "14A",
    question: "Are misstatement of sex provisions common in group life insurance?",
    options: ["Yes, very", "No, because rates don't usually vary by sex in group life", "Only for managers", "Only in the UK"],
    answer: 1,
    explanation: "Group pricing is usually blended/unisex at the plan level."
  },
  {
    id: 97,
    lo: "14B",
    question: "In group creditor life, if a debtor dies with a $5,000 balance, the beneficiary (bank) receives:",
    options: ["$100,000", "$5,000", "Nothing", "$2,500"],
    answer: 1,
    explanation: "The benefit exactly covers the debt."
  },
  {
    id: 98,
    lo: "14D",
    question: "Benefit formulas for defined benefit plans often use variables such as salary and:",
    options: ["Weight", "Length of service", "Hair color", "Political party"],
    answer: 1,
    explanation: "Service years often act as a multiplier for pension benefits."
  },
  {
    id: 99,
    lo: "14E",
    question: "Is it possible for a 401(k) plan to allow 'profit sharing contributions' from the employer?",
    options: ["No, they must be separate", "Yes, most modern plans combine them", "Only for government employees", "Only for 403(b) plans"],
    answer: 1,
    explanation: "Combining 401(k) with profit sharing features is a highly efficient standard practice."
  },
  {
    id: 100,
    lo: "14F",
    question: "Benefit amounts for CPP/QPP are adjusted annually to reflect:",
    options: ["Employer profits", "Cost-of-living increases (inflation)", "The exchange rate", "The age of the Prime Minister"],
    answer: 1,
    explanation: "Inflation adjustments help protect the purchasing power of retirees."
  }
];


