import {
  AlertTriangle,
  ArrowRightLeft,
  CheckCircle2,
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
    color: "bg-purple-100 dark:bg-purple-900/30",
    textColor: "text-purple-700 dark:text-purple-300",
    feature: "Market leader, insurance & gold buying built-in",
    users: "500M+ users",
  },
  {
    name: "Google Pay",
    color: "bg-blue-100 dark:bg-blue-900/30",
    textColor: "text-blue-700 dark:text-blue-300",
    feature: "Simple UX, rewards & cashback on transactions",
    users: "150M+ users",
  },
  {
    name: "Paytm",
    color: "bg-sky-100 dark:bg-sky-900/30",
    textColor: "text-sky-700 dark:text-sky-300",
    feature: "Wallet + UPI, first mover in digital payments",
    users: "300M+ users",
  },
  {
    name: "BHIM",
    color: "bg-green-100 dark:bg-green-900/30",
    textColor: "text-green-700 dark:text-green-300",
    feature: "Government-backed, works on basic phones too",
    users: "Official NPCI app",
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

            {/* Apps grid */}
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Popular Payment Apps
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {APPS.map((app, i) => (
                <motion.div
                  key={app.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-4 shadow-card"
                >
                  <div
                    className={`inline-flex rounded-xl px-3 py-1.5 mb-3 ${app.color}`}
                  >
                    <span className={`font-bold text-sm ${app.textColor}`}>
                      {app.name}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                    {app.feature}
                  </p>
                  <span className="text-xs font-medium text-primary">
                    {app.users}
                  </span>
                </motion.div>
              ))}
            </div>

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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
