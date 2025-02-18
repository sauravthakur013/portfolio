"use client";
import { useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mounted, setMounted] = useState(false);
  // const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevents rendering until client-side hydration is done
  if (!mounted) {
    return <>{children}</>;
  }

  return <NextThemesProvider attribute="class">{children}</NextThemesProvider>;
};

export default ThemeProvider;