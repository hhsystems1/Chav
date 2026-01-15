const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative animate-slide-in-left">
            <div className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for your about image */}
              <div className="w-full h-full bg-gradient-to-br from-primary via-orange-600 to-accent flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <svg className="w-32 h-32 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <p className="text-lg font-semibold">Your Company Photo Here</p>
                  <p className="text-sm mt-2 opacity-75">Team at work, equipment, or completed project</p>
                </div>
              </div>
              {/* Replace above div with: <img src="/path/to/your/about-image.jpg" alt="Chavarria Concrete Team" className="w-full h-full object-cover" /> */}
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-accent to-yellow-500 text-gray-900 p-6 rounded-xl shadow-2xl max-w-xs">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm mt-1 font-semibold">Years of Excellence in Concrete Work</div>
            </div>
          </div>

          {/* Content Section */}
          <div className="animate-slide-in-right">
            <div className="inline-block bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-bold mb-4">
              About Us
            </div>

            <h2 className="section-title">
              Colorado's Most Trusted Concrete Contractor
            </h2>

            <p className="section-subtitle">
              Building excellence one project at a time
            </p>

            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                At Chavarria Concrete, we've been serving the Colorado community for over 15 years with
                exceptional concrete services. Our commitment to quality craftsmanship and customer
                satisfaction has made us the go-to choice for both residential and commercial projects.
              </p>

              <p>
                From small repairs to large-scale commercial installations, we bring the same level of
                dedication and expertise to every job. Our experienced team uses only premium materials
                and the latest techniques to ensure lasting results.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-start space-x-3">
                <div className="bg-gradient-to-br from-primary to-orange-600 text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 text-xl font-bold shadow-lg">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Licensed & Insured</h4>
                  <p className="text-sm text-gray-600">Fully certified professionals</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-gradient-to-br from-primary to-orange-600 text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 text-xl font-bold shadow-lg">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Quality Materials</h4>
                  <p className="text-sm text-gray-600">Premium concrete only</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-gradient-to-br from-primary to-orange-600 text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 text-xl font-bold shadow-lg">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Team</h4>
                  <p className="text-sm text-gray-600">Skilled craftsmen</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-gradient-to-br from-primary to-orange-600 text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 text-xl font-bold shadow-lg">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">On-Time Delivery</h4>
                  <p className="text-sm text-gray-600">Always on schedule</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
