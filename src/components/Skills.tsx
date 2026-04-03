import { Code2, Smartphone, Server, Cloud, Database, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

interface Skill {
  name: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  description: string
  accent: string
  glow: string
}

const skills: Skill[] = [
  {
    name: 'React',
    icon: Code2,
    description: 'Building modern, interactive UIs',
    accent: 'from-fuchsia-500/20 via-primary/10 to-transparent',
    glow: 'bg-fuchsia-500/25',
  },
  {
    name: 'React Native',
    icon: Smartphone,
    description: 'Cross-platform mobile apps',
    accent: 'from-sky-400/20 via-primary/10 to-transparent',
    glow: 'bg-sky-400/25',
  },
  {
    name: 'Node.js',
    icon: Server,
    description: 'Scalable backend services',
    accent: 'from-emerald-400/20 via-secondary/10 to-transparent',
    glow: 'bg-emerald-400/25',
  },
  {
    name: 'AWS',
    icon: Cloud,
    description: 'Cloud & serverless solutions',
    accent: 'from-amber-300/20 via-secondary/10 to-transparent',
    glow: 'bg-amber-300/25',
  },
  {
    name: 'PostgreSQL',
    icon: Database,
    description: 'Relational database design',
    accent: 'from-sky-400/20 via-secondary/10 to-transparent',
    glow: 'bg-sky-400/25',
  },
  {
    name: 'AI',
    icon: Sparkles,
    description: 'AI integration & features',
    accent: 'from-amber-300/20 via-primary/10 to-transparent',
    glow: 'bg-amber-300/25',
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-text-muted text-center mb-16 max-w-2xl mx-auto">
            A Full Stack Developer comfortable working on any end of the stack
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative isolate overflow-hidden rounded-[28px] border border-white/10 bg-dark/80 p-6 shadow-[0_18px_60px_rgba(2,6,23,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_24px_80px_rgba(2,6,23,0.65)] text-center"
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${skill.accent} opacity-70 transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div className="absolute inset-px rounded-[27px] bg-linear-to-br from-white/10 via-white/5 to-transparent opacity-60" />
              <div
                className={`absolute -right-10 -top-10 h-28 w-28 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-125 ${skill.glow}`}
              />
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-y-0 left-0 w-px bg-linear-to-b from-transparent via-white/30 to-transparent" />
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
              </div>

              <div className="relative">
                <div className="flex justify-center mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/8 shadow-lg shadow-black/20 transition-transform duration-300 group-hover:scale-105">
                    <skill.icon size={28} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-text transition-colors duration-300 group-hover:text-white">
                  {skill.name}
                </h3>
                <p className="text-sm text-text-muted">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
