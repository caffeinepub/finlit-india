import {
  AlertOctagon,
  AlertTriangle,
  BadgeCheck,
  CheckSquare,
  ExternalLink,
  Key,
  Phone,
  PhoneOff,
  Shield,
  ShieldAlert,
} from "lucide-react";
import { motion } from "motion/react";
import { PageHeader } from "../components/common/PageHeader";

const SCAMS = [
  {
    title: "UPI Fraud",
    desc: "Scammer sends a 'collect request' claiming to send money. Entering your PIN in a collect request sends money OUT, not in.",
    icon: PhoneOff,
    color: "text-red-600",
    bg: "bg-red-100 dark:bg-red-900/30",
  },
  {
    title: "OTP Scam",
    desc: "Fraudster impersonates bank/telecom staff and asks for OTP to 'verify' your account. Never share OTP with anyone.",
    icon: Key,
    color: "text-orange-600",
    bg: "bg-orange-100 dark:bg-orange-900/30",
  },
  {
    title: "Phishing",
    desc: "Fake emails, SMS, or websites that look like your bank. They steal login credentials. Always check the URL carefully.",
    icon: AlertTriangle,
    color: "text-yellow-600",
    bg: "bg-yellow-100 dark:bg-yellow-900/30",
  },
  {
    title: "KYC Fraud",
    desc: "Caller claims your KYC is expired and your account will be blocked. They direct you to a fake site to steal credentials.",
    icon: AlertOctagon,
    color: "text-purple-600",
    bg: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    title: "Lottery / Job Scam",
    desc: "You 'win' a prize or get a job offer requiring an upfront fee. No legitimate lottery requires payment to claim winnings.",
    icon: ShieldAlert,
    color: "text-pink-600",
    bg: "bg-pink-100 dark:bg-pink-900/30",
  },
  {
    title: "Screen Share Scam",
    desc: "Fraudster asks you to install AnyDesk/TeamViewer to 'fix' an issue. They then control your device and drain bank accounts.",
    icon: AlertTriangle,
    color: "text-red-700",
    bg: "bg-red-100 dark:bg-red-900/30",
  },
];

const RED_FLAGS = [
  "Creates urgency: 'Your account will be blocked in 2 hours'",
  "Asks for OTP, PIN, CVV, or password over phone/chat",
  "Sends unknown links via WhatsApp or SMS",
  "Offers too-good-to-be-true returns or prizes",
  "Claims to be from RBI, TRAI, CBI, or bank headquarters",
  "Requests remote access to your phone or computer",
  "Asks you to transfer money to 'secure' or 'RBI vault' account",
];

const PASSWORD_TIPS = [
  "Use at least 12 characters with numbers, symbols, uppercase & lowercase",
  "Never reuse the same password on multiple websites",
  "Enable 2-Factor Authentication (2FA) on all financial accounts",
  "Use a password manager (Bitwarden, 1Password) to store passwords safely",
  "Change passwords if you suspect any breach",
  "Never store passwords in plain text or share them via WhatsApp",
];

