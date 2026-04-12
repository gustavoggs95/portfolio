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
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base */}
        <div className="absolute inset-0 bg-linear-to-tr from-dark via-dark-light to-dark" />

        {/* Honeycomb hex grid — full coverage, distinct from Hero's square line grid */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.18]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="about-hex" width="52" height="90" patternUnits="userSpaceOnUse">
              {/* Row A — center hex */}
              <polygon
                points="26,0 52,15 52,45 26,60 0,45 0,15"
                fill="none"
                stroke="rgba(20,184,166,1)"
                strokeWidth="1"
              />
              {/* Row B — left-edge partial hex (completes with right tile) */}
              <polygon
                points="0,45 26,60 26,90 0,105 -26,90 -26,60"
                fill="none"
                stroke="rgba(20,184,166,1)"
                strokeWidth="1"
              />
              {/* Row B — right-edge partial hex (completes with left tile) */}
              <polygon
                points="52,45 78,60 78,90 52,105 26,90 26,60"
                fill="none"
                stroke="rgba(20,184,166,1)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-hex)" />
        </svg>

        {/* Radial vignette — creates depth and draws focus to content */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 85% 75% at 50% 50%, transparent 35%, rgba(15,23,42,0.75) 100%)',
          }}
        />

        {/* Static glow orbs for teal accent */}
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-emerald-500/15 blur-[110px]" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-teal-400/12 blur-[90px]" />

        {/* Edge separator lines */}
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-400/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-teal-400/30 to-transparent" />
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
                As a true Full Stack Developer, I'm comfortable working on any end of the stack,
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
