import { c as createLucideIcon, j as jsxRuntimeExports, k as cn, r as reactExports, m as useLocalStorage, B as Button, n as ue } from "./index-oNUYi8h0.js";
import { I as Input } from "./input-BQRb9xeF.js";
import { L as Label } from "./label-By0s3q5s.js";
import { P as PageHeader } from "./PageHeader-D2l6UeRT.js";
import { M as Mail } from "./mail-CWmltKju.js";
import { m as motion } from "./proxy-BLGASNJJ.js";
import { C as CircleCheck } from "./circle-check-PeHOxxtk.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$2);
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
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$1);
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
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}
const INITIAL = { name: "", email: "", subject: "", message: "" };
function Contact() {
  const [form, setForm] = reactExports.useState(INITIAL);
  const [errors, setErrors] = reactExports.useState({});
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [sent, setSent] = reactExports.useState(false);
  const [, setMessages] = useLocalStorage(
    "finlit-messages",
    []
  );
  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email";
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.message.trim()) errs.message = "Message is required";
    else if (form.message.length < 10)
      errs.message = "Message must be at least 10 characters";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    const msg = {
      id: Date.now().toString(),
      ...form,
      date: (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN"),
      read: false
    };
    setMessages((prev) => [msg, ...prev]);
    setForm(INITIAL);
    setErrors({});
    setSent(true);
    setSubmitting(false);
    ue.success("Message sent! We'll get back to you soon.");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Contact Us",
        subtitle: "Have questions about financial literacy? We're here to help.",
        badge: "Contact"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-10 max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-4", children: "Get in Touch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: "We're committed to promoting financial literacy across India. Reach out with questions, feedback, or collaboration ideas." })
        ] }),
        [
          { icon: Phone, label: "Phone", value: "+91 96579 26280" },
          { icon: Mail, label: "Email", value: "kshiirsagar@gmail.com" },
          {
            icon: MapPin,
            label: "Address",
            value: "Pune, Maharashtra, India"
          }
        ].map(({ icon: Icon, label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-start gap-3 bg-card border border-border rounded-xl p-4 shadow-card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary/10 rounded-lg p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-foreground", children: value })
              ] })
            ]
          },
          label
        ))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-2xl p-6 shadow-card", children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          className: "text-center py-8",
          "data-ocid": "contact.success_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-16 w-16 text-green-500 mx-auto mb-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-foreground mb-2", children: "Message Sent!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Thank you for reaching out. We'll get back to you within 24 hours." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => setSent(false), variant: "outline", children: "Send Another Message" })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", noValidate: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "name", className: "text-sm mb-1.5 block", children: "Full Name *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "name",
                "data-ocid": "contact.name_input",
                placeholder: "Rahul Sharma",
                value: form.name,
                onChange: (e) => setForm((p) => ({ ...p, name: e.target.value })),
                "aria-invalid": !!errors.name
              }
            ),
            errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                "data-ocid": "contact.name_error",
                className: "text-xs text-destructive mt-1",
                children: errors.name
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", className: "text-sm mb-1.5 block", children: "Email Address *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "email",
                type: "email",
                "data-ocid": "contact.email_input",
                placeholder: "rahul@example.com",
                value: form.email,
                onChange: (e) => setForm((p) => ({ ...p, email: e.target.value })),
                "aria-invalid": !!errors.email
              }
            ),
            errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                "data-ocid": "contact.email_error",
                className: "text-xs text-destructive mt-1",
                children: errors.email
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "subject", className: "text-sm mb-1.5 block", children: "Subject *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "subject",
              "data-ocid": "contact.subject_input",
              placeholder: "Question about government schemes",
              value: form.subject,
              onChange: (e) => setForm((p) => ({ ...p, subject: e.target.value })),
              "aria-invalid": !!errors.subject
            }
          ),
          errors.subject && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              "data-ocid": "contact.subject_error",
              className: "text-xs text-destructive mt-1",
              children: errors.subject
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "message", className: "text-sm mb-1.5 block", children: "Message *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              id: "message",
              "data-ocid": "contact.message_textarea",
              placeholder: "Write your message here...",
              value: form.message,
              onChange: (e) => setForm((p) => ({ ...p, message: e.target.value })),
              rows: 5,
              "aria-invalid": !!errors.message
            }
          ),
          errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              "data-ocid": "contact.message_error",
              className: "text-xs text-destructive mt-1",
              children: errors.message
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            "data-ocid": "contact.submit_button",
            type: "submit",
            disabled: submitting,
            className: "w-full",
            children: submitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-2 h-4 w-4 border-2 border-white/40 border-t-white rounded-full animate-spin inline-block" }),
              "Sending..."
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4 mr-2" }),
              "Send Message"
            ] })
          }
        )
      ] }) }) })
    ] }) })
  ] });
}
export {
  Contact as default
};
