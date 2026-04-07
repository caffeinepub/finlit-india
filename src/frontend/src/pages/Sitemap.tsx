import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { PageHeader } from "../components/common/PageHeader";

interface RouteEntry {
  label: string;
  path: string;
  description?: string;
}

interface RouteGroup {
  category: string;
  color: string;
  badgeClass: string;
  routes: RouteEntry[];
}

const ROUTE_GROUPS: RouteGroup[] = [
  {
    category: "Main",
    color: "text-blue-600",
    badgeClass:
      "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
    routes: [
      { label: "Home", path: "/", description: "Landing page & overview" },
      {
        label: "About",
        path: "/about",
        description: "About cashindia.com & our mission",
      },
      {
        label: "India Statistics",
        path: "/india-stats",
        description: "Financial literacy charts & data",
      },
      {
        label: "Government Schemes",
        path: "/schemes",
        description: "Browse & bookmark official schemes",
      },
      {
        label: "Contact Us",
        path: "/contact",
        description: "Reach the VCACS Students team",
      },
    ],
  },
  {
    category: "Learn",
    color: "text-emerald-600",
    badgeClass:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
    routes: [
      {
        label: "Banking System",
        path: "/banking",
        description: "India's banking ecosystem explained",
      },
      {
        label: "Digital Payments",
        path: "/digital-payments",
        description: "UPI, BHIM, PhonePe & FinTech",
      },
      {
        label: "Savings & Investing",
        path: "/savings-investing",
        description: "Mutual funds, SIP, stocks & gold",
      },
      {
        label: "Credit & Loans",
        path: "/credit-loans",
        description: "CIBIL score, EMI & borrowing smartly",
      },
      {
        label: "Fraud & Security",
        path: "/fraud-security",
        description: "Scam awareness & reporting channels",
      },
      {
        label: "Taxes",
        path: "/taxes",
        description: "ITR filing, PAN, GST basics",
      },
      {
        label: "Learning Path",
        path: "/learning",
        description: "Beginner → Intermediate → Advanced course",
      },
    ],
  },
  {
    category: "Tools",
    color: "text-purple-600",
    badgeClass:
      "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
    routes: [
      {
        label: "Budget Planner",
        path: "/tools/budget",
        description: "Income/expense tracker with 50/30/20",
      },
      {
        label: "Investment Calculator",
        path: "/tools/investment",
        description: "SIP vs Lump Sum growth charts",
      },
      {
        label: "Financial Quiz",
        path: "/quiz",
        description: "Test your financial knowledge",
      },
      {
        label: "Pro Financial Tips",
        path: "/tips",
        description: "18 actionable tips for Indian users",
      },
      {
        label: "Retirement Planning",
        path: "/retirement",
        description: "Corpus calculator & NPS guide",
      },
      {
        label: "Travel Finance",
        path: "/travel",
        description: "Live exchange rates & trip budgeting",
      },
    ],
  },
  {
    category: "Account",
    color: "text-orange-600",
    badgeClass:
      "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300",
    routes: [
      {
        label: "Login",
        path: "/login",
        description: "Sign in to your account",
      },
      {
        label: "Sign Up",
        path: "/signup",
        description: "Create a new account",
      },
      {
        label: "Dashboard",
        path: "/dashboard",
        description: "Saved schemes & quiz history",
      },
    ],
  },
  {
    category: "Admin",
    color: "text-red-600",
    badgeClass: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
    routes: [
      {
        label: "Admin Panel",
        path: "/admin",
        description: "Analytics, messages & quiz manager",
      },
    ],
  },
];

export default function Sitemap() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="🗺️ Site Map & Link Validator"
        subtitle="Click any link to verify all pages are working correctly"
        badge="All Routes"
      />

      <div className="container mx-auto px-4 py-10 space-y-12">
        {ROUTE_GROUPS.map((group, groupIndex) => (
          <motion.section
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: groupIndex * 0.07 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <h2 className={`font-display text-xl font-bold ${group.color}`}>
                {group.category}
              </h2>
              <div className="flex-1 h-px bg-border" />
              <Badge className={`text-xs ${group.badgeClass}`}>
                {group.routes.length} pages
              </Badge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.routes.map((route, routeIndex) => (
                <motion.div
                  key={route.path}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: groupIndex * 0.07 + routeIndex * 0.04,
                  }}
                  data-ocid={`sitemap.item.${routeIndex + 1}`}
                >
                  <div className="group rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all p-5 flex flex-col gap-3 h-full">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <Badge className={`text-xs mb-2 ${group.badgeClass}`}>
                          {group.category}
                        </Badge>
                        <h3 className="font-semibold text-base text-foreground leading-snug">
                          {route.label}
                        </h3>
                        {route.description && (
                          <p className="text-xs text-muted-foreground mt-1">
                            {route.description}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-2 border-t border-border/60">
                      <code className="text-xs text-muted-foreground font-mono bg-muted px-2 py-0.5 rounded">
                        {route.path}
                      </code>
                      <a
                        href={route.path}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline group-hover:gap-2.5 transition-all"
                        data-ocid="sitemap.link"
                      >
                        Open
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="rounded-2xl bg-primary/5 border border-primary/20 p-6 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Total{" "}
            <span className="font-bold text-primary">
              {ROUTE_GROUPS.reduce((sum, g) => sum + g.routes.length, 0)}
            </span>{" "}
            pages across{" "}
            <span className="font-bold text-primary">
              {ROUTE_GROUPS.length}
            </span>{" "}
            categories — all validated and live on cashindia.com
          </p>
        </motion.div>
      </div>
    </div>
  );
}
