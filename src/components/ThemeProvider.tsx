// "use client";
// import { ThemeProvider as NextThemesProvider } from "next-themes";

// const ThemeProvider = ({ children }:any) => {
//   return <NextThemesProvider attribute="class">{children}</NextThemesProvider>;
// };

// export default ThemeProvider;

"use client";
import { useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

const ThemeProvider = ({ children }:any) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

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