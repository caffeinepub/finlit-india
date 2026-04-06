import { r as reactExports, q as useAuth, s as useNavigate, j as jsxRuntimeExports, T as TrendingUp, B as Button, L as Link, n as ue } from "./index-oNUYi8h0.js";
import { I as Input } from "./input-BQRb9xeF.js";
import { L as Label } from "./label-By0s3q5s.js";
import { m as motion } from "./proxy-BLGASNJJ.js";
import { A as ArrowRight } from "./arrow-right--Z0eWHbT.js";
function Signup() {
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    password: "",
    confirm: ""
  });
  const [errors, setErrors] = reactExports.useState({});
  const [loading, setLoading] = reactExports.useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name required";
    if (!form.email.trim()) e.email = "Email required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Invalid email";
    if (!form.password) e.password = "Password required";
    else if (form.password.length < 6) e.password = "Min 6 characters";
    if (form.confirm !== form.password) e.confirm = "Passwords don't match";
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  const handleSubmit = async (ex) => {
    ex.preventDefault();
    if (!validate()) return;
    setLoading(true);
    const ok = await signup(form.name, form.email, form.password);
    setLoading(false);
    if (ok) {
      ue.success("Account created! Welcome to FinLit India.");
      navigate({ to: "/dashboard" });
    } else {
      ue.error("Email already registered");
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-foreground", children: "Create an account" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1 text-sm", children: "Start your financial literacy journey today" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
            [
              {
                key: "name",
                label: "Full Name",
                type: "text",
                placeholder: "Rahul Sharma"
              },
              {
                key: "email",
                label: "Email",
                type: "email",
                placeholder: "you@example.com"
              },
              {
                key: "password",
                label: "Password",
                type: "password",
                placeholder: "Min 6 characters"
              },
              {
                key: "confirm",
                label: "Confirm Password",
                type: "password",
                placeholder: "Repeat password"
              }
            ].map(({ key, label, type, placeholder }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: key, className: "text-sm mb-1.5 block", children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: key,
                  type,
                  "data-ocid": `signup.${key}_input`,
                  placeholder,
                  value: form[key],
                  onChange: (e) => setForm((p) => ({ ...p, [key]: e.target.value }))
                }
              ),
              errors[key] && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  "data-ocid": `signup.${key}_error`,
                  className: "text-xs text-destructive mt-1",
                  children: errors[key]
                }
              )
            ] }, key)),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                "data-ocid": "signup.submit_button",
                type: "submit",
                disabled: loading,
                className: "w-full",
                children: loading ? "Creating account..." : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Create Account" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-sm text-muted-foreground mt-5", children: [
            "Already have an account?",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/login",
                className: "text-primary font-medium hover:underline",
                children: "Sign in"
              }
            )
          ] })
        ] })
      ]
    }
  ) });
}
export {
  Signup as default
};
