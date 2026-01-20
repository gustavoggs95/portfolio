import { Mail, MapPin, Github, Linkedin } from 'lucide-react'

export function Contact() {
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

        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-text-muted mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be
              part of your vision. Whether you need a full-stack solution or want to enhance your
              existing team, let's talk!
            </p>
          </div>

          <div className="space-y-6 mb-12">
            <a
              href="mailto:ggsantos95@gmail.com"
              className="flex items-center gap-4 text-text-muted hover:text-primary transition-colors group p-6 bg-dark-light rounded-xl border border-dark-lighter hover:border-primary/50"
            >
              <div className="p-3 bg-dark rounded-lg group-hover:bg-primary/20 transition-colors">
                <Mail size={28} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-text-muted">Email</p>
                <p className="text-text text-lg">ggsantos95@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4 text-text-muted p-6 bg-dark-light rounded-xl border border-dark-lighter">
              <div className="p-3 bg-dark rounded-lg">
                <MapPin size={28} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-text-muted">Location</p>
                <p className="text-text text-lg">São Paulo, Brazil</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/gustavoggs95"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-dark-light rounded-xl hover:bg-primary/20 transition-all duration-300 group border border-dark-lighter hover:border-primary/50"
              aria-label="GitHub"
            >
              <Github size={32} className="text-text-muted group-hover:text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/gustavo-almeida-dos-santos-780bb1b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-dark-light rounded-xl hover:bg-primary/20 transition-all duration-300 group border border-dark-lighter hover:border-primary/50"
              aria-label="LinkedIn"
            >
              <Linkedin size={32} className="text-text-muted group-hover:text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
