import React from 'react'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Project from './Project'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="heading flex flex-col md:w-2/5 md:my-20 my-5 scroll-smooth">
            <span className="text-2xl text-orange-600 font-semibold">Hi, I'm a</span>
            <span className="text-4xl font-bold">Full Stack Developer</span>
            <div className="button w-4/5">
                <Link to="/prevprojects">
                  <motion.button className="prevproj my-10 bg-orange-600 px-6 py-2 rounded-md" whileHover={{scale:1.05}} whileTap={{scale:1.04}}>Previous Projects</motion.button>
                </Link>
            </div>
        </div>
        <AboutMe/>
        <Skills/>
        <Project/>
    </div>
  )
}

export default Home
