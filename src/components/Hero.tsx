import { Github, Linkedin, Mail, ChevronDown, Code2, Briefcase, Users } from 'lucide-react'
import profileImage from '../assets/profile-1.jpg'

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[400px,1fr] gap-16 items-start max-w-7xl mx-auto">
          {/* Profile Card - Left Side */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              {/* Decorative dotted line */}
              <div className="absolute top-[280px] left-[50%] w-0.5 h-24 border-l-2 border-dashed border-primary/40 -translate-x-1/2 hidden lg:block"></div>
              <div className="absolute top-[400px] left-[50%] w-8 h-8 -translate-x-1/2 bg-primary/20 rounded-full flex items-center justify-center hidden lg:block">
                <Code2 size={16} className="text-primary" />
              </div>

              {/* Card */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-sm">
                {/* Profile Image */}
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={profileImage}
                    alt="Gustavo Almeida"
                    className="relative w-full h-auto object-cover"
                  />
                </div>

                {/* Name */}
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
                  Gustavo Almeida
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm text-center mb-6 leading-relaxed">
                  A Software Engineer who has developed countless innovative solutions across web,
                  mobile, and cloud platforms.
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <a
                    href="https://github.com/gustavoggs95"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gustavo-almeida-dos-santos-780bb1b1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="mailto:ggsantos95@gmail.com"
                    className="text-gray-600 hover:text-primary transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="order-1 lg:order-2 space-y-12">
            {/* Title */}
            <div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-none mb-6">
                <span className="text-white">FULL STACK</span>
                <br />
                <span className="text-white/20">DEVELOPER</span>
              </h1>
              <p className="text-text-muted text-lg max-w-2xl">
                Passionate about creating intuitive and engaging user experiences. Specialize in
                transforming ideas into beautifully crafted products.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-5xl font-bold text-white mb-2">+10</div>
                <div className="text-text-muted text-sm uppercase tracking-wider">
                  Years of
                  <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-5xl font-bold text-white mb-2">+50</div>
                <div className="text-text-muted text-sm uppercase tracking-wider">
                  Projects
                  <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-5xl font-bold text-white mb-2">+15</div>
                <div className="text-text-muted text-sm uppercase tracking-wider">
                  International
                  <br />
                  Clients
                </div>
              </div>
            </div>

            {/* Skill Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative group bg-gradient-to-br from-primary to-primary-dark p-8 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
                <div className="relative">
                  <Briefcase className="mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-2 uppercase">Frontend & Mobile</h3>
                  <p className="text-white/80 text-sm">React, React Native, TypeScript</p>
                </div>
                <div className="absolute bottom-4 right-4">
                  <ChevronDown className="rotate-[-90deg]" size={24} />
                </div>
              </div>

              <div className="relative group bg-gradient-to-br from-secondary to-cyan-400 p-8 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
                <div className="relative">
                  <Users className="mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-2 uppercase">Backend & Cloud</h3>
                  <p className="text-gray-900/80 text-sm">Node.js, AWS, PostgreSQL</p>
                </div>
                <div className="absolute bottom-4 right-4">
                  <ChevronDown className="rotate-[-90deg]" size={24} />
                </div>
              </div>
            </div>
          </div>
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
