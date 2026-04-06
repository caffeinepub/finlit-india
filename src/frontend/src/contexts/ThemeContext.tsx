import { type ReactNode, createContext, useContext } from "react";
import { type Theme, useTheme } from "../hooks/useTheme";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme | ((prev: Theme) => Theme)) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const themeValues = useTheme();
  return (
    <ThemeContext.Provider value={themeValues}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useThemeContext must be inside ThemeProvider");
  return ctx;
}
