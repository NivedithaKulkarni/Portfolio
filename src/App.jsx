import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './Components/HeroSection'
import Navabar from './Components/Navabar'
import Technologies from './Components/Technologies'
import Project from './Components/Project'
import Education from './Components/Education'
import Experience from './Components/Experience'
import Contact from './Components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
  

    <div className='bg-black min-h-screen' >
      <Navabar />
      <HeroSection />
      <Technologies />
      <Project/>
      <Experience/>
      <Education/>
      <Contact/>
    </div>

   
  )
}

export default App
