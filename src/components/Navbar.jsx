import { useEffect, useState } from "react"

const sections = ["home", "about", "projects", "contact"]

function Navbar() {
  const [active, setActive] = useState("home")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-6 right-8 z-50">
      <ul className="flex gap-6 text-sm font-medium">
        {sections.map((item) => (
          <li
            key={item}
            onClick={() => scrollTo(item)}
            className={`cursor-pointer transition ${
              active === item
                ? "text-primary"
                : "text-slate-600 hover:text-primary"
            }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
