const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-secondary to-gray-900">
          {/* This div is a placeholder for your hero image */}
          {/* Replace with: <img src="/path/to/your/concrete-work.jpg" alt="Concrete work" className="w-full h-full object-cover" /> */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-700 text-7xl md:text-9xl font-bold opacity-10">
            <span>CONCRETE</span>
          </div>
        </div>
        <div className="gradient-overlay"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 z-10 relative max-w-7xl">
        <div className="max-w-4xl animate-fade-in">
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-primary to-orange-600 text-white px-5 py-2 rounded-full text-sm md:text-base font-bold shadow-xl">
              ⭐ Colorado's #1 Concrete Experts
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight">
            Building Strong
            <span className="block text-primary drop-shadow-2xl">Foundations</span>
            <span className="block">For Your Dreams</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
            Premium concrete services for residential and commercial projects.
            Quality craftsmanship, reliable service, and unbeatable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => scrollToSection('book')} className="bg-accent hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 text-base md:text-lg">
              📅 Book Free Consultation
            </button>
            <button onClick={() => scrollToSection('services')} className="bg-primary hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 text-base md:text-lg">
              View Our Services
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent drop-shadow-lg">15+</div>
              <div className="text-gray-300 mt-1 text-xs md:text-base">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent drop-shadow-lg">500+</div>
              <div className="text-gray-300 mt-1 text-xs md:text-base">Projects Done</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent drop-shadow-lg">100%</div>
              <div className="text-gray-300 mt-1 text-xs md:text-base">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="bg-accent/20 backdrop-blur-sm p-3 rounded-full">
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
