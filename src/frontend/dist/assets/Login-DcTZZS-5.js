import { n as createLucideIcon, r as reactExports, t as useAuth, v as useNavigate, j as jsxRuntimeExports, T as TrendingUp, l as Button, L as Link, p as ue } from "./index-C2gTZAc5.js";
import { I as Input } from "./input-D-QuSoeY.js";
import { L as Label } from "./label-BZQkoq3e.js";
import { m as motion } from "./proxy-B5X-98y1.js";
import { A as ArrowRight } from "./arrow-right-DiPtI7fn.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
];
const EyeOff = createLucideIcon("eye-off", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Eye = createLucideIcon("eye", __iconNode);
function Login() {
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [showPw, setShowPw] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [errors, setErrors] = reactExports.useState(
    {}
  );
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!email) errs.email = "Email required";
    if (!password) errs.password = "Password required";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setLoading(true);
    const ok = await login(email, password);
    setLoading(false);
    if (ok) {
      ue.success("Welcome back!");
      navigate({ to: "/dashboard" });
    } else {
      ue.error("Invalid email or password");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[80vh] flex items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      className: "w-full max-w-md",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-7 w-7 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-foreground", children: "Welcome back" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1 text-sm", children: "Sign in to your FinLit India account" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", className: "text-sm mb-1.5 block", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "email",
                  type: "email",
                  "data-ocid": "login.email_input",
                  placeholder: "you@example.com",
                  value: email,
                  onChange: (e) => setEmail(e.target.value)
                }
              ),
              errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  "data-ocid": "login.email_error",
                  className: "text-xs text-destructive mt-1",
                  children: errors.email
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "password", className: "text-sm mb-1.5 block", children: "Password" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "password",
                    type: showPw ? "text" : "password",
                    "data-ocid": "login.password_input",
                    placeholder: "\\u2022\\u2022\\u2022\\u2022\\u2022\\u2022\\u2022\\u2022",
                    value: password,
                    onChange: (e) => setPassword(e.target.value),
                    className: "pr-10"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowPw(!showPw),
                    className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
                    children: showPw ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" })
                  }
                )
              ] }),
              errors.password && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  "data-ocid": "login.password_error",
                  className: "text-xs text-destructive mt-1",
                  children: errors.password
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                "data-ocid": "login.submit_button",
                type: "submit",
                disabled: loading,
                className: "w-full",
                children: loading ? "Signing in..." : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sign In" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-sm text-muted-foreground mt-5", children: [
            "Don't have an account?",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/signup",
                className: "text-primary font-medium hover:underline",
                children: "Sign up"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-xs text-muted-foreground mt-4", children: [
          "Admin access?",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin", className: "text-primary hover:underline", children: "Admin Panel" })
        ] })
      ]
    }
  ) });
}
export {
  Login as default
};
