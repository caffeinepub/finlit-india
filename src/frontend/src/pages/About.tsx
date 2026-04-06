import {
  BarChart3,
  CheckCircle2,
  FileText,
  Landmark,
  Shield,
  Target,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";
import { PageHeader } from "../components/common/PageHeader";

const COMPONENTS = [
  {
    icon: TrendingUp,
    title: "Budgeting",
    desc: "Creating a plan to track income and expenditures systematically to achieve financial goals.",
    color: "text-primary",
    bg: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    icon: Target,
    title: "Saving",
    desc: "Setting aside funds regularly to create an emergency corpus and work towards future goals.",
    color: "text-green-600",
    bg: "bg-green-100 dark:bg-green-900/30",
  },
  {
    icon: BarChart3,
    title: "Investing",
    desc: "Growing your wealth through equity, mutual funds, fixed income, and alternative assets.",
    color: "text-purple-600",
    bg: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    icon: Shield,
    title: "Insurance",
    desc: "Protecting yourself and family against financial risks through life, health, and general insurance.",
    color: "text-orange-600",
    bg: "bg-orange-100 dark:bg-orange-900/30",
  },
  {
    icon: FileText,
    title: "Tax Planning",
    desc: "Legally minimizing tax liability through instruments like ELSS, PPF, NPS, and 80C deductions.",
    color: "text-red-600",
    bg: "bg-red-100 dark:bg-red-900/30",
  },
  {
    icon: Landmark,
    title: "Retirement",
    desc: "Planning long-term financial security through EPF, NPS, PPF, and other pension vehicles.",
    color: "text-cyan-600",
    bg: "bg-cyan-100 dark:bg-cyan-900/30",
  },
];

const IMPORTANCE = [
  "Helps individuals make informed financial decisions and avoid debt traps",
  "Enables effective use of government schemes designed for financial inclusion",
  "Builds confidence to invest, save, and plan for retirement proactively",
  "Protects against financial fraud, mis-selling, and predatory lending",
  "Promotes economic growth at the national level through better capital allocation",
  "Reduces financial stress and improves quality of life significantly",
];

export default function About() {
  return (
    <div>
      <PageHeader
        title="About Financial Literacy"
        subtitle="Understanding money management, investing, and the tools that shape financial well-being in India"
        badge="Education"
      />

      {/* Definition */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-2xl p-8 shadow-card mb-12"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              What is Financial Literacy?
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base mb-4">
              Financial literacy is the ability to understand and effectively
              use various financial skills, including personal financial
              management, budgeting, and investing. It includes knowledge of
              financial concepts such as compound interest, credit management,
              debt, and financial planning.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              In the Indian context, financial literacy encompasses awareness of
              banking services, insurance products, government schemes, tax
              obligations, and investment options. According to an S&P Global
              Financial Literacy Survey, only{" "}
              <strong className="text-foreground">27% of Indian adults</strong>{" "}
              are financially literate, compared to a global average of 33%,
              highlighting an urgent need for education and awareness.
            </p>
          </motion.div>

          {/* Importance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              Why Financial Literacy Matters
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {IMPORTANCE.map((item) => (
                <div
                  key={item.slice(0, 30)}
                  className="flex items-start gap-3 bg-card border border-border rounded-xl p-4"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Key Components */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              Key Components of Financial Literacy
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {COMPONENTS.map((comp, i) => (
                <motion.div
                  key={comp.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-5 shadow-card hover:shadow-card-hover transition-all duration-200"
                >
                  <div className={`inline-flex rounded-xl p-3 mb-3 ${comp.bg}`}>
                    <comp.icon className={`h-6 w-6 ${comp.color}`} />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {comp.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {comp.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics section */}
      <section className="py-12 bg-slate-50 dark:bg-accent/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
            Financial Literacy Statistics in India
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                value: "27%",
                label: "Financial Literacy Rate",
                sub: "S&P Global Survey 2023",
              },
              {
                value: "190M+",
                label: "Unbanked Adults",
                sub: "World Bank Data",
              },
              { value: "50Cr+", label: "Jan Dhan Accounts", sub: "PMJDY 2024" },
              { value: "₹10L Cr", label: "Mutual Fund AUM", sub: "AMFI, 2024" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-border rounded-xl p-5 text-center shadow-card"
              >
                <div className="font-display text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
