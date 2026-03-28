import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type SiteTheme = "dark" | "editorial" | "editorial-animated";

interface ThemeContextType {
  theme: SiteTheme;
  toggleTheme: () => void;
  isDark: boolean;
  isEditorial: boolean;
  isAnimated: boolean;
  isLight: boolean;
}

const themeOrder: SiteTheme[] = ["dark", "editorial", "editorial-animated"];

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
  isDark: true,
  isEditorial: false,
  isAnimated: false,
  isLight: false,
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<SiteTheme>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("site-theme") as SiteTheme;
      if (themeOrder.includes(stored)) return stored;
    }
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("site-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const idx = themeOrder.indexOf(prev);
      return themeOrder[(idx + 1) % themeOrder.length];
    });
  };

  const isDark = theme === "dark";
  const isEditorial = theme === "editorial";
  const isAnimated = theme === "editorial-animated";
  const isLight = isEditorial || isAnimated;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark, isEditorial, isAnimated, isLight }}>
      {children}
    </ThemeContext.Provider>
  );
};
