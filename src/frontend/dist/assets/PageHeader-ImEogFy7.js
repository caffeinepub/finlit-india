import { j as jsxRuntimeExports } from "./index-C9PNr72X.js";
function PageHeader({ title, subtitle, badge }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-navy-dark text-white py-16 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto text-center", children: [
    badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block bg-primary/20 text-primary border border-primary/30 text-xs font-semibold px-3 py-1 rounded-full mb-4", children: badge }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-4xl font-bold mb-4", children: title }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 max-w-2xl mx-auto text-base md:text-lg", children: subtitle })
  ] }) });
}
export {
  PageHeader as P
};
