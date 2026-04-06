import {
  AlertTriangle,
  BadgeCheck,
  BookOpen,
  Building2,
  Calculator,
  Car,
  GraduationCap,
  TrendingDown,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import { PageHeader } from "../components/common/PageHeader";

const SCORE_BANDS = [
  {
    range: "750–900",
    label: "Excellent",
    desc: "Best loan rates, quick approvals",
    color: "bg-green-500",
    textColor: "text-green-700 dark:text-green-300",
    bg: "bg-green-50 dark:bg-green-900/30",
    border: "border-green-200 dark:border-green-800",
  },
  {
    range: "650–749",
    label: "Good",
    desc: "Approved with competitive rates",
    color: "bg-yellow-500",
    textColor: "text-yellow-700 dark:text-yellow-300",
    bg: "bg-yellow-50 dark:bg-yellow-900/30",
    border: "border-yellow-200 dark:border-yellow-800",
  },
  {
    range: "550–649",
    label: "Fair",
    desc: "Higher interest, stricter terms",
    color: "bg-orange-500",
    textColor: "text-orange-700 dark:text-orange-300",
    bg: "bg-orange-50 dark:bg-orange-900/30",
    border: "border-orange-200 dark:border-orange-800",
  },
  {
    range: "300–549",
    label: "Poor",
    desc: "Loan rejection likely",
    color: "bg-red-500",
    textColor: "text-red-700 dark:text-red-300",
    bg: "bg-red-50 dark:bg-red-900/30",
    border: "border-red-200 dark:border-red-800",
  },
];

const LOAN_TYPES = [
  {
    icon: User,
    title: "Personal Loan",
    interest: "10–24%",
    collateral: "None",
    tenure: "1–5 years",
    bestFor: "Medical emergency, travel, events",
  },
  {
    icon: Building2,
    title: "Home Loan",
    interest: "8–10%",
    collateral: "Property",
    tenure: "10–30 years",
    bestFor: "Buying or constructing a home",
  },
  {
    icon: GraduationCap,
    title: "Education Loan",
    interest: "8–15%",
    collateral: "Optional",
    tenure: "7–15 years",
    bestFor: "Higher education in India or abroad",
  },
  {
    icon: Car,
    title: "Vehicle Loan",
    interest: "9–14%",
    collateral: "Vehicle",
    tenure: "1–7 years",
    bestFor: "Buying car or two-wheeler",
  },
];

const SCORE_FACTORS = [
  {
    factor: "Payment History",
    weight: "35%",
    tip: "Always pay on time. Even one missed EMI hurts your score significantly.",
  },
  {
    factor: "Credit Utilization",
    weight: "30%",
    tip: "Keep credit card usage below 30% of your limit.",
  },
  {
    factor: "Credit Age",
    weight: "15%",
    tip: "Older accounts boost your score. Don't close old credit cards.",
  },
  {
    factor: "Credit Mix",
    weight: "10%",
    tip: "Having both secured (home/car) and unsecured (credit card) loans is good.",
  },
  {
    factor: "New Inquiries",
    weight: "10%",
    tip: "Too many loan applications in a short time lower your score.",
  },
];

export default function CreditLoans() {
  // EMI example: ₹5L loan, 10%, 5 years
  const principal = 500000;
  const r = 10 / 12 / 100;
  const n = 60;
  const emi = Math.round((principal * r * (1 + r) ** n) / ((1 + r) ** n - 1));
  const totalPaid = emi * n;
  const totalInterest = totalPaid - principal;

  return (
    <div>
      <PageHeader
        title="Credit & Loans"
        subtitle="Understanding CIBIL scores, types of loans, EMI calculation, and how to avoid debt traps"
        badge="Credit"
      />

      <section className="py-10">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* CIBIL Score */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              What is a CIBIL Score?
            </h2>
            <p className="text-muted-foreground mb-6 text-sm">
              Your CIBIL (Credit Information Bureau India Limited) score is a
              3-digit number between 300–900 that represents your
              creditworthiness. Banks use it to decide whether to give you a
              loan and at what interest rate.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {SCORE_BANDS.map((band, i) => (
                <motion.div
                  key={band.range}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className={`rounded-xl p-4 border ${band.bg} ${band.border}`}
                >
                  <div className={`w-3 h-3 rounded-full ${band.color} mb-2`} />
                  <div
                    className={`font-display text-xl font-bold ${band.textColor}`}
                  >
                    {band.range}
                  </div>
                  <div className={`font-semibold text-sm ${band.textColor}`}>
                    {band.label}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {band.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <h3 className="font-display font-semibold text-foreground mb-4">
              What Affects Your Score?
            </h3>
            <div className="space-y-3">
              {SCORE_FACTORS.map((f) => (
                <div
                  key={f.factor}
                  className="flex items-start gap-4 bg-card border border-border rounded-xl p-4"
                >
                  <div className="bg-primary/10 rounded-lg px-3 py-1.5 shrink-0">
                    <span className="text-primary font-bold text-sm">
                      {f.weight}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">
                      {f.factor}
                    </div>
                    <div className="text-xs text-muted-foreground">{f.tip}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Loan Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Types of Loans
            </h2>
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="grid grid-cols-5 bg-muted/30 border-b border-border">
                {[
                  "Loan Type",
                  "Interest",
                  "Collateral",
                  "Tenure",
                  "Best For",
                ].map((h) => (
                  <div
                    key={h}
                    className="p-3 text-xs font-semibold text-muted-foreground"
                  >
                    {h}
                  </div>
                ))}
              </div>
              {LOAN_TYPES.map((loan) => (
                <div
                  key={loan.title}
                  className="grid grid-cols-5 border-b border-border last:border-0"
                >
                  <div className="p-3 flex items-center gap-2">
                    <loan.icon className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      {loan.title}
                    </span>
                  </div>
                  <div className="p-3 text-sm text-foreground">
                    {loan.interest}
                  </div>
                  <div className="p-3 text-sm text-muted-foreground">
                    {loan.collateral}
                  </div>
                  <div className="p-3 text-sm text-muted-foreground">
                    {loan.tenure}
                  </div>
                  <div className="p-3 text-sm text-muted-foreground">
                    {loan.bestFor}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* EMI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              EMI — How it Works
            </h2>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 rounded-xl p-3">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Example: ₹5,00,000 loan at 10% for 5 years
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    EMI = P × r × (1+r)ⁿ / [(1+r)ⁿ – 1]
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 text-center">
                  <div className="font-display text-2xl font-bold text-blue-600">
                    ₹{emi.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Monthly EMI
                  </div>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4 text-center">
                  <div className="font-display text-2xl font-bold text-orange-600">
                    ₹{(totalInterest / 1000).toFixed(0)}K
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Total Interest Paid
                  </div>
                </div>
                <div className="bg-primary/10 rounded-xl p-4 text-center">
                  <div className="font-display text-2xl font-bold text-primary">
                    ₹{(totalPaid / 100000).toFixed(2)}L
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Total Amount Paid
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Good vs Bad debt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Good Debt vs Bad Debt
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-5">
                <h3 className="font-semibold text-green-700 dark:text-green-300 mb-3">
                  ✅ Good Debt
                </h3>
                <ul className="space-y-2">
                  {[
                    "Home loan (asset that appreciates)",
                    "Education loan (increases earning potential)",
                    "Business loan (generates income)",
                    "Low-interest rate, manageable EMI",
                  ].map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-sm text-green-800 dark:text-green-200"
                    >
                      <BadgeCheck className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-5">
                <h3 className="font-semibold text-red-700 dark:text-red-300 mb-3">
                  ❌ Bad Debt
                </h3>
                <ul className="space-y-2">
                  {[
                    "Credit card debt at 36–42% interest",
                    "Personal loan for lifestyle/vacations",
                    "Buy-now-pay-later for impulse purchases",
                    "Borrowing to invest in volatile assets",
                  ].map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-sm text-red-800 dark:text-red-200"
                    >
                      <TrendingDown className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Debt traps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              How to Avoid Debt Traps
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  tip: "Never borrow for non-essential lifestyle expenses",
                  icon: AlertTriangle,
                },
                {
                  tip: "Pay credit card bills IN FULL — not just the minimum",
                  icon: BookOpen,
                },
                {
                  tip: "Build an emergency fund of 3–6 months expenses first",
                  icon: BadgeCheck,
                },
                {
                  tip: "Read loan agreements carefully — check processing fees and prepayment penalties",
                  icon: BookOpen,
                },
                {
                  tip: "Keep total EMIs below 40% of your monthly income",
                  icon: Calculator,
                },
                {
                  tip: "Avoid multiple loans simultaneously — track your total debt",
                  icon: AlertTriangle,
                },
              ].map(({ tip, icon: Icon }) => (
                <div
                  key={tip}
                  className="flex items-start gap-3 bg-card border border-border rounded-xl p-4"
                >
                  <Icon className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">{tip}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
