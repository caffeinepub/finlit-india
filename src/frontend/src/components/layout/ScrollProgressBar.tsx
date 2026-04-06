import { useScrollProgress } from "../../hooks/useScrollProgress";

export function ScrollProgressBar() {
  const { progress } = useScrollProgress();
  return (
    <div
      className="fixed top-0 left-0 z-[60] h-1 bg-primary transition-all duration-150"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  );
}
