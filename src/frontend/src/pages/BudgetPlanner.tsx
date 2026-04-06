import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Save, Trash2, TrendingUp } from "lucide-react";
import { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { toast } from "sonner";
import { PageHeader } from "../components/common/PageHeader";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface BudgetEntry {
  id: string;
  date: string;
  income: { salary: number; freelance: number; other: number };
  expenses: {
    rent: number;
    food: number;
    transport: number;
    utilities: number;
    entertainment: number;
    other: number;
  };
  savings: number;
}

const EXPENSE_COLORS = [
  "#2563EB",
  "#10B981",
  "#F59E0B",
  "#8B5CF6",
  "#EF4444",
  "#6B7280",
];

export default function BudgetPlanner() {
  const [income, setIncome] = useState({
    salary: 50000,
    freelance: 0,
    other: 0,
  });
  const [expenses, setExpenses] = useState({
    rent: 15000,
    food: 8000,
    transport: 3000,
    utilities: 2000,
    entertainment: 3000,
    other: 2000,
  });
  const [history, setHistory] = useLocalStorage<BudgetEntry[]>(
    "finlit-budget-history",
    [],
  );

  const totalIncome = income.salary + income.freelance + income.other;
  const totalExpenses = Object.values(expenses).reduce((a, b) => a + b, 0);
  const savings = totalIncome - totalExpenses;
  const savingsRate =
    totalIncome > 0 ? Math.round((savings / totalIncome) * 100) : 0;

  const expenseChartData = useMemo(
    () =>
      [
        { name: "Rent/EMI", value: expenses.rent },
        { name: "Food", value: expenses.food },
        { name: "Transport", value: expenses.transport },
        { name: "Utilities", value: expenses.utilities },
        { name: "Entertainment", value: expenses.entertainment },
        { name: "Other", value: expenses.other },
      ].filter((d) => d.value > 0),
    [expenses],
  );

  const summaryChartData = [
    { name: "Income", value: totalIncome, fill: "#10B981" },
    { name: "Expenses", value: totalExpenses, fill: "#EF4444" },
    { name: "Savings", value: Math.max(0, savings), fill: "#2563EB" },
  ];

  const rule502030 = [
    {
      name: "Needs (50%)",
      recommended: Math.round(totalIncome * 0.5),
      actual:
        expenses.rent + expenses.food + expenses.utilities + expenses.transport,
    },
    {
      name: "Wants (30%)",
      recommended: Math.round(totalIncome * 0.3),
      actual: expenses.entertainment + expenses.other,
    },
    {
      name: "Savings (20%)",
      recommended: Math.round(totalIncome * 0.2),
      actual: Math.max(0, savings),
    },
  ];

  const saveBudget = () => {
    const entry: BudgetEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-IN"),
      income: { ...income },
      expenses: { ...expenses },
      savings,
    };
    setHistory((prev) => [entry, ...prev.slice(0, 9)]);
    toast.success("Budget saved successfully!");
  };

  return (
    <div>
      <PageHeader
        title="Budget Planner"
        subtitle="Track your income and expenses, visualize spending patterns, and achieve your savings goals"
        badge="Tools"
      />

      <div className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Inputs */}
          <div className="lg:col-span-1 space-y-6">
            {/* Income */}
            <div className="bg-card border border-border rounded-xl p-5 shadow-card">
              <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-600" /> Monthly Income
                (₹)
              </h3>
              {(["salary", "freelance", "other"] as const).map((key) => (
                <div key={key} className="mb-3">
                  <Label
                    htmlFor={`income-${key}`}
                    className="text-xs capitalize mb-1.5 block"
                  >
                    {key}
                  </Label>
                  <Input
                    id={`income-${key}`}
                    data-ocid={`budget.${key}_input`}
                    type="number"
                    min={0}
                    value={income[key]}
                    onChange={(e) =>
                      setIncome((prev) => ({
                        ...prev,
                        [key]: Number(e.target.value),
                      }))
                    }
                  />
                </div>
              ))}
              <div className="mt-3 pt-3 border-t border-border">
                <span className="text-sm text-muted-foreground">
                  Total Income:
                </span>
                <span className="font-bold text-green-600 ml-2">
                  ₹{totalIncome.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            {/* Expenses */}
            <div className="bg-card border border-border rounded-xl p-5 shadow-card">
              <h3 className="font-display font-semibold text-foreground mb-4">
                Monthly Expenses (₹)
              </h3>
              {(Object.keys(expenses) as (keyof typeof expenses)[]).map(
                (key) => (
                  <div key={key} className="mb-3">
                    <Label
                      htmlFor={`exp-${key}`}
                      className="text-xs capitalize mb-1.5 block"
                    >
                      {key}
                    </Label>
                    <Input
                      id={`exp-${key}`}
                      data-ocid={`budget.${key}_input`}
                      type="number"
                      min={0}
                      value={expenses[key]}
                      onChange={(e) =>
                        setExpenses((prev) => ({
                          ...prev,
                          [key]: Number(e.target.value),
                        }))
                      }
                    />
                  </div>
                ),
              )}
              <div className="mt-3 pt-3 border-t border-border">
                <span className="text-sm text-muted-foreground">
                  Total Expenses:
                </span>
                <span className="font-bold text-red-500 ml-2">
                  ₹{totalExpenses.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            <Button
              data-ocid="budget.save_button"
              onClick={saveBudget}
              className="w-full"
            >
              <Save className="h-4 w-4 mr-2" /> Save Budget
            </Button>
          </div>

          {/* Charts & Results */}
          <div className="lg:col-span-2 space-y-6">
            {/* Savings summary */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-card border border-border rounded-xl p-4 text-center shadow-card">
                <div className="font-display text-xl font-bold text-green-600">
                  ₹{totalIncome.toLocaleString("en-IN")}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Total Income
                </div>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center shadow-card">
                <div className="font-display text-xl font-bold text-red-500">
                  ₹{totalExpenses.toLocaleString("en-IN")}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Total Expenses
                </div>
              </div>
              <div
                className={`bg-card border rounded-xl p-4 text-center shadow-card ${savings >= 0 ? "border-green-200 dark:border-green-900/30" : "border-red-200 dark:border-red-900/30"}`}
              >
                <div
                  className={`font-display text-xl font-bold ${savings >= 0 ? "text-primary" : "text-red-500"}`}
                >
                  {savings >= 0 ? "+" : ""}₹{savings.toLocaleString("en-IN")}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Savings ({savingsRate}%)
                </div>
              </div>
            </div>

            {/* Charts */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-5 shadow-card">
                <h4 className="font-semibold text-sm text-foreground mb-4">
                  Expense Breakdown
                </h4>
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie
                      data={expenseChartData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                    >
                      {expenseChartData.map((_item, i) => (
                        <Cell
                          // biome-ignore lint/suspicious/noArrayIndexKey: chart cells indexed by render order
                          key={i}
                          fill={EXPENSE_COLORS[i % EXPENSE_COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(v) => [
                        `₹${Number(v).toLocaleString("en-IN")}`,
                        "",
                      ]}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-card border border-border rounded-xl p-5 shadow-card">
                <h4 className="font-semibold text-sm text-foreground mb-4">
                  Income vs Expenses vs Savings
                </h4>
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart
                    data={summaryChartData}
                    margin={{ top: 5, right: 5, left: -10, bottom: 5 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="rgba(0,0,0,0.06)"
                    />
                    <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 10 }} />
                    <Tooltip
                      formatter={(v) => [
                        `₹${Number(v).toLocaleString("en-IN")}`,
                        "",
                      ]}
                    />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      {summaryChartData.map((entry) => (
                        <Cell key={entry.name} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* 50/30/20 rule */}
            <div className="bg-card border border-border rounded-xl p-5 shadow-card">
              <h4 className="font-semibold text-foreground mb-4">
                50/30/20 Rule Comparison
              </h4>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart
                  data={rule502030}
                  margin={{ top: 5, right: 10, left: -10, bottom: 5 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(0,0,0,0.06)"
                  />
                  <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Tooltip
                    formatter={(v) => [
                      `₹${Number(v).toLocaleString("en-IN")}`,
                      "",
                    ]}
                  />
                  <Legend />
                  <Bar
                    dataKey="recommended"
                    fill="#10B981"
                    name="Recommended"
                    radius={[3, 3, 0, 0]}
                  />
                  <Bar
                    dataKey="actual"
                    fill="#2563EB"
                    name="Actual"
                    radius={[3, 3, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* History */}
            {history.length > 0 && (
              <div className="bg-card border border-border rounded-xl p-5 shadow-card">
                <h4 className="font-semibold text-foreground mb-4">
                  Budget History
                </h4>
                <div className="space-y-2">
                  {history.slice(0, 5).map((entry, i) => (
                    <div
                      key={entry.id}
                      data-ocid={`budget.item.${i + 1}`}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted text-sm"
                    >
                      <span className="text-muted-foreground">
                        {entry.date}
                      </span>
                      <span className="text-green-600 font-medium">
                        ₹
                        {(
                          entry.income.salary +
                          entry.income.freelance +
                          entry.income.other
                        ).toLocaleString("en-IN")}{" "}
                        income
                      </span>
                      <span
                        className={`font-semibold ${entry.savings >= 0 ? "text-primary" : "text-red-500"}`}
                      >
                        {entry.savings >= 0 ? "+" : ""}₹
                        {entry.savings.toLocaleString("en-IN")}
                      </span>
                      <button
                        type="button"
                        data-ocid={`budget.delete_button.${i + 1}`}
                        onClick={() =>
                          setHistory((prev) =>
                            prev.filter((h) => h.id !== entry.id),
                          )
                        }
                        className="text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
