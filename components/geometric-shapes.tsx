"use client"

import { useEffect, useState } from "react"

export function GeometricShapes() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute top-20 right-10 w-16 h-16 bg-primary/30 rounded-full animate-float transition-transform duration-1000 shadow-lg"
        style={{
          animationDelay: "0s",
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
        }}
      />
      <div
        className="absolute top-40 right-32 w-12 h-12 bg-primary/40 rounded-full animate-float transition-transform duration-1000 shadow-md"
        style={{
          animationDelay: "1s",
          transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
        }}
      />
      <div
        className="absolute top-60 right-20 w-20 h-20 bg-primary/25 rounded-full animate-float transition-transform duration-1000 shadow-lg"
        style={{
          animationDelay: "2s",
          transform: `translate(${mousePosition.x * 0.008}px, ${mousePosition.y * 0.008}px)`,
        }}
      />
      <div
        className="absolute bottom-40 right-16 w-14 h-14 bg-primary/35 rounded-full animate-float transition-transform duration-1000 shadow-md"
        style={{
          animationDelay: "3s",
          transform: `translate(${mousePosition.x * 0.012}px, ${mousePosition.y * 0.012}px)`,
        }}
      />
      <div
        className="absolute bottom-20 right-40 w-10 h-10 bg-primary/45 rounded-full animate-float transition-transform duration-1000 shadow-sm"
        style={{
          animationDelay: "4s",
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      />

      <div
        className="absolute top-32 right-60 w-8 h-8 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full animate-float transition-transform duration-1000"
        style={{
          animationDelay: "1.5s",
          transform: `translate(${mousePosition.x * 0.018}px, ${mousePosition.y * 0.018}px)`,
        }}
      />
      <div
        className="absolute top-80 right-8 w-18 h-18 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full animate-float transition-transform duration-1000"
        style={{
          animationDelay: "2.5s",
          transform: `translate(${mousePosition.x * 0.009}px, ${mousePosition.y * 0.009}px)`,
        }}
      />

      <div
        className="absolute top-24 left-10 w-12 h-12 bg-primary/20 rounded-full animate-float transition-transform duration-1000 shadow-md"
        style={{
          animationDelay: "0.5s",
          transform: `translate(${mousePosition.x * -0.008}px, ${mousePosition.y * -0.008}px)`,
        }}
      />
      <div
        className="absolute bottom-32 left-20 w-16 h-16 bg-primary/30 rounded-full animate-float transition-transform duration-1000 shadow-lg"
        style={{
          animationDelay: "3.5s",
          transform: `translate(${mousePosition.x * -0.012}px, ${mousePosition.y * -0.012}px)`,
        }}
      />

      <div
        className="absolute top-1/2 right-1/4 w-6 h-6 bg-primary/15 rounded-full animate-float transition-transform duration-1000"
        style={{
          animationDelay: "5s",
          transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`,
        }}
      />
      <div
        className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-primary/25 rounded-full animate-float transition-transform duration-1000"
        style={{
          animationDelay: "6s",
          transform: `translate(${mousePosition.x * -0.007}px, ${mousePosition.y * -0.007}px)`,
        }}
      />
    </div>
  )
}
