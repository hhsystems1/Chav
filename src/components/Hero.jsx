const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
          {/* This div is a placeholder for your hero image */}
          {/* Replace with: <img src="/path/to/your/concrete-work.jpg" alt="Concrete work" className="w-full h-full object-cover" /> */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-9xl font-bold opacity-10">
            <span>CONCRETE</span>
          </div>
        </div>
        <div className="gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl animate-fade-in">
          <div className="mb-6">
            <span className="inline-block bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
              ⭐ Colorado's #1 Concrete Experts
            </span>
          </div>

          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Building Strong
            <span className="block text-accent">Foundations</span>
            <span className="block">For Your Dreams</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
            Premium concrete services for residential and commercial projects.
            Quality craftsmanship, reliable service, and unbeatable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => scrollToSection('book')} className="btn-secondary text-lg">
              📅 Book Free Consultation
            </button>
            <button onClick={() => scrollToSection('services')} className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 border-2 border-white/30">
              View Our Services
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent">15+</div>
              <div className="text-gray-300 mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent">500+</div>
              <div className="text-gray-300 mt-1">Projects Done</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent">100%</div>
              <div className="text-gray-300 mt-1">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
