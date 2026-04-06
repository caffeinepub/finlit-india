import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Bookmark, Search } from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { PageHeader } from "../components/common/PageHeader";
import { SchemeCard } from "../components/schemes/SchemeCard";
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
        title="Government Financial Schemes"
        subtitle="Explore and bookmark India's key government-backed financial schemes for every citizen"
        badge="Schemes"
      />

      <div className="container mx-auto px-4 py-10">
        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              data-ocid="schemes.search_input"
              placeholder="Search schemes by name, category..."
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
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
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
