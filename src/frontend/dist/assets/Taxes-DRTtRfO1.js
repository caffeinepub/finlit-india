import { j as jsxRuntimeExports, B as BookOpen } from "./index-C2gTZAc5.js";
import { P as PageHeader } from "./PageHeader-CAZihj1C.js";
import { m as motion } from "./proxy-B5X-98y1.js";
import { L as Landmark } from "./landmark-BCNhYurw.js";
import { F as FileText } from "./file-text-pn4BpxF1.js";
import { B as BadgeCheck } from "./badge-check-C_M8ntae.js";
import { E as ExternalLink } from "./external-link-DBZ_NhGs.js";
import { B as Building2 } from "./building-2-CcxQugsN.js";
import { G as Globe } from "./globe-CswWswR7.js";
import { C as Calculator } from "./calculator-PAzjxQlZ.js";
import { L as Lightbulb } from "./lightbulb-XiKTjFs2.js";
const NEW_REGIME_SLABS = [
  { range: "Up to ₹3,00,000", rate: "0%", color: "bg-green-500", width: "15%" },
  { range: "₹3L – ₹7L", rate: "5%", color: "bg-lime-500", width: "30%" },
  { range: "₹7L – ₹10L", rate: "10%", color: "bg-yellow-400", width: "45%" },
  { range: "₹10L – ₹12L", rate: "15%", color: "bg-orange-400", width: "60%" },
  { range: "₹12L – ₹15L", rate: "20%", color: "bg-orange-500", width: "75%" },
  { range: "Above ₹15L", rate: "30%", color: "bg-red-500", width: "90%" }
];
const GST_SLABS = [
  {
    rate: "0%",
    items: "Essential items: Rice, wheat, vegetables, books, newspapers, milk",
    color: "bg-green-100 dark:bg-green-900/30",
    textColor: "text-green-700 dark:text-green-300"
  },
  {
    rate: "5%",
    items: "Household goods: Edible oils, sugar, spices, tea, coffee, coal",
    color: "bg-yellow-100 dark:bg-yellow-900/30",
    textColor: "text-yellow-700 dark:text-yellow-300"
  },
  {
    rate: "12%",
    items: "Processed foods: Frozen meat, butter, cheese, fruit juices, medicines",
    color: "bg-orange-100 dark:bg-orange-900/30",
    textColor: "text-orange-700 dark:text-orange-300"
  },
  {
    rate: "18%",
    items: "Most goods & services: Electronics, restaurants, financial services",
    color: "bg-red-100 dark:bg-red-900/30",
    textColor: "text-red-700 dark:text-red-300"
  },
  {
    rate: "28%",
    items: "Luxury items: Cars, tobacco, aerated drinks, high-end electronics",
    color: "bg-red-200 dark:bg-red-800/40",
    textColor: "text-red-800 dark:text-red-200"
  }
];
const ITR_FORMS = [
  {
    form: "ITR-1 (Sahaj)",
    for: "Salaried individuals with income up to ₹50L",
    icon: FileText
  },
  {
    form: "ITR-2",
    for: "Individuals with capital gains, foreign income, or multiple properties",
    icon: BookOpen
  },
  {
    form: "ITR-3",
    for: "Individuals/HUFs with business or professional income",
    icon: Building2
  },
  {
    form: "ITR-4 (Sugam)",
    for: "Presumptive income scheme for small businesses/professionals",
    icon: Calculator
  }
];
const TAX_PORTALS = [
  {
    name: "Income Tax e-Filing",
    desc: "File your ITR, check refund status, Form 26AS & AIS, and link Aadhaar-PAN",
    url: "https://www.incometax.gov.in",
    badge: "ITR Filing",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    highlight: true
  },
  {
    name: "GST Portal",
    desc: "GST registration, return filing, tax payment, and refund claims",
    url: "https://www.gst.gov.in",
    badge: "GST",
    badgeColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
    highlight: false
  },
  {
    name: "PAN Application — NSDL",
    desc: "Apply for new PAN card or update existing PAN details online",
    url: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html",
    badge: "PAN Card",
    badgeColor: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    highlight: false
  },
  {
    name: "PAN Application — UTIITSL",
    desc: "Alternative portal for PAN card application and corrections",
    url: "https://www.utiitsl.com/UTIITSL_SITE/pan",
    badge: "PAN Card",
    badgeColor: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    highlight: false
  },
  {
    name: "TDS — TRACES Portal",
    desc: "View Form 16, Form 26AS, TDS certificates and deductor information",
    url: "https://www.tdscpc.gov.in",
    badge: "TDS",
    badgeColor: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    highlight: false
  },
  {
    name: "Aadhaar — UIDAI",
    desc: "Link Aadhaar with PAN, update Aadhaar details, and download e-Aadhaar",
    url: "https://uidai.gov.in",
    badge: "Aadhaar",
    badgeColor: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
    highlight: false
  },
  {
    name: "Tax Saving — ELSS Funds",
    desc: "Find SEBI-registered ELSS mutual funds for Section 80C tax deductions",
    url: "https://www.amfiindia.com/investor-corner/knowledge-center/elss.html",
    badge: "Tax Saving",
    badgeColor: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
    highlight: false
  },
  {
    name: "EPF — EPFO Member Portal",
    desc: "Check PF balance, download passbook, and track EPF claims online",
    url: "https://unifiedportal-mem.epfindia.gov.in",
    badge: "EPF / PF",
    badgeColor: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
    highlight: false
  }
];
function Taxes() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Taxes — A Beginner's Guide",
        subtitle: "Income tax, PAN card, GST, and filing basics explained in simple language for every Indian citizen",
        badge: "Taxation"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "mb-12",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary/10 rounded-xl p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Landmark, { className: "h-6 w-6 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-foreground", children: "What is Income Tax?" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground leading-relaxed mb-4", children: [
              "Income tax is a direct tax levied by the Government of India on income earned by individuals, HUFs, companies, and other entities during a",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Financial Year (FY)" }),
              " ",
              "— April 1 to March 31. You file your return in the",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Assessment Year (AY)" }),
              " ",
              "— the year immediately following the FY."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-3", children: [
              {
                label: "Tax Filing Deadline",
                value: "July 31",
                sub: "For salaried individuals"
              },
              {
                label: "Rebate u/s 87A",
                value: "₹7L effective",
                sub: "Zero tax under new regime"
              },
              {
                label: "Filing Portal",
                value: "incometax.gov.in",
                sub: "Official government portal"
              }
            ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "bg-primary/5 rounded-xl p-3 text-center",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg font-bold text-primary", children: s.value }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium text-foreground mt-1", children: s.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: s.sub })
                ]
              },
              s.label
            )) })
          ] })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-2", children: "Income Tax Slabs (New Regime, FY 2024-25)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-5", children: "Under Section 87A, if your total taxable income is up to ₹7 lakh, you get a full tax rebate — effectively paying ₹0 tax." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: NEW_REGIME_SLABS.map((slab) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-36 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: slab.range }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `${slab.color} rounded-lg h-8 flex items-center px-3`,
                    style: { width: slab.width },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-sm font-bold", children: slab.rate })
                  }
                )
              ] }, slab.range)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-green-800 dark:text-green-200", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Section 87A Rebate:" }),
                " If your gross total income doesn't exceed ₹7 lakh, you're entitled to a tax rebate of up to ₹25,000 — making your effective tax liability zero."
              ] }) })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-4", children: "PAN Card — What It Is & Why You Need It" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-orange-100 dark:bg-orange-900/30 rounded-xl p-3 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-6 w-6 text-orange-600" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm leading-relaxed mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "PAN (Permanent Account Number)" }),
                  " ",
                  "is a 10-character alphanumeric identifier (e.g., ABCDE1234F) issued by the Income Tax Department."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-2 mb-4", children: [
                  "Mandatory for income tax filing",
                  "Required for bank accounts and investments",
                  "Needed for transactions above ₹50,000",
                  "Apply online at NSDL or UTIITSL portal",
                  "Link with Aadhaar (mandatory)",
                  "Cost: ₹107 (Indian address), ₹1,017 (foreign)"
                ].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-start gap-2 text-sm text-muted-foreground",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "h-4 w-4 text-primary mt-0.5 shrink-0" }),
                      p
                    ]
                  },
                  p
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "inline-flex items-center gap-1.5 text-xs font-semibold bg-primary text-white px-3 py-1.5 rounded-lg hover:bg-primary/90 transition-colors",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" }),
                        " Apply via NSDL"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: "https://www.utiitsl.com/UTIITSL_SITE/pan",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "inline-flex items-center gap-1.5 text-xs font-semibold bg-muted text-foreground px-3 py-1.5 rounded-lg hover:bg-muted/70 transition-colors",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" }),
                        " Apply via UTIITSL"
                      ]
                    }
                  )
                ] })
              ] })
            ] }) })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-2", children: "GST — Goods & Services Tax" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-5", children: "GST replaced over 17 indirect taxes in 2017 with a single unified tax system." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 mb-4", children: GST_SLABS.map((slab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `${slab.color} rounded-xl p-4 flex items-center gap-4`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `font-display text-2xl font-bold w-16 shrink-0 ${slab.textColor}`,
                      children: slab.rate
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: slab.items })
                ]
              },
              slab.rate
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://www.gst.gov.in",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-4 w-4" }),
                  " GST Official Portal — gst.gov.in"
                ]
              }
            )
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-4", children: "Why Paying Tax Matters" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4", children: [
              {
                title: "Public Infrastructure",
                desc: "Roads, railways, bridges, and airports are built from tax revenue.",
                icon: Building2
              },
              {
                title: "Healthcare & Education",
                desc: "Government hospitals, schools, and universities are funded by taxes.",
                icon: BookOpen
              },
              {
                title: "Defense & Security",
                desc: "Armed forces, border protection, and law enforcement rely on tax money.",
                icon: Landmark
              },
              {
                title: "Social Welfare",
                desc: "Subsidies, pensions (APY), Jan Dhan Yojana, and food security programs.",
                icon: BadgeCheck
              },
              {
                title: "Economic Development",
                desc: "Infrastructure investments generate employment and drive GDP growth.",
                icon: Globe
              },
              {
                title: "Your Credit History",
                desc: "Regular ITR filing improves loan eligibility and visa applications.",
                icon: FileText
              }
            ].map(({ title, desc, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "bg-card border border-border rounded-xl p-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary mb-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground text-sm mb-1", children: title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: desc })
                ]
              },
              title
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-4", children: "Filing Your ITR — The Basics" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-5 mb-6", children: ITR_FORMS.map((form) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "bg-card border border-border rounded-xl p-4 flex gap-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary/10 rounded-xl p-2.5 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(form.icon, { className: "h-5 w-5 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground text-sm", children: form.form }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: form.for })
                  ] })
                ]
              },
              form.form
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 flex gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "h-5 w-5 text-blue-600 shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-blue-800 dark:text-blue-200", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Documents you'll need:" }),
                " PAN card, Aadhaar, Form 16 (from employer), bank statements, investment proofs (80C), and your AIS/TIS available at incometax.gov.in. Filing online takes 15–30 minutes for most salaried individuals."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://www.incometax.gov.in",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center gap-1.5 text-sm font-semibold bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-4 w-4" }),
                  " File ITR Now — incometax.gov.in"
                ]
              }
            )
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-2", children: "Official Tax & Finance Portals" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-5", children: "All government-verified links for tax filing, PAN, GST, TDS, and more." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: TAX_PORTALS.map((portal) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: portal.url,
                target: "_blank",
                rel: "noopener noreferrer",
                className: `group border rounded-xl p-4 flex items-start gap-3 transition-all hover:shadow-md ${portal.highlight ? "bg-primary/5 border-primary/30 hover:border-primary" : "bg-card border-border hover:border-primary/40"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `rounded-lg p-2 shrink-0 transition-colors ${portal.highlight ? "bg-primary/20 group-hover:bg-primary/30" : "bg-primary/10 group-hover:bg-primary/20"}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-4 w-4 text-primary" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap mb-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground text-sm group-hover:text-primary transition-colors", children: portal.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `text-xs px-1.5 py-0.5 rounded font-medium shrink-0 ${portal.badgeColor}`,
                          children: portal.badge
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: portal.desc }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary mt-1.5 font-medium", children: portal.url.replace("https://", "") })
                  ] })
                ]
              },
              portal.name
            )) })
          ]
        }
      )
    ] }) })
  ] });
}
export {
  Taxes as default
};
