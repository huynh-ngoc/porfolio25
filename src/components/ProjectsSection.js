export default function ProjectsSection() {
    const projects = [
        {
            title: "RealEstate Finder",
            date: "Ongoing",
            tech: ["React", "Next.js", "MongoDB", "Tailwind CSS"],
            description:
              "Built a system to help realtors efficiently find and filter homes based on client preferences. Implemented property search, geolocation filtering, and listing details with responsive UI.",
            link: "https://github.com/yourusername/real-estate-app",
          },
          {
            title: "FinanceBuddy",
            date: "Mar 2024 – Present",
            tech: ["Flutter", "Firebase Storage", "Firebase Auth", "Google Charts"],
            description:
              "Developed a cross-platform finance tracking app that helps users analyze spending, manage budgets, and learn investment basics. Integrated secure authentication and cloud storage.",
            link: "https://github.com/yourusername/financebuddy",
          },
        {
            title: "Travelog",
            date: "Apr 2024 – Jun 2024",
            tech: ["React", "Node.js", "Express", "MongoDB", "Google Maps API", "OpenAI API"],
            description:
            "Developed a travel website with destination search, attraction data, and AI-powered itinerary generation. Users can save and share plans on a social feed.",
            link: "https://your-travelog-demo.com",
        },
        {
            title: "Fablix Movie Web App",
            date: "Apr 2023 – May 2023",
            tech: ["Java", "Tomcat", "Android", "AWS EC2", "ReCAPTCHA", "HTTPS"],
            description:
            "Configured secure and responsive movie website hosting on AWS EC2. Integrated Google ReCAPTCHA, HTTPS, JSON APIs, and Android app access.",
            link: "https://your-fablix-demo.com",
        },
        {
            title: "RoommateFinder",
            date: "Apr 2023",
            award: "1st Place",
            tech: ["Angular", "Node.js", "Express", "MongoDB", "Socket.io"],
            description:
            "Built a responsive roommate matching app with real-time chat features and robust backend infrastructure. Won 1st place at a campus hackathon.",
            link: "https://github.com/yourusername/roommate-finder",
        }
    ];
  
    return (
      <section
        className="max-w-5xl mx-auto px-4 sm:px-6 py-[clamp(2rem,6vw,4rem)]"
        data-aos="fade-up"
      >
        <h2
          className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold mb-12 text-center"
          data-aos="fade-down"
        >
          Projects
        </h2>
  
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6 bg-white dark:bg-gray-800 hover:shadow-lg hover:border-blue-300 transition-all"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <h3 className="text-[clamp(1rem,2.5vw,1.25rem)] font-semibold text-gray-800 dark:text-gray-100 mb-1">
                {project.title}
              </h3>
  
              {/* Award badge */}
              {project.award && (
                <span className="inline-block mb-2 text-xs font-medium bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-200">
                  🏆 {project.award}
                </span>
              )}
  
              <p className="text-sm text-gray-500 mb-2">{project.date}</p>
  
              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
  
              <p className="text-gray-600 text-sm mb-4 dark:text-gray-300">
                {project.description}
              </p>
  
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm bg-blue-300 text-white py-2 px-4 rounded-full hover:bg-blue-400 transition"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  