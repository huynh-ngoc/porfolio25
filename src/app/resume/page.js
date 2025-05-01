export default function ResumePage() {
    return (
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-[clamp(2rem,6vw,4rem)] text-center">
        <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold mb-6">
          Resume
        </h1>
        <p className="mb-4 text-gray-700 dark:text-gray-300 text-[clamp(1rem,2.5vw,1.125rem)]">
          Click below to view or download my resume:
        </p>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-300 text-white px-6 py-2 rounded-full hover:bg-blue-400 transition"
        >
          View Resume
        </a>
      </section>
    );
  }
  