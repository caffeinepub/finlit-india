import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "../contexts/AuthContext";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookmarkCheck,
  Calculator,
  ClipboardList,
  LayoutDashboard,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { PageHeader } from "../components/common/PageHeader";
import { GOVERNMENT_SCHEMES } from "../data/schemes";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function Dashboard() {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [bookmarks] = useLocalStorage<string[]>("finlit-bookmarks", []);
  const [quizHistory] = useLocalStorage<
    { date: string; score: number; total: number; pct: number }[]
  >("finlit-quiz-history", []);
  const [budgetHistory] = useLocalStorage<
    {
      id: string;
      date: string;
      income: { salary: number; freelance: number; other: number };
      savings: number;
    }[]
  >("finlit-budget-history", []);
  const [activeTab, setActiveTab] = useState("overview");

  if (!isAuthenticated) {
    navigate({ to: "/login" });
    return null;
  }

  const savedSchemes = GOVERNMENT_SCHEMES.filter((s) =>
    bookmarks.includes(s.id),
  );
  const avgScore =
    quizHistory.length > 0
      ? Math.round(
          quizHistory.reduce((a, q) => a + q.pct, 0) / quizHistory.length,
        )
      : 0;

  return (
    <div>
      <PageHeader
        title={`Welcome, ${user?.name.split(" ")[0]}!`}
        subtitle="Track your financial literacy progress, saved schemes, and quiz performance"
        badge="Dashboard"
      />

      <div className="container mx-auto px-4 py-10">
        {/* Quick stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              icon: ClipboardList,
              label: "Quizzes Taken",
              value: quizHistory.length,
              color: "text-primary",
            },
            {
              icon: BookmarkCheck,
              label: "Schemes Saved",
              value: savedSchemes.length,
              color: "text-green-600",
            },
            {
              icon: Calculator,
              label: "Budget Entries",
              value: budgetHistory.length,
              color: "text-purple-600",
            },
            {
              icon: TrendingUp,
              label: "Avg Quiz Score",
              value: `${avgScore}%`,
              color: "text-orange-600",
            },
          ].map(({ icon: Icon, label, value, color }) => (
            <div
              key={label}
              className="bg-card border border-border rounded-xl p-4 shadow-card"
            >
              <Icon className={`h-5 w-5 ${color} mb-2`} />
              <div className={`font-display text-2xl font-bold ${color}`}>
                {value}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {label}
              </div>
            </div>
          ))}
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger data-ocid="dashboard.overview_tab" value="overview">
              <LayoutDashboard className="h-4 w-4 mr-1.5" />
              Overview
            </TabsTrigger>
            <TabsTrigger data-ocid="dashboard.schemes_tab" value="schemes">
              <BookmarkCheck className="h-4 w-4 mr-1.5" />
              Saved Schemes
            </TabsTrigger>
            <TabsTrigger data-ocid="dashboard.quiz_tab" value="quiz">
              <ClipboardList className="h-4 w-4 mr-1.5" />
              Quiz History
            </TabsTrigger>
            <TabsTrigger data-ocid="dashboard.budget_tab" value="budget">
              <Calculator className="h-4 w-4 mr-1.5" />
              Budget History
            </TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview">
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-5 shadow-card">
                <h3 className="font-display font-semibold text-foreground mb-4">
                  Quiz Performance
                </h3>
                {quizHistory.length === 0 ? (
                  <div
                    data-ocid="dashboard.quiz_empty_state"
                    className="text-center py-8 text-muted-foreground text-sm"
                  >
                    No quiz attempts yet.{" "}
                    <a href="/quiz" className="text-primary">
                      Take a quiz!
                    </a>
                  </div>
                ) : (
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart
                      data={quizHistory.slice(0, 5).reverse()}
                      margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="rgba(0,0,0,0.06)"
                      />
                      <XAxis dataKey="date" tick={{ fontSize: 9 }} />
                      <YAxis
                        domain={[0, 100]}
                        tick={{ fontSize: 10 }}
                        unit="%"
                      />
                      <Tooltip formatter={(v) => [`${v}%`, "Score"]} />
                      <Bar
                        dataKey="pct"
                        fill="#2563EB"
                        radius={[4, 4, 0, 0]}
                        name="Score"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </div>
              <div className="bg-card border border-border rounded-xl p-5 shadow-card">
                <h3 className="font-display font-semibold text-foreground mb-4">
                  Saved Schemes Preview
                </h3>
                {savedSchemes.length === 0 ? (
                  <div
                    data-ocid="dashboard.schemes_empty_state"
                    className="text-center py-8 text-muted-foreground text-sm"
                  >
                    No schemes saved.{" "}
                    <a href="/schemes" className="text-primary">
                      Explore schemes!
                    </a>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {savedSchemes.slice(0, 4).map((s) => (
                      <div
                        key={s.id}
                        className="flex items-center gap-3 bg-muted rounded-lg px-3 py-2.5"
                      >
                        <BookmarkCheck className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-sm font-medium text-foreground">
                          {s.shortName}
                        </span>
                        <span className="text-xs text-muted-foreground ml-auto">
                          {s.category}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          {/* Saved Schemes */}
          <TabsContent value="schemes">
            {savedSchemes.length === 0 ? (
              <div
                data-ocid="dashboard.schemes_empty_state"
                className="text-center py-16"
              >
                <BookmarkCheck className="h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-40" />
                <p className="text-muted-foreground mb-4">
                  No schemes bookmarked yet
                </p>
                <Button asChild variant="outline">
                  <a href="/schemes">Browse Schemes</a>
                </Button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {savedSchemes.map((s, i) => (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    data-ocid={`dashboard.schemes.item.${i + 1}`}
                    className="bg-card border border-border rounded-xl p-4 shadow-card"
                  >
                    <div className="font-semibold text-foreground mb-1">
                      {s.shortName}
                    </div>
                    <div className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {s.description}
                    </div>
                    <a
                      href={s.officialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline"
                    >
                      Visit Official Site \u2192
                    </a>
                  </motion.div>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Quiz History */}
          <TabsContent value="quiz">
            {quizHistory.length === 0 ? (
              <div
                data-ocid="dashboard.quiz_empty_state"
                className="text-center py-16"
              >
                <ClipboardList className="h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-40" />
                <p className="text-muted-foreground mb-4">
                  No quiz history yet
                </p>
                <Button asChild variant="outline">
                  <a href="/quiz">Take Quiz</a>
                </Button>
              </div>
            ) : (
              <div className="space-y-3">
                {quizHistory.map((h, i) => (
                  <div
                    // biome-ignore lint/suspicious/noArrayIndexKey: quiz history sorted by timestamp
                    key={i}
                    data-ocid={`dashboard.quiz.item.${i + 1}`}
                    className="bg-card border border-border rounded-xl p-4 flex items-center justify-between shadow-card"
                  >
                    <span className="text-muted-foreground text-sm">
                      {h.date}
                    </span>
                    <span className="font-semibold text-foreground">
                      {h.score}/{h.total}
                    </span>
                    <span
                      className={`font-bold text-lg ${h.pct >= 70 ? "text-green-600" : "text-orange-500"}`}
                    >
                      {h.pct}%
                    </span>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Budget History */}
          <TabsContent value="budget">
            {budgetHistory.length === 0 ? (
              <div
                data-ocid="dashboard.budget_empty_state"
                className="text-center py-16"
              >
                <Calculator className="h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-40" />
                <p className="text-muted-foreground mb-4">
                  No budget entries saved yet
                </p>
                <Button asChild variant="outline">
                  <a href="/tools/budget">Plan Budget</a>
                </Button>
              </div>
            ) : (
              <div className="space-y-3">
                {budgetHistory.map((b, i) => {
                  const totalInc =
                    b.income.salary + b.income.freelance + b.income.other;
                  return (
                    <div
                      key={b.id}
                      data-ocid={`dashboard.budget.item.${i + 1}`}
                      className="bg-card border border-border rounded-xl p-4 flex items-center justify-between shadow-card"
                    >
                      <span className="text-muted-foreground text-sm">
                        {b.date}
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        Income: \u20B9{totalInc.toLocaleString("en-IN")}
                      </span>
                      <span
                        className={`font-bold ${b.savings >= 0 ? "text-primary" : "text-red-500"}`}
                      >
                        Savings: \u20B9{b.savings.toLocaleString("en-IN")}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
