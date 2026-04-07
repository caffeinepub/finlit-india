import { n as createLucideIcon, j as jsxRuntimeExports, U as User, G as GraduationCap, B as BookOpen } from "./index-C2gTZAc5.js";
import { P as PageHeader } from "./PageHeader-CAZihj1C.js";
import { m as motion } from "./proxy-B5X-98y1.js";
import { B as Building2 } from "./building-2-CcxQugsN.js";
import { C as Calculator } from "./calculator-PAzjxQlZ.js";
import { B as BadgeCheck } from "./badge-check-C_M8ntae.js";
import { T as TrendingDown } from "./trending-down-J77aU8L0.js";
import { T as TriangleAlert } from "./triangle-alert-CbAfGU-P.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",
      key: "5owen"
    }
  ],
  ["circle", { cx: "7", cy: "17", r: "2", key: "u2ysq9" }],
  ["path", { d: "M9 17h6", key: "r8uit2" }],
  ["circle", { cx: "17", cy: "17", r: "2", key: "axvx0g" }]
];
const Car = createLucideIcon("car", __iconNode);
const SCORE_BANDS = [
  {
    range: "750–900",
    label: "Excellent",
    desc: "Best loan rates, quick approvals",
    color: "bg-green-500",
    textColor: "text-green-700 dark:text-green-300",
    bg: "bg-green-50 dark:bg-green-900/30",
    border: "border-green-200 dark:border-green-800"
  },
  {
    range: "650–749",
    label: "Good",
    desc: "Approved with competitive rates",
    color: "bg-yellow-500",
    textColor: "text-yellow-700 dark:text-yellow-300",
    bg: "bg-yellow-50 dark:bg-yellow-900/30",
    border: "border-yellow-200 dark:border-yellow-800"
  },
  {
    range: "550–649",
    label: "Fair",
    desc: "Higher interest, stricter terms",
    color: "bg-orange-500",
    textColor: "text-orange-700 dark:text-orange-300",
    bg: "bg-orange-50 dark:bg-orange-900/30",
    border: "border-orange-200 dark:border-orange-800"
  },
  {
    range: "300–549",
    label: "Poor",
    desc: "Loan rejection likely",
    color: "bg-red-500",
    textColor: "text-red-700 dark:text-red-300",
    bg: "bg-red-50 dark:bg-red-900/30",
    border: "border-red-200 dark:border-red-800"
  }
];
const LOAN_TYPES = [
  {
    icon: User,
    title: "Personal Loan",
    interest: "10–24%",
    collateral: "None",
    tenure: "1–5 years",
    bestFor: "Medical emergency, travel, events"
  },
  {
    icon: Building2,
    title: "Home Loan",
    interest: "8–10%",
    collateral: "Property",
    tenure: "10–30 years",
    bestFor: "Buying or constructing a home"
  },
  {
    icon: GraduationCap,
    title: "Education Loan",
    interest: "8–15%",
    collateral: "Optional",
    tenure: "7–15 years",
    bestFor: "Higher education in India or abroad"
  },
  {
    icon: Car,
    title: "Vehicle Loan",
    interest: "9–14%",
    collateral: "Vehicle",
    tenure: "1–7 years",
    bestFor: "Buying car or two-wheeler"
  }
];
const SCORE_FACTORS = [
  {
    factor: "Payment History",
    weight: "35%",
    tip: "Always pay on time. Even one missed EMI hurts your score significantly."
  },
  {
    factor: "Credit Utilization",
    weight: "30%",
    tip: "Keep credit card usage below 30% of your limit."
  },
  {
    factor: "Credit Age",
    weight: "15%",
    tip: "Older accounts boost your score. Don't close old credit cards."
  },
  {
    factor: "Credit Mix",
    weight: "10%",
    tip: "Having both secured (home/car) and unsecured (credit card) loans is good."
  },
  {
    factor: "New Inquiries",
    weight: "10%",
    tip: "Too many loan applications in a short time lower your score."
  }
];
function CreditLoans() {
  const principal = 5e5;
  const r = 10 / 12 / 100;
  const n = 60;
  const emi = Math.round(principal * r * (1 + r) ** n / ((1 + r) ** n - 1));
  const totalPaid = emi * n;
  const totalInterest = totalPaid - principal;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Credit & Loans",
        subtitle: "Understanding CIBIL scores, types of loans, EMI calculation, and how to avoid debt traps",
        badge: "Credit"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "mb-12",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-2", children: "What is a CIBIL Score?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 text-sm", children: "Your CIBIL (Credit Information Bureau India Limited) score is a 3-digit number between 300–900 that represents your creditworthiness. Banks use it to decide whether to give you a loan and at what interest rate." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8", children: SCORE_BANDS.map((band, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 15 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.3, delay: i * 0.07 },
                viewport: { once: true },
                className: `rounded-xl p-4 border ${band.bg} ${band.border}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-3 h-3 rounded-full ${band.color} mb-2` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `font-display text-xl font-bold ${band.textColor}`,
                      children: band.range
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-semibold text-sm ${band.textColor}`, children: band.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: band.desc })
                ]
              },
              band.range
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-4", children: "What Affects Your Score?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: SCORE_FACTORS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-start gap-4 bg-card border border-border rounded-xl p-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary/10 rounded-lg px-3 py-1.5 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold text-sm", children: f.weight }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-foreground text-sm", children: f.factor }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: f.tip })
                  ] })
                ]
              },
              f.factor
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          viewport: { once: true },
          className: "mb-12",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-4", children: "Types of Loans" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-5 bg-muted/30 border-b border-border", children: [
                "Loan Type",
                "Interest",
                "Collateral",
                "Tenure",
                "Best For"
              ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "p-3 text-xs font-semibold text-muted-foreground",
                  children: h
                },
                h
              )) }),
              LOAN_TYPES.map((loan) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "grid grid-cols-5 border-b border-border last:border-0",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(loan.icon, { className: "h-4 w-4 text-primary shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: loan.title })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 text-sm text-foreground", children: loan.interest }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 text-sm text-muted-foreground", children: loan.collateral }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 text-sm text-muted-foreground", children: loan.tenure }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 text-sm text-muted-foreground", children: loan.bestFor })
                  ]
                },
                loan.title
              ))
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          viewport: { once: true },
          className: "mb-12",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-4", children: "EMI — How it Works" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary/10 rounded-xl p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "h-6 w-6 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground", children: "Example: ₹5,00,000 loan at 10% for 5 years" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "EMI = P × r × (1+r)ⁿ / [(1+r)ⁿ – 1]" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-2xl font-bold text-blue-600", children: [
                    "₹",
                    emi.toLocaleString()
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Monthly EMI" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-2xl font-bold text-orange-600", children: [
                    "₹",
                    (totalInterest / 1e3).toFixed(0),
                    "K"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Total Interest Paid" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary/10 rounded-xl p-4 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-2xl font-bold text-primary", children: [
                    "₹",
                    (totalPaid / 1e5).toFixed(2),
                    "L"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Total Amount Paid" })
                ] })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          viewport: { once: true },
          className: "mb-10",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-4", children: "Good Debt vs Bad Debt" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-green-700 dark:text-green-300 mb-3", children: "✅ Good Debt" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: [
                  "Home loan (asset that appreciates)",
                  "Education loan (increases earning potential)",
                  "Business loan (generates income)",
                  "Low-interest rate, manageable EMI"
                ].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "li",
                  {
                    className: "flex items-start gap-2 text-sm text-green-800 dark:text-green-200",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "h-4 w-4 text-green-500 mt-0.5 shrink-0" }),
                      p
                    ]
                  },
                  p
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-red-700 dark:text-red-300 mb-3", children: "❌ Bad Debt" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: [
                  "Credit card debt at 36–42% interest",
                  "Personal loan for lifestyle/vacations",
                  "Buy-now-pay-later for impulse purchases",
                  "Borrowing to invest in volatile assets"
                ].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "li",
                  {
                    className: "flex items-start gap-2 text-sm text-red-800 dark:text-red-200",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "h-4 w-4 text-red-500 mt-0.5 shrink-0" }),
                      p
                    ]
                  },
                  p
                )) })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-4", children: "How to Avoid Debt Traps" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-3", children: [
              {
                tip: "Never borrow for non-essential lifestyle expenses",
                icon: TriangleAlert
              },
              {
                tip: "Pay credit card bills IN FULL — not just the minimum",
                icon: BookOpen
              },
              {
                tip: "Build an emergency fund of 3–6 months expenses first",
                icon: BadgeCheck
              },
              {
                tip: "Read loan agreements carefully — check processing fees and prepayment penalties",
                icon: BookOpen
              },
              {
                tip: "Keep total EMIs below 40% of your monthly income",
                icon: Calculator
              },
              {
                tip: "Avoid multiple loans simultaneously — track your total debt",
                icon: TriangleAlert
              }
            ].map(({ tip, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-start gap-3 bg-card border border-border rounded-xl p-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-primary mt-0.5 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: tip })
                ]
              },
              tip
            )) })
          ]
        }
      )
    ] }) })
  ] });
}
export {
  CreditLoans as default
};
