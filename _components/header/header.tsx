'use client';
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setMounted(true);
    const today = new Date();
    const formattedDate = today.toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric"
    });
    setCurrentDate(formattedDate);
  }, []);

  if (!mounted) return null;

  return (
    <header className="bg-white dark:bg-gray-900 shadow p-4 flex justify-between items-center">

      <div className="text-xl font-semibold text-gray-800 dark:text-gray-200 flex items-center">
        <span>Olá, Mr. fish</span>
        <span className="ml-4 text-gray-600 dark:text-gray-300 text-sm">{currentDate}</span>
      </div>


      <div className="flex items-center gap-4">
        <img
          alt="User profile picture"
          className="rounded-full"
          height="40"
          width="40"
          src="https://i.pinimg.com/736x/28/8d/71/288d71f9a116ca493abde526f8d8968b.jpg"
        />
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md"
        >
          {theme === "dark" ? "🌞 Claro" : "🌙 Escuro"}
        </button>
      </div>
    </header>
  );
};

export default Header;
