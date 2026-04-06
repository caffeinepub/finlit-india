import { m as createLucideIcon, j as jsxRuntimeExports } from "./index-C9PNr72X.js";
import { P as PageHeader } from "./PageHeader-ImEogFy7.js";
import { m as motion } from "./proxy-DvLVXVPz.js";
import { L as Landmark } from "./landmark-DlePohSA.js";
import { B as BadgeCheck } from "./badge-check-CvweA3aM.js";
import { C as CreditCard } from "./credit-card-DoDCPSMQ.js";
import { G as Globe } from "./globe-BbfktzuQ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M6 12h.01M18 12h.01", key: "113zkx" }]
];
const Banknote = createLucideIcon("banknote", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["line", { x1: "19", x2: "5", y1: "5", y2: "19", key: "1x9vlm" }],
  ["circle", { cx: "6.5", cy: "6.5", r: "2.5", key: "4mh3h7" }],
  ["circle", { cx: "17.5", cy: "17.5", r: "2.5", key: "1mdrzq" }]
];
const Percent = createLucideIcon("percent", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
];
const Smartphone = createLucideIcon("smartphone", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m16 11 2 2 4-4", key: "9rsbq5" }],
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const UserCheck = createLucideIcon("user-check", __iconNode);
const ACCOUNT_TYPES = [
  {
    title: "Savings Account",
    desc: "For individuals & salaried employees. Earns interest of 3–4% p.a. Best for daily transactions and building savings.",
    icon: Banknote,
    color: "text-blue-600",
    bg: "bg-blue-100 dark:bg-blue-900/30",
    tag: "Most Common"
  },
  {
    title: "Current Account",
    desc: "For businesses & traders. No interest earned but unlimited transactions allowed. Higher minimum balance required.",
    icon: Landmark,
    color: "text-purple-600",
    bg: "bg-purple-100 dark:bg-purple-900/30",
    tag: "For Business"
  },
  {
    title: "Fixed Deposit (FD)",
    desc: "Lock a lump sum for a fixed period (7 days–10 years). Earns 5–8% p.a. DICGC insured up to ₹5 lakh.",
    icon: Lock,
    color: "text-green-600",
    bg: "bg-green-100 dark:bg-green-900/30",
    tag: "High Interest"
  },
  {
    title: "Recurring Deposit (RD)",
    desc: "Deposit a fixed amount every month for a chosen tenure. Builds savings discipline. Interest similar to FD.",
    icon: Percent,
    color: "text-orange-600",
    bg: "bg-orange-100 dark:bg-orange-900/30",
    tag: "Monthly Savings"
  }
];
const DOCS_REQUIRED = [
  "Aadhaar Card (mandatory for KYC)",
  "PAN Card (for transactions above ₹50,000)",
  "Recent passport-size photograph",
  "Address proof (Aadhaar / Utility bill)",
  "Mobile number linked to Aadhaar"
];
const CARD_TYPES = [
  {
    title: "ATM Card",
    desc: "Use at ATMs to withdraw cash. Free 5 transactions/month at own bank ATM, 3 at other banks.",
    icon: CreditCard,
    color: "text-blue-600",
    bg: "bg-blue-100 dark:bg-blue-900/30"
  },
  {
    title: "Debit Card",
    desc: "Spend directly from your bank balance. Works online and offline. No debt incurred — you spend what you have.",
    icon: BadgeCheck,
    color: "text-green-600",
    bg: "bg-green-100 dark:bg-green-900/30"
  },
  {
    title: "Credit Card",
    desc: "Borrow from the bank and repay later. Interest-free if paid in full by due date. ~36–42% interest if you pay minimum only.",
    icon: CircleAlert,
    color: "text-red-600",
    bg: "bg-red-100 dark:bg-red-900/30"
  }
];
const BANKING_APPS = [
  {
    bank: "SBI",
    app: "YONO SBI",
    feature: "Full banking + investments + loans"
  },
  {
    bank: "HDFC",
    app: "HDFC NetBanking / MyApps",
    feature: "Fast transfers, credit card management"
  },
  {
    bank: "ICICI",
    app: "iMobile Pay",
    feature: "Works even for non-ICICI customers"
  },
  {
    bank: "Kotak",
    app: "Kotak Mobile Banking",
    feature: "811 zero-balance account via app"
  },
  {
    bank: "All Banks",
    app: "BHIM App",
    feature: "RBI-backed UPI app for all banks"
  }
];
function Banking() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Banking System in India",
        subtitle: "Understanding bank accounts, cards, interest rates, and digital banking — your gateway to financial inclusion",
        badge: "Banking"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "bg-primary/10 border border-primary/20 rounded-2xl p-6 mb-10 flex flex-col sm:flex-row gap-4 items-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold text-primary font-display", children: "50 Cr+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Jan Dhan Accounts Opened" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "India now has 4 major types of bank accounts designed for every need. Having a bank account is the first step to financial security." })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-6", children: "Types of Bank Accounts" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-5", children: ACCOUNT_TYPES.map((acc, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.95 },
                whileInView: { opacity: 1, scale: 1 },
                transition: { duration: 0.3, delay: i * 0.07 },
                viewport: { once: true },
                className: "bg-card border border-border rounded-xl p-5 shadow-card",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-xl p-3 shrink-0 ${acc.bg}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(acc.icon, { className: `h-6 w-6 ${acc.color}` }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground", children: acc.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium", children: acc.tag })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: acc.desc })
                  ] })
                ] })
              },
              acc.title
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-6", children: "How to Open a Bank Account" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-4", children: "Documents Required (KYC)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: DOCS_REQUIRED.map((doc) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "li",
                  {
                    className: "flex items-center gap-2 text-sm text-muted-foreground",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "h-4 w-4 text-green-500 shrink-0" }),
                      doc
                    ]
                  },
                  doc
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-4", children: "Zero-Balance Account (PMJDY)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-3", children: "Under Pradhan Mantri Jan Dhan Yojana, any Indian citizen can open a zero-balance savings account at any bank." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: [
                  "No minimum balance required",
                  "Free RuPay debit card",
                  "₹10,000 overdraft facility",
                  "Accident insurance of ₹2 lakh",
                  "Direct benefit transfer eligible"
                ].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "li",
                  {
                    className: "flex items-center gap-2 text-sm text-muted-foreground",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "h-4 w-4 text-primary shrink-0" }),
                      f
                    ]
                  },
                  f
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-6", children: "ATM, Debit Card & Credit Card" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-5", children: CARD_TYPES.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 15 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.3, delay: i * 0.08 },
                viewport: { once: true },
                className: "bg-card border border-border rounded-xl p-5 shadow-card",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-flex rounded-xl p-3 mb-3 ${c.bg}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: `h-6 w-6 ${c.color}` }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-2", children: c.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: c.desc })
                ]
              },
              c.title
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
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-6", children: "Net Banking & Mobile Banking" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-4 border-b border-border bg-muted/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "h-5 w-5 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground text-sm", children: "Popular Banking Apps in India" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: BANKING_APPS.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "grid grid-cols-3 gap-4 px-4 py-3 text-sm",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: row.bank }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-medium", children: row.app }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: row.feature })
                  ]
                },
                row.app
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-5 w-5 text-blue-600 shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-blue-800 dark:text-blue-200", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Security tip:" }),
                " Always use official bank apps downloaded from Play Store / App Store. Enable 2-factor authentication. Never share OTP or password with anyone — including someone claiming to be from the bank."
              ] })
            ] })
          ]
        }
      )
    ] }) })
  ] });
}
export {
  Banking as default
};
