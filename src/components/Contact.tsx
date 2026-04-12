import { Mail, Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-dark-light/50 relative overflow-hidden">
      {/* Signal broadcast tower */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-violet-400/50 to-transparent" />

        {/* top-left mirror — arcs open upward */}
        <div className="absolute top-0 left-0 w-96 h-80" style={{ background: 'radial-gradient(ellipse at 0% 0%, rgba(139,92,246,0.14) 0%, transparent 65%)' }} />
        <svg className="absolute top-0 left-16 w-85 h-95 opacity-25" viewBox="0 0 280 340" fill="none">
          {/* mast — goes up from y=0 */}
          <line x1="140" y1="0"   x2="140" y2="85"  stroke="#8b5cf6" strokeWidth="1.5"/>
          <line x1="116" y1="0"   x2="164" y2="0"   stroke="#8b5cf6" strokeWidth="1.5"/>
          <line x1="124" y1="0"   x2="112" y2="24"  stroke="#7c3aed" strokeWidth="1"/>
          <line x1="156" y1="0"   x2="168" y2="24"  stroke="#7c3aed" strokeWidth="1"/>
          <line x1="132" y1="45"  x2="148" y2="58"  stroke="#6d28d9" strokeWidth="0.9"/>
          <line x1="148" y1="45"  x2="132" y2="58"  stroke="#6d28d9" strokeWidth="0.9"/>
          <line x1="132" y1="27"  x2="148" y2="40"  stroke="#6d28d9" strokeWidth="0.9"/>
          <line x1="148" y1="27"  x2="132" y2="40"  stroke="#6d28d9" strokeWidth="0.9"/>
          <circle cx="140" cy="87" r="4.5" stroke="#a78bfa" strokeWidth="1.5" fill="none"/>
          {/* arcs open upward — Q control points above the arc endpoints */}
          <path d="M 102 108 Q 140 132 178 108" stroke="#a78bfa" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
          <path d="M 74  140 Q 140 176 206 140" stroke="#8b5cf6" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          <path d="M 44  175 Q 140 224 236 175" stroke="#7c3aed" strokeWidth="1"   fill="none" strokeLinecap="round"/>
          <path d="M 14  212 Q 140 275 266 212" stroke="#6d28d9" strokeWidth="0.7" fill="none" strokeLinecap="round"/>
        </svg>

        {/* bottom-right original */}
        <div className="absolute bottom-0 right-0 w-96 h-80" style={{ background: 'radial-gradient(ellipse at 100% 100%, rgba(139,92,246,0.14) 0%, transparent 65%)' }} />
        <svg className="absolute bottom-0 right-16 w-85 h-95 opacity-25" viewBox="0 0 280 340" fill="none">
          <line x1="140" y1="340" x2="140" y2="255" stroke="#8b5cf6" strokeWidth="1.5"/>
          <line x1="116" y1="340" x2="164" y2="340" stroke="#8b5cf6" strokeWidth="1.5"/>
          <line x1="124" y1="340" x2="112" y2="316" stroke="#7c3aed" strokeWidth="1"/>
          <line x1="156" y1="340" x2="168" y2="316" stroke="#7c3aed" strokeWidth="1"/>
          <line x1="132" y1="282" x2="148" y2="295" stroke="#6d28d9" strokeWidth="0.9"/>
          <line x1="148" y1="282" x2="132" y2="295" stroke="#6d28d9" strokeWidth="0.9"/>
          <line x1="132" y1="300" x2="148" y2="313" stroke="#6d28d9" strokeWidth="0.9"/>
          <line x1="148" y1="300" x2="132" y2="313" stroke="#6d28d9" strokeWidth="0.9"/>
          <circle cx="140" cy="253" r="4.5" stroke="#a78bfa" strokeWidth="1.5" fill="none"/>
          <path d="M 102 232 Q 140 208 178 232" stroke="#a78bfa" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
          <path d="M 74 200 Q 140 164 206 200" stroke="#8b5cf6" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          <path d="M 44 165 Q 140 116 236 165" stroke="#7c3aed" strokeWidth="1" fill="none" strokeLinecap="round"/>
          <path d="M 14 128 Q 140 65 266 128" stroke="#6d28d9" strokeWidth="0.7" fill="none" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-text-muted text-center mb-16 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-text-muted mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be
              part of your vision. Whether you need a full-stack solution or want to enhance your
              existing team, let's talk!
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative isolate overflow-hidden rounded-[28px] border border-white/10 bg-dark/80 p-6 shadow-[0_18px_60px_rgba(2,6,23,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_24px_80px_rgba(2,6,23,0.65)]"
            >
              <div className="absolute inset-0 bg-linear-to-br from-fuchsia-500/20 via-primary/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-px rounded-[27px] bg-linear-to-br from-white/10 via-white/5 to-transparent opacity-60" />
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-fuchsia-500/25 blur-3xl transition-transform duration-500 group-hover:scale-125" />
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-y-0 left-0 w-px bg-linear-to-b from-transparent via-white/30 to-transparent" />
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
              </div>

              <div className="relative flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/8 shadow-lg shadow-black/20 transition-transform duration-300 group-hover:scale-105">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-text-muted">Email</p>
                  <p className="text-text text-lg transition-colors duration-300 group-hover:text-white">ggsantos95@gmail.com</p>
                </div>
              </div>
            </motion.div>

            <motion.a
              href="https://github.com/gustavoggs95"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="block group relative isolate overflow-hidden rounded-[28px] border border-white/10 bg-dark/80 p-6 shadow-[0_18px_60px_rgba(2,6,23,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_24px_80px_rgba(2,6,23,0.65)]"
            >
              <div className="absolute inset-0 bg-linear-to-br from-emerald-400/20 via-secondary/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-px rounded-[27px] bg-linear-to-br from-white/10 via-white/5 to-transparent opacity-60" />
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-400/25 blur-3xl transition-transform duration-500 group-hover:scale-125" />
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-y-0 left-0 w-px bg-linear-to-b from-transparent via-white/30 to-transparent" />
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
              </div>

              <div className="relative flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/8 shadow-lg shadow-black/20 transition-transform duration-300 group-hover:scale-105">
                  <Github size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-text-muted">GitHub</p>
                  <p className="text-text text-lg transition-colors duration-300 group-hover:text-white">gustavoggs95</p>
                </div>
              </div>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/gustavo-almeida-dos-santos-780bb1b1/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="block group relative isolate overflow-hidden rounded-[28px] border border-white/10 bg-dark/80 p-6 shadow-[0_18px_60px_rgba(2,6,23,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_24px_80px_rgba(2,6,23,0.65)]"
            >
              <div className="absolute inset-0 bg-linear-to-br from-sky-400/20 via-primary/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-px rounded-[27px] bg-linear-to-br from-white/10 via-white/5 to-transparent opacity-60" />
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-sky-400/25 blur-3xl transition-transform duration-500 group-hover:scale-125" />
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-y-0 left-0 w-px bg-linear-to-b from-transparent via-white/30 to-transparent" />
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
              </div>

              <div className="relative flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/8 shadow-lg shadow-black/20 transition-transform duration-300 group-hover:scale-105">
                  <Linkedin size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-text-muted">LinkedIn</p>
                  <p className="text-text text-lg transition-colors duration-300 group-hover:text-white">Gustavo Almeida dos Santos</p>
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
