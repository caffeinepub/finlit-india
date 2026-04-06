import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Calculator,
  FileText,
  Wallet,
} from "lucide-react";
import { motion } from "motion/react";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const dashboardCards = [
  {
    icon: Wallet,
    title: "Budgeting",
    subtitle: "Track every rupee",
    description:
      "Learn the 50/30/20 rule and manage monthly expenses effectively.",
    to: "/tools/budget" as const,
    color: "text-primary",
    bg: "bg-blue-100 dark:bg-blue-900/30",
    chartData: [
      { name: "Needs", v: 50 },
      { name: "Wants", v: 30 },
      { name: "Save", v: 20 },
    ],
    chartType: "bar" as const,
  },
  {
    icon: BookOpen,
    title: "Saving",
    subtitle: "Build your corpus",
    description:
      "Understand FDs, RDs, PPF, and how small savings compound over time.",
    to: "/about" as const,
    color: "text-green-600 dark:text-green-400",
    bg: "bg-green-100 dark:bg-green-900/30",
    chartData: [
      { v: 10 },
      { v: 15 },
      { v: 18 },
      { v: 22 },
      { v: 28 },
      { v: 35 },
      { v: 45 },
    ],
    chartType: "line" as const,
  },
  {
    icon: Calculator,
    title: "Investing",
    subtitle: "Grow your wealth",
    description:
      "Explore equity, mutual funds, SIPs, and long-term wealth creation.",
    to: "/tools/investment" as const,
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-100 dark:bg-purple-900/30",
    chartData: [
      { v: 100 },
      { v: 110 },
      { v: 125 },
      { v: 140 },
      { v: 165 },
      { v: 195 },
      { v: 240 },
    ],
    chartType: "line" as const,
  },
];

const hubCards = [
  {
    icon: Wallet,
    title: "Budget Basics",
    desc: "Master expense tracking and the 50/30/20 rule for financial balance.",
    to: "/tools/budget" as const,
  },
  {
    icon: Calculator,
    title: "Understanding SIPs",
    desc: "Systematic Investment Plans \u2014 the power of disciplined, recurring investment.",
    to: "/tools/investment" as const,
  },
  {
    icon: Building2,
    title: "Government Schemes",
    desc: "Explore PMJDY, APY, PMJJBY and other benefits designed for all Indians.",
    to: "/schemes" as const,
  },
  {
    icon: FileText,
    title: "Tax Planning",
    desc: "Section 80C, ELSS, HRA, and other tools to legally minimize your tax liability.",
    to: "/about" as const,
  },
];

export function FeatureCards() {
  return (
    <>
      {/* Dashboard Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Your Financial Dashboard
            </h2>
            <p className="text-muted-foreground">
              Three pillars of personal financial health
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {dashboardCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-200 group"
              >
                <div className={`inline-flex rounded-xl p-3 mb-4 ${card.bg}`}>
                  <card.icon className={`h-6 w-6 ${card.color}`} />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                  {card.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-2">
                  {card.subtitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {card.description}
                </p>
                <div className="h-24 mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    {card.chartType === "bar" ? (
                      <BarChart data={card.chartData}>
                        <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                        <YAxis hide />
                        <Tooltip formatter={(v) => [`${v}%`, ""]} />
                        <Bar dataKey="v" fill="#2563EB" radius={[3, 3, 0, 0]} />
                      </BarChart>
                    ) : (
                      <LineChart data={card.chartData}>
                        <YAxis hide />
                        <Line
                          type="monotone"
                          dataKey="v"
                          stroke={i === 1 ? "#10B981" : "#8B5CF6"}
                          strokeWidth={2}
                          dot={false}
                        />
                        <Tooltip formatter={(v) => [v, "Value"]} />
                      </LineChart>
                    )}
                  </ResponsiveContainer>
                </div>
                <Link
                  to={card.to}
                  className={`inline-flex items-center gap-1 text-sm font-semibold ${card.color} hover:gap-2 transition-all`}
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Literacy Hub */}
      <section className="py-16 bg-slate-50 dark:bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Financial Literacy Hub
            </h2>
            <p className="text-muted-foreground">
              Comprehensive resources to guide your financial journey
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {hubCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-5 shadow-card hover:shadow-card-hover transition-all duration-200 group"
              >
                <div className="bg-primary/10 rounded-xl p-3 w-fit mb-3">
                  <card.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {card.desc}
                </p>
                <Link
                  to={card.to}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
