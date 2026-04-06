import { m as createLucideIcon, j as jsxRuntimeExports, T as TrendingUp } from "./index-C9PNr72X.js";
import { P as PageHeader } from "./PageHeader-ImEogFy7.js";
import { m as motion } from "./proxy-DvLVXVPz.js";
import { C as CircleCheck } from "./circle-check-CIkmXIzH.js";
import { L as Landmark } from "./landmark-DlePohSA.js";
import { C as ChartColumn } from "./chart-column-cc5mKKcG.js";
import { L as Lightbulb } from "./lightbulb-BfVg0lds.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }],
  ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }],
  ["path", { d: "M7 6h1v4", key: "1obek4" }],
  ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }]
];
const Coins = createLucideIcon("coins", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M6 3h12l4 6-10 13L2 9Z", key: "1pcd5k" }],
  ["path", { d: "M11 3 8 9l4 13 4-13-3-6", key: "1fcu3u" }],
  ["path", { d: "M2 9h20", key: "16fsjt" }]
];
const Gem = createLucideIcon("gem", __iconNode);
const INVESTMENT_TYPES = [
  {
    title: "Fixed Deposits (FD)",
    icon: Landmark,
    color: "text-blue-600",
    bg: "bg-blue-100 dark:bg-blue-900/30",
    risk: "Very Low",
    riskColor: "text-green-600",
    returns: "5–8% p.a.",
    points: [
      "Capital fully protected",
      "DICGC insured up to ₹5 lakh",
      "Lock-in period: 7 days–10 years",
      "Premature withdrawal allowed (with penalty)",
      "Best for: Emergency fund, short-term goals"
    ]
  },
  {
    title: "Mutual Funds",
    icon: ChartColumn,
    color: "text-purple-600",
    bg: "bg-purple-100 dark:bg-purple-900/30",
    risk: "Low–High",
    riskColor: "text-yellow-600",
    returns: "8–15% p.a.",
    points: [
      "Pooled investment managed by experts",
      "Start SIP from ₹500/month",
      "Regulated by SEBI",
      "Equity, debt, hybrid options",
      "Best for: Wealth building, tax saving (ELSS)"
    ]
  },
  {
    title: "Stocks (Equities)",
    icon: TrendingUp,
    color: "text-red-600",
    bg: "bg-red-100 dark:bg-red-900/30",
    risk: "High",
    riskColor: "text-red-600",
    returns: "10–20%+ p.a.",
    points: [
      "Own a share of a listed company",
      "Traded on BSE and NSE",
      "High risk, high reward potential",
      "Requires research & patience",
      "Best for: Long-term wealth creation (10+ years)"
    ]
  },
  {
    title: "Gold Investment",
    icon: Coins,
    color: "text-yellow-600",
    bg: "bg-yellow-100 dark:bg-yellow-900/30",
    risk: "Medium",
    riskColor: "text-orange-600",
    returns: "8–10% p.a. (long-term)",
    points: [
      "Traditional Indian safe-haven asset",
      "Sovereign Gold Bonds: +2.5% extra interest",
      "Digital gold via apps (no storage risk)",
      "Gold ETFs on stock exchange",
      "Best for: Hedge against inflation"
    ]
  }
];
const RISK_LADDER = [
  { level: "Lowest Risk", type: "Savings Account / FD", color: "bg-green-500" },
  { level: "Low Risk", type: "Government Bonds / PPF", color: "bg-lime-500" },
  { level: "Low–Medium", type: "Debt Mutual Funds", color: "bg-yellow-400" },
  { level: "Medium", type: "Hybrid / Balanced Funds", color: "bg-orange-400" },
  { level: "High", type: "Equity Mutual Funds", color: "bg-red-500" },
  {
    level: "Highest Risk",
    type: "Direct Stocks / Crypto",
    color: "bg-red-700"
  }
];
function SavingsInvesting() {
  const monthly = 5e3;
  const rate = 0.01;
  const n = 240;
  const futureValue = Math.round(
    monthly * (((1 + rate) ** n - 1) / rate) * (1 + rate)
  );
  const invested = monthly * n;
  const gains = futureValue - invested;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Saving & Investment Basics",
        subtitle: "Know the difference between saving and investing, types of investments, and the power of starting early",
        badge: "Investing"
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-6", children: "Saving vs Investing — What's the Difference?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-blue-800 dark:text-blue-200 text-lg mb-3", children: "Saving" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: [
                  "Keeping money safe and accessible",
                  "Goal: Security and short-term needs",
                  "Low risk, low return (3–6%)",
                  "Example: Emergency fund in savings account",
                  "Timeframe: 0–3 years"
                ].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "li",
                  {
                    className: "flex items-start gap-2 text-sm text-blue-800 dark:text-blue-200",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-blue-500 mt-0.5 shrink-0" }),
                      p
                    ]
                  },
                  p
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-green-800 dark:text-green-200 text-lg mb-3", children: "Investing" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: [
                  "Putting money to work to generate returns",
                  "Goal: Wealth creation and beating inflation",
                  "Moderate to high risk, higher returns (8–20%)",
                  "Example: SIP in equity mutual fund",
                  "Timeframe: 3–30+ years"
                ].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "li",
                  {
                    className: "flex items-start gap-2 text-sm text-green-800 dark:text-green-200",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-green-500 mt-0.5 shrink-0" }),
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
          className: "mb-12",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-6", children: "Types of Investments" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-5", children: INVESTMENT_TYPES.map((inv, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.95 },
                whileInView: { opacity: 1, scale: 1 },
                transition: { duration: 0.3, delay: i * 0.07 },
                viewport: { once: true },
                className: "bg-card border border-border rounded-xl p-5 shadow-card",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-xl p-3 ${inv.bg}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(inv.icon, { className: `h-5 w-5 ${inv.color}` }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-sm", children: inv.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "span",
                          {
                            className: `text-xs font-medium ${inv.riskColor}`,
                            children: [
                              "Risk: ",
                              inv.risk
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                          "| Returns: ",
                          inv.returns
                        ] })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: inv.points.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "li",
                    {
                      className: "flex items-start gap-2 text-xs text-muted-foreground",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5 text-primary mt-0.5 shrink-0" }),
                        p
                      ]
                    },
                    p
                  )) })
                ]
              },
              inv.title
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-6", children: "Risk vs Return — The Investment Ladder" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: RISK_LADDER.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: r.level }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `${r.color} rounded h-8 flex items-center px-3 transition-all`,
                    style: { width: `${(i + 1) * 13 + 10}%` },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-xs font-medium whitespace-nowrap", children: r.type })
                  }
                )
              ] }, r.type)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-4", children: "Higher risk investments typically offer higher potential returns over long periods. Match your investment to your risk tolerance and time horizon." })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-6", children: "Power of Compounding" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-6 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary/10 rounded-xl p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Gem, { className: "h-6 w-6 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground", children: "Example: ₹5,000/month SIP at 12% for 20 years" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "See how time and consistency create wealth" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-2xl font-bold text-blue-600", children: [
                    "₹",
                    (invested / 1e5).toFixed(1),
                    "L"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Amount Invested" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 dark:bg-green-900/20 rounded-xl p-4 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-2xl font-bold text-green-600", children: [
                    "₹",
                    (gains / 1e5).toFixed(1),
                    "L"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Returns Earned" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary/10 rounded-xl p-4 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-2xl font-bold text-primary", children: [
                    "₹",
                    (futureValue / 1e5).toFixed(1),
                    "L"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Final Corpus" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 p-3 bg-muted/30 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Formula:" }),
                " FV = P × [(1+r)ⁿ – 1] / r × (1+r) | where P=monthly SIP, r=monthly rate, n=months"
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "h-5 w-5 text-amber-600 shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-amber-800 dark:text-amber-200", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Key Principle:" }),
                " Start early, invest regularly, stay patient. A 25-year-old investing ₹5,000/month will have 3× more than a 35-year-old investing the same amount — just because of 10 extra years of compounding."
              ] })
            ] })
          ]
        }
      )
    ] }) })
  ] });
}
export {
  SavingsInvesting as default
};
