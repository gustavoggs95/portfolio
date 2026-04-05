import { Code2, Server, Smartphone, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const highlights = [
  {
    icon: Code2,
    eyebrow: 'Interactive Systems',
    title: 'Frontend Development',
    description: 'Polished web experiences with strong interaction and motion.',
    metric: 'React, React Native, TypeScript',
    accent: 'from-fuchsia-500/25 via-primary/10 to-transparent',
    glow: 'bg-fuchsia-500/30',
  },
  {
    icon: Server,
    eyebrow: 'Scalable Services',
    title: 'Backend Development',
    description: 'Resilient APIs and cloud-ready services built to scale cleanly.',
    metric: 'Node.js, AWS, PostgreSQL',
    accent: 'from-emerald-400/25 via-secondary/10 to-transparent',
    glow: 'bg-emerald-400/30',
  },
  {
    icon: Smartphone,
    eyebrow: 'Cross-Platform',
    title: 'Mobile Development',
    description: 'Mobile products that feel native, fast, and consistent.',
    metric: 'iOS, Android, React Native',
    accent: 'from-sky-400/25 via-primary/10 to-transparent',
    glow: 'bg-sky-400/30',
  },
  {
    icon: Sparkles,
    eyebrow: 'Product Intelligence',
    title: 'AI Integration Workflows',
    description: 'Practical AI features for automation, assistance, and smarter flows.',
    metric: 'Automation, assistants, chatbots',
    accent: 'from-amber-300/25 via-secondary/10 to-transparent',
    glow: 'bg-amber-300/30',
  },
]

export function About() {
  return (
    <section id="about" className="py-24 bg-dark-light/50 relative overflow-hidden">
      {/* Topographic peak contours */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-violet-400/50 to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-80" style={{ background: 'radial-gradient(ellipse at 100% 100%, rgba(139,92,246,0.14) 0%, transparent 65%)' }} />
        <svg className="absolute bottom-0 right-0 w-125 h-105 opacity-20" viewBox="0 0 400 340" fill="none">
          <ellipse cx="350" cy="310" rx="340" ry="255" stroke="#8b5cf6" strokeWidth="1.4" transform="rotate(-15 350 310)"/>
          <ellipse cx="350" cy="310" rx="268" ry="192" stroke="#7c3aed" strokeWidth="1.2" transform="rotate(-15 350 310)"/>
          <ellipse cx="350" cy="310" rx="198" ry="136" stroke="#6366f1" strokeWidth="1" transform="rotate(-14 350 310)"/>
          <ellipse cx="350" cy="310" rx="130" ry="84" stroke="#4f46e5" strokeWidth="0.8" transform="rotate(-13 350 310)"/>
          <ellipse cx="350" cy="310" rx="70" ry="42" stroke="#4338ca" strokeWidth="0.7" transform="rotate(-12 350 310)"/>
          <circle cx="350" cy="310" r="16" stroke="#a78bfa" strokeWidth="1"/>
          <circle cx="350" cy="310" r="5" fill="#a78bfa"/>
        </svg>
        <svg className="absolute top-0 left-0 w-65 h-65 opacity-15" viewBox="0 0 200 200" fill="none">
          <ellipse cx="50" cy="50" rx="180" ry="130" stroke="#8b5cf6" strokeWidth="1" transform="rotate(20 50 50)"/>
          <ellipse cx="50" cy="50" rx="130" ry="88" stroke="#6366f1" strokeWidth="0.8" transform="rotate(20 50 50)"/>
          <ellipse cx="50" cy="50" rx="80" ry="50" stroke="#4f46e5" strokeWidth="0.6" transform="rotate(18 50 50)"/>
          <circle cx="50" cy="50" r="8" stroke="#a78bfa" strokeWidth="0.8"/>
          <circle cx="50" cy="50" r="3" fill="#a78bfa"/>
        </svg>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-text-muted text-center mb-16 max-w-2xl mx-auto">
            Get to know more about my background and what I do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-text">Who I Am</h3>
            <div className="space-y-4 text-text-muted">
              <p>
                I'm a Senior Software Engineer with over a decade of experience building scalable
                web and mobile applications. Based in São Paulo, Brazil, I've had the opportunity to
                work with leading companies like Globant and IBM.
              </p>
              <p>
                I specialize in turning business ideas into well-architected, production-ready
                software. I've worked on projects from scratch, defining architecture, choosing the
                right technologies, and delivering maintainable solutions that grow with the
                business.
              </p>
              <p>
                As a true Full Stack Developer, I'm comfortable working on any end of the stack—
                whether it's crafting pixel-perfect UIs, building robust backend services, or
                deploying serverless solutions on AWS. I thrive in collaborative environments and
                enjoy discussing requirements with stakeholders to deliver the best solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {highlights.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="group relative isolate overflow-hidden rounded-[28px] border border-white/10 bg-dark/80 p-5 shadow-[0_18px_60px_rgba(2,6,23,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_24px_80px_rgba(2,6,23,0.65)] sm:p-6"
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${item.accent} opacity-70 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="absolute inset-px rounded-[27px] bg-linear-to-br from-white/10 via-white/5 to-transparent opacity-60" />
                <div
                  className={`absolute -right-10 -top-10 h-28 w-28 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-125 ${item.glow}`}
                />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-y-0 left-0 w-px bg-linear-to-b from-transparent via-white/30 to-transparent" />
                  <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
                </div>

                <div className="relative flex h-full flex-col">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <h4 className="max-w-48 text-xl font-semibold leading-tight text-text transition-colors duration-300 group-hover:text-white">
                        {item.title}
                      </h4>
                    </div>

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/8 shadow-lg shadow-black/20 transition-transform duration-300 group-hover:scale-105">
                      <item.icon className="text-white" size={24} />
                    </div>
                  </div>

                  <p className="mb-4 text-sm leading-6 text-text-muted">{item.description}</p>

                  <div className="mt-auto flex items-end justify-between gap-4 border-t border-white/10 pt-4">
                    <div>
                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-text-muted">
                        Focus Stack
                      </p>
                      <p className="max-w-56 text-sm font-medium leading-5 text-white/90">
                        {item.metric}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
