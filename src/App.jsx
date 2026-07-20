import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Linux from './sections/Linux.jsx'
import Teaching from './sections/Teaching.jsx'
import Projects from './sections/Projects.jsx'
import Skills from './sections/Skills.jsx'
import Contact from './sections/Contact.jsx'
import Hobbies from './sections/Hobbies.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Linux />
        <Teaching />
        <Projects />
        <Hobbies />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
