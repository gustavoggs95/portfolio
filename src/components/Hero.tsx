import { Github, Linkedin, Mail, ChevronDown, Code2 } from 'lucide-react'
import { SiReact, SiTypescript, SiNodedotjs, SiAmazonwebservices, SiPostgresql } from 'react-icons/si'
import { HiDevicePhoneMobile } from 'react-icons/hi2'
import profileImage from '../assets/profile-1.jpg'

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      {/* Animated Blurred Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-0 right-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Profile Card - Left Side */}
          <div className="w-full lg:w-[400px] flex-shrink-0">
            <div className="relative">
              {/* Decorative dotted line */}
              <div className="absolute top-[280px] left-[50%] w-0.5 h-24 border-l-2 border-dashed border-primary/40 -translate-x-1/2 hidden lg:block"></div>
              <div className="absolute top-[400px] left-[50%] w-8 h-8 -translate-x-1/2 bg-primary/20 rounded-full flex items-center justify-center hidden lg:block">
                <Code2 size={16} className="text-primary" />
              </div>

              {/* Card */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-sm mx-auto lg:mx-0">
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
          <div className="flex-1 space-y-12">
            {/* Title */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase leading-none mb-6">
                <span className="text-white">FULL STACK</span>
                <br />
                <span className="text-white/20">DEVELOPER</span>
              </h1>
              <p className="text-text-muted text-base md:text-lg max-w-2xl">
                Passionate about creating intuitive and engaging user experiences. Specialized in
                transforming ideas into beautifully crafted products.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">+10</div>
                <div className="text-text-muted text-xs md:text-sm uppercase tracking-wider">
                  Years of
                  <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">+8</div>
                <div className="text-text-muted text-xs md:text-sm uppercase tracking-wider">
                  Technologies
                  <br />
                  Mastered
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">+15</div>
                <div className="text-text-muted text-xs md:text-sm uppercase tracking-wider">
                  Production
                  <br />
                  Apps Deployed
                </div>
              </div>
            </div>

            {/* Skill Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="relative group bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-6 md:p-8 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-white/30"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-white/30"></div>
                </div>
                <div className="relative">
                  <div className="flex gap-3 mb-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                      <SiReact size={24} className="text-white" />
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                      <SiTypescript size={24} className="text-white" />
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                      <HiDevicePhoneMobile size={24} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 uppercase text-white">Frontend & Mobile</h3>
                  <p className="text-white/90 text-sm">React, React Native, TypeScript</p>
                </div>
                <div className="absolute bottom-4 right-4 text-white/60 group-hover:text-white/90 transition-colors">
                  <ChevronDown className="rotate-[-90deg]" size={24} />
                </div>
              </div>

              <div className="relative group bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 p-6 md:p-8 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-white/30"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-white/30"></div>
                </div>
                <div className="relative">
                  <div className="flex gap-3 mb-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                      <SiNodedotjs size={24} className="text-white" />
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                      <SiAmazonwebservices size={24} className="text-white" />
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                      <SiPostgresql size={24} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 uppercase text-white">Backend & Cloud</h3>
                  <p className="text-white/90 text-sm">Node.js, AWS, PostgreSQL</p>
                </div>
                <div className="absolute bottom-4 right-4 text-white/60 group-hover:text-white/90 transition-colors">
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
