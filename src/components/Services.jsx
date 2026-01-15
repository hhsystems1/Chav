const Services = () => {
  const services = [
    {
      icon: "🏠",
      title: "Driveways",
      description: "Beautiful, durable driveways that enhance your property's curb appeal and stand the test of time.",
      features: ["Custom designs", "Stamped options", "Colored concrete", "Sealing included"]
    },
    {
      icon: "🌳",
      title: "Patios & Walkways",
      description: "Transform your outdoor space with stunning patios and walkways perfect for entertaining and relaxation.",
      features: ["Decorative patterns", "Slip-resistant", "Custom shapes", "Professional finish"]
    },
    {
      icon: "🏗️",
      title: "Foundations",
      description: "Solid foundations for residential and commercial buildings, ensuring structural integrity for years to come.",
      features: ["Reinforced concrete", "Level precision", "Quality inspection", "Code compliant"]
    },
    {
      icon: "🔧",
      title: "Concrete Repairs",
      description: "Expert repair services to restore and reinforce your existing concrete structures.",
      features: ["Crack repair", "Resurfacing", "Joint sealing", "Quick turnaround"]
    },
    {
      icon: "🏢",
      title: "Commercial Projects",
      description: "Large-scale concrete solutions for commercial properties, warehouses, and industrial facilities.",
      features: ["High-capacity", "Industrial grade", "Quick completion", "Minimal disruption"]
    },
    {
      icon: "✨",
      title: "Decorative Concrete",
      description: "Add artistic flair with stamped, stained, or polished concrete for a unique aesthetic.",
      features: ["Stamped patterns", "Acid staining", "Polished finish", "Custom colors"]
    }
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-br from-white via-sky-50 to-blue-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <div className="inline-block bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-bold mb-4 border border-primary/20">
            Our Services
          </div>

          <h2 className="section-title">
            Comprehensive Concrete Solutions
          </h2>

          <p className="section-subtitle">
            From residential driveways to commercial foundations, we do it all with precision and expertise
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card p-8 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="text-6xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <svg className="w-5 h-5 text-accent mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="mt-6 w-full bg-primary/5 hover:bg-gradient-to-r hover:from-primary hover:to-sky-600 hover:text-white text-primary font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg transform hover:scale-105 border border-primary/10">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fade-in">
          <p className="text-xl font-semibold text-gray-800 mb-6">
            Don't see what you're looking for?
          </p>
          <button
            onClick={() => document.getElementById('book').scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary py-4 px-10 text-lg"
          >
            Contact Us for Custom Projects
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
