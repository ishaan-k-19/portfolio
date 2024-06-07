import AboutMe from './components/AboutMe'
import Navbar from './components/Navbar'
import './App.css'
import Skills from './components/Skills'
import Project from './components/Project'
import { motion } from "framer-motion"
import PrevProjects from './components/PrevProjects'
import Home from './components/Home'
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import Contact from './components/Contact'

function App() {
  const router = createBrowserRouter([
    {
      path: "/prevprojects",
      element: <><Navbar/><PrevProjects/></>
    },
    {
      path: "/contact",
      element: <><Navbar/><Contact/></>
    },
    {
      path: "/",
      element: <><Navbar/><Home/></>
    }
  ])

  return (
    <>
    <div className="mainpage bg-[#25221e] md:w-4/5 w-[93%] md:p-16 py-5 px-10 my-20 mr-1 rounded-lg md:text-xl text-base relative shadow-md overflow-hidden 2xl:min-h-[100vh]">
      
      <RouterProvider router={router}/>
    </div>
    </>
  )
    
}

export default App
