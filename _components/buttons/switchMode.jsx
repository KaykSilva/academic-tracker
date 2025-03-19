'use client'

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const  ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Evita erros de hidratação no Next.js

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md"
    >
      {theme === "dark" ? "🌞 Claro" : "🌙 Escuro"}
    </button>
  );
}
