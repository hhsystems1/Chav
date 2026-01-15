import { useState, useEffect, useRef } from 'react'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hi! 👋 I'm here to help you with your concrete project. How can I assist you today?",
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [showUserForm, setShowUserForm] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const quickReplies = [
    { text: "Get a quote", action: "quote" },
    { text: "View services", action: "services" },
    { text: "Schedule consultation", action: "schedule" },
    { text: "Talk to someone", action: "contact" }
  ]

  const handleQuickReply = (action) => {
    let botResponse = ''

    switch(action) {
      case 'quote':
        botResponse = "Great! I'd love to help you get a quote. Could you tell me what type of concrete work you need? (Driveway, Patio, Foundation, etc.)"
        break
      case 'services':
        botResponse = "We offer: Driveways, Patios, Walkways, Foundations, Concrete Repairs, Commercial Projects, and Decorative Concrete. Which one interests you?"
        break
      case 'schedule':
        botResponse = "Perfect! To schedule a consultation, I'll need your contact information. Would you like to fill out a quick form or call us at (555) 123-4567?"
        setShowUserForm(true)
        break
      case 'contact':
        botResponse = "I'd be happy to connect you! You can call us at (555) 123-4567 or email info@chavarria-concrete.com. Our team is available Mon-Fri 7AM-6PM."
        break
      default:
        botResponse = "How can I help you today?"
    }

    setMessages(prev => [...prev, {
      type: 'bot',
      text: botResponse,
      timestamp: new Date()
    }])
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    // Add user message
    const userMessage = {
      type: 'user',
      text: inputMessage,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        text: "Thanks for your message! Our team will review this and get back to you shortly. For immediate assistance, please call us at (555) 123-4567.",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
    }, 1000)

    setInputMessage('')
  }

  const handleSubmitInfo = (e) => {
    e.preventDefault()

    // Here you would send this data to your backend/email service
    // For now, we'll just show a confirmation message

    const confirmMessage = {
      type: 'bot',
      text: `Thank you, ${userInfo.name}! I've saved your information. Our team will contact you at ${userInfo.email} or ${userInfo.phone} within 24 hours. Is there anything else I can help you with?`,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, confirmMessage])
    setShowUserForm(false)
    setUserInfo({ name: '', email: '', phone: '' })
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-gradient-to-br from-primary to-sky-600 hover:from-sky-600 hover:to-primary text-white p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 ${
          isOpen ? 'rotate-180' : ''
        }`}
      >
        {isOpen ? (
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}

        {/* Notification Badge */}
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          1
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 md:bottom-24 right-0 md:right-6 left-0 md:left-auto z-50 w-full md:max-w-md px-4 md:px-0 animate-slide-up">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[calc(100vh-8rem)] md:max-h-[600px] flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-secondary to-gray-900 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-primary to-sky-600 w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">
                    CC
                  </div>
                  <div>
                    <h3 className="font-bold">Chavarria Concrete</h3>
                    <p className="text-xs text-gray-300">Online now</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/10 p-2 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 min-h-[300px] max-h-[400px] md:h-96">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 ${message.type === 'user' ? 'text-right' : 'text-left'}`}
                >
                  <div
                    className={`inline-block max-w-xs px-4 py-2 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-primary text-white rounded-br-none'
                        : 'bg-white text-gray-800 rounded-bl-none shadow'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              ))}

              {/* Quick Replies */}
              {messages.length === 1 && (
                <div className="mt-4 space-y-2">
                  <p className="text-xs text-gray-500 text-center mb-2">Quick actions:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {quickReplies.map((reply, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickReply(reply.action)}
                        className="bg-white hover:bg-gray-50 text-primary text-sm py-2 px-4 rounded-lg border border-primary/20 transition-colors"
                      >
                        {reply.text}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* User Info Form */}
              {showUserForm && (
                <div className="bg-white p-4 rounded-lg shadow-lg mt-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
                  <form onSubmit={handleSubmitInfo} className="space-y-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={userInfo.name}
                      onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      value={userInfo.email}
                      onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <input
                      type="tel"
                      placeholder="Phone"
                      required
                      value={userInfo.phone}
                      onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="w-full bg-accent hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t p-4 bg-white">
              <form onSubmit={handleSendMessage} className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-accent hover:bg-amber-600 text-white p-2 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-2 text-center">
                We typically reply within a few minutes
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot
