import { j as jsxRuntimeExports } from "./index-oNUYi8h0.js";
import { P as PageHeader } from "./PageHeader-D2l6UeRT.js";
import { m as motion } from "./proxy-BLGASNJJ.js";
import { R as ResponsiveContainer, X as XAxis, Y as YAxis, T as Tooltip, B as Bar, o as Cell, p as Legend } from "./generateCategoricalChart-CU8yhsos.js";
import { B as BarChart } from "./BarChart-CsjMJIar.js";
import { C as CartesianGrid } from "./CartesianGrid-qyj98Up0.js";
import { L as LineChart, a as Line } from "./LineChart-BcaPu4Qf.js";
import { P as PieChart, a as Pie } from "./PieChart-C7xap9qr.js";
const statewiseLiteracy = [
  { state: "Kerala", rate: 94 },
  { state: "Delhi", rate: 86 },
  { state: "Goa", rate: 82 },
  { state: "HP", rate: 78 },
  { state: "Punjab", rate: 75 },
  { state: "Maharashtra", rate: 73 },
  { state: "Tamil Nadu", rate: 71 },
  { state: "Karnataka", rate: 68 },
  { state: "Gujarat", rate: 65 },
  { state: "West Bengal", rate: 62 },
  { state: "UP", rate: 55 },
  { state: "Bihar", rate: 48 }
];
const financialInclusionGrowth = [
  { year: "2016", inclusion: 53 },
  { year: "2017", inclusion: 57 },
  { year: "2018", inclusion: 63 },
  { year: "2019", inclusion: 67 },
  { year: "2020", inclusion: 72 },
  { year: "2021", inclusion: 74 },
  { year: "2022", inclusion: 77 },
  { year: "2023", inclusion: 80 },
  { year: "2024", inclusion: 84 }
];
const savingsDistribution = [
  { name: "Fixed Deposits", value: 32, color: "#2563EB" },
  { name: "Savings Accounts", value: 28, color: "#10B981" },
  { name: "Mutual Funds", value: 15, color: "#F59E0B" },
  { name: "PPF/EPF", value: 12, color: "#8B5CF6" },
  { name: "Insurance", value: 8, color: "#EF4444" },
  { name: "Real Estate", value: 5, color: "#6B7280" }
];
const ruralUrbanAwareness = [
  { category: "Basic Banking", rural: 68, urban: 92 },
  { category: "Insurance", rural: 32, urban: 72 },
  { category: "Investments", rural: 18, urban: 65 },
  { category: "Tax Planning", rural: 12, urban: 58 },
  { category: "Retirement", rural: 22, urban: 55 },
  { category: "Digital Pay", rural: 55, urban: 88 }
];
function IndiaStats() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Financial Literacy in India",
        subtitle: "Data-driven insights into India's financial awareness, inclusion, and economic growth",
        badge: "Statistics"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-12 space-y-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          viewport: { once: true },
          className: "bg-card border border-border rounded-xl p-6 shadow-card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-foreground mb-1", children: "State-wise Financial Literacy Rate (%)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6", children: "Approximate financial literacy rates across major Indian states" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 320, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              BarChart,
              {
                data: statewiseLiteracy,
                margin: { top: 5, right: 10, left: -10, bottom: 5 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "rgba(0,0,0,0.06)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "state", tick: { fontSize: 11 } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { domain: [0, 100], tick: { fontSize: 11 }, unit: "%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (v) => [`${v}%`, "Literacy Rate"] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "rate", fill: "#2563EB", radius: [4, 4, 0, 0] })
                ]
              }
            ) })
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
          className: "bg-card border border-border rounded-xl p-6 shadow-card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-foreground mb-1", children: "Growth of Financial Inclusion (2016\\u20132024)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6", children: "Percentage of Indian adults with access to financial services" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 280, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              LineChart,
              {
                data: financialInclusionGrowth,
                margin: { top: 5, right: 10, left: -10, bottom: 5 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "rgba(0,0,0,0.06)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "year", tick: { fontSize: 11 } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { domain: [40, 90], tick: { fontSize: 11 }, unit: "%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (v) => [`${v}%`, "Inclusion Rate"] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Line,
                    {
                      type: "monotone",
                      dataKey: "inclusion",
                      stroke: "#10B981",
                      strokeWidth: 3,
                      dot: { fill: "#10B981", r: 5 }
                    }
                  )
                ]
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            viewport: { once: true },
            className: "bg-card border border-border rounded-xl p-6 shadow-card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-foreground mb-1", children: "Savings Instrument Distribution" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6", children: "How Indians distribute their savings across instruments" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 260, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Pie,
                  {
                    data: savingsDistribution,
                    cx: "50%",
                    cy: "50%",
                    outerRadius: 90,
                    dataKey: "value",
                    label: ({ name, value }) => `${name}: ${value}%`,
                    labelLine: false,
                    children: savingsDistribution.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: entry.color }, entry.name))
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (v) => [`${v}%`, "Share"] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, {})
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
            className: "bg-card border border-border rounded-xl p-6 shadow-card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-foreground mb-1", children: "Rural vs Urban Financial Awareness" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6", children: "Comparison of financial awareness levels across categories" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 260, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                BarChart,
                {
                  data: ruralUrbanAwareness,
                  margin: { top: 5, right: 10, left: -10, bottom: 5 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CartesianGrid,
                      {
                        strokeDasharray: "3 3",
                        stroke: "rgba(0,0,0,0.06)"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "category", tick: { fontSize: 10 } }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { domain: [0, 100], tick: { fontSize: 10 }, unit: "%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (v) => [`${v}%`, ""] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Bar,
                      {
                        dataKey: "rural",
                        fill: "#F59E0B",
                        radius: [3, 3, 0, 0],
                        name: "Rural"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Bar,
                      {
                        dataKey: "urban",
                        fill: "#2563EB",
                        radius: [3, 3, 0, 0],
                        name: "Urban"
                      }
                    )
                  ]
                }
              ) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          viewport: { once: true },
          className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5",
          children: [
            { label: "RBI Repo Rate", value: "6.5%", color: "text-primary" },
            {
              label: "NSE Nifty 50",
              value: "~22,000",
              color: "text-green-600"
            },
            {
              label: "UPI Transactions (2024)",
              value: "100Bn+",
              color: "text-purple-600"
            },
            {
              label: "Mobile Banking Users",
              value: "350M+",
              color: "text-orange-600"
            }
          ].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-xl p-5 text-center shadow-card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-display text-2xl font-bold ${m.color}`, children: m.value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-1", children: m.label })
              ]
            },
            m.label
          ))
        }
      )
    ] })
  ] });
}
export {
  IndiaStats as default
};
