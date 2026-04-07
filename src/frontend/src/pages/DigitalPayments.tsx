import {
  ArrowRightLeft,
  ExternalLink,
  QrCode,
  Shield,
  Smartphone,
  Wallet,
  Wifi,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { PageHeader } from "../components/common/PageHeader";

const APPS = [
  {
    name: "PhonePe",
    tagline: "India's #1 UPI app",
    color: "bg-purple-100 dark:bg-purple-900/30",
    textColor: "text-purple-700 dark:text-purple-300",
    borderColor: "border-purple-200 dark:border-purple-700",
    feature: "Market leader · Insurance & gold buying built-in · Mutual funds",
    users: "500M+ users",
    url: "https://www.phonepe.com",
    playStore: "https://play.google.com/store/apps/details?id=com.phonepe.app",
    appStore:
      "https://apps.apple.com/in/app/phonepe-upi-payment-app/id1170893582",
  },
  {
    name: "Google Pay",
    tagline: "Simple, secure, fast",
    color: "bg-blue-100 dark:bg-blue-900/30",
    textColor: "text-blue-700 dark:text-blue-300",
    borderColor: "border-blue-200 dark:border-blue-700",
    feature: "Simple UX · Rewards & cashback · Bill payments",
    users: "150M+ users",
    url: "https://pay.google.com/intl/en_in/about/",
    playStore:
      "https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.paisa.user",
    appStore: "https://apps.apple.com/in/app/google-pay-save-pay/id1193357600",
  },
  {
    name: "Paytm",
    tagline: "Wallet + UPI pioneer",
    color: "bg-sky-100 dark:bg-sky-900/30",
    textColor: "text-sky-700 dark:text-sky-300",
    borderColor: "border-sky-200 dark:border-sky-700",
    feature: "Wallet + UPI · First mover in digital payments · Recharges",
    users: "300M+ users",
    url: "https://paytm.com",
    playStore: "https://play.google.com/store/apps/details?id=net.one97.paytm",
    appStore:
      "https://apps.apple.com/in/app/paytm-secure-upi-payments/id473941634",
  },
  {
    name: "BHIM",
    tagline: "Government-backed UPI",
    color: "bg-green-100 dark:bg-green-900/30",
    textColor: "text-green-700 dark:text-green-300",
    borderColor: "border-green-200 dark:border-green-700",
    feature: "NPCI-official · Works on basic phones · All banks supported",
    users: "NPCI Official",
    url: "https://www.bhimupi.org.in",
    playStore:
      "https://play.google.com/store/apps/details?id=in.org.npci.upiapp",
    appStore: "https://apps.apple.com/in/app/bhim/id1200315258",
  },
];

const BANKING_APPS = [
  {
    bank: "SBI",
    app: "YONO SBI",
    desc: "Full banking, investments, loans & insurance in one app",
    url: "https://www.onlinesbi.sbi/",
    color: "text-blue-700 dark:text-blue-300",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-200 dark:border-blue-800",
  },
  {
    bank: "HDFC",
    app: "HDFC NetBanking",
    desc: "Fast transfers, credit card management & investments",
    url: "https://netbanking.hdfcbank.com/",
    color: "text-red-700 dark:text-red-300",
    bg: "bg-red-50 dark:bg-red-900/20",
    border: "border-red-200 dark:border-red-800",
  },
  {
    bank: "ICICI",
    app: "iMobile Pay",
    desc: "Works even for non-ICICI customers · Open account instantly",
    url: "https://www.icicibank.com/personal-banking/insta-banking/mobile-banking/imobile-pay",
    color: "text-orange-700 dark:text-orange-300",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    border: "border-orange-200 dark:border-orange-800",
  },
  {
    bank: "Kotak",
    app: "Kotak 811",
    desc: "Zero-balance 811 account, instant activation via app",
    url: "https://www.kotak.com/en/personal-banking/digital-banking/811.html",
    color: "text-red-800 dark:text-red-200",
    bg: "bg-rose-50 dark:bg-rose-900/20",
    border: "border-rose-200 dark:border-rose-800",
  },
];

const REGULATOR_LINKS = [
  {
    name: "NPCI — UPI Official",
    desc: "National Payments Corporation of India — the body that built UPI",
    url: "https://www.npci.org.in",
    badge: "Regulator",
  },
  {
    name: "RBI — Digital Payments",
    desc: "RBI guidelines, circular updates and payment system regulations",
    url: "https://www.rbi.org.in/Scripts/bs_viewcontent.aspx?Id=2009",
    badge: "Regulator",
  },
  {
    name: "Cyber Crime Helpline",
    desc: "Report digital payment fraud 24×7 at the national cybercrime portal",
    url: "https://cybercrime.gov.in",
    badge: "Safety",
  },
  {
    name: "Digital India",
    desc: "Government's initiative to make India a digitally empowered nation",
    url: "https://www.digitalindia.gov.in",
    badge: "Gov",
  },
];

const WALLET_VS_UPI = [
  {
    feature: "Linked to bank",
    wallet: "Optional (top-up needed)",
    upi: "✅ Always linked",
  },
  {
    feature: "Transaction limit",
    wallet: "₹10,000/month (basic KYC)",
    upi: "₹1 lakh/transaction",
  },
  {
    feature: "Charges",
    wallet: "Bank transfer fees may apply",
    upi: "Free for all users",
  },
  {
    feature: "Availability",
    wallet: "Internet required",
    upi: "24×7, even bank holidays",
  },
  {
    feature: "Merchant acceptance",
    wallet: "Limited to partner merchants",
    upi: "Any UPI QR code",
  },
];

const PAYMENT_MODES = [
  {
    mode: "NEFT",
    speed: "2–4 hours",
    limit: "No limit",
    charges: "Free (RBI mandate)",
    use: "Large transfers, batch payments",
  },
  {
    mode: "RTGS",
    speed: "Instant",
    limit: "Min ₹2 lakh",
    charges: "Free",
    use: "High-value transactions",
  },
  {
    mode: "IMPS",
    speed: "Instant 24×7",
    limit: "₹5 lakh",
    charges: "₹5–15",
    use: "Urgent transfers anytime",
  },
  {
    mode: "UPI",
    speed: "Instant 24×7",
    limit: "₹1 lakh",
    charges: "Free",
    use: "Everyday payments",
  },
];

const SAFE_TIPS = [
  "Never share OTP, PIN, or password — even with family",
  "Always check the UPI ID before sending money",
  "Use only official apps from trusted app stores",
  "Verify merchant QR before scanning (check name)",
  "Look for HTTPS on payment pages",
  "Enable transaction alerts via SMS and email",
  "Receiving money never requires entering your PIN",
  "If scammed, call 1930 (National Cyber Crime Helpline) immediately",
];

export default function DigitalPayments() {
  return (
    <div>
      <PageHeader
        title="Digital Payments & FinTech"
        subtitle="UPI, mobile wallets, QR codes, and staying safe online — India's digital payment revolution explained"
        badge="FinTech"
      />

      <section className="py-10">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* UPI explained */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 rounded-xl p-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-display text-xl font-bold text-foreground">
                  What is UPI?
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">
                  Unified Payments Interface (UPI)
                </strong>{" "}
                is a real-time payment system developed by NPCI (National
                Payments Corporation of India). It links your bank account to a
                Virtual Payment Address (VPA) like{" "}
                <code className="bg-muted px-1 rounded text-sm">
                  name@okicici
                </code>{" "}
                — making payments instant, 24×7, and free.
              </p>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { v: "₹20 Lakh Cr+", l: "Monthly UPI volume (2024)" },
                  { v: "13B+", l: "Transactions/month" },
                  { v: "Free", l: "Zero charges for users" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="bg-primary/5 rounded-xl p-3 text-center"
                  >
                    <div className="font-display text-xl font-bold text-primary">
                      {s.v}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* UPI Apps with official links */}
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              Popular Payment Apps
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Click any app to visit the official website or download from
              official stores.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {APPS.map((app, i) => (
                <motion.div
                  key={app.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className={`bg-card border ${app.borderColor} rounded-xl p-5 shadow-card`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <div
                        className={`inline-flex rounded-xl px-3 py-1.5 mb-1 ${app.color}`}
                      >
                        <span className={`font-bold text-sm ${app.textColor}`}>
                          {app.name}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground font-medium">
                        {app.tagline}
                      </p>
                    </div>
                    <span
                      className={`text-xs font-semibold ${app.textColor} shrink-0`}
                    >
                      {app.users}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {app.feature}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold bg-primary text-white px-3 py-1.5 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" /> Official Site
                    </a>
                    <a
                      href={app.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold bg-muted text-foreground px-3 py-1.5 rounded-lg hover:bg-muted/70 transition-colors"
                    >
                      <Smartphone className="h-3 w-3" /> Android
                    </a>
                    <a
                      href={app.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold bg-muted text-foreground px-3 py-1.5 rounded-lg hover:bg-muted/70 transition-colors"
                    >
                      <Smartphone className="h-3 w-3" /> iOS
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Banking Apps */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                Official Banking Apps
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Access your bank account securely from official bank portals —
                never use third-party links.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {BANKING_APPS.map((b) => (
                  <div
                    key={b.bank}
                    className={`${b.bg} border ${b.border} rounded-xl p-4 flex items-start gap-4`}
                  >
                    <div
                      className={`rounded-xl p-2.5 bg-white dark:bg-black/20 shrink-0 border ${b.border}`}
                    >
                      <span className={`font-bold text-sm ${b.color}`}>
                        {b.bank}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold text-sm ${b.color} mb-0.5`}>
                        {b.app}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                        {b.desc}
                      </p>
                      <a
                        href={b.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                      >
                        <ExternalLink className="h-3 w-3" />{" "}
                        {b.url.replace("https://", "").replace(/\/$/, "")}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* QR payments */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                QR Code Payments
              </h2>
              <div className="bg-card border border-border rounded-xl p-6 flex flex-col sm:flex-row gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-xl p-3 shrink-0">
                    <QrCode className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      How to Pay via QR
                    </h3>
                    <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside">
                      <li>Open any UPI app (PhonePe, GPay, Paytm)</li>
                      <li>Tap "Scan QR" and point camera at the code</li>
                      <li>Verify the merchant name shown on screen</li>
                      <li>Enter amount and your UPI PIN to confirm</li>
                    </ol>
                    <div className="mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                      <p className="text-xs text-yellow-800 dark:text-yellow-200">
                        <strong>Safety:</strong> Always verify the merchant name
                        before paying. Scammers create fake QR codes. Scanning
                        to receive money should NEVER ask for your PIN.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Wallets vs UPI */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Wallets vs UPI
              </h2>
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="grid grid-cols-3 gap-0 bg-muted/30 border-b border-border">
                  <div className="p-3 text-sm font-semibold text-muted-foreground">
                    Feature
                  </div>
                  <div className="p-3 text-sm font-semibold text-foreground flex items-center gap-1">
                    <Wallet className="h-4 w-4" /> Wallet
                  </div>
                  <div className="p-3 text-sm font-semibold text-primary flex items-center gap-1">
                    <Wifi className="h-4 w-4" /> UPI
                  </div>
                </div>
                {WALLET_VS_UPI.map((row) => (
                  <div
                    key={row.feature}
                    className="grid grid-cols-3 gap-0 border-b border-border last:border-0"
                  >
                    <div className="p-3 text-sm text-muted-foreground">
                      {row.feature}
                    </div>
                    <div className="p-3 text-sm text-foreground">
                      {row.wallet}
                    </div>
                    <div className="p-3 text-sm text-foreground">{row.upi}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Payment modes */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                NEFT, RTGS, IMPS, UPI — What's the Difference?
              </h2>
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="grid grid-cols-5 gap-0 bg-muted/30 border-b border-border">
                  {["Mode", "Speed", "Limit", "Charges", "Best For"].map(
                    (h) => (
                      <div
                        key={h}
                        className="p-3 text-xs font-semibold text-muted-foreground"
                      >
                        {h}
                      </div>
                    ),
                  )}
                </div>
                {PAYMENT_MODES.map((row) => (
                  <div
                    key={row.mode}
                    className="grid grid-cols-5 gap-0 border-b border-border last:border-0"
                  >
                    <div className="p-3 text-sm font-semibold text-primary">
                      {row.mode}
                    </div>
                    <div className="p-3 text-sm text-foreground">
                      {row.speed}
                    </div>
                    <div className="p-3 text-sm text-foreground">
                      {row.limit}
                    </div>
                    <div className="p-3 text-sm text-foreground">
                      {row.charges}
                    </div>
                    <div className="p-3 text-sm text-muted-foreground">
                      {row.use}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Safety tips */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Safe Online Transactions
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {SAFE_TIPS.map((tip) => (
                  <div
                    key={tip}
                    className="flex items-start gap-3 bg-card border border-border rounded-xl p-4"
                  >
                    <Shield className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <p className="text-sm text-muted-foreground">{tip}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 flex gap-3">
                <ArrowRightLeft className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <p className="text-sm text-green-800 dark:text-green-200">
                  <strong>Remember:</strong> India processes over 13 billion UPI
                  transactions per month. The system is safe when used
                  correctly. The weakest link is always the human — never share
                  credentials.
                </p>
              </div>
            </motion.div>

            {/* Official Regulator Links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                Official & Regulatory Links
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Trusted government and regulatory sources for digital payments
                in India.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {REGULATOR_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-card border border-border hover:border-primary/40 rounded-xl p-4 flex items-start gap-3 transition-all hover:shadow-md"
                  >
                    <div className="bg-primary/10 rounded-lg p-2 shrink-0 group-hover:bg-primary/20 transition-colors">
                      <ExternalLink className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                          {link.name}
                        </h3>
                        <span className="text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded font-medium shrink-0">
                          {link.badge}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {link.desc}
                      </p>
                      <p className="text-xs text-primary mt-1.5 font-medium">
                        {link.url.replace("https://", "")}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
