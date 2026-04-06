import {
  BadgeCheck,
  BookOpen,
  Building2,
  Calculator,
  FileText,
  Globe,
  Landmark,
  Lightbulb,
} from "lucide-react";
import { motion } from "motion/react";
import { PageHeader } from "../components/common/PageHeader";

const NEW_REGIME_SLABS = [
  { range: "Up to ₹3,00,000", rate: "0%", color: "bg-green-500", width: "15%" },
  { range: "₹3L – ₹7L", rate: "5%", color: "bg-lime-500", width: "30%" },
  { range: "₹7L – ₹10L", rate: "10%", color: "bg-yellow-400", width: "45%" },
  { range: "₹10L – ₹12L", rate: "15%", color: "bg-orange-400", width: "60%" },
  { range: "₹12L – ₹15L", rate: "20%", color: "bg-orange-500", width: "75%" },
  { range: "Above ₹15L", rate: "30%", color: "bg-red-500", width: "90%" },
];

const GST_SLABS = [
  {
    rate: "0%",
    items: "Essential items: Rice, wheat, vegetables, books, newspapers, milk",
    color: "bg-green-100 dark:bg-green-900/30",
    textColor: "text-green-700 dark:text-green-300",
  },
  {
    rate: "5%",
    items: "Household goods: Edible oils, sugar, spices, tea, coffee, coal",
    color: "bg-yellow-100 dark:bg-yellow-900/30",
    textColor: "text-yellow-700 dark:text-yellow-300",
  },
  {
    rate: "12%",
    items:
      "Processed foods: Frozen meat, butter, cheese, fruit juices, medicines",
    color: "bg-orange-100 dark:bg-orange-900/30",
    textColor: "text-orange-700 dark:text-orange-300",
  },
  {
    rate: "18%",
    items:
      "Most goods & services: Electronics, restaurants, financial services",
    color: "bg-red-100 dark:bg-red-900/30",
    textColor: "text-red-700 dark:text-red-300",
  },
  {
    rate: "28%",
    items: "Luxury items: Cars, tobacco, aerated drinks, high-end electronics",
    color: "bg-red-200 dark:bg-red-800/40",
    textColor: "text-red-800 dark:text-red-200",
  },
];

const ITR_FORMS = [
  {
    form: "ITR-1 (Sahaj)",
    for: "Salaried individuals with income up to ₹50L",
    icon: FileText,
  },
  {
    form: "ITR-2",
    for: "Individuals with capital gains, foreign income, or multiple properties",
    icon: BookOpen,
  },
  {
    form: "ITR-3",
    for: "Individuals/HUFs with business or professional income",
    icon: Building2,
  },
  {
    form: "ITR-4 (Sugam)",
    for: "Presumptive income scheme for small businesses/professionals",
    icon: Calculator,
  },
];

