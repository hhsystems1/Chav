import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import BookAppointment from './components/BookAppointment'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <BookAppointment />
      <Footer />
      <Chatbot />
    </div>
  )
}

export default App
