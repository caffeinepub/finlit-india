import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Eye, EyeOff, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  );
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: typeof errors = {};
    if (!email) errs.email = "Email required";
    if (!password) errs.password = "Password required";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setLoading(true);
    const ok = await login(email, password);
    setLoading(false);
    if (ok) {
      toast.success("Welcome back!");
      navigate({ to: "/dashboard" });
    } else {
      toast.error("Invalid email or password");
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
            Welcome back
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Sign in to your FinLit India account
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-sm mb-1.5 block">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                data-ocid="login.email_input"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p
                  data-ocid="login.email_error"
                  className="text-xs text-destructive mt-1"
                >
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="password" className="text-sm mb-1.5 block">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPw ? "text" : "password"}
                  data-ocid="login.password_input"
                  placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPw ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p
                  data-ocid="login.password_error"
                  className="text-xs text-destructive mt-1"
                >
                  {errors.password}
                </p>
              )}
            </div>
            <Button
              data-ocid="login.submit_button"
              type="submit"
              disabled={loading}
              className="w-full"
            >
              {loading ? (
                "Signing in..."
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-5">
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="text-primary font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-4">
          Admin access?{" "}
          <Link to="/admin" className="text-primary hover:underline">
            Admin Panel
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
