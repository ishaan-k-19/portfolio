import {React, useRef, useEffect} from 'react'
import { motion, useInView } from "framer-motion"

const Project = () => {
    function PicAnimate({ children }) {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });
      
        return (
          <section ref={ref}>
            <div className='projimg my-10 rounded-md'
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
    <div id='projects'>
      <div className="proj w-full flex flex-col lg:gap-28 gap-12 my-10">
            <div className="one flex items-center lg:flex-row flex-col ">
                <PicAnimate>
                    <img className="imgh rounded-md w-[950px]" src="/images/getmeacoffee.png" alt=""/>
                </PicAnimate>
                <Animate>
                    <div className="projheading font-bold text-2xl flex flex-col my-4">
                        <span className="text-orange-600 py-1">Project 1</span>
                        <span>Get Me A Coffee</span>
                    </div>
                    <span>GetMeACoffee is a platform for creators to raise funds from their fans. Built with Next.js, MongoDB, and TailwindCSS, it allows creators to create profiles and receive donations securely. NextAuth ensures robust authentication, providing a safe and seamless user experience.</span>
                    <ul className="flex gap-2 flex-wrap mt-5">
                    <li className="bg-[#2d2b27] rounded-md text-sm p-2 shadow-inner border border-neutral-600 text-neutral-400">Nextjs</li>
                    <li className="bg-[#2d2b27] rounded-md text-sm p-2 border border-neutral-600 text-neutral-400">MongoDB</li>
                    <li className="bg-[#2d2b27] rounded-md text-sm p-2 border border-neutral-600 text-neutral-400">TailWindCSS</li>
                    <li className="bg-[#2d2b27] rounded-md text-sm p-2 border border-neutral-600 text-neutral-400">NextAuth</li>
                </ul>
                </Animate>
            </div>
            <div className="two flex items-center lg:flex-row flex-col-reverse">
            <Animate>
                    <div className="projheading font-bold text-2xl flex flex-col my-4">
                        <span className="text-orange-600 py-1">Project 2</span>
                        <span>NoteSky</span>
                    </div>
                    <span className='text-lg'>NoteSky is a cloud-based notes-taking app developed with the MERN stack (React.js, Node.js, Express.js, and MongoDB). It enables users to securely create, save, and access their notes from any device. The app features user authentication, responsive design, and robust data encryption.</span>
                    <ul className="flex gap-2 flex-wrap mt-5">
                    <li className="bg-[#2d2b27] rounded-md text-sm p-2 shadow-inner border border-neutral-600 text-neutral-400">Rectjs</li>
                    <li className="bg-[#2d2b27] rounded-md text-sm p-2 border border-neutral-600 text-neutral-400">Expressjs</li>
                    <li className="bg-[#2d2b27] rounded-md text-sm p-2 border border-neutral-600 text-neutral-400">Nodejs</li>
                    <li className="bg-[#2d2b27] rounded-md text-sm p-2 border border-neutral-600 text-neutral-400">MongoDB</li>
                    <li className="bg-[#2d2b27] rounded-md text-sm p-2 border border-neutral-600 text-neutral-400">BootStrap</li>
                </ul>
                </Animate>
                <PicAnimate>
                    <img className="imgh2 rounded-md hidden lg:block w-[950px]" src="/images/NoteSky.png" alt=""/>
                    <img className="img imgh rounded-md lg:hidden w-[950px]" src="/images/NoteSky.png" alt=""/>
                </PicAnimate>
            </div>
            <div className="three flex items-center lg:flex-row flex-col">
                <PicAnimate>
                    <img className="imgh rounded-md w-[950px]" src="/images/SecureKey.png" alt=""/>
                </PicAnimate>
                <Animate>
                    <div className="projheading font-bold text-2xl flex flex-col my-4">
                        <span className="text-orange-600 py-1">Project 3</span>
                        <span>SecureKey</span>
                    </div>
                    <span>SecureKey is a password manager app that lets users save their passwords, usernames, and site URLs securely. Built with ReactJS and TailwindCSS, it stores all data locally in the user's browser, ensuring privacy and security without external storage.</span>
                    <ul className="flex gap-2 flex-wrap mt-5">
                    <li className="bg-[#2d2b27] rounded-md text-sm p-2 shadow-inner border border-neutral-600 text-neutral-400">Rectjs</li>
                    <li className="bg-[#2d2b27] rounded-md text-sm p-2 border border-neutral-600 text-neutral-400">JavaScript</li>
                    <li className="bg-[#2d2b27] rounded-md text-sm p-2 border border-neutral-600 text-neutral-400">TailWindCSS</li>
                </ul>
                </Animate>
            </div>
        </div>
    </div>
    </>
  )
}

export default Project
