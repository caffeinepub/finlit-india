import { Link } from "@tanstack/react-router";
import { Github, Linkedin, TrendingUp, Twitter, Youtube } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  return (
    <footer className="bg-navy-dark border-t border-white/10 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary rounded-lg p-1.5">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <span className="font-display font-bold text-lg">
                FinLit India
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Empowering every Indian with financial knowledge to build a secure
              and prosperous future.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold text-white mb-4">Explore</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", to: "/" as const },
                { label: "About", to: "/about" as const },
                { label: "India Statistics", to: "/india-stats" as const },
                { label: "Government Schemes", to: "/schemes" as const },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-semibold text-white mb-4">Tools</h4>
            <ul className="space-y-2">
              {[
                { label: "Budget Planner", to: "/tools/budget" as const },
                {
                  label: "Investment Calculator",
                  to: "/tools/investment" as const,
                },
                { label: "Financial Quiz", to: "/quiz" as const },
                { label: "Contact Us", to: "/contact" as const },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  RBI Official Website
                </a>
              </li>
              <li>
                <a
                  href="https://sebi.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  SEBI Investor Education
                </a>
              </li>
              <li>
                <a
                  href="https://nsdl.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  NSDL Investor Services
                </a>
              </li>
              <li>
                <a
                  href="https://irdai.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  IRDAI Insurance Info
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/50 text-sm">
            &copy; {year}. Built with \u2764\uFE0F using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
          <div className="flex gap-4 text-xs text-white/40">
            <span>Financial Literacy in India</span>
            <span>Academic Project Portfolio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
