import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";
import type { QuizQuestion as QuizQuestionType } from "../../data/quizQuestions";

interface QuizQuestionProps {
  question: QuizQuestionType;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  onSelectAnswer: (index: number) => void;
  showResult: boolean;
}

export function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  showResult,
}: QuizQuestionProps) {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          {question.category}
        </span>
        <span className="text-sm text-muted-foreground">
          {questionNumber} / {totalQuestions}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-foreground leading-snug">
        {question.question}
      </h3>

      <div className="grid gap-3">
        {question.options.map((option, i) => {
          let variant: "outline" | "default" = "outline";
          let extraClass =
            "justify-start text-left h-auto py-3 px-4 font-normal text-sm";

          if (showResult && selectedAnswer !== null) {
            if (i === question.correctIndex) {
              extraClass +=
                " border-green-500 bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-300";
            } else if (i === selectedAnswer && i !== question.correctIndex) {
              extraClass +=
                " border-red-400 bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-300";
            }
          } else if (selectedAnswer === i) {
            extraClass += " border-primary bg-primary/5 dark:bg-primary/10";
            variant = "default";
            extraClass =
              "justify-start text-left h-auto py-3 px-4 font-normal text-sm bg-primary text-primary-foreground";
          }

          return (
            <Button
              // biome-ignore lint/suspicious/noArrayIndexKey: options are static and order never changes
              key={i}
              data-ocid={`quiz.radio.${i + 1}`}
              variant={variant}
              className={extraClass}
              onClick={() => !showResult && onSelectAnswer(i)}
              disabled={showResult}
            >
              <div className="flex items-center gap-3 w-full">
                {showResult && selectedAnswer !== null ? (
                  i === question.correctIndex ? (
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-green-600" />
                  ) : i === selectedAnswer ? (
                    <XCircle className="h-4 w-4 shrink-0 text-red-500" />
                  ) : (
                    <span className="h-4 w-4 shrink-0 rounded-full border-2 border-current opacity-30" />
                  )
                ) : (
                  <span
                    className={`h-5 w-5 shrink-0 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                      selectedAnswer === i
                        ? "border-primary-foreground bg-primary-foreground/20"
                        : "border-current"
                    }`}
                  >
                    {String.fromCharCode(65 + i)}
                  </span>
                )}
                <span className="flex-1">{option}</span>
              </div>
            </Button>
          );
        })}
      </div>

      {showResult && (
        <div className="mt-3 p-4 bg-muted rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Explanation: </span>
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
