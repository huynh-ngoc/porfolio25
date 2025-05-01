"use client";

import { useState } from "react";

export default function TechStackSection({ compact = false }) {
    const categories = {
        "All": [
          "React", "Next.js", "Node.js", "Flutter", "Firebase",
          "MongoDB", "PostgreSQL", "Cassandra", "AWS", "Google Cloud",
          "Python", "Java", "JavaScript", "TypeScript", "SQL",
          "Kotlin", "C++", "Swift", "MATLAB", "R", "Lisp", "Prolog"
        ],
        "🖥️ Frontend": ["React", "Next.js", "Flutter", "JavaScript", "TypeScript"],
        "🧠 Backend": ["Node.js", "Java", "Python", "Express.js"],
        "🗄️ Database": ["MongoDB", "PostgreSQL", "Cassandra", "SQL"],
        "☁️ Cloud": ["Firebase", "AWS", "Google Cloud"],
        "🧑‍💻 Programming": [
          "Java", "C++", "Python", "JavaScript", "TypeScript", "Kotlin",
          "SQL", "Swift", "R", "MATLAB", "Lisp", "Prolog"
        ]
      };
      

  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section
      className={`max-w-3xl mx-auto px-4 sm:px-6 ${
        compact ? "pt-4 pb-8" : "py-[clamp(2rem,6vw,4rem)]"
      } text-center`}
      data-aos="fade-up"
    >
      {!compact && (
        <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold mb-4">
          Tech Stack
        </h2>
      )}

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-xs sm:text-sm px-3 py-1 rounded-full transition ${
              activeCategory === cat
                ? "bg-blue-300 text-white"
                : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tag Grid */}
      <div className={`flex flex-wrap justify-center gap-2 ${compact ? "text-xs" : "text-sm"}`}>
        {categories[activeCategory].map((tech) => (
          <span
            key={tech}
            className={`${
              compact ? "text-xs" : "text-sm"
            } bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full`}
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
