import TechStackSection from "@/components/TechStackSection";

export default function AboutPage() {
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto px-4 sm:px-6 py-[clamp(2rem,6vw,4rem)] text-center"
      data-aos="fade-up"
    >
      <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold mb-6">
        About Me
      </h2>

      <p className="text-[clamp(1rem,2.5vw,1.125rem)] text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
        I'm a senior Software Engineering student at UC Irvine with a strong passion for building real-world web, mobile, and data-driven applications.
        Outside of coursework, I love designing and developing my own projects — from finance apps to real estate platforms — that solve everyday problems with clean, scalable tech.
        <br /><br />
        My experience spans full-stack tools like React, Next.js, Node.js, Flutter, and Firebase, along with databases like MongoDB, PostgreSQL, and Cassandra.
        I'm currently looking for a full-time opportunity where I can contribute, learn, and grow as a developer.
      </p>


      {/* 🔧 Reusable & filterable tech stack component */}
      <TechStackSection />
    </section>
  );
}
