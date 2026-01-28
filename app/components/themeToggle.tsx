"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "night" ? "winter" : "night")}
      className="
        fixed top-6 right-6 z-50
        flex items-center justify-center
        w-10 h-10 rounded-full
        dark:text-white text-[var(--blue)]
        transition 
      "
      aria-label="Toggle theme"
    >
      {theme === "night" ? <Sun size={18} /> : <Moon size={18}/>}
    </button>
  );
}
