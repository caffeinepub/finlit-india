import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Bookmark, Lightbulb, Search } from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { PageHeader } from "../components/common/PageHeader";
import { SchemeCard } from "../components/schemes/SchemeCard";
import { useLanguage } from "../contexts/LanguageContext";
import { GOVERNMENT_SCHEMES } from "../data/schemes";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CATEGORIES = [
  "All",
  "Banking",
  "Insurance",
  "Pension",
  "Business",
  "Digital",
];

export default function Schemes() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [bookmarks, setBookmarks] = useLocalStorage<string[]>(
    "finlit-bookmarks",
    [],
  );
  const { t } = useLanguage();

  const filtered = useMemo(() => {
    return GOVERNMENT_SCHEMES.filter((s) => {
      const matchCat =
        activeCategory === "All" || s.category === activeCategory;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.shortName.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [search, activeCategory]);

  const toggleBookmark = (id: string) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id],
    );
  };

  return (
    <div>
      <PageHeader
        title={t.schemes.title}
        subtitle={t.schemes.subtitle}
        badge="Schemes"
      />

      <div className="container mx-auto px-4 py-10">
        {/* Real Tip Callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5 flex gap-4"
        >
          <div className="shrink-0 mt-0.5">
            <div className="bg-amber-100 dark:bg-amber-800/40 rounded-xl p-2">
              <Lightbulb className="h-5 w-5 text-amber-600" />
            </div>
          </div>
          <div>
            <p className="font-semibold text-amber-900 dark:text-amber-200 text-sm mb-1">
              {t.schemes.realTipTitle}
            </p>
            <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed">
              {t.schemes.realTipDesc}
            </p>
          </div>
        </motion.div>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              data-ocid="schemes.search_input"
              placeholder={t.schemes.searchPlaceholder}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {bookmarks.length > 0 && (
              <Badge
                variant="secondary"
                className="flex items-center gap-1 text-xs"
              >
                <Bookmark className="h-3 w-3" /> {bookmarks.length} saved
              </Badge>
            )}
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 flex-wrap mb-8">
          {CATEGORIES.map((cat) => (
            <button
              type="button"
              key={cat}
              data-ocid="schemes.tab"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border min-h-[36px] ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-muted-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing {filtered.length} scheme{filtered.length !== 1 ? "s" : ""}
          {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
        </p>

        {/* Scheme cards */}
        {filtered.length === 0 ? (
          <div data-ocid="schemes.empty_state" className="text-center py-16">
            <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="font-semibold text-foreground mb-1">
              No schemes found
            </h3>
            <p className="text-muted-foreground text-sm">
              Try adjusting your search or filter
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((scheme, i) => (
              <motion.div
                key={scheme.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <SchemeCard
                  scheme={scheme}
                  isBookmarked={bookmarks.includes(scheme.id)}
                  onToggleBookmark={toggleBookmark}
                  index={i + 1}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
