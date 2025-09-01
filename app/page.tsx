"use client"

import { Navigation } from "@/components/navigation"
import { GeometricShapes } from "@/components/geometric-shapes"
import { AnimatedTitle } from "@/components/animated-title"
import { ProjectCard } from "@/components/project-card"
import { ProjectFilter } from "@/components/project-filter"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { SocialLinks } from "@/components/social-links"
import { Footer } from "@/components/footer"
import { useState, useMemo } from "react"
import { DocumentViewer } from "@/components/document-viewer"

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [isAboutExpanded, setIsAboutExpanded] = useState(false)
  const [documentViewer, setDocumentViewer] = useState<{
    isOpen: boolean
    type: "cv" | "cover-letter"
  }>({
    isOpen: false,
    type: "cv",
  })

  const projects = [
    {
      title: "Urban Vogue Design System",
      description:
        "A comprehensive design system blending modern urban aesthetics with timeless elegance. Features a complete component library, style guide, and brand guidelines for consistent digital experiences.",
      category: "Design System",
      technologies: ["Design System", "Component Library", "Style Guide", "Brand Guidelines"],
      imageColor: "bg-blue-100",
      delay: 0.1,
    },
    {
      title: "Urban Vogue Application",
      description:
        "A lifestyle mobile application for the modern trendsetter. Our story began with a simple idea: make urban fashion accessible, elegant, and expressive.",
      category: "Mobile App",
      technologies: ["Mobile App", "UI/UX Design", "Prototyping", "User Research"],
      imageColor: "bg-orange-100",
      delay: 0.2,
    },
    {
      title: "Brand Identity - TechStart",
      description:
        "Complete brand identity design for a technology startup. Includes logo design, brand guidelines, marketing materials, and digital asset creation.",
      category: "Branding",
      technologies: ["Brand Identity", "Logo Design", "Visual Identity", "Marketing Design"],
      imageColor: "bg-purple-100",
      delay: 0.3,
    },
    {
      title: "E-Learning Platform",
      description:
        "An interactive learning platform designed for modern education. Features course management, progress tracking, and collaborative tools with engaging user experience.",
      category: "Web Design",
      technologies: ["Educational Design", "User Journey", "Interactive Design", "Accessibility"],
      imageColor: "bg-yellow-100",
      delay: 0.4,
    },
  ]

  const categories = ["All", "Graphics Design", "Application Design", "Website Design", "Branding", "Design System"]

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects
    return projects.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  const fullAboutText = `I am a Curious and passionate aspiring Product and UI/UX Designer driven by a desire to create meaningful digital experiences. I enjoy solving real-world problems through design thinking, visual storytelling, and user-centered design.

My approach combines creativity with strategic thinking, ensuring every design decision serves both user needs and business objectives. I believe great design is invisible - it just works.

With a keen eye for detail and a passion for innovation, I strive to create designs that not only look beautiful but also function seamlessly. My goal is to bridge the gap between user needs and business goals through thoughtful, research-driven design solutions.`

  const shortAboutText =
    "I am a Curious and passionate aspiring Product and UI/UX Designer driven by a desire to create meaningful digital experiences. I enjoy solving real-world problems through design thinking, visual storytelling, and user-centered design."

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden mt-20 lg:mt-24"
      >
        <GeometricShapes />

        <div className="max-w-7xl mx-auto w-full relative z-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center z-10 relative">
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="space-y-3 lg:space-y-4">
                <h2 className="text-lg sm:text-xl lg:text-2xl text-primary font-normal animate-fade-in">
                  Hello, I'm Kelvin Mutukwa
                </h2>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground animate-fade-in-up leading-tight">
                  WELCOME TO MY
                </h1>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary animate-fade-in-up leading-tight">
                  CREATIVE WORLD
                </h1>
                <div className="text-xl sm:text-2xl lg:text-3xl font-medium animate-fade-in-up">
                  <span className="text-foreground">I'm A </span>
                  <AnimatedTitle />
                </div>
              </div>

              <p className="text-base sm:text-lg text-foreground/80 max-w-lg mx-auto lg:mx-0 leading-relaxed animate-fade-in-up">
                Please hold your breath as we dive into a world full of creativity with designer Kelvin.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up">
                <button
                  onClick={() => setDocumentViewer({ isOpen: true, type: "cv" })}
                  className="btn-primary px-6 py-3 text-base font-medium rounded-lg transition-all duration-300 hover:scale-105"
                >
                  View CV
                </button>
                <button
                  onClick={() => setDocumentViewer({ isOpen: true, type: "cover-letter" })}
                  className="btn-primary px-6 py-3 text-base font-medium rounded-lg transition-all duration-300 hover:scale-105 animate-shake"
                >
                  View Resume
                </button>
              </div>
            </div>

            <div className="relative animate-fade-in-right order-first lg:order-last z-10">
              <div className="w-full h-80 lg:h-96 bg-card rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-4 gap-2 w-full h-full p-8">
                    <div className="bg-background/60 rounded"></div>
                    <div className="bg-background/40 rounded"></div>
                    <div className="bg-background/80 rounded"></div>
                    <div className="bg-background/30 rounded"></div>
                    <div className="bg-background/50 rounded"></div>
                    <div className="bg-background/70 rounded"></div>
                    <div className="bg-background/35 rounded"></div>
                    <div className="bg-background/60 rounded"></div>
                    <div className="bg-background/45 rounded"></div>
                    <div className="bg-background/55 rounded"></div>
                    <div className="bg-background/75 rounded"></div>
                    <div className="bg-background/40 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative order-last lg:order-first">
              <div className="w-full h-80 lg:h-96 bg-background/10 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-3 w-full h-full p-6">
                    <div className="bg-background/50 rounded"></div>
                    <div className="bg-background/30 rounded"></div>
                    <div className="bg-background/70 rounded"></div>
                    <div className="bg-background/40 rounded"></div>
                    <div className="bg-background/60 rounded"></div>
                    <div className="bg-background/35 rounded"></div>
                    <div className="bg-background/55 rounded"></div>
                    <div className="bg-background/45 rounded"></div>
                    <div className="bg-background/65 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-card-foreground">
                  About <span className="text-primary">Me</span>
                </h2>

                <div className="text-base sm:text-lg text-card-foreground/90 leading-relaxed">
                  {isAboutExpanded ? (
                    <div className="whitespace-pre-line">{fullAboutText}</div>
                  ) : (
                    <p>{shortAboutText}</p>
                  )}
                </div>

                <button
                  onClick={() => setIsAboutExpanded(!isAboutExpanded)}
                  className="btn-primary px-6 py-3 text-base font-medium rounded-lg transition-all duration-300"
                >
                  {isAboutExpanded ? "Read Less" : "Read More"}
                </button>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-card-foreground">Core Skills</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-card-foreground">Visual Design</span>
                      <span className="text-sm font-medium text-primary">90%</span>
                    </div>
                    <div className="w-full bg-card-foreground/20 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-card-foreground">UI/UX Design</span>
                      <span className="text-sm font-medium text-primary">85%</span>
                    </div>
                    <div className="w-full bg-card-foreground/20 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-card-foreground">Product Design</span>
                      <span className="text-sm font-medium text-primary">82%</span>
                    </div>
                    <div className="w-full bg-card-foreground/20 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "82%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-card-foreground">Design Systems</span>
                      <span className="text-sm font-medium text-primary">78%</span>
                    </div>
                    <div className="w-full bg-card-foreground/20 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "78%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              My <span className="text-primary">Projects</span>
            </h2>
          </div>

          <ProjectFilter categories={categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                category={project.category}
                technologies={project.technologies}
                imageColor={project.imageColor}
                delay={project.delay}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-base font-medium rounded-lg transition-all duration-300">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-card-foreground">
              My <span className="text-primary">Skills</span>
            </h2>
            <p className="text-base sm:text-lg text-card-foreground/80 max-w-2xl mx-auto">
              A comprehensive overview of my design abilities and expertise, constantly evolving with industry trends
              and best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-background rounded-lg p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 text-center">Design Tools</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2">
                  <span className="text-foreground font-medium">Figma</span>
                  <div className="w-32 bg-foreground/20 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-foreground font-medium">Adobe Illustrator</span>
                  <div className="w-32 bg-foreground/20 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "88%" }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-foreground font-medium">Canva</span>
                  <div className="w-32 bg-foreground/20 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-foreground font-medium">Framer</span>
                  <div className="w-32 bg-foreground/20 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-foreground font-medium">Adobe Photoshop</span>
                  <div className="w-32 bg-foreground/20 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 text-center">Design Expertise</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2">
                  <span className="text-foreground font-medium">User Research</span>
                  <div className="w-32 bg-foreground/20 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "87%" }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-foreground font-medium">Wireframing</span>
                  <div className="w-32 bg-foreground/20 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-foreground font-medium">Prototyping</span>
                  <div className="w-32 bg-foreground/20 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-foreground font-medium">Design Systems</span>
                  <div className="w-32 bg-foreground/20 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "82%" }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-foreground font-medium">Visual Design</span>
                  <div className="w-32 bg-foreground/20 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "93%" }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-foreground font-medium">Interaction Design</span>
                  <div className="w-32 bg-foreground/20 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "88%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">Let's Work Together</h2>
            <p className="text-base sm:text-lg text-primary/80 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's create something amazing together. Drop me a message and I'll get
              back to you as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <ContactInfo />
            <div className="bg-card rounded-lg p-6 lg:p-8">
              <ContactForm />
            </div>
          </div>

          <div className="mt-12 lg:mt-16 text-center space-y-6">
            <h4 className="text-lg sm:text-xl font-semibold text-primary">Follow Me</h4>
            <div className="flex justify-center">
              <SocialLinks />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <DocumentViewer
        isOpen={documentViewer.isOpen}
        onClose={() => setDocumentViewer({ ...documentViewer, isOpen: false })}
        documentType={documentViewer.type}
      />
    </div>
  )
}
