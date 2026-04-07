import {
  AlertCircle,
  BadgeCheck,
  Banknote,
  CreditCard,
  ExternalLink,
  Globe,
  Landmark,
  Lightbulb,
  Lock,
  Percent,
  Smartphone,
  UserCheck,
} from "lucide-react";
import { motion } from "motion/react";
import { PageHeader } from "../components/common/PageHeader";
import { useLanguage } from "../contexts/LanguageContext";

const ACCOUNT_TYPES = [
  {
    title: "Savings Account",
    desc: "For individuals & salaried employees. Earns interest of 3–4% p.a. Best for daily transactions and building savings.",
    icon: Banknote,
    color: "text-blue-600",
    bg: "bg-blue-100 dark:bg-blue-900/30",
    tag: "Most Common",
  },
  {
    title: "Current Account",
    desc: "For businesses & traders. No interest earned but unlimited transactions allowed. Higher minimum balance required.",
    icon: Landmark,
    color: "text-purple-600",
    bg: "bg-purple-100 dark:bg-purple-900/30",
    tag: "For Business",
  },
  {
    title: "Fixed Deposit (FD)",
    desc: "Lock a lump sum for a fixed period (7 days–10 years). Earns 5–8% p.a. DICGC insured up to \u20b95 lakh.",
    icon: Lock,
    color: "text-green-600",
    bg: "bg-green-100 dark:bg-green-900/30",
    tag: "High Interest",
  },
  {
    title: "Recurring Deposit (RD)",
    desc: "Deposit a fixed amount every month for a chosen tenure. Builds savings discipline. Interest similar to FD.",
    icon: Percent,
    color: "text-orange-600",
    bg: "bg-orange-100 dark:bg-orange-900/30",
    tag: "Monthly Savings",
  },
];

const DOCS_REQUIRED = [
  "Aadhaar Card (mandatory for KYC)",
  "PAN Card (for transactions above \u20b950,000)",
  "Recent passport-size photograph",
  "Address proof (Aadhaar / Utility bill)",
  "Mobile number linked to Aadhaar",
];

const CARD_TYPES = [
  {
    title: "ATM Card",
    desc: "Use at ATMs to withdraw cash. Free 5 transactions/month at own bank ATM, 3 at other banks.",
    icon: CreditCard,
    color: "text-blue-600",
    bg: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    title: "Debit Card",
    desc: "Spend directly from your bank balance. Works online and offline. No debt incurred \u2014 you spend what you have.",
    icon: BadgeCheck,
    color: "text-green-600",
    bg: "bg-green-100 dark:bg-green-900/30",
  },
  {
    title: "Credit Card",
    desc: "Borrow from the bank and repay later. Interest-free if paid in full by due date. ~36\u201342% interest if you pay minimum only.",
    icon: AlertCircle,
    color: "text-red-600",
    bg: "bg-red-100 dark:bg-red-900/30",
  },
];

const BANKING_APPS = [
  {
    bank: "SBI",
    app: "YONO SBI",
    feature: "Full banking + investments + loans",
    url: "https://www.onlinesbi.sbi/",
  },
  {
    bank: "HDFC",
    app: "HDFC NetBanking / MyApps",
    feature: "Fast transfers, credit card management",
    url: "https://netbanking.hdfcbank.com/",
  },
  {
    bank: "ICICI",
    app: "iMobile Pay",
    feature: "Works even for non-ICICI customers",
    url: "https://www.icicibank.com/personal-banking/insta-banking/mobile-banking/imobile-pay",
  },
  {
    bank: "Kotak",
    app: "Kotak Mobile Banking",
    feature: "811 zero-balance account via app",
    url: "https://www.kotak.com/en/personal-banking/digital-banking/811.html",
  },
  {
    bank: "All Banks",
    app: "BHIM App",
    feature: "RBI-backed UPI app for all banks",
    url: "https://www.bhimupi.org.in/",
  },
];

