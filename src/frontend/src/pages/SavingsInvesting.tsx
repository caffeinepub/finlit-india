import {
  BarChart3,
  CheckCircle2,
  Coins,
  ExternalLink,
  Gem,
  Landmark,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";
import { PageHeader } from "../components/common/PageHeader";
import { useLanguage } from "../contexts/LanguageContext";

const INVESTMENT_TYPES = [
  {
    title: "Fixed Deposits (FD)",
    icon: Landmark,
    color: "text-blue-600",
    bg: "bg-blue-100 dark:bg-blue-900/30",
    risk: "Very Low",
    riskColor: "text-green-600",
    returns: "5–8% p.a.",
    points: [
      "Capital fully protected",
      "DICGC insured up to ₹5 lakh",
      "Lock-in period: 7 days–10 years",
      "Premature withdrawal allowed (with penalty)",
      "Best for: Emergency fund, short-term goals",
    ],
    link: { label: "Open FD via SBI YONO", url: "https://www.onlinesbi.sbi/" },
  },
  {
    title: "Mutual Funds",
    icon: BarChart3,
    color: "text-purple-600",
    bg: "bg-purple-100 dark:bg-purple-900/30",
    risk: "Low–High",
    riskColor: "text-yellow-600",
    returns: "8–15% p.a.",
    points: [
      "Pooled investment managed by experts",
      "Start SIP from ₹500/month",
      "Regulated by SEBI",
      "Equity, debt, hybrid options",
      "Best for: Wealth building, tax saving (ELSS)",
    ],
    link: { label: "Explore on AMFI India", url: "https://www.amfiindia.com" },
  },
  {
    title: "Stocks (Equities)",
    icon: TrendingUp,
    color: "text-red-600",
    bg: "bg-red-100 dark:bg-red-900/30",
    risk: "High",
    riskColor: "text-red-600",
    returns: "10–20%+ p.a.",
    points: [
      "Own a share of a listed company",
      "Traded on BSE and NSE",
      "High risk, high reward potential",
      "Requires research & patience",
      "Best for: Long-term wealth creation (10+ years)",
    ],
    link: { label: "NSE India (Official)", url: "https://www.nseindia.com" },
  },
  {
    title: "Gold Investment",
    icon: Coins,
    color: "text-yellow-600",
    bg: "bg-yellow-100 dark:bg-yellow-900/30",
    risk: "Medium",
    riskColor: "text-orange-600",
    returns: "8–10% p.a. (long-term)",
    points: [
      "Traditional Indian safe-haven asset",
      "Sovereign Gold Bonds: +2.5% extra interest",
      "Digital gold via apps (no storage risk)",
      "Gold ETFs on stock exchange",
      "Best for: Hedge against inflation",
    ],
    link: {
      label: "Sovereign Gold Bond — RBI",
      url: "https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx",
    },
  },
];

const RISK_LADDER = [
  { level: "Lowest Risk", type: "Savings Account / FD", color: "bg-green-500" },
  { level: "Low Risk", type: "Government Bonds / PPF", color: "bg-lime-500" },
  { level: "Low–Medium", type: "Debt Mutual Funds", color: "bg-yellow-400" },
  { level: "Medium", type: "Hybrid / Balanced Funds", color: "bg-orange-400" },
  { level: "High", type: "Equity Mutual Funds", color: "bg-red-500" },
  {
    level: "Highest Risk",
    type: "Direct Stocks / Crypto",
    color: "bg-red-700",
  },
];

const OFFICIAL_RESOURCES = [
  {
    name: "SEBI — Securities Regulator",
    desc: "Investor education, mutual fund regulations, and complaint portal",
    url: "https://www.sebi.gov.in",
    badge: "Regulator",
    badgeColor:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  },
  {
    name: "AMFI India — Mutual Funds",
    desc: "Check fund NAV, SIP calculator, distributor info for all SEBI-registered funds",
    url: "https://www.amfiindia.com",
    badge: "Funds",
    badgeColor:
      "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  },
  {
    name: "NSE India — Stock Exchange",
    desc: "Live market data, company financials, and investor resources from NSE",
    url: "https://www.nseindia.com",
    badge: "Stocks",
    badgeColor: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  },
  {
    name: "BSE India — Stock Exchange",
    desc: "India's oldest stock exchange — market data, IPOs, and investor portal",
    url: "https://www.bseindia.com",
    badge: "Stocks",
    badgeColor: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  },
  {
    name: "RBI — Sovereign Gold Bond",
    desc: "Government-backed gold bonds with 2.5% extra annual interest",
    url: "https://www.rbi.org.in",
    badge: "Gold",
    badgeColor:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
  },
  {
    name: "PPF / NPS — NSDL Portal",
    desc: "Open and manage your Public Provident Fund and National Pension Scheme",
    url: "https://npscra.nsdl.co.in",
    badge: "Retirement",
    badgeColor:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  },
  {
    name: "MF Central — One Platform",
    desc: "Single platform for all mutual fund transactions, CAS, and folio consolidation",
    url: "https://www.mfcentral.com",
    badge: "Funds",
    badgeColor:
      "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  },
  {
    name: "DICGC — Deposit Insurance",
    desc: "Check insurance coverage on your bank deposits (up to ₹5 lakh)",
    url: "https://www.dicgc.org.in",
    badge: "Insurance",
    badgeColor:
      "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
  },
];

export default function SavingsInvesting() {
  const { t } = useLanguage();

  const monthly = 5000;
  const rate = 0.01;
  const n = 240;
  const futureValue = Math.round(
    monthly * (((1 + rate) ** n - 1) / rate) * (1 + rate),
  );
  const invested = monthly * n;
  const gains = futureValue - invested;

  return (
    <div>
      <PageHeader
        title={t.savings.title}
        subtitle={t.savings.subtitle}
        badge="Investing"
      />

      <section className="py-10">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Real Story */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold bg-emerald-100 dark:bg-emerald-800/40 text-emerald-700 dark:text-emerald-300 px-2.5 py-0.5 rounded-full">
                {t.common.realLifeStory}
              </span>
            </div>
            <h3 className="font-display font-semibold text-emerald-900 dark:text-emerald-200 mb-2 text-sm">
              {t.savings.realStoryTitle}
            </h3>
            <p className="text-emerald-800 dark:text-emerald-300 text-sm leading-relaxed">
              {t.savings.realStoryDesc}
            </p>
          </motion.div>

          {/* Saving vs Investing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              {t.savings.savingVsInvestingTitle}
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
                <h3 className="font-display font-bold text-blue-800 dark:text-blue-200 text-lg mb-3">
                  Saving
                </h3>
                <ul className="space-y-2">
                  {[
                    "Keeping money safe and accessible",
                    "Goal: Security and short-term needs",
                    "Low risk, low return (3–6%)",
                    "Example: Emergency fund in savings account",
                    "Timeframe: 0–3 years",
                  ].map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-sm text-blue-800 dark:text-blue-200"
                    >
                      <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
                <h3 className="font-display font-bold text-green-800 dark:text-green-200 text-lg mb-3">
                  Investing
                </h3>
                <ul className="space-y-2">
                  {[
                    "Putting money to work to generate returns",
                    "Goal: Wealth creation and beating inflation",
                    "Moderate to high risk, higher returns (8–20%)",
                    "Example: SIP in equity mutual fund",
                    "Timeframe: 3–30+ years",
                  ].map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-sm text-green-800 dark:text-green-200"
                    >
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Investment Types with links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              {t.savings.investmentTypesTitle}
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {INVESTMENT_TYPES.map((inv, i) => (
                <motion.div
                  key={inv.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-5 shadow-card flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`rounded-xl p-3 ${inv.bg}`}>
                      <inv.icon className={`h-5 w-5 ${inv.color}`} />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground text-sm">
                        {inv.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-medium ${inv.riskColor}`}
                        >
                          Risk: {inv.risk}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          | Returns: {inv.returns}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-1 flex-1">
                    {inv.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={inv.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    <ExternalLink className="h-3 w-3" /> {inv.link.label}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Risk Ladder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              {t.savings.riskLadderTitle}
            </h2>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="space-y-2">
                {RISK_LADDER.map((r, i) => (
                  <div key={r.type} className="flex items-center gap-4">
                    <div className="w-28 text-right shrink-0">
                      <span className="text-xs text-muted-foreground">
                        {r.level}
                      </span>
                    </div>
                    <div
                      className={`${r.color} rounded h-8 flex items-center px-3 transition-all`}
                      style={{ width: `${(i + 1) * 13 + 10}%` }}
                    >
                      <span className="text-white text-xs font-medium whitespace-nowrap">
                        {r.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Higher risk investments typically offer higher potential returns
                over long periods. Match your investment to your risk tolerance
                and time horizon.
              </p>
            </div>
          </motion.div>

          {/* Power of Compounding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              {t.savings.compoundingTitle}
            </h2>
            <div className="bg-card border border-border rounded-xl p-6 mb-6">
              <div className="flex items-start gap-3 mb-6">
                <div className="bg-primary/10 rounded-xl p-3">
                  <Gem className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">
                    Example: ₹5,000/month SIP at 12% for 20 years
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    See how time and consistency create wealth
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 text-center">
                  <div className="font-display text-2xl font-bold text-blue-600">
                    ₹{(invested / 100000).toFixed(1)}L
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Amount Invested
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 text-center">
                  <div className="font-display text-2xl font-bold text-green-600">
                    ₹{(gains / 100000).toFixed(1)}L
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Returns Earned
                  </div>
                </div>
                <div className="bg-primary/10 rounded-xl p-4 text-center">
                  <div className="font-display text-2xl font-bold text-primary">
                    ₹{(futureValue / 100000).toFixed(1)}L
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Final Corpus
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 flex gap-3 mb-4">
              <Lightbulb className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 dark:text-amber-200">
                <strong>Key Principle:</strong> Start early, invest regularly,
                stay patient. A 25-year-old investing ₹5,000/month will have 3×
                more than a 35-year-old investing the same amount — just because
                of 10 extra years of compounding.
              </p>
            </div>
            <div className="p-5 bg-primary/5 border border-primary/20 rounded-xl flex gap-3">
              <Lightbulb className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">
                  {t.savings.tryTodayLabel}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t.savings.tryTodayDesc}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Official Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              Official Portals & Resources
            </h2>
            <p className="text-sm text-muted-foreground mb-5">
              Trusted government and SEBI-regulated platforms for all your
              savings and investment needs.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {OFFICIAL_RESOURCES.map((res) => (
                <a
                  key={res.name}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card border border-border hover:border-primary/40 rounded-xl p-4 flex items-start gap-3 transition-all hover:shadow-md"
                >
                  <div className="bg-primary/10 rounded-lg p-2 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                        {res.name}
                      </h3>
                      <span
                        className={`text-xs px-1.5 py-0.5 rounded font-medium shrink-0 ${res.badgeColor}`}
                      >
                        {res.badge}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {res.desc}
                    </p>
                    <p className="text-xs text-primary mt-1.5 font-medium">
                      {res.url.replace("https://", "")}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
