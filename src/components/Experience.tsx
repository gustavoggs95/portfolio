import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react'

interface ExperienceItem {
  type: 'work' | 'education'
  title: string
  company: string
  location: string
  period: string
  description: string[]
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
  },
  {
    type: 'education',
    title: "Associate's Degree",
    company: 'FATEC de Americana',
    location: 'São Paulo, Brazil',
    period: '2013 - 2016',
    description: ['Análise e Desenvolvimento de Sistemas (Systems Analysis and Development)'],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Experience & Education
          </span>
        </h2>
        <p className="text-text-muted text-center mb-16 max-w-2xl mx-auto">
          My professional journey and educational background
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />

            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-dark z-10" />

                {/* Content */}
                <div className="ml-8 md:ml-0 md:w-1/2 md:px-8">
                  <div className="bg-dark-light p-6 rounded-xl border border-dark-lighter hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      {exp.type === 'work' ? <Briefcase size={20} /> : <GraduationCap size={20} />}
                      <span className="font-medium">{exp.company}</span>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
