import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  AlertCircle,
  ArrowLeftRight,
  Calculator,
  Globe,
  Heart,
  Loader2,
  RefreshCw,
  Save,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { PageHeader } from "../components/common/PageHeader";

interface Country {
  code: string;
  name: string;
  flag: string;
  currency: string;
  currencySymbol: string;
  costOfLiving: {
    food: number;
    transport: number;
    hotel: number;
    dailyBudget: number;
  };
  paymentMethods: {
    cash: "Essential" | "Widely Accepted" | "Limited";
    card: "Essential" | "Widely Accepted" | "Limited";
    digital: "Essential" | "Widely Accepted" | "Limited";
    notes: string;
  };
}

const COUNTRIES: Country[] = [
  {
    code: "IN",
    name: "India",
    flag: "🇮🇳",
    currency: "INR",
    currencySymbol: "₹",
    costOfLiving: { food: 300, transport: 150, hotel: 1500, dailyBudget: 2500 },
    paymentMethods: {
      cash: "Widely Accepted",
      card: "Widely Accepted",
      digital: "Essential",
      notes: "UPI dominates. BHIM, PhonePe, GPay accepted almost everywhere.",
    },
  },
  {
    code: "US",
    name: "USA",
    flag: "🇺🇸",
    currency: "USD",
    currencySymbol: "$",
    costOfLiving: { food: 30, transport: 15, hotel: 120, dailyBudget: 180 },
    paymentMethods: {
      cash: "Limited",
      card: "Essential",
      digital: "Widely Accepted",
      notes:
        "Cards are king. Apple Pay & Google Pay widely accepted. Tip 15–20%.",
    },
  },
  {
    code: "GB",
    name: "United Kingdom",
    flag: "🇬🇧",
    currency: "GBP",
    currencySymbol: "£",
    costOfLiving: { food: 25, transport: 12, hotel: 100, dailyBudget: 160 },
    paymentMethods: {
      cash: "Limited",
      card: "Essential",
      digital: "Widely Accepted",
      notes: "Contactless cards are universal. Oyster card for London transit.",
    },
  },
  {
    code: "AE",
    name: "UAE",
    flag: "🇦🇪",
    currency: "AED",
    currencySymbol: "د.إ",
    costOfLiving: { food: 60, transport: 25, hotel: 250, dailyBudget: 400 },
    paymentMethods: {
      cash: "Widely Accepted",
      card: "Essential",
      digital: "Widely Accepted",
      notes:
        "Mix of cash and card. Nol card for Dubai Metro. Very safe to carry cash.",
    },
  },
  {
    code: "TH",
    name: "Thailand",
    flag: "🇹🇭",
    currency: "THB",
    currencySymbol: "฿",
    costOfLiving: { food: 200, transport: 100, hotel: 800, dailyBudget: 1400 },
    paymentMethods: {
      cash: "Essential",
      card: "Widely Accepted",
      digital: "Limited",
      notes:
        "Street food markets require cash. ATMs widely available but charge fees.",
    },
  },
  {
    code: "SG",
    name: "Singapore",
    flag: "🇸🇬",
    currency: "SGD",
    currencySymbol: "S$",
    costOfLiving: { food: 15, transport: 8, hotel: 140, dailyBudget: 200 },
    paymentMethods: {
      cash: "Widely Accepted",
      card: "Essential",
      digital: "Essential",
      notes: "PayNow dominates. EZ-Link card for MRT. Very card-friendly.",
    },
  },
  {
    code: "JP",
    name: "Japan",
    flag: "🇯🇵",
    currency: "JPY",
    currencySymbol: "¥",
    costOfLiving: {
      food: 1500,
      transport: 800,
      hotel: 9000,
      dailyBudget: 15000,
    },
    paymentMethods: {
      cash: "Essential",
      card: "Widely Accepted",
      digital: "Limited",
      notes:
        "Japan is still very cash-heavy. Carry ¥10,000–20,000 at all times.",
    },
  },
  {
    code: "AU",
    name: "Australia",
    flag: "🇦🇺",
    currency: "AUD",
    currencySymbol: "A$",
    costOfLiving: { food: 30, transport: 12, hotel: 120, dailyBudget: 190 },
    paymentMethods: {
      cash: "Limited",
      card: "Essential",
      digital: "Widely Accepted",
      notes:
        "Tap-and-go is everywhere. Opal card for Sydney, Myki for Melbourne.",
    },
  },
  {
    code: "CA",
    name: "Canada",
    flag: "🇨🇦",
    currency: "CAD",
    currencySymbol: "CA$",
    costOfLiving: { food: 30, transport: 12, hotel: 120, dailyBudget: 190 },
    paymentMethods: {
      cash: "Limited",
      card: "Essential",
      digital: "Widely Accepted",
      notes: "Cards and Interac e-Transfer dominate. Tip 15–18% expected.",
    },
  },
  {
    code: "DE",
    name: "Germany",
    flag: "🇩🇪",
    currency: "EUR",
    currencySymbol: "€",
    costOfLiving: { food: 20, transport: 10, hotel: 90, dailyBudget: 150 },
    paymentMethods: {
      cash: "Essential",
      card: "Widely Accepted",
      digital: "Limited",
      notes:
        "Germans still prefer cash (Bargeld). Always carry €20–50 for small shops.",
    },
  },
  {
    code: "FR",
    name: "France",
    flag: "🇫🇷",
    currency: "EUR",
    currencySymbol: "€",
    costOfLiving: { food: 25, transport: 12, hotel: 100, dailyBudget: 165 },
    paymentMethods: {
      cash: "Widely Accepted",
      card: "Essential",
      digital: "Limited",
      notes: "Card preferred in Paris. Small markets may be cash-only.",
    },
  },
  {
    code: "IT",
    name: "Italy",
    flag: "🇮🇹",
    currency: "EUR",
    currencySymbol: "€",
    costOfLiving: { food: 22, transport: 10, hotel: 90, dailyBudget: 155 },
    paymentMethods: {
      cash: "Widely Accepted",
      card: "Widely Accepted",
      digital: "Limited",
      notes: "Mix of cash and card. Small trattorias often cash-only.",
    },
  },
  {
    code: "ES",
    name: "Spain",
    flag: "🇪🇸",
    currency: "EUR",
    currencySymbol: "€",
    costOfLiving: { food: 20, transport: 8, hotel: 80, dailyBudget: 140 },
    paymentMethods: {
      cash: "Widely Accepted",
      card: "Essential",
      digital: "Widely Accepted",
      notes:
        "Contactless payments very common. Bizum (digital) widely used locally.",
    },
  },
  {
    code: "MY",
    name: "Malaysia",
    flag: "🇲🇾",
    currency: "MYR",
    currencySymbol: "RM",
    costOfLiving: { food: 25, transport: 15, hotel: 150, dailyBudget: 250 },
    paymentMethods: {
      cash: "Widely Accepted",
      card: "Widely Accepted",
      digital: "Widely Accepted",
      notes:
        "Touch 'n Go for transit. DuitNow QR widely accepted. Very affordable.",
    },
  },
  {
    code: "ID",
    name: "Indonesia",
    flag: "🇮🇩",
    currency: "IDR",
    currencySymbol: "Rp",
    costOfLiving: {
      food: 60000,
      transport: 40000,
      hotel: 350000,
      dailyBudget: 600000,
    },
    paymentMethods: {
      cash: "Essential",
      card: "Widely Accepted",
      digital: "Widely Accepted",
      notes: "GoPay and OVO are popular. Carry cash for local warungs.",
    },
  },
  {
    code: "NP",
    name: "Nepal",
    flag: "🇳🇵",
    currency: "NPR",
    currencySymbol: "रू",
    costOfLiving: { food: 500, transport: 200, hotel: 1500, dailyBudget: 3000 },
    paymentMethods: {
      cash: "Essential",
      card: "Limited",
      digital: "Limited",
      notes: "Cash is king. Indian rupees also accepted in some places.",
    },
  },
  {
    code: "LK",
    name: "Sri Lanka",
    flag: "🇱🇰",
    currency: "LKR",
    currencySymbol: "Rs",
    costOfLiving: {
      food: 1500,
      transport: 800,
      hotel: 6000,
      dailyBudget: 10000,
    },
    paymentMethods: {
      cash: "Essential",
      card: "Widely Accepted",
      digital: "Limited",
      notes: "Cash preferred outside Colombo. ATMs widely available.",
    },
  },
  {
    code: "MV",
    name: "Maldives",
    flag: "🇲🇻",
    currency: "MVR",
    currencySymbol: "Rf",
    costOfLiving: { food: 200, transport: 150, hotel: 3000, dailyBudget: 5000 },
    paymentMethods: {
      cash: "Widely Accepted",
      card: "Essential",
      digital: "Limited",
      notes: "Resorts accept cards. Carry USD — widely accepted alongside MVR.",
    },
  },
  {
    code: "CH",
    name: "Switzerland",
    flag: "🇨🇭",
    currency: "CHF",
    currencySymbol: "Fr",
    costOfLiving: { food: 30, transport: 15, hotel: 150, dailyBudget: 220 },
    paymentMethods: {
      cash: "Widely Accepted",
      card: "Essential",
      digital: "Widely Accepted",
      notes:
        "TWINT is popular digital app. Most places accept card but carry some CHF.",
    },
  },
  {
    code: "CN",
    name: "China",
    flag: "🇨🇳",
    currency: "CNY",
    currencySymbol: "¥",
    costOfLiving: { food: 50, transport: 20, hotel: 300, dailyBudget: 500 },
    paymentMethods: {
      cash: "Widely Accepted",
      card: "Limited",
      digital: "Essential",
      notes:
        "WeChat Pay & Alipay dominate. Foreign cards have limited acceptance — bring cash.",
    },
  },
  {
    code: "KR",
    name: "South Korea",
    flag: "🇰🇷",
    currency: "KRW",
    currencySymbol: "₩",
    costOfLiving: {
      food: 15000,
      transport: 8000,
      hotel: 80000,
      dailyBudget: 130000,
    },
    paymentMethods: {
      cash: "Widely Accepted",
      card: "Essential",
      digital: "Widely Accepted",
      notes:
        "Koreans love cards. T-money card for transit. KakaoPay is popular.",
    },
  },
  {
    code: "NZ",
    name: "New Zealand",
    flag: "🇳🇿",
    currency: "NZD",
    currencySymbol: "NZ$",
    costOfLiving: { food: 28, transport: 12, hotel: 110, dailyBudget: 180 },
    paymentMethods: {
      cash: "Limited",
      card: "Essential",
      digital: "Widely Accepted",
      notes: "Cards everywhere. EFTPOS is the main debit network.",
    },
  },
  {
    code: "ZA",
    name: "South Africa",
    flag: "🇿🇦",
    currency: "ZAR",
    currencySymbol: "R",
    costOfLiving: { food: 200, transport: 100, hotel: 900, dailyBudget: 1500 },
    paymentMethods: {
      cash: "Widely Accepted",
      card: "Essential",
      digital: "Widely Accepted",
      notes:
        "SnapScan and Zapper digital payments popular. Carry some cash for tipping.",
    },
  },
  {
    code: "BR",
    name: "Brazil",
    flag: "🇧🇷",
    currency: "BRL",
    currencySymbol: "R$",
    costOfLiving: { food: 60, transport: 25, hotel: 220, dailyBudget: 380 },
    paymentMethods: {
      cash: "Widely Accepted",
      card: "Widely Accepted",
      digital: "Essential",
      notes: "PIX (instant transfer) is everywhere. Avoid carrying large cash.",
    },
  },
  {
    code: "RU",
    name: "Russia",
    flag: "🇷🇺",
    currency: "RUB",
    currencySymbol: "₽",
    costOfLiving: { food: 600, transport: 300, hotel: 3000, dailyBudget: 5000 },
    paymentMethods: {
      cash: "Widely Accepted",
      card: "Widely Accepted",
      digital: "Limited",
      notes:
        "Mir cards dominate since SWIFT restrictions. Carry cash as backup.",
    },
  },
  {
    code: "TR",
    name: "Turkey",
    flag: "🇹🇷",
    currency: "TRY",
    currencySymbol: "₺",
    costOfLiving: { food: 300, transport: 150, hotel: 1500, dailyBudget: 2500 },
    paymentMethods: {
      cash: "Widely Accepted",
      card: "Essential",
      digital: "Widely Accepted",
      notes:
        "Very card-friendly. Papara digital wallet popular. USD/EUR also accepted.",
    },
  },
];

