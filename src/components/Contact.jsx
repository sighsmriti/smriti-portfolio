import { FiMail, FiPhone, FiMapPin, FiArrowUp } from "react-icons/fi"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"

function Contact() {
  return (
    <section
      id="contact"
      className="
        flex flex-col items-center text-center
        pt-10 pb-24
        space-y-12
      "
    >
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
        Contact
      </h2>

      {/* Caption */}
      <p className="text-lg text-slate-700 max-w-xl">
        Let’s connect — whether it’s for collaboration, opportunities,
        or just a quick chat.
      </p>

      {/* Icons */}
      <div className="flex flex-wrap justify-center gap-10">
        <a
          href="mailto:smritip0806@gmail.com"
          className="text-slate-900 hover:text-black transition transform hover:-translate-y-1"
        >
          <FiMail size={38} />
        </a>

        <a
          href="tel:+916369966404"
          className="text-slate-900 hover:text-black transition transform hover:-translate-y-1"
        >
          <FiPhone size={38} />
        </a>

        <a
          href="https://www.linkedin.com/in/smriti-p-00a031270"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-900 hover:text-black transition transform hover:-translate-y-1"
        >
          <FaLinkedin size={38} />
        </a>

        <a
          href="https://github.com/sighsmriti"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-900 hover:text-black transition transform hover:-translate-y-1"
        >
          <FaGithub size={38} />
        </a>

        <a
          href="https://leetcode.com/u/smritip0806"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-900 hover:text-black transition transform hover:-translate-y-1"
        >
          <SiLeetcode size={38} />
        </a>

        <div className="flex items-center gap-2 text-slate-800">
          <FiMapPin size={38} />
          <span className="text-sm">Coimbatore, India</span>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
        aria-label="Scroll to top"
        className="
          mt-10
          text-slate-500 hover:text-slate-900
          transition
          animate-bounce
        "
      >
        <FiArrowUp size={28} />
      </button>
    </section>
  )
}

export default Contact
