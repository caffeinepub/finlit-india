import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Circle,
  GraduationCap,
  Lock,
  Printer,
  Star,
  TrendingUp,
  Trophy,
  Youtube,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "cashindia_learning_progress";

type ModuleStatus = "locked" | "available" | "completed";

interface Module {
  id: string;
  title: string;
  description: string;
  duration: string;
  topics: string[];
  videoUrl?: string;
}

interface Level {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  bgColor: string;
  borderColor: string;
  icon: React.ReactNode;
  modules: Module[];
  certificateTitle: string;
}

const LEVELS: Level[] = [
  {
    id: "beginner",
    title: "Beginner",
    subtitle: "Start your financial journey",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
    borderColor: "border-emerald-200 dark:border-emerald-800",
    icon: <BookOpen className="h-6 w-6" />,
    certificateTitle: "Financial Literacy Foundations",
    modules: [
      {
        id: "b1",
        title: "What is Financial Literacy?",
        description:
          "Understand why managing money matters and how it impacts your life.",
        duration: "10 min",
        topics: [
          "Definition of financial literacy",
          "Why it matters in India",
          "Common money mistakes",
          "Setting financial goals",
        ],
        videoUrl: "https://www.youtube.com/watch?v=ZpwiJrzcYwA",
      },
      {
        id: "b2",
        title: "Budgeting Basics",
        description:
          "Learn the 50/30/20 rule and how to create your first monthly budget.",
        duration: "15 min",
        topics: [
          "50/30/20 rule",
          "Fixed vs variable expenses",
          "Tracking daily spending",
          "Free budgeting tools",
        ],
        videoUrl: "https://www.youtube.com/watch?v=sVKQn2I4HDM",
      },
      {
        id: "b3",
        title: "Understanding Bank Accounts",
        description:
          "Types of accounts, how interest works, and choosing the right bank.",
        duration: "12 min",
        topics: [
          "Savings vs current account",
          "Interest rates explained",
          "Zero-balance accounts (811)",
          "Jan Dhan Yojana",
        ],
        videoUrl: "https://www.youtube.com/watch?v=YtknqMDZLiI",
      },
      {
        id: "b4",
        title: "Digital Payments in India",
        description: "UPI, BHIM, PhonePe — how digital money works safely.",
        duration: "10 min",
        topics: [
          "How UPI works",
          "Setting up BHIM/PhonePe",
          "Safe transaction tips",
          "Avoiding common scams",
        ],
        videoUrl: "https://www.youtube.com/watch?v=nbHLflG_Eyc",
      },
      {
        id: "b5",
        title: "Government Schemes for You",
        description:
          "Discover free government schemes that can protect and grow your money.",
        duration: "12 min",
        topics: [
          "PMJDY, PMJJBY, PMSBY",
          "Atal Pension Yojana",
          "Mudra Yojana",
          "How to apply online",
        ],
        videoUrl: "https://www.youtube.com/watch?v=UiG-HuUBjP8",
      },
    ],
  },
  {
    id: "intermediate",
    title: "Intermediate",
    subtitle: "Build and grow your wealth",
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
    borderColor: "border-blue-200 dark:border-blue-800",
    icon: <TrendingUp className="h-6 w-6" />,
    certificateTitle: "Smart Investing & Planning",
    modules: [
      {
        id: "i1",
        title: "Saving vs Investing",
        description:
          "When to save and when to invest — and why the difference matters.",
        duration: "15 min",
        topics: [
          "Emergency fund (3-6 months)",
          "FD, RD, PPF explained",
          "Mutual funds overview",
          "SIP: start with ₹500/month",
        ],
        videoUrl: "https://www.youtube.com/watch?v=rcA2PycBQr4",
      },
      {
        id: "i2",
        title: "Stock Market Basics",
        description:
          "Demystify the BSE, NSE, and how to start investing in stocks.",
        duration: "20 min",
        topics: [
          "BSE vs NSE",
          "How to open a demat account",
          "Sensex & Nifty explained",
          "Zerodha, Groww for beginners",
        ],
        videoUrl: "https://www.youtube.com/watch?v=p7HKvqRI_Bo",
      },
      {
        id: "i3",
        title: "Credit & Loans",
        description:
          "Understanding credit scores, EMIs, and how to borrow responsibly.",
        duration: "15 min",
        topics: [
          "What is CIBIL score?",
          "How EMI is calculated",
          "Home loan vs personal loan",
          "Avoiding debt traps",
        ],
        videoUrl: "https://www.youtube.com/watch?v=_DJ7lM4MSMk",
      },
      {
        id: "i4",
        title: "Insurance Essentials",
        description:
          "Health, life, and vehicle insurance — what you actually need.",
        duration: "15 min",
        topics: [
          "Term life insurance",
          "Health insurance (floater)",
          "Vehicle insurance (mandatory)",
          "IRDAI regulation",
        ],
        videoUrl: "https://www.youtube.com/watch?v=ozrWvF3lA7g",
      },
      {
        id: "i5",
        title: "Understanding Taxes",
        description:
          "Income tax slabs, deductions, and how to file your ITR online.",
        duration: "20 min",
        topics: [
          "Old vs new tax regime",
          "Section 80C deductions",
          "How to file ITR on incometax.gov.in",
          "PAN, Form 16, TDS",
        ],
        videoUrl: "https://www.youtube.com/watch?v=yt9OQrHjvRY",
      },
    ],
  },
  {
    id: "advanced",
    title: "Advanced",
    subtitle: "Master financial planning",
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
    borderColor: "border-purple-200 dark:border-purple-800",
    icon: <Trophy className="h-6 w-6" />,
    certificateTitle: "Advanced Financial Mastery",
    modules: [
      {
        id: "a1",
        title: "Retirement Planning",
        description: "Build a retirement corpus and plan for a secure future.",
        duration: "20 min",
        topics: [
          "NPS (National Pension System)",
          "EPF & PPF strategy",
          "Corpus calculator",
          "Retirement at 60 vs 55",
        ],
        videoUrl: "https://www.youtube.com/watch?v=SZ-nrjC3-xQ",
      },
      {
        id: "a2",
        title: "Real Estate & Gold",
        description: "Smart ways to invest in property and gold in India.",
        duration: "18 min",
        topics: [
          "REITs for small investors",
          "Sovereign Gold Bonds",
          "Property registration basics",
          "Gold ETF vs physical gold",
        ],
        videoUrl: "https://www.youtube.com/watch?v=JG2N2sdhSGQ",
      },
      {
        id: "a3",
        title: "Financial Fraud & Security",
        description:
          "Recognize and avoid the most common financial scams in India.",
        duration: "15 min",
        topics: [
          "OTP & phishing scams",
          "KYC fraud",
          "Reporting to cybercrime.gov.in",
          "RBI Ombudsman",
        ],
        videoUrl: "https://www.youtube.com/watch?v=h7ShT2-45hc",
      },
      {
        id: "a4",
        title: "Travel Finance",
        description:
          "Plan international travel on a budget with smart currency strategies.",
        duration: "15 min",
        topics: [
          "Forex cards vs cash",
          "ATM abroad tips",
          "International credit cards",
          "Budget travel planner",
        ],
        videoUrl: "https://www.youtube.com/watch?v=QQq2bXBosKc",
      },
      {
        id: "a5",
        title: "Building a Financial Plan",
        description:
          "Bring it all together — create your personal 5-year financial roadmap.",
        duration: "25 min",
        topics: [
          "Net worth calculation",
          "Goal-based investing",
          "Asset allocation by age",
          "Review & rebalance annually",
        ],
        videoUrl: "https://www.youtube.com/watch?v=wJl7KlESQ7M",
      },
    ],
  },
];

