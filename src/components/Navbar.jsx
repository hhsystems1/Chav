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
      isScrolled ? 'bg-white shadow-lg py-4' : 'bg-white/95 py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl">
              CC
            </div>
            <div>
              <h1 className="font-heading font-bold text-2xl text-primary">
                Chavarria Concrete
              </h1>
              <p className="text-xs text-gray-600">Colorado's Trusted Concrete Experts</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary font-medium transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary font-medium transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary font-medium transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-primary font-medium transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('book')} className="btn-secondary">
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary font-medium transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary font-medium transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary font-medium transition-colors text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-primary font-medium transition-colors text-left">
                Gallery
              </button>
              <button onClick={() => scrollToSection('book')} className="btn-secondary w-full">
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
