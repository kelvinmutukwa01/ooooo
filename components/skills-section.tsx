"use client"

import { useEffect, useState } from "react"

const skillCategories = [
  {
    title: "Design Tools",
    skills: [
      { name: "Figma", level: 95 },
      { name: "Adobe XD", level: 88 },
      { name: "Sketch", level: 82 },
      { name: "Adobe Illustrator", level: 90 },
      { name: "Adobe Photoshop", level: 85 },
      { name: "Principle", level: 78 },
    ],
  },
  {
    title: "Design Expertise",
    skills: [
      { name: "User Research", level: 92 },
      { name: "Wireframing", level: 95 },
      { name: "Prototyping", level: 90 },
      { name: "Design Systems", level: 88 },
      { name: "Visual Design", level: 93 },
      { name: "Interaction Design", level: 85 },
    ],
  },
]

export function SkillsSection() {
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

    const element = document.getElementById("skills")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-card-foreground">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            A comprehensive overview of my design abilities and expertise, constantly evolving with industry trends and
            best practices.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`bg-background rounded-lg p-6 sm:p-8 space-y-6 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 text-center">{category.title}</h3>

              <div className="space-y-4 sm:space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm sm:text-base text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted/20 rounded-full h-2 sm:h-3">
                      <div
                        className="h-2 sm:h-3 rounded-full bg-primary transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
