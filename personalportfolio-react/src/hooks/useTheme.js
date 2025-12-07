import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first, then system preference, default to 'dark'
    const savedTheme = localStorage.getItem("template.theme");
    if (savedTheme) return savedTheme;

    // Check system preference
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    // Apply theme to document root element
    const root = document.querySelector(":root");
    root.setAttribute("color-scheme", theme);
    localStorage.setItem("template.theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
};
