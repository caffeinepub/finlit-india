import { motion } from "motion/react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { PageHeader } from "../components/common/PageHeader";
import {
  financialInclusionGrowth,
  ruralUrbanAwareness,
  savingsDistribution,
  statewiseLiteracy,
} from "../data/indiaStats";

export default function IndiaStats() {
  return (
    <div>
      <PageHeader
        title="Financial Literacy in India"
        subtitle="Data-driven insights into India's financial awareness, inclusion, and economic growth"
        badge="Statistics"
      />

      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* State-wise Literacy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-xl p-6 shadow-card"
        >
          <h2 className="font-display text-xl font-bold text-foreground mb-1">
            State-wise Financial Literacy Rate (%)
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Approximate financial literacy rates across major Indian states
          </p>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart
              data={statewiseLiteracy}
              margin={{ top: 5, right: 10, left: -10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
              <XAxis dataKey="state" tick={{ fontSize: 11 }} />
              <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} unit="%" />
              <Tooltip formatter={(v) => [`${v}%`, "Literacy Rate"]} />
              <Bar dataKey="rate" fill="#2563EB" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Financial Inclusion Growth */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-xl p-6 shadow-card"
        >
          <h2 className="font-display text-xl font-bold text-foreground mb-1">
            Growth of Financial Inclusion (2016\u20132024)
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Percentage of Indian adults with access to financial services
          </p>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart
              data={financialInclusionGrowth}
              margin={{ top: 5, right: 10, left: -10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} />
              <YAxis domain={[40, 90]} tick={{ fontSize: 11 }} unit="%" />
              <Tooltip formatter={(v) => [`${v}%`, "Inclusion Rate"]} />
              <Line
                type="monotone"
                dataKey="inclusion"
                stroke="#10B981"
                strokeWidth={3}
                dot={{ fill: "#10B981", r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Savings Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-6 shadow-card"
          >
            <h2 className="font-display text-xl font-bold text-foreground mb-1">
              Savings Instrument Distribution
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              How Indians distribute their savings across instruments
            </p>
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={savingsDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                  labelLine={false}
                >
                  {savingsDistribution.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(v) => [`${v}%`, "Share"]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Rural vs Urban */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-6 shadow-card"
          >
            <h2 className="font-display text-xl font-bold text-foreground mb-1">
              Rural vs Urban Financial Awareness
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              Comparison of financial awareness levels across categories
            </p>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart
                data={ruralUrbanAwareness}
                margin={{ top: 5, right: 10, left: -10, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(0,0,0,0.06)"
                />
                <XAxis dataKey="category" tick={{ fontSize: 10 }} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 10 }} unit="%" />
                <Tooltip formatter={(v) => [`${v}%`, ""]} />
                <Legend />
                <Bar
                  dataKey="rural"
                  fill="#F59E0B"
                  radius={[3, 3, 0, 0]}
                  name="Rural"
                />
                <Bar
                  dataKey="urban"
                  fill="#2563EB"
                  radius={[3, 3, 0, 0]}
                  name="Urban"
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Key facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {[
            { label: "RBI Repo Rate", value: "6.5%", color: "text-primary" },
            {
              label: "NSE Nifty 50",
              value: "~22,000",
              color: "text-green-600",
            },
            {
              label: "UPI Transactions (2024)",
              value: "100Bn+",
              color: "text-purple-600",
            },
            {
              label: "Mobile Banking Users",
              value: "350M+",
              color: "text-orange-600",
            },
          ].map((m) => (
            <div
              key={m.label}
              className="bg-card border border-border rounded-xl p-5 text-center shadow-card"
            >
              <div className={`font-display text-2xl font-bold ${m.color}`}>
                {m.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
