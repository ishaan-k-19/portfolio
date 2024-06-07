import {React, useRef, useEffect} from 'react';
import profilepic from '../images/profile.jpg';
import { motion, useInView } from "framer-motion"
import { createRoot } from "react-dom/client";


const AboutMe = () => {
    function PicAnimate({ children }) {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });
      
        return (
          <section ref={ref}>
            <div className='profimg lg:w-80 md:w-72 hidden md:block rounded-md'
              style={{
                transform: isInView ? "none" : "translateX(20px) translateY(20px)",
                boxShadow: isInView ? "15px 15px 0px #25221e, 15px 15px 0 7px #f25b34" : 'none',
                transition: "all 1s"
              }}
            >
              {children}
            </div>
          </section>
        );
      }


    function Animate({ children }) {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });
      
        return (
          <section ref={ref}>
            <div className='flex flex-col lg:mx-10 lg:px-5 lg:w-4/5 w-full hide'
              style={{
                transform: isInView ? 'none' : "translateX(200px)",
                opacity: isInView ? 1 : 0,
                filter: isInView?"blur(0px)":"blur(2px)",
                transition: "all 1s"
              }}
            >
              {children}
            </div>
          </section>
        );
      }

  return (
    <>
    <div id='about'>
        <div className="about flex flex-col lg:flex-row justify-start items-start md:gap-20 gap-10 my-10">
            <PicAnimate>
            <img className="imgh rounded-md" src={profilepic} alt=""/>
            </PicAnimate>
            <Animate>
                <span className="text-2xl font-bold my-3">About Me</span>
                <span>I'm <span className="text-orange-600 font-semibold">Ishaan Kashyap</span>, studying Computer Science at the University of Winnipeg, and I'll be graduating in 2025. I love building things on the internet, from how they look to how they work. I enjoy learning new stuff about technology and am always looking for chances to work with others on cool projects. Let's team up and create something awesome!</span>
                <div className="button">
                    <motion.button className="resume md:my-10 my-4 bg-orange-600 px-6 py-2 rounded-md" whileHover={{scale:1.05}} whileTap={{scale:1.04}}>Resume</motion.button>
                </div>
            </Animate>
        </div>
    </div>
    </>
  )
}

export default AboutMe
