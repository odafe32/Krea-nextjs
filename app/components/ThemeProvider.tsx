"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface Props {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: Props) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
}
