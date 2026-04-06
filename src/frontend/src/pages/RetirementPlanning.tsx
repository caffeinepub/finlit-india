import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "@tanstack/react-router";
import {
  BadgeIndianRupee,
  BookOpen,
  Calendar,
  ChevronRight,
  DollarSign,
  PiggyBank,
  ShieldCheck,
  Sprout,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { PageHeader } from "../components/common/PageHeader";

function formatINR(value: number): string {
  return `₹${Math.round(value).toLocaleString("en-IN")}`;
}

function formatCrore(value: number): string {
  if (value >= 10000000) return `₹${(value / 10000000).toFixed(2)} Cr`;
  if (value >= 100000) return `₹${(value / 100000).toFixed(2)} L`;
  return formatINR(value);
}

const PILLAR_CARDS = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Budgeting",
    description:
      "Creating a plan to track income and expenditures systematically to achieve financial goals.",
    color: "border-l-blue-500",
    iconBg: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    link: "/tools/budget" as const,
    linkLabel: "Open Budget Planner",
  },
  {
    icon: <PiggyBank className="h-6 w-6" />,
    title: "Saving",
    description:
      "Setting aside funds regularly to create an emergency corpus and work towards future goals.",
    color: "border-l-emerald-500",
    iconBg:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
    link: "/tips" as const,
    linkLabel: "Explore Savings Tips",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Investing",
    description:
      "Growing your wealth through equity, mutual funds, fixed income, and alternative assets.",
    color: "border-l-indigo-500",
    iconBg:
      "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
    link: "/tips" as const,
    linkLabel: "Investing Tips",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Insurance",
    description:
      "Protecting yourself and family against financial risks through life, health, and general insurance.",
    color: "border-l-orange-500",
    iconBg:
      "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
    link: "/tips" as const,
    linkLabel: "Insurance Tips",
  },
  {
    icon: <BadgeIndianRupee className="h-6 w-6" />,
    title: "Tax Planning",
    description:
      "Legally minimizing tax liability through instruments like ELSS, PPF, NPS, and 80C deductions.",
    color: "border-l-violet-500",
    iconBg:
      "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
    link: "/tips" as const,
    linkLabel: "Tax Planning Tips",
  },
];

