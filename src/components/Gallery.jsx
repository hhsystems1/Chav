import { useState } from 'react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  // These are placeholders - replace with your actual project images
  const projects = [
    {
      id: 1,
      title: "Modern Driveway",
      category: "Driveways",
      placeholder: "Your beautiful driveway project photo here"
    },
    {
      id: 2,
      title: "Backyard Patio",
      category: "Patios",
      placeholder: "Stunning patio installation photo"
    },
    {
      id: 3,
      title: "Commercial Foundation",
      category: "Foundations",
      placeholder: "Commercial foundation project"
    },
    {
      id: 4,
      title: "Stamped Concrete Walkway",
      category: "Decorative",
      placeholder: "Decorative stamped concrete work"
    },
    {
      id: 5,
      title: "Pool Deck",
      category: "Patios",
      placeholder: "Beautiful pool deck installation"
    },
    {
      id: 6,
      title: "Industrial Floor",
      category: "Commercial",
      placeholder: "Industrial concrete flooring"
    },
    {
      id: 7,
      title: "Stained Patio",
      category: "Decorative",
      placeholder: "Acid-stained decorative patio"
    },
    {
      id: 8,
      title: "Residential Sidewalk",
      category: "Walkways",
      placeholder: "Residential sidewalk project"
    }
  ]

  const categories = ["All", "Driveways", "Patios", "Foundations", "Decorative", "Commercial", "Walkways"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="gallery" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Work
          </div>

          <h2 className="section-title">
            See Our Projects in Action
          </h2>

          <p className="section-subtitle">
            Browse through our portfolio of completed projects and see the quality of our work
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(project)}
            >
              {/* Placeholder for project image */}
              <div className="w-full h-full bg-gradient-to-br from-gray-300 via-gray-200 to-gray-300 flex items-center justify-center p-6">
                <div className="text-center">
                  <div className="text-5xl mb-3">📸</div>
                  <p className="text-gray-600 font-medium text-sm">{project.placeholder}</p>
                </div>
              </div>
              {/* Replace above div with: <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" /> */}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-sm font-semibold text-accent mb-1">{project.category}</div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-gray-300 mt-2">Click to view details</p>
                </div>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 mb-6">
            Ready to start your project?
          </p>
          <button
            onClick={() => document.getElementById('book').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg"
          >
            Get Your Free Quote Today
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-5xl w-full">
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-7xl mb-4">📸</div>
                  <p className="text-gray-600 text-lg">{selectedImage.placeholder}</p>
                </div>
              </div>
              {/* Replace above div with: <img src={selectedImage.imageUrl} alt={selectedImage.title} className="w-full h-96 object-cover" /> */}
              <div className="p-6">
                <div className="text-sm font-semibold text-accent mb-2">{selectedImage.category}</div>
                <h3 className="text-2xl font-bold text-gray-900">{selectedImage.title}</h3>
              </div>
            </div>
            <button
              className="absolute top-4 right-4 bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
