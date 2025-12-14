import FadeIn from "./FadeIn"

function About() {
  return (
    <section id="about" className="space-y-12">
      {/* Section title */}
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
          About Me
        </h2>
      </FadeIn>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* LEFT: About paragraph card */}
        <FadeIn delay={0.1}>
          <div className="bg-white/60 backdrop-blur rounded-3xl p-8 border border-slate-200/60 h-full">
            <p className="text-slate-600 leading-relaxed">
              I’m a 3rd year B.Tech student specializing in Artificial
              Intelligence and Data Science at Dr. NGP Institute of Technology,
              Coimbatore. I enjoy working at the intersection of logic and
              design — whether it’s understanding how systems work, building
              full stack applications, or creating interfaces that feel clean
              and intuitive.
              <br /><br />
              I’m especially interested in full stack development and currently
focusing on strengthening my problem-solving skills through
advanced data structures and algorithms, while learning by building
projects that combine creativity and real-world usability.
            </p>
          </div>
        </FadeIn>

        {/* RIGHT: Info cards */}
        <div className="space-y-6">
          
          {/* Education */}
          <FadeIn delay={0.15}>
            <div className="bg-white/60 backdrop-blur rounded-2xl p-6 border border-slate-200/60">
              <h3 className="text-lg font-medium text-slate-800 mb-2">
                Education
              </h3>
              <p className="text-slate-600 leading-relaxed">
                B.Tech in Artificial Intelligence & Data Science
                <br />
                <span className="text-sm text-slate-500">
                  Dr. NGP Institute of Technology · CGPA: 8.4
                </span>
                <br />
                <span className="text-sm text-slate-500">
                  Honors: Blockchain Technology
                </span>
              </p>
            </div>
          </FadeIn>

          {/* Skills */}
          <FadeIn delay={0.2}>
            <div className="bg-white/60 backdrop-blur rounded-2xl p-6 border border-slate-200/60">
              <h3 className="text-lg font-medium text-slate-800 mb-3">
                Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-slate-600 text-sm">
                <span>Frontend: React, Tailwind CSS</span>
                <span>Backend: Node.js, MongoDB</span>
                <span>AI & Data: Python, ML basics</span>
                <span>Tools: Git, GitHub</span>
              </div>
            </div>
          </FadeIn>

          {/* Interests */}
          <FadeIn delay={0.25}>
            <div className="bg-white/60 backdrop-blur rounded-2xl p-6 border border-slate-200/60">
              <h3 className="text-lg font-medium text-slate-800 mb-1">
                Interests
              </h3>
              <p className="text-slate-600 text-sm">
                Building side projects, experimenting with UI interactions, and
                continuously learning new technologies.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
      <FadeIn delay={0.35}>
  <div className="flex justify-center">
    <a
      href="P SMRITI resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center gap-2
        px-8 py-3
        rounded-full
        bg-slate-900 text-white
        text-sm font-medium
        hover:bg-slate-800
        transition
      "
    >
      View Resume
    </a>
  </div>
</FadeIn>

    </section>
    
  )
}

export default About
