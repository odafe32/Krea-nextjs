"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { MoonIcon } from "./Icons";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="w-12 h-12 rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse" />
    );
  }

  return (
    <div
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative inline-flex items-center justify-center cursor-pointer bg-[#f5f5f5] dark:bg-[#202020] rounded-[13px] px-2 py-2 hover:bg-gray-50"
      aria-label="Toggle theme"
    >
      <div className="relative">
        {theme === "dark" ? (
          <MoonIcon />
        ) : (
          <IoSunny className="w-5 h-5 text-black" />
        )}
        {/* logo */}
      </div>
    </div>
  );
}
