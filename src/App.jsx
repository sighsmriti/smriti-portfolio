import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import AnimatedBackground from "./components/AnimatedBackground"
import CursorTrail from "./components/CursorTrail"

function App() {
  return (
    <>
      <CursorTrail />
      <AnimatedBackground />
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 space-y-32">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
