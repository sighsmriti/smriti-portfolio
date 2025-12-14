import { useEffect, useState } from "react"

function TextCycle({ words, interval = 2600 }) {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const fadeOut = setTimeout(() => {
      setVisible(false)
    }, interval / 2)

    const changeWord = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length)
      setVisible(true)
    }, interval)

    return () => {
      clearTimeout(fadeOut)
      clearTimeout(changeWord)
    }
  }, [index, words.length, interval])

  return (
    <span
      className={`
        inline-block
        transition-all duration-500 ease-in-out
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        text-slate-900
        font-semibold
      `}
    >
      {words[index]}
    </span>
  )
}

export default TextCycle
