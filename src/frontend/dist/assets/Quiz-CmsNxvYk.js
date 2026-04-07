import { n as createLucideIcon, j as jsxRuntimeExports, l as Button, r as reactExports, o as useLocalStorage } from "./index-C2gTZAc5.js";
import { T as Trophy, P as Progress } from "./progress-DJopMnZL.js";
import { P as PageHeader } from "./PageHeader-CAZihj1C.js";
import { C as CircleCheck } from "./circle-check-BcSd0NIs.js";
import { T as Target } from "./target-CYjOEH42.js";
import { R as ResponsiveContainer, X as XAxis, Y as YAxis, T as Tooltip, B as Bar, o as Cell } from "./generateCategoricalChart-D4zM1Nt9.js";
import { B as BarChart } from "./BarChart-C3LXmvzR.js";
import { C as CartesianGrid } from "./CartesianGrid-Cli4A_Gi.js";
import { Q as QUIZ_QUESTIONS } from "./quizQuestions-SLnFDc_7.js";
import { m as motion } from "./proxy-B5X-98y1.js";
import { A as AnimatePresence } from "./index-CTLgEGOJ.js";
import { C as ChevronRight } from "./chevron-right-DJKV9pHD.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
];
const CircleX = createLucideIcon("circle-x", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
];
const Clock = createLucideIcon("clock", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = createLucideIcon("rotate-ccw", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
];
const Share2 = createLucideIcon("share-2", __iconNode);
function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  showResult
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: question.category }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
        questionNumber,
        " / ",
        totalQuestions
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground leading-snug", children: question.question }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3", children: question.options.map((option, i) => {
      let variant = "outline";
      let extraClass = "justify-start text-left h-auto py-3 px-4 font-normal text-sm";
      if (showResult && selectedAnswer !== null) {
        if (i === question.correctIndex) {
          extraClass += " border-green-500 bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-300";
        } else if (i === selectedAnswer && i !== question.correctIndex) {
          extraClass += " border-red-400 bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-300";
        }
      } else if (selectedAnswer === i) {
        extraClass += " border-primary bg-primary/5 dark:bg-primary/10";
        variant = "default";
        extraClass = "justify-start text-left h-auto py-3 px-4 font-normal text-sm bg-primary text-primary-foreground";
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          "data-ocid": `quiz.radio.${i + 1}`,
          variant,
          className: extraClass,
          onClick: () => !showResult && onSelectAnswer(i),
          disabled: showResult,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 w-full", children: [
            showResult && selectedAnswer !== null ? i === question.correctIndex ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 shrink-0 text-green-600" }) : i === selectedAnswer ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-4 w-4 shrink-0 text-red-500" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-4 w-4 shrink-0 rounded-full border-2 border-current opacity-30" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `h-5 w-5 shrink-0 rounded-full border-2 flex items-center justify-center text-xs font-bold ${selectedAnswer === i ? "border-primary-foreground bg-primary-foreground/20" : "border-current"}`,
                children: String.fromCharCode(65 + i)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: option })
          ] })
        },
        i
      );
    }) }),
    showResult && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 p-4 bg-muted rounded-lg border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Explanation: " }),
      question.explanation
    ] }) })
  ] });
}
function QuizResults({
  questions,
  answers,
  timeLeft,
  totalTime,
  onRetry
}) {
  const score = answers.filter(
    (a, i) => a === questions[i].correctIndex
  ).length;
  const percentage = Math.round(score / questions.length * 100);
  const timeTaken = totalTime - timeLeft;
  const mins = Math.floor(timeTaken / 60);
  const secs = timeTaken % 60;
  const categoryStats = questions.reduce(
    (acc, q, i) => {
      const cat = q.category;
      if (!acc[cat]) acc[cat] = { correct: 0, total: 0 };
      acc[cat].total++;
      if (answers[i] === q.correctIndex) acc[cat].correct++;
      return acc;
    },
    {}
  );
  const chartData = Object.entries(categoryStats).map(([cat, stats]) => ({
    category: cat,
    score: Math.round(stats.correct / stats.total * 100),
    correct: stats.correct,
    total: stats.total
  }));
  const getGrade = () => {
    if (percentage >= 90)
      return { grade: "A+", label: "Outstanding!", color: "text-green-600" };
    if (percentage >= 80)
      return { grade: "A", label: "Excellent!", color: "text-green-500" };
    if (percentage >= 70)
      return { grade: "B", label: "Good Job!", color: "text-blue-500" };
    if (percentage >= 60)
      return { grade: "C", label: "Fair", color: "text-yellow-500" };
    return { grade: "D", label: "Needs Improvement", color: "text-red-500" };
  };
  const { grade, label, color } = getGrade();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", "data-ocid": "quiz.success_state", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-10 w-10 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-5xl font-display font-bold ${color}`, children: grade }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-lg font-semibold ${color} mt-1`, children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold text-foreground mt-2", children: [
        score,
        " / ",
        questions.length
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm mt-1", children: [
        percentage,
        "% correct"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted rounded-xl p-4 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-5 w-5 text-primary mx-auto mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-foreground", children: [
          percentage,
          "%"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Accuracy" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted rounded-xl p-4 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-5 w-5 text-primary mx-auto mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-foreground", children: [
          mins,
          ":",
          secs.toString().padStart(2, "0")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Time Taken" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground mb-3", children: "Performance by Category" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        BarChart,
        {
          data: chartData,
          margin: { top: 5, right: 10, left: -20, bottom: 5 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CartesianGrid,
              {
                strokeDasharray: "3 3",
                stroke: "oklch(var(--border))"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "category", tick: { fontSize: 10 } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { domain: [0, 100], tick: { fontSize: 10 }, unit: "%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (v) => [`${v}%`, "Score"] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "score", radius: [4, 4, 0, 0], children: chartData.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Cell,
              {
                fill: entry.score >= 70 ? "#10B981" : "#2563EB"
              },
              entry.category
            )) })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          "data-ocid": "quiz.primary_button",
          onClick: onRetry,
          className: "flex-1",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-4 w-4 mr-2" }),
            " Try Again"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          "data-ocid": "quiz.secondary_button",
          variant: "outline",
          className: "flex-1",
          onClick: () => {
            if (navigator.share) {
              navigator.share({
                title: "FinLit India Quiz",
                text: `I scored ${percentage}% on the Financial Literacy Quiz!`
              });
            } else {
              navigator.clipboard.writeText(
                `I scored ${percentage}% on the FinLit India Financial Literacy Quiz! 🇮🇳`
              );
            }
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "h-4 w-4 mr-2" }),
            " Share Score"
          ]
        }
      )
    ] })
  ] });
}
const TOTAL_TIME = 20 * 60;
function Quiz() {
  const [started, setStarted] = reactExports.useState(false);
  const [current, setCurrent] = reactExports.useState(0);
  const [answers, setAnswers] = reactExports.useState(
    Array(QUIZ_QUESTIONS.length).fill(null)
  );
  const [showResult, setShowResult] = reactExports.useState(false);
  const [timeLeft, setTimeLeft] = reactExports.useState(TOTAL_TIME);
  const [showExplanation, setShowExplanation] = reactExports.useState(false);
  const [quizHistory, setQuizHistory] = useLocalStorage("finlit-quiz-history", []);
  const handleFinish = reactExports.useCallback(() => {
    const score = answers.filter(
      (a, i) => a === QUIZ_QUESTIONS[i].correctIndex
    ).length;
    setQuizHistory((prev) => [
      {
        date: (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN"),
        score,
        total: QUIZ_QUESTIONS.length,
        pct: Math.round(score / QUIZ_QUESTIONS.length * 100)
      },
      ...prev.slice(0, 9)
    ]);
    setShowResult(true);
  }, [answers, setQuizHistory]);
  reactExports.useEffect(() => {
    if (!started || showResult) return;
    if (timeLeft <= 0) {
      handleFinish();
      return;
    }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1e3);
    return () => clearInterval(timer);
  }, [started, showResult, timeLeft, handleFinish]);
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const timerWarning = timeLeft < 120;
  const handleAnswer = (idx) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[current] = idx;
      return next;
    });
    setShowExplanation(true);
  };
  const handleNext = () => {
    setShowExplanation(false);
    if (current < QUIZ_QUESTIONS.length - 1) setCurrent((c) => c + 1);
    else handleFinish();
  };
  const handleRetry = () => {
    setStarted(false);
    setCurrent(0);
    setAnswers(Array(QUIZ_QUESTIONS.length).fill(null));
    setShowResult(false);
    setTimeLeft(TOTAL_TIME);
    setShowExplanation(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Financial Literacy Quiz",
        subtitle: "Test your knowledge with 15 questions on banking, investments, insurance, and government schemes",
        badge: "Quiz"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-10 max-w-2xl", children: [
      !started && !showResult && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          className: "bg-card border border-border rounded-2xl p-8 shadow-card text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: "\\uD83C\\uDDEE\\uD83C\\uDDF3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-3", children: "Ready to Test Your Knowledge?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mb-6", children: [
              QUIZ_QUESTIONS.length,
              " questions • 20 minute timer • Instant explanations"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8", children: ["Banking", "Investment", "Insurance", "Tax & Schemes"].map(
              (cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "bg-muted rounded-xl p-3 text-xs font-medium text-muted-foreground",
                  children: cat
                },
                cat
              )
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                "data-ocid": "quiz.primary_button",
                size: "lg",
                onClick: () => setStarted(true),
                className: "px-8",
                children: "Start Quiz"
              }
            ),
            quizHistory.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 border-t border-border pt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-3 text-sm", children: "Your Past Attempts" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: quizHistory.slice(0, 3).map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  "data-ocid": `quiz.item.${i + 1}`,
                  className: "flex items-center justify-between text-sm bg-muted rounded-lg px-3 py-2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: h.date }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
                      h.score,
                      "/",
                      h.total
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: `font-bold ${h.pct >= 70 ? "text-green-600" : "text-orange-500"}`,
                        children: [
                          h.pct,
                          "%"
                        ]
                      }
                    )
                  ]
                },
                i
              )) })
            ] })
          ]
        }
      ),
      started && !showResult && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          className: "bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Progress,
                {
                  value: current / QUIZ_QUESTIONS.length * 100,
                  className: "flex-1 mr-4 h-2"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `flex items-center gap-1.5 text-sm font-semibold rounded-full px-3 py-1.5 ${timerWarning ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400" : "bg-muted text-muted-foreground"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5" }),
                    mins,
                    ":",
                    secs.toString().padStart(2, "0")
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: -20 },
                transition: { duration: 0.2 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  QuizQuestion,
                  {
                    question: QUIZ_QUESTIONS[current],
                    questionNumber: current + 1,
                    totalQuestions: QUIZ_QUESTIONS.length,
                    selectedAnswer: answers[current],
                    onSelectAnswer: handleAnswer,
                    showResult: showExplanation
                  }
                )
              },
              current
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  "data-ocid": "quiz.secondary_button",
                  variant: "outline",
                  size: "sm",
                  onClick: () => {
                    setCurrent((c) => c - 1);
                    setShowExplanation(answers[current - 1] !== null);
                  },
                  disabled: current === 0,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4 mr-1" }),
                    " Previous"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  "data-ocid": "quiz.primary_button",
                  size: "sm",
                  onClick: handleNext,
                  disabled: answers[current] === null && !showExplanation,
                  children: current === QUIZ_QUESTIONS.length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 mr-1" }),
                    "Finish"
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    "Next ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4 ml-1" })
                  ] })
                }
              )
            ] })
          ]
        }
      ),
      showResult && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          className: "bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            QuizResults,
            {
              questions: QUIZ_QUESTIONS,
              answers,
              timeLeft,
              totalTime: TOTAL_TIME,
              onRetry: handleRetry
            }
          )
        }
      )
    ] })
  ] });
}
export {
  Quiz as default
};
