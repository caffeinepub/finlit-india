export interface GovernmentScheme {
  id: string;
  name: string;
  shortName: string;
  description: string;
  benefits: string[];
  eligibility: string[];
  category: "Banking" | "Insurance" | "Pension" | "Business" | "Digital";
  officialLink: string;
  launchYear: number;
  beneficiaries: string;
}

export const GOVERNMENT_SCHEMES: GovernmentScheme[] = [
  {
    id: "pmjdy",
    name: "Pradhan Mantri Jan Dhan Yojana",
    shortName: "PMJDY",
    description:
      "A national mission for financial inclusion ensuring access to financial services like banking, savings accounts, remittance, credit, insurance and pension in an affordable manner.",
    benefits: [
      "Zero balance savings account",
      "RuPay debit card with ₹2 lakh accident insurance",
      "Overdraft facility up to ₹10,000",
      "Life insurance cover of ₹30,000",
      "Direct Benefit Transfer eligibility",
      "Access to pension and insurance products",
    ],
    eligibility: [
      "Indian residents aged 10 years and above",
      "No existing bank account required",
      "Valid Aadhaar card or other KYC documents",
      "One account per household (preferably women)",
    ],
    category: "Banking",
    officialLink: "https://pmjdy.gov.in",
    launchYear: 2014,
    beneficiaries: "50+ Crore accounts",
  },
  {
    id: "pmjjby",
    name: "Pradhan Mantri Jeevan Jyoti Bima Yojana",
    shortName: "PMJJBY",
    description:
      "A government-backed life insurance scheme offering affordable life cover at a nominal premium of ₹436 per annum. Provides financial security to families of the insured in case of death.",
    benefits: [
      "Life insurance cover of ₹2 lakh",
      "Nominal annual premium of ₹436",
      "Auto-debit from bank account",
      "Coverage for death due to any reason",
      "Annual renewable policy",
    ],
    eligibility: [
      "Age group 18–50 years",
      "Active savings bank account",
      "Consent for auto-debit of premium",
      "Indian residents",
    ],
    category: "Insurance",
    officialLink: "https://jansuraksha.gov.in",
    launchYear: 2015,
    beneficiaries: "16+ Crore enrollments",
  },
  {
    id: "pmsby",
    name: "Pradhan Mantri Suraksha Bima Yojana",
    shortName: "PMSBY",
    description:
      "An accidental insurance scheme providing coverage for accidental death and disability. Offers ₹2 lakh cover at just ₹20 per annum, making it highly accessible to low-income groups.",
    benefits: [
      "₹2 lakh cover for accidental death",
      "₹1 lakh cover for permanent partial disability",
      "₹2 lakh for permanent total disability",
      "Annual premium of only ₹20",
      "Coverage renewed annually automatically",
    ],
    eligibility: [
      "Age group 18–70 years",
      "Active savings bank/post office account",
      "Auto-debit consent required",
    ],
    category: "Insurance",
    officialLink: "https://jansuraksha.gov.in",
    launchYear: 2015,
    beneficiaries: "37+ Crore enrollments",
  },
  {
    id: "apy",
    name: "Atal Pension Yojana",
    shortName: "APY",
    description:
      "A government-backed pension scheme focused on workers in the unorganised sector. It guarantees a fixed monthly pension of ₹1,000–₹5,000 after the age of 60, based on contribution amount and age of entry.",
    benefits: [
      "Guaranteed monthly pension of ₹1,000 to ₹5,000",
      "Government co-contribution (for eligible subscribers)",
      "Pension continues to spouse after death",
      "Return of corpus to nominee",
      "Tax benefits under Section 80CCD",
    ],
    eligibility: [
      "Indian citizens aged 18–40 years",
      "Bank/post office savings account",
      "Not a taxpayer (for government co-contribution)",
      "Not covered under any statutory social security scheme",
    ],
    category: "Pension",
    officialLink: "https://www.npscra.nsdl.co.in",
    launchYear: 2015,
    beneficiaries: "5+ Crore subscribers",
  },
  {
    id: "pmmy",
    name: "Pradhan Mantri Mudra Yojana",
    shortName: "PMMY",
    description:
      "A flagship scheme providing loans up to ₹10 lakh to small and micro enterprises. Supports entrepreneurs in setting up and expanding businesses without collateral through three loan categories: Shishu, Kishore, and Tarun.",
    benefits: [
      "Loans up to ₹10 lakh without collateral",
      "Three tiers: Shishu (₹50K), Kishore (₹5L), Tarun (₹10L)",
      "Mudra RuPay debit card facility",
      "Covers manufacturing, trading and service sectors",
      "Women entrepreneurs get priority",
    ],
    eligibility: [
      "Indian citizens with business plan",
      "Non-farm income generating activities",
      "Small manufacturing, trading or service units",
      "Good credit history preferred",
    ],
    category: "Business",
    officialLink: "https://www.mudra.org.in",
    launchYear: 2015,
    beneficiaries: "40+ Crore loans disbursed",
  },
  {
    id: "digital-india",
    name: "Digital India",
    shortName: "Digital India",
    description:
      "A flagship programme to transform India into a digitally empowered society and knowledge economy. It encompasses digital infrastructure, digital literacy, and digital services delivery for all citizens.",
    benefits: [
      "Universal digital literacy and education",
      "Access to e-government services",
      "Digital payment infrastructure (UPI, BHIM)",
      "Broadband connectivity in rural areas",
      "Common Service Centres for digital access",
      "Skill development in digital technologies",
    ],
    eligibility: [
      "All Indian citizens",
      "Special focus on rural and underserved areas",
      "Students, entrepreneurs, and senior citizens",
    ],
    category: "Digital",
    officialLink: "https://www.digitalindia.gov.in",
    launchYear: 2015,
    beneficiaries: "1.4 Billion citizens",
  },
];
