export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category:
    | "Banking"
    | "Investment"
    | "Insurance"
    | "Tax"
    | "Government Schemes";
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question:
      "What is the minimum balance required to open a Jan Dhan account under PMJDY?",
    options: ["₹500", "₹1,000", "₹0 (Zero Balance)", "₹100"],
    correctIndex: 2,
    explanation:
      "Pradhan Mantri Jan Dhan Yojana allows opening of zero-balance savings accounts to promote financial inclusion across India.",
    category: "Government Schemes",
  },
  {
    id: 2,
    question: "What does SIP stand for in the context of investments?",
    options: [
      "Systematic Investment Plan",
      "Standard Investment Policy",
      "Secure Investment Programme",
      "Savings Interest Plan",
    ],
    correctIndex: 0,
    explanation:
      "SIP (Systematic Investment Plan) is a disciplined investment approach where a fixed amount is invested regularly in mutual funds, allowing rupee cost averaging.",
    category: "Investment",
  },
  {
    id: 3,
    question: "Which government body regulates mutual funds in India?",
    options: ["RBI", "SEBI", "IRDAI", "PFRDA"],
    correctIndex: 1,
    explanation:
      "SEBI (Securities and Exchange Board of India) regulates the mutual fund industry, protecting investor interests and ensuring market integrity.",
    category: "Investment",
  },
  {
    id: 4,
    question:
      "What is the maximum annual premium for Pradhan Mantri Suraksha Bima Yojana?",
    options: ["₹100", "₹20", "₹436", "₹50"],
    correctIndex: 1,
    explanation:
      "PMSBY provides accidental death and disability cover for just ₹20 per annum, making it one of the most affordable insurance schemes.",
    category: "Government Schemes",
  },
  {
    id: 5,
    question: "What is the 50/30/20 rule in personal finance?",
    options: [
      "50% savings, 30% investment, 20% expenses",
      "50% needs, 30% wants, 20% savings/debt",
      "50% income, 30% tax, 20% retirement",
      "50% fixed, 30% variable, 20% emergency",
    ],
    correctIndex: 1,
    explanation:
      "The 50/30/20 rule suggests allocating 50% of income to needs, 30% to wants, and 20% to savings and debt repayment for healthy personal finance.",
    category: "Banking",
  },
  {
    id: 6,
    question:
      "Under which section of the Income Tax Act can you claim deduction for ELSS investments?",
    options: ["Section 80C", "Section 80D", "Section 10(10D)", "Section 24(b)"],
    correctIndex: 0,
    explanation:
      "ELSS (Equity Linked Savings Scheme) investments qualify for tax deduction up to ₹1.5 lakh under Section 80C of the Income Tax Act.",
    category: "Tax",
  },
  {
    id: 7,
    question: "What is the current RBI repo rate as of early 2024?",
    options: ["5.5%", "6.5%", "7.0%", "4.5%"],
    correctIndex: 1,
    explanation:
      "The RBI repo rate (rate at which RBI lends to banks) was 6.5% in early 2024, used as a monetary policy tool to control inflation.",
    category: "Banking",
  },
  {
    id: 8,
    question: "What is compound interest best described as?",
    options: [
      "Interest calculated only on principal",
      "Interest on principal plus accumulated interest",
      "Fixed annual interest regardless of balance",
      "Interest paid monthly on original investment",
    ],
    correctIndex: 1,
    explanation:
      "Compound interest is calculated on both the principal and the accumulated interest, enabling exponential growth of savings over time — often called the 'eighth wonder of the world'.",
    category: "Investment",
  },
  {
    id: 9,
    question:
      "Which insurance regulator oversees life and general insurance in India?",
    options: ["SEBI", "RBI", "IRDAI", "NABARD"],
    correctIndex: 2,
    explanation:
      "IRDAI (Insurance Regulatory and Development Authority of India) regulates and promotes the insurance industry in India, protecting policyholder interests.",
    category: "Insurance",
  },
  {
    id: 10,
    question: "What is the lock-in period for ELSS mutual funds?",
    options: ["1 year", "2 years", "3 years", "5 years"],
    correctIndex: 2,
    explanation:
      "ELSS funds have the shortest lock-in period of 3 years among all tax-saving instruments under Section 80C, making them flexible while offering equity growth potential.",
    category: "Tax",
  },
  {
    id: 11,
    question:
      "Under Atal Pension Yojana, what is the maximum monthly pension guarantee?",
    options: ["₹1,000", "₹3,000", "₹5,000", "₹10,000"],
    correctIndex: 2,
    explanation:
      "APY guarantees a fixed pension of ₹1,000 to ₹5,000 per month at age 60, depending on the contribution amount and age of enrollment.",
    category: "Government Schemes",
  },
  {
    id: 12,
    question:
      "What is a credit score range considered 'Excellent' in India (CIBIL score)?",
    options: ["500–600", "600–700", "700–750", "750–900"],
    correctIndex: 3,
    explanation:
      "A CIBIL score of 750–900 is considered excellent in India, making it easier to obtain loans and credit cards at better interest rates.",
    category: "Banking",
  },
  {
    id: 13,
    question: "What does PMMY stand for?",
    options: [
      "Pradhan Mantri Mudra Yojana",
      "Pradhan Mantri Mahila Yojana",
      "Pradhan Mantri Mitra Yojana",
      "Pradhan Mantri Mission Yojana",
    ],
    correctIndex: 0,
    explanation:
      "PMMY (Pradhan Mantri Mudra Yojana) provides collateral-free loans up to ₹10 lakh to small and micro enterprises to support entrepreneurship.",
    category: "Government Schemes",
  },
  {
    id: 14,
    question: "What does 'diversification' mean in investment?",
    options: [
      "Investing all money in one high-return asset",
      "Spreading investments across different asset classes to reduce risk",
      "Moving investments based on market news daily",
      "Keeping all savings in a fixed deposit",
    ],
    correctIndex: 1,
    explanation:
      "Diversification means spreading investments across different asset classes (equity, debt, gold, real estate) to reduce risk — 'don't put all eggs in one basket'.",
    category: "Investment",
  },
  {
    id: 15,
    question:
      "Which financial tool measures your ability to meet short-term obligations?",
    options: ["P/E Ratio", "Liquidity Ratio", "CAGR", "NAV"],
    correctIndex: 1,
    explanation:
      "Liquidity ratio measures the ability to meet short-term financial obligations using available liquid assets, indicating financial health and solvency.",
    category: "Banking",
  },
];
