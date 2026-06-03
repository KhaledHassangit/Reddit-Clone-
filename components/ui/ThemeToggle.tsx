"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "./button";

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? resolvedTheme ?? "light" : theme ?? "light";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle light/dark mode"
    >
      {currentTheme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </Button>
  );
}
