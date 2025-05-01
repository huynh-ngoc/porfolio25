import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section
        id="intro"
        className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 bg-white dark:bg-black"
      >
        <h1 className="text-[clamp(2.5rem,7vw,4rem)] font-bold text-gray-900 dark:text-white mb-4">
          Hi, I'm Ngoc Huynh
        </h1>

        <p className="text-[clamp(1.1rem,3vw,1.25rem)] text-gray-600 dark:text-gray-300 mb-4 max-w-xl leading-relaxed">
          Software Engineer | Full-stack Developer | NLP + AI Explorer
        </p>

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Currently seeking full-time opportunities — open to Software Engineer, Full-stack, or AI/NLP roles.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <a
            href="https://www.linkedin.com/in/ngoc-huynh/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-300 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-400 transition"
          >
            🔗 Connect on LinkedIn
          </a>
          <a
            href="mailto:mnhuynh2@uci.edu"
            className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-5 py-2 rounded-full text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            ✉️ Hire Me
          </a>
        </div>

        {/* Tech Stack Preview (Compact) */}
        <TechStackSection compact />
      </section>

      {/* Experience Section */}
      <section id="experience">
        <ExperienceTimeline />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectsSection />
      </section>
    </main>
  );
}
