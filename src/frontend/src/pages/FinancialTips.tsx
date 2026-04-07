import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  BadgeIndianRupee,
  BarChart2,
  BookOpen,
  CreditCard,
  Filter,
  HeartPulse,
  Lightbulb,
  PiggyBank,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { PageHeader } from "../components/common/PageHeader";
import { useLanguage } from "../contexts/LanguageContext";

type Category = "All" | "Savings" | "Investing" | "Insurance" | "Tax" | "Debt";
type Difficulty = "Beginner" | "Intermediate" | "Advanced";

interface Tip {
  id: number;
  category: Exclude<Category, "All">;
  title: string;
  description: string;
  difficulty: Difficulty;
  icon: React.ReactNode;
  accent: string;
  badgeColor: string;
  tryToday: string;
}

const TIPS: Tip[] = [
  {
    id: 1,
    category: "Savings",
    title: "Build a 6-Month Emergency Fund First",
    description:
      "Before investing anywhere, build a liquid emergency fund covering 6 months of expenses in a high-yield savings account or liquid mutual fund. India's job market volatility makes this non-negotiable. Calculate your monthly fixed costs (rent, EMIs, groceries, utilities) and multiply by 6.",
    difficulty: "Beginner",
    icon: <PiggyBank className="h-5 w-5" />,
    accent: "border-l-emerald-500",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
    tryToday:
      "Calculate your monthly expenses. Multiply by 6. Open a separate savings account today and set a monthly auto-transfer goal to hit this number in 12 months.",
  },
  {
    id: 2,
    category: "Savings",
    title: "Automate Savings on Payday (Pay Yourself First)",
    description:
      "Set up an auto-debit the same day your salary arrives. Transfer a fixed amount directly to a RD, PPF, or liquid fund before you spend a single rupee. Even \u20b92,000/month, started at 25, compounds to \u20b927 lakh by retirement.",
    difficulty: "Beginner",
    icon: <Zap className="h-5 w-5" />,
    accent: "border-l-emerald-500",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
    tryToday:
      "Log in to your bank app. Set a standing instruction for the 2nd of every month to auto-transfer \u20b92,000 to a recurring deposit. Takes under 5 minutes.",
  },
  {
    id: 3,
    category: "Savings",
    title: "Avoid Lifestyle Inflation at Every Raise",
    description:
      "Every time income rises, expenses rise in lockstep for most Indians. Counter it: when you get a raise, automatically increase your SIP by at least 50% of the increment. If you earn \u20b95,000 more, route \u20b92,500 directly to investments.",
    difficulty: "Intermediate",
    icon: <AlertTriangle className="h-5 w-5" />,
    accent: "border-l-emerald-500",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
    tryToday:
      "Next time you receive a raise, open your mutual fund app before you spend the extra. Increase your SIP by at least half the raise amount that same day.",
  },
  {
    id: 4,
    category: "Savings",
    title: "Use Recurring Deposits for Goal-Based Saving",
    description:
      "Recurring Deposits (RDs) are the discipline engine for short-term goals. Rates at 6\u20137.5% beat savings accounts, and the fixed monthly commitment makes saving a habit. Open separate RDs for each goal with its target date as the maturity date.",
    difficulty: "Beginner",
    icon: <BookOpen className="h-5 w-5" />,
    accent: "border-l-emerald-500",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
    tryToday:
      "Identify one goal (e.g., vacation in 12 months for \u20b930,000). Divide by 12 = \u20b92,500/month. Open a post office or bank RD today for that exact amount and date.",
  },
  {
    id: 5,
    category: "Investing",
    title: "Start SIP Early \u2014 Compounding Rewards Time, Not Amount",
    description:
      "\u20b95,000/month started at age 22 compounds to \u20b93.5 crore by 60 (at 12% CAGR). The same amount started at 32 yields only \u20b91.1 crore \u2014 a \u20b92.4 crore penalty for 10 years of delay. Even \u20b9500/month matters. Start today.",
    difficulty: "Beginner",
    icon: <TrendingUp className="h-5 w-5" />,
    accent: "border-l-blue-500",
    badgeColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    tryToday:
      "Download Groww or Zerodha Coin. Complete KYC with PAN + Aadhaar. Start a \u20b9500/month SIP in Nifty 50 Index Fund. Entire process under 15 minutes.",
  },
  {
    id: 6,
    category: "Investing",
    title: "Choose Index Funds Over Active Funds as a Beginner",
    description:
      "Over 80% of large-cap active mutual funds in India failed to beat their benchmark index over 10 years (SPIVA data). Nifty 50 index funds have expense ratios as low as 0.06% vs 1\u20132% for active funds. For most investors, boring index funds beat exciting active fund stories.",
    difficulty: "Intermediate",
    icon: <BarChart2 className="h-5 w-5" />,
    accent: "border-l-blue-500",
    badgeColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    tryToday:
      'Search "Nifty 50 Index Fund" on any mutual fund app. Compare expense ratios. Start a SIP in the one with the lowest expense ratio (typically UTI or HDFC Nifty 50).',
  },
  {
    id: 7,
    category: "Investing",
    title: "Never Put Short-Term Money in Equity",
    description:
      "Any money needed in the next 3 years must NOT be in equity mutual funds or stocks. Markets can remain down for 3\u20135 years. For 1-year goals: liquid/ultra-short funds. For 1\u20133 years: short-duration debt funds. For 3+ years: equity SIPs.",
    difficulty: "Beginner",
    icon: <AlertTriangle className="h-5 w-5" />,
    accent: "border-l-blue-500",
    badgeColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    tryToday:
      "List all your financial goals with timelines. For any goal under 3 years, move that money out of equity funds into a liquid or short-duration debt fund today.",
  },
  {
    id: 8,
    category: "Investing",
    title: "Diversify Across Equity, Debt, and Gold",
    description:
      "A classic Indian all-weather portfolio: 60% equity (Nifty 500 index fund), 30% debt (PPF + short-duration fund), 10% gold (Sovereign Gold Bonds \u2014 SGBs earn 2.5% annual interest + price appreciation). Rebalance annually.",
    difficulty: "Intermediate",
    icon: <Lightbulb className="h-5 w-5" />,
    accent: "border-l-blue-500",
    badgeColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    tryToday:
      "Check if you have any gold SGB allocation. If not, visit RBI Retail Direct or your bank's netbanking to buy SGBs when the next tranche opens \u2014 they earn 2.5% interest unlike physical gold.",
  },
  {
    id: 9,
    category: "Investing",
    title: "Use ELSS Funds for Tax Saving + Wealth Building",
    description:
      "ELSS funds give you \u20b91.5 lakh 80C deduction AND equity market returns (historical 12\u201315% CAGR) with the shortest 3-year lock-in of all 80C options. Over 20 years, ELSS typically outperforms PPF by 4\u20136% annually \u2014 a massive wealth gap.",
    difficulty: "Intermediate",
    icon: <BadgeIndianRupee className="h-5 w-5" />,
    accent: "border-l-blue-500",
    badgeColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    tryToday:
      "Check how much you've invested under 80C this financial year. If under \u20b91.5 lakh, start an ELSS SIP for the remaining months to use up the limit before March 31.",
  },
  {
    id: 10,
    category: "Insurance",
    title: "Never Mix Insurance and Investment (LIC Trap)",
    description:
      "Traditional endowment plans offer 4\u20135% returns \u2014 below inflation \u2014 while keeping you locked in for 20 years. The correct approach: buy a pure term plan for life cover (10x annual income) and invest the saved premium difference in index funds. Same premium, 4x the life cover, and 3x the wealth.",
    difficulty: "Beginner",
    icon: <ShieldCheck className="h-5 w-5" />,
    accent: "border-l-orange-500",
    badgeColor:
      "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
    tryToday:
      "Check your current LIC or endowment policy. Calculate its IRR (internal rate of return). If it's below 6%, seriously consider surrendering it and reinvesting in term + index fund combo.",
  },
  {
    id: 11,
    category: "Insurance",
    title: "Buy Term Insurance Before Age 30",
    description:
      "A \u20b91 crore term plan costs \u20b9700\u2013900/month at age 25 but \u20b91,800\u20132,500/month at age 35. You're locked in at the age-of-purchase premium for the entire policy. Waiting a decade costs \u20b95\u20137 lakh in extra cumulative premiums for the same cover.",
    difficulty: "Beginner",
    icon: <ShieldCheck className="h-5 w-5" />,
    accent: "border-l-orange-500",
    badgeColor:
      "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
    tryToday:
      "Visit PolicyBazaar or Ditto Insurance. Get a quote for a \u20b91 crore term plan. Compare premiums. If under 30, your premium will likely be under \u20b9800/month.",
  },
  {
    id: 12,
    category: "Insurance",
    title: "Don't Rely on Employer Health Insurance Alone",
    description:
      "Corporate group health insurance stops the day you resign, retire, or get laid off. Buy a personal family floater of \u20b95\u201310 lakh independently. Add a super top-up plan (\u20b950 lakh cover for \u20b93,000\u20135,000/year) for catastrophic coverage.",
    difficulty: "Beginner",
    icon: <HeartPulse className="h-5 w-5" />,
    accent: "border-l-orange-500",
    badgeColor:
      "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
    tryToday:
      "Check your current health insurance cover. If it's only from your employer, get quotes for a personal \u20b95 lakh family floater on PolicyBazaar. Typically \u20b97,000\u201312,000/year for a family of 3.",
  },
  {
    id: 13,
    category: "Tax",
    title: "Fully Exhaust the \u20b91.5 Lakh 80C Limit Every Year",
    description:
      "\u20b91.5 lakh in 80C deductions saves \u20b931,200\u201346,800 in tax annually (30% slab). Best instruments: ELSS SIP, EPF, PPF, and home loan principal. Don't let this go to waste \u2014 even partial use costs you real money.",
    difficulty: "Beginner",
    icon: <BadgeIndianRupee className="h-5 w-5" />,
    accent: "border-l-violet-500",
    badgeColor:
      "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300",
    tryToday:
      "Open your Form 16 or check your EPF statement. Add up all 80C investments. If under \u20b91.5 lakh, calculate the gap and start an ELSS SIP to fill it before March 31.",
  },
  {
    id: 14,
    category: "Tax",
    title: "Claim Extra \u20b950,000 NPS Deduction Under 80CCD(1B)",
    description:
      "Section 80CCD(1B) allows an additional \u20b950,000 NPS contribution deduction OVER and ABOVE the \u20b91.5 lakh 80C limit. In a 30% tax slab, that's \u20b915,600 extra tax saved every year. NPS has the lowest fund management charges in India (0.01%).",
    difficulty: "Intermediate",
    icon: <TrendingUp className="h-5 w-5" />,
    accent: "border-l-violet-500",
    badgeColor:
      "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300",
    tryToday:
      "Visit eNPS portal (enps.nsdl.com). Open an NPS Tier-1 account with your PAN and Aadhaar. Deposit \u20b950,000 before March 31 to save \u20b915,600 in taxes this year.",
  },
  {
    id: 15,
    category: "Tax",
    title: "File ITR Even if Income is Below Taxable Limit",
    description:
      "ITR filings are your financial proof-of-life for visa applications, home loans, and insurance policies. Banks use 2\u20133 years of ITR for home loan approval. A zero-tax ITR still gets you documented income proof and immunity from future scrutiny notices.",
    difficulty: "Beginner",
    icon: <BookOpen className="h-5 w-5" />,
    accent: "border-l-violet-500",
    badgeColor:
      "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300",
    tryToday:
      "Visit incometax.gov.in. Log in with PAN. Use the pre-filled ITR form. For most salaried employees, filing takes under 15 minutes and is completely free.",
  },
  {
    id: 16,
    category: "Debt",
    title: "Use the Avalanche Method to Eliminate Debt Fastest",
    description:
      "List all debts by interest rate (highest first). Pay minimums on everything, then throw every extra rupee at the highest-interest debt. Credit card debt at 36\u201342% APR must die first, then personal loans, then car loans, finally home loans.",
    difficulty: "Intermediate",
    icon: <CreditCard className="h-5 w-5" />,
    accent: "border-l-rose-500",
    badgeColor:
      "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300",
    tryToday:
      "Write down all your debts with their interest rates. Sort highest to lowest. Make only minimum payments on all except the top one \u2014 throw every extra rupee at that one this month.",
  },
  {
    id: 17,
    category: "Debt",
    title: "Never Take Personal Loans for Depreciating Assets",
    description:
      "A personal loan at 18% APR for a \u20b91 lakh phone costs \u20b91.33 lakh total over 2 years. That phone is worth \u20b930,000 by then. Rule: only borrow for assets that appreciate (home) or generate income (business tools, education).",
    difficulty: "Beginner",
    icon: <AlertTriangle className="h-5 w-5" />,
    accent: "border-l-rose-500",
    badgeColor:
      "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300",
    tryToday:
      "If you're considering an EMI for a gadget or appliance, calculate the total cost (EMI x months). Compare to the item's resale value at end of loan. That gap is what you're overpaying.",
  },
  {
    id: 18,
    category: "Debt",
    title: "Maintain a CIBIL Score Above 750 for Best Loan Rates",
    description:
      "A 750+ CIBIL score gets home loans at 8.4\u20138.9% vs 9.5\u201310.5% for a 650 score \u2014 a difference that adds up to \u20b98\u201312 lakh in extra interest on a \u20b950 lakh loan over 20 years. Pay all EMIs and credit cards by due date.",
    difficulty: "Intermediate",
    icon: <ShieldCheck className="h-5 w-5" />,
    accent: "border-l-rose-500",
    badgeColor:
      "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300",
    tryToday:
      "Visit cibil.com and check your free annual credit report. If your score is below 700, identify the top reason (late payments, high utilization) and fix it this month.",
  },
];

