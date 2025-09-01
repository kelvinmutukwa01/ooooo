"use client"

interface ProjectFilterProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function ProjectFilter({ categories, activeCategory, onCategoryChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8 lg:mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${
            activeCategory === category
              ? "bg-primary text-primary-foreground shadow-lg"
              : "bg-card text-card-foreground hover:bg-primary/10 hover:text-primary border border-border"
          }`}
          onMouseEnter={(e) => e.currentTarget.classList.add("animate-shake")}
          onAnimationEnd={(e) => e.currentTarget.classList.remove("animate-shake")}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
