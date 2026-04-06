import { BookOpen, TrendingDown, TrendingUp, Users } from "lucide-react";
import { motion } from "motion/react";

const STATS = [
  {
    label: "Inflation Rate",
    value: "5.7%",
    change: "-0.3%",
    positive: true,
    Icon: TrendingDown,
    color:
      "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  },
  {
    label: "GDP Growth",
    value: "7.2%",
    change: "+0.8%",
    positive: true,
    Icon: TrendingUp,
    color: "bg-blue-100 dark:bg-blue-900/30 text-primary",
  },
  {
    label: "Financial Inclusion",
    value: "80%",
    change: "+3%",
    positive: true,
    Icon: Users,
    color:
      "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
  },
  {
    label: "Literacy Rate",
    value: "76.9%",
    change: "+2.1%",
    positive: true,
    Icon: BookOpen,
    color:
      "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
  },
];

export function StatsCards() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            Key India Statistics
          </h2>
          <p className="text-muted-foreground">
            Real-time economic indicators shaping India's financial landscape
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              data-ocid={`stats.card.${i + 1}`}
              className="bg-card border border-border rounded-xl p-5 shadow-card hover:shadow-card-hover transition-all duration-200"
            >
              <div className={`inline-flex rounded-lg p-2 mb-3 ${stat.color}`}>
                <stat.Icon className="h-5 w-5" />
              </div>
              <div className="font-display text-2xl md:text-3xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm mt-0.5">
                {stat.label}
              </div>
              <div
                className={`text-xs font-semibold mt-2 ${stat.positive ? "text-green-600 dark:text-green-400" : "text-red-500"}`}
              >
                {stat.change} from last year
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