export default function Taxes() {
  return (
    <div>
      <PageHeader
        title="Taxes — A Beginner's Guide"
        subtitle="Income tax, PAN card, GST, and filing basics explained in simple language for every Indian citizen"
        badge="Taxation"
      />

      <section className="py-10">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* What is Income Tax */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 rounded-xl p-3">
                  <Landmark className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-display text-xl font-bold text-foreground">
                  What is Income Tax?
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Income tax is a direct tax levied by the Government of India on
                income earned by individuals, HUFs, companies, and other
                entities during a{" "}
                <strong className="text-foreground">Financial Year (FY)</strong>{" "}
                — April 1 to March 31. You file your return in the{" "}
                <strong className="text-foreground">
                  Assessment Year (AY)
                </strong>{" "}
                — the year immediately following the FY.
              </p>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  {
                    label: "Tax Filing Deadline",
                    value: "July 31",
                    sub: "For salaried individuals",
                  },
                  {
                    label: "Rebate u/s 87A",
                    value: "₹7L effective",
                    sub: "Zero tax under new regime",
                  },
                  {
                    label: "Filing Portal",
                    value: "incometax.gov.in",
                    sub: "Official government portal",
                  },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-primary/5 rounded-xl p-3 text-center"
                  >
                    <div className="font-display text-lg font-bold text-primary">
                      {s.value}
                    </div>
                    <div className="text-xs font-medium text-foreground mt-1">
                      {s.label}
                    </div>
                    <div className="text-xs text-muted-foreground">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tax slabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              Income Tax Slabs (New Regime, FY 2024-25)
            </h2>
            <p className="text-sm text-muted-foreground mb-5">
              Under Section 87A, if your total taxable income is up to ₹7 lakh,
              you get a full tax rebate — effectively paying ₹0 tax.
            </p>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="space-y-3">
                {NEW_REGIME_SLABS.map((slab) => (
                  <div key={slab.range} className="flex items-center gap-4">
                    <div className="w-36 shrink-0">
                      <span className="text-sm text-muted-foreground">
                        {slab.range}
                      </span>
                    </div>
                    <div
                      className={`${slab.color} rounded-lg h-8 flex items-center px-3`}
                      style={{ width: slab.width }}
                    >
                      <span className="text-white text-sm font-bold">
                        {slab.rate}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-xs text-green-800 dark:text-green-200">
                  <strong>Section 87A Rebate:</strong> If your gross total
                  income doesn't exceed ₹7 lakh, you're entitled to a tax rebate
                  of up to ₹25,000 — making your effective tax liability zero.
                </p>
              </div>
            </div>
          </motion.div>

          {/* PAN card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              PAN Card — What It Is & Why You Need It
            </h2>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 dark:bg-orange-900/30 rounded-xl p-3 shrink-0">
                  <FileText className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    <strong className="text-foreground">
                      PAN (Permanent Account Number)
                    </strong>{" "}
                    is a 10-character alphanumeric identifier (e.g., ABCDE1234F)
                    issued by the Income Tax Department. The 5th character is
                    always the first letter of your surname.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {[
                      "Mandatory for income tax filing",
                      "Required for bank accounts and investments",
                      "Needed for transactions above ₹50,000",
                      "Apply online at NSDL or UTIITSL portal",
                      "Link with Aadhaar (mandatory)",
                      "Cost: ₹107 (Indian address), ₹1,017 (foreign)",
                    ].map((p) => (
                      <div
                        key={p}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <BadgeCheck className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* GST */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              GST — Goods & Services Tax
            </h2>
            <p className="text-sm text-muted-foreground mb-5">
              GST replaced over 17 indirect taxes in 2017 (VAT, Service Tax,
              Excise etc.) with a single unified tax system. It applies to most
              goods and services consumed in India.
            </p>
            <div className="space-y-3">
              {GST_SLABS.map((slab) => (
                <div
                  key={slab.rate}
                  className={`${slab.color} rounded-xl p-4 flex items-center gap-4`}
                >
                  <div
                    className={`font-display text-2xl font-bold w-16 shrink-0 ${slab.textColor}`}
                  >
                    {slab.rate}
                  </div>
                  <p className="text-sm text-muted-foreground">{slab.items}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Why tax matters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Why Paying Tax Matters
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "Public Infrastructure",
                  desc: "Roads, railways, bridges, and airports are built from tax revenue.",
                  icon: Building2,
                },
                {
                  title: "Healthcare & Education",
                  desc: "Government hospitals, schools, and universities are funded by taxes.",
                  icon: BookOpen,
                },
                {
                  title: "Defense & Security",
                  desc: "Armed forces, border protection, and law enforcement rely on tax money.",
                  icon: Landmark,
                },
                {
                  title: "Social Welfare",
                  desc: "Subsidies, pensions (APY), Jan Dhan Yojana, and food security programs.",
                  icon: BadgeCheck,
                },
                {
                  title: "Economic Development",
                  desc: "Infrastructure investments generate employment and drive GDP growth.",
                  icon: Globe,
                },
                {
                  title: "Your Credit History",
                  desc: "Regular ITR filing improves loan eligibility and visa applications.",
                  icon: FileText,
                },
              ].map(({ title, desc, icon: Icon }) => (
                <div
                  key={title}
                  className="bg-card border border-border rounded-xl p-4"
                >
                  <Icon className="h-5 w-5 text-primary mb-2" />
                  <h3 className="font-semibold text-foreground text-sm mb-1">
                    {title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Filing basics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Filing Your ITR — The Basics
            </h2>
            <div className="grid md:grid-cols-2 gap-5 mb-6">
              {ITR_FORMS.map((form) => (
                <div
                  key={form.form}
                  className="bg-card border border-border rounded-xl p-4 flex gap-4"
                >
                  <div className="bg-primary/10 rounded-xl p-2.5 shrink-0">
                    <form.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">
                      {form.form}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {form.for}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 flex gap-3">
              <Lightbulb className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <div className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Documents you'll need:</strong> PAN card, Aadhaar, Form
                16 (from employer), bank statements, investment proofs (80C),
                and your AIS/TIS available at incometax.gov.in. Filing online
                takes 15–30 minutes for most salaried individuals.
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