const FALLBACK_RATES: Record<string, number> = {
  USD: 0.012,
  GBP: 0.0095,
  AED: 0.044,
  THB: 0.42,
  SGD: 0.016,
  JPY: 1.8,
  AUD: 0.018,
  CAD: 0.016,
  EUR: 0.011,
  MYR: 0.054,
  IDR: 188,
  NPR: 1.6,
  LKR: 3.7,
  MVR: 0.185,
  CHF: 0.011,
  CNY: 0.087,
  KRW: 16,
  NZD: 0.02,
  ZAR: 0.22,
  BRL: 0.059,
  RUB: 1.1,
  TRY: 0.39,
  INR: 1,
};

const TRAVEL_TIPS = [
  {
    emoji: "💱",
    title: "Avoid Airport Exchange → Use ATM",
    description:
      "Airport money changers charge 5–10% commission. Use local ATMs on arrival for rates close to the interbank rate. Inform your bank before travel to avoid card blocks.",
    color: "bg-blue-50 dark:bg-blue-950/30",
    iconBg: "bg-blue-100 dark:bg-blue-900/50",
    iconText: "text-blue-600 dark:text-blue-400",
    borderColor: "border-l-blue-500",
  },
  {
    emoji: "💳",
    title: "Enable International Card Before Travel",
    description:
      "Call your bank or use net banking to activate international transactions. Set a daily limit. Enable SMS alerts for all transactions abroad to catch fraud instantly.",
    color: "bg-green-50 dark:bg-green-950/30",
    iconBg: "bg-green-100 dark:bg-green-900/50",
    iconText: "text-green-600 dark:text-green-400",
    borderColor: "border-l-green-500",
  },
  {
    emoji: "💸",
    title: "Use Public Transport to Save Money",
    description:
      "Taxis and ride-shares abroad can cost 5–10x more than local buses or metros. Buy a transit pass for multi-day trips. Use Google Maps for public transport routes.",
    color: "bg-purple-50 dark:bg-purple-950/30",
    iconBg: "bg-purple-100 dark:bg-purple-900/50",
    iconText: "text-purple-600 dark:text-purple-400",
    borderColor: "border-l-purple-500",
  },
  {
    emoji: "🔐",
    title: "Don't Share OTP/PIN, Avoid Public Wi-Fi",
    description:
      "Never enter banking passwords on hotel or café Wi-Fi. Use a VPN or mobile data for financial transactions. Cover keypads when entering PINs at ATMs abroad.",
    color: "bg-red-50 dark:bg-red-950/30",
    iconBg: "bg-red-100 dark:bg-red-900/50",
    iconText: "text-red-600 dark:text-red-400",
    borderColor: "border-l-red-500",
  },
  {
    emoji: "💵",
    title: "Keep Small Cash + Backup Card",
    description:
      "Always carry ₹5,000–10,000 equivalent in local cash for emergencies. Keep a second card in a separate bag. Note your bank's international helpline number before you fly.",
    color: "bg-orange-50 dark:bg-orange-950/30",
    iconBg: "bg-orange-100 dark:bg-orange-900/50",
    iconText: "text-orange-600 dark:text-orange-400",
    borderColor: "border-l-orange-500",
  },
  {
    emoji: "📱",
    title: "Use Currency Converter & Track Spending",
    description:
      "Apps like XE Currency or Google can convert on the go. Track daily spending in a notes app. Know your budget limit before you land to avoid overspending.",
    color: "bg-teal-50 dark:bg-teal-950/30",
    iconBg: "bg-teal-100 dark:bg-teal-900/50",
    iconText: "text-teal-600 dark:text-teal-400",
    borderColor: "border-l-teal-500",
  },
];

