import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, B as Button, m as useLocalStorage } from "./index-oNUYi8h0.js";
import { B as Badge } from "./badge-DGnvFwe_.js";
import { I as Input } from "./input-BQRb9xeF.js";
import { P as PageHeader } from "./PageHeader-D2l6UeRT.js";
import { B as BookmarkCheck, G as GOVERNMENT_SCHEMES } from "./schemes-DbF-pFd9.js";
import { U as Users } from "./users-Di8aSH5O.js";
import { C as CircleCheck } from "./circle-check-PeHOxxtk.js";
import { C as ChevronDown } from "./chevron-down-CX_UD8J1.js";
import { m as motion } from "./proxy-BLGASNJJ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }]
];
const Bookmark = createLucideIcon("bookmark", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
const ChevronUp = createLucideIcon("chevron-up", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode);
const CATEGORY_COLORS = {
  Banking: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  Insurance: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  Pension: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  Business: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  Digital: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300"
};
function SchemeCard({
  scheme,
  isBookmarked,
  onToggleBookmark,
  index
}) {
  const [expanded, setExpanded] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-ocid": `schemes.item.${index}`,
      className: "bg-card border border-border rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-200",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `text-xs font-semibold px-2.5 py-0.5 rounded-full ${CATEGORY_COLORS[scheme.category]}`,
                  children: scheme.category
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                "Est. ",
                scheme.launchYear
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-base text-foreground leading-snug", children: scheme.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-primary mt-0.5", children: scheme.shortName })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              "data-ocid": `schemes.toggle.${index}`,
              variant: "ghost",
              size: "icon",
              onClick: () => onToggleBookmark(scheme.id),
              className: `shrink-0 h-9 w-9 ${isBookmarked ? "text-primary" : "text-muted-foreground hover:text-primary"}`,
              "aria-label": isBookmarked ? "Remove bookmark" : "Add bookmark",
              children: isBookmarked ? /* @__PURE__ */ jsxRuntimeExports.jsx(BookmarkCheck, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "h-5 w-5" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-3", children: scheme.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3.5 w-3.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: scheme.beneficiaries })
        ] }),
        expanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-4 mt-2 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground mb-2", children: "Key Benefits" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: scheme.benefits.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex items-start gap-2 text-sm text-muted-foreground",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-green-500 mt-0.5 shrink-0" }),
                  b
                ]
              },
              b
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground mb-2", children: "Eligibility" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: scheme.eligibility.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex items-start gap-2 text-sm text-muted-foreground",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" }),
                  e
                ]
              },
              e
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              "data-ocid": `schemes.secondary_button.${index}`,
              variant: "outline",
              size: "sm",
              onClick: () => setExpanded(!expanded),
              className: "flex-1 text-xs font-medium",
              children: expanded ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-3.5 w-3.5 mr-1" }),
                "Less"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3.5 w-3.5 mr-1" }),
                "Details"
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              "data-ocid": `schemes.primary_button.${index}`,
              size: "sm",
              asChild: true,
              className: "flex-1 text-xs font-medium",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: scheme.officialLink,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3.5 w-3.5 mr-1" }),
                    "Official Site"
                  ]
                }
              )
            }
          )
        ] })
      ] })
    }
  );
}
const CATEGORIES = [
  "All",
  "Banking",
  "Insurance",
  "Pension",
  "Business",
  "Digital"
];
function Schemes() {
  const [search, setSearch] = reactExports.useState("");
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const [bookmarks, setBookmarks] = useLocalStorage(
    "finlit-bookmarks",
    []
  );
  const filtered = reactExports.useMemo(() => {
    return GOVERNMENT_SCHEMES.filter((s) => {
      const matchCat = activeCategory === "All" || s.category === activeCategory;
      const q = search.toLowerCase();
      const matchSearch = !q || s.name.toLowerCase().includes(q) || s.shortName.toLowerCase().includes(q) || s.description.toLowerCase().includes(q) || s.category.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [search, activeCategory]);
  const toggleBookmark = (id) => {
    setBookmarks(
      (prev) => prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Government Financial Schemes",
        subtitle: "Explore and bookmark India's key government-backed financial schemes for every citizen",
        badge: "Schemes"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-4 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              "data-ocid": "schemes.search_input",
              placeholder: "Search schemes by name, category...",
              value: search,
              onChange: (e) => setSearch(e.target.value),
              className: "pl-9"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 flex-wrap", children: bookmarks.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Badge,
          {
            variant: "secondary",
            className: "flex items-center gap-1 text-xs",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "h-3 w-3" }),
              " ",
              bookmarks.length,
              " saved"
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 flex-wrap mb-8", children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "schemes.tab",
          onClick: () => setActiveCategory(cat),
          className: `px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${activeCategory === cat ? "bg-primary text-primary-foreground border-primary" : "bg-card text-muted-foreground border-border hover:border-primary hover:text-primary"}`,
          children: cat
        },
        cat
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-6", children: [
        "Showing ",
        filtered.length,
        " scheme",
        filtered.length !== 1 ? "s" : "",
        activeCategory !== "All" ? ` in ${activeCategory}` : ""
      ] }),
      filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "schemes.empty_state", className: "text-center py-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-1", children: "No schemes found" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Try adjusting your search or filter" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: filtered.map((scheme, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.3, delay: i * 0.05 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SchemeCard,
            {
              scheme,
              isBookmarked: bookmarks.includes(scheme.id),
              onToggleBookmark: toggleBookmark,
              index: i + 1
            }
          )
        },
        scheme.id
      )) })
    ] })
  ] });
}
export {
  Schemes as default
};
