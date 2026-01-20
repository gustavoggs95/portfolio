import { ExternalLink, Tv, Tractor, GraduationCap } from 'lucide-react'

interface Project {
  title: string
  description: string
  technologies: string[]
  icon: React.ComponentType<{ size?: number; className?: string }>
  category: string
}

const projects: Project[] = [
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
      'Developed mobile and web applications for the agricultural sector, including e-commerce functionality. Created intuitive interfaces for product browsing, ordering, and farm management features.',
    technologies: ['React Native', 'React', 'Node.js', 'REST API'],
    icon: Tractor,
    category: 'Mobile & Web',
  },
  {
    title: 'Language School Apps',
    description:
      'Built mobile applications for language learning schools, featuring interactive lessons, progress tracking, and student-teacher communication tools. Focused on engaging UX for learners.',
    technologies: ['React Native', 'TypeScript', 'AWS', 'Push Notifications'],
    icon: GraduationCap,
    category: 'Mobile Application',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-dark-light/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <p className="text-text-muted text-center mb-16 max-w-2xl mx-auto">
          A selection of international projects I've contributed to throughout my career
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group bg-dark-light rounded-xl overflow-hidden border border-dark-lighter hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Icon Header */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:scale-110 transition-transform duration-500" />
                <project.icon
                  size={64}
                  className="text-primary/80 group-hover:scale-110 transition-transform duration-300"
                />
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

                <div className="flex items-center gap-2 text-primary text-sm font-medium">
                  <ExternalLink size={16} />
                  <span>Enterprise Project</span>
                </div>
              </div>
            </article>
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
