"use client"

import { useState, useEffect } from "react"

const titles = ["UI/UX DESIGNER", "GRAPHICS DESIGNER", "PRODUCT DESIGNER"]

export function AnimatedTitle() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % titles.length)
        setIsVisible(true)
      }, 300)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <span
      className={`text-primary transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
      }`}
      aria-live="polite"
    >
      {titles[currentIndex]}
    </span>
  )
}
