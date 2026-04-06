import { j as jsxRuntimeExports, T as TrendingUp, S as Shield } from "./index-C9PNr72X.js";
import { P as PageHeader } from "./PageHeader-ImEogFy7.js";
import { m as motion } from "./proxy-DvLVXVPz.js";
import { C as CircleCheck } from "./circle-check-CIkmXIzH.js";
import { T as Target } from "./target-CETZcQnl.js";
import { C as ChartColumn } from "./chart-column-cc5mKKcG.js";
import { F as FileText } from "./file-text-PfMsnnfg.js";
import { L as Landmark } from "./landmark-DlePohSA.js";
const COMPONENTS = [
  {
    icon: TrendingUp,
    title: "Budgeting",
    desc: "Creating a plan to track income and expenditures systematically to achieve financial goals.",
    color: "text-primary",
    bg: "bg-blue-100 dark:bg-blue-900/30"
  },
  {
    icon: Target,
    title: "Saving",
    desc: "Setting aside funds regularly to create an emergency corpus and work towards future goals.",
    color: "text-green-600",
    bg: "bg-green-100 dark:bg-green-900/30"
  },
  {
    icon: ChartColumn,
    title: "Investing",
    desc: "Growing your wealth through equity, mutual funds, fixed income, and alternative assets.",
    color: "text-purple-600",
    bg: "bg-purple-100 dark:bg-purple-900/30"
  },
  {
    icon: Shield,
    title: "Insurance",
    desc: "Protecting yourself and family against financial risks through life, health, and general insurance.",
    color: "text-orange-600",
    bg: "bg-orange-100 dark:bg-orange-900/30"
  },
  {
    icon: FileText,
    title: "Tax Planning",
    desc: "Legally minimizing tax liability through instruments like ELSS, PPF, NPS, and 80C deductions.",
    color: "text-red-600",
    bg: "bg-red-100 dark:bg-red-900/30"
  },
  {
    icon: Landmark,
    title: "Retirement",
    desc: "Planning long-term financial security through EPF, NPS, PPF, and other pension vehicles.",
    color: "text-cyan-600",
    bg: "bg-cyan-100 dark:bg-cyan-900/30"
  }
];
const IMPORTANCE = [
  "Helps individuals make informed financial decisions and avoid debt traps",
  "Enables effective use of government schemes designed for financial inclusion",
  "Builds confidence to invest, save, and plan for retirement proactively",
  "Protects against financial fraud, mis-selling, and predatory lending",
  "Promotes economic growth at the national level through better capital allocation",
  "Reduces financial stress and improves quality of life significantly"
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "About Financial Literacy",
        subtitle: "Understanding money management, investing, and the tools that shape financial well-being in India",
        badge: "Education"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "bg-card border border-border rounded-2xl p-8 shadow-card mb-12",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-4", children: "What is Financial Literacy?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-base mb-4", children: "Financial literacy is the ability to understand and effectively use various financial skills, including personal financial management, budgeting, and investing. It includes knowledge of financial concepts such as compound interest, credit management, debt, and financial planning." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground leading-relaxed text-base", children: [
              "In the Indian context, financial literacy encompasses awareness of banking services, insurance products, government schemes, tax obligations, and investment options. According to an S&P Global Financial Literacy Survey, only",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "27% of Indian adults" }),
              " ",
              "are financially literate, compared to a global average of 33%, highlighting an urgent need for education and awareness."
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-6", children: "Why Financial Literacy Matters" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-3", children: IMPORTANCE.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-start gap-3 bg-card border border-border rounded-xl p-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-green-500 mt-0.5 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: item })
                ]
              },
              item.slice(0, 30)
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-6", children: "Key Components of Financial Literacy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: COMPONENTS.map((comp, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.95 },
                whileInView: { opacity: 1, scale: 1 },
                transition: { duration: 0.3, delay: i * 0.05 },
                viewport: { once: true },
                className: "bg-card border border-border rounded-xl p-5 shadow-card hover:shadow-card-hover transition-all duration-200",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-flex rounded-xl p-3 mb-3 ${comp.bg}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(comp.icon, { className: `h-6 w-6 ${comp.color}` }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-2", children: comp.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: comp.desc })
                ]
              },
              comp.title
            )) })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 bg-slate-50 dark:bg-accent/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-8 text-center", children: "Financial Literacy Statistics in India" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: [
        {
          value: "27%",
          label: "Financial Literacy Rate",
          sub: "S&P Global Survey 2023"
        },
        {
          value: "190M+",
          label: "Unbanked Adults",
          sub: "World Bank Data"
        },
        { value: "50Cr+", label: "Jan Dhan Accounts", sub: "PMJDY 2024" },
        { value: "₹10L Cr", label: "Mutual Fund AUM", sub: "AMFI, 2024" }
      ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-xl p-5 text-center shadow-card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl font-bold text-primary mb-1", children: stat.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground mb-1", children: stat.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: stat.sub })
          ]
        },
        stat.label
      )) })
    ] }) })
  ] });
}
export {
  About as default
};
