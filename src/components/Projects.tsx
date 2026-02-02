import { Tv, Tractor, GraduationCap, ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import postryIcon from '../assets/postry-logo.png'

interface Project {
  title: string
  description: string
  technologies: string[]
  icon?: React.ComponentType<{ size?: number; className?: string }>
  customIcon?: string
  category: string
  githubUrl?: string
  demoUrl?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: 'Postry AI',
    description:
      'AI-Powered Content Factory that transforms blog articles and videos into multi-platform social content automatically. Features AI content generation, brand voice presets, approval workflows, and asset transformation with video transcription.',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'OpenAI', 'Tailwind CSS'],
    customIcon: postryIcon,
    category: 'AI Web Application',
    githubUrl: 'https://github.com/gustavoggs95/postry-ai',
    demoUrl: 'https://postry-ai.vercel.app/',
    featured: true,
  },
  {
    title: 'TV Media Platform',
    description:
      'Worked on an international TV Media project, developing scalable web applications for content management and streaming services. Built features that handle high traffic and real-time data updates.',
    technologies: ['React', 'Node.js', 'AWS', 'GraphQL'],
    icon: Tv,
    category: 'Web Application',
  },
  {
    title: 'Agricultural E-commerce',
    description:
      'Developed mobile and web applications for the agricultural sector, including e-commerce functionality with intuitive interfaces.',
    technologies: ['React Native', 'React', 'Node.js', 'REST API'],
    icon: Tractor,
    category: 'Mobile & Web',
  },
  {
    title: 'Language School Apps',
    description:
      'Built mobile applications for language learning schools, featuring interactive lessons, progress tracking, and student-teacher tools.',
    technologies: ['React Native', 'TypeScript', 'AWS', 'Push Notifications'],
    icon: GraduationCap,
    category: 'Mobile Application',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-dark-light/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-text-muted text-center mb-16 max-w-2xl mx-auto">
            A selection of international projects I've contributed to throughout my career
          </p>
        </motion.div>

        {/* Featured Project */}
        <div className="max-w-2xl mx-auto mb-12">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
                className="group bg-dark-light rounded-xl overflow-hidden border border-dark-lighter hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:scale-110 transition-transform duration-500" />
                  {project.customIcon ? (
                    <img
                      src={project.customIcon}
                      alt={project.title}
                      className="w-auto h-32 group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    project.icon && (
                      <project.icon
                        size={80}
                        className="text-primary/80 group-hover:scale-110 transition-transform duration-300"
                      />
                    )
                  )}
                </div>

                <div className="p-8">
                  <span className="text-xs text-secondary font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-muted mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-dark rounded-full text-text-muted border border-dark-lighter"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {(project.githubUrl || project.demoUrl) && (
                    <div className="flex gap-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-dark border border-dark-lighter rounded-lg hover:border-primary transition-colors text-sm"
                        >
                          <Github size={16} />
                          View Code
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 rounded-lg transition-colors text-sm font-medium"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects
            .filter((project) => !project.featured)
            .map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-dark-light rounded-xl overflow-hidden border border-dark-lighter hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:scale-110 transition-transform duration-500" />
                  {project.customIcon ? (
                    <img
                      src={project.customIcon}
                      alt={project.title}
                      className="w-20 h-20 group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    project.icon && (
                      <project.icon
                        size={64}
                        className="text-primary/80 group-hover:scale-110 transition-transform duration-300"
                      />
                    )
                  )}
                </div>

                <div className="p-6">
                  <span className="text-xs text-secondary font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-muted text-sm mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-dark rounded-full text-text-muted border border-dark-lighter"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {(project.githubUrl || project.demoUrl) && (
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-text-muted hover:text-primary transition-colors"
                        >
                          <Github size={14} />
                          Code
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-secondary hover:text-primary transition-colors"
                        >
                          <ExternalLink size={14} />
                          Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
        </div>

        <p className="text-center text-text-muted mt-12 max-w-2xl mx-auto">
          <span className="text-primary">Note:</span> Due to NDA agreements, specific project
          details and names cannot be disclosed. The descriptions above represent the types of
          projects I've worked on.
        </p>
      </div>
    </section>
  )
}
