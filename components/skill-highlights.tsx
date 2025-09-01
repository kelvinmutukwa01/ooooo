"use client"

import { useEffect, useState } from "react"

const skills = [
  { name: "UI/UX Design", level: 90, color: "bg-primary" },
  { name: "Product Design", level: 85, color: "bg-primary" },
  { name: "Visual Design", level: 88, color: "bg-primary" },
  { name: "Design Systems", level: 82, color: "bg-primary" },
]

export function SkillHighlights() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    const element = document.getElementById("skills-highlight")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div id="skills-highlight" className="space-y-4">
      <h3 className="text-xl font-semibold text-card-foreground mb-6">Core Skills</h3>
      {skills.map((skill, index) => (
        <div key={skill.name} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-card-foreground">{skill.name}</span>
            <span className="text-sm text-muted-foreground">{skill.level}%</span>
          </div>
          <div className="w-full bg-muted/20 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
              style={{
                width: isVisible ? `${skill.level}%` : "0%",
                transitionDelay: `${index * 0.2}s`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
