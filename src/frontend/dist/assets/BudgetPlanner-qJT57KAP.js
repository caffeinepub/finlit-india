import { n as createLucideIcon, r as reactExports, o as useLocalStorage, j as jsxRuntimeExports, T as TrendingUp, l as Button, p as ue } from "./index-C2gTZAc5.js";
import { I as Input } from "./input-D-QuSoeY.js";
import { L as Label } from "./label-BZQkoq3e.js";
import { P as PageHeader } from "./PageHeader-CAZihj1C.js";
import { S as Save } from "./save-lhJqoTRz.js";
import { R as ResponsiveContainer, o as Cell, T as Tooltip, p as Legend, X as XAxis, Y as YAxis, B as Bar } from "./generateCategoricalChart-D4zM1Nt9.js";
import { P as PieChart, a as Pie } from "./PieChart-v2Bj2E1z.js";
import { B as BarChart } from "./BarChart-C3LXmvzR.js";
import { C as CartesianGrid } from "./CartesianGrid-Cli4A_Gi.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
const EXPENSE_COLORS = [
  "#2563EB",
  "#10B981",
  "#F59E0B",
  "#8B5CF6",
  "#EF4444",
  "#6B7280"
];
function BudgetPlanner() {
  const [income, setIncome] = reactExports.useState({
    salary: 5e4,
    freelance: 0,
    other: 0
  });
  const [expenses, setExpenses] = reactExports.useState({
    rent: 15e3,
    food: 8e3,
    transport: 3e3,
    utilities: 2e3,
    entertainment: 3e3,
    other: 2e3
  });
  const [history, setHistory] = useLocalStorage(
    "finlit-budget-history",
    []
  );
  const totalIncome = income.salary + income.freelance + income.other;
  const totalExpenses = Object.values(expenses).reduce((a, b) => a + b, 0);
  const savings = totalIncome - totalExpenses;
  const savingsRate = totalIncome > 0 ? Math.round(savings / totalIncome * 100) : 0;
  const expenseChartData = reactExports.useMemo(
    () => [
      { name: "Rent/EMI", value: expenses.rent },
      { name: "Food", value: expenses.food },
      { name: "Transport", value: expenses.transport },
      { name: "Utilities", value: expenses.utilities },
      { name: "Entertainment", value: expenses.entertainment },
      { name: "Other", value: expenses.other }
    ].filter((d) => d.value > 0),
    [expenses]
  );
  const summaryChartData = [
    { name: "Income", value: totalIncome, fill: "#10B981" },
    { name: "Expenses", value: totalExpenses, fill: "#EF4444" },
    { name: "Savings", value: Math.max(0, savings), fill: "#2563EB" }
  ];
  const rule502030 = [
    {
      name: "Needs (50%)",
      recommended: Math.round(totalIncome * 0.5),
      actual: expenses.rent + expenses.food + expenses.utilities + expenses.transport
    },
    {
      name: "Wants (30%)",
      recommended: Math.round(totalIncome * 0.3),
      actual: expenses.entertainment + expenses.other
    },
    {
      name: "Savings (20%)",
      recommended: Math.round(totalIncome * 0.2),
      actual: Math.max(0, savings)
    }
  ];
  const saveBudget = () => {
    const entry = {
      id: Date.now().toString(),
      date: (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN"),
      income: { ...income },
      expenses: { ...expenses },
      savings
    };
    setHistory((prev) => [entry, ...prev.slice(0, 9)]);
    ue.success("Budget saved successfully!");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Budget Planner",
        subtitle: "Track your income and expenses, visualize spending patterns, and achieve your savings goals",
        badge: "Tools"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-1 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5 shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-semibold text-foreground mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4 text-green-600" }),
            " Monthly Income (₹)"
          ] }),
          ["salary", "freelance", "other"].map((key) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: `income-${key}`,
                className: "text-xs capitalize mb-1.5 block",
                children: key
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: `income-${key}`,
                "data-ocid": `budget.${key}_input`,
                type: "number",
                min: 0,
                value: income[key],
                onChange: (e) => setIncome((prev) => ({
                  ...prev,
                  [key]: Number(e.target.value)
                }))
              }
            )
          ] }, key)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 pt-3 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Total Income:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-green-600 ml-2", children: [
              "₹",
              totalIncome.toLocaleString("en-IN")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5 shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-4", children: "Monthly Expenses (₹)" }),
          Object.keys(expenses).map(
            (key) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  htmlFor: `exp-${key}`,
                  className: "text-xs capitalize mb-1.5 block",
                  children: key
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: `exp-${key}`,
                  "data-ocid": `budget.${key}_input`,
                  type: "number",
                  min: 0,
                  value: expenses[key],
                  onChange: (e) => setExpenses((prev) => ({
                    ...prev,
                    [key]: Number(e.target.value)
                  }))
                }
              )
            ] }, key)
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 pt-3 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Total Expenses:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-red-500 ml-2", children: [
              "₹",
              totalExpenses.toLocaleString("en-IN")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            "data-ocid": "budget.save_button",
            onClick: saveBudget,
            className: "w-full",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-4 w-4 mr-2" }),
              " Save Budget"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 text-center shadow-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-xl font-bold text-green-600", children: [
              "₹",
              totalIncome.toLocaleString("en-IN")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Total Income" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 text-center shadow-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-xl font-bold text-red-500", children: [
              "₹",
              totalExpenses.toLocaleString("en-IN")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Total Expenses" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `bg-card border rounded-xl p-4 text-center shadow-card ${savings >= 0 ? "border-green-200 dark:border-green-900/30" : "border-red-200 dark:border-red-900/30"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `font-display text-xl font-bold ${savings >= 0 ? "text-primary" : "text-red-500"}`,
                    children: [
                      savings >= 0 ? "+" : "",
                      "₹",
                      savings.toLocaleString("en-IN")
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-1", children: [
                  "Savings (",
                  savingsRate,
                  "%)"
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5 shadow-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-sm text-foreground mb-4", children: "Expense Breakdown" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Pie,
                {
                  data: expenseChartData,
                  cx: "50%",
                  cy: "50%",
                  outerRadius: 80,
                  dataKey: "value",
                  children: expenseChartData.map((_item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Cell,
                    {
                      fill: EXPENSE_COLORS[i % EXPENSE_COLORS.length]
                    },
                    i
                  ))
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Tooltip,
                {
                  formatter: (v) => [
                    `₹${Number(v).toLocaleString("en-IN")}`,
                    ""
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, {})
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5 shadow-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-sm text-foreground mb-4", children: "Income vs Expenses vs Savings" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              BarChart,
              {
                data: summaryChartData,
                margin: { top: 5, right: 5, left: -10, bottom: 5 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CartesianGrid,
                    {
                      strokeDasharray: "3 3",
                      stroke: "rgba(0,0,0,0.06)"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "name", tick: { fontSize: 11 } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { tick: { fontSize: 10 } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Tooltip,
                    {
                      formatter: (v) => [
                        `₹${Number(v).toLocaleString("en-IN")}`,
                        ""
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "value", radius: [4, 4, 0, 0], children: summaryChartData.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: entry.fill }, entry.name)) })
                ]
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5 shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-4", children: "50/30/20 Rule Comparison" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            BarChart,
            {
              data: rule502030,
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
                /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { tick: { fontSize: 10 } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Tooltip,
                  {
                    formatter: (v) => [
                      `₹${Number(v).toLocaleString("en-IN")}`,
                      ""
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Bar,
                  {
                    dataKey: "recommended",
                    fill: "#10B981",
                    name: "Recommended",
                    radius: [3, 3, 0, 0]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Bar,
                  {
                    dataKey: "actual",
                    fill: "#2563EB",
                    name: "Actual",
                    radius: [3, 3, 0, 0]
                  }
                )
              ]
            }
          ) })
        ] }),
        history.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5 shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-4", children: "Budget History" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: history.slice(0, 5).map((entry, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": `budget.item.${i + 1}`,
              className: "flex items-center justify-between p-3 rounded-lg bg-muted text-sm",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: entry.date }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-green-600 font-medium", children: [
                  "₹",
                  (entry.income.salary + entry.income.freelance + entry.income.other).toLocaleString("en-IN"),
                  " ",
                  "income"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: `font-semibold ${entry.savings >= 0 ? "text-primary" : "text-red-500"}`,
                    children: [
                      entry.savings >= 0 ? "+" : "",
                      "₹",
                      entry.savings.toLocaleString("en-IN")
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": `budget.delete_button.${i + 1}`,
                    onClick: () => setHistory(
                      (prev) => prev.filter((h) => h.id !== entry.id)
                    ),
                    className: "text-muted-foreground hover:text-destructive transition-colors",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" })
                  }
                )
              ]
            },
            entry.id
          )) })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  BudgetPlanner as default
};
