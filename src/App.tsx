import './App.css'
import { GoTopBtn } from './components/goTopBtn/GoTopBtn'
import { Particle } from './components/particle/Particle'
import { Footer } from './layout/footer/Footer'
import { Header } from './layout/header/Header'
import { Experience } from './layout/sections/experience/Experience'
import { Main } from './layout/sections/main/Main'
import { Projects } from './layout/sections/projects/Projects'
import { Technologies } from './layout/sections/technologies/Technologies'

function App() {

  return (
    <>
      <Particle />
      <Header />
      <Main />
      <Projects />
      <Technologies />
      <Experience />
      <Footer />
      <GoTopBtn />
    </>
  )
}

export default App
