import { Link } from "@tanstack/react-router";
import { Github, Linkedin, TrendingUp, Twitter, Youtube } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

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
                cashindia.com
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

        {/* Developer Credit - Big & Visible */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="text-center mb-6">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-2">
              Designed &amp; Developed by
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
              VCACS Students
            </p>
            <p className="text-primary font-medium text-sm mt-1">
              Vishwakarma College of Arts, Commerce &amp; Science, Pune
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-4 border-t border-white/10">
            <p className="text-white/50 text-sm">
              &copy; {year} cashindia.com. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs text-white/40 items-center">
              <span>Financial Literacy in India</span>
              <a
                href="/sitemap"
                className="text-xs text-white/40 hover:text-white underline transition-colors"
              >
                Site Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