const REPORT_CHANNELS = [
  {
    name: "National Cyber Crime Helpline",
    contact: "1930",
    url: null,
    desc: "Call immediately if money is deducted fraudulently. Quick action increases recovery chances.",
    icon: Phone,
    badge: "Call Now",
    badgeColor: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  },
  {
    name: "Cyber Crime Portal",
    contact: "cybercrime.gov.in",
    url: "https://cybercrime.gov.in",
    desc: "File online complaints for financial fraud, phishing, and social media crimes.",
    icon: Shield,
    badge: "Official Gov",
    badgeColor:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  },
  {
    name: "RBI Banking Ombudsman",
    contact: "bankingombudsman.rbi.org.in",
    url: "https://bankingombudsman.rbi.org.in",
    desc: "Escalate unresolved bank complaints after 30 days of filing with the bank.",
    icon: BadgeCheck,
    badge: "RBI Portal",
    badgeColor:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  },
  {
    name: "Local Police (Cyber Cell)",
    contact: "Nearest police station",
    url: null,
    desc: "Register an FIR for fraud. Ask specifically for the Cyber Crime Cell.",
    icon: AlertOctagon,
    badge: "In Person",
    badgeColor:
      "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  },
];

const SECURITY_PORTALS = [
  {
    name: "Cyber Crime Portal — MHA",
    desc: "File complaints for financial fraud, online harassment, and social media crimes. Official MHA platform.",
    url: "https://cybercrime.gov.in",
    badge: "Govt",
    badgeColor:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  },
  {
    name: "RBI Banking Ombudsman",
    desc: "Escalate unresolved bank complaints to the RBI ombudsman after 30 days.",
    url: "https://bankingombudsman.rbi.org.in",
    badge: "RBI",
    badgeColor:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  },
  {
    name: "RBI Official Website",
    desc: "Consumer protection guidelines, authorized entities list, and fraud alerts from the Reserve Bank of India.",
    url: "https://www.rbi.org.in",
    badge: "Regulator",
    badgeColor:
      "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
  },
  {
    name: "SEBI SCORES Portal",
    desc: "Lodge complaints against stock brokers, mutual funds, and other SEBI-regulated entities.",
    url: "https://scores.sebi.gov.in",
    badge: "SEBI",
    badgeColor:
      "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  },
  {
    name: "NPCI — UPI Dispute Portal",
    desc: "Raise UPI payment disputes and track resolution for transactions on any UPI app.",
    url: "https://www.npci.org.in",
    badge: "UPI",
    badgeColor:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
  },
  {
    name: "IT Act / Cyber Law India",
    desc: "Understand your legal rights under the Information Technology Act, 2000 for cyber offences.",
    url: "https://www.meity.gov.in/content/cyber-laws",
    badge: "Legal",
    badgeColor: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  },
];

export default function FraudSecurity() {
  return (
    <div>
      <PageHeader
        title="Financial Fraud & Security"
        subtitle="Recognize scams, protect your money, and know exactly what to do if you're targeted"
        badge="Security"
      />

      <section className="py-10">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Warning banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-red-50 dark:bg-red-900/20 border-2 border-red-400 rounded-2xl p-5 mb-10 flex items-center gap-4"
          >
            <ShieldAlert className="h-10 w-10 text-red-600 shrink-0" />
            <div>
              <p className="font-bold text-red-800 dark:text-red-200 text-lg">
                RBI will NEVER ask for your PIN, OTP, or password.
              </p>
              <p className="text-sm text-red-700 dark:text-red-300">
                No legitimate bank, government body, or financial institution
                will ever request sensitive credentials over phone, SMS, or
                WhatsApp.
              </p>
            </div>
          </motion.div>

          {/* Scams grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              Common Financial Scams in India
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SCAMS.map((scam, i) => (
                <motion.div
                  key={scam.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-5 shadow-card"
                >
                  <div className={`inline-flex rounded-xl p-3 mb-3 ${scam.bg}`}>
                    <scam.icon className={`h-5 w-5 ${scam.color}`} />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {scam.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {scam.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Red flags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              🚩 Red Flags — Warning Signs of a Scam
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {RED_FLAGS.map((flag) => (
                <div
                  key={flag}
                  className="flex items-start gap-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4"
                >
                  <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-red-800 dark:text-red-200">
                    {flag}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Password tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Safe Password Practices
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {PASSWORD_TIPS.map((tip) => (
                <div
                  key={tip}
                  className="flex items-start gap-3 bg-card border border-border rounded-xl p-4"
                >
                  <CheckSquare className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">{tip}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Report channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              How to Report Financial Fraud in India
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {REPORT_CHANNELS.map((ch, i) => (
                <motion.div
                  key={ch.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-5 flex flex-col gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 rounded-xl p-2.5 shrink-0">
                      <ch.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-0.5">
                        <h3 className="font-semibold text-foreground text-sm">
                          {ch.name}
                        </h3>
                        <span
                          className={`text-xs px-1.5 py-0.5 rounded font-medium shrink-0 ${ch.badgeColor}`}
                        >
                          {ch.badge}
                        </span>
                      </div>
                      <span className="text-primary font-bold text-sm">
                        {ch.contact}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{ch.desc}</p>
                  {ch.url && (
                    <a
                      href={ch.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline mt-auto"
                    >
                      <ExternalLink className="h-3 w-3" /> Visit Website
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Official Security Portals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              Official Security & Complaint Portals
            </h2>
            <p className="text-sm text-muted-foreground mb-5">
              Trusted government and regulatory websites for reporting fraud and
              getting help.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {SECURITY_PORTALS.map((portal) => (
                <a
                  key={portal.name}
                  href={portal.url}
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
                        {portal.name}
                      </h3>
                      <span
                        className={`text-xs px-1.5 py-0.5 rounded font-medium shrink-0 ${portal.badgeColor}`}
                      >
                        {portal.badge}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {portal.desc}
                    </p>
                    <p className="text-xs text-primary mt-1.5 font-medium">
                      {portal.url.replace("https://", "")}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* RBI guidelines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              RBI Consumer Protection Guidelines
            </h2>
            <div className="space-y-3">
              {[
                "Zero liability for unauthorized transactions if reported within 3 working days",
                "Limited liability (max ₹5,000–₹25,000) if reported within 4–7 days depending on account type",
                "Banks must resolve fraud complaints within 10 working days",
                "You are entitled to full reimbursement if fraud occurred due to bank negligence",
                "ATM fraud reimbursement must happen within 5 working days of filing complaint",
              ].map((rule) => (
                <div
                  key={rule}
                  className="flex items-start gap-3 bg-card border border-border rounded-xl p-4"
                >
                  <BadgeCheck className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">{rule}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
