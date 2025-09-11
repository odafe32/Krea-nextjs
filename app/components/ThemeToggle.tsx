"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse" />
    );
  }

  return (
    <div
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative inline-flex items-center justify-center cursor-pointer w-13 h-13 rounded-lg border-none bg-white dark:bg-black  hover:bg-gray-50"
      aria-label="Toggle theme"
    >
      <div className="relative">
        {theme === "dark" ? (
          <FaMoon className="w-5 h-5 transition-all" />
        ) : (
          <IoSunny className="w-8 h-8 transition-all" />
        )}
      </div>
    </div>
  );
}
