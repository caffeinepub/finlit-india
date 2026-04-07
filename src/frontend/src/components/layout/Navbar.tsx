import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useLocation } from "@tanstack/react-router";
import {
  BookOpen,
  ChevronDown,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Menu,
  Moon,
  Plane,
  Shield,
  Sun,
  TrendingUp,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { type Language, useLanguage } from "../../contexts/LanguageContext";
import { useThemeContext } from "../../contexts/ThemeContext";

const LANG_OPTIONS: { code: Language; label: string; native: string }[] = [
  { code: "en", label: "English", native: "EN" },
  { code: "hi", label: "Hindi", native: "हिंदी" },
  { code: "mr", label: "Marathi", native: "मराठी" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useThemeContext();
  const { user, logout, isAuthenticated } = useAuth();
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const NAV_LINKS = [
    { label: t.nav.home, to: "/" as const },
    { label: t.nav.about, to: "/about" as const },
    { label: t.nav.indiaStats, to: "/india-stats" as const },
    { label: t.nav.schemes, to: "/schemes" as const },
    { label: t.nav.tools, to: "/tools/budget" as const },
    { label: t.nav.quiz, to: "/quiz" as const },
    { label: t.nav.tips, to: "/tips" as const },
    { label: "Travel", to: "/travel" as const },
    { label: t.nav.retire, to: "/retirement" as const },
    { label: t.nav.contact, to: "/contact" as const },
  ];

  const LEARN_LINKS = [
    { label: t.nav.banking, to: "/banking" as const },
    { label: t.nav.digitalPayments, to: "/digital-payments" as const },
    { label: t.nav.savingInvesting, to: "/savings-investing" as const },
    { label: t.nav.creditLoans, to: "/credit-loans" as const },
    { label: t.nav.fraudSecurity, to: "/fraud-security" as const },
    { label: t.nav.taxes, to: "/taxes" as const },
    { label: "Learning Path", to: "/learning" as const },
  ];

  const isLearnActive = LEARN_LINKS.some((l) => location.pathname === l.to);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-dark border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group"
              data-ocid="nav.link"
            >
              <div className="bg-primary rounded-lg p-1.5 group-hover:bg-primary/80 transition-colors">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-white text-lg leading-none block">
                  cashindia.com
                </span>
                <span className="text-white/50 text-[10px] leading-none">
                  Financial Literacy
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid="nav.link"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? "text-white bg-white/10"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.to === "/travel" ? (
                    <span className="flex items-center gap-1">
                      <Plane className="h-3.5 w-3.5" />
                      {link.label}
                    </span>
                  ) : (
                    link.label
                  )}
                </Link>
              ))}

              {/* Learn dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isLearnActive
                        ? "text-white bg-white/10"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <BookOpen className="h-3.5 w-3.5" />
                    {t.nav.learn}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-52">
                  {LEARN_LINKS.map((link) => (
                    <DropdownMenuItem key={link.to} asChild>
                      <Link
                        to={link.to}
                        className="cursor-pointer flex items-center gap-2"
                      >
                        {link.to === "/learning" && (
                          <GraduationCap className="h-3.5 w-3.5 text-primary" />
                        )}
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Right utilities */}
            <div className="flex items-center gap-1">
              {/* Language switcher - desktop */}
              <div className="hidden md:flex items-center gap-0.5 bg-white/10 rounded-lg p-1">
                {LANG_OPTIONS.map((opt) => (
                  <button
                    key={opt.code}
                    type="button"
                    onClick={() => setLanguage(opt.code)}
                    aria-label={`Switch to ${opt.label}`}
                    className={`px-2 py-1 rounded text-xs font-semibold transition-all min-w-[36px] ${
                      language === opt.code
                        ? "bg-primary text-white shadow-sm"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {opt.native}
                  </button>
                ))}
              </div>

              <Button
                data-ocid="nav.toggle"
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-white/70 hover:text-white hover:bg-white/10"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>

              {isAuthenticated && user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      data-ocid="nav.button"
                      variant="ghost"
                      size="icon"
                      className="text-white/70 hover:text-white hover:bg-white/10"
                    >
                      <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <div className="px-3 py-2 text-sm font-medium text-foreground border-b border-border">
                      {user.name}
                    </div>
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard" className="flex items-center gap-2">
                        <LayoutDashboard className="h-4 w-4" /> Dashboard
                      </Link>
                    </DropdownMenuItem>
                    {user.role === "admin" && (
                      <DropdownMenuItem asChild>
                        <Link to="/admin" className="flex items-center gap-2">
                          <Shield className="h-4 w-4" /> Admin Panel
                        </Link>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={logout}
                      className="text-destructive flex items-center gap-2"
                    >
                      <LogOut className="h-4 w-4" /> Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link to="/login">
                  <Button
                    data-ocid="nav.primary_button"
                    size="sm"
                    className="bg-primary text-white hover:bg-primary/90 font-medium"
                  >
                    {t.nav.login}
                  </Button>
                </Link>
              )}

              {/* Mobile hamburger */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white/70 hover:text-white hover:bg-white/10"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileOpen && (
            <div className="md:hidden border-t border-white/10 py-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid="nav.link"
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors mb-1 ${
                    location.pathname === link.to
                      ? "text-white bg-white/10"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.to === "/travel" ? (
                    <span className="flex items-center gap-2">
                      <Plane className="h-4 w-4" />
                      {link.label}
                    </span>
                  ) : (
                    link.label
                  )}
                </Link>
              ))}
              <div className="px-3 py-1.5 text-white/40 text-xs font-semibold uppercase tracking-wider mt-2">
                {t.nav.learn}
              </div>
              {LEARN_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid="nav.link"
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors mb-1 ${
                    location.pathname === link.to
                      ? "text-white bg-white/10"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.to === "/learning" ? (
                    <span className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4" />
                      {link.label}
                    </span>
                  ) : (
                    link.label
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Mobile sticky language bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-navy-dark border-t border-white/10 safe-area-pb">
        <div className="flex items-center justify-center gap-2 py-2 px-4">
          <span className="text-white/50 text-xs mr-1">Language:</span>
          {LANG_OPTIONS.map((opt) => (
            <button
              key={opt.code}
              type="button"
              onClick={() => setLanguage(opt.code)}
              aria-label={`Switch to ${opt.label}`}
              className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all min-h-[36px] min-w-[52px] ${
                language === opt.code
                  ? "bg-primary text-white shadow-sm"
                  : "text-white/70 bg-white/10 hover:text-white hover:bg-white/20"
              }`}
            >
              {opt.native}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
