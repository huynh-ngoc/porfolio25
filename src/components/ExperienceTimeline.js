export default function ExperienceTimeline() {
    const experiences = [
      {
        title: "STEAM Instructor",
        company: "Dreams for Schools",
        category: "Teaching",
        date: "February 2025 – Present",
        bullets: [
          "Led engaging engineering and coding classes for elementary students, fostering curiosity in STEM fields.",
          "Utilized the Engineering Design Process to teach fundamental physics, electricity, and magnetism concepts.",
          "Guided students through hands-on projects using Scratch, developing their problem-solving and critical-thinking skills.",
          "Conducted training sessions and maintained strong communication with students, parents, and fellow educators."
        ]
      },
      {
        title: "Software Engineer Intern",
        company: "Zuum Transportation Inc",
        category: "Internship",
        date: "January 2024 – June 2024",
        bullets: [
          "Implemented a Robotic Process Automation System using Python, Gmail API for sending and receiving user emails, MongoDB to store user information, and integrated Zuum API to determine freight quotes based on key information extracted from emails.",
          "Leveraged natural language processing techniques such as Named Entity Recognition (NER), NLTK, and spaCy to accurately extract essential information from emails, and developed a Streamlit developer UI for future developers to test, annotate, and train the model for further improvement."
        ]
      },
      {
        title: "Student Accelerator",
        company: "CSU Monterey Bay – CTI",
        category: "Mentorship and Teaching",
        date: "September 2022 – February 2024",
        bullets: [
          "Provided technical mentorship for 35-50 students, leveraging the UMPIRE method for coding interview problem-solving and facilitating weekly Deep Work Sessions on Data Structures, Algorithms, and Binary Numbers.",
          "Achieved top performance metrics, including the highest number of students in the green zone during Sprint 1 in Fall 2022 and Sprints 2 & 3 in Fall 2023, while organizing and accompanying students to tech events for skill enhancement and networking."
        ]
      },
      {
        title: "Undergraduate Researcher",
        company: "UC Irvine",
        category: "Research",
        date: "August 2023 – December 2023",
        bullets: [
          "Conducted sentiment analysis on Yelp reviews using Neural Networks and Random Forest models to determine business experiences' positivity or negativity, with overall accuracy rate over 85%.",
          "Demonstrated the superiority of the Neural Networks model over Random Forest in accurately classifying sentiments. Emphasized the importance of refining tokenization strategies for enhanced sentiment classification in review-based platforms like Yelp."
        ]
      },
      {
        title: "Undergraduate Researcher",
        company: "CSU Fullerton – AI Lab",
        category: "Research",
        date: "June 2022 – August 2022",
        bullets: [
          "Conducted an EEG-based study to investigate the impact of stress on Short-Term and Long-Term memory, utilizing advanced machine learning techniques such as SVM, KNN, and Neural Networks in MATLAB to analyze the data.",
          "Achieved high levels of accuracy ranging from 81.2% to 96.7% by developing and training sophisticated Neural Networks models and analyzed their performance using evaluation metrics such as confusion matrix and ROC curve. Utilized insights from the analysis to determine the most effective approach to detecting stress in the EEG data."
        ]
      },
      {
        title: "Project Lead Intern",
        company: "NASA / CA Space Grant",
        category: "Internship",
        date: "March 2021 – August 2021",
        bullets: [
          "Led a team of 2 other students to research about the Lunar Lava Tube Exploration and build an autonomous rover to find the possibility of human long-term habitation on the Moon.",
          "Utilized Arduino IDE and C language to control the movement of the rover and build a Graphic User Interface (GUI) by JavaScript to manipulate the rover’s direction."
        ]
      }
    ];
  
    return (
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-[clamp(2rem,6vw,4rem)]">
        <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold mb-12 text-center" data-aos="fade-down">
          Experience
        </h2>
        <ol className="relative border-l-4 border-blue-300 pl-6">
          {experiences.map((exp, index) => (
            <li
              key={index}
              className="mb-12 relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Dot */}
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[26px] top-1.5 shadow-md border-2 border-white dark:border-gray-900" />
              
              {/* Date */}
              <time className="text-sm text-gray-500">{exp.date}</time>
              
              {/* Title + Company */}
              <h3 className="text-[clamp(1.1rem,2.8vw,1.4rem)] font-semibold text-gray-800 mt-1 dark:text-gray-100">
                {exp.title} — <span className="text-gray-600 dark:text-gray-300">{exp.company}</span>
              </h3>
              
              {/* Category Label */}
              <span className="inline-block mt-1 text-xs font-medium bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                {exp.category}
              </span>
  
              {/* Bullet Points */}
              <ul className="list-disc list-inside mt-3 text-[clamp(0.95rem,2.3vw,1.075rem)] text-gray-600 dark:text-gray-300 leading-relaxed">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
    );
  }
  