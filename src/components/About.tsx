import { Code2, Smartphone, Server, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const highlights = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Building responsive and interactive UIs with React and React Native',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Creating robust APIs and serverless solutions with Node.js and AWS',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Cross-platform mobile apps for iOS and Android with React Native',
  },
  {
    icon: Sparkles,
    title: 'AI Integration',
    description: 'Integrating AI capabilities to enhance application features',
  },
]

export function About() {
  return (
    <section id="about" className="py-24 bg-dark-light/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
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
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="p-6 bg-dark-light rounded-xl border border-dark-lighter hover:border-primary/50 transition-all duration-300 group"
              >
                <item.icon
                  className="text-primary mb-4 group-hover:scale-110 transition-transform"
                  size={32}
                />
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-text-muted">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
