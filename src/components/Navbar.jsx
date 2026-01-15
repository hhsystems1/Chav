import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-xl py-2' : 'bg-white/98 backdrop-blur-sm py-3'
    }`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-primary to-sky-600 text-white w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center font-bold text-lg md:text-xl shadow-lg">
              CC
            </div>
            <div>
              <h1 className="font-heading font-bold text-lg md:text-xl bg-gradient-to-r from-secondary to-slate-700 bg-clip-text text-transparent">
                Chavarria Concrete
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">Colorado's Trusted Experts</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary font-semibold transition-colors text-sm lg:text-base">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary font-semibold transition-colors text-sm lg:text-base">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary font-semibold transition-colors text-sm lg:text-base">
              Services
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-primary font-semibold transition-colors text-sm lg:text-base">
              Gallery
            </button>
            <button onClick={() => scrollToSection('book')} className="btn-secondary py-2 px-6 text-sm lg:text-base">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-secondary p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pb-3 animate-fade-in border-t border-gray-200 pt-3">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary font-semibold transition-colors text-left py-2">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary font-semibold transition-colors text-left py-2">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary font-semibold transition-colors text-left py-2">
                Services
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-primary font-semibold transition-colors text-left py-2">
                Gallery
              </button>
              <button onClick={() => scrollToSection('book')} className="btn-secondary py-3 px-6 w-full mt-2">
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
