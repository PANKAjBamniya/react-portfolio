import React from 'react'
import Home from './componentes/home/Home'
import About from './componentes/about/About'
import Project from './componentes/project/Project'
import Skills from './componentes/skills/Skills'
import Contact from './componentes/contact/Contact'
import Footer from './componentes/footer/Footer'

const App = () => {
  return (
    <div>
      <Home/>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App