import { c as createLucideIcon, r as reactExports, m as useLocalStorage, j as jsxRuntimeExports, S as Shield, B as Button, T as TrendingUp } from "./index-oNUYi8h0.js";
import { B as Badge } from "./badge-DGnvFwe_.js";
import { I as Input } from "./input-BQRb9xeF.js";
import { L as Label } from "./label-By0s3q5s.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-UZ5dFIzU.js";
import { Q as QUIZ_QUESTIONS } from "./quizQuestions-SLnFDc_7.js";
import { m as motion } from "./proxy-BLGASNJJ.js";
import { M as Mail } from "./mail-CWmltKju.js";
import { B as BookOpen } from "./book-open-DdM0ZRzp.js";
import { C as ChartColumn } from "./chart-column-D1Z8fxo0.js";
import { U as Users } from "./users-Di8aSH5O.js";
import { C as CircleCheck } from "./circle-check-PeHOxxtk.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
];
const MessageSquare = createLucideIcon("message-square", __iconNode);
const ADMIN_PASSWORD = "admin123";
function AdminPanel() {
  const [pw, setPw] = reactExports.useState("");
  const [authenticated, setAuthenticated] = useLocalStorage(
    "finlit-admin-auth",
    false
  );
  const [pwError, setPwError] = reactExports.useState("");
  const [messages, setMessages] = useLocalStorage(
    "finlit-messages",
    []
  );
  const [quizHistory] = useLocalStorage("finlit-quiz-history", []);
  const handleLogin = (e) => {
    e.preventDefault();
    if (pw === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setPwError("");
    } else {
      setPwError("Incorrect password");
    }
  };
  const markRead = (id) => {
    setMessages(
      (prev) => prev.map((m) => m.id === id ? { ...m, read: true } : m)
    );
  };
  const avgScore = quizHistory.length > 0 ? Math.round(
    quizHistory.reduce((a, q) => a + q.pct, 0) / quizHistory.length
  ) : 0;
  const unread = messages.filter((m) => !m.read).length;
  if (!authenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[80vh] flex items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "w-full max-w-sm",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-7 w-7 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-foreground", children: "Admin Panel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1 text-sm", children: "Enter admin password to continue" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-2xl p-6 shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleLogin, className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm mb-1.5 block", children: "Admin Password" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  "data-ocid": "admin.password_input",
                  type: "password",
                  placeholder: "••••••••",
                  value: pw,
                  onChange: (e) => setPw(e.target.value)
                }
              ),
              pwError && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  "data-ocid": "admin.password_error",
                  className: "text-xs text-destructive mt-1",
                  children: pwError
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                "data-ocid": "admin.submit_button",
                type: "submit",
                className: "w-full",
                children: "Access Panel"
              }
            )
          ] }) })
        ]
      }
    ) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-navy-dark text-white py-10 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold", children: "Admin Panel" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-sm", children: "Manage your FinLit India platform" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          "data-ocid": "admin.logout_button",
          variant: "outline",
          size: "sm",
          onClick: () => setAuthenticated(false),
          className: "text-white border-white/20 hover:bg-white/10",
          children: "Logout"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8", children: [
        {
          icon: MessageSquare,
          label: "Total Messages",
          value: messages.length,
          color: "text-primary"
        },
        {
          icon: Mail,
          label: "Unread Messages",
          value: unread,
          color: "text-orange-500"
        },
        {
          icon: BookOpen,
          label: "Quiz Attempts",
          value: quizHistory.length,
          color: "text-purple-600"
        },
        {
          icon: TrendingUp,
          label: "Avg Quiz Score",
          value: `${avgScore}%`,
          color: "text-green-600"
        }
      ].map(({ icon: Icon, label, value, color }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-xl p-4 shadow-card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `h-5 w-5 ${color} mb-2` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-display text-2xl font-bold ${color}`, children: value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: label })
          ]
        },
        label
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "analytics", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { "data-ocid": "admin.analytics_tab", value: "analytics", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-4 w-4 mr-1.5" }),
            "Analytics"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { "data-ocid": "admin.questions_tab", value: "questions", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-4 w-4 mr-1.5" }),
            "Quiz Questions"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { "data-ocid": "admin.messages_tab", value: "messages", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-4 w-4 mr-1.5" }),
            "Messages",
            unread > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-1.5 text-xs h-5", children: unread })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "analytics", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5 shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-4", children: "Platform Overview" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 rounded-lg bg-muted", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-6 w-6 text-primary mx-auto mb-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-xl text-foreground", children: messages.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Contact Submissions" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 rounded-lg bg-muted", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-6 w-6 text-purple-600 mx-auto mb-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-xl text-foreground", children: quizHistory.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Quiz Attempts" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 rounded-lg bg-muted", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-6 w-6 text-green-600 mx-auto mb-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-xl text-foreground", children: [
                avgScore,
                "%"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Avg Quiz Score" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "questions", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl overflow-hidden shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-semibold text-foreground", children: [
            "Quiz Questions (",
            QUIZ_QUESTIONS.length,
            ")"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: QUIZ_QUESTIONS.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "data-ocid": `admin.questions.item.${i + 1}`,
              className: "p-4 hover:bg-muted/50 transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-primary bg-primary/10 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5", children: q.id }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground mb-1", children: q.question }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: q.category }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-green-600 flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3 w-3" }),
                      " ",
                      q.options[q.correctIndex]
                    ] })
                  ] })
                ] })
              ] })
            },
            q.id
          )) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "messages", children: messages.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": "admin.messages_empty_state",
            className: "text-center py-16",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-40" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No messages yet" })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: messages.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "data-ocid": `admin.messages.item.${i + 1}`,
            className: `bg-card border rounded-xl p-4 shadow-card ${m.read ? "border-border" : "border-primary/30 bg-primary/3"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground text-sm", children: m.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs", children: m.email }),
                  !m.read && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-xs", children: "New" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground mb-1", children: m.subject }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: m.message }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2", children: m.date })
              ] }),
              !m.read && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  "data-ocid": `admin.messages.read_button.${i + 1}`,
                  size: "sm",
                  variant: "outline",
                  onClick: () => markRead(m.id),
                  className: "shrink-0 text-xs",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5 mr-1" }),
                    "Mark Read"
                  ]
                }
              )
            ] })
          },
          m.id
        )) }) })
      ] })
    ] })
  ] });
}
export {
  AdminPanel as default
};
