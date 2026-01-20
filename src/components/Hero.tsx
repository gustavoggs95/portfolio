import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <p className="text-primary font-medium mb-4 animate-fade-in">Hello, I'm</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-text via-primary to-secondary bg-clip-text text-transparent">
            Gustavo Almeida
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-text-muted mb-8">Full Stack Developer</h2>
        <p className="max-w-2xl mx-auto text-text-muted mb-12 text-lg">
          Senior Software Engineer with over a decade of experience building scalable web and mobile
          applications. Turning business ideas into production-ready software.
        </p>

        <div className="flex justify-center gap-6 mb-12">
          <a
            href="https://github.com/gustavoggs95"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-dark-light rounded-full hover:bg-primary hover:scale-110 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/gustavo-almeida-dos-santos-780bb1b1/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-dark-light rounded-full hover:bg-primary hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:ggsantos95@gmail.com"
            className="p-3 bg-dark-light rounded-full hover:bg-primary hover:scale-110 transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="flex justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-primary hover:bg-primary-dark rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-text rounded-full font-medium transition-all duration-300"
          >
            View Projects
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-text-muted hover:text-primary transition-colors"
        aria-label="Scroll to about"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  )
}
