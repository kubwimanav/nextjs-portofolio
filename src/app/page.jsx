import React from 'react'
import Home from './home/page'
import About from './about/page'
import Project from './project/page'
import Contact from './contact/page'

function page() {
  return (
    <main className=' flex flex-col  gap-9'>
      
        <Home />
        <About />
        <Project />
        <Contact/>
        
      
    </main>
  )
}

export default page