type ProgressState = Record<string, boolean>;

function getStatus(
  moduleId: string,
  levelId: string,
  progress: ProgressState,
  levels: Level[],
): ModuleStatus {
  if (progress[moduleId]) return "completed";
  if (levelId === "beginner") return "available";
  const levelIndex = levels.findIndex((l) => l.id === levelId);
  if (levelIndex === 0) return "available";
  const prevLevel = levels[levelIndex - 1];
  const allPrevCompleted = prevLevel.modules.every((m) => progress[m.id]);
  return allPrevCompleted ? "available" : "locked";
}

function CertificateBadge({ level, show }: { level: Level; show: boolean }) {
  if (!show) return null;
  return (
    <div
      className={`mt-4 rounded-xl border-2 ${level.borderColor} ${level.bgColor} p-4 flex items-center gap-4`}
    >
      <div
        className={`rounded-full bg-white dark:bg-gray-900 p-3 shadow ${level.borderColor} border`}
      >
        <Award className={`h-8 w-8 ${level.color}`} />
      </div>
      <div>
        <div className="flex items-center gap-2">
          <Star className={`h-4 w-4 ${level.color} fill-current`} />
          <span className="font-bold text-sm">Certificate Earned!</span>
        </div>
        <p className={`font-semibold ${level.color}`}>
          {level.certificateTitle}
        </p>
        <p className="text-xs text-muted-foreground">
          cashindia.com — Developed by VCACS Students
        </p>
      </div>
    </div>
  );
}

