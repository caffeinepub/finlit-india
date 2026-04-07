import { n as createLucideIcon, r as reactExports, j as jsxRuntimeExports, G as GraduationCap, B as BookOpen, C as ChevronDown, l as Button, Z as Youtube, T as TrendingUp } from "./index-C2gTZAc5.js";
import { B as Badge } from "./badge-BFqE_O3a.js";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-AqaI2WJn.js";
import { I as Input } from "./input-D-QuSoeY.js";
import { L as Label } from "./label-BZQkoq3e.js";
import { P as Progress, T as Trophy } from "./progress-DJopMnZL.js";
import { L as Lock } from "./lock-KJkhSFBq.js";
import { C as ChevronUp } from "./chevron-up-BJz1C9CL.js";
import { C as CircleCheck } from "./circle-check-BcSd0NIs.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]];
const Circle = createLucideIcon("circle", __iconNode$2);
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
      d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
      key: "143wyd"
    }
  ],
  ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6", key: "1itne7" }],
  ["rect", { x: "6", y: "14", width: "12", height: "8", rx: "1", key: "1ue0tg" }]
];
const Printer = createLucideIcon("printer", __iconNode$1);
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
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
const STORAGE_KEY = "cashindia_learning_progress";
const LEVELS = [
  {
    id: "beginner",
    title: "Beginner",
    subtitle: "Start your financial journey",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
    borderColor: "border-emerald-200 dark:border-emerald-800",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-6 w-6" }),
    certificateTitle: "Financial Literacy Foundations",
    modules: [
      {
        id: "b1",
        title: "What is Financial Literacy?",
        description: "Understand why managing money matters and how it impacts your life.",
        duration: "10 min",
        topics: [
          "Definition of financial literacy",
          "Why it matters in India",
          "Common money mistakes",
          "Setting financial goals"
        ],
        videoUrl: "https://www.youtube.com/watch?v=ZpwiJrzcYwA"
      },
      {
        id: "b2",
        title: "Budgeting Basics",
        description: "Learn the 50/30/20 rule and how to create your first monthly budget.",
        duration: "15 min",
        topics: [
          "50/30/20 rule",
          "Fixed vs variable expenses",
          "Tracking daily spending",
          "Free budgeting tools"
        ],
        videoUrl: "https://www.youtube.com/watch?v=sVKQn2I4HDM"
      },
      {
        id: "b3",
        title: "Understanding Bank Accounts",
        description: "Types of accounts, how interest works, and choosing the right bank.",
        duration: "12 min",
        topics: [
          "Savings vs current account",
          "Interest rates explained",
          "Zero-balance accounts (811)",
          "Jan Dhan Yojana"
        ],
        videoUrl: "https://www.youtube.com/watch?v=YtknqMDZLiI"
      },
      {
        id: "b4",
        title: "Digital Payments in India",
        description: "UPI, BHIM, PhonePe — how digital money works safely.",
        duration: "10 min",
        topics: [
          "How UPI works",
          "Setting up BHIM/PhonePe",
          "Safe transaction tips",
          "Avoiding common scams"
        ],
        videoUrl: "https://www.youtube.com/watch?v=nbHLflG_Eyc"
      },
      {
        id: "b5",
        title: "Government Schemes for You",
        description: "Discover free government schemes that can protect and grow your money.",
        duration: "12 min",
        topics: [
          "PMJDY, PMJJBY, PMSBY",
          "Atal Pension Yojana",
          "Mudra Yojana",
          "How to apply online"
        ],
        videoUrl: "https://www.youtube.com/watch?v=UiG-HuUBjP8"
      }
    ]
  },
  {
    id: "intermediate",
    title: "Intermediate",
    subtitle: "Build and grow your wealth",
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
    borderColor: "border-blue-200 dark:border-blue-800",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-6 w-6" }),
    certificateTitle: "Smart Investing & Planning",
    modules: [
      {
        id: "i1",
        title: "Saving vs Investing",
        description: "When to save and when to invest — and why the difference matters.",
        duration: "15 min",
        topics: [
          "Emergency fund (3-6 months)",
          "FD, RD, PPF explained",
          "Mutual funds overview",
          "SIP: start with ₹500/month"
        ],
        videoUrl: "https://www.youtube.com/watch?v=rcA2PycBQr4"
      },
      {
        id: "i2",
        title: "Stock Market Basics",
        description: "Demystify the BSE, NSE, and how to start investing in stocks.",
        duration: "20 min",
        topics: [
          "BSE vs NSE",
          "How to open a demat account",
          "Sensex & Nifty explained",
          "Zerodha, Groww for beginners"
        ],
        videoUrl: "https://www.youtube.com/watch?v=p7HKvqRI_Bo"
      },
      {
        id: "i3",
        title: "Credit & Loans",
        description: "Understanding credit scores, EMIs, and how to borrow responsibly.",
        duration: "15 min",
        topics: [
          "What is CIBIL score?",
          "How EMI is calculated",
          "Home loan vs personal loan",
          "Avoiding debt traps"
        ],
        videoUrl: "https://www.youtube.com/watch?v=_DJ7lM4MSMk"
      },
      {
        id: "i4",
        title: "Insurance Essentials",
        description: "Health, life, and vehicle insurance — what you actually need.",
        duration: "15 min",
        topics: [
          "Term life insurance",
          "Health insurance (floater)",
          "Vehicle insurance (mandatory)",
          "IRDAI regulation"
        ],
        videoUrl: "https://www.youtube.com/watch?v=ozrWvF3lA7g"
      },
      {
        id: "i5",
        title: "Understanding Taxes",
        description: "Income tax slabs, deductions, and how to file your ITR online.",
        duration: "20 min",
        topics: [
          "Old vs new tax regime",
          "Section 80C deductions",
          "How to file ITR on incometax.gov.in",
          "PAN, Form 16, TDS"
        ],
        videoUrl: "https://www.youtube.com/watch?v=yt9OQrHjvRY"
      }
    ]
  },
  {
    id: "advanced",
    title: "Advanced",
    subtitle: "Master financial planning",
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
    borderColor: "border-purple-200 dark:border-purple-800",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-6 w-6" }),
    certificateTitle: "Advanced Financial Mastery",
    modules: [
      {
        id: "a1",
        title: "Retirement Planning",
        description: "Build a retirement corpus and plan for a secure future.",
        duration: "20 min",
        topics: [
          "NPS (National Pension System)",
          "EPF & PPF strategy",
          "Corpus calculator",
          "Retirement at 60 vs 55"
        ],
        videoUrl: "https://www.youtube.com/watch?v=SZ-nrjC3-xQ"
      },
      {
        id: "a2",
        title: "Real Estate & Gold",
        description: "Smart ways to invest in property and gold in India.",
        duration: "18 min",
        topics: [
          "REITs for small investors",
          "Sovereign Gold Bonds",
          "Property registration basics",
          "Gold ETF vs physical gold"
        ],
        videoUrl: "https://www.youtube.com/watch?v=JG2N2sdhSGQ"
      },
      {
        id: "a3",
        title: "Financial Fraud & Security",
        description: "Recognize and avoid the most common financial scams in India.",
        duration: "15 min",
        topics: [
          "OTP & phishing scams",
          "KYC fraud",
          "Reporting to cybercrime.gov.in",
          "RBI Ombudsman"
        ],
        videoUrl: "https://www.youtube.com/watch?v=h7ShT2-45hc"
      },
      {
        id: "a4",
        title: "Travel Finance",
        description: "Plan international travel on a budget with smart currency strategies.",
        duration: "15 min",
        topics: [
          "Forex cards vs cash",
          "ATM abroad tips",
          "International credit cards",
          "Budget travel planner"
        ],
        videoUrl: "https://www.youtube.com/watch?v=QQq2bXBosKc"
      },
      {
        id: "a5",
        title: "Building a Financial Plan",
        description: "Bring it all together — create your personal 5-year financial roadmap.",
        duration: "25 min",
        topics: [
          "Net worth calculation",
          "Goal-based investing",
          "Asset allocation by age",
          "Review & rebalance annually"
        ],
        videoUrl: "https://www.youtube.com/watch?v=wJl7KlESQ7M"
      }
    ]
  }
];
function getStatus(moduleId, levelId, progress, levels) {
  if (progress[moduleId]) return "completed";
  if (levelId === "beginner") return "available";
  const levelIndex = levels.findIndex((l) => l.id === levelId);
  if (levelIndex === 0) return "available";
  const prevLevel = levels[levelIndex - 1];
  const allPrevCompleted = prevLevel.modules.every((m) => progress[m.id]);
  return allPrevCompleted ? "available" : "locked";
}
function CertificateBadge({ level, show }) {
  if (!show) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `mt-4 rounded-xl border-2 ${level.borderColor} ${level.bgColor} p-4 flex items-center gap-4`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `rounded-full bg-white dark:bg-gray-900 p-3 shadow ${level.borderColor} border`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: `h-8 w-8 ${level.color}` })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: `h-4 w-4 ${level.color} fill-current` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-sm", children: "Certificate Earned!" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `font-semibold ${level.color}`, children: level.certificateTitle }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "cashindia.com — Developed by VCACS Students" })
        ] })
      ]
    }
  );
}
function PrintableCertificate({
  level,
  name,
  onNameChange
}) {
  const certRef = reactExports.useRef(null);
  const completionDate = (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  const handlePrint = () => {
    window.print();
  };
  reactExports.useEffect(() => {
    const styleId = `print-cert-style-${level.id}`;
    if (document.getElementById(styleId)) return;
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      @media print {
        body > * { display: none !important; }
        .printable-cert-${level.id} {
          display: block !important;
          position: fixed;
          inset: 0;
          width: 100vw;
          height: 100vh;
          z-index: 99999;
          background: #fff;
          padding: 40px;
          box-sizing: border-box;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      const el = document.getElementById(styleId);
      if (el) el.remove();
    };
  }, [level.id]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Label,
        {
          htmlFor: `cert-name-${level.id}`,
          className: "text-sm font-medium",
          children: "Enter your name for the certificate"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          id: `cert-name-${level.id}`,
          "data-ocid": "learning.input",
          value: name,
          onChange: (e) => onNameChange(e.target.value),
          placeholder: "Your full name",
          className: "max-w-xs"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref: certRef,
        className: `printable-cert-${level.id} border-4 border-double rounded-2xl p-8 bg-white dark:bg-gray-900 shadow-xl relative overflow-hidden`,
        style: { borderColor: "#1d4ed8" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3 w-8 h-8 border-l-4 border-t-4 border-yellow-400 rounded-tl-lg" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3 w-8 h-8 border-r-4 border-t-4 border-yellow-400 rounded-tr-lg" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-3 w-8 h-8 border-l-4 border-b-4 border-yellow-400 rounded-bl-lg" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 right-3 w-8 h-8 border-r-4 border-b-4 border-yellow-400 rounded-br-lg" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-2", children: "🏆" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold tracking-widest uppercase text-blue-700 dark:text-blue-400 mb-1", children: "Certificate of Completion" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-0.5 bg-yellow-400 mx-auto mb-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400 mb-2", children: "This certifies that" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-gray-800 dark:text-white mb-3 min-h-[2rem]", children: name || /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gray-400", children: "Your Name" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400 mb-1", children: "has successfully completed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: `text-xl font-bold mb-1 ${level.id === "beginner" ? "text-emerald-600" : level.id === "intermediate" ? "text-blue-600" : "text-purple-600"}`,
                children: level.certificateTitle
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 dark:text-gray-400 mb-4", children: [
              level.title,
              " Level — Financial Literacy Course"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-0.5 bg-yellow-400 mx-auto mb-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-end text-xs text-gray-400 dark:text-gray-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Date: ",
                completionDate
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-blue-700 dark:text-blue-400", children: "cashindia.com" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Developed by VCACS Students"
              ] })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        variant: "outline",
        size: "sm",
        onClick: handlePrint,
        className: "gap-2",
        "data-ocid": "learning.button",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "h-4 w-4" }),
          "🖨️ Print Certificate"
        ]
      }
    )
  ] });
}
function LearningPath() {
  const [progress, setProgress] = reactExports.useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });
  const [expanded, setExpanded] = reactExports.useState({
    beginner: true
  });
  const [expandedModules, setExpandedModules] = reactExports.useState({});
  const [certNames, setCertNames] = reactExports.useState({});
  reactExports.useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);
  function toggleModule(moduleId) {
    setProgress((prev) => ({ ...prev, [moduleId]: !prev[moduleId] }));
  }
  function toggleLevel(levelId) {
    setExpanded((prev) => ({ ...prev, [levelId]: !prev[levelId] }));
  }
  function toggleModuleExpand(moduleId) {
    setExpandedModules((prev) => ({ ...prev, [moduleId]: !prev[moduleId] }));
  }
  function resetProgress() {
    if (window.confirm("Reset all progress? This cannot be undone.")) {
      setProgress({});
    }
  }
  function setCertName(levelId, name) {
    setCertNames((prev) => ({ ...prev, [levelId]: name }));
  }
  const totalModules = LEVELS.reduce((sum, l) => sum + l.modules.length, 0);
  const completedModules = Object.values(progress).filter(Boolean).length;
  const overallProgress = Math.round(completedModules / totalModules * 100);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-br from-primary/90 to-primary py-12 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-4xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/20 rounded-full p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-10 w-10 text-white" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-4xl font-bold text-white mb-2", children: "Learning Path" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-lg mb-6", children: "Financial Literacy — Beginner to Advanced" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 rounded-2xl p-5 max-w-md mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/80 text-sm", children: "Overall Progress" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white font-bold", children: [
            completedModules,
            "/",
            totalModules,
            " modules"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: overallProgress, className: "h-3 bg-white/20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/70 text-xs mt-2", children: [
          overallProgress,
          "% complete"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-4xl px-4 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-8 border-2 border-primary/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-5 w-5 text-primary" }),
          "All Pages — Quick Links"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm", children: [
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "India Stats", href: "/india-stats" },
          { label: "Schemes", href: "/schemes" },
          { label: "Budget Planner", href: "/tools/budget" },
          { label: "Investment Calc", href: "/tools/investment" },
          { label: "Quiz", href: "/quiz" },
          { label: "Financial Tips", href: "/tips" },
          { label: "Travel Finance", href: "/travel" },
          { label: "Retirement", href: "/retirement" },
          { label: "Contact", href: "/contact" },
          { label: "Banking", href: "/banking" },
          { label: "Digital Payments", href: "/digital-payments" },
          { label: "Savings & Investing", href: "/savings-investing" },
          { label: "Credit & Loans", href: "/credit-loans" },
          { label: "Fraud & Security", href: "/fraud-security" },
          { label: "Taxes", href: "/taxes" },
          { label: "Dashboard", href: "/dashboard" },
          { label: "Site Map", href: "/sitemap" }
        ].map((link) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: link.href,
            className: "flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border hover:bg-primary/5 hover:border-primary/30 transition-colors text-foreground hover:text-primary font-medium",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" }),
              link.label
            ]
          },
          link.href
        )) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: LEVELS.map((level, levelIndex) => {
        const levelCompleted = level.modules.every((m) => progress[m.id]);
        const levelDone = level.modules.filter(
          (m) => progress[m.id]
        ).length;
        const levelPct = Math.round(
          levelDone / level.modules.length * 100
        );
        const isExpanded = expanded[level.id];
        const isLocked = levelIndex > 0 && !LEVELS[levelIndex - 1].modules.every((m) => progress[m.id]);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `rounded-2xl border-2 ${level.borderColor} overflow-hidden`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => !isLocked && toggleLevel(level.id),
                  className: `w-full flex items-center justify-between p-5 ${level.bgColor} transition-colors ${isLocked ? "opacity-60 cursor-not-allowed" : "hover:opacity-90 cursor-pointer"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: `rounded-xl bg-white dark:bg-gray-900 p-2.5 shadow-sm ${level.color}`,
                          children: isLocked ? /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-6 w-6" }) : level.icon
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-bold text-lg ${level.color}`, children: level.title }),
                          levelCompleted && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-green-500 text-white text-xs", children: "Completed" }),
                          isLocked && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: "Complete previous level to unlock" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: level.subtitle }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: levelPct, className: "h-1.5 w-24" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                            levelDone,
                            "/",
                            level.modules.length,
                            " done"
                          ] })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: level.color, children: isExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-5 w-5" }) })
                  ]
                }
              ),
              isExpanded && !isLocked && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-3", children: [
                level.modules.map((mod, modIndex) => {
                  const status = getStatus(
                    mod.id,
                    level.id,
                    progress,
                    LEVELS
                  );
                  const isModExpanded = expandedModules[mod.id];
                  const modLocked = status === "locked";
                  const modDone = status === "completed";
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: `rounded-xl border transition-all ${modDone ? "border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20" : modLocked ? "border-gray-200 dark:border-gray-700 opacity-50" : "border-border bg-card hover:border-primary/30"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-4", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => !modLocked && toggleModule(mod.id),
                              disabled: modLocked,
                              className: "flex-shrink-0 transition-transform hover:scale-110",
                              "aria-label": modDone ? "Mark incomplete" : "Mark complete",
                              children: modDone ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6 text-green-500" }) : modLocked ? /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-6 w-6 text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "h-6 w-6 text-muted-foreground hover:text-primary" })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-sm", children: [
                                modIndex + 1,
                                ". ",
                                mod.title
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: mod.duration }),
                              modDone && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-green-500 text-white text-xs", children: "Done" })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 line-clamp-1", children: mod.description })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => toggleModuleExpand(mod.id),
                              className: "flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors",
                              children: isModExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" })
                            }
                          )
                        ] }),
                        isModExpanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pb-4 border-t border-border/50 pt-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-3", children: mod.description }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: mod.topics.map((topic) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              className: "flex items-center gap-2 text-xs",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" }),
                                topic
                              ]
                            },
                            topic
                          )) }),
                          mod.videoUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "a",
                            {
                              href: mod.videoUrl,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "inline-flex mt-3",
                              "data-ocid": "learning.button",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                Button,
                                {
                                  variant: "outline",
                                  size: "sm",
                                  className: "gap-2 border-red-200 hover:border-red-400 hover:bg-red-50 dark:hover:bg-red-950/20",
                                  asChild: false,
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(Youtube, { className: "h-4 w-4 text-red-500" }),
                                    "Watch Video on YouTube"
                                  ]
                                }
                              )
                            }
                          ),
                          !modDone && !modLocked && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            Button,
                            {
                              size: "sm",
                              className: "mt-3 ml-2",
                              onClick: () => toggleModule(mod.id),
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 mr-1" }),
                                "Mark as Complete"
                              ]
                            }
                          )
                        ] })
                      ]
                    },
                    mod.id
                  );
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CertificateBadge, { level, show: levelCompleted }),
                levelCompleted && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  PrintableCertificate,
                  {
                    level,
                    name: certNames[level.id] ?? "",
                    onNameChange: (n) => setCertName(level.id, n)
                  }
                )
              ] })
            ]
          },
          level.id
        );
      }) }),
      completedModules === totalModules && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mt-8 border-2 border-yellow-400 bg-yellow-50 dark:bg-yellow-950/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-yellow-400/20 rounded-full p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-12 w-12 text-yellow-500" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-yellow-700 dark:text-yellow-400 mb-1", children: "Financial Literacy Master!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mb-2", children: [
          "You have completed all ",
          totalModules,
          " modules across all levels."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-yellow-700 dark:text-yellow-400", children: "cashindia.com — Developed by VCACS Students" })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outline",
          size: "sm",
          onClick: resetProgress,
          className: "text-muted-foreground",
          "data-ocid": "learning.button",
          children: "Reset All Progress"
        }
      ) })
    ] })
  ] });
}
export {
  LearningPath as default
};
