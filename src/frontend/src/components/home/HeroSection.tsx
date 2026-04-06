import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, PiggyBank, Shield, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";

const heroChartData = [
  { v: 20 },
  { v: 25 },
  { v: 22 },
  { v: 35 },
  { v: 32 },
  { v: 45 },
  { v: 48 },
  { v: 55 },
  { v: 60 },
  { v: 75 },
];

export function HeroSection() {
  return (
    <section className="relative bg-white dark:bg-background overflow-hidden min-h-[90vh] flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-primary/3 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Financial Literacy for Every Indian
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-foreground leading-tight mb-6">
              Master Your Finances.
              <br />
              <span className="text-primary">Secure Your Future.</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
              Understand budgeting, investing, and government schemes designed
              for India. Build wealth with knowledge \u2014 from savings to
              SIPs, we cover it all.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                data-ocid="hero.primary_button"
                asChild
                size="lg"
                className="font-semibold"
              >
                <Link to="/tools/budget">
                  Explore Tools <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                data-ocid="hero.secondary_button"
                asChild
                variant="outline"
                size="lg"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-8">
              {[
                { label: "Learners", value: "50K+" },
                { label: "Schemes Covered", value: "6+" },
                { label: "Quiz Attempts", value: "10K+" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display font-bold text-2xl text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main finance card */}
              <div className="bg-navy-dark rounded-2xl p-6 text-white shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/70 text-sm">
                    Portfolio Growth
                  </span>
                  <span className="bg-green-500/20 text-green-400 text-xs font-semibold px-2 py-0.5 rounded-full">
                    +18.4%
                  </span>
                </div>
                <div className="font-display text-3xl font-bold mb-1">
                  \u20B94,82,500
                </div>
                <div className="text-white/60 text-sm mb-4">
                  Total Investment Value
                </div>
                <ResponsiveContainer width="100%" height={100}>
                  <AreaChart data={heroChartData}>
                    <defs>
                      <linearGradient id="heroGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#2563EB"
                          stopOpacity={0.4}
                        />
                        <stop
                          offset="95%"
                          stopColor="#2563EB"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="v"
                      stroke="#2563EB"
                      fill="url(#heroGrad)"
                      strokeWidth={2}
                      dot={false}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-3 shadow-card">
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 dark:bg-green-900/40 rounded-lg p-1.5">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      GDP Growth
                    </div>
                    <div className="text-green-600 text-xs font-bold">7.2%</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-3 shadow-card">
                <div className="flex items-center gap-2">
                  <div className="bg-blue-100 dark:bg-blue-900/40 rounded-lg p-1.5">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      Insured
                    </div>
                    <div className="text-primary text-xs">37Cr+ enrolled</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-card border border-border rounded-xl p-3 shadow-card">
                <div className="flex items-center gap-2">
                  <div className="bg-orange-100 dark:bg-orange-900/40 rounded-lg p-1.5">
                    <PiggyBank className="h-4 w-4 text-orange-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      SIP
                    </div>
                    <div className="text-orange-500 text-xs">
                      \u20B9500/month
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
