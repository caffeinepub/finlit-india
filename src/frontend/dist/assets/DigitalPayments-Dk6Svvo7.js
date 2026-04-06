import { m as createLucideIcon, j as jsxRuntimeExports, S as Shield } from "./index-C9PNr72X.js";
import { P as PageHeader } from "./PageHeader-ImEogFy7.js";
import { m as motion } from "./proxy-DvLVXVPz.js";
import { Z as Zap } from "./zap-CJK6eI9J.js";
import { W as Wallet } from "./wallet-D-AbaZ7a.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m16 3 4 4-4 4", key: "1x1c3m" }],
  ["path", { d: "M20 7H4", key: "zbl0bi" }],
  ["path", { d: "m8 21-4-4 4-4", key: "h9nckh" }],
  ["path", { d: "M4 17h16", key: "g4d7ey" }]
];
const ArrowRightLeft = createLucideIcon("arrow-right-left", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "5", height: "5", x: "3", y: "3", rx: "1", key: "1tu5fj" }],
  ["rect", { width: "5", height: "5", x: "16", y: "3", rx: "1", key: "1v8r4q" }],
  ["rect", { width: "5", height: "5", x: "3", y: "16", rx: "1", key: "1x03jg" }],
  ["path", { d: "M21 16h-3a2 2 0 0 0-2 2v3", key: "177gqh" }],
  ["path", { d: "M21 21v.01", key: "ents32" }],
  ["path", { d: "M12 7v3a2 2 0 0 1-2 2H7", key: "8crl2c" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M12 3h.01", key: "n36tog" }],
  ["path", { d: "M12 16v.01", key: "133mhm" }],
  ["path", { d: "M16 12h1", key: "1slzba" }],
  ["path", { d: "M21 12v.01", key: "1lwtk9" }],
  ["path", { d: "M12 21v-1", key: "1880an" }]
];
const QrCode = createLucideIcon("qr-code", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }]
];
const Wifi = createLucideIcon("wifi", __iconNode);
const APPS = [
  {
    name: "PhonePe",
    color: "bg-purple-100 dark:bg-purple-900/30",
    textColor: "text-purple-700 dark:text-purple-300",
    feature: "Market leader, insurance & gold buying built-in",
    users: "500M+ users"
  },
  {
    name: "Google Pay",
    color: "bg-blue-100 dark:bg-blue-900/30",
    textColor: "text-blue-700 dark:text-blue-300",
    feature: "Simple UX, rewards & cashback on transactions",
    users: "150M+ users"
  },
  {
    name: "Paytm",
    color: "bg-sky-100 dark:bg-sky-900/30",
    textColor: "text-sky-700 dark:text-sky-300",
    feature: "Wallet + UPI, first mover in digital payments",
    users: "300M+ users"
  },
  {
    name: "BHIM",
    color: "bg-green-100 dark:bg-green-900/30",
    textColor: "text-green-700 dark:text-green-300",
    feature: "Government-backed, works on basic phones too",
    users: "Official NPCI app"
  }
];
const WALLET_VS_UPI = [
  {
    feature: "Linked to bank",
    wallet: "Optional (top-up needed)",
    upi: "✅ Always linked"
  },
  {
    feature: "Transaction limit",
    wallet: "₹10,000/month (basic KYC)",
    upi: "₹1 lakh/transaction"
  },
  {
    feature: "Charges",
    wallet: "Bank transfer fees may apply",
    upi: "Free for all users"
  },
  {
    feature: "Availability",
    wallet: "Internet required",
    upi: "24×7, even bank holidays"
  },
  {
    feature: "Merchant acceptance",
    wallet: "Limited to partner merchants",
    upi: "Any UPI QR code"
  }
];
const PAYMENT_MODES = [
  {
    mode: "NEFT",
    speed: "2–4 hours",
    limit: "No limit",
    charges: "Free (RBI mandate)",
    use: "Large transfers, batch payments"
  },
  {
    mode: "RTGS",
    speed: "Instant",
    limit: "Min ₹2 lakh",
    charges: "Free",
    use: "High-value transactions"
  },
  {
    mode: "IMPS",
    speed: "Instant 24×7",
    limit: "₹5 lakh",
    charges: "₹5–15",
    use: "Urgent transfers anytime"
  },
  {
    mode: "UPI",
    speed: "Instant 24×7",
    limit: "₹1 lakh",
    charges: "Free",
    use: "Everyday payments"
  }
];
const SAFE_TIPS = [
  "Never share OTP, PIN, or password — even with family",
  "Always check the UPI ID before sending money",
  "Use only official apps from trusted app stores",
  "Verify merchant QR before scanning (check name)",
  "Look for HTTPS on payment pages",
  "Enable transaction alerts via SMS and email",
  "Receiving money never requires entering your PIN",
  "If scammed, call 1930 (National Cyber Crime Helpline) immediately"
];
function DigitalPayments() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Digital Payments & FinTech",
        subtitle: "UPI, mobile wallets, QR codes, and staying safe online — India's digital payment revolution explained",
        badge: "FinTech"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 max-w-5xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        className: "mb-12",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary/10 rounded-xl p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-6 w-6 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-foreground", children: "What is UPI?" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground leading-relaxed mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Unified Payments Interface (UPI)" }),
              " ",
              "is a real-time payment system developed by NPCI (National Payments Corporation of India). It links your bank account to a Virtual Payment Address (VPA) like",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "bg-muted px-1 rounded text-sm", children: "name@okicici" }),
              " ",
              "— making payments instant, 24×7, and free."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-3", children: [
              { v: "₹20 Lakh Cr+", l: "Monthly UPI volume (2024)" },
              { v: "13B+", l: "Transactions/month" },
              { v: "Free", l: "Zero charges for users" }
            ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "bg-primary/5 rounded-xl p-3 text-center",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl font-bold text-primary", children: s.v }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: s.l })
                ]
              },
              s.l
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-4", children: "Popular Payment Apps" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10", children: APPS.map((app, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.95 },
              whileInView: { opacity: 1, scale: 1 },
              transition: { duration: 0.3, delay: i * 0.07 },
              viewport: { once: true },
              className: "bg-card border border-border rounded-xl p-4 shadow-card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `inline-flex rounded-xl px-3 py-1.5 mb-3 ${app.color}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-bold text-sm ${app.textColor}`, children: app.name })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed mb-2", children: app.feature }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-primary", children: app.users })
              ]
            },
            app.name
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 15 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              viewport: { once: true },
              className: "mb-10",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-4", children: "QR Code Payments" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl p-6 flex flex-col sm:flex-row gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary/10 rounded-xl p-3 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { className: "h-8 w-8 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-2", children: "How to Pay via QR" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "space-y-1 text-sm text-muted-foreground list-decimal list-inside", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Open any UPI app (PhonePe, GPay, Paytm)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: 'Tap "Scan QR" and point camera at the code' }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Verify the merchant name shown on screen" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Enter amount and your UPI PIN to confirm" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-yellow-800 dark:text-yellow-200", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Safety:" }),
                      " Always verify the merchant name before paying. Scammers create fake QR codes. Scanning to receive money should NEVER ask for your PIN."
                    ] }) })
                  ] })
                ] }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 15 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              viewport: { once: true },
              className: "mb-10",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-4", children: "Wallets vs UPI" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-0 bg-muted/30 border-b border-border", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 text-sm font-semibold text-muted-foreground", children: "Feature" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 text-sm font-semibold text-foreground flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-4 w-4" }),
                      " Wallet"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 text-sm font-semibold text-primary flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { className: "h-4 w-4" }),
                      " UPI"
                    ] })
                  ] }),
                  WALLET_VS_UPI.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "grid grid-cols-3 gap-0 border-b border-border last:border-0",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 text-sm text-muted-foreground", children: row.feature }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 text-sm text-foreground", children: row.wallet }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 text-sm text-foreground", children: row.upi })
                      ]
                    },
                    row.feature
                  ))
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 15 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              viewport: { once: true },
              className: "mb-10",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-4", children: "NEFT, RTGS, IMPS, UPI — What's the Difference?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-5 gap-0 bg-muted/30 border-b border-border", children: ["Mode", "Speed", "Limit", "Charges", "Best For"].map(
                    (h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "p-3 text-xs font-semibold text-muted-foreground",
                        children: h
                      },
                      h
                    )
                  ) }),
                  PAYMENT_MODES.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "grid grid-cols-5 gap-0 border-b border-border last:border-0",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 text-sm font-semibold text-primary", children: row.mode }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 text-sm text-foreground", children: row.speed }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 text-sm text-foreground", children: row.limit }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 text-sm text-foreground", children: row.charges }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 text-sm text-muted-foreground", children: row.use })
                      ]
                    },
                    row.mode
                  ))
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 15 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              viewport: { once: true },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-4", children: "Safe Online Transactions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-3", children: SAFE_TIPS.map((tip) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-start gap-3 bg-card border border-border rounded-xl p-4",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-4 w-4 text-green-500 mt-0.5 shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: tip })
                    ]
                  },
                  tip
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 flex gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRightLeft, { className: "h-5 w-5 text-green-600 shrink-0 mt-0.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-green-800 dark:text-green-200", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Remember:" }),
                    " India processes over 13 billion UPI transactions per month. The system is safe when used correctly. The weakest link is always the human — never share credentials."
                  ] })
                ] })
              ]
            }
          )
        ]
      }
    ) }) })
  ] });
}
export {
  DigitalPayments as default
};
