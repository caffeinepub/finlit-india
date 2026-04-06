import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useScrollProgress } from "../../hooks/useScrollProgress";

export function BackToTop() {
  const { showBackToTop } = useScrollProgress();

  if (!showBackToTop) return null;

  return (
    <Button
      data-ocid="back_to_top.button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      size="icon"
      className="fixed bottom-6 right-6 z-50 h-11 w-11 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-200"
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
}
