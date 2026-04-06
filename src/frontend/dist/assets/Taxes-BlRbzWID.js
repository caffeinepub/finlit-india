import { j as jsxRuntimeExports, B as BookOpen } from "./index-C9PNr72X.js";
import { P as PageHeader } from "./PageHeader-ImEogFy7.js";
import { m as motion } from "./proxy-DvLVXVPz.js";
import { L as Landmark } from "./landmark-DlePohSA.js";
import { F as FileText } from "./file-text-PfMsnnfg.js";
import { B as BadgeCheck } from "./badge-check-CvweA3aM.js";
import { B as Building2 } from "./building-2-D-wcAtOJ.js";
import { G as Globe } from "./globe-BbfktzuQ.js";
import { C as Calculator } from "./calculator-BayT2oh9.js";
import { L as Lightbulb } from "./lightbulb-BfVg0lds.js";
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
                  "is a 10-character alphanumeric identifier (e.g., ABCDE1234F) issued by the Income Tax Department. The 5th character is always the first letter of your surname."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-2", children: [
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
                )) })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-5", children: "GST replaced over 17 indirect taxes in 2017 (VAT, Service Tax, Excise etc.) with a single unified tax system. It applies to most goods and services consumed in India." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: GST_SLABS.map((slab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "h-5 w-5 text-blue-600 shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-blue-800 dark:text-blue-200", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Documents you'll need:" }),
                " PAN card, Aadhaar, Form 16 (from employer), bank statements, investment proofs (80C), and your AIS/TIS available at incometax.gov.in. Filing online takes 15–30 minutes for most salaried individuals."
              ] })
            ] })
          ]
        }
      )
    ] }) })
  ] });
}
export {
  Taxes as default
};
