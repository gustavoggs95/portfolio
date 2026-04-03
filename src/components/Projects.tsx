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
  accent: string
  glow: string
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
    accent: 'from-fuchsia-500/20 via-primary/10 to-transparent',
    glow: 'bg-fuchsia-500/25',
  },
  {
    title: 'TV Media Platform',
    description:
      'Worked on an international TV Media project, developing scalable web applications for content management and streaming services. Built features that handle high traffic and real-time data updates.',
    technologies: ['React', 'Node.js', 'AWS', 'GraphQL'],
    icon: Tv,
    category: 'Web Application',
    accent: 'from-sky-400/20 via-primary/10 to-transparent',
    glow: 'bg-sky-400/25',
  },
  {
    title: 'Agricultural E-commerce',
    description:
      'Developed mobile and web applications for the agricultural sector, including e-commerce functionality with intuitive interfaces.',
    technologies: ['React Native', 'React', 'Node.js', 'REST API'],
    icon: Tractor,
    category: 'Mobile & Web',
    accent: 'from-emerald-400/20 via-secondary/10 to-transparent',
    glow: 'bg-emerald-400/25',
  },
  {
    title: 'Language School Apps',
    description:
      'Built mobile applications for language learning schools, featuring interactive lessons, progress tracking, and student-teacher tools.',
    technologies: ['React Native', 'TypeScript', 'AWS', 'Push Notifications'],
    icon: GraduationCap,
    category: 'Mobile Application',
    accent: 'from-amber-300/20 via-secondary/10 to-transparent',
    glow: 'bg-amber-300/25',
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
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
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
                className="group relative isolate overflow-hidden rounded-[28px] border border-white/10 bg-dark/80 shadow-[0_18px_60px_rgba(2,6,23,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_24px_80px_rgba(2,6,23,0.65)]"
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${project.accent} opacity-70 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="absolute inset-px rounded-[27px] bg-linear-to-br from-white/10 via-white/5 to-transparent opacity-60" />
                <div
                  className={`absolute -right-10 -top-10 h-28 w-28 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-125 ${project.glow}`}
                />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-y-0 left-0 w-px bg-linear-to-b from-transparent via-white/30 to-transparent" />
                  <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
                </div>

                <div className="relative h-64 flex items-center justify-center overflow-hidden">
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
                        className="text-white/80 group-hover:scale-110 transition-transform duration-300"
                      />
                    )
                  )}
                </div>

                <div className="relative p-8 border-t border-white/10">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-text-muted">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-semibold mt-2 mb-3 text-text transition-colors duration-300 group-hover:text-white">
                    {project.title}
                  </h3>
                  <p className="text-text-muted mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-medium tracking-wide text-white/80 backdrop-blur-sm"
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
                          className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/8 px-4 py-2 text-sm text-white/80 transition-all duration-300 hover:border-white/25 hover:text-white"
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
                          className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
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
                className="group relative isolate overflow-hidden rounded-[28px] border border-white/10 bg-dark/80 shadow-[0_18px_60px_rgba(2,6,23,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_24px_80px_rgba(2,6,23,0.65)]"
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${project.accent} opacity-70 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="absolute inset-px rounded-[27px] bg-linear-to-br from-white/10 via-white/5 to-transparent opacity-60" />
                <div
                  className={`absolute -right-10 -top-10 h-28 w-28 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-125 ${project.glow}`}
                />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-y-0 left-0 w-px bg-linear-to-b from-transparent via-white/30 to-transparent" />
                  <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
                </div>

                <div className="relative h-48 flex items-center justify-center overflow-hidden">
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
                        className="text-white/80 group-hover:scale-110 transition-transform duration-300"
                      />
                    )
                  )}
                </div>

                <div className="relative p-6 border-t border-white/10">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-text-muted">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-3 text-text transition-colors duration-300 group-hover:text-white">
                    {project.title}
                  </h3>
                  <p className="text-text-muted text-sm mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-medium tracking-wide text-white/80 backdrop-blur-sm"
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
                          className="flex items-center gap-1 text-xs text-text-muted hover:text-white transition-colors"
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
                          className="flex items-center gap-1 text-xs text-secondary hover:text-white transition-colors"
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
