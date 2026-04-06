import { Button } from "@/components/ui/button";
import { Clock, RotateCcw, Share2, Target, Trophy } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { QuizQuestion } from "../../data/quizQuestions";

interface QuizResultsProps {
  questions: QuizQuestion[];
  answers: (number | null)[];
  timeLeft: number;
  totalTime: number;
  onRetry: () => void;
}

export function QuizResults({
  questions,
  answers,
  timeLeft,
  totalTime,
  onRetry,
}: QuizResultsProps) {
  const score = answers.filter(
    (a, i) => a === questions[i].correctIndex,
  ).length;
  const percentage = Math.round((score / questions.length) * 100);
  const timeTaken = totalTime - timeLeft;
  const mins = Math.floor(timeTaken / 60);
  const secs = timeTaken % 60;

  const categoryStats = questions.reduce(
    (acc, q, i) => {
      const cat = q.category;
      if (!acc[cat]) acc[cat] = { correct: 0, total: 0 };
      acc[cat].total++;
      if (answers[i] === q.correctIndex) acc[cat].correct++;
      return acc;
    },
    {} as Record<string, { correct: number; total: number }>,
  );

  const chartData = Object.entries(categoryStats).map(([cat, stats]) => ({
    category: cat,
    score: Math.round((stats.correct / stats.total) * 100),
    correct: stats.correct,
    total: stats.total,
  }));

  const getGrade = () => {
    if (percentage >= 90)
      return { grade: "A+", label: "Outstanding!", color: "text-green-600" };
    if (percentage >= 80)
      return { grade: "A", label: "Excellent!", color: "text-green-500" };
    if (percentage >= 70)
      return { grade: "B", label: "Good Job!", color: "text-blue-500" };
    if (percentage >= 60)
      return { grade: "C", label: "Fair", color: "text-yellow-500" };
    return { grade: "D", label: "Needs Improvement", color: "text-red-500" };
  };

  const { grade, label, color } = getGrade();

  return (
    <div className="space-y-6" data-ocid="quiz.success_state">
      {/* Score hero */}
      <div className="text-center py-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-3">
          <Trophy className="h-10 w-10 text-primary" />
        </div>
        <div className={`text-5xl font-display font-bold ${color}`}>
          {grade}
        </div>
        <p className={`text-lg font-semibold ${color} mt-1`}>{label}</p>
        <p className="text-3xl font-bold text-foreground mt-2">
          {score} / {questions.length}
        </p>
        <p className="text-muted-foreground text-sm mt-1">
          {percentage}% correct
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-muted rounded-xl p-4 text-center">
          <Target className="h-5 w-5 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">
            {percentage}%
          </div>
          <div className="text-xs text-muted-foreground">Accuracy</div>
        </div>
        <div className="bg-muted rounded-xl p-4 text-center">
          <Clock className="h-5 w-5 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">
            {mins}:{secs.toString().padStart(2, "0")}
          </div>
          <div className="text-xs text-muted-foreground">Time Taken</div>
        </div>
      </div>

      {/* Category chart */}
      <div>
        <h4 className="text-sm font-semibold text-foreground mb-3">
          Performance by Category
        </h4>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            data={chartData}
            margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="oklch(var(--border))"
            />
            <XAxis dataKey="category" tick={{ fontSize: 10 }} />
            <YAxis domain={[0, 100]} tick={{ fontSize: 10 }} unit="%" />
            <Tooltip formatter={(v) => [`${v}%`, "Score"]} />
            <Bar dataKey="score" radius={[4, 4, 0, 0]}>
              {chartData.map((entry) => (
                <Cell
                  key={entry.category}
                  fill={entry.score >= 70 ? "#10B981" : "#2563EB"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Button
          data-ocid="quiz.primary_button"
          onClick={onRetry}
          className="flex-1"
        >
          <RotateCcw className="h-4 w-4 mr-2" /> Try Again
        </Button>
        <Button
          data-ocid="quiz.secondary_button"
          variant="outline"
          className="flex-1"
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: "FinLit India Quiz",
                text: `I scored ${percentage}% on the Financial Literacy Quiz!`,
              });
            } else {
              navigator.clipboard.writeText(
                `I scored ${percentage}% on the FinLit India Financial Literacy Quiz! \uD83C\uDDEE\uD83C\uDDF3`,
              );
            }
          }}
        >
          <Share2 className="h-4 w-4 mr-2" /> Share Score
        </Button>
      </div>
    </div>
  );
}
