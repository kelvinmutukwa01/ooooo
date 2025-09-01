"use client"

import { useEffect, useState } from "react"

export function AboutGeometric() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("about")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="w-full h-80 bg-background rounded-lg flex items-center justify-center relative overflow-hidden group cursor-pointer">
      <div className="absolute inset-0">
        <div
          className={`absolute top-6 left-6 w-8 h-20 bg-card transition-all duration-700 ${
            isVisible ? "opacity-60 translate-y-0" : "opacity-0 translate-y-4"
          } group-hover:opacity-80 group-hover:scale-110`}
          style={{ transitionDelay: "0.1s" }}
        />
        <div
          className={`absolute top-12 left-16 w-12 h-16 bg-card transition-all duration-700 ${
            isVisible ? "opacity-40 translate-y-0" : "opacity-0 translate-y-4"
          } group-hover:opacity-60 group-hover:scale-110`}
          style={{ transitionDelay: "0.2s" }}
        />
        <div
          className={`absolute top-8 left-32 w-6 h-24 bg-card transition-all duration-700 ${
            isVisible ? "opacity-50 translate-y-0" : "opacity-0 translate-y-4"
          } group-hover:opacity-70 group-hover:scale-110`}
          style={{ transitionDelay: "0.3s" }}
        />
        <div
          className={`absolute top-16 left-44 w-10 h-18 bg-card transition-all duration-700 ${
            isVisible ? "opacity-35 translate-y-0" : "opacity-0 translate-y-4"
          } group-hover:opacity-55 group-hover:scale-110`}
          style={{ transitionDelay: "0.4s" }}
        />

        <div
          className={`absolute bottom-6 right-6 w-10 h-24 bg-card transition-all duration-700 ${
            isVisible ? "opacity-70 translate-y-0" : "opacity-0 -translate-y-4"
          } group-hover:opacity-90 group-hover:scale-110`}
          style={{ transitionDelay: "0.5s" }}
        />
        <div
          className={`absolute bottom-12 right-18 w-6 h-20 bg-card transition-all duration-700 ${
            isVisible ? "opacity-45 translate-y-0" : "opacity-0 -translate-y-4"
          } group-hover:opacity-65 group-hover:scale-110`}
          style={{ transitionDelay: "0.6s" }}
        />
        <div
          className={`absolute bottom-8 right-32 w-14 h-16 bg-card transition-all duration-700 ${
            isVisible ? "opacity-55 translate-y-0" : "opacity-0 -translate-y-4"
          } group-hover:opacity-75 group-hover:scale-110`}
          style={{ transitionDelay: "0.7s" }}
        />

        {/* Accent elements */}
        <div
          className={`absolute top-20 left-28 w-4 h-12 bg-primary transition-all duration-700 ${
            isVisible ? "opacity-30 translate-y-0" : "opacity-0 translate-y-4"
          } group-hover:opacity-50 group-hover:scale-125`}
          style={{ transitionDelay: "0.8s" }}
        />
        <div
          className={`absolute bottom-20 right-24 w-5 h-14 bg-primary transition-all duration-700 ${
            isVisible ? "opacity-25 translate-y-0" : "opacity-0 -translate-y-4"
          } group-hover:opacity-45 group-hover:scale-125`}
          style={{ transitionDelay: "0.9s" }}
        />
      </div>

      <div
        className={`text-4xl font-bold transition-all duration-1000 ${
          isVisible ? "text-muted-foreground/20 scale-100" : "text-muted-foreground/10 scale-95"
        } group-hover:text-primary/30 group-hover:scale-110`}
      >
        About
      </div>

      {/* Interactive glow effect */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  )
}
