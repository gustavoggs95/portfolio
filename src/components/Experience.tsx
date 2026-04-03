import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import globantLogo from '../assets/globant-logo.png'
import ibmLogo from '../assets/ibm-logo.png'

interface ExperienceItem {
  type: 'work' | 'education'
  title: string
  company: string
  location: string
  period: string
  description: string[]
  logo?: string
  accent: string
  glow: string
}

const experiences: ExperienceItem[] = [
  {
    type: 'work',
    title: 'Fullstack Developer',
    company: 'Globant',
    location: 'São Paulo, Brazil',
    period: 'Jan 2021 - Present',
    description: [
      'Maintain and develop new features for Web/Mobile applications using React, React Native and Node.js',
      'Design user interfaces using CSS/HTML best practices',
      'Develop and integrate AWS serverless solutions',
      'Integrate data from back-end services and databases using GraphQL',
      'Collaborate with Project Owners to understand and discuss requirements',
    ],
    logo: globantLogo,
    accent: 'from-emerald-400/20 via-secondary/10 to-transparent',
    glow: 'bg-emerald-400/25',
  },
  {
    type: 'work',
    title: 'Mobile Application Developer',
    company: 'IBM',
    location: 'São Paulo, Brazil',
    period: 'Dec 2018 - Jan 2021',
    description: [
      'Developed and maintained Android and iOS applications using React Native',
      'Designed user interfaces following CSS/HTML practices',
      'Integrated data from back-end services and databases using REST API',
      'Worked closely with Project Owners on requirements',
    ],
    logo: ibmLogo,
    accent: 'from-sky-400/20 via-primary/10 to-transparent',
    glow: 'bg-sky-400/25',
  },
  {
    type: 'work',
    title: 'Web Developer',
    company: 'IBM',
    location: 'São Paulo, Brazil',
    period: 'Sep 2017 - Dec 2018',
    description: [
      'Full Stack Web Development with NodeJS, AngularJS, HTML and CSS',
      'Followed Scrum Methodology for project delivery',
      'Integrated data from back-end services using REST API',
      'Wrote automated test scripts',
    ],
    logo: ibmLogo,
    accent: 'from-fuchsia-500/20 via-primary/10 to-transparent',
    glow: 'bg-fuchsia-500/25',
  },
  {
    type: 'education',
    title: "Associate's Degree",
    company: 'FATEC de Americana',
    location: 'São Paulo, Brazil',
    period: '2013 - 2016',
    description: ['Systems Analysis and Development'],
    accent: 'from-amber-300/20 via-secondary/10 to-transparent',
    glow: 'bg-amber-300/25',
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>
          <p className="text-text-muted text-center mb-16 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-linear-to-b from-primary via-secondary to-primary" />

            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-dark z-10" />

                <div className="ml-8 md:ml-0 md:w-1/2 md:px-8">
                  <div className="group relative isolate overflow-hidden rounded-[28px] border border-white/10 bg-dark/80 p-5 shadow-[0_18px_60px_rgba(2,6,23,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_24px_80px_rgba(2,6,23,0.65)] sm:p-6">
                    {/* Gradient accent */}
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${exp.accent} opacity-70 transition-opacity duration-500 group-hover:opacity-100`}
                    />
                    {/* Inner glass edge */}
                    <div className="absolute inset-px rounded-[27px] bg-linear-to-br from-white/10 via-white/5 to-transparent opacity-60" />
                    {/* Glow blob */}
                    <div
                      className={`absolute -right-10 -top-10 h-28 w-28 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-125 ${exp.glow}`}
                    />
                    {/* Hover border shimmer */}
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute inset-y-0 left-0 w-px bg-linear-to-b from-transparent via-white/30 to-transparent" />
                      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
                    </div>

                    <div className="relative">
                      <div className="mb-4 flex items-start justify-between gap-4">
                        <div>
                          <span className="font-medium text-primary">{exp.company}</span>
                          <h3 className="mt-1 text-xl font-semibold text-text transition-colors duration-300 group-hover:text-white">
                            {exp.title}
                          </h3>
                        </div>

                        {exp.logo ? (
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/8 p-2 shadow-lg shadow-black/20 transition-transform duration-300 group-hover:scale-105">
                            <img
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              className="h-full w-full object-contain"
                            />
                          </div>
                        ) : (
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/8 shadow-lg shadow-black/20 transition-transform duration-300 group-hover:scale-105">
                            {exp.type === 'work' ? (
                              <Briefcase size={24} className="text-white" />
                            ) : (
                              <GraduationCap size={24} className="text-white" />
                            )}
                          </div>
                        )}
                      </div>

                      <div className="mb-4 flex flex-wrap gap-4 text-sm text-text-muted">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>

                      <div className="border-t border-white/10 pt-4">
                        <ul className="space-y-2">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                              <span className="mt-0.5 text-primary leading-none">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
