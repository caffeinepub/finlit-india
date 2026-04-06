import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart3,
  BookOpen,
  CheckCircle2,
  Mail,
  MessageSquare,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { QUIZ_QUESTIONS } from "../data/quizQuestions";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ADMIN_PASSWORD = "admin123";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
}

export default function AdminPanel() {
  const [pw, setPw] = useState("");
  const [authenticated, setAuthenticated] = useLocalStorage(
    "finlit-admin-auth",
    false,
  );
  const [pwError, setPwError] = useState("");
  const [messages, setMessages] = useLocalStorage<ContactMessage[]>(
    "finlit-messages",
    [],
  );
  const [quizHistory] = useLocalStorage<
    { date: string; score: number; total: number; pct: number }[]
  >("finlit-quiz-history", []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pw === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setPwError("");
    } else {
      setPwError("Incorrect password");
    }
  };

  const markRead = (id: string) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, read: true } : m)),
    );
  };

  const avgScore =
    quizHistory.length > 0
      ? Math.round(
          quizHistory.reduce((a, q) => a + q.pct, 0) / quizHistory.length,
        )
      : 0;
  const unread = messages.filter((m) => !m.read).length;

  if (!authenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-sm"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-4">
              <Shield className="h-7 w-7 text-primary" />
            </div>
            <h1 className="font-display text-2xl font-bold text-foreground">
              Admin Panel
            </h1>
            <p className="text-muted-foreground mt-1 text-sm">
              Enter admin password to continue
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label className="text-sm mb-1.5 block">Admin Password</Label>
                <Input
                  data-ocid="admin.password_input"
                  type="password"
                  placeholder="••••••••"
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                />
                {pwError && (
                  <p
                    data-ocid="admin.password_error"
                    className="text-xs text-destructive mt-1"
                  >
                    {pwError}
                  </p>
                )}
              </div>
              <Button
                data-ocid="admin.submit_button"
                type="submit"
                className="w-full"
              >
                Access Panel
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-navy-dark text-white py-10 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Shield className="h-5 w-5 text-primary" />
              <h1 className="font-display text-2xl font-bold">Admin Panel</h1>
            </div>
            <p className="text-white/60 text-sm">
              Manage your FinLit India platform
            </p>
          </div>
          <Button
            data-ocid="admin.logout_button"
            variant="outline"
            size="sm"
            onClick={() => setAuthenticated(false)}
            className="text-white border-white/20 hover:bg-white/10"
          >
            Logout
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* Analytics cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              icon: MessageSquare,
              label: "Total Messages",
              value: messages.length,
              color: "text-primary",
            },
            {
              icon: Mail,
              label: "Unread Messages",
              value: unread,
              color: "text-orange-500",
            },
            {
              icon: BookOpen,
              label: "Quiz Attempts",
              value: quizHistory.length,
              color: "text-purple-600",
            },
            {
              icon: TrendingUp,
              label: "Avg Quiz Score",
              value: `${avgScore}%`,
              color: "text-green-600",
            },
          ].map(({ icon: Icon, label, value, color }) => (
            <div
              key={label}
              className="bg-card border border-border rounded-xl p-4 shadow-card"
            >
              <Icon className={`h-5 w-5 ${color} mb-2`} />
              <div className={`font-display text-2xl font-bold ${color}`}>
                {value}
              </div>
              <div className="text-xs text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>

        <Tabs defaultValue="analytics">
          <TabsList className="mb-6">
            <TabsTrigger data-ocid="admin.analytics_tab" value="analytics">
              <BarChart3 className="h-4 w-4 mr-1.5" />
              Analytics
            </TabsTrigger>
            <TabsTrigger data-ocid="admin.questions_tab" value="questions">
              <BookOpen className="h-4 w-4 mr-1.5" />
              Quiz Questions
            </TabsTrigger>
            <TabsTrigger data-ocid="admin.messages_tab" value="messages">
              <MessageSquare className="h-4 w-4 mr-1.5" />
              Messages
              {unread > 0 && (
                <Badge className="ml-1.5 text-xs h-5">{unread}</Badge>
              )}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="analytics">
            <div className="bg-card border border-border rounded-xl p-5 shadow-card">
              <h3 className="font-display font-semibold text-foreground mb-4">
                Platform Overview
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-muted">
                  <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-bold text-xl text-foreground">
                    {messages.length}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Contact Submissions
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted">
                  <BookOpen className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <div className="font-bold text-xl text-foreground">
                    {quizHistory.length}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Quiz Attempts
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted">
                  <TrendingUp className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="font-bold text-xl text-foreground">
                    {avgScore}%
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Avg Quiz Score
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="questions">
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-card">
              <div className="p-4 border-b border-border">
                <h3 className="font-display font-semibold text-foreground">
                  Quiz Questions ({QUIZ_QUESTIONS.length})
                </h3>
              </div>
              <div className="divide-y divide-border">
                {QUIZ_QUESTIONS.map((q, i) => (
                  <div
                    key={q.id}
                    data-ocid={`admin.questions.item.${i + 1}`}
                    className="p-4 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-bold text-primary bg-primary/10 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                        {q.id}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground mb-1">
                          {q.question}
                        </p>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {q.category}
                          </Badge>
                          <span className="text-xs text-green-600 flex items-center gap-1">
                            <CheckCircle2 className="h-3 w-3" />{" "}
                            {q.options[q.correctIndex]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="messages">
            {messages.length === 0 ? (
              <div
                data-ocid="admin.messages_empty_state"
                className="text-center py-16"
              >
                <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-40" />
                <p className="text-muted-foreground">No messages yet</p>
              </div>
            ) : (
              <div className="space-y-3">
                {messages.map((m, i) => (
                  <div
                    key={m.id}
                    data-ocid={`admin.messages.item.${i + 1}`}
                    className={`bg-card border rounded-xl p-4 shadow-card ${
                      m.read
                        ? "border-border"
                        : "border-primary/30 bg-primary/3"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-foreground text-sm">
                            {m.name}
                          </span>
                          <span className="text-muted-foreground text-xs">
                            {m.email}
                          </span>
                          {!m.read && <Badge className="text-xs">New</Badge>}
                        </div>
                        <p className="text-sm font-medium text-foreground mb-1">
                          {m.subject}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {m.message}
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          {m.date}
                        </p>
                      </div>
                      {!m.read && (
                        <Button
                          data-ocid={`admin.messages.read_button.${i + 1}`}
                          size="sm"
                          variant="outline"
                          onClick={() => markRead(m.id)}
                          className="shrink-0 text-xs"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 mr-1" />
                          Mark Read
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
