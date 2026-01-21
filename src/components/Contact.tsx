import { Mail, Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-dark-light/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
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
              className="flex items-center gap-4 text-text-muted group p-6 bg-dark-light rounded-xl border border-dark-lighter "
            >
              <div className="p-3 bg-dark rounded-lg">
                <Mail size={28} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-text-muted">Email</p>
                <p className="text-text text-lg">ggsantos95@gmail.com</p>
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
              className="flex items-center gap-4 text-text-muted group p-6 bg-dark-light rounded-xl border border-dark-lighter hover:border-primary/50 transition-all duration-300"
            >
              <div className="p-3 bg-dark rounded-lg">
                <Github size={28} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-text-muted">GitHub</p>
                <p className="text-text text-lg">gustavoggs95</p>
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
              className="flex items-center gap-4 text-text-muted group p-6 bg-dark-light rounded-xl border border-dark-lighter hover:border-primary/50 transition-all duration-300"
            >
              <div className="p-3 bg-dark rounded-lg">
                <Linkedin size={28} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-text-muted">LinkedIn</p>
                <p className="text-text text-lg">Gustavo Almeida dos Santos</p>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
