import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { FeatureCards } from "../components/home/FeatureCards";
import { HeroSection } from "../components/home/HeroSection";
import { StatsCards } from "../components/home/StatsCards";
import { useLanguage } from "../contexts/LanguageContext";

const FAQ_ITEMS = [
  {
    id: "faq-1",
    q: "What is financial literacy and why is it important for Indians?",
    a: "Financial literacy is the ability to understand and effectively use financial skills, including personal financial management, budgeting, and investing. For Indians, it's crucial because only 27% of adults are financially literate (per S&P survey), leading to poor savings habits, vulnerability to scams, and missed opportunities from government schemes.",
  },
  {
    id: "faq-2",
    q: "What is the 50/30/20 rule and how can it help manage my salary?",
    a: "The 50/30/20 rule is a simple budgeting framework: allocate 50% of your take-home income to needs (rent, groceries, EMIs), 30% to wants (dining, travel, entertainment), and 20% to savings and debt repayment. For a \u20B950,000 monthly salary, that means \u20B925,000 for needs, \u20B915,000 for wants, and \u20B910,000 for savings.",
  },
  {
    id: "faq-3",
    q: "How does a SIP work and is it better than a lump sum investment?",
    a: "A Systematic Investment Plan (SIP) invests a fixed amount regularly (monthly) in mutual funds, enabling rupee-cost averaging \u2014 buying more units when markets are down and fewer when they're up. SIPs reduce market-timing risk and are ideal for salaried individuals. Lump sum works better if you have a large surplus during a market dip.",
  },
  {
    id: "faq-4",
    q: "Which government schemes are most beneficial for a middle-class family?",
    a: "For middle-class families: PMJJBY (life insurance at \u20B9436/year), PMSBY (accident cover at \u20B920/year), APY (pension guarantee), and PMJDY (zero-balance bank account with RuPay card). Combined, these provide comprehensive financial safety net coverage for under \u20B9500/year per family member.",
  },
  {
    id: "faq-5",
    q: "How can I start investing with just \u20B9500 per month?",
    a: "Start with ELSS mutual funds or index funds via SIP at \u20B9500/month. In 20 years at 12% CAGR, \u20B9500/month becomes approximately \u20B94.99 lakh. Use SEBI-registered platforms, complete your KYC with Aadhaar/PAN, and link your bank account. Platforms like Zerodha Coin, Groww, or Paytm Money allow \u20B9100 minimum SIPs.",
  },
  {
    id: "faq-6",
    q: "What documents do I need for most government financial schemes?",
    a: "Most schemes require: Aadhaar card (identity and address proof), PAN card (for investments and tax), active savings bank account, mobile number linked to Aadhaar, and passport-size photographs. For APY and PMJJBY/PMSBY, you also need to provide consent for annual auto-debit from your bank account.",
  },
];

const GOV_RESOURCES = [
  {
    name: "Reserve Bank of India",
    short: "RBI",
    desc: "Central bank — monetary policy, banking regulation, currency",
    url: "https://www.rbi.org.in",
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  },
  {
    name: "Securities & Exchange Board",
    short: "SEBI",
    desc: "Regulates stock markets, mutual funds, and brokers",
    url: "https://www.sebi.gov.in",
    color:
      "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
  },
  {
    name: "Income Tax Dept.",
    short: "IT",
    desc: "File ITR, check refunds, PAN registration",
    url: "https://www.incometax.gov.in",
    color:
      "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
  },
  {
    name: "Jan Dhan Yojana",
    short: "PMJDY",
    desc: "Open zero-balance bank account, check scheme status",
    url: "https://pmjdy.gov.in",
    color:
      "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
  },
  {
    name: "NPCI — UPI & Payments",
    short: "NPCI",
    desc: "UPI, RuPay, BHIM, NACH — digital payment infrastructure",
    url: "https://www.npci.org.in",
    color: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300",
  },
  {
    name: "UIDAI — Aadhaar",
    short: "UIDAI",
    desc: "Aadhaar card updates, KYC, biometric services",
    url: "https://uidai.gov.in",
    color: "bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300",
  },
];

const REAL_STORIES = [
  {
    name: "Meena, 34 — Homemaker, Jalgaon",
    story:
      "Meena had no income of her own. She enrolled in PMJDY, opened a zero-balance account, and linked it to PMJJBY for ₹436/year life insurance. When her husband passed away unexpectedly, she received ₹2 lakh within 30 days — enough to pay off the remaining home loan EMIs and keep her children in school.",
    tag: "Government Schemes",
    tagColor:
      "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  },
  {
    name: "Arjun, 27 — IT Professional, Bengaluru",
    story:
      "Arjun started a ₹3,000/month SIP in a Nifty 50 index fund at 23. By 27, he'd invested ₹1.44 lakh but his portfolio was worth ₹2.1 lakh. He now increases his SIP by 10% every year. His projected retirement corpus at 60: ₹4.2 crore — from a ₹3,000/month habit started at 23.",
    tag: "Investing",
    tagColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  },
];

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <HeroSection />
      <StatsCards />
      <FeatureCards />

      {/* Real Stories Section */}
      <section className="py-14 bg-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full mb-3">
              {t.common.realLifeStory}
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              {t.home.realStoryTitle}
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {REAL_STORIES.map((story, i) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 shadow-card"
              >
                <span
                  className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3 ${story.tagColor}`}
                >
                  {story.tag}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  "{story.story}"
                </p>
                <p className="text-xs font-semibold text-foreground">
                  — {story.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Resources Section */}
      <section className="py-14">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full mb-3">
              {t.common.govLinks}
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              {t.home.govResourcesTitle}
            </h2>
            <p className="text-muted-foreground text-sm">
              {t.home.govResourcesSubtitle}
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GOV_RESOURCES.map((res, i) => (
              <motion.a
                key={res.short}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-4 flex items-start gap-4 shadow-card hover:shadow-md hover:border-primary/40 transition-all group"
              >
                <div
                  className={`rounded-xl p-2.5 shrink-0 font-bold text-xs ${res.color}`}
                >
                  {res.short}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-sm text-foreground truncate">
                      {res.name}
                    </span>
                    <ExternalLink className="h-3 w-3 text-muted-foreground shrink-0 group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                    {res.desc}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/10">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              {t.home.faqTitle}
            </h2>
            <p className="text-muted-foreground">{t.home.faqSubtitle}</p>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ_ITEMS.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="bg-card border border-border rounded-xl px-5 shadow-card"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground text-sm py-4 hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm pb-4 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-navy-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            {t.home.ctaTitle}
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            {t.home.ctaSubtitle}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/quiz"
              className="bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              {t.home.takeQuiz}
            </a>
            <a
              href="/schemes"
              className="bg-white/10 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              {t.home.viewSchemes}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
