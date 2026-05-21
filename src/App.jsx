import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import BusinessModelCanvas from './components/BusinessModelCanvas'
import SWOT from './components/SWOT'
import Process from './components/Process'
import SampleProducts from './components/SampleProducts'
import Stats from './components/Stats'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Technologies from './components/Technologies'
import Team from './components/Team'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import AudioPlayer from './components/AudioPlayer'
import CursorFollower from './components/CursorFollower'

export default function App(){
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div id="top" className="min-h-screen text-slate-900 bg-white dark:text-white dark:bg-black">
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Services />
        <BusinessModelCanvas />
        <SWOT />
        <SampleProducts />
        <Process />
        <Stats />
        <Projects />
        <Testimonials />
        <Technologies />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
      <AudioPlayer />
      <CursorFollower />
    </div>
  )
}