const CATEGORIES: Category[] = [
  "All",
  "Savings",
  "Investing",
  "Insurance",
  "Tax",
  "Debt",
];

const CATEGORY_ICONS: Record<Exclude<Category, "All">, React.ReactNode> = {
  Savings: <PiggyBank className="h-4 w-4" />,
  Investing: <TrendingUp className="h-4 w-4" />,
  Insurance: <ShieldCheck className="h-4 w-4" />,
  Tax: <BadgeIndianRupee className="h-4 w-4" />,
  Debt: <CreditCard className="h-4 w-4" />,
};

const DIFFICULTY_COLORS: Record<Difficulty, string> = {
  Beginner:
    "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  Intermediate:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  Advanced: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
};

export default function FinancialTips() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const { t } = useLanguage();

  const filtered =
    activeCategory === "All"
      ? TIPS
      : TIPS.filter((tip) => tip.category === activeCategory);

  return (
    <>
      <PageHeader
        title={t.tips.title}
        subtitle={t.tips.subtitle}
        badge="18 Expert Tips"
      />

      {/* Category Filter Bar */}
      <section className="sticky top-16 z-30 bg-background/95 backdrop-blur border-b border-border py-3 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <Filter className="h-4 w-4 text-muted-foreground shrink-0" />
            {CATEGORIES.map((cat) => (
              <Button
                key={cat}
                data-ocid={`tips.${cat.toLowerCase()}.tab`}
                size="sm"
                variant={activeCategory === cat ? "default" : "outline"}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 flex items-center gap-1.5 transition-all min-h-[36px] ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat !== "All" &&
                  CATEGORY_ICONS[cat as Exclude<Category, "All">]}
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <motion.p
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-muted-foreground text-sm mb-6"
          >
            Showing{" "}
            <span className="font-semibold text-foreground">
              {filtered.length}
            </span>{" "}
            {filtered.length === 1 ? "tip" : "tips"}
            {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
          </motion.p>

          <div
            data-ocid="tips.list"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((tip, idx) => (
              <motion.article
                key={tip.id}
                data-ocid={`tips.item.${idx + 1}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: Math.min(idx * 0.07, 0.35),
                }}
                viewport={{ once: true }}
                className={`bg-card border border-border rounded-xl p-5 shadow-card flex flex-col gap-3 border-l-4 ${tip.accent} hover:shadow-md transition-shadow`}
              >
                {/* Top row: icon + badges */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center justify-center rounded-lg p-2 ${tip.badgeColor}`}
                    >
                      {tip.icon}
                    </span>
                    <Badge
                      variant="secondary"
                      className={`text-xs font-medium ${tip.badgeColor} border-0`}
                    >
                      {tip.category}
                    </Badge>
                  </div>
                  <span
                    className={`inline-block text-[11px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${DIFFICULTY_COLORS[tip.difficulty]}`}
                  >
                    {tip.difficulty}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-semibold text-foreground text-base leading-snug">
                  {tip.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {tip.description}
                </p>

                {/* Try This Today box */}
                <div className="mt-auto pt-3 border-t border-border">
                  <div className="bg-primary/5 rounded-lg p-3 flex gap-2">
                    <Lightbulb className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[11px] font-semibold text-primary mb-0.5">
                        {t.tips.tryTodayLabel}
                      </p>
                      <p className="text-xs text-muted-foreground leading-snug">
                        {tip.tryToday}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div
              data-ocid="tips.empty_state"
              className="text-center py-20 text-muted-foreground"
            >
              <Lightbulb className="h-10 w-10 mx-auto mb-3 opacity-30" />
              <p className="text-base font-medium">
                No tips in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-14 bg-navy-dark">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
              {t.tips.ctaTitle}
            </h2>
            <p className="text-white/70 mb-8">
              Use our Budget Planner and Investment Calculator to apply these
              strategies to your own numbers.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/tools/budget"
                className="bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Open Budget Planner
              </a>
              <a
                href="/tools/investment"
                className="bg-white/10 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors border border-white/20"
              >
                Investment Calculator
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
