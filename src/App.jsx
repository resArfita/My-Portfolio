/* eslint-disable no-unused-vars */
import "./components/layout/Navbar"
import Navbar from "./components/layout/Navbar"
import Hero from "./components/layout/Hero"
import toast, { Toaster } from 'react-hot-toast';
import Footer from "./components/layout/Footer"
import Skills from "./components/pages/Skills"
import Home from "./components/pages/Home"
import Contact from "./components/pages/Contact"
import Projects from "./components/pages/Projects"
import Experience from "./components/pages/Experience"
// import Navbar2 from "./components/layout/Navbar2"

const App = () => {

  
  return (
    <>
    <Navbar />
    <Home />
    <Projects />
    <Experience />
    <Skills />
    <Contact />
    <Footer />
    </>
  )
}

export default App