export default function Banking() {
  const { t } = useLanguage();

  return (
    <div>
      <PageHeader
        title={t.banking.title}
        subtitle={t.banking.subtitle}
        badge="Banking"
      />

      {/* Hero stat */}
      <section className="py-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-primary/10 border border-primary/20 rounded-2xl p-6 mb-10 flex flex-col sm:flex-row gap-4 items-center"
          >
            <div className="text-4xl font-bold text-primary font-display">
              50 Cr+
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Jan Dhan Accounts Opened
              </p>
              <p className="text-sm text-muted-foreground">
                India now has 4 major types of bank accounts designed for every
                need. Having a bank account is the first step to financial
                security.
              </p>
            </div>
          </motion.div>

          {/* Real Life Story */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-10 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold bg-emerald-100 dark:bg-emerald-800/40 text-emerald-700 dark:text-emerald-300 px-2.5 py-0.5 rounded-full">
                {t.common.realLifeStory}
              </span>
            </div>
            <h3 className="font-display font-semibold text-emerald-900 dark:text-emerald-200 mb-2 text-sm">
              {t.banking.realStoryTitle}
            </h3>
            <p className="text-emerald-800 dark:text-emerald-300 text-sm leading-relaxed">
              {t.banking.realStoryDesc}
            </p>
          </motion.div>

          {/* Account Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              {t.banking.accountTypesTitle}
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {ACCOUNT_TYPES.map((acc, i) => (
                <motion.div
                  key={acc.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-5 shadow-card"
                >
                  <div className="flex items-start gap-4">
                    <div className={`rounded-xl p-3 shrink-0 ${acc.bg}`}>
                      <acc.icon className={`h-6 w-6 ${acc.color}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display font-semibold text-foreground">
                          {acc.title}
                        </h3>
                        <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                          {acc.tag}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {acc.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* How to open */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              {t.banking.howToOpenTitle}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-display font-semibold text-foreground mb-4">
                  Documents Required (KYC)
                </h3>
                <ul className="space-y-2">
                  {DOCS_REQUIRED.map((doc) => (
                    <li
                      key={doc}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <UserCheck className="h-4 w-4 text-green-500 shrink-0" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-display font-semibold text-foreground mb-4">
                  Zero-Balance Account (PMJDY)
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Under Pradhan Mantri Jan Dhan Yojana, any Indian citizen can
                  open a zero-balance savings account at any bank.
                </p>
                <ul className="space-y-2">
                  {[
                    "No minimum balance required",
                    "Free RuPay debit card",
                    "\u20b910,000 overdraft facility",
                    "Accident insurance of \u20b92 lakh",
                    "Direct benefit transfer eligible",
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <BadgeCheck className="h-4 w-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              {t.banking.cardsTitle}
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {CARD_TYPES.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-5 shadow-card"
                >
                  <div className={`inline-flex rounded-xl p-3 mb-3 ${c.bg}`}>
                    <c.icon className={`h-6 w-6 ${c.color}`} />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {c.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Net banking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              {t.banking.netBankingTitle}
            </h2>

            {/* Mobile-friendly card list */}
            <div className="space-y-3 mb-4">
              {BANKING_APPS.map((row, i) => (
                <motion.div
                  key={row.app}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl px-4 py-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="bg-primary/10 rounded-lg p-2 shrink-0">
                      <Smartphone className="h-4 w-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-foreground text-sm">
                          {row.bank}
                        </span>
                        <a
                          href={row.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:underline"
                        >
                          {row.app}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {row.feature}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl flex gap-3">
              <Globe className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Security tip:</strong> Always use official bank apps
                downloaded from Play Store / App Store. Enable 2-factor
                authentication. Never share OTP or password with anyone.
              </p>
            </div>

            {/* Try This Today */}
            <div className="mt-6 p-5 bg-primary/5 border border-primary/20 rounded-xl flex gap-3">
              <Lightbulb className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">
                  {t.banking.tryTodayLabel}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t.banking.tryTodayDesc}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
