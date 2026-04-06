import { m as createLucideIcon, j as jsxRuntimeExports, S as Shield } from "./index-C9PNr72X.js";
import { P as PageHeader } from "./PageHeader-ImEogFy7.js";
import { m as motion } from "./proxy-DvLVXVPz.js";
import { T as TriangleAlert } from "./triangle-alert-DPjttDQQ.js";
import { P as Phone } from "./phone-C6yPysd3.js";
import { B as BadgeCheck } from "./badge-check-CvweA3aM.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4", key: "g0fldk" }],
  ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
  ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }]
];
const Key = createLucideIcon("key", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M12 16h.01", key: "1drbdi" }],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  [
    "path",
    {
      d: "M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",
      key: "1fd625"
    }
  ]
];
const OctagonAlert = createLucideIcon("octagon-alert", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272",
      key: "1wngk7"
    }
  ],
  ["path", { d: "M22 2 2 22", key: "y4kqgn" }],
  [
    "path",
    {
      d: "M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473",
      key: "10hv5p"
    }
  ]
];
const PhoneOff = createLucideIcon("phone-off", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }]
];
const ShieldAlert = createLucideIcon("shield-alert", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5", key: "1uzm8b" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const SquareCheckBig = createLucideIcon("square-check-big", __iconNode);
const SCAMS = [
  {
    title: "UPI Fraud",
    desc: "Scammer sends a 'collect request' claiming to send money. Entering your PIN in a collect request sends money OUT, not in.",
    icon: PhoneOff,
    color: "text-red-600",
    bg: "bg-red-100 dark:bg-red-900/30"
  },
  {
    title: "OTP Scam",
    desc: "Fraudster impersonates bank/telecom staff and asks for OTP to 'verify' your account. Never share OTP with anyone.",
    icon: Key,
    color: "text-orange-600",
    bg: "bg-orange-100 dark:bg-orange-900/30"
  },
  {
    title: "Phishing",
    desc: "Fake emails, SMS, or websites that look like your bank. They steal login credentials. Always check the URL carefully.",
    icon: TriangleAlert,
    color: "text-yellow-600",
    bg: "bg-yellow-100 dark:bg-yellow-900/30"
  },
  {
    title: "KYC Fraud",
    desc: "Caller claims your KYC is expired and your account will be blocked. They direct you to a fake site to steal credentials.",
    icon: OctagonAlert,
    color: "text-purple-600",
    bg: "bg-purple-100 dark:bg-purple-900/30"
  },
  {
    title: "Lottery / Job Scam",
    desc: "You 'win' a prize or get a job offer requiring an upfront fee. No legitimate lottery requires payment to claim winnings.",
    icon: ShieldAlert,
    color: "text-pink-600",
    bg: "bg-pink-100 dark:bg-pink-900/30"
  },
  {
    title: "Screen Share Scam",
    desc: "Fraudster asks you to install AnyDesk/TeamViewer to 'fix' an issue. They then control your device and drain bank accounts.",
    icon: TriangleAlert,
    color: "text-red-700",
    bg: "bg-red-100 dark:bg-red-900/30"
  }
];
const RED_FLAGS = [
  "Creates urgency: 'Your account will be blocked in 2 hours'",
  "Asks for OTP, PIN, CVV, or password over phone/chat",
  "Sends unknown links via WhatsApp or SMS",
  "Offers too-good-to-be-true returns or prizes",
  "Claims to be from RBI, TRAI, CBI, or bank headquarters",
  "Requests remote access to your phone or computer",
  "Asks you to transfer money to 'secure' or 'RBI vault' account"
];
const PASSWORD_TIPS = [
  "Use at least 12 characters with numbers, symbols, uppercase & lowercase",
  "Never reuse the same password on multiple websites",
  "Enable 2-Factor Authentication (2FA) on all financial accounts",
  "Use a password manager (Bitwarden, 1Password) to store passwords safely",
  "Change passwords if you suspect any breach",
  "Never store passwords in plain text or share them via WhatsApp"
];
const REPORT_CHANNELS = [
  {
    name: "National Cyber Crime Helpline",
    contact: "1930",
    desc: "Call immediately if money is deducted fraudulently. Quick action increases recovery chances.",
    icon: Phone
  },
  {
    name: "Cyber Crime Portal",
    contact: "cybercrime.gov.in",
    desc: "File online complaints for financial fraud, phishing, and social media crimes.",
    icon: Shield
  },
  {
    name: "RBI Banking Ombudsman",
    contact: "bankingombudsman.rbi.org.in",
    desc: "Escalate unresolved bank complaints after 30 days of filing with the bank.",
    icon: BadgeCheck
  },
  {
    name: "Local Police (Cyber Cell)",
    contact: "Nearest police station",
    desc: "Register an FIR for fraud. Ask specifically for the Cyber Crime Cell.",
    icon: OctagonAlert
  }
];
function FraudSecurity() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Financial Fraud & Security",
        subtitle: "Recognize scams, protect your money, and know exactly what to do if you're targeted",
        badge: "Security"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "bg-red-50 dark:bg-red-900/20 border-2 border-red-400 rounded-2xl p-5 mb-10 flex items-center gap-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "h-10 w-10 text-red-600 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-red-800 dark:text-red-200 text-lg", children: "RBI will NEVER ask for your PIN, OTP, or password." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-700 dark:text-red-300", children: "No legitimate bank, government body, or financial institution will ever request sensitive credentials over phone, SMS, or WhatsApp." })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-6", children: "Common Financial Scams in India" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: SCAMS.map((scam, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.95 },
                whileInView: { opacity: 1, scale: 1 },
                transition: { duration: 0.3, delay: i * 0.07 },
                viewport: { once: true },
                className: "bg-card border border-border rounded-xl p-5 shadow-card",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-flex rounded-xl p-3 mb-3 ${scam.bg}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(scam.icon, { className: `h-5 w-5 ${scam.color}` }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-2", children: scam.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: scam.desc })
                ]
              },
              scam.title
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-4", children: "🚩 Red Flags — Warning Signs of a Scam" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-3", children: RED_FLAGS.map((flag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-start gap-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-red-500 mt-0.5 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-800 dark:text-red-200", children: flag })
                ]
              },
              flag
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-4", children: "Safe Password Practices" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-3", children: PASSWORD_TIPS.map((tip) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-start gap-3 bg-card border border-border rounded-xl p-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "h-4 w-4 text-green-500 mt-0.5 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: tip })
                ]
              },
              tip
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-4", children: "How to Report Financial Fraud in India" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-5", children: REPORT_CHANNELS.map((ch, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 15 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.3, delay: i * 0.07 },
                viewport: { once: true },
                className: "bg-card border border-border rounded-xl p-5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary/10 rounded-xl p-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ch.icon, { className: "h-5 w-5 text-primary" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground text-sm", children: ch.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold text-sm", children: ch.contact })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: ch.desc })
                ]
              },
              ch.name
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-4", children: "RBI Consumer Protection Guidelines" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
              "Zero liability for unauthorized transactions if reported within 3 working days",
              "Limited liability (max ₹5,000–₹25,000) if reported within 4–7 days depending on account type",
              "Banks must resolve fraud complaints within 10 working days",
              "You are entitled to full reimbursement if fraud occurred due to bank negligence",
              "ATM fraud reimbursement must happen within 5 working days of filing complaint"
            ].map((rule) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-start gap-3 bg-card border border-border rounded-xl p-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "h-4 w-4 text-green-500 mt-0.5 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: rule })
                ]
              },
              rule
            )) })
          ]
        }
      )
    ] }) })
  ] });
}
export {
  FraudSecurity as default
};
