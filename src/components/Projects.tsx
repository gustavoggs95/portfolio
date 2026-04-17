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
    <section id="projects" className="py-24 bg-dark-light/50 relative overflow-hidden">
      {/* Signal map background */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-linear-to-b from-dark via-dark-light/70 to-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(217,70,239,0.16),transparent_22%),radial-gradient(circle_at_82%_28%,rgba(34,211,238,0.12),transparent_20%),radial-gradient(circle_at_50%_78%,rgba(99,102,241,0.14),transparent_26%)]" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.22]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="projects-flow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#d946ef" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0.6" />
            </linearGradient>
            <pattern id="projects-grid" width="72" height="72" patternUnits="userSpaceOnUse">
              <path d="M 72 0 L 0 0 0 72" fill="none" stroke="#475569" strokeWidth="1" opacity="0.32" />
              <circle cx="0" cy="0" r="1.5" fill="#64748b" opacity="0.45" />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#projects-grid)" />

          <path
            d="M-40 210 C180 100, 280 320, 470 250 S820 90, 1010 210 S1320 410, 1490 280"
            fill="none"
            stroke="url(#projects-flow)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeDasharray="6 14"
          />
          <path
            d="M-20 580 C170 460, 290 690, 520 600 S840 420, 1040 520 S1310 760, 1490 640"
            fill="none"
            stroke="url(#projects-flow)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="10 16"
            opacity="0.85"
          />
          <path
            d="M210 0 C280 140, 360 240, 540 280 S830 350, 940 520 S1020 810, 1180 940"
            fill="none"
            stroke="url(#projects-flow)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeDasharray="4 12"
            opacity="0.8"
          />

          <g fill="#22d3ee">
            <circle cx="226.25" cy="215" r="3.5" />
            <circle cx="470" cy="250" r="4" />
            <circle cx="740" cy="158.75" r="3.5" />
            <circle cx="1010" cy="210" r="4" />
            <circle cx="1257.5" cy="338.75" r="3.5" />
          </g>
          <g fill="#d946ef">
            <circle cx="235" cy="578.75" r="3.5" />
            <circle cx="520" cy="600" r="4" />
            <circle cx="791.25" cy="488.75" r="3.5" />
            <circle cx="1040" cy="520" r="4" />
            <circle cx="1272.5" cy="662.5" r="3.5" />
          </g>
          <g fill="#818cf8">
            <circle cx="333.75" cy="177.5" r="3.25" />
            <circle cx="540" cy="280" r="3.5" />
            <circle cx="766.25" cy="351.25" r="3.25" />
            <circle cx="940" cy="520" r="3.5" />
            <circle cx="1041.25" cy="745" r="3.25" />
          </g>
        </svg>
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-400/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-fuchsia-400/45 to-transparent" />
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
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(15,23,42,0.18)_42%,rgba(15,23,42,0.78)),linear-gradient(120deg,rgba(217,70,239,0.09),transparent_30%,transparent_70%,rgba(34,211,238,0.08))]" />
                  <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(135deg,rgba(148,163,184,0.07)_0_1px,transparent_1px_18px)]" />
                  <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.04)_0_1px,transparent_1px_24px)]" />
                  {project.customIcon ? (
                    <img
                      src={project.customIcon}
                      alt={project.title}
                      className="relative z-10 w-auto h-32 drop-shadow-[0_0_28px_rgba(217,70,239,0.28)] group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    project.icon && (
                      <project.icon
                        size={80}
                        className="relative z-10 text-white/80 drop-shadow-[0_0_24px_rgba(34,211,238,0.22)] group-hover:scale-110 transition-transform duration-300"
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
