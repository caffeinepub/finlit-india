import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { PageHeader } from "../components/common/PageHeader";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
}

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL: FormState = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [, setMessages] = useLocalStorage<ContactMessage[]>(
    "finlit-messages",
    [],
  );

  const validate = (): boolean => {
    const errs: Partial<FormState> = {};
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    const msg: ContactMessage = {
      id: Date.now().toString(),
      ...form,
      date: new Date().toLocaleDateString("en-IN"),
      read: false,
    };
    setMessages((prev) => [msg, ...prev]);
    setForm(INITIAL);
    setErrors({});
    setSent(true);
    setSubmitting(false);
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="Have questions about financial literacy? We're here to help."
        badge="Contact"
      />

      <div className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-5">
            <div>
              <h3 className="font-display font-semibold text-foreground mb-4">
                Get in Touch
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We're committed to promoting financial literacy across India.
                Reach out with questions, feedback, or collaboration ideas.
              </p>
            </div>
            {[
              { icon: Phone, label: "Phone", value: "+91 96579 26280" },
              { icon: Mail, label: "Email", value: "kshiirsagar@gmail.com" },
              {
                icon: MapPin,
                label: "Address",
                value: "Pune, Maharashtra, India",
              },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 shadow-card"
              >
                <div className="bg-primary/10 rounded-lg p-2">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                  <div className="text-sm font-medium text-foreground">
                    {value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                  data-ocid="contact.success_state"
                >
                  <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                  <Button onClick={() => setSent(false)} variant="outline">
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm mb-1.5 block">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        data-ocid="contact.name_input"
                        placeholder="Rahul Sharma"
                        value={form.name}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, name: e.target.value }))
                        }
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p
                          data-ocid="contact.name_error"
                          className="text-xs text-destructive mt-1"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm mb-1.5 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        data-ocid="contact.email_input"
                        placeholder="rahul@example.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, email: e.target.value }))
                        }
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p
                          data-ocid="contact.email_error"
                          className="text-xs text-destructive mt-1"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-sm mb-1.5 block">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      data-ocid="contact.subject_input"
                      placeholder="Question about government schemes"
                      value={form.subject}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, subject: e.target.value }))
                      }
                      aria-invalid={!!errors.subject}
                    />
                    {errors.subject && (
                      <p
                        data-ocid="contact.subject_error"
                        className="text-xs text-destructive mt-1"
                      >
                        {errors.subject}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-sm mb-1.5 block">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      data-ocid="contact.message_textarea"
                      placeholder="Write your message here..."
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      rows={5}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p
                        data-ocid="contact.message_error"
                        className="text-xs text-destructive mt-1"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <Button
                    data-ocid="contact.submit_button"
                    type="submit"
                    disabled={submitting}
                    className="w-full"
                  >
                    {submitting ? (
                      <>
                        <span className="mr-2 h-4 w-4 border-2 border-white/40 border-t-white rounded-full animate-spin inline-block" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
