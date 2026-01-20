const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'React Native', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'HTML/CSS', level: 92 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'GraphQL', level: 85 },
      { name: 'REST APIs', level: 92 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 78 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS Lambda', level: 85 },
      { name: 'AWS S3/DynamoDB', level: 82 },
      { name: 'CI/CD', level: 80 },
      { name: 'Docker', level: 75 },
      { name: 'Serverless', level: 85 },
    ],
  },
  {
    title: 'Other',
    skills: [
      { name: 'Git', level: 92 },
      { name: 'Agile/Scrum', level: 90 },
      { name: 'AI Integration', level: 75 },
      { name: 'Testing', level: 82 },
      { name: 'Technical Leadership', level: 85 },
    ],
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

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-dark-light p-6 rounded-xl border border-dark-lighter"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-text">{skill.name}</span>
                      <span className="text-text-muted text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core competencies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Core Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              'React',
              'React Native',
              'Node.js',
              'TypeScript',
              'AWS',
              'GraphQL',
              'REST APIs',
              'AI Integration',
            ].map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 bg-dark-light rounded-full border border-dark-lighter hover:border-primary hover:scale-105 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
