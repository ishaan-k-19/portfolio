import React, { useState, useRef } from 'react'
import { motion, useInView } from "framer-motion"

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
    <>
    <div id='skills'>
      <motion.div ref={ref} className="skills flex flex-col lg:my-20 my-5">
            <span className="text-2xl font-bold">What I Know?</span>
            <div className="catego flex-col flex lg:flex-row w-full flex-wrap lg:flex-nowrap justify-center items-center lg:items-stretch">
            {isInView&&<motion.div className="skill flex hide2 flex-col w-56 md:w-[75%] lg:w-1/4 bg-[#2d2b27] text-[#aaaaac] lg:m-1 xl:m-4 lg:items-start p-4 rounded-lg lg:my-10 my-4" initial={{x:-100, opacity:0, filter:"blur(2px)"}} animate={{x:0, opacity:1, filter:"blur(0px)"}} transition={{duration:0.5}}>
                <span className="font-bold my-2">Frontend</span>
                <ul className="flex gap-2 flex-wrap mt-3">
                    <li className="bg-[#25221e] rounded-md text-sm p-2 shadow-inner">HTML</li>
                    <li className="bg-[#25221e] rounded-md text-sm p-2">CSS</li>
                    <li className="bg-[#25221e] rounded-md text-sm p-2 border border-purple-700">React</li>
                    <li className="bg-[#25221e] rounded-md text-sm p-2 border border-cyan-700">Next</li>
                    <li className="bg-[#25221e] rounded-md text-sm p-2">JavaScript</li>
                    <li className="bg-[#25221e] rounded-md text-sm p-2">TailWind</li>
                    <li className="bg-[#25221e] rounded-md text-sm p-2">BootStrap</li>
                </ul>
            </motion.div>}
            {isInView&&<motion.div className="skill flex hide2 flex-col w-56 md:w-[75%] lg:w-1/4 bg-[#2d2b27] text-[#aaaaac] m-1 xl:m-4 items-start p-4 rounded-lg lg:my-10 my-4" initial={{x:-100, opacity:0, filter:"blur(2px)"}} animate={{x:0, opacity:1, filter:"blur(0px)"}} transition={{duration:0.5, delay:0.5}}>
                    <span className="font-bold my-2">Backend</span>
                    <ul className="flex gap-2 flex-wrap mt-3">
                        <li className="bg-[#25221e] rounded-md text-sm p-2 border border-green-700">Java</li>
                        <li className="bg-[#25221e] rounded-md text-sm p-2">Node</li>
                        <li className="bg-[#25221e] rounded-md text-sm p-2 border border-red-700">Express</li>
                        <li className="bg-[#25221e] rounded-md text-sm p-2">Python</li>
                    </ul>
            </motion.div>}
            {isInView&&<motion.div className="skill flex hide2 flex-col w-56 md:w-[75%] lg:w-1/4 bg-[#2d2b27] text-[#aaaaac] m-1 xl:m-4 items-start p-4 rounded-lg lg:my-10 my-4" initial={{x:-100, opacity:0, filter:"blur(2px)"}} animate={{x:0, opacity:1, filter:"blur(0px)"}} transition={{duration:0.5, delay:1}}>
                <span className="font-bold my-2">Database</span>
                    <ul className="flex gap-2 flex-wrap mt-3">
                        <li className="bg-[#25221e] rounded-md text-sm p-2">PostgreSQL</li>
                        <li className="bg-[#25221e] rounded-md text-sm p-2 border border-blue-700">MongoDB</li>
                    </ul>
            </motion.div>}
            {isInView&&<motion.div className="skill flex hide2 flex-col w-56 md:w-[75%] lg:w-1/4 bg-[#2d2b27] text-[#aaaaac] m-1 xl:m-4 items-start p-4 rounded-lg lg:my-10 my-4" initial={{x:-100, opacity:0, filter:"blur(2px)"}} animate={{x:0, opacity:1, filter:"blur(0px)"}} transition={{duration:0.5, delay:1.5}}>
                <span className="font-bold my-2">Devops</span>
                    <ul className="flex gap-2 flex-wrap mt-3">
                        <li className="bg-[#25221e] rounded-md text-sm p-2">GIT</li>
                        <li className="bg-[#25221e] rounded-md text-sm p-2">Unix</li>
                    </ul>
            </motion.div>}
            </div>
        </motion.div>
    </div>
    </>
  )
}

export default Skills
