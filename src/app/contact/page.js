"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 py-[clamp(2rem,6vw,4rem)]">
      <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold mb-6 text-center">
        Contact Me
      </h1>

      {/* Contact Form */}
      <form className="space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg px-4 py-2 text-gray-900 dark:text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg px-4 py-2 text-gray-900 dark:text-white"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg px-4 py-2 text-gray-900 dark:text-white"
        />
        <button
          type="submit"
          className="bg-blue-300 text-white px-6 py-2 rounded-full hover:bg-blue-400 transition"
        >
          Send Message
        </button>
      </form>

      {/* Animated Bubble Buttons (No Card Wrapper) */}
      <div className="flex justify-center gap-4 mt-10">
        <a
          href="https://github.com/huynh-ngoc"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-2 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105"
        >
          <FaGithub />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/ngoc-huynh/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-800 shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105"
        >
          <FaLinkedin />
          LinkedIn
        </a>

        <a
          href="mailto:mnhuynh2@uci.edu"
          className="flex items-center gap-2 bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-200 px-4 py-2 rounded-full text-sm hover:bg-pink-200 dark:hover:bg-pink-800 shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105"
        >
          <FaEnvelope />
          Email
        </a>
      </div>
    </section>
  );
}
