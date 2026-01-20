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
  },
  {
    type: 'education',
    title: "Associate's Degree",
    company: 'FATEC de Americana',
    location: 'São Paulo, Brazil',
    period: '2013 - 2016',
    description: ['Systems Analysis and Development'],
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
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>
          <p className="text-text-muted text-center mb-16 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />

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
                  <div className="bg-dark-light p-6 rounded-xl border border-dark-lighter hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      {exp.logo ? (
                        <div className="w-16 h-16 rounded-lg p-2 flex items-center justify-center">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : exp.type === 'work' ? (
                        <Briefcase size={20} className="text-primary" />
                      ) : (
                        <GraduationCap size={20} className="text-primary" />
                      )}
                      <span className="font-medium text-primary">{exp.company}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-text-muted mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-text-muted text-sm flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
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
