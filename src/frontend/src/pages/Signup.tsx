import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useAuth } from "../contexts/AuthContext";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const validate = () => {
    const e: Partial<typeof form> = {};
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

  const handleSubmit = async (ex: React.FormEvent) => {
    ex.preventDefault();
    if (!validate()) return;
    setLoading(true);
    const ok = await signup(form.name, form.email, form.password);
    setLoading(false);
    if (ok) {
      toast.success("Account created! Welcome to FinLit India.");
      navigate({ to: "/dashboard" });
    } else {
      toast.error("Email already registered");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-4">
            <TrendingUp className="h-7 w-7 text-primary" />
          </div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            Create an account
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Start your financial literacy journey today
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
          <form onSubmit={handleSubmit} className="space-y-4">
            {(
              [
                {
                  key: "name",
                  label: "Full Name",
                  type: "text",
                  placeholder: "Rahul Sharma",
                },
                {
                  key: "email",
                  label: "Email",
                  type: "email",
                  placeholder: "you@example.com",
                },
                {
                  key: "password",
                  label: "Password",
                  type: "password",
                  placeholder: "Min 6 characters",
                },
                {
                  key: "confirm",
                  label: "Confirm Password",
                  type: "password",
                  placeholder: "Repeat password",
                },
              ] as const
            ).map(({ key, label, type, placeholder }) => (
              <div key={key}>
                <Label htmlFor={key} className="text-sm mb-1.5 block">
                  {label}
                </Label>
                <Input
                  id={key}
                  type={type}
                  data-ocid={`signup.${key}_input`}
                  placeholder={placeholder}
                  value={form[key]}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, [key]: e.target.value }))
                  }
                />
                {errors[key] && (
                  <p
                    data-ocid={`signup.${key}_error`}
                    className="text-xs text-destructive mt-1"
                  >
                    {errors[key]}
                  </p>
                )}
              </div>
            ))}
            <Button
              data-ocid="signup.submit_button"
              type="submit"
              disabled={loading}
              className="w-full"
            >
              {loading ? (
                "Creating account..."
              ) : (
                <>
                  <span>Create Account</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-5">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary font-medium hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