const INSTRUMENTS = [
  {
    name: "EPF",
    fullName: "Employees' Provident Fund",
    description:
      "Mandatory retirement savings for salaried employees. Employer matches your 12% contribution.",
    benefit: "8.25% p.a. guaranteed return",
    taxStatus: "EEE",
    taxColor:
      "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  },
  {
    name: "PPF",
    fullName: "Public Provident Fund",
    description:
      "Sovereign-backed 15-year scheme open to all. Partial withdrawals allowed from year 7.",
    benefit: "7.1% p.a., 15-year lock-in",
    taxStatus: "EEE",
    taxColor:
      "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  },
  {
    name: "NPS",
    fullName: "National Pension System",
    description:
      "Market-linked pension with ultra-low fund management charges (0.01%). Extra ₹50K 80CCD(1B) benefit.",
    benefit: "Extra ₹50K 80CCD(1B) deduction",
    taxStatus: "EET",
    taxColor:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  },
  {
    name: "ELSS",
    fullName: "Equity Linked Savings Scheme",
    description:
      "Equity mutual funds with 3-year lock-in and 80C deduction. Highest potential returns among 80C.",
    benefit: "Historically 12\u201315% CAGR",
    taxStatus: "EEE*",
    taxColor:
      "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  },
  {
    name: "SCSS",
    fullName: "Senior Citizens Savings Scheme",
    description:
      "For investors above 60. Highest safe returns among government schemes with quarterly payouts.",
    benefit: "8.2% p.a., quarterly interest",
    taxStatus: "Taxable",
    taxColor:
      "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  },
  {
    name: "APY",
    fullName: "Atal Pension Yojana",
    description:
      "Government-guaranteed pension for unorganised sector workers. Guaranteed ₹1K\u2013₹5K/month pension.",
    benefit: "Guaranteed monthly pension",
    taxStatus: "80CCD",
    taxColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  },
];

export default function RetirementPlanning() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyExpenses, setMonthlyExpenses] = useState(40000);
  const [inflationRate, setInflationRate] = useState(6);
  const [returnRate, setReturnRate] = useState(12);
  const [currentSavings, setCurrentSavings] = useState(100000);

  const calc = useMemo(() => {
    const years = Math.max(retirementAge - currentAge, 1);
    const monthlyReturn = returnRate / 100 / 12;
    const months = years * 12;

    // Inflation-adjusted monthly expenses at retirement
    const adjustedMonthly =
      monthlyExpenses * (1 + inflationRate / 100) ** years;

    // Required corpus using 4% safe withdrawal rule
    const requiredCorpus = (adjustedMonthly * 12) / 0.04;

    // Future value of current savings
    const currentSavingsGrown =
      currentSavings * (1 + returnRate / 100) ** years;

    // Corpus gap that SIP must fill
    const corpusGap = Math.max(requiredCorpus - currentSavingsGrown, 0);

    // Monthly SIP needed: PMT = FV * r / ((1+r)^n - 1)
    const monthlySIP =
      monthlyReturn > 0
        ? (corpusGap * monthlyReturn) / ((1 + monthlyReturn) ** months - 1)
        : corpusGap / months;

    // Projected corpus from SIP at retirement
    const projectedSIPCorpus =
      monthlyReturn > 0
        ? (monthlySIP * ((1 + monthlyReturn) ** months - 1)) / monthlyReturn
        : monthlySIP * months;

    const totalProjected = projectedSIPCorpus + currentSavingsGrown;
    const totalInvested = monthlySIP * months;
    const interestEarned = projectedSIPCorpus - totalInvested;

    return {
      years,
      adjustedMonthly,
      requiredCorpus,
      monthlySIP,
      projectedSIPCorpus,
      totalProjected,
      currentSavingsGrown,
      totalInvested,
      interestEarned,
    };
  }, [
    currentAge,
    retirementAge,
    monthlyExpenses,
    inflationRate,
    returnRate,
    currentSavings,
  ]);

  // Year-by-year corpus growth data
  const growthChartData = useMemo(() => {
    const data: { age: number; projected: number; required: number }[] = [];
    const monthlyReturn = returnRate / 100 / 12;
    const { monthlySIP, requiredCorpus, years } = calc;

    for (let yr = 0; yr <= years; yr++) {
      const months = yr * 12;
      const savingsGrown = currentSavings * (1 + returnRate / 100) ** yr;
      const sipCorpus =
        monthlyReturn > 0 && months > 0
          ? (monthlySIP * ((1 + monthlyReturn) ** months - 1)) / monthlyReturn
          : monthlySIP * months;
      data.push({
        age: currentAge + yr,
        projected: Math.round(savingsGrown + sipCorpus),
        required: Math.round(requiredCorpus),
      });
    }
    return data;
  }, [calc, currentAge, currentSavings, returnRate]);

  // SIP breakdown bar chart data
  const sipBreakdownData = [
    {
      name: "Amount Invested",
      value: Math.round(calc.totalInvested),
      fill: "#2563EB",
    },
    {
      name: "Interest Earned",
      value: Math.round(Math.max(calc.interestEarned, 0)),
      fill: "#10B981",
    },
    {
      name: "Existing Savings Grown",
      value: Math.round(calc.currentSavingsGrown),
      fill: "#8B5CF6",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Retirement Planning"
        subtitle="Calculate your retirement corpus, plan your SIP, and discover the best Indian instruments to secure your golden years."
        badge="Calculator"
      />

      <div className="container mx-auto px-4 py-10">
        {/* ── Section 1: Calculator ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-3 gap-8 mb-12"
        >
          {/* Input Panel */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-xl p-6 shadow-card sticky top-20">
              <h2 className="font-display font-bold text-foreground text-lg mb-6 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Your Details
              </h2>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="currentAge" className="text-sm mb-1.5 block">
                    Current Age
                  </Label>
                  <Input
                    id="currentAge"
                    data-ocid="retirement.current_age.input"
                    type="number"
                    min={18}
                    max={65}
                    value={currentAge}
                    onChange={(e) => setCurrentAge(Number(e.target.value))}
                  />
                </div>

                <div>
                  <Label
                    htmlFor="retirementAge"
                    className="text-sm mb-1.5 block"
                  >
                    Retirement Age
                  </Label>
                  <Input
                    id="retirementAge"
                    data-ocid="retirement.retirement_age.input"
                    type="number"
                    min={40}
                    max={80}
                    value={retirementAge}
                    onChange={(e) => setRetirementAge(Number(e.target.value))}
                  />
                </div>

                <div>
                  <Label
                    htmlFor="monthlyExpenses"
                    className="text-sm mb-1.5 block"
                  >
                    Monthly Expenses Today (₹)
                  </Label>
                  <Input
                    id="monthlyExpenses"
                    data-ocid="retirement.monthly_expenses.input"
                    type="number"
                    min={0}
                    value={monthlyExpenses}
                    onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                  />
                </div>

                <div>
                  <Label
                    htmlFor="inflationRate"
                    className="text-sm mb-1.5 block"
                  >
                    Expected Inflation Rate (%)
                  </Label>
                  <Input
                    id="inflationRate"
                    data-ocid="retirement.inflation_rate.input"
                    type="number"
                    min={1}
                    max={20}
                    step={0.5}
                    value={inflationRate}
                    onChange={(e) => setInflationRate(Number(e.target.value))}
                  />
                </div>

                <div>
                  <Label htmlFor="returnRate" className="text-sm mb-1.5 block">
                    Expected Investment Return (%)
                  </Label>
                  <Input
                    id="returnRate"
                    data-ocid="retirement.return_rate.input"
                    type="number"
                    min={1}
                    max={30}
                    step={0.5}
                    value={returnRate}
                    onChange={(e) => setReturnRate(Number(e.target.value))}
                  />
                </div>

                <div>
                  <Label
                    htmlFor="currentSavings"
                    className="text-sm mb-1.5 block"
                  >
                    Current Retirement Savings (₹)
                  </Label>
                  <Input
                    id="currentSavings"
                    data-ocid="retirement.current_savings.input"
                    type="number"
                    min={0}
                    value={currentSavings}
                    onChange={(e) => setCurrentSavings(Number(e.target.value))}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stat Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <motion.div
                data-ocid="retirement.years.card"
                key={calc.years}
                initial={{ scale: 0.95, opacity: 0.7 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.25 }}
                className="bg-card border border-border rounded-xl p-4 shadow-card text-center"
              >
                <div className="text-3xl font-display font-bold text-primary">
                  {calc.years}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Years to Retirement
                </div>
              </motion.div>

              <motion.div
                data-ocid="retirement.adjusted_expenses.card"
                key={calc.adjustedMonthly}
                initial={{ scale: 0.95, opacity: 0.7 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.25, delay: 0.04 }}
                className="bg-card border border-border rounded-xl p-4 shadow-card text-center"
              >
                <div className="text-xl font-display font-bold text-amber-600 dark:text-amber-400">
                  {formatCrore(calc.adjustedMonthly)}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Monthly Expenses at Retirement
                </div>
              </motion.div>

              <motion.div
                data-ocid="retirement.required_corpus.card"
                key={calc.requiredCorpus}
                initial={{ scale: 0.95, opacity: 0.7 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.25, delay: 0.08 }}
                className="bg-card border border-red-200 dark:border-red-900/30 rounded-xl p-4 shadow-card text-center col-span-2 md:col-span-1"
              >
                <div className="text-xl font-display font-bold text-red-600 dark:text-red-400">
                  {formatCrore(calc.requiredCorpus)}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Required Corpus (4% Rule)
                </div>
              </motion.div>

              <motion.div
                data-ocid="retirement.monthly_sip.card"
                key={calc.monthlySIP}
                initial={{ scale: 0.95, opacity: 0.7 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.25, delay: 0.12 }}
                className="bg-card border border-primary/20 dark:border-primary/30 rounded-xl p-4 shadow-card text-center"
              >
                <div className="text-xl font-display font-bold text-primary">
                  {formatCrore(calc.monthlySIP)}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Monthly SIP Needed
                </div>
              </motion.div>

              <motion.div
                data-ocid="retirement.projected_corpus.card"
                key={calc.totalProjected}
                initial={{ scale: 0.95, opacity: 0.7 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.25, delay: 0.16 }}
                className="bg-card border border-green-200 dark:border-green-900/30 rounded-xl p-4 shadow-card text-center"
              >
                <div className="text-xl font-display font-bold text-green-600 dark:text-green-400">
                  {formatCrore(calc.totalProjected)}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Projected Total Corpus
                </div>
              </motion.div>

              <motion.div
                data-ocid="retirement.savings_grown.card"
                key={calc.currentSavingsGrown}
                initial={{ scale: 0.95, opacity: 0.7 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.25, delay: 0.2 }}
                className="bg-card border border-border rounded-xl p-4 shadow-card text-center"
              >
                <div className="text-xl font-display font-bold text-violet-600 dark:text-violet-400">
                  {formatCrore(calc.currentSavingsGrown)}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Existing Savings Grown
                </div>
              </motion.div>
            </div>

            {/* Corpus Growth Chart */}
            <div className="bg-card border border-border rounded-xl p-5 shadow-card">
              <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                Corpus Growth \u2014 Age {currentAge} to {retirementAge}
              </h3>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart
                  data={growthChartData}
                  margin={{ top: 5, right: 10, left: -10, bottom: 5 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(0,0,0,0.06)"
                  />
                  <XAxis
                    dataKey="age"
                    tick={{ fontSize: 11 }}
                    label={{
                      value: "Age",
                      position: "insideBottomRight",
                      offset: -5,
                      fontSize: 11,
                    }}
                  />
                  <YAxis
                    tick={{ fontSize: 10 }}
                    tickFormatter={(v) =>
                      v >= 10000000
                        ? `${(v / 10000000).toFixed(1)}Cr`
                        : v >= 100000
                          ? `${(v / 100000).toFixed(0)}L`
                          : `${v}`
                    }
                  />
                  <Tooltip
                    formatter={(v, name) => [
                      formatCrore(Number(v)),
                      name === "projected"
                        ? "Projected Corpus"
                        : "Required Corpus",
                    ]}
                    labelFormatter={(label) => `Age ${label}`}
                  />
                  <Legend
                    formatter={(value) =>
                      value === "projected"
                        ? "Projected Corpus"
                        : "Required Corpus"
                    }
                  />
                  <ReferenceLine
                    x={retirementAge}
                    stroke="#EF4444"
                    strokeDasharray="4 2"
                    label={{
                      value: "Retire",
                      position: "top",
                      fontSize: 11,
                      fill: "#EF4444",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="projected"
                    stroke="#2563EB"
                    strokeWidth={2.5}
                    dot={false}
                    activeDot={{ r: 5 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="required"
                    stroke="#EF4444"
                    strokeWidth={2}
                    strokeDasharray="5 3"
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* SIP Breakdown Bar Chart */}
            <div className="bg-card border border-border rounded-xl p-5 shadow-card">
              <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-primary" />
                SIP Breakdown at Retirement
              </h3>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart
                  data={sipBreakdownData}
                  margin={{ top: 5, right: 10, left: -10, bottom: 5 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(0,0,0,0.06)"
                  />
                  <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                  <YAxis
                    tick={{ fontSize: 10 }}
                    tickFormatter={(v) =>
                      v >= 10000000
                        ? `${(v / 10000000).toFixed(1)}Cr`
                        : v >= 100000
                          ? `${(v / 100000).toFixed(0)}L`
                          : `${v}`
                    }
                  />
                  <Tooltip formatter={(v) => [formatCrore(Number(v)), ""]} />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                    {sipBreakdownData.map((entry) => (
                      <Cell key={entry.name} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap gap-3 mt-3">
                {sipBreakdownData.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-1.5 text-xs text-muted-foreground"
                  >
                    <span
                      className="inline-block w-3 h-3 rounded-sm"
                      style={{ backgroundColor: item.fill }}
                    />
                    {item.name}:{" "}
                    <span className="font-semibold text-foreground">
                      {formatCrore(item.value)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Section 2: Five Financial Pillars ── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              The Five Pillars of Financial Wellness
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
              Retirement planning doesn&apos;t exist in isolation. Master these
              five pillars for complete financial security.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PILLAR_CARDS.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                data-ocid={`retirement.pillar.item.${idx + 1}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className={`bg-card border border-border rounded-xl p-5 shadow-card flex flex-col gap-3 border-l-4 ${pillar.color} hover:shadow-card-hover transition-shadow`}
              >
                <div
                  className={`inline-flex items-center justify-center rounded-xl p-2.5 w-fit ${pillar.iconBg}`}
                >
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground text-base">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-xs mt-1 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <Link
                    to={pillar.link}
                    data-ocid={`retirement.pillar.link.${idx + 1}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    {pillar.linkLabel}
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Section 3: Retirement Instruments ── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Top Retirement Instruments in India
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
              Choose the right mix based on your tax slab, risk appetite, and
              time horizon.
            </p>
          </div>

          <div
            data-ocid="retirement.instruments.list"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {INSTRUMENTS.map((inst, idx) => (
              <motion.div
                key={inst.name}
                data-ocid={`retirement.instruments.item.${idx + 1}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-5 shadow-card flex flex-col gap-3 hover:shadow-card-hover transition-shadow"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="font-display font-bold text-xl text-primary">
                      {inst.name}
                    </div>
                    <div className="text-sm text-muted-foreground leading-tight">
                      {inst.fullName}
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className={`text-xs font-bold shrink-0 border-0 ${inst.taxColor}`}
                  >
                    {inst.taxStatus}
                  </Badge>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {inst.description}
                </p>

                <div className="flex items-center gap-2 mt-auto pt-3 border-t border-border">
                  <Sprout className="h-4 w-4 text-green-600 shrink-0" />
                  <span className="text-sm font-semibold text-foreground">
                    {inst.benefit}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 text-center text-xs text-muted-foreground">
            <span className="font-semibold">Tax Status Key: </span>
            EEE = Exempt-Exempt-Exempt (contribution, growth, maturity all
            tax-free) &middot; EET = contribution &amp; growth exempt, maturity
            partly taxable &middot; ELSS* = Long-term capital gains above ₹1L
            taxed at 10%
          </div>
        </motion.section>
      </div>
    </div>
  );
}
