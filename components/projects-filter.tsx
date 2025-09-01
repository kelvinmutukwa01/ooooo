"use client"

interface ProjectsFilterProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function ProjectsFilter({ categories, activeCategory, onCategoryChange }: ProjectsFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
            activeCategory === category
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
              : "bg-card text-card-foreground hover:bg-primary/10 hover:text-primary border border-border"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
