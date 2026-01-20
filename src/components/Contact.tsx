import { useState } from 'react'
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:ggsantos95@gmail.com?subject=${subject}&body=${body}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24 bg-dark-light/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        <p className="text-text-muted text-center mb-16 max-w-2xl mx-auto">
          Have a project in mind or want to discuss opportunities? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-text-muted mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be
              part of your vision. Whether you need a full-stack solution or want to enhance your
              existing team, let's talk!
            </p>

            <div className="space-y-6">
              <a
                href="mailto:ggsantos95@gmail.com"
                className="flex items-center gap-4 text-text-muted hover:text-primary transition-colors group"
              >
                <div className="p-3 bg-dark-light rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-text-muted">Email</p>
                  <p className="text-text">ggsantos95@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-text-muted">
                <div className="p-3 bg-dark-light rounded-lg">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-text-muted">Location</p>
                  <p className="text-text">São Paulo, Brazil</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/gustavoggs95"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-light rounded-lg hover:bg-primary/20 transition-colors group"
                aria-label="GitHub"
              >
                <Github size={24} className="text-text-muted group-hover:text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/gustavo-almeida-dos-santos-780bb1b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-light rounded-lg hover:bg-primary/20 transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} className="text-text-muted group-hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-light border border-dark-lighter rounded-lg focus:outline-none focus:border-primary transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-light border border-dark-lighter rounded-lg focus:outline-none focus:border-primary transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-dark-light border border-dark-lighter rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-primary hover:bg-primary-dark rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Send Message
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
