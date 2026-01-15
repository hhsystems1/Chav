const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        {/*
          VIDEO PLACEHOLDER - Replace this div with:
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/path/to/colorado-video.mp4" type="video/mp4" />
          </video>

          OR use an image for now:
          <img src="/path/to/colorado-mountains.jpg" alt="Colorado landscape" className="w-full h-full object-cover" />
        */}
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-secondary to-slate-800">
          {/* Colorado Mountains Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-full h-full opacity-20" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Mountain silhouettes */}
              <path d="M0 400L150 250L300 350L450 200L600 300L750 150L900 250L1050 200L1200 300V600H0V400Z" fill="url(#mountain1)" />
              <path d="M0 450L200 300L400 400L600 250L800 350L1000 200L1200 350V600H0V450Z" fill="url(#mountain2)" />
              <path d="M0 500L300 380L600 450L900 350L1200 450V600H0V500Z" fill="url(#mountain3)" />
              <defs>
                <linearGradient id="mountain1" x1="600" y1="150" x2="600" y2="600" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0EA5E9" stopOpacity="0.3"/>
                  <stop offset="1" stopColor="#0EA5E9" stopOpacity="0.1"/>
                </linearGradient>
                <linearGradient id="mountain2" x1="600" y1="200" x2="600" y2="600" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#10B981" stopOpacity="0.2"/>
                  <stop offset="1" stopColor="#10B981" stopOpacity="0.05"/>
                </linearGradient>
                <linearGradient id="mountain3" x1="600" y1="350" x2="600" y2="600" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#64748B" stopOpacity="0.3"/>
                  <stop offset="1" stopColor="#64748B" stopOpacity="0.1"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="video-overlay"></div>
      </div>

      {/* Animated Decorative Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-highlight/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 z-10 relative max-w-7xl">
        <div className="max-w-4xl animate-fade-in">
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-primary via-sky-500 to-primary text-white px-5 py-2 rounded-full text-sm md:text-base font-bold shadow-xl backdrop-blur-sm border border-white/10">
              🏔️ Colorado's Premier Concrete Experts
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight">
            Building Colorado's
            <span className="block bg-gradient-to-r from-primary via-sky-400 to-primary bg-clip-text text-transparent drop-shadow-2xl">Future</span>
            <span className="block">One Foundation at a Time</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 max-w-2xl leading-relaxed font-light">
            Premium concrete services across Colorado. From residential driveways to commercial foundations, we deliver excellence with every pour.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => scrollToSection('book')} className="btn-secondary text-base md:text-lg">
              📅 Get Free Quote
            </button>
            <button onClick={() => scrollToSection('services')} className="btn-primary text-base md:text-lg">
              View Services
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-16 pt-8 border-t border-white/10">
            <div className="text-center backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-sky-400 bg-clip-text text-transparent drop-shadow-lg">15+</div>
              <div className="text-gray-200 mt-2 text-xs md:text-base font-medium">Years Experience</div>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-highlight to-emerald-400 bg-clip-text text-transparent drop-shadow-lg">500+</div>
              <div className="text-gray-200 mt-2 text-xs md:text-base font-medium">Projects Done</div>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent drop-shadow-lg">100%</div>
              <div className="text-gray-200 mt-2 text-xs md:text-base font-medium">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="bg-primary/30 backdrop-blur-sm p-3 rounded-full border border-white/20">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
