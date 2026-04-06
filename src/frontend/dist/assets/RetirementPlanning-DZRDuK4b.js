import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, T as TrendingUp, L as Link } from "./index-oNUYi8h0.js";
import { B as Badge } from "./badge-DGnvFwe_.js";
import { I as Input } from "./input-BQRb9xeF.js";
import { L as Label } from "./label-By0s3q5s.js";
import { P as PageHeader } from "./PageHeader-D2l6UeRT.js";
import { m as motion } from "./proxy-BLGASNJJ.js";
import { R as ResponsiveContainer, X as XAxis, Y as YAxis, T as Tooltip, p as Legend, M as ReferenceLine, B as Bar, o as Cell } from "./generateCategoricalChart-CU8yhsos.js";
import { L as LineChart, a as Line } from "./LineChart-BcaPu4Qf.js";
import { C as CartesianGrid } from "./CartesianGrid-qyj98Up0.js";
import { B as BarChart } from "./BarChart-CsjMJIar.js";
import { C as ChevronRight } from "./chevron-right-B-dieP9o.js";
import { B as BookOpen } from "./book-open-DdM0ZRzp.js";
import { P as PiggyBank } from "./piggy-bank-DrKiFT50.js";
import { S as ShieldCheck, B as BadgeIndianRupee } from "./shield-check-B86-1VT-.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
];
const DollarSign = createLucideIcon("dollar-sign", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M7 20h10", key: "e6iznv" }],
  ["path", { d: "M10 20c5.5-2.5.8-6.4 3-10", key: "161w41" }],
  [
    "path",
    {
      d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",
      key: "9gtqwd"
    }
  ],
  [
    "path",
    {
      d: "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",
      key: "bkxnd2"
    }
  ]
];
const Sprout = createLucideIcon("sprout", __iconNode);
function formatINR(value) {
  return `₹${Math.round(value).toLocaleString("en-IN")}`;
}
function formatCrore(value) {
  if (value >= 1e7) return `₹${(value / 1e7).toFixed(2)} Cr`;
  if (value >= 1e5) return `₹${(value / 1e5).toFixed(2)} L`;
  return formatINR(value);
}
const PILLAR_CARDS = [
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-6 w-6" }),
    title: "Budgeting",
    description: "Creating a plan to track income and expenditures systematically to achieve financial goals.",
    color: "border-l-blue-500",
    iconBg: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    link: "/tools/budget",
    linkLabel: "Open Budget Planner"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(PiggyBank, { className: "h-6 w-6" }),
    title: "Saving",
    description: "Setting aside funds regularly to create an emergency corpus and work towards future goals.",
    color: "border-l-emerald-500",
    iconBg: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
    link: "/tips",
    linkLabel: "Explore Savings Tips"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-6 w-6" }),
    title: "Investing",
    description: "Growing your wealth through equity, mutual funds, fixed income, and alternative assets.",
    color: "border-l-indigo-500",
    iconBg: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
    link: "/tips",
    linkLabel: "Investing Tips"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-6 w-6" }),
    title: "Insurance",
    description: "Protecting yourself and family against financial risks through life, health, and general insurance.",
    color: "border-l-orange-500",
    iconBg: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
    link: "/tips",
    linkLabel: "Insurance Tips"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeIndianRupee, { className: "h-6 w-6" }),
    title: "Tax Planning",
    description: "Legally minimizing tax liability through instruments like ELSS, PPF, NPS, and 80C deductions.",
    color: "border-l-violet-500",
    iconBg: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
    link: "/tips",
    linkLabel: "Tax Planning Tips"
  }
];
const INSTRUMENTS = [
  {
    name: "EPF",
    fullName: "Employees' Provident Fund",
    description: "Mandatory retirement savings for salaried employees. Employer matches your 12% contribution.",
    benefit: "8.25% p.a. guaranteed return",
    taxStatus: "EEE",
    taxColor: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
  },
  {
    name: "PPF",
    fullName: "Public Provident Fund",
    description: "Sovereign-backed 15-year scheme open to all. Partial withdrawals allowed from year 7.",
    benefit: "7.1% p.a., 15-year lock-in",
    taxStatus: "EEE",
    taxColor: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
  },
  {
    name: "NPS",
    fullName: "National Pension System",
    description: "Market-linked pension with ultra-low fund management charges (0.01%). Extra ₹50K 80CCD(1B) benefit.",
    benefit: "Extra ₹50K 80CCD(1B) deduction",
    taxStatus: "EET",
    taxColor: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
  },
  {
    name: "ELSS",
    fullName: "Equity Linked Savings Scheme",
    description: "Equity mutual funds with 3-year lock-in and 80C deduction. Highest potential returns among 80C.",
    benefit: "Historically 12–15% CAGR",
    taxStatus: "EEE*",
    taxColor: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
  },
  {
    name: "SCSS",
    fullName: "Senior Citizens Savings Scheme",
    description: "For investors above 60. Highest safe returns among government schemes with quarterly payouts.",
    benefit: "8.2% p.a., quarterly interest",
    taxStatus: "Taxable",
    taxColor: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
  },
  {
    name: "APY",
    fullName: "Atal Pension Yojana",
    description: "Government-guaranteed pension for unorganised sector workers. Guaranteed ₹1K–₹5K/month pension.",
    benefit: "Guaranteed monthly pension",
    taxStatus: "80CCD",
    taxColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
  }
];
function RetirementPlanning() {
  const [currentAge, setCurrentAge] = reactExports.useState(30);
  const [retirementAge, setRetirementAge] = reactExports.useState(60);
  const [monthlyExpenses, setMonthlyExpenses] = reactExports.useState(4e4);
  const [inflationRate, setInflationRate] = reactExports.useState(6);
  const [returnRate, setReturnRate] = reactExports.useState(12);
  const [currentSavings, setCurrentSavings] = reactExports.useState(1e5);
  const calc = reactExports.useMemo(() => {
    const years = Math.max(retirementAge - currentAge, 1);
    const monthlyReturn = returnRate / 100 / 12;
    const months = years * 12;
    const adjustedMonthly = monthlyExpenses * (1 + inflationRate / 100) ** years;
    const requiredCorpus = adjustedMonthly * 12 / 0.04;
    const currentSavingsGrown = currentSavings * (1 + returnRate / 100) ** years;
    const corpusGap = Math.max(requiredCorpus - currentSavingsGrown, 0);
    const monthlySIP = monthlyReturn > 0 ? corpusGap * monthlyReturn / ((1 + monthlyReturn) ** months - 1) : corpusGap / months;
    const projectedSIPCorpus = monthlyReturn > 0 ? monthlySIP * ((1 + monthlyReturn) ** months - 1) / monthlyReturn : monthlySIP * months;
    const totalProjected = projectedSIPCorpus + currentSavingsGrown;
    const totalInvested = monthlySIP * months;
    const interestEarned = projectedSIPCorpus - totalInvested;
    return {
      years,
      adjustedMonthly,
      requiredCorpus,
      monthlySIP,
      projectedSIPCorpus,
      totalProjected,
      currentSavingsGrown,
      totalInvested,
      interestEarned
    };
  }, [
    currentAge,
    retirementAge,
    monthlyExpenses,
    inflationRate,
    returnRate,
    currentSavings
  ]);
  const growthChartData = reactExports.useMemo(() => {
    const data = [];
    const monthlyReturn = returnRate / 100 / 12;
    const { monthlySIP, requiredCorpus, years } = calc;
    for (let yr = 0; yr <= years; yr++) {
      const months = yr * 12;
      const savingsGrown = currentSavings * (1 + returnRate / 100) ** yr;
      const sipCorpus = monthlyReturn > 0 && months > 0 ? monthlySIP * ((1 + monthlyReturn) ** months - 1) / monthlyReturn : monthlySIP * months;
      data.push({
        age: currentAge + yr,
        projected: Math.round(savingsGrown + sipCorpus),
        required: Math.round(requiredCorpus)
      });
    }
    return data;
  }, [calc, currentAge, currentSavings, returnRate]);
  const sipBreakdownData = [
    {
      name: "Amount Invested",
      value: Math.round(calc.totalInvested),
      fill: "#2563EB"
    },
    {
      name: "Interest Earned",
      value: Math.round(Math.max(calc.interestEarned, 0)),
      fill: "#10B981"
    },
    {
      name: "Existing Savings Grown",
      value: Math.round(calc.currentSavingsGrown),
      fill: "#8B5CF6"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Retirement Planning",
        subtitle: "Calculate your retirement corpus, plan your SIP, and discover the best Indian instruments to secure your golden years.",
        badge: "Calculator"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "grid lg:grid-cols-3 gap-8 mb-12",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-6 shadow-card sticky top-20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-foreground text-lg mb-6 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-5 w-5 text-primary" }),
                "Your Details"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "currentAge", className: "text-sm mb-1.5 block", children: "Current Age" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "currentAge",
                      "data-ocid": "retirement.current_age.input",
                      type: "number",
                      min: 18,
                      max: 65,
                      value: currentAge,
                      onChange: (e) => setCurrentAge(Number(e.target.value))
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Label,
                    {
                      htmlFor: "retirementAge",
                      className: "text-sm mb-1.5 block",
                      children: "Retirement Age"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "retirementAge",
                      "data-ocid": "retirement.retirement_age.input",
                      type: "number",
                      min: 40,
                      max: 80,
                      value: retirementAge,
                      onChange: (e) => setRetirementAge(Number(e.target.value))
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Label,
                    {
                      htmlFor: "monthlyExpenses",
                      className: "text-sm mb-1.5 block",
                      children: "Monthly Expenses Today (₹)"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "monthlyExpenses",
                      "data-ocid": "retirement.monthly_expenses.input",
                      type: "number",
                      min: 0,
                      value: monthlyExpenses,
                      onChange: (e) => setMonthlyExpenses(Number(e.target.value))
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Label,
                    {
                      htmlFor: "inflationRate",
                      className: "text-sm mb-1.5 block",
                      children: "Expected Inflation Rate (%)"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "inflationRate",
                      "data-ocid": "retirement.inflation_rate.input",
                      type: "number",
                      min: 1,
                      max: 20,
                      step: 0.5,
                      value: inflationRate,
                      onChange: (e) => setInflationRate(Number(e.target.value))
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "returnRate", className: "text-sm mb-1.5 block", children: "Expected Investment Return (%)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "returnRate",
                      "data-ocid": "retirement.return_rate.input",
                      type: "number",
                      min: 1,
                      max: 30,
                      step: 0.5,
                      value: returnRate,
                      onChange: (e) => setReturnRate(Number(e.target.value))
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Label,
                    {
                      htmlFor: "currentSavings",
                      className: "text-sm mb-1.5 block",
                      children: "Current Retirement Savings (₹)"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "currentSavings",
                      "data-ocid": "retirement.current_savings.input",
                      type: "number",
                      min: 0,
                      value: currentSavings,
                      onChange: (e) => setCurrentSavings(Number(e.target.value))
                    }
                  )
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    "data-ocid": "retirement.years.card",
                    initial: { scale: 0.95, opacity: 0.7 },
                    animate: { scale: 1, opacity: 1 },
                    transition: { duration: 0.25 },
                    className: "bg-card border border-border rounded-xl p-4 shadow-card text-center",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-display font-bold text-primary", children: calc.years }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Years to Retirement" })
                    ]
                  },
                  calc.years
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    "data-ocid": "retirement.adjusted_expenses.card",
                    initial: { scale: 0.95, opacity: 0.7 },
                    animate: { scale: 1, opacity: 1 },
                    transition: { duration: 0.25, delay: 0.04 },
                    className: "bg-card border border-border rounded-xl p-4 shadow-card text-center",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-display font-bold text-amber-600 dark:text-amber-400", children: formatCrore(calc.adjustedMonthly) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Monthly Expenses at Retirement" })
                    ]
                  },
                  calc.adjustedMonthly
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    "data-ocid": "retirement.required_corpus.card",
                    initial: { scale: 0.95, opacity: 0.7 },
                    animate: { scale: 1, opacity: 1 },
                    transition: { duration: 0.25, delay: 0.08 },
                    className: "bg-card border border-red-200 dark:border-red-900/30 rounded-xl p-4 shadow-card text-center col-span-2 md:col-span-1",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-display font-bold text-red-600 dark:text-red-400", children: formatCrore(calc.requiredCorpus) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Required Corpus (4% Rule)" })
                    ]
                  },
                  calc.requiredCorpus
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    "data-ocid": "retirement.monthly_sip.card",
                    initial: { scale: 0.95, opacity: 0.7 },
                    animate: { scale: 1, opacity: 1 },
                    transition: { duration: 0.25, delay: 0.12 },
                    className: "bg-card border border-primary/20 dark:border-primary/30 rounded-xl p-4 shadow-card text-center",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-display font-bold text-primary", children: formatCrore(calc.monthlySIP) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Monthly SIP Needed" })
                    ]
                  },
                  calc.monthlySIP
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    "data-ocid": "retirement.projected_corpus.card",
                    initial: { scale: 0.95, opacity: 0.7 },
                    animate: { scale: 1, opacity: 1 },
                    transition: { duration: 0.25, delay: 0.16 },
                    className: "bg-card border border-green-200 dark:border-green-900/30 rounded-xl p-4 shadow-card text-center",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-display font-bold text-green-600 dark:text-green-400", children: formatCrore(calc.totalProjected) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Projected Total Corpus" })
                    ]
                  },
                  calc.totalProjected
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    "data-ocid": "retirement.savings_grown.card",
                    initial: { scale: 0.95, opacity: 0.7 },
                    animate: { scale: 1, opacity: 1 },
                    transition: { duration: 0.25, delay: 0.2 },
                    className: "bg-card border border-border rounded-xl p-4 shadow-card text-center",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-display font-bold text-violet-600 dark:text-violet-400", children: formatCrore(calc.currentSavingsGrown) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Existing Savings Grown" })
                    ]
                  },
                  calc.currentSavingsGrown
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5 shadow-card", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-semibold text-foreground mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4 text-primary" }),
                  "Corpus Growth \\u2014 Age ",
                  currentAge,
                  " to ",
                  retirementAge
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 280, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  LineChart,
                  {
                    data: growthChartData,
                    margin: { top: 5, right: 10, left: -10, bottom: 5 },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        CartesianGrid,
                        {
                          strokeDasharray: "3 3",
                          stroke: "rgba(0,0,0,0.06)"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        XAxis,
                        {
                          dataKey: "age",
                          tick: { fontSize: 11 },
                          label: {
                            value: "Age",
                            position: "insideBottomRight",
                            offset: -5,
                            fontSize: 11
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        YAxis,
                        {
                          tick: { fontSize: 10 },
                          tickFormatter: (v) => v >= 1e7 ? `${(v / 1e7).toFixed(1)}Cr` : v >= 1e5 ? `${(v / 1e5).toFixed(0)}L` : `${v}`
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Tooltip,
                        {
                          formatter: (v, name) => [
                            formatCrore(Number(v)),
                            name === "projected" ? "Projected Corpus" : "Required Corpus"
                          ],
                          labelFormatter: (label) => `Age ${label}`
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Legend,
                        {
                          formatter: (value) => value === "projected" ? "Projected Corpus" : "Required Corpus"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        ReferenceLine,
                        {
                          x: retirementAge,
                          stroke: "#EF4444",
                          strokeDasharray: "4 2",
                          label: {
                            value: "Retire",
                            position: "top",
                            fontSize: 11,
                            fill: "#EF4444"
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Line,
                        {
                          type: "monotone",
                          dataKey: "projected",
                          stroke: "#2563EB",
                          strokeWidth: 2.5,
                          dot: false,
                          activeDot: { r: 5 }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Line,
                        {
                          type: "monotone",
                          dataKey: "required",
                          stroke: "#EF4444",
                          strokeWidth: 2,
                          strokeDasharray: "5 3",
                          dot: false
                        }
                      )
                    ]
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5 shadow-card", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-semibold text-foreground mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-4 w-4 text-primary" }),
                  "SIP Breakdown at Retirement"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  BarChart,
                  {
                    data: sipBreakdownData,
                    margin: { top: 5, right: 10, left: -10, bottom: 5 },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        CartesianGrid,
                        {
                          strokeDasharray: "3 3",
                          stroke: "rgba(0,0,0,0.06)"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "name", tick: { fontSize: 11 } }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        YAxis,
                        {
                          tick: { fontSize: 10 },
                          tickFormatter: (v) => v >= 1e7 ? `${(v / 1e7).toFixed(1)}Cr` : v >= 1e5 ? `${(v / 1e5).toFixed(0)}L` : `${v}`
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (v) => [formatCrore(Number(v)), ""] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "value", radius: [6, 6, 0, 0], children: sipBreakdownData.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: entry.fill }, entry.name)) })
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3 mt-3", children: sipBreakdownData.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-1.5 text-xs text-muted-foreground",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "inline-block w-3 h-3 rounded-sm",
                          style: { backgroundColor: item.fill }
                        }
                      ),
                      item.name,
                      ":",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: formatCrore(item.value) })
                    ]
                  },
                  item.name
                )) })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.section,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.55 },
          viewport: { once: true },
          className: "mb-14",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-foreground", children: "The Five Pillars of Financial Wellness" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2 max-w-xl mx-auto", children: "Retirement planning doesn't exist in isolation. Master these five pillars for complete financial security." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4", children: PILLAR_CARDS.map((pillar, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                "data-ocid": `retirement.pillar.item.${idx + 1}`,
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.4, delay: idx * 0.08 },
                viewport: { once: true },
                className: `bg-card border border-border rounded-xl p-5 shadow-card flex flex-col gap-3 border-l-4 ${pillar.color} hover:shadow-card-hover transition-shadow`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `inline-flex items-center justify-center rounded-xl p-2.5 w-fit ${pillar.iconBg}`,
                      children: pillar.icon
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-base", children: pillar.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs mt-1 leading-relaxed", children: pillar.description })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: pillar.link,
                      "data-ocid": `retirement.pillar.link.${idx + 1}`,
                      className: "inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 transition-colors",
                      children: [
                        pillar.linkLabel,
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5" })
                      ]
                    }
                  ) })
                ]
              },
              pillar.title
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.section,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.55 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-foreground", children: "Top Retirement Instruments in India" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2 max-w-xl mx-auto", children: "Choose the right mix based on your tax slab, risk appetite, and time horizon." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                "data-ocid": "retirement.instruments.list",
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",
                children: INSTRUMENTS.map((inst, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    "data-ocid": `retirement.instruments.item.${idx + 1}`,
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.4, delay: idx * 0.07 },
                    viewport: { once: true },
                    className: "bg-card border border-border rounded-xl p-5 shadow-card flex flex-col gap-3 hover:shadow-card-hover transition-shadow",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-xl text-primary", children: inst.name }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground leading-tight", children: inst.fullName })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Badge,
                          {
                            variant: "secondary",
                            className: `text-xs font-bold shrink-0 border-0 ${inst.taxColor}`,
                            children: inst.taxStatus
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed flex-1", children: inst.description }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-auto pt-3 border-t border-border", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Sprout, { className: "h-4 w-4 text-green-600 shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground", children: inst.benefit })
                      ] })
                    ]
                  },
                  inst.name
                ))
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 text-center text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Tax Status Key: " }),
              "EEE = Exempt-Exempt-Exempt (contribution, growth, maturity all tax-free) · EET = contribution & growth exempt, maturity partly taxable · ELSS* = Long-term capital gains above ₹1L taxed at 10%"
            ] })
          ]
        }
      )
    ] })
  ] });
}
export {
  RetirementPlanning as default
};
