import { motion, useScroll, useSpring } from 'framer-motion'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import CodingProfiles from './components/CodingProfiles'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  })

  return (
    <>
      <Background />

      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-60 h-0.5 origin-left bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400"
      />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <CodingProfiles />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
