import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Users,
} from "lucide-react";
import { useState } from "react";
import type { GovernmentScheme } from "../../data/schemes";

const CATEGORY_COLORS: Record<string, string> = {
  Banking: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  Insurance:
    "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  Pension:
    "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  Business:
    "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  Digital: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300",
};

interface SchemeCardProps {
  scheme: GovernmentScheme;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  index: number;
}

export function SchemeCard({
  scheme,
  isBookmarked,
  onToggleBookmark,
  index,
}: SchemeCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      data-ocid={`schemes.item.${index}`}
      className="bg-card border border-border rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-200"
    >
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span
                className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${CATEGORY_COLORS[scheme.category]}`}
              >
                {scheme.category}
              </span>
              <span className="text-xs text-muted-foreground">
                Est. {scheme.launchYear}
              </span>
            </div>
            <h3 className="font-display font-semibold text-base text-foreground leading-snug">
              {scheme.name}
            </h3>
            <p className="text-xs font-medium text-primary mt-0.5">
              {scheme.shortName}
            </p>
          </div>
          <Button
            data-ocid={`schemes.toggle.${index}`}
            variant="ghost"
            size="icon"
            onClick={() => onToggleBookmark(scheme.id)}
            className={`shrink-0 h-9 w-9 ${isBookmarked ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
            aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
          >
            {isBookmarked ? (
              <BookmarkCheck className="h-5 w-5" />
            ) : (
              <Bookmark className="h-5 w-5" />
            )}
          </Button>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          {scheme.description}
        </p>

        {/* Beneficiaries badge */}
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
          <Users className="h-3.5 w-3.5" />
          <span>{scheme.beneficiaries}</span>
        </div>

        {/* Expandable content */}
        {expanded && (
          <div className="border-t border-border pt-4 mt-2 space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">
                Key Benefits
              </h4>
              <ul className="space-y-1">
                {scheme.benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">
                Eligibility
              </h4>
              <ul className="space-y-1">
                {scheme.eligibility.map((e) => (
                  <li
                    key={e}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2 mt-4">
          <Button
            data-ocid={`schemes.secondary_button.${index}`}
            variant="outline"
            size="sm"
            onClick={() => setExpanded(!expanded)}
            className="flex-1 text-xs font-medium"
          >
            {expanded ? (
              <>
                <ChevronUp className="h-3.5 w-3.5 mr-1" />
                Less
              </>
            ) : (
              <>
                <ChevronDown className="h-3.5 w-3.5 mr-1" />
                Details
              </>
            )}
          </Button>
          <Button
            data-ocid={`schemes.primary_button.${index}`}
            size="sm"
            asChild
            className="flex-1 text-xs font-medium"
          >
            <a
              href={scheme.officialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-3.5 w-3.5 mr-1" />
              Official Site
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
