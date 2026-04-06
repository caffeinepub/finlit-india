import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { PageHeader } from "../components/common/PageHeader";
import { QuizQuestion as QuizQuestionComponent } from "../components/quiz/QuizQuestion";
import { QuizResults } from "../components/quiz/QuizResults";
import { QUIZ_QUESTIONS } from "../data/quizQuestions";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TOTAL_TIME = 20 * 60; // 20 minutes

export default function Quiz() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(QUIZ_QUESTIONS.length).fill(null),
  );
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizHistory, setQuizHistory] = useLocalStorage<
    { date: string; score: number; total: number; pct: number }[]
  >("finlit-quiz-history", []);

  const handleFinish = useCallback(() => {
    const score = answers.filter(
      (a, i) => a === QUIZ_QUESTIONS[i].correctIndex,
    ).length;
    setQuizHistory((prev) => [
      {
        date: new Date().toLocaleDateString("en-IN"),
        score,
        total: QUIZ_QUESTIONS.length,
        pct: Math.round((score / QUIZ_QUESTIONS.length) * 100),
      },
      ...prev.slice(0, 9),
    ]);
    setShowResult(true);
  }, [answers, setQuizHistory]);

  useEffect(() => {
    if (!started || showResult) return;
    if (timeLeft <= 0) {
      handleFinish();
      return;
    }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [started, showResult, timeLeft, handleFinish]);

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const timerWarning = timeLeft < 120;

  const handleAnswer = (idx: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[current] = idx;
      return next;
    });
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (current < QUIZ_QUESTIONS.length - 1) setCurrent((c) => c + 1);
    else handleFinish();
  };

  const handleRetry = () => {
    setStarted(false);
    setCurrent(0);
    setAnswers(Array(QUIZ_QUESTIONS.length).fill(null));
    setShowResult(false);
    setTimeLeft(TOTAL_TIME);
    setShowExplanation(false);
  };

  return (
    <div>
      <PageHeader
        title="Financial Literacy Quiz"
        subtitle="Test your knowledge with 15 questions on banking, investments, insurance, and government schemes"
        badge="Quiz"
      />

      <div className="container mx-auto px-4 py-10 max-w-2xl">
        {!started && !showResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card border border-border rounded-2xl p-8 shadow-card text-center"
          >
            <div className="text-5xl mb-4">\uD83C\uDDEE\uD83C\uDDF3</div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">
              Ready to Test Your Knowledge?
            </h2>
            <p className="text-muted-foreground mb-6">
              {QUIZ_QUESTIONS.length} questions &bull; 20 minute timer &bull;
              Instant explanations
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {["Banking", "Investment", "Insurance", "Tax & Schemes"].map(
                (cat) => (
                  <div
                    key={cat}
                    className="bg-muted rounded-xl p-3 text-xs font-medium text-muted-foreground"
                  >
                    {cat}
                  </div>
                ),
              )}
            </div>
            <Button
              data-ocid="quiz.primary_button"
              size="lg"
              onClick={() => setStarted(true)}
              className="px-8"
            >
              Start Quiz
            </Button>
            {quizHistory.length > 0 && (
              <div className="mt-8 border-t border-border pt-6">
                <h3 className="font-semibold text-foreground mb-3 text-sm">
                  Your Past Attempts
                </h3>
                <div className="space-y-2">
                  {quizHistory.slice(0, 3).map((h, i) => (
                    <div
                      // biome-ignore lint/suspicious/noArrayIndexKey: quiz history sorted by timestamp
                      key={i}
                      data-ocid={`quiz.item.${i + 1}`}
                      className="flex items-center justify-between text-sm bg-muted rounded-lg px-3 py-2"
                    >
                      <span className="text-muted-foreground">{h.date}</span>
                      <span className="font-semibold text-foreground">
                        {h.score}/{h.total}
                      </span>
                      <span
                        className={`font-bold ${h.pct >= 70 ? "text-green-600" : "text-orange-500"}`}
                      >
                        {h.pct}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {started && !showResult && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card"
          >
            {/* Timer & Progress */}
            <div className="flex items-center justify-between mb-4">
              <Progress
                value={(current / QUIZ_QUESTIONS.length) * 100}
                className="flex-1 mr-4 h-2"
              />
              <div
                className={`flex items-center gap-1.5 text-sm font-semibold rounded-full px-3 py-1.5 ${
                  timerWarning
                    ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <Clock className="h-3.5 w-3.5" />
                {mins}:{secs.toString().padStart(2, "0")}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <QuizQuestionComponent
                  question={QUIZ_QUESTIONS[current]}
                  questionNumber={current + 1}
                  totalQuestions={QUIZ_QUESTIONS.length}
                  selectedAnswer={answers[current]}
                  onSelectAnswer={handleAnswer}
                  showResult={showExplanation}
                />
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between items-center mt-6">
              <Button
                data-ocid="quiz.secondary_button"
                variant="outline"
                size="sm"
                onClick={() => {
                  setCurrent((c) => c - 1);
                  setShowExplanation(answers[current - 1] !== null);
                }}
                disabled={current === 0}
              >
                <ChevronLeft className="h-4 w-4 mr-1" /> Previous
              </Button>
              <Button
                data-ocid="quiz.primary_button"
                size="sm"
                onClick={handleNext}
                disabled={answers[current] === null && !showExplanation}
              >
                {current === QUIZ_QUESTIONS.length - 1 ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 mr-1" />
                    Finish
                  </>
                ) : (
                  <>
                    Next <ChevronRight className="h-4 w-4 ml-1" />
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        )}

        {showResult && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card"
          >
            <QuizResults
              questions={QUIZ_QUESTIONS}
              answers={answers}
              timeLeft={timeLeft}
              totalTime={TOTAL_TIME}
              onRetry={handleRetry}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}
