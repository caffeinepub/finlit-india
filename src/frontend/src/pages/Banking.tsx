import {
  AlertCircle,
  BadgeCheck,
  Banknote,
  CreditCard,
  Globe,
  Landmark,
  Lock,
  Percent,
  Smartphone,
  UserCheck,
} from "lucide-react";
import { motion } from "motion/react";
import { PageHeader } from "../components/common/PageHeader";

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
    desc: "Lock a lump sum for a fixed period (7 days–10 years). Earns 5–8% p.a. DICGC insured up to ₹5 lakh.",
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
  "PAN Card (for transactions above ₹50,000)",
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
    desc: "Spend directly from your bank balance. Works online and offline. No debt incurred — you spend what you have.",
    icon: BadgeCheck,
    color: "text-green-600",
    bg: "bg-green-100 dark:bg-green-900/30",
  },
  {
    title: "Credit Card",
    desc: "Borrow from the bank and repay later. Interest-free if paid in full by due date. ~36–42% interest if you pay minimum only.",
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
  },
  {
    bank: "HDFC",
    app: "HDFC NetBanking / MyApps",
    feature: "Fast transfers, credit card management",
  },
  {
    bank: "ICICI",
    app: "iMobile Pay",
    feature: "Works even for non-ICICI customers",
  },
  {
    bank: "Kotak",
    app: "Kotak Mobile Banking",
    feature: "811 zero-balance account via app",
  },
  {
    bank: "All Banks",
    app: "BHIM App",
    feature: "RBI-backed UPI app for all banks",
  },
];

export default function Banking() {
  return (
    <div>
      <PageHeader
        title="Banking System in India"
        subtitle="Understanding bank accounts, cards, interest rates, and digital banking — your gateway to financial inclusion"
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

          {/* Account Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              Types of Bank Accounts
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
              How to Open a Bank Account
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
                    "₹10,000 overdraft facility",
                    "Accident insurance of ₹2 lakh",
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
              ATM, Debit Card & Credit Card
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
              Net Banking & Mobile Banking
            </h2>
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="flex items-center gap-3 p-4 border-b border-border bg-muted/30">
                <Smartphone className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground text-sm">
                  Popular Banking Apps in India
                </span>
              </div>
              <div className="divide-y divide-border">
                {BANKING_APPS.map((row) => (
                  <div
                    key={row.app}
                    className="grid grid-cols-3 gap-4 px-4 py-3 text-sm"
                  >
                    <span className="font-medium text-foreground">
                      {row.bank}
                    </span>
                    <span className="text-primary font-medium">{row.app}</span>
                    <span className="text-muted-foreground">{row.feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl flex gap-3">
              <Globe className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Security tip:</strong> Always use official bank apps
                downloaded from Play Store / App Store. Enable 2-factor
                authentication. Never share OTP or password with anyone —
                including someone claiming to be from the bank.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
