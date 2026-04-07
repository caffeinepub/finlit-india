import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { SkeletonCard } from "./components/common/SkeletonCard";
import { BackToTop } from "./components/layout/BackToTop";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { ScrollProgressBar } from "./components/layout/ScrollProgressBar";
import { AuthProvider } from "./contexts/AuthContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const IndiaStats = lazy(() => import("./pages/IndiaStats"));
const Schemes = lazy(() => import("./pages/Schemes"));
const BudgetPlanner = lazy(() => import("./pages/BudgetPlanner"));
const InvestmentCalculator = lazy(() => import("./pages/InvestmentCalculator"));
const Quiz = lazy(() => import("./pages/Quiz"));
const FinancialTips = lazy(() => import("./pages/FinancialTips"));
const RetirementPlanning = lazy(() => import("./pages/RetirementPlanning"));
const Contact = lazy(() => import("./pages/Contact"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const AdminPanel = lazy(() => import("./pages/AdminPanel"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Banking = lazy(() => import("./pages/Banking"));
const DigitalPayments = lazy(() => import("./pages/DigitalPayments"));
const SavingsInvesting = lazy(() => import("./pages/SavingsInvesting"));
const CreditLoans = lazy(() => import("./pages/CreditLoans"));
const FraudSecurity = lazy(() => import("./pages/FraudSecurity"));
const TaxesPage = lazy(() => import("./pages/Taxes"));
const TravelFinance = lazy(() => import("./pages/TravelFinance"));
const LearningPath = lazy(() => import("./pages/LearningPath"));
const Sitemap = lazy(() => import("./pages/Sitemap"));

function PageLoader() {
  return (
    <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgressBar />
      <Navbar />
      <main className="flex-1 pt-16">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

const rootRoute = createRootRoute({ component: RootLayout });

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});
const indiaStatsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/india-stats",
  component: IndiaStats,
});
const schemesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/schemes",
  component: Schemes,
});
const budgetRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tools/budget",
  component: BudgetPlanner,
});
const investmentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tools/investment",
  component: InvestmentCalculator,
});
const quizRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/quiz",
  component: Quiz,
});
const tipsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tips",
  component: FinancialTips,
});
const retirementRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/retirement",
  component: RetirementPlanning,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});
const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: Dashboard,
});
const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: AdminPanel,
});
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});
const signupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/signup",
  component: Signup,
});
const bankingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/banking",
  component: Banking,
});
const digitalPaymentsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/digital-payments",
  component: DigitalPayments,
});
const savingsInvestingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/savings-investing",
  component: SavingsInvesting,
});
const creditLoansRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/credit-loans",
  component: CreditLoans,
});
const fraudSecurityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/fraud-security",
  component: FraudSecurity,
});
const taxesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/taxes",
  component: TaxesPage,
});
const travelRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/travel",
  component: TravelFinance,
});
const learningRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/learning",
  component: LearningPath,
});
const sitemapRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/sitemap",
  component: Sitemap,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  indiaStatsRoute,
  schemesRoute,
  budgetRoute,
  investmentRoute,
  quizRoute,
  tipsRoute,
  retirementRoute,
  contactRoute,
  dashboardRoute,
  adminRoute,
  loginRoute,
  signupRoute,
  bankingRoute,
  digitalPaymentsRoute,
  savingsInvestingRoute,
  creditLoansRoute,
  fraudSecurityRoute,
  taxesRoute,
  travelRoute,
  learningRoute,
  sitemapRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <LanguageProvider>
          <RouterProvider router={router} />
          <Toaster position="top-right" richColors />
        </LanguageProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