const PAYMENT_BADGE_COLORS: Record<string, string> = {
  Essential:
    "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  "Widely Accepted":
    "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  Limited: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
};

export default function TravelFinance() {
  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [rate, setRate] = useState<number | null>(null);
  const [rateLoading, setRateLoading] = useState(false);
  const [rateError, setRateError] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const [converterAmount, setConverterAmount] = useState("1000");
  const [selectedDestination, setSelectedDestination] = useState("US");
  const [tripDays, setTripDays] = useState("7");
  const [tripDailyBudget, setTripDailyBudget] = useState("");
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      return JSON.parse(
        localStorage.getItem("finlit-travel-favorites") || "[]",
      );
    } catch {
      return [];
    }
  });

  const fromCountry =
    COUNTRIES.find((c) => c.currency === fromCurrency) ?? COUNTRIES[0];
  const toCountry =
    COUNTRIES.find((c) => c.currency === toCurrency) ?? COUNTRIES[1];
  const destinationCountry =
    COUNTRIES.find((c) => c.code === selectedDestination) ?? COUNTRIES[1];

  const fetchRate = useCallback(async () => {
    if (fromCurrency === toCurrency) {
      setRate(1);
      return;
    }
    setRateLoading(true);
    setRateError(false);
    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?from=${fromCurrency}&to=${toCurrency}`,
      );
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      const fetched = data.rates?.[toCurrency];
      if (typeof fetched === "number") {
        setRate(fetched);
        setLastUpdated(new Date().toLocaleTimeString());
      } else {
        throw new Error("Rate not found");
      }
    } catch {
      const toRateInINR = FALLBACK_RATES[toCurrency] ?? 1;
      const fromRateInINR = FALLBACK_RATES[fromCurrency] ?? 1;
      const fallbackRate = toRateInINR / fromRateInINR;
      setRate(fallbackRate);
      setRateError(true);
      setLastUpdated("(static fallback)");
    } finally {
      setRateLoading(false);
    }
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    fetchRate();
  }, [fetchRate]);

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const convertedAmount =
    rate && converterAmount
      ? (Number.parseFloat(converterAmount) * rate).toFixed(2)
      : "--";

  const toggleFavorite = (countryCode: string) => {
    setFavorites((prev) => {
      const updated = prev.includes(countryCode)
        ? prev.filter((c) => c !== countryCode)
        : [...prev, countryCode];
      localStorage.setItem("finlit-travel-favorites", JSON.stringify(updated));
      return updated;
    });
  };

  const getINREquivalent = (localAmount: number, destCurrency: string) => {
    const destToINR = FALLBACK_RATES[destCurrency]
      ? 1 / FALLBACK_RATES[destCurrency]
      : 1;
    return Math.round(localAmount * destToINR);
  };

  const saveBudgetEstimate = () => {
    const days = Number.parseInt(tripDays) || 0;
    const daily = Number.parseFloat(tripDailyBudget) || 0;
    if (!days || !daily) {
      toast.error("Please enter both days and daily budget");
      return;
    }
    const total = days * daily;
    const inrRate = FALLBACK_RATES[destinationCountry.currency]
      ? 1 / FALLBACK_RATES[destinationCountry.currency]
      : 1;
    const estimate = {
      country: destinationCountry.name,
      currency: destinationCountry.currency,
      days,
      dailyBudget: daily,
      totalLocal: total,
      totalINR: Math.round(total * inrRate),
      savedAt: new Date().toISOString(),
    };
    const existing = JSON.parse(
      localStorage.getItem("finlit-travel-budgets") || "[]",
    );
    existing.unshift(estimate);
    localStorage.setItem(
      "finlit-travel-budgets",
      JSON.stringify(existing.slice(0, 10)),
    );
    toast.success(
      `Budget saved! ${destinationCountry.flag} ${destinationCountry.name} trip: ${destinationCountry.currencySymbol}${total.toLocaleString()} ≈ ₹${Math.round(total * inrRate).toLocaleString()}`,
    );
  };

  const favoriteCountries = COUNTRIES.filter((c) => favorites.includes(c.code));

  return (
    <div className="min-h-screen">
      <PageHeader
        title="✈️ Travel Finance"
        subtitle="Plan your international trips smarter with live exchange rates, cost estimates, and money-saving tips"
        badge="Global Finance Guide"
      />

      {/* ===== HERO: Country Selector ===== */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-10 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-stretch gap-4 md:gap-6"
          >
            {/* FROM card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-1 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6"
            >
              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
                From
              </p>
              <div className="text-5xl mb-2">{fromCountry.flag}</div>
              <div className="font-bold text-xl text-foreground mb-1">
                {fromCountry.name}
              </div>
              <div className="text-sm text-muted-foreground mb-4">
                {fromCountry.currency} · {fromCountry.currencySymbol}
              </div>
              <Select value={fromCurrency} onValueChange={setFromCurrency}>
                <SelectTrigger
                  data-ocid="travel.select"
                  className="w-full border-blue-200 dark:border-blue-800 focus:ring-blue-400"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {COUNTRIES.map((c) => (
                    <SelectItem key={c.currency + c.code} value={c.currency}>
                      {c.flag} {c.currency} — {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>

            {/* Swap button */}
            <div className="flex items-center justify-center">
              <motion.button
                type="button"
                onClick={swapCurrencies}
                whileHover={{ scale: 1.12, rotate: 180 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white dark:bg-gray-800 rounded-full p-4 shadow-xl text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/40 transition-colors"
                aria-label="Swap currencies"
                data-ocid="travel.button"
              >
                <ArrowLeftRight className="h-6 w-6" />
              </motion.button>
            </div>

            {/* TO card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex-1 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6"
            >
              <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">
                To
              </p>
              <div className="text-5xl mb-2">{toCountry.flag}</div>
              <div className="font-bold text-xl text-foreground mb-1">
                {toCountry.name}
              </div>
              <div className="text-sm text-muted-foreground mb-4">
                {toCountry.currency} · {toCountry.currencySymbol}
              </div>
              <Select value={toCurrency} onValueChange={setToCurrency}>
                <SelectTrigger
                  data-ocid="travel.select"
                  className="w-full border-indigo-200 dark:border-indigo-800 focus:ring-indigo-400"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {COUNTRIES.map((c) => (
                    <SelectItem key={c.currency + c.code} value={c.currency}>
                      {c.flag} {c.currency} — {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>
          </motion.div>

          {/* Live rate display */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3"
          >
            <div className="flex items-center gap-3">
              <AnimatePresence mode="wait">
                {rateLoading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-white/80"
                    data-ocid="travel.loading_state"
                  >
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span className="text-sm">Fetching live rate…</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="rate"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-2xl font-bold text-white">
                      {fromCountry.flag} 1 {fromCurrency} = {toCountry.flag}{" "}
                      <span className="text-yellow-300">
                        {rate ? rate.toFixed(4) : "--"}
                      </span>{" "}
                      {toCurrency}
                    </span>
                    {rateError && (
                      <span
                        className="text-xs text-orange-300 flex items-center gap-1"
                        data-ocid="travel.error_state"
                      >
                        <AlertCircle className="h-3 w-3" /> static fallback
                      </span>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="flex items-center gap-2">
              {lastUpdated && !rateLoading && (
                <span className="text-white/60 text-xs">
                  {rateError ? "Static" : `Updated: ${lastUpdated}`}
                </span>
              )}
              <button
                type="button"
                onClick={fetchRate}
                disabled={rateLoading}
                className="text-white/80 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/10"
                aria-label="Refresh rate"
                data-ocid="travel.button"
              >
                <RefreshCw
                  className={`h-4 w-4 ${rateLoading ? "animate-spin" : ""}`}
                />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 space-y-12">
        {/* Section: Quick Converter */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl font-bold mb-2 flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            Quick Converter
          </h2>
          <p className="text-muted-foreground mb-6 text-sm">
            Enter an amount to convert between your selected currencies
          </p>

          <Card className="shadow-card max-w-lg">
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-1.5">
                <Label>
                  Amount in {fromCurrency} {fromCountry.flag}
                </Label>
                <Input
                  data-ocid="travel.input"
                  type="number"
                  value={converterAmount}
                  onChange={(e) => setConverterAmount(e.target.value)}
                  placeholder="Enter amount…"
                  min="0"
                />
              </div>

              <div className="bg-muted rounded-xl p-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    {fromCountry.flag} {fromCurrency}
                  </span>
                  <span className="font-semibold">
                    {fromCountry.currencySymbol}
                    {Number.parseFloat(converterAmount || "0").toLocaleString()}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    {toCountry.flag} {toCurrency}
                  </span>
                  <span className="font-bold text-primary text-lg">
                    {toCountry.currencySymbol}
                    {Number(convertedAmount).toLocaleString()}
                  </span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground">
                💡 Tip: Always factor in ~2–3% bank forex charges on top of the
                displayed rate.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Section: Cost of Living */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
            <div>
              <h2 className="font-display text-2xl font-bold">
                💰 Cost of Living Estimates
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                Select your destination to see daily cost estimates
              </p>
            </div>
            <div className="sm:ml-auto w-full sm:w-64">
              <Select
                value={selectedDestination}
                onValueChange={setSelectedDestination}
              >
                <SelectTrigger data-ocid="travel.select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {COUNTRIES.filter((c) => c.code !== "IN").map((c) => (
                    <SelectItem key={c.code} value={c.code}>
                      {c.flag} {c.name} ({c.currency})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: "Food (daily)",
                emoji: "🍔",
                value: destinationCountry.costOfLiving.food,
                color: "text-orange-500",
                bg: "bg-orange-50 dark:bg-orange-950/20",
              },
              {
                label: "Transport (daily)",
                emoji: "🚕",
                value: destinationCountry.costOfLiving.transport,
                color: "text-blue-500",
                bg: "bg-blue-50 dark:bg-blue-950/20",
              },
              {
                label: "Hotel (per night)",
                emoji: "🏨",
                value: destinationCountry.costOfLiving.hotel,
                color: "text-purple-500",
                bg: "bg-purple-50 dark:bg-purple-950/20",
              },
              {
                label: "Daily Budget",
                emoji: "📅",
                value: destinationCountry.costOfLiving.dailyBudget,
                color: "text-green-500",
                bg: "bg-green-50 dark:bg-green-950/20",
              },
            ].map((item) => (
              <Card
                key={item.label}
                className={`shadow-card border-0 ${item.bg}`}
              >
                <CardContent className="pt-5 pb-4">
                  <div className="text-3xl mb-2">{item.emoji}</div>
                  <div className={`font-bold text-lg ${item.color}`}>
                    {destinationCountry.currencySymbol}
                    {item.value.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {item.label}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">
                    ≈ ₹
                    {getINREquivalent(
                      item.value,
                      destinationCountry.currency,
                    ).toLocaleString()}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Section: Payment Methods */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl font-bold mb-2">
            💳 Payment Methods Guide
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            How to pay in {destinationCountry.flag} {destinationCountry.name}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {[
              {
                icon: "💵",
                label: "Cash",
                level: destinationCountry.paymentMethods.cash,
              },
              {
                icon: "💳",
                label: "Card",
                level: destinationCountry.paymentMethods.card,
              },
              {
                icon: "📱",
                label: "Digital Wallet",
                level: destinationCountry.paymentMethods.digital,
              },
            ].map((method) => (
              <Card key={method.label} className="shadow-card">
                <CardContent className="pt-5 text-center">
                  <div className="text-3xl mb-3">{method.icon}</div>
                  <div className="font-semibold text-base mb-2">
                    {method.label}
                  </div>
                  <Badge className={PAYMENT_BADGE_COLORS[method.level]}>
                    {method.level}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="shadow-card bg-muted/30">
            <CardContent className="py-4">
              <p className="text-sm text-foreground">
                <span className="font-semibold">💡 Local Note:</span>{" "}
                {destinationCountry.paymentMethods.notes}
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Section: Essential Travel Money Tips */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <Badge className="mb-3 bg-primary/10 text-primary border-primary/20 text-xs font-semibold px-3 py-1">
              Must-Know Before You Fly
            </Badge>
            <h2 className="font-display text-2xl md:text-3xl font-bold">
              Essential Travel Money Tips
            </h2>
            <p className="text-muted-foreground mt-2 text-sm max-w-2xl mx-auto">
              6 proven strategies to protect your money and travel smarter —
              used by experienced Indian travellers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TRAVEL_TIPS.map((tip, i) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                data-ocid={`travel.item.${i + 1}`}
              >
                <Card
                  className={`shadow-card h-full border-l-4 ${tip.borderColor} ${tip.color}`}
                >
                  <CardContent className="pt-5 pb-5">
                    <div className="flex gap-4">
                      <div
                        className={`${tip.iconBg} ${tip.iconText} rounded-xl w-12 h-12 flex-shrink-0 flex items-center justify-center text-2xl`}
                      >
                        {tip.emoji}
                      </div>
                      <div>
                        <h3 className="font-semibold text-base mb-1.5 leading-snug">
                          {tip.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {tip.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section: Trip Budget Calculator */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl font-bold mb-2 flex items-center gap-2">
            <Calculator className="h-6 w-6 text-primary" />
            Trip Budget Calculator
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Estimate your total trip cost and save it for later
          </p>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="shadow-card">
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-1.5">
                  <Label>Destination Country</Label>
                  <Select
                    value={selectedDestination}
                    onValueChange={setSelectedDestination}
                  >
                    <SelectTrigger data-ocid="travel.select">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {COUNTRIES.filter((c) => c.code !== "IN").map((c) => (
                        <SelectItem key={c.code} value={c.code}>
                          {c.flag} {c.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label>Number of Days</Label>
                    <Input
                      data-ocid="travel.input"
                      type="number"
                      value={tripDays}
                      onChange={(e) => setTripDays(e.target.value)}
                      placeholder="e.g. 7"
                      min="1"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label>
                      Daily Budget ({destinationCountry.currencySymbol})
                    </Label>
                    <Input
                      data-ocid="travel.input"
                      type="number"
                      value={tripDailyBudget}
                      onChange={(e) => setTripDailyBudget(e.target.value)}
                      placeholder={`e.g. ${destinationCountry.costOfLiving.dailyBudget}`}
                      min="0"
                    />
                  </div>
                </div>
                <Button
                  data-ocid="travel.save_button"
                  onClick={saveBudgetEstimate}
                  className="w-full"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save This Estimate
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-primary/5 border-primary/20">
              <CardContent className="pt-6 space-y-4">
                <h3 className="font-semibold text-base">Budget Breakdown</h3>
                {tripDays && tripDailyBudget ? (
                  <>
                    <div className="space-y-2">
                      {[
                        { label: "🏨 Accommodation (40%)", pct: 0.4 },
                        { label: "🍔 Food & Drinks (25%)", pct: 0.25 },
                        { label: "🚕 Transport (20%)", pct: 0.2 },
                        { label: "🎡 Activities / Misc (15%)", pct: 0.15 },
                      ].map((item) => {
                        const total =
                          Number.parseInt(tripDays) *
                          Number.parseFloat(tripDailyBudget);
                        const amt = (total * item.pct).toFixed(0);
                        return (
                          <div
                            key={item.label}
                            className="flex justify-between items-center text-sm"
                          >
                            <span className="text-muted-foreground">
                              {item.label}
                            </span>
                            <span className="font-semibold">
                              {destinationCountry.currencySymbol}
                              {Number(amt).toLocaleString()}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-base">
                      <span>Total ({destinationCountry.currency})</span>
                      <span className="text-primary">
                        {destinationCountry.currencySymbol}
                        {(
                          Number.parseInt(tripDays) *
                          Number.parseFloat(tripDailyBudget)
                        ).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>≈ Indian Rupees</span>
                      <span className="font-semibold text-foreground">
                        ₹
                        {getINREquivalent(
                          Number.parseInt(tripDays) *
                            Number.parseFloat(tripDailyBudget),
                          destinationCountry.currency,
                        ).toLocaleString()}
                      </span>
                    </div>
                  </>
                ) : (
                  <div
                    className="text-center py-8 text-muted-foreground text-sm"
                    data-ocid="travel.empty_state"
                  >
                    Enter days and daily budget to see your breakdown
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Section: Favorite Countries */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl font-bold mb-2 flex items-center gap-2">
            <Heart className="h-6 w-6 text-red-500" />
            Countries & Favorites
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Save countries you plan to visit. Click ❤️ to add/remove.
          </p>

          {favoriteCountries.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Your Saved Countries
              </h3>
              <div className="flex flex-wrap gap-2">
                {favoriteCountries.map((c) => (
                  <Badge
                    key={c.code}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-primary/10 text-primary border-primary/20 cursor-pointer"
                    onClick={() => toggleFavorite(c.code)}
                    data-ocid="travel.toggle"
                  >
                    {c.flag} {c.name}
                    <span className="text-red-500 ml-1">❤️</span>
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {favoriteCountries.length === 0 && (
            <div
              className="text-center py-6 text-muted-foreground text-sm mb-6"
              data-ocid="travel.empty_state"
            >
              No favorites yet. Click the heart icon on any country below to
              save it.
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {COUNTRIES.filter((c) => c.code !== "IN").map((country, i) => {
              const isFav = favorites.includes(country.code);
              const inrRate = FALLBACK_RATES[country.currency]
                ? (1 / FALLBACK_RATES[country.currency]).toFixed(2)
                : "N/A";
              return (
                <motion.div
                  key={country.code}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: (i % 8) * 0.05 }}
                  data-ocid={`travel.item.${i + 1}`}
                >
                  <Card
                    className={`shadow-card hover:shadow-card-hover transition-shadow cursor-pointer group ${
                      isFav ? "border-red-300 dark:border-red-800" : ""
                    }`}
                  >
                    <CardContent className="pt-4 pb-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-2xl mb-1">{country.flag}</div>
                          <div className="font-semibold text-sm">
                            {country.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {country.currency} · {country.currencySymbol}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            1 {country.currencySymbol} ≈ ₹{inrRate}
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => toggleFavorite(country.code)}
                          className="p-1.5 rounded-full hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                          aria-label={
                            isFav ? "Remove from favorites" : "Add to favorites"
                          }
                          data-ocid="travel.toggle"
                        >
                          <Heart
                            className={`h-4 w-4 transition-colors ${
                              isFav
                                ? "fill-red-500 text-red-500"
                                : "text-muted-foreground group-hover:text-red-400"
                            }`}
                          />
                        </button>
                      </div>
                      <div className="mt-3 pt-2 border-t border-border">
                        <div className="text-xs text-muted-foreground">
                          Budget ≈ {country.currencySymbol}
                          {country.costOfLiving.dailyBudget.toLocaleString()}
                          /day
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
