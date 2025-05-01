"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // install with `npm install lucide-react`

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Load and apply dark mode preference
  useEffect(() => {
    const userPref = localStorage.getItem("theme");
    const prefersDark =
      userPref === "dark" ||
      (!userPref && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-soft sticky top-0 z-50 px-6 py-4">
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-blue-400">Ngoc Huynh</span>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-gray-700 dark:text-gray-200"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Links */}
        <div className="hidden sm:flex gap-4 items-center text-sm">
          <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-400 transition">Home</Link>
          <a href="#experience" className="text-gray-700 dark:text-gray-200 hover:text-blue-400 transition">Experience</a>
          <a href="#projects" className="text-gray-700 dark:text-gray-200 hover:text-blue-400 transition">Projects</a>
          <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-blue-400 transition">About</Link>
          <Link href="/resume" className="text-gray-700 dark:text-gray-200 hover:text-blue-400 transition">Resume</Link>
          <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-400 transition">Contact</Link>
          <button
            onClick={toggleDarkMode}
            className="px-3 py-1 rounded-full bg-blue-200 dark:bg-gray-700 text-black dark:text-white transition"
          >
            {isDark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="flex flex-col gap-4 mt-4 sm:hidden text-sm">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-200 hover:text-blue-400 transition">Home</Link>
          <a href="#experience" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-200 hover:text-blue-400 transition">Experience</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-200 hover:text-blue-400 transition">Projects</a>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-200 hover:text-blue-400 transition">About</Link>
          <Link href="/resume" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-200 hover:text-blue-400 transition">Resume</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-200 hover:text-blue-400 transition">Contact</Link>
          <button
            onClick={() => {
              toggleDarkMode();
              setIsOpen(false);
            }}
            className="px-3 py-1 rounded-full bg-blue-200 dark:bg-gray-700 text-black dark:text-white transition"
          >
            {isDark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      )}
    </nav>
  );
}
