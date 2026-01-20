import { Header, Hero, About, Experience, Projects, Skills, Contact, Footer } from './components'

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
