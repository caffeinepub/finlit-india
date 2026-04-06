import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useMemo, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { PageHeader } from "../components/common/PageHeader";

type Mode = "sip" | "lumpsum";

const SCENARIOS = [
  { label: "Conservative", rate: 7, color: "text-green-600" },
  { label: "Moderate", rate: 10, color: "text-primary" },
  { label: "Aggressive", rate: 15, color: "text-orange-600" },
];

export default function InvestmentCalculator() {
  const [mode, setMode] = useState<Mode>("sip");
  const [amount, setAmount] = useState(5000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const calc = useMemo(() => {
    if (mode === "sip") {
      const n = years * 12;
      const r = rate / 100 / 12;
      const fv =
        r === 0 ? amount * n : amount * (((1 + r) ** n - 1) / r) * (1 + r);
      const invested = amount * n;
      return {
        fv: Math.round(fv),
        invested,
        returns: Math.round(fv - invested),
      };
    }
    const fv = amount * (1 + rate / 100) ** years;
    return {
      fv: Math.round(fv),
      invested: amount,
      returns: Math.round(fv - amount),
    };
  }, [mode, amount, rate, years]);

  const chartData = useMemo(() => {
    return Array.from({ length: years + 1 }, (_, y) => {
      if (mode === "sip") {
        const n = y * 12;
        const r = rate / 100 / 12;
        const fv =
          r === 0 ? amount * n : amount * (((1 + r) ** n - 1) / r) * (1 + r);
        return { year: y, invested: amount * n, value: Math.round(fv) };
      }
      const fv = amount * (1 + rate / 100) ** y;
      return { year: y, invested: amount, value: Math.round(fv) };
    });
  }, [mode, amount, rate, years]);

  const scenarioCalcs = useMemo(() => {
    return SCENARIOS.map((s) => {
      if (mode === "sip") {
        const n = years * 12;
        const r = s.rate / 100 / 12;
        const fv =
          r === 0 ? amount * n : amount * (((1 + r) ** n - 1) / r) * (1 + r);
        return { ...s, fv: Math.round(fv) };
      }
      const fv = amount * (1 + s.rate / 100) ** years;
      return { ...s, fv: Math.round(fv) };
    });
  }, [mode, amount, years]);

  const fmt = (n: number) => `\u20B9${n.toLocaleString("en-IN")}`;

  return (
    <div>
      <PageHeader
        title="Investment Calculator"
        subtitle="Calculate future value of SIPs and lump-sum investments with different growth scenarios"
        badge="Tools"
      />

      <div className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Controls */}
          <div className="lg:col-span-1 space-y-6">
            {/* Mode toggle */}
            <div className="bg-card border border-border rounded-xl p-5 shadow-card">
              <h3 className="font-display font-semibold text-foreground mb-4">
                Investment Type
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  data-ocid="investment.sip_toggle"
                  variant={mode === "sip" ? "default" : "outline"}
                  onClick={() => setMode("sip")}
                  className="text-sm"
                >
                  SIP Monthly
                </Button>
                <Button
                  data-ocid="investment.lumpsum_toggle"
                  variant={mode === "lumpsum" ? "default" : "outline"}
                  onClick={() => setMode("lumpsum")}
                  className="text-sm"
                >
                  Lump Sum
                </Button>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-5 shadow-card space-y-5">
              <div>
                <Label className="text-sm mb-2 block">
                  {mode === "sip" ? "Monthly Investment" : "Principal Amount"}{" "}
                  (\u20B9{amount.toLocaleString("en-IN")})
                </Label>
                <Input
                  data-ocid="investment.amount_input"
                  type="number"
                  min={100}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
              </div>

              <div>
                <Label className="text-sm mb-3 block">
                  Annual Return Rate: {rate}%
                </Label>
                <Slider
                  data-ocid="investment.rate_slider"
                  value={[rate]}
                  onValueChange={([v]) => setRate(v)}
                  min={1}
                  max={30}
                  step={0.5}
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1%</span>
                  <span>30%</span>
                </div>
              </div>

              <div>
                <Label className="text-sm mb-3 block">
                  Time Period: {years} years
                </Label>
                <Slider
                  data-ocid="investment.years_slider"
                  value={[years]}
                  onValueChange={([v]) => setYears(v)}
                  min={1}
                  max={40}
                  step={1}
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1 yr</span>
                  <span>40 yrs</span>
                </div>
              </div>
            </div>

            {/* Scenarios */}
            <div className="bg-card border border-border rounded-xl p-5 shadow-card">
              <h4 className="font-semibold text-sm text-foreground mb-3">
                Return Scenarios
              </h4>
              <div className="space-y-3">
                {scenarioCalcs.map((s) => (
                  <div
                    key={s.label}
                    className="flex justify-between items-center"
                  >
                    <span className="text-sm text-muted-foreground">
                      {s.label} ({s.rate}%)
                    </span>
                    <span className={`font-semibold text-sm ${s.color}`}>
                      {fmt(s.fv)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-2 space-y-6">
            {/* Summary cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-card border border-border rounded-xl p-4 text-center shadow-card">
                <div className="font-display text-lg font-bold text-primary">
                  {fmt(calc.invested)}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Total Invested
                </div>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center shadow-card">
                <div className="font-display text-lg font-bold text-green-600">
                  {fmt(calc.returns)}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Total Returns
                </div>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center shadow-card border-primary/20">
                <div className="font-display text-lg font-bold text-foreground">
                  {fmt(calc.fv)}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Future Value
                </div>
              </div>
            </div>

            {/* Growth chart */}
            <div className="bg-card border border-border rounded-xl p-5 shadow-card">
              <h4 className="font-semibold text-foreground mb-4">
                Wealth Growth Over Time
              </h4>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={chartData}
                  margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(0,0,0,0.06)"
                  />
                  <XAxis
                    dataKey="year"
                    tick={{ fontSize: 11 }}
                    label={{
                      value: "Years",
                      position: "insideBottom",
                      offset: -3,
                      fontSize: 11,
                    }}
                  />
                  <YAxis
                    tick={{ fontSize: 10 }}
                    tickFormatter={(v) =>
                      v >= 100000
                        ? `${(v / 100000).toFixed(1)}L`
                        : v.toLocaleString("en-IN")
                    }
                  />
                  <Tooltip formatter={(v) => [fmt(Number(v)), ""]} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="invested"
                    stroke="#6B7280"
                    strokeWidth={2}
                    dot={false}
                    name="Invested"
                    strokeDasharray="5 5"
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#2563EB"
                    strokeWidth={3}
                    dot={false}
                    name="Portfolio Value"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Summary */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
              <h4 className="font-semibold text-foreground mb-2">Summary</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                By investing{" "}
                {mode === "sip"
                  ? `\u20B9${amount.toLocaleString("en-IN")} monthly`
                  : `\u20B9${amount.toLocaleString("en-IN")} as lump sum`}{" "}
                at an annual return of {rate}% for {years} years, your
                investment of{" "}
                <strong className="text-foreground">
                  {fmt(calc.invested)}
                </strong>{" "}
                will grow to{" "}
                <strong className="text-primary">{fmt(calc.fv)}</strong>,
                generating returns of{" "}
                <strong className="text-green-600">{fmt(calc.returns)}</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
