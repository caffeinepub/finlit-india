import { c as createLucideIcon, q as useAuth, s as useNavigate, m as useLocalStorage, r as reactExports, j as jsxRuntimeExports, T as TrendingUp, t as LayoutDashboard, B as Button } from "./index-oNUYi8h0.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-UZ5dFIzU.js";
import { P as PageHeader } from "./PageHeader-D2l6UeRT.js";
import { G as GOVERNMENT_SCHEMES, B as BookmarkCheck } from "./schemes-DbF-pFd9.js";
import { C as Calculator } from "./calculator-C0OArtMP.js";
import { R as ResponsiveContainer, X as XAxis, Y as YAxis, T as Tooltip, B as Bar } from "./generateCategoricalChart-CU8yhsos.js";
import { B as BarChart } from "./BarChart-CsjMJIar.js";
import { C as CartesianGrid } from "./CartesianGrid-qyj98Up0.js";
import { m as motion } from "./proxy-BLGASNJJ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "M12 11h4", key: "1jrz19" }],
  ["path", { d: "M12 16h4", key: "n85exb" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
];
const ClipboardList = createLucideIcon("clipboard-list", __iconNode);
function Dashboard() {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [bookmarks] = useLocalStorage("finlit-bookmarks", []);
  const [quizHistory] = useLocalStorage("finlit-quiz-history", []);
  const [budgetHistory] = useLocalStorage("finlit-budget-history", []);
  const [activeTab, setActiveTab] = reactExports.useState("overview");
  if (!isAuthenticated) {
    navigate({ to: "/login" });
    return null;
  }
  const savedSchemes = GOVERNMENT_SCHEMES.filter(
    (s) => bookmarks.includes(s.id)
  );
  const avgScore = quizHistory.length > 0 ? Math.round(
    quizHistory.reduce((a, q) => a + q.pct, 0) / quizHistory.length
  ) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: `Welcome, ${user == null ? void 0 : user.name.split(" ")[0]}!`,
        subtitle: "Track your financial literacy progress, saved schemes, and quiz performance",
        badge: "Dashboard"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8", children: [
        {
          icon: ClipboardList,
          label: "Quizzes Taken",
          value: quizHistory.length,
          color: "text-primary"
        },
        {
          icon: BookmarkCheck,
          label: "Schemes Saved",
          value: savedSchemes.length,
          color: "text-green-600"
        },
        {
          icon: Calculator,
          label: "Budget Entries",
          value: budgetHistory.length,
          color: "text-purple-600"
        },
        {
          icon: TrendingUp,
          label: "Avg Quiz Score",
          value: `${avgScore}%`,
          color: "text-orange-600"
        }
      ].map(({ icon: Icon, label, value, color }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-xl p-4 shadow-card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `h-5 w-5 ${color} mb-2` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-display text-2xl font-bold ${color}`, children: value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: label })
          ]
        },
        label
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { "data-ocid": "dashboard.overview_tab", value: "overview", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutDashboard, { className: "h-4 w-4 mr-1.5" }),
            "Overview"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { "data-ocid": "dashboard.schemes_tab", value: "schemes", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BookmarkCheck, { className: "h-4 w-4 mr-1.5" }),
            "Saved Schemes"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { "data-ocid": "dashboard.quiz_tab", value: "quiz", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "h-4 w-4 mr-1.5" }),
            "Quiz History"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { "data-ocid": "dashboard.budget_tab", value: "budget", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "h-4 w-4 mr-1.5" }),
            "Budget History"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "overview", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5 shadow-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-4", children: "Quiz Performance" }),
            quizHistory.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": "dashboard.quiz_empty_state",
                className: "text-center py-8 text-muted-foreground text-sm",
                children: [
                  "No quiz attempts yet.",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/quiz", className: "text-primary", children: "Take a quiz!" })
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              BarChart,
              {
                data: quizHistory.slice(0, 5).reverse(),
                margin: { top: 5, right: 5, left: -20, bottom: 5 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CartesianGrid,
                    {
                      strokeDasharray: "3 3",
                      stroke: "rgba(0,0,0,0.06)"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "date", tick: { fontSize: 9 } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    YAxis,
                    {
                      domain: [0, 100],
                      tick: { fontSize: 10 },
                      unit: "%"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (v) => [`${v}%`, "Score"] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Bar,
                    {
                      dataKey: "pct",
                      fill: "#2563EB",
                      radius: [4, 4, 0, 0],
                      name: "Score"
                    }
                  )
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5 shadow-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-4", children: "Saved Schemes Preview" }),
            savedSchemes.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": "dashboard.schemes_empty_state",
                className: "text-center py-8 text-muted-foreground text-sm",
                children: [
                  "No schemes saved.",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/schemes", className: "text-primary", children: "Explore schemes!" })
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: savedSchemes.slice(0, 4).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-3 bg-muted rounded-lg px-3 py-2.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BookmarkCheck, { className: "h-4 w-4 text-primary shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: s.shortName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground ml-auto", children: s.category })
                ]
              },
              s.id
            )) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "schemes", children: savedSchemes.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": "dashboard.schemes_empty_state",
            className: "text-center py-16",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookmarkCheck, { className: "h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-40" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "No schemes bookmarked yet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/schemes", children: "Browse Schemes" }) })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: savedSchemes.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: i * 0.05 },
            "data-ocid": `dashboard.schemes.item.${i + 1}`,
            className: "bg-card border border-border rounded-xl p-4 shadow-card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground mb-1", children: s.shortName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mb-3 line-clamp-2", children: s.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: s.officialLink,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-xs text-primary hover:underline",
                  children: "Visit Official Site \\u2192"
                }
              )
            ]
          },
          s.id
        )) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "quiz", children: quizHistory.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": "dashboard.quiz_empty_state",
            className: "text-center py-16",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-40" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "No quiz history yet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/quiz", children: "Take Quiz" }) })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: quizHistory.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": `dashboard.quiz.item.${i + 1}`,
            className: "bg-card border border-border rounded-xl p-4 flex items-center justify-between shadow-card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: h.date }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
                h.score,
                "/",
                h.total
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: `font-bold text-lg ${h.pct >= 70 ? "text-green-600" : "text-orange-500"}`,
                  children: [
                    h.pct,
                    "%"
                  ]
                }
              )
            ]
          },
          i
        )) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "budget", children: budgetHistory.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": "dashboard.budget_empty_state",
            className: "text-center py-16",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-40" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "No budget entries saved yet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/tools/budget", children: "Plan Budget" }) })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: budgetHistory.map((b, i) => {
          const totalInc = b.income.salary + b.income.freelance + b.income.other;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": `dashboard.budget.item.${i + 1}`,
              className: "bg-card border border-border rounded-xl p-4 flex items-center justify-between shadow-card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: b.date }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium text-foreground", children: [
                  "Income: \\u20B9",
                  totalInc.toLocaleString("en-IN")
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: `font-bold ${b.savings >= 0 ? "text-primary" : "text-red-500"}`,
                    children: [
                      "Savings: \\u20B9",
                      b.savings.toLocaleString("en-IN")
                    ]
                  }
                )
              ]
            },
            b.id
          );
        }) }) })
      ] })
    ] })
  ] });
}
export {
  Dashboard as default
};
