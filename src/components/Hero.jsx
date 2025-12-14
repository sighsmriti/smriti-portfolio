import FadeIn from "./FadeIn"
import TextCycle from "./TextCycle"

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center gap-6 overflow-hidden"
    >

      {/* Intro */}
      <FadeIn>
        <p className="text-xl md:text-2xl text-slate-500 tracking-wide">
          Hi, I am
        </p>
      </FadeIn>

      {/* Name */}
      <FadeIn delay={0.1}>
        <h1 className="text-6xl md:text-7xl font-bold text-slate-900">
          P Smriti
        </h1>
      </FadeIn>

      {/* Cycling roles */}
      <FadeIn delay={0.2}>
        <p className="text-2xl md:text-3xl text-slate-800 h-[3rem]">
          <TextCycle
            words={[
              "Full Stack Developer",
              "AI & Data Science Student",
              "Frontend Enthusiast",
              "Problem Solver",
            ]}
          />
        </p>
      </FadeIn>

      {/* Short description */}
      <FadeIn delay={0.3}>
        <p className="max-w-xl text-base md:text-lg text-slate-600 leading-relaxed">
          Passionate about artificial intelligence and full stack development,
          with a focus on turning ideas into simple, intuitive web experiences.
        </p>
      </FadeIn>
    </section>
  )
}

export default Hero
