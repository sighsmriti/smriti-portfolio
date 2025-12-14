import FadeIn from "./FadeIn"

// import images
import irrigationImg from "../assets/projects/irrigation.png"
import taskImg from "../assets/projects/task-tracker.png"
import healthcareImg from "../assets/projects/healthcare-chatbot.png"
import peerImg from "../assets/projects/peertutoria.png"

function Projects() {
  const projects = [
    {
      title: "AI & IoT Based Smart Irrigation System",
      description:
        "An intelligent irrigation system that integrates AI and IoT to optimize water usage by analyzing environmental data and automating irrigation decisions.",
      image: irrigationImg,
    },
    {
      title: "Task Tracker",
      description:
        "A simple full stack web application that helps users create, store, delete and manage daily tasks through a clean and minimal interface. No hassle, just simple storage.",
      image: taskImg,
    },
    {
      title: "AI Healthcare Chatbot",
      description:
        "A multilingual AI-powered healthcare chatbot offering symptom-based diagnosis, medicine and remedy suggestions, medication reminders, and nearby hospital recommendations.",
      image: healthcareImg,
    },
    {
      title: "PeerTutoria",
      description:
        "A peer-to-peer learning platform connecting students worldwide to learn, clear doubts, and share resources, with gamification features like XP and leaderboards.",
      image: peerImg,
    },
  ]

  return (
    <section id="projects" className="space-y-12">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
          Projects
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div
              className="
                bg-white/60 backdrop-blur
                rounded-3xl overflow-hidden
                border border-slate-200/60
                hover:-translate-y-1 hover:shadow-xl
                transition-all duration-300
              "
            >
              {/* Project image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

export default Projects
