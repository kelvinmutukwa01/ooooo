"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

interface ProjectCardProps {
  title: string
  description: string
  category: string
  technologies: string[]
  imageColor: string
  delay?: number
}

export function ProjectCard({ title, description, category, technologies, imageColor, delay = 0 }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="bg-card rounded-lg overflow-hidden group hover:scale-105 transition-all duration-500 hover:shadow-xl relative z-10"
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`h-48 sm:h-56 ${imageColor} flex items-center justify-center relative overflow-hidden`}>
        {/* Simplified geometric pattern */}
        <div className="absolute inset-0 p-6">
          <div className="w-full h-full border-2 border-card-foreground/20 rounded-lg flex items-center justify-center">
            <div className="text-lg sm:text-xl font-bold text-card-foreground/60">{title}</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{category}</span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        <p className="text-card-foreground/80 text-sm leading-relaxed line-clamp-3">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="text-xs text-card-foreground/70 bg-card-foreground/10 px-2 py-1 rounded-md">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          <Button size="sm" className="btn-primary text-sm px-4 py-2 hover:scale-105 transition-all duration-300">
            View Project
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-primary/30 text-card-foreground hover:border-primary hover:text-primary hover:scale-105 transition-all duration-300 bg-transparent text-sm px-4 py-2"
          >
            Live Demo
          </Button>
        </div>
      </div>
    </div>
  )
}
