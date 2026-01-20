import { Code2, Smartphone, Server, Cloud, Database, Sparkles } from 'lucide-react'

interface Skill {
  name: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  description: string
}

const skills: Skill[] = [
  {
    name: 'React',
    icon: Code2,
    description: 'Building modern, interactive UIs',
  },
  {
    name: 'React Native',
    icon: Smartphone,
    description: 'Cross-platform mobile apps',
  },
  {
    name: 'Node.js',
    icon: Server,
    description: 'Scalable backend services',
  },
  {
    name: 'AWS',
    icon: Cloud,
    description: 'Cloud & serverless solutions',
  },
  {
    name: 'PostgreSQL',
    icon: Database,
    description: 'Relational database design',
  },
  {
    name: 'AI',
    icon: Sparkles,
    description: 'AI integration & features',
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>
        <p className="text-text-muted text-center mb-16 max-w-2xl mx-auto">
          A Full Stack Developer comfortable working on any end of the stack
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group p-8 bg-dark-light rounded-xl border border-dark-lighter hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <skill.icon size={40} className="text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {skill.name}
              </h3>
              <p className="text-sm text-text-muted">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
