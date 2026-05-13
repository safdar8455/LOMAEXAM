import { Question } from '../../types';

export const chapter7Questions: Question[] = [
  {
    id: 1,
    lo: "7A",
    question: "Edward Stern has a whole life insurance policy with a Waiver of Premium (WP) rider. He recently became totally disabled. If his rider has a six-month waiting period, how are the premiums handled during that first six months?",
    options: ["Reliable will waive them immediately", "Edward must continue to pay them", "The state insurance department pays them", "The premiums are deducted from his death benefit"],
    answer: 1,
    explanation: "Under a WP benefit, there is typically a 3-6 month waiting period during which the policyowner must still pay the premiums. Some riders refund these premiums later if the disability persists."
  },
  {
    id: 2,
    lo: "7A",
    question: "A policyowner-insured with a WP benefit is considered 'totally disabled' according to most riders if they cannot perform the essential duties of:",
    options: ["Their own occupation or any for which they are reasonably suited", "Only high-paying executive positions", "Any manual labor job regardless of education", "Their specific hobby or sport"],
    answer: 0,
    explanation: "Total disability is usually defined as the inability to perform the essential duties of one's own occupation or any occupation suited by education, training, or experience."
  },
  {
    id: 3,
    lo: "7A",
    question: "While Edward's premiums are being waived due to total disability under a WP rider, what happens to the cash value of his whole life policy?",
    options: ["It stops growing", "It continues to increase as if he were paying premiums", "It is frozen at its current level", "It is automatically withdrawn and sent to him"],
    answer: 1,
    explanation: "One of the key advantages of a WP benefit is that the cash value continues to grow and dividends continue to be paid just as if the policyowner were paying the premiums."
  },
  {
    id: 4,
    lo: "7A",
    question: "Universal life insurance policies usually don't offer a standard WP benefit because of their variable premiums. Instead, they often offer a:",
    options: ["Dread disease benefit", "Waiver of cost of insurance benefit", "Paid-up additions option", "Guaranteed insurability option"],
    answer: 1,
    explanation: "Since UL premiums vary, a 'waiver of cost of insurance' benefit (or monthly deduction waiver) is used to waive just the periodic charges of the policy."
  },
  {
    id: 5,
    lo: "7A",
    question: "Linda purchased a 'juvenile insurance policy' for her 5-year-old son and added a 'Waiver of Premium for Payor' benefit. If Linda dies tomorrow, what happens to the policy's premiums?",
    options: ["They are waived until her son dies", "They are waived until her son reaches a specified age (like 18 or 21)", "The son must pay them from his allowance", "The policy is cancelled immediately"],
    answer: 1,
    explanation: "The payor benefit waives premiums if the person paying them dies/becomes disabled, but only until the child reaches an age where they typically take over the policy."
  },
  {
    id: 6,
    lo: "7A",
    question: "Which supplemental benefit actually provides a monthly payment to the disabled insured, rather than just waiving the premium cost?",
    options: ["Waiver of Premium", "Disability Income Benefit", "Dread Disease Benefit", "Accidental Death Benefit"],
    answer: 1,
    explanation: "The disability income benefit promises the insurer will pay a monthly income benefit to the insured if he becomes totally disabled while the policy is in force."
  },
  {
    id: 7,
    lo: "7A",
    question: "Paxton Haynes has a $200,000 policy with a 1% disability income rider. If he becomes totally disabled, how much will his monthly benefit check be?",
    options: ["$200", "$1,000", "$2,000", "$20,000"],
    answer: 2,
    explanation: "1% of the $200,000 face amount is $2,000. This is the amount Paxton would receive monthly after the waiting period."
  },
  {
    id: 8,
    lo: "7B",
    question: "An insured with an accidental death benefit rider dies in a car crash. If the policy has a $100,000 basic death benefit and a $100,000 accidental death benefit, the total 'double indemnity' payout is:",
    options: ["$100,000", "$200,000", "$300,000", "$50,000"],
    answer: 1,
    explanation: "Double indemnity means the insurer pays double the face amount if death results from an accident."
  },
  {
    id: 9,
    lo: "7B",
    question: "Which of the following is a common exclusion found in accidental death benefit riders?",
    options: ["Death by drowning", "Death resulting from the insured's commission of a crime", "Death by car accident where no crime was involved", "Death by falling off a ladder at home"],
    answer: 1,
    explanation: "Common exclusions include suicide, war-related accidents, aviation accidents (non-passenger), and accidents resulting from committing a crime."
  },
  {
    id: 10,
    lo: "7B",
    question: "An insured person has a history of heart disease and dies in an automobile accident. The insurer's investigation found that the insured had a heart attack WHILE driving, which caused the crash. Will the accidental death benefit be paid?",
    options: ["Yes, because it was a car crash", "No, because the death was not 'directly and independently' caused by an accident", "Yes, but only 50%", "Only if the beneficiary sues"],
    answer: 1,
    explanation: "If the heart attack caused the crash, the death resulted from a disease, not an accident. The benefit is only payable if the accident is the independent cause."
  },
  {
    id: 11,
    lo: "7B",
    question: "Most accidental death benefit riders contain a provision that death must occur within __________ days of the accident for the benefit to be payable.",
    options: ["10", "30", "90", "365"],
    answer: 2,
    explanation: "A 90-day window is a standard requirement to ensure that the death was indeed caused primarily by the accident."
  },
  {
    id: 12,
    lo: "7B",
    question: "An accidental death and dismemberment (AD&D) rider provides a payout if the insured loses sight in one eye due to an accident. Usually, this 'dismemberment' payout is:",
    options: ["The full accidental death benefit", "Double the accidental death benefit", "A smaller amount, such as one-half the accidental death benefit", "Zero, unless both eyes are lost"],
    answer: 2,
    explanation: "Typically, the full benefit is paid for loss of two limbs or sight in both eyes, while a smaller portion (like 50%) is paid for loss of one limb or one eye's sight."
  },
  {
    id: 13,
    lo: "7C",
    question: "Commonly known as a 'living benefit,' which rider allows a policyowner to receive a portion of the death benefit before the insured dies?",
    options: ["Guaranteed Insurability Benefit", "Accelerated Death Benefit", "Accidental Death Benefit", "Children's Insurance Rider"],
    answer: 1,
    explanation: "Accelerated death benefits provide funds during the insured's lifetime if certain medical conditions are met."
  },
  {
    id: 14,
    lo: "7C",
    question: "When an accelerated death benefit is paid to the policyowner, what is the effect on the death benefit paid to the beneficiary later?",
    options: ["It remains the same", "It is usually reduced by the amount of the accelerated benefit paid", "It is doubled", "It is cancelled entirely"],
    answer: 1,
    explanation: "Payment of an accelerated benefit reduces the remaining value of the policy left for the beneficiary."
  },
  {
    id: 15,
    lo: "7C",
    question: "To qualify for a 'Terminal Illness' (TI) accelerated death benefit, a physician must generally certify that the insured has a life expectancy of less than:",
    options: ["5 years", "12 to 24 months", "1 month", "90 days"],
    answer: 1,
    explanation: "Terminal illness benefits are typically triggered when a doctor certifies that death is likely within 12 to 24 months."
  },
  {
    id: 16,
    lo: "7C",
    question: "How is the Terminal Illness (TI) benefit typically paid for by the insurer?",
    options: ["Through an additional monthly premium charge", "Through an administrative charge assessed ONLY when the benefit is used", "The government pays for it", "It is free and has no charges"],
    answer: 1,
    explanation: "Unlike disability or accident riders, TI benefits often don't have an extra premium; the insurer charges a fee at the time of exercise instead."
  },
  {
    id: 17,
    lo: "7C",
    question: "A 'Dread Disease' (DD) benefit, also known as a critical illness benefit, covers specific insurable events. Which of the following is NOT a 'standard' insurable event for this rider?",
    options: ["Life-threatening cancer", "Heart attack (myocardial infarction)", "Stroke", "A broken leg from a fall"],
    answer: 3,
    explanation: "DD benefits cover specific high-severity diseases like cancer, heart attack, stroke, and kidney failure, not standard physical injuries."
  },
  {
    id: 18,
    lo: "7C",
    question: "In many countries, insurers offer a 'comprehensive' DD rider which covers:",
    options: ["Only 4 diseases", "A greater number of diseases and procedures, potentially more than 30", "Only accidents", "Every possible ailment including the common cold"],
    answer: 1,
    explanation: "Comprehensive riders expand coverage to a much wider array of serious medical conditions beyond the core 4 or 5."
  },
  {
    id: 19,
    lo: "7C",
    question: "A Long-Term Care (LTC) insurance benefit is an accelerated death benefit that pays out if the insured:",
    options: ["Dies in a car accident", "Requires constant care for a medical condition", "Loses their job", "Is diagnosed with a terminal illness with 2 months to live"],
    answer: 1,
    explanation: "LTC benefits provide monthly payments to help cover the costs of constant medical care for chronic conditions."
  },
  {
    id: 20,
    lo: "7C",
    question: "When a policyowner receives LTC benefits from their life insurance policy, what usually happens to the premiums for the basic policy?",
    options: ["They must still be paid", "The insurer generally waives them during the benefit period", "They are doubled", "The beneficiary must start paying them"],
    answer: 1,
    explanation: "Insurers generally waive premiums on both the LTC benefit and the basic life insurance policy while the owner is receiving LTC payments."
  },
  {
    id: 21,
    lo: "7C",
    question: "Most LTC benefits impose a waiting period, typically 90 days, after the insured becomes eligible. This means:",
    options: ["Benefits are paid for the first 90 days only", "The insurer pays the benefits 90 days AFTER eligibility begins", "The insured must die within 90 days", "The coverage expires in 90 days"],
    answer: 1,
    explanation: "The 90-day waiting period means benefits start arriving after 90 days of eligibility have passed."
  },
  {
    id: 22,
    lo: "7D",
    question: "A supplemental life insurance policy benefit that provides term insurance coverage on the insured's spouse is a:",
    options: ["Spouse insurance rider", "Children's insurance rider", "Second insured rider", "Joint whole life policy"],
    answer: 0,
    explanation: "The spouse insurance rider provides term coverage on the spouse, often sold in coverage units usually of $5,000 each."
  },
  {
    id: 23,
    lo: "7D",
    question: "In a typical children's insurance rider, the premium charged for each coverage unit is:",
    options: ["Higher for older children", "Higher if there are more than 3 children", "A stated amount regardless of the number of children covered", "Based on each individual child's health history"],
    answer: 2,
    explanation: "One of the best values of a children's rider is that the premium is flat, covering all children (even future ones) for the same price."
  },
  {
    id: 24,
    lo: "7D",
    question: "Coverage for a child under a children's insurance rider typically does not take effect until the child is:",
    options: ["Born", "15 days old", "18 years old", "Graduated from high school"],
    answer: 1,
    explanation: "Additional children are usually covered automatically starting at age 15 days."
  },
  {
    id: 25,
    lo: "7D",
    question: "A rider that allows a child to transition their term coverage to an individual cash value life insurance policy without a medical exam when they reach adulthood is a:",
    options: ["Renewal provision", "Conversion privilege", "Waiver of premium", "Terminal illness benefit"],
    answer: 1,
    explanation: "Children's riders usually include a conversion privilege allowing the child to get their own permanent policy without proof of insurability."
  },
  {
    id: 26,
    lo: "7D",
    question: "A 'Second Insured Rider' (also called an optional insured rider) can be used to provide term coverage on:",
    options: ["Only the spouse", "A business partner or other relative", "Only the primary insured", "People the insured has never met"],
    answer: 1,
    explanation: "A second insured rider is flexible and can cover relatives, business partners, or other parties with an insurable interest."
  },
  {
    id: 27,
    lo: "7E",
    question: "A policyowner anticipates needing more coverage in the future but worries their health might decline. They should add which rider to their policy TODAY?",
    options: ["WP Rider", "Guaranteed Insurability (GI) Benefit", "Accidental Death Benefit", "Spouse Rider"],
    answer: 1,
    explanation: "The GI benefit gives the right to purchase more insurance at specified dates without providing evidence of insurability."
  },
  {
    id: 28,
    lo: "7E",
    question: "Mark has a $100,000 policy with a GI benefit. On an option date, he wants to buy $150,000 more coverage. The rider language limits buys to the face amount or a specified amount. Usually, he can buy:",
    options: ["The full $150,000", "An amount limited to the original policy's face amount or a stated GI limit, whichever is LESS", "Nothing, until he is 65", "Any amount if he pays the agent a fee"],
    answer: 1,
    explanation: "GI buys are typically limited to the original policy's face amount or a lower amount specified in the rider to control risk."
  },
  {
    id: 29,
    lo: "7E",
    question: "Most GI riders permit the policyowner to exercise the option only until the insured reaches age:",
    options: ["21", "40", "65", "85"],
    answer: 1,
    explanation: "To minimize antiselection, most GI options expire around age 40."
  },
  {
    id: 30,
    lo: "7E",
    question: "The 'Paid-Up Additions Option Benefit' is offered in connection with whole life insurance and allows the purchase of:",
    options: ["Term insurance only", "Single-premium paid-up additions", "A brand new whole life policy with regular premiums", "A health insurance policy"],
    answer: 1,
    explanation: "This benefit allows the policyowner to buy additional mini-policies that are already paid up (no more premiums) and have their own cash values."
  },
  {
    id: 31,
    lo: "7A",
    question: "The 'WOP' acronym for 'Waiver of Premium' is primarily used in which country?",
    options: ["United States", "Canada", "United Kingdom", "Japan"],
    answer: 1,
    explanation: "In Canada, Waiver of Premium is commonly abbreviated as WOP."
  },
  {
    id: 32,
    lo: "7A",
    question: "If a disabled insured dies BEFORE recovering, what does the insurer pay to the beneficiary under a policy with a WP rider?",
    options: ["The death benefit minus the waived premiums", "The full basic death benefit", "Only the waived premiums in cash", "Nothing, the policy was technically in default"],
    answer: 1,
    explanation: "The policy is kept in full force by the rider; the insurer pays the full death benefit as if premiums had been paid by the owner."
  },
  {
    id: 33,
    lo: "7A",
    question: "Does the insurer have the right to ask for proof of continued disability after the first check is sent?",
    options: ["No, once approved it's for life", "Yes, they generally reserve the right to require periodic submission of proof", "Only if the insured moves to another state", "Only if the insured is under age 18"],
    answer: 1,
    explanation: "Insurers periodically verify that the insured is still 'totally disabled' as defined by the contract."
  },
  {
    id: 34,
    lo: "7A",
    question: "A Waiver of Premium Rider typically EXCLUDES disabilities resulting from:",
    options: ["Intentionally self-inflicted injuries", "Natural causes (disease)", "Accidental falls at work", "Genetic conditions"],
    answer: 0,
    explanation: "Like many insurance provisions, WP excludes self-inflicted harm or harm resulting from committing crimes."
  },
  {
    id: 35,
    lo: "7A",
    question: "Under many WP benefits, if an insured paid premiums during the 6-month waiting period and is still disabled when it ends, the insurer will:",
    options: ["Keep those premiums as a fee", "Refund those premiums to the policyowner", "Apply them to the beneficiary's future policy", "Send them to the hospital"],
    answer: 1,
    explanation: "Some riders refund premiums paid during the waiting period once the disability is confirmed as meeting the duration requirement."
  },
  {
    id: 36,
    lo: "7B",
    question: "If an insured dies in a plane crash where they were acting as the pilot, will a typical accidental death benefit rider pay?",
    options: ["Yes, plane crashes are accidents", "No, aviation accidents where the insured acted other than as a passenger are usually excluded", "Yes, but only if they had a license", "Only if there were more than 50 passengers"],
    answer: 1,
    explanation: "Standard exclusions usually allow accidental death coverage for commercial passengers but exclude pilots or crew members."
  },
  {
    id: 37,
    lo: "7B",
    question: "The accidental death benefit is often unrelated to the basic life insurance payout in that:",
    options: ["It must be paid first", "Exclusions to the rider do NOT usually affect the basic death benefit payout", "It is only paid if the basic benefit is denied", "The beneficiary must be different"],
    answer: 1,
    explanation: "Exclusions in the rider (like aviation) only prevent the payout of the *extra* money; the basic death benefit of the main policy is almost always still paid."
  },
  {
    id: 38,
    lo: "7B",
    question: "In an AD&D rider, the 'dismemberment' benefit defines loss of a limb as:",
    options: ["Actual physical loss only", "Actual physical loss OR loss of the use of the limb", "Only loss of fingers", "Only if the limb is buried"],
    answer: 1,
    explanation: "AD&D riders often pay for the functional loss of a limb's use even if it is not physically severed."
  },
  {
    id: 39,
    lo: "7C",
    question: "Why do insurers usually offer accelerated death benefits only on policies with larger face amounts (e.g., $100,000+)?",
    options: ["To prevent poor people from getting benefits", "To keep administrative costs down relative to the benefit size", "Because small policies are illegal", "Because agents don't like small policies"],
    answer: 1,
    explanation: "The complexity and cost of medical certification and benefit calculation make it less feasible for very small policies."
  },
  {
    id: 40,
    lo: "7C",
    question: "In a Dread Disease rider, a 'discount factor' (e.g., 60%) might be applied. This means a $100,000 payout to the owner results in which cost?",
    options: ["The owner gets $100,000", "The owner gets $40,000", "The owner pays $60,000 to the insurer", "The agent keeps the money"],
    answer: 1,
    explanation: "A 60% discount factor applied to $10,000 of benefit accelerated usually yields a $4,000 payout ($10,000 - $6,000 discount)."
  },
  {
    id: 41,
    lo: "7C",
    question: "Which accelerated death benefit is MOST likely to be paid out in monthly installments rather than a lump sum?",
    options: ["Terminal Illness Benefit", "Long-Term Care (LTC) Benefit", "Accidental Death Benefit", "Guaranteed Insurability Benefit"],
    answer: 1,
    explanation: "LTC benefits are specifically designed to help meet ongoing costs of care, so they are typically paid monthly."
  },
  {
    id: 42,
    lo: "7D",
    question: "A spouse insurance rider typically provides __________ coverage.",
    options: ["Permanent whole life", "Term life", "Universal life", "Annuitized"],
    answer: 1,
    explanation: "Supplemental riders for additional insureds almost always provide term insurance."
  },
  {
    id: 43,
    lo: "7D",
    question: "If an insured purchases 5 units of a children's insurance rider where each unit is $2,000, how much coverage does each child have?",
    options: ["$2,000", "$5,000", "$10,000", "$25,000"],
    answer: 2,
    explanation: "5 units * $2,000 per unit = $10,000."
  },
  {
    id: 44,
    lo: "7D",
    question: "Term insurance on a child under a children's rider typically expires when the child reaches age:",
    options: ["18", "21 or 25", "65", "The same age as the primary insured"],
    answer: 1,
    explanation: "Children's riders cover young family members during their dependent years (up to 21 or 25)."
  },
  {
    id: 45,
    lo: "7D",
    question: "A 'Family Insurance Rider' combines which two coverages?",
    options: ["Insured + Neighbor", "Spouse + Children", "Whole Life + Annuity", "Terminal Illness + Accidental Death"],
    answer: 1,
    explanation: "A family insurance rider is a combined rider for the spouse and all children."
  },
  {
    id: 46,
    lo: "7E",
    question: "On a GI option date, if a policyowner chooses NOT to exercise the option to buy more insurance:",
    options: ["The whole policy is cancelled", "That specific option is lost forever, but they can exercise the NEXT one later", "They are fined $500", "The face amount of the policy is reduced"],
    answer: 1,
    explanation: "GI options are use-it-or-lose-it for that specific date, but the rider continues to provide future dates until expiration."
  },
  {
    id: 47,
    lo: "7E",
    question: "Guaranteed Insurability riders often permit 'off-schedule' option dates triggered by which events?",
    options: ["Marriage or birth/adoption of a child", "Promotion at work", "Buying a new car", "Death of a favorite celebrity"],
    answer: 0,
    explanation: "GI benefits often allow for immediate coverage increases when major life events occur that increase insurance needs."
  },
  {
    id: 48,
    lo: "7E",
    question: "The premium for additional insurance purchased through a GI rider is based on the insured's:",
    options: ["Original issue age", "Attained age at the time of purchase", "Maximum age mentioned in the policy", "Average age of their family"],
    answer: 1,
    explanation: "Like most new insurance purchases, the premium reflects the age of the insured at the time the new coverage is added."
  },
  {
    id: 49,
    lo: "7A",
    question: "Which supplemental benefit is often classified legally as a type of 'health insurance' even though it is added to a life policy?",
    options: ["Accelerated Death Benefit", "Supplemental Disability Benefits (like WP/Income)", "Accidental Death Rider", "Paid-Up Additions Option"],
    answer: 1,
    explanation: "Because disability benefits cover losses from sickness or injury, they are functionally health insurance."
  },
  {
    id: 50,
    lo: "7A",
    question: "A monthly deduction waiver benefit in a UL policy usually waives:",
    options: ["The entire annual premium", "Most of the periodic charges (mortality/admin) of the policy", "The owner's credit card bills", "The agent's next 3 commissions"],
    answer: 1,
    explanation: "In UL policies, this rider keeps the policy from lapsing by waiving the internal costs that drain the cash value."
  },
  {
    id: 51,
    lo: "7A",
    question: "To qualify for a WP benefit, the policyowner must notify the insurer in what manner?",
    options: ["Phone call", "In writing", "Email to the agent's personal account only", "Social media post"],
    answer: 1,
    explanation: "Formal written notification is required to initiate a WP claim."
  },
  {
    id: 52,
    lo: "7A",
    question: "If an insured is 100% disabled but only for TWO months, and their rider has a 6-month waiting period, will premiums be waived?",
    options: ["Yes, once they recover", "No, the disability did not last long enough to satisfy the waiting period", "Yes, for both months", "Only if they were in a hospital"],
    answer: 1,
    explanation: "Waiting periods help insurers avoid the high cost of processing small claims for short-term disabilities."
  },
  {
    id: 53,
    lo: "7A",
    question: "Which of the following is TYPICALLY required for a Payor benefit to be added to a juvenile policy?",
    options: ["Evidence of insurability for the child only", "Evidence of insurability for both the child AND the payor (adult)", "A bank statement from the parent", "Proof the child is in school"],
    answer: 1,
    explanation: "Since the benefit triggers based on the payor's death/disability, the insurer must assess the payor's risk as well."
  },
  {
    id: 54,
    lo: "7A",
    question: "In a Payor benefit description, the 'two-part' definition of disability usually changes after how many years?",
    options: ["1 year", "2 years", "10 years", "Until age 21"],
    answer: 1,
    explanation: "Many riders define disability as 'own occupation' for 2 years, then 'any occupation' thereafter."
  },
  {
    id: 55,
    lo: "7A",
    question: "If an insured has both a Disability Income Benefit and a WP rider, and they become totally disabled, what is the 'double advantage'?",
    options: ["They get two death benefits", "They receive monthly income AND their premiums are waived", "They receive double their monthly income", "Their policy is doubled for free"],
    answer: 1,
    explanation: "Most policies with income riders also include WP to ensure the policy stays active while income is being paid."
  },
  {
    id: 56,
    lo: "7B",
    question: "Which of the following deaths would NOT trigger an Accidental Death Benefit payout?",
    options: ["Death in an accidental building fire", "Death due to a bacterial infection/disease", "Death in a multi-car pileup", "Death from an accidental slip and fall"],
    answer: 1,
    explanation: "Accidental death benefits exclude deaths from sickness, disease, or natural causes."
  },
  {
    id: 57,
    lo: "7B",
    question: "If an accidental death benefit payout is THREE times the policy's face amount, it might be called:",
    options: ["Double Indemnity", "Triple Indemnity", "Quadruple Indemnity", "Aleatory Payout"],
    answer: 1,
    explanation: "Indemnity multiples refer to the face amount (Double = 2x, Triple = 3x)."
  },
  {
    id: 58,
    lo: "7B",
    question: "Is 'Suicide' covered by an accidental death benefit rider?",
    options: ["Often yes, after two years", "No, it is a standard exclusion", "Only if a note was left", "Only if it happened by accident"],
    answer: 1,
    explanation: "Accidental death insurance is for unexpected external events; intentional self-harm is excluded."
  },
  {
    id: 59,
    lo: "7B",
    question: "Accidental physical loss of a limb is often synonymous with __________ in AD&D policies.",
    options: ["Loss of a fingernail", "Loss of use of the limb", "Temporary numbness", "Only if a doctor says so"],
    answer: 1,
    explanation: "Functionality (loss of use) is usually treated the same as physical severance in modern riders."
  },
  {
    id: 60,
    lo: "7C",
    question: "The payment of an accelerated death benefit is strictly voluntary for whom?",
    options: ["The insurer - they must offer it", "The policyowner - they must elect to receive it", "The state - they must order it", "The beneficiary - they must demand it"],
    answer: 1,
    explanation: "It is an option the policyowner chooses to exercise based on their needs."
  },
  {
    id: 61,
    lo: "7C",
    question: "What document MUST a beneficiary often sign before an accelerated death benefit is paid to the owner?",
    options: ["A new application", "A release acknowledging the reduction in their future death benefit", "A will", "Their tax return"],
    answer: 1,
    explanation: "To prevent legal disputes later, the beneficiary confirms they understand the payout is coming out of their future inheritance."
  },
  {
    id: 62,
    lo: "7C",
    question: "A Terminal Illness benefit maximum usually falls between what percentages of the face amount?",
    options: ["1% to 10%", "25% to 75%", "Exactly 100% always", "None of the above"],
    answer: 1,
    explanation: "Standard limits are often 25% to 75% to ensure some value remains for actual death burial costs."
  },
  {
    id: 63,
    lo: "7C",
    question: "Which accelerated death benefit primarily covers the 'End-stage renal failure'?",
    options: ["Terminal Illness Benefit", "Dread Disease Benefit", "Long-Term Care Benefit", "Guaranteed Insurability Benefit"],
    answer: 1,
    explanation: "Dread disease riders cover specific major diagnoses like organ failures."
  },
  {
    id: 64,
    lo: "7C",
    question: "How does the Long-Term Care life insurance benefit DIFFER from a standalone LTC medical policy?",
    options: ["It is exactly the same", "It reduces the life insurance death benefit, whereas standard LTC insurance is separate", "It doesn't require a medical condition", "It is paid for by the government"],
    answer: 1,
    explanation: "LTC riders 'use up' the life insurance value, while standalone LTC insurance is an independent health product."
  },
  {
    id: 65,
    lo: "7C",
    question: "If an insured with a $100,000 policy and a 2% LTC rider qualifies for benefits, how much will they receive monthly?",
    options: ["$200", "$1,000", "$2,000", "$20,000"],
    answer: 2,
    explanation: "2% of $100,000 is $2,000."
  },
  {
    id: 66,
    lo: "7D",
    question: "Spouse riders are usually __________ expensive than a separate policy for that spouse.",
    options: ["More", "Less", "Exactly as", "Free"],
    answer: 1,
    explanation: "Adding a rider is generally more convenient and cheaper than the administrative overhead of a second policy."
  },
  {
    id: 67,
    lo: "7D",
    question: "A spouse and children's insurance rider is also known as a:",
    options: ["Unit rider", "Family insurance rider", "GI benefit", "AD&D benefit"],
    answer: 1,
    explanation: "A family rider covers the main group of dependents (spouse and kids)."
  },
  {
    id: 68,
    lo: "7D",
    question: "The second person insured under a 'Second Insured Rider' is formally called the:",
    options: ["Under-insured", "Second insured", "Drafted party", "Sub-beneficiary"],
    answer: 1,
    explanation: "The text explicitly names the person under the rider as the 'second insured'."
  },
  {
    id: 69,
    lo: "7D",
    question: "Can a Second Insured Rider cover a business partner?",
    options: ["No, only family", "Yes", "Only if the partner is a sibling", "Only for group insurance"],
    answer: 1,
    explanation: "The rider is flexible and can cover unrelated parties like business partners."
  },
  {
    id: 70,
    lo: "7E",
    question: "A Guaranteed Insurability Option (GIO) is another name for which rider?",
    options: ["WP Rider", "Guaranteed Insurability (GI) Benefit", "Dread Disease Rider", "LTC Rider"],
    answer: 1,
    explanation: "GIO and GI benefit are used interchangeably for the right to buy more coverage."
  },
  {
    id: 71,
    lo: "7E",
    question: "A GI rider attached to a $100,000 policy typically allows buys every __________ years.",
    options: ["1", "3", "10", "20"],
    answer: 1,
    explanation: "Standard option dates are typically every 3 years."
  },
  {
    id: 72,
    lo: "7E",
    question: "Can an insured who is currently in a hospital with a severe illness buy more insurance through their GI rider?",
    options: ["No, they must be healthy", "Yes, that is the 'guarantee' of the rider", "Only if they pay double", "Only for their children"],
    answer: 1,
    explanation: "The core purpose of the GI rider is to guarantee the right to buy MORE coverage even if the insured becomes uninsurable (sick)."
  },
  {
    id: 73,
    lo: "7E",
    question: "Which rider allows a policyowner to essentially 'pre-pay' for small increases in whole life coverage?",
    options: ["WP Rider", "Paid-Up Additions Option Benefit", "Terminal Illness Rider", "Spouse Rider"],
    answer: 1,
    explanation: "Paid-up additions allow for periodic single-premium purchases of mini permanent policies."
  },
  {
    id: 74,
    lo: "7E",
    question: "If a policyowner misses their GI option date, is the right to buy more insurance completely lost forever?",
    options: ["Yes, the whole rider is cancelled", "No, just that specific option date is lost; future ones remain", "Yes, they must pay a fine to get it back", "Only if the insured is over 30"],
    answer: 1,
    explanation: "Users lose individual options on specific dates but keep future dates provided they are within the age range (e.g. under 40)."
  },
  {
    id: 75,
    lo: "7A",
    question: "WP rider benefits normally expire when the insured reaches which 'standard' retirement age?",
    options: ["40", "60 or 65", "85", "Never"],
    answer: 1,
    explanation: "Supplemental disability features usually drop off policies once the insured reaches normal retirement age (60 or 65)."
  },
  {
    id: 76,
    lo: "7A",
    question: "Waiters and Payors: If the insured is a child and the father dies, which rider triggers?",
    options: ["WP Rider", "Payor Rider", "AD&D Rider", "TI Rider"],
    answer: 1,
    explanation: "The Payor rider triggers when the person paying (adult) dies, whereas WP triggers when the insured (child in this case) becomes disabled."
  },
  {
    id: 77,
    lo: "7B",
    question: "Does an accidental death benefit expire?",
    options: ["No, it lasts for life", "Yes, usually when the insured reaches age 65 or 70", "Only if the policy lapses", "Only if the insurer tells you"],
    answer: 1,
    explanation: "Like many high-risk riders, ADB usually expires as the insured enters high-mortality ages."
  },
  {
    id: 78,
    lo: "7B",
    question: "In AD&D insurance, which event pays the full accidental death benefit?",
    options: ["Loss of one hand", "Loss of one foot", "Loss of sight in both eyes", "Loss of one thumb"],
    answer: 2,
    explanation: "Standard AD&D pays the 'Principal Sum' (Full benefit) for loss of life or two major functional units (2 eyes, 2 limbs, or 1 and 1)."
  },
  {
    id: 79,
    lo: "7C",
    question: "Accelerated death benefits are generally paid to whom?",
    options: ["The beneficiary directly", "The policyowner", "The doctor", "The hospital"],
    answer: 1,
    explanation: "These are considered 'living benefits' for the policyowner to help with expenses."
  },
  {
    id: 80,
    lo: "7D",
    question: "Which rider offers the GREATER amount of potential coverage: Spouse Rider or Second Insured Rider?",
    options: ["Spouse Rider", "Second Insured Rider (often up to face amount of basic policy)", "They are exactly the same", "Neither has a limit"],
    answer: 1,
    explanation: "Second insured riders are often more generous with coverage limits than standard spouse units."
  },
  {
    id: 81,
    lo: "7A",
    question: "The defined waiting period for WP benefits (3-6 months) is designed primarily to:",
    options: ["Frustrate the owner", "Reduce expenses for short-term/temporary disabilities", "Make the insurer more profit", "Avoid paying all claims"],
    answer: 1,
    explanation: "It filters out minor injuries/sicknesses that don't represent the long-term financial risk meant for insurance."
  },
  {
    id: 82,
    lo: "7A",
    question: "Can an insurer ask for a medical certificate from a doctor to prove total disability?",
    options: ["No, word of mouth is fine", "Yes, proof is always required", "Only in Canada", "Only for children"],
    answer: 1,
    explanation: "Validation by a medical professional is a standard requirement for disability benefits."
  },
  {
    id: 83,
    lo: "7A",
    question: "Disabilities suffered while COMMITTING A CRIME are usually __________ for WP benefits.",
    options: ["Included", "Excluded", "Paid double", "Only paid if the crime was a misdemeanor"],
    answer: 1,
    explanation: "Illegal activities are a standard exclusion for supplemental life insurance benefits."
  },
  {
    id: 84,
    lo: "7A",
    question: "A Waiver of Premium Rider triggers when the insured is __________.",
    options: ["Unemployed", "Retired", "Totally disabled", "Unhappy"],
    answer: 2,
    explanation: "Total disability (physically/mentally unable to work) is the trigger."
  },
  {
    id: 85,
    lo: "7B",
    question: "If an insured dies in a car accident while they were committing a robbery, will the rider pay?",
    options: ["Yes", "No, crime-related accidents are excluded", "Only if they didn't catch them", "Only if the robbery was small"],
    answer: 1,
    explanation: "Losses stemming from criminal activity are excluded from supplemental safety benefits."
  },
  {
    id: 86,
    lo: "7C",
    question: "Policyowners can use accelerated death benefit funds for:",
    options: ["Medical expenses only", "Debts only", "Travel expenses only", "Any purpose whatsoever"],
    answer: 3,
    explanation: "While often meant for healthcare, the cash payout has no restricted use by the policyowner."
  },
  {
    id: 87,
    lo: "7D",
    question: "Are adopted children covered by a standard Children's Insurance Rider?",
    options: ["No, only biological", "Yes, they are covered automatically after they join the family thereafter", "Only if they pass a medical exam", "Only if they are under 5"],
    answer: 1,
    explanation: "Child riders cover all children in the household, including subsequent births or adoptions."
  },
  {
    id: 88,
    lo: "7E",
    question: "The GI Benefit helps combat which common insurance problem?",
    options: ["Lapses", "Becoming uninsurable due to health changes", "High mortality in babies", "Insolvency of the insurer"],
    answer: 1,
    explanation: "It 'locks in' the right to buy more coverage regardless of what happens to your health later."
  },
  {
    id: 89,
    lo: "7B",
    question: "Determining 'precise cause' of death for ADB is difficult because:",
    options: ["Coroners are lazy", "Health history (like heart disease) often interacts with accidental events", "Insurers never investigate", "The PDF says it isn't difficult"],
    answer: 1,
    explanation: "Medical complexity (e.g. heart attack leading to crash vs crash leading to death) can complicate claims."
  },
  {
    id: 90,
    lo: "7A",
    question: "The Disability Income Benefit 'monthly payment' is usually a percentage of:",
    options: ["Current income", "Policy's face amount", "Premiums paid", "Bank balance"],
    answer: 1,
    explanation: "It is usually calculated as a percentage (like 1%) of the overall life policy's total benefit value."
  },
  {
    id: 91,
    lo: "7C",
    question: "Does an accelerated death benefit payout include the beneficiary's signature?",
    options: ["Always required", "Often required as a release acknowledging future reduction", "Never required", "Only for children"],
    answer: 1,
    explanation: "Beneficiaries must sign to show they realize their future portion of the benefit is being used now."
  },
  {
    id: 92,
    lo: "7D",
    question: "A married insured can purchase: a spouse rider, a children's rider, or both?",
    options: ["Spouse only", "Children only", "Both", "Neither"],
    answer: 2,
    explanation: "Insurers offer both riders to provide complete household protection."
  },
  {
    id: 93,
    lo: "7E",
    question: "Missing ONE option date on a GI rider means that specific date is LOST FOREVER?",
    options: ["Yes", "No, just delayed", "Only if you were sick", "Depends on the agent"],
    answer: 0,
    explanation: "Missing an option date means you cannot go back and use it; you have to wait for the next scheduled one."
  },
  {
    id: 94,
    lo: "7B",
    question: "Double Indemnity is to 2x as Triple Indemnity is to __________.",
    options: ["1x", "3x", "4x", "10x"],
    answer: 1,
    explanation: "Standard indemnity prefixes."
  },
  {
    id: 95,
    lo: "7A",
    question: "Can a WP rider be added to a policy AFTER it is issued?",
    options: ["Yes, usually as a rider/endorsement", "No, only at issue", "Only if the company is losing money", "Only if the insured is a child"],
    answer: 0,
    explanation: "Riders are flexible and can often be added (with underwriting) or dropped at the owner's request."
  },
  {
    id: 96,
    lo: "7C",
    question: "Terminal illness benefits are typically paid for in which way?",
    options: ["Monthly extra premium", "Administrative charge ONLY upon exercise", "Free of charge forever", "A high percentage of the agent's fee"],
    answer: 1,
    explanation: "TI benefits are 'back-end' loaded fees rather than 'front-end' periodic premiums."
  },
  {
    id: 97,
    lo: "7D",
    question: "A child's conversion to a permanent policy often allows them to buy up to how many times their term amount?",
    options: ["1x", "2x", "5x", "100x"],
    answer: 2,
    explanation: "Most children's riders allow a 'jump' in coverage (e.g. 5 times the term amount) upon conversion."
  },
  {
    id: 98,
    lo: "7A",
    question: "Disability Benefits are generally classified as a type of health insurance. Is this true?",
    options: ["Yes", "No", "Only in the UK", "Only for whole life"],
    answer: 0,
    explanation: "Even when attached to life policies, they are functionally health-risk products."
  },
  {
    id: 99,
    lo: "7B",
    question: "War-related accidents are __________ in most accidental death benefit riders.",
    options: ["Covered", "Excluded", "Paid double", "Mandatory"],
    answer: 1,
    explanation: "Standard high-risk war exclusions apply to supplemental accident riders."
  },
  {
    id: 100,
    lo: "7C",
    question: "Does an accelerated death benefit typically pay out 100% of the face amount?",
    options: ["Yes, always", "No, typically a stated percentage (25% to 75%)", "Only for children", "Only if the insurer sues"],
    answer: 1,
    explanation: "Most riders limit the acceleration to a portion of the benefit to keep the policy active for final burial and estate needs."
  }
];
