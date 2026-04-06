import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";
import { FeatureCards } from "../components/home/FeatureCards";
import { HeroSection } from "../components/home/HeroSection";
import { StatsCards } from "../components/home/StatsCards";

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

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsCards />
      <FeatureCards />

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Quick answers to common financial questions
            </p>
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
            Ready to Test Your Financial Knowledge?
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Take our 15-question quiz covering banking, investments, insurance,
            and government schemes.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/quiz"
              className="bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Take the Quiz
            </a>
            <a
              href="/schemes"
              className="bg-white/10 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              View Schemes
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
