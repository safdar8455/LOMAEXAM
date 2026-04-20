import { Question } from '../types';

export const chapter6Questions: Question[] = [
  {
    id: 1,
    lo: "6A",
    question: "Kevin is looking for a life insurance policy that not only provides a death benefit for his entire life but also includes a savings component he can access if needed. Which type of insurance is best suited for Kevin?",
    options: ["Term life insurance", "Cash value life insurance", "Group term insurance", "Accidental death insurance"],
    answer: 1,
    explanation: "Cash value life insurance provides coverage for the entire lifetime of the insured and includes a savings element known as the cash value."
  },
  {
    id: 2,
    lo: "6A",
    question: "Unlike term life insurance, cash value life insurance is characterized by which of the following?",
    options: ["It remains in force for only a specific period", "It provides coverage for the entire lifetime of the insured", "It never accumulates any monetary value during the insured's life", "It is usually the least expensive form of life insurance"],
    answer: 1,
    explanation: "Cash value life insurance distinguishes itself by providing lifetime coverage and a savings element, whereas term life is temporary and typically lacks cash value."
  },
  {
    id: 3,
    lo: "6A",
    question: "Sarah surrenders her cash value policy and receives the 'cash surrender value.' How is this value typically determined?",
    options: ["It is the face amount of the policy", "It is the cash value minus adjustments for factors like policy loans and charges", "It is the total of all premiums paid without any deductions", "It is a flat fee determined by the state"],
    answer: 1,
    explanation: "The cash surrender value is the amount a policyowner is entitled to receive upon surrendering the policy, adjusted for loans and applicable charges."
  },
  {
    id: 4,
    lo: "6B",
    question: "Marcus wants a whole life policy where he pays the same premium amount every year for as long as he lives. Which type of policy should he choose?",
    options: ["Limited-payment whole life", "Single-premium whole life", "Continuous-premium whole life", "Modified-premium whole life"],
    answer: 2,
    explanation: "Under a continuous-premium whole life policy (or straight life), premiums are level and payable until the death of the insured."
  },
  {
    id: 5,
    lo: "6B",
    question: "Which type of whole life policy would require the LOWEST annual premium payment for a 30-year-old applicant?",
    options: ["10-payment whole life", "20-payment whole life", "Continuous-premium whole life", "Paid-up-at-age-65 whole life"],
    answer: 2,
    explanation: "Because premiums are spread over the longest possible period (the entire life), the annual payment for continuous-premium policies is lower than for limited-payment options."
  },
  {
    id: 6,
    lo: "6B",
    question: "Jennifer purchased a '20-payment whole life' policy. What happens to her coverage after she makes her 20th annual premium payment?",
    options: ["The coverage expires immediately", "The policy becomes 'paid-up' and coverage continues for life", "The death benefit is reduced by 50%", "She must convert it to a term policy"],
    answer: 1,
    explanation: "A limited-payment policy becomes 'paid-up' at the end of the premium payment period, requiring no further premiums to provide lifetime coverage."
  },
  {
    id: 7,
    lo: "6B",
    question: "In terms of cash value accumulation, how does a limited-payment policy generally compare to a continuous-premium policy of the same face amount?",
    options: ["Cash values build more slowly", "Cash values build more rapidly", "There is no difference in the pace of accumulation", "Cash values only begin building after 20 years"],
    answer: 1,
    explanation: "Because annual premiums are higher in limited-payment policies, the cash values generally build more rapidly than in continuous-premium policies."
  },
  {
    id: 8,
    lo: "6B",
    question: "Ahmad, age 50, wants to make one large payment and never worry about premiums again while having immediate access to a significant cash value. He should purchase a:",
    options: ["Variable universal life policy", "Single-premium whole life policy", "Modified coverage policy", "Joint whole life policy"],
    answer: 1,
    explanation: "A single-premium whole life policy requires only one payment, provides lifetime coverage, and has a sizable cash value available immediately."
  },
  {
    id: 9,
    lo: "6B",
    question: "The Zenith Life Insurance Company offers a policy where the annual premium is $400 for the first five years and then increases to $850 for the remainder of the policy's life. This is a:",
    options: ["Modified coverage policy", "Modified-premium whole life policy", "Limited-payment policy", "Joint whole life policy"],
    answer: 1,
    explanation: "A modified-premium whole life policy features a lower initial premium for a few years that then increases to a higher level for the life of the policy."
  },
  {
    id: 10,
    lo: "6B",
    question: "What is the primary advantage of a modified-premium whole life policy for a young professional with a currently low but growing income?",
    options: ["The cash value builds faster than any other policy", "It allows them to purchase a larger amount of insurance than they could otherwise afford", "It provides a death benefit that increases over time", "It is the only policy that covers professional liability"],
    answer: 1,
    explanation: "The lower initial premium makes the policy more affordable early on, allowing the purchase of a higher face amount."
  },
  {
    id: 11,
    lo: "6B",
    question: "A policy that begins with a $200,000 face amount but decreases to $100,000 when the insured reaches age 65 (to reflect reduced needs) is known as a:",
    options: ["Modified-premium policy", "Modified coverage whole life policy", "Decreasing term policy", "Endowment policy"],
    answer: 1,
    explanation: "A modified coverage policy is a whole life policy where the amount of insurance decreases at certain ages or time periods."
  },
  {
    id: 12,
    lo: "6B",
    question: "Joint whole life insurance is often referred to as 'first-to-die' insurance because the death benefit is paid when:",
    options: ["Both insured parties pass away", "The first of the two insured parties passes away", "The insured's children pass away", "The policy reaches its maturity date"],
    answer: 1,
    explanation: "Joint whole life (first-to-die) pays the benefit upon the death of one of the insureds, after which the policy usually ends."
  },
  {
    id: 13,
    lo: "6B",
    question: "A husband and wife purchase a joint whole life policy. After the husband dies and the benefit is paid, what provision usually allows the wife to continue her own coverage?",
    options: ["A conversion privilege with evidence of insurability", "A specified period to buy an individual policy without evidence of insurability", "An automatic increase in her death benefit", "A return of premiums paid by the husband"],
    answer: 1,
    explanation: "Most joint whole life policies allow the surviving insured a period (e.g., 60-90 days) to buy an individual policy without proof of insurability."
  },
  {
    id: 14,
    lo: "6B",
    question: "Last survivor life insurance (second-to-die) is most commonly used by married couples for which of the following purposes?",
    options: ["To provide immediate income for a surviving spouse", "To provide funds to pay estate taxes after both individuals have died", "To ensure the first-to-die is buried properly", "To replace a children's education fund immediately"],
    answer: 1,
    explanation: "Last survivor insurance was designed primarily to fund estate taxes that are often levied after both spouses pass away."
  },
  {
    id: 15,
    lo: "6B",
    question: "Simon purchases a 'family policy' with $100,000 of whole life coverage on himself. In a typical family policy, how much term coverage would his wife Linda likely have?",
    options: ["$100,000", "$50,000", "$25,000 (roughly one-fourth)", "$5,000"],
    answer: 2,
    explanation: "In a family policy, the spouse's term coverage is usually a fraction (like one-fourth or one-fifth) of the primary insured's coverage."
  },
  {
    id: 16,
    lo: "6B",
    question: "Under a family policy, what happens if a new child is born into the family after the policy is issued?",
    options: ["The child is not covered under the original policy", "The child is automatically covered after a short period (e.g., 15 days)", "The policy owner must undergo a new medical exam", "The entire policy is voided"],
    answer: 1,
    explanation: "Each child born or adopted after the initial policy is issued is generally automatically covered, usually after reaching age 15 days."
  },
  {
    id: 17,
    lo: "6C",
    question: "Universal life insurance is famously characterized by the 'unbundling' or separation of which three primary policy elements?",
    options: ["Premium, Face Amount, Dividend", "Mortality, Interest, Expenses", "Loan value, Surrender value, Cash value", "Assent, Capacity, Consideration"],
    answer: 1,
    explanation: "Universal life clearly separates mortality charges, the interest rate credited, and expense charges."
  },
  {
    id: 18,
    lo: "6C",
    question: "In a universal life policy, the periodic deduction for the 'actual cost of the life insurance coverage' is called the:",
    options: ["Dividend charge", "Mortality charge", "Policy loan interest", "Yield spread"],
    answer: 1,
    explanation: "The mortality charge (or cost of insurance) is deducted to cover the mortality risk the insurer has assumed."
  },
  {
    id: 19,
    lo: "6C",
    question: "Which factor usually determines the 'mortality charge' applied to a universal life policy?",
    options: ["The current stock market performance", "The insured's age, sex, and risk classification", "The size of the insurer's marketing budget", "Direct government mandate for that year"],
    answer: 1,
    explanation: "Mortality charges are based on the demographics and risk profile (age, sex, health) of the insured."
  },
  {
    id: 20,
    lo: "6C",
    question: "The 'net amount at risk' for a life insurance policy at any given time is generally equal to:",
    options: ["The cash value minus the face amount", "The face amount minus the reserve (or cash value dependent on plan)", "The total premiums paid plus interest", "The agent's commission"],
    answer: 1,
    explanation: "It is the amount of the insurer's own funds required to pay the death benefit (Face amount - Cash value/Reserve)."
  },
  {
    id: 21,
    lo: "6C",
    question: "For a universal life policy in the U.S., the insurer must pay a minimum interest rate on the cash value. This is known as the:",
    options: ["Current interest-crediting rate", "Guaranteed minimum interest-crediting rate", "Market-average rate", "Vested rate"],
    answer: 1,
    explanation: "The guaranteed minimum rate is the floor rate the insurer MUST pay by contract."
  },
  {
    id: 22,
    lo: "6C",
    question: "Who decides the amount and frequency of premium payments for a 'flexible-premium' universal life policy?",
    options: ["The state insurance commissioner", "The policyowner (within certain limits)", "The insurer's board of directors each month", "The primary beneficiary"],
    answer: 1,
    explanation: "Flexible-premium UL allows the policyowner to alter payment amounts and timing, provided the cash value can cover monthly charges."
  },
  {
    id: 23,
    lo: "6C",
    question: "Under Universal Life 'Option A' (Option 1), the death benefit is always equal to:",
    options: ["The face amount plus the cash value", "The face amount", "The total premiums paid plus interest", "Only the accumulated cash value"],
    answer: 1,
    explanation: "Under Option A, the death benefit is level and equal to the policy's face amount."
  },
  {
    id: 24,
    lo: "6C",
    question: "In which universal life death benefit plan does the 'net amount at risk' remain constant even as the cash value grows?",
    options: ["Option A", "Option B", "Whole Life plan", "Modified coverage plan"],
    answer: 1,
    explanation: "In Option B (Option 2), the death benefit is (Face Amount + Cash Value), meaning the insurer is always at risk for the full Face Amount."
  },
  {
    id: 25,
    lo: "6C",
    question: "What happens if a universal life policy's cash value becomes insufficient to pay the monthly mortality and expense charges?",
    options: ["The insurer must use its own profits to keep it active", "The policy will lapse, usually after a 60-day notification period", "The face amount automatically doubles", "The government takes over the policy"],
    answer: 1,
    explanation: "If the cash value can't cover charges, the policyowner must pay more or the policy will lapse."
  },
  {
    id: 26,
    lo: "6C",
    question: "A 'no-lapse guarantee' provision in a universal life policy ensures that coverage stays in effect even if the cash value drops too low, provided the owner:",
    options: ["Undergoes a yearly physical", "Has made at least the stated minimum premium payments", "Has not taken any policy loans", "Is over age 70"],
    answer: 1,
    explanation: "As long as minimum payments are met, the guarantee keeps the policy in force regardless of cash value shortfalls."
  },
  {
    id: 27,
    lo: "6C",
    question: "The 'Section 7702 corridor' refers to federal tax laws that mandate:",
    options: ["A minimum number of years a policy must stay active", "A minimum gap between the death benefit and the cash value", "A high percentage of commissions for agents", "No taxes on insurers for the first 10 years"],
    answer: 1,
    explanation: "The corridor ensures a policy maintains a meaningful death benefit relative to its cash value so it stays classified as insurance for tax purposes."
  },
  {
    id: 28,
    lo: "6C",
    question: "Insurers provide universal life policyowners with regular reports containing current values and benefits. These are called:",
    options: ["Dividend notices", "Periodic statements", "Lapse warnings", "Actuarial audits"],
    answer: 1,
    explanation: "Insurers send annual (or more frequent) statements because UL values change constantly based on interest and charges."
  },
  {
    id: 29,
    lo: "6D",
    question: "An 'Indexed' Universal Life (IUL) policy gives the owner the potential for higher earnings by tying the index account's performance to:",
    options: ["The insurer's own mortgage portfolio", "A published index like the S&P 500", "The price of gold", "The local inflation rate only"],
    answer: 1,
    explanation: "IUL interest is based on the performance of a public market index."
  },
  {
    id: 30,
    lo: "6D",
    question: "In an IUL policy, the 'Floor' on the index account is designed to:",
    options: ["Limit the maximum growth potential", "Protect the policyowner from market losses", "Fix the premium amount forever", "Pay the agent's commission"],
    answer: 1,
    explanation: "The floor (often 0%) limits investment risk by ensuring the cash value doesn't decrease even if the index falls."
  },
  {
    id: 31,
    lo: "6D",
    question: "Joseph's IUL policy has a 90% participation rate. If the S&P 500 rises by 20% in a year, and there is no cap, what interest rate will be credited to his index account?",
    options: ["20%", "90%", "18% (90% of 20%)", "100%"],
    answer: 2,
    explanation: "The participation rate determines what percentage of the index performance is actually counted."
  },
  {
    id: 32,
    lo: "6D",
    question: "What is the function of a 'Cap' (growth cap) in an indexed universal life policy?",
    options: ["It mandates a minimum premium payment", "It sets a maximum limit on the interest rate credited to the index account", "It prevents the insured from dying after age 100", "It guarantees the policy will never lapse"],
    answer: 1,
    explanation: "The cap limits the growth potential the owner can receive during very strong market years."
  },
  {
    id: 33,
    lo: "6D",
    question: "If an IUL index account has a 0% floor and the market index drops by 15%, the interest rate credited for that period will be:",
    options: ["-15%", "-7.5%", "0%", "10%"],
    answer: 2,
    explanation: "Thanks to the floor, the policy doesn't lose value from index drops (though it can from charges)."
  },
  {
    id: 34,
    lo: "6E",
    question: "A 'Variable' life insurance policy allows the policyowner to allocate premiums among different investment funds known as:",
    options: ["Corridors", "Subaccounts", "General accounts", "Dividends"],
    answer: 1,
    explanation: "Subaccounts are the individual investment funds selected by the policyowner."
  },
  {
    id: 35,
    lo: "6E",
    question: "In variable life insurance, subaccounts are held in an asset account maintained separately from the insurer's general funds. This is the:",
    options: ["Fixed account", "Separate account (segregated account)", "Reserve account", "Premium fund"],
    answer: 1,
    explanation: "The separate account isolates funds used for variable products from the insurer's other assets."
  },
  {
    id: 36,
    lo: "6E",
    question: "Under US law, variable life insurance policies are considered which of the following because the policyowner assumes investment risk?",
    options: ["Illegal gambling", "Securities", "Real property", "Fixed liabilities"],
    answer: 1,
    explanation: "Because cash values and death benefits can decline based on investments, VL policies are regulated as securities."
  },
  {
    id: 37,
    lo: "6E",
    question: "Which of the following is TYPICALLY guaranteed in a standard variable life insurance policy?",
    options: ["A minimum rate of return on all subaccounts", "A minimum death benefit (often the face amount)", "A minimum cash value", "That the stock market will always rise"],
    answer: 1,
    explanation: "While they don't guarantee cash values or investment performance, most VL policies guarantee a minimum death benefit."
  },
  {
    id: 38,
    lo: "6F",
    question: "Variable Universal Life (VUL) insurance combines the investment flexibility of variable life with the __________ of universal life.",
    options: ["Fixed premiums", "Premium and face amount flexibility", "Guaranteed high interest rates", "Simple death benefit options"],
    answer: 1,
    explanation: "VUL combines the ability to invest in subaccounts with the flexible structure (premiums/face amount) of UL."
  },
  {
    id: 39,
    lo: "6F",
    question: "Rachid is a seasoned investor who wants to choose his own investments and have the flexibility to pay more or less in premiums each month. He should choose:",
    options: ["Whole life insurance", "Variable life insurance", "Variable universal life insurance", "Endowment insurance"],
    answer: 2,
    explanation: "VUL offers both investment control (via subaccounts) and premium flexibility."
  },
  {
    id: 40,
    lo: "6G",
    question: "An endowment insurance policy matures when which of the following occurs?",
    options: ["The insured reaches age 100 only", "At the end of a stated term or when the insured reaches a specified age", "Only when the insured dies", "When the insurer goes out of business"],
    answer: 1,
    explanation: "Endowments specify a maturity date (term end or age) when the face amount is paid if the insured is alive."
  },
  {
    id: 41,
    lo: "6G",
    question: "If the insured dies BEFORE the maturity date of an endowment policy, the insurer pays:",
    options: ["Nothing", "Only the premiums back", "The full face amount to the beneficiary", "The cash value only"],
    answer: 2,
    explanation: "Endowments pay the fixed benefit whether the insured survives to maturity or dies before it."
  },
  {
    id: 42,
    lo: "6G",
    question: "How does the cash value buildup of an endowment policy generally compare to a whole life policy?",
    options: ["It builds much more slowly", "It builds much more rapidly", "It never builds any cash value", "It is identical"],
    answer: 1,
    explanation: "Because it matures much earlier, an endowment policy must build cash values quickly to reach the face amount by the maturity date."
  },
  {
    id: 43,
    lo: "6G",
    question: "Why has endowment insurance become less popular in the United States in recent decades?",
    options: ["It is illegal to sell it", "It generally does not satisfy requirements for favorable income tax treatment", "Agents refuse to sell it", "It has too low a death benefit"],
    answer: 1,
    explanation: "Because cash values build so fast relative to the death benefit, endowments often don't meet US tax definitions for life insurance."
  },
  {
    id: 44,
    lo: "6A",
    question: "If Kevin surrenders his cash value policy for its cash surrender value, what is the 'tax advantage' mentioned in the text while the policy was in force?",
    options: ["He never has to pay any taxes on anything", "Interest and earnings credited to the cash value are generally not taxed as they accumulate", "The government pays his premiums for him", "He can write off his premiums on his tax return"],
    answer: 1,
    explanation: "In the US, inner-build-up (interest/earnings) isn't taxed while the policy remains in force."
  },
  {
    id: 45,
    lo: "6A",
    question: "If a policyowner uses their cash value as security for a loan from the insurer, what happens to the death benefit if the loan is not repaid before death?",
    options: ["The debt is forgiven", "The unpaid loan plus interest is subtracted from the death benefit", "The beneficiary receives nothing", "The death benefit is doubled to cover the loan"],
    answer: 1,
    explanation: "Unpaid policy loans and interest are deducted from the payout to the beneficiary."
  },
  {
    id: 46,
    lo: "6B",
    question: "A 'straight life' policy is another term for which type of whole life coverage?",
    options: ["Limited-payment", "Continuous-premium", "Single-premium", "Modified coverage"],
    answer: 1,
    explanation: "Straight life and ordinary life are synonyms for continuous-premium whole life."
  },
  {
    id: 47,
    lo: "6B",
    question: "At the end of a whole life insurance policy's mortality table (e.g., age 121), the reserve and cash value both equal:",
    options: ["The total premiums paid", "The face amount of the policy", "Zero", "The insurer's total surplus"],
    answer: 1,
    explanation: "Whole life is designed so cash value reaches the face amount by the end of the mortality table."
  },
  {
    id: 48,
    lo: "6B",
    question: "Why might an individual choose a 'paid-up-at-age-65' policy over a continuous-premium one?",
    options: ["They want to pay premiums during their high-earning years and have no payments in retirement", "The annual premium is much lower", "They believe they will die at age 65", "The government requires it for retirees"],
    answer: 0,
    explanation: "Limited-payment policies allow funding coverage during working years so they are 'paid-up' for retirement."
  },
  {
    id: 49,
    lo: "6B",
    question: "If Ellen survives past her 65th birthday with her paid-up-at-age-65 policy, what must she do to keep the coverage in force until death?",
    options: ["Nothing", "Pay the same annual premium", "Double her premium payments", "Convert it to a term policy"],
    answer: 0,
    explanation: "A paid-up policy requires no further premiums to provide lifetime coverage."
  },
  {
    id: 50,
    lo: "6C",
    question: "Universal life insurance appeals to customers who value:",
    options: ["Rigid structures and secrecy", "Flexibility and transparency", "Low interest rates", "Policies written only for the short term"],
    answer: 1,
    explanation: "Transparency (unbundling) and flexibility (premiums/face amount) are the key draws of UL."
  },
  {
    id: 51,
    lo: "6C",
    question: "The 'interest-crediting rate' an insurer declares above the guaranteed minimum in a UL policy is often based on:",
    options: ["The rate of return the insurer earns on its own investments", "A random number selected by the CEO", "The price of oil", "The number of new policies sold"],
    answer: 0,
    explanation: "Current rates are usually based on the insurer's general account investment performance or a standard benchmark."
  },
  {
    id: 52,
    lo: "6C",
    question: "Which universal life expense charge is often applied as a percentage of each premium payment?",
    options: ["Surrender charge", "Premium expense charge (e.g., 4%)", "Management fee", "Withdrawal fee"],
    answer: 1,
    explanation: "Insurers often take a slice of every premium (percentage) before adding the rest to the cash value."
  },
  {
    id: 53,
    lo: "6C",
    question: "In a universal life policy, what happens to the remainder of the premium AFTER expense charges are deducted?",
    options: ["It is sent to the beneficiary", "It is credited to the policy's cash value", "It is held in the agent's account", "It disappears into the reserve"],
    answer: 1,
    explanation: "Universal life operates by adding net premiums (minus fees) to the cash value bucket."
  },
  {
    id: 54,
    lo: "6C",
    question: "If a universal life policy provides for a $500,000 face amount but the death benefit in year 10 is $620,000 because of $120,000 in cash value, which plan is being used?",
    options: ["Option A", "Option B", "Option C", "Whole Life"],
    answer: 1,
    explanation: "Option B provides a death benefit equal to (Face Amount + Cash Value)."
  },
  {
    id: 55,
    lo: "6D",
    question: "The insurer's 'General Account' is primarily used to back which of the following products?",
    options: ["Variable life products", "Guaranteed insurance products like whole life and UL", "Mutual funds", "Corporate stock exclusively"],
    answer: 1,
    explanation: "General account assets support contractual benefit guarantees."
  },
  {
    id: 56,
    lo: "6D",
    question: "Under an IUL index account, if the index performance rate is positive but LOWER than the floor, what occurs?",
    options: ["The floor rate (e.g., 0% or 1%) is credited", "The actual performance rate is credited", "The cap rate is credited", "No interest is credited"],
    answer: 0,
    explanation: "The floor is the minimum crediting rate, even if the index performance is lower."
  },
  {
    id: 57,
    lo: "6E",
    question: "A variable life policyowner chooses subaccounts that concentrate on high-growth stocks. What is the risk involved?",
    options: ["The insurer might go bankrupt immediately", "The cash value and death benefit may decline if stock values drop", "The premium will increase if stocks do well", "The beneficiary will be taxed at 100%"],
    answer: 1,
    explanation: "Variable products shift the investment risk onto the policyowner."
  },
  {
    id: 58,
    lo: "6E",
    question: "In variable life, the subaccounts with different investment strategies allow the owner to:",
    options: ["Guarantee they will never lose money", "Decide how their premiums and cash values are invested", "Avoid paying any premiums in the first year", "Bypass all underwriting"],
    answer: 1,
    explanation: "VL gives owners the power to select where their money works."
  },
  {
    id: 59,
    lo: "6F",
    question: "In a VUL policy, if the subaccounts perform extremely well, what happens to the cash value?",
    options: ["It stays level", "It decreases to offset the profit", "It increases reflecting the earnings", "It is frozen by the state"],
    answer: 2,
    explanation: "The cash value directly reflects the investment performance of the chosen subaccounts."
  },
  {
    id: 60,
    lo: "6B",
    question: "Modified coverage whole life policies have lower premiums because the risk to the insurer is __________ when the insured is at an advanced age.",
    options: ["Greater", "Lower (due to reduced face amount)", "Identical", "Non-existent"],
    answer: 1,
    explanation: "Lower death benefits in old age (when mortality is highest) reduce the cost to the insurer, allowing for lower premiums."
  },
  {
    id: 61,
    lo: "6A",
    question: "Is cash value life insurance permanent or temporary?",
    options: ["Permanent (as long as premiums are paid)", "Temporary (fixed term)", "Only for one year", "Depends on the agent"],
    answer: 0,
    explanation: "Whole life and other cash value plans provide lifetime (permanent) coverage."
  },
  {
    id: 62,
    lo: "6B",
    question: "Ahmad's single-premium policy has a $200,000 death benefit. If he dies, what premium payment is his estate required to make?",
    options: ["The second premium", "A monthly fee", "Nothing, it's a single-premium policy", "A surrender charge"],
    answer: 2,
    explanation: "One payment pays for life."
  },
  {
    id: 63,
    lo: "6C",
    question: "In a universal life policy, the interest rate actually credited for a period is the __________.",
    options: ["Guaranteed minimum", "Current interest-crediting rate", "Floor rate", "Stock market growth rate"],
    answer: 1,
    explanation: "The insurer declares a current rate based on performance, which cannot fall below the guarantee."
  },
  {
    id: 64,
    lo: "6D",
    question: "Participation rates in IUL usually range from __________.",
    options: ["0% to 5%", "70% to 100% (common range example)", "Exactly 100% always", "None of the above"],
    answer: 1,
    explanation: "Standard participation rates used in examples are often around 80-90%."
  },
  {
    id: 65,
    lo: "6E",
    question: "Is a fixed account in a variable life policy held in the separate account?",
    options: ["Yes", "No, it is part of the general account", "Only in Ohio", "Only for preferred risks"],
    answer: 1,
    explanation: "The fixed account provides a guarantee, so it relies on the general account assets."
  },
  {
    id: 66,
    lo: "6F",
    question: "Which policy is most similar to a premium-flexible VUL in Canada?",
    options: ["Whole Life", "Universal Life", "Term Life", "Endowment"],
    answer: 1,
    explanation: "The text notes: 'Variable universal life... is also called flexible-premium variable life... or simply universal life in Canada.'"
  },
  {
    id: 67,
    lo: "6G",
    question: "An endowment maturity benefit is paid to the __________ if they are alive on the maturity date.",
    options: ["Beneficiary", "Insured's children", "Policyowner", "Trustee"],
    answer: 2,
    explanation: "The policyowner receives the 'endowment' at maturity."
  },
  {
    id: 68,
    lo: "6B",
    question: "Which whole life policy variation was designed specifically for married couples to provide funds for survivorship income?",
    options: ["Joint whole life", "Last survivor", "Family policy", "Endowment"],
    answer: 0,
    explanation: "Joint whole life is primarily for survivorship income after the first death."
  },
  {
    id: 69,
    lo: "6A",
    question: "Can a policyowner Surrender a cash value policy just to get some cash for a vacation?",
    options: ["No, it must be for an emergency", "Yes, they can terminate it and receive the surrender value", "Only if they are over 50", "Only if the insurer approves the reason"],
    answer: 1,
    explanation: "Surrendering is an unconditional right to terminate and take the net cash value."
  },
  {
    id: 70,
    lo: "6B",
    question: "In the Figure 6.2 example, what is the cash value of the $100k policy at the end of Year 10?",
    options: ["$1,258.32", "$4,735.39", "$30,062.42", "Zero"],
    answer: 1,
    explanation: "Checking the table in the PDF: Year 10 = $4,735.39."
  },
  {
    id: 71,
    lo: "6C",
    question: "Flexibility in a universal life policy includes the ability to __________ the face amount after the first year.",
    options: ["Only increase", "Only decrease", "Increase or decrease (often with evidence for increases)", "Never change"],
    answer: 2,
    explanation: "Face amount flexibility is a core UL feature."
  },
  {
    id: 72,
    lo: "6D",
    question: "IUL allows earnings from a stock index but without the __________ risk of variable life.",
    options: ["Upside", "Downside (due to floor)", "Regulatory", "Expense"],
    answer: 1,
    explanation: "The floor protects against negative market swing losses in the index account."
  },
  {
    id: 73,
    lo: "6E",
    question: "Subaccount investment options in Variable Life might include __________.",
    options: ["Stock, Bond, or Money Market funds", "A secret box in the office", "Premium credit funds", "Only real estate"],
    answer: 0,
    explanation: "Typically, a variety of fund types are available to suit different risk tolerances."
  },
  {
    id: 74,
    lo: "6F",
    question: "VUL is considered a 'hybrid' of which two products?",
    options: ["Term and Whole Life", "Universal and Variable Life", "Endowment and Variable", "Annuity and UL"],
    answer: 1,
    explanation: "It takes the flexibility of UL and the investment options of VL."
  },
  {
    id: 75,
    lo: "6G",
    question: "If an endowment policy has a 20-year term and the insured dies in Year 15, does the beneficiary get the benefit?",
    options: ["Yes, the face amount", "No, it matures only at 20 years", "Only the premiums paid", "Only have the benefit"],
    answer: 0,
    explanation: "Endowments cover the risk of dying during the term as well as payoff at the end."
  },
  {
    id: 76,
    lo: "6B",
    question: "Under a family policy, Simon is the 'primary insured.' His coverage is __________ life insurance.",
    options: ["Term", "Whole", "Variable", "Joint"],
    answer: 1,
    explanation: "The primary insured in a family policy usually has whole life coverage."
  },
  {
    id: 77,
    lo: "6A",
    question: "In U.S. life insurance sales (2014), what percentage of total premium dollars came from Universal Life?",
    options: ["12%", "35%", "37%", "7%"],
    answer: 2,
    explanation: "According to Figure 6.1, UL was 37%."
  },
  {
    id: 78,
    lo: "6B",
    question: "Whole life policies don't accumulate cash value until they have been in effect for roughly how long?",
    options: ["2 to 3 years", "10 years", "Day 1", "30 years"],
    answer: 0,
    explanation: "Policies usually need a few years to build up enough reserve to show a cash value."
  },
  {
    id: 79,
    lo: "6C",
    question: "Why do UL mortality charges typically increase each year?",
    options: ["Inflation", "The insured gets older and risk of death increases", "The agent needs more money", "The face amount automatically doubles"],
    answer: 1,
    explanation: "They track the rising cost of insurance for older ages."
  },
  {
    id: 80,
    lo: "6D",
    question: "An IUL fixed account crediting rate is __________.",
    options: ["Same as a traditional UL", "Always 20%", "Tied to the Nasdaq", "Zero always"],
    answer: 0,
    explanation: "The fixed account behaves like traditional UL."
  },
  {
    id: 81,
    lo: "6E",
    question: "Variable life policies must comply with both __________ and state laws.",
    options: ["Criminal", "Federal securities", "Marriage", "Driving"],
    answer: 1,
    explanation: "Because they are securities, they fall under SEC/FINRA-style regulations."
  },
  {
    id: 82,
    lo: "6F",
    question: "In VUL, the policyowner assumes the __________ risk.",
    options: ["Mortality", "Investment", "Expense", "Corporate"],
    answer: 1,
    explanation: "Poor market performance can reduce the policy value."
  },
  {
    id: 83,
    lo: "6G",
    question: "Endowment maturity dates can be reached by a specified __________.",
    options: ["Job change", "Age", "Medical result", "Premium payment"],
    answer: 1,
    explanation: "Term ends or Age reached (e.g., maturity at age 65)."
  },
  {
    id: 84,
    lo: "6B",
    question: "Ahmad's $50,000 single premium resulted in a $200k death benefit. This represents a ratio of __________.",
    options: ["1 to 1", "4 to 1", "10 to 1", "2 to 1"],
    answer: 1,
    explanation: "200k / 50k = 4."
  },
  {
    id: 85,
    lo: "6C",
    question: "Transparency in Universal Life means the customer can see the __________ deducted each month.",
    options: ["Agent's name", "Mortality and expense charges", "Surrender values only", "Dividends paid only"],
    answer: 1,
    explanation: "Unbundling reveals the hidden math/fees of the policy."
  },
  {
    id: 86,
    lo: "6D",
    question: "Commonly used indexes for IUL are __________.",
    options: ["Price of Rice", "Nasdaq 100 or S&P 500", "Local phone index", "Rainfall index"],
    answer: 1,
    explanation: "Major stock indices are the standard benchmark."
  },
  {
    id: 87,
    lo: "6E",
    question: "A 'Subaccount' is effectively an investment pool similar to a __________.",
    options: ["Bank vault", "Mutual fund", "Gamble", "Tax return"],
    answer: 1,
    explanation: "They function very similarly to mutual funds (stocks, bonds, etc.)."
  },
  {
    id: 88,
    lo: "6F",
    question: "VUL policies don't guarantee __________.",
    options: ["Death benefit always", "Investment earnings or cash values", "Insurance agent licensing", "Lodge meetings"],
    answer: 1,
    explanation: "The values fluctuate entirely based on market performance."
  },
  {
    id: 89,
    lo: "6G",
    question: "Which country's tax laws hurt endowment sales significantly?",
    options: ["Japan", "Brazil", "United States", "China"],
    answer: 2,
    explanation: "US federal tax laws make endowments less attractive due to high cash value-to-death-benefit ratios."
  },
  {
    id: 90,
    lo: "6B",
    question: "Joint life is 'survivorship' if it pays after __________ death.",
    options: ["The first", "The second (both)", "The child's", "The agent's"],
    answer: 1,
    explanation: "Survivorship life pays only after the second (last) person dies."
  },
  {
    id: 91,
    lo: "6A",
    question: "Cash value as 'collateral' for a loan means it is __________.",
    options: ["Security for the debt", "Paid out as a dividend", "Stolen from the beneficiary", "Given to the city"],
    answer: 0,
    explanation: "Collateral is an asset backing a promise to repay."
  },
  {
    id: 92,
    lo: "6B",
    question: "A 'paid-up-at-age-65' policy is a form of __________ level whole life.",
    options: ["Single-premium", "Limited-payment", "Continuous", "Joint"],
    answer: 1,
    explanation: "It limits the payments to a certain timeframe."
  },
  {
    id: 93,
    lo: "6C",
    question: "When an insurer 'declares' an interest rate on a UL policy, this is the __________.",
    options: ["Minimum index", "Current interest-crediting rate", "Guaranteed rate", "Premium rate"],
    answer: 1,
    explanation: "The declared rate is what is actually credited for that specific period."
  },
  {
    id: 94,
    lo: "6D",
    question: "Joseph's IUL index rose 20% but he had a 12% cap. How much did he get credited?",
    options: ["20%", "18%", "12%", "0%"],
    answer: 2,
    explanation: "The cap overrides the performance (18% calculated) and limits it to 12%."
  },
  {
    id: 95,
    lo: "6E",
    question: "Who maintains a 'Separate Account' for variable products?",
    options: ["The customer", "The insurer", "The federal government", "The bank"],
    answer: 1,
    explanation: "Insurers must segregate these funds from their main assets."
  },
  {
    id: 96,
    lo: "6F",
    question: "VUL policyowners can change chosen subaccount options __________.",
    options: ["Only once", "Never", "Periodically", "Only upon death"],
    answer: 2,
    explanation: "Policyowners can reallocate their investments over time."
  },
  {
    id: 97,
    lo: "6G",
    question: "Are endowments popular in many countries OUTSIDE the US?",
    options: ["No, only US", "Yes", "Only in space", "No one buys them"],
    answer: 1,
    explanation: "The text says they remain a popular product in insurance markets in many other countries."
  },
  {
    id: 98,
    lo: "6B",
    question: "Is 'ordinary life' a limited or continuous premium policy?",
    options: ["Limited", "Continuous", "Single", "None"],
    answer: 1,
    explanation: "It is another name for continuous-premium whole life."
  },
  {
    id: 99,
    lo: "6C",
    question: "UL expense charges for 'administrative' reasons are often called __________.",
    options: ["Surrender fees", "Policy fees", "Interest charges", "Bonus fees"],
    answer: 1,
    explanation: "Monthly management fees are often termed policy fees."
  },
  {
    id: 100,
    lo: "6D",
    question: "Which IUL account is less risky: fixed or index?",
    options: ["Fixed (usually has a guarantee without market link)", "Index", "Both are equal", "Neither"],
    answer: 0,
    explanation: "The fixed account provides standard UL stability, while the index account still has market linkage risk (though limited by floor)."
  }
];