interface PrintableCertificateProps {
  level: Level;
  name: string;
  onNameChange: (name: string) => void;
}

function PrintableCertificate({
  level,
  name,
  onNameChange,
}: PrintableCertificateProps) {
  const certRef = useRef<HTMLDivElement>(null);
  const completionDate = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const handlePrint = () => {
    window.print();
  };

  // Inject print CSS once on mount
  useEffect(() => {
    const styleId = `print-cert-style-${level.id}`;
    if (document.getElementById(styleId)) return;
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      @media print {
        body > * { display: none !important; }
        .printable-cert-${level.id} {
          display: block !important;
          position: fixed;
          inset: 0;
          width: 100vw;
          height: 100vh;
          z-index: 99999;
          background: #fff;
          padding: 40px;
          box-sizing: border-box;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      const el = document.getElementById(styleId);
      if (el) el.remove();
    };
  }, [level.id]);

  return (
    <div className="mt-5 space-y-4">
      {/* Name input */}
      <div className="space-y-1.5">
        <Label
          htmlFor={`cert-name-${level.id}`}
          className="text-sm font-medium"
        >
          Enter your name for the certificate
        </Label>
        <Input
          id={`cert-name-${level.id}`}
          data-ocid="learning.input"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="Your full name"
          className="max-w-xs"
        />
      </div>

      {/* Certificate card */}
      <div
        ref={certRef}
        className={`printable-cert-${level.id} border-4 border-double rounded-2xl p-8 bg-white dark:bg-gray-900 shadow-xl relative overflow-hidden`}
        style={{ borderColor: "#1d4ed8" }}
      >
        {/* Decorative corners */}
        <div className="absolute top-3 left-3 w-8 h-8 border-l-4 border-t-4 border-yellow-400 rounded-tl-lg" />
        <div className="absolute top-3 right-3 w-8 h-8 border-r-4 border-t-4 border-yellow-400 rounded-tr-lg" />
        <div className="absolute bottom-3 left-3 w-8 h-8 border-l-4 border-b-4 border-yellow-400 rounded-bl-lg" />
        <div className="absolute bottom-3 right-3 w-8 h-8 border-r-4 border-b-4 border-yellow-400 rounded-br-lg" />

        <div className="text-center">
          {/* Header */}
          <div className="text-4xl mb-2">🏆</div>
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-700 dark:text-blue-400 mb-1">
            Certificate of Completion
          </p>
          <div className="w-24 h-0.5 bg-yellow-400 mx-auto mb-4" />

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            This certifies that
          </p>
          <p className="text-2xl font-bold text-gray-800 dark:text-white mb-3 min-h-[2rem]">
            {name || <span className="italic text-gray-400">Your Name</span>}
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            has successfully completed
          </p>
          <p
            className={`text-xl font-bold mb-1 ${
              level.id === "beginner"
                ? "text-emerald-600"
                : level.id === "intermediate"
                  ? "text-blue-600"
                  : "text-purple-600"
            }`}
          >
            {level.certificateTitle}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {level.title} Level — Financial Literacy Course
          </p>

          <div className="w-24 h-0.5 bg-yellow-400 mx-auto mb-4" />

          <div className="flex justify-between items-end text-xs text-gray-400 dark:text-gray-500">
            <span>Date: {completionDate}</span>
            <span className="text-center">
              <span className="font-semibold text-blue-700 dark:text-blue-400">
                cashindia.com
              </span>
              <br />
              Developed by VCACS Students
            </span>
          </div>
        </div>
      </div>

      {/* Print button */}
      <Button
        variant="outline"
        size="sm"
        onClick={handlePrint}
        className="gap-2"
        data-ocid="learning.button"
      >
        <Printer className="h-4 w-4" />
        🖨️ Print Certificate
      </Button>
    </div>
  );
}

export default function LearningPath() {
  const [progress, setProgress] = useState<ProgressState>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    beginner: true,
  });
  const [expandedModules, setExpandedModules] = useState<
    Record<string, boolean>
  >({});
  const [certNames, setCertNames] = useState<Record<string, string>>({});

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  function toggleModule(moduleId: string) {
    setProgress((prev) => ({ ...prev, [moduleId]: !prev[moduleId] }));
  }

  function toggleLevel(levelId: string) {
    setExpanded((prev) => ({ ...prev, [levelId]: !prev[levelId] }));
  }

  function toggleModuleExpand(moduleId: string) {
    setExpandedModules((prev) => ({ ...prev, [moduleId]: !prev[moduleId] }));
  }

  function resetProgress() {
    if (window.confirm("Reset all progress? This cannot be undone.")) {
      setProgress({});
    }
  }

  function setCertName(levelId: string, name: string) {
    setCertNames((prev) => ({ ...prev, [levelId]: name }));
  }

  const totalModules = LEVELS.reduce((sum, l) => sum + l.modules.length, 0);
  const completedModules = Object.values(progress).filter(Boolean).length;
  const overallProgress = Math.round((completedModules / totalModules) * 100);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary/90 to-primary py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 rounded-full p-4">
              <GraduationCap className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Learning Path
          </h1>
          <p className="text-white/80 text-lg mb-6">
            Financial Literacy — Beginner to Advanced
          </p>
          <div className="bg-white/10 rounded-2xl p-5 max-w-md mx-auto">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white/80 text-sm">Overall Progress</span>
              <span className="text-white font-bold">
                {completedModules}/{totalModules} modules
              </span>
            </div>
            <Progress value={overallProgress} className="h-3 bg-white/20" />
            <p className="text-white/70 text-xs mt-2">
              {overallProgress}% complete
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-10">
        {/* All Pages / Links Reference */}
        <Card className="mb-8 border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <BookOpen className="h-5 w-5 text-primary" />
              All Pages — Quick Links
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "India Stats", href: "/india-stats" },
                { label: "Schemes", href: "/schemes" },
                { label: "Budget Planner", href: "/tools/budget" },
                { label: "Investment Calc", href: "/tools/investment" },
                { label: "Quiz", href: "/quiz" },
                { label: "Financial Tips", href: "/tips" },
                { label: "Travel Finance", href: "/travel" },
                { label: "Retirement", href: "/retirement" },
                { label: "Contact", href: "/contact" },
                { label: "Banking", href: "/banking" },
                { label: "Digital Payments", href: "/digital-payments" },
                { label: "Savings & Investing", href: "/savings-investing" },
                { label: "Credit & Loans", href: "/credit-loans" },
                { label: "Fraud & Security", href: "/fraud-security" },
                { label: "Taxes", href: "/taxes" },
                { label: "Dashboard", href: "/dashboard" },
                { label: "Site Map", href: "/sitemap" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border hover:bg-primary/5 hover:border-primary/30 transition-colors text-foreground hover:text-primary font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {link.label}
                </a>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Level cards */}
        <div className="space-y-6">
          {LEVELS.map((level, levelIndex) => {
            const levelCompleted = level.modules.every((m) => progress[m.id]);
            const levelDone = level.modules.filter(
              (m) => progress[m.id],
            ).length;
            const levelPct = Math.round(
              (levelDone / level.modules.length) * 100,
            );
            const isExpanded = expanded[level.id];
            const isLocked =
              levelIndex > 0 &&
              !LEVELS[levelIndex - 1].modules.every((m) => progress[m.id]);

            return (
              <div
                key={level.id}
                className={`rounded-2xl border-2 ${level.borderColor} overflow-hidden`}
              >
                {/* Level Header */}
                <button
                  type="button"
                  onClick={() => !isLocked && toggleLevel(level.id)}
                  className={`w-full flex items-center justify-between p-5 ${level.bgColor} transition-colors ${
                    isLocked
                      ? "opacity-60 cursor-not-allowed"
                      : "hover:opacity-90 cursor-pointer"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`rounded-xl bg-white dark:bg-gray-900 p-2.5 shadow-sm ${level.color}`}
                    >
                      {isLocked ? <Lock className="h-6 w-6" /> : level.icon}
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-2">
                        <span className={`font-bold text-lg ${level.color}`}>
                          {level.title}
                        </span>
                        {levelCompleted && (
                          <Badge className="bg-green-500 text-white text-xs">
                            Completed
                          </Badge>
                        )}
                        {isLocked && (
                          <Badge variant="outline" className="text-xs">
                            Complete previous level to unlock
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {level.subtitle}
                      </p>
                      <div className="flex items-center gap-3 mt-1">
                        <Progress value={levelPct} className="h-1.5 w-24" />
                        <span className="text-xs text-muted-foreground">
                          {levelDone}/{level.modules.length} done
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={level.color}>
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </div>
                </button>

                {/* Modules */}
                {isExpanded && !isLocked && (
                  <div className="p-4 space-y-3">
                    {level.modules.map((mod, modIndex) => {
                      const status = getStatus(
                        mod.id,
                        level.id,
                        progress,
                        LEVELS,
                      );
                      const isModExpanded = expandedModules[mod.id];
                      const modLocked = status === "locked";
                      const modDone = status === "completed";

                      return (
                        <div
                          key={mod.id}
                          className={`rounded-xl border transition-all ${
                            modDone
                              ? "border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20"
                              : modLocked
                                ? "border-gray-200 dark:border-gray-700 opacity-50"
                                : "border-border bg-card hover:border-primary/30"
                          }`}
                        >
                          <div className="flex items-center gap-3 p-4">
                            <button
                              type="button"
                              onClick={() => !modLocked && toggleModule(mod.id)}
                              disabled={modLocked}
                              className="flex-shrink-0 transition-transform hover:scale-110"
                              aria-label={
                                modDone ? "Mark incomplete" : "Mark complete"
                              }
                            >
                              {modDone ? (
                                <CheckCircle2 className="h-6 w-6 text-green-500" />
                              ) : modLocked ? (
                                <Lock className="h-6 w-6 text-muted-foreground" />
                              ) : (
                                <Circle className="h-6 w-6 text-muted-foreground hover:text-primary" />
                              )}
                            </button>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-semibold text-sm">
                                  {modIndex + 1}. {mod.title}
                                </span>
                                <Badge variant="outline" className="text-xs">
                                  {mod.duration}
                                </Badge>
                                {modDone && (
                                  <Badge className="bg-green-500 text-white text-xs">
                                    Done
                                  </Badge>
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                                {mod.description}
                              </p>
                            </div>

                            <button
                              type="button"
                              onClick={() => toggleModuleExpand(mod.id)}
                              className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {isModExpanded ? (
                                <ChevronUp className="h-4 w-4" />
                              ) : (
                                <ChevronDown className="h-4 w-4" />
                              )}
                            </button>
                          </div>

                          {isModExpanded && (
                            <div className="px-4 pb-4 border-t border-border/50 pt-3">
                              <p className="text-sm text-muted-foreground mb-3">
                                {mod.description}
                              </p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {mod.topics.map((topic) => (
                                  <div
                                    key={topic}
                                    className="flex items-center gap-2 text-xs"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                    {topic}
                                  </div>
                                ))}
                              </div>

                              {/* Watch Video button — always visible when videoUrl exists */}
                              {mod.videoUrl && (
                                <a
                                  href={mod.videoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex mt-3"
                                  data-ocid="learning.button"
                                >
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="gap-2 border-red-200 hover:border-red-400 hover:bg-red-50 dark:hover:bg-red-950/20"
                                    asChild={false}
                                  >
                                    <Youtube className="h-4 w-4 text-red-500" />
                                    Watch Video on YouTube
                                  </Button>
                                </a>
                              )}

                              {!modDone && !modLocked && (
                                <Button
                                  size="sm"
                                  className="mt-3 ml-2"
                                  onClick={() => toggleModule(mod.id)}
                                >
                                  <CheckCircle2 className="h-4 w-4 mr-1" />
                                  Mark as Complete
                                </Button>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}

                    {/* Certificate badge + Printable certificate */}
                    <CertificateBadge level={level} show={levelCompleted} />
                    {levelCompleted && (
                      <PrintableCertificate
                        level={level}
                        name={certNames[level.id] ?? ""}
                        onNameChange={(n) => setCertName(level.id, n)}
                      />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Overall certificate */}
        {completedModules === totalModules && (
          <Card className="mt-8 border-2 border-yellow-400 bg-yellow-50 dark:bg-yellow-950/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="bg-yellow-400/20 rounded-full p-4">
                    <Trophy className="h-12 w-12 text-yellow-500" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-yellow-700 dark:text-yellow-400 mb-1">
                  Financial Literacy Master!
                </h2>
                <p className="text-muted-foreground mb-2">
                  You have completed all {totalModules} modules across all
                  levels.
                </p>
                <p className="text-sm font-medium text-yellow-700 dark:text-yellow-400">
                  cashindia.com — Developed by VCACS Students
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Reset */}
        <div className="mt-8 text-center">
          <Button
            variant="outline"
            size="sm"
            onClick={resetProgress}
            className="text-muted-foreground"
            data-ocid="learning.button"
          >
            Reset All Progress
          </Button>
        </div>
      </div>
    </div>
  );
}
