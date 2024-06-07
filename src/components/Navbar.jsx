import React from "react";
import { color, motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="flex w-full bg-[#25221e] flex-row justify-end gap-10 h-full items-center md:px-10 md:py-20 py-5 md:p-0 top-0 left-0">
        <div className="flex flex-row my-0 mx-0 gap-8 items-center">
          <motion.li
            className="cursor-pointer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 1.06 }}
          >
            <Link to="/">
              <span className="md:block hidden">Home</span>
              <div className="md:hidden block mt-1">
              <lord-icon
                src="https://cdn.lordicon.com/wmwqvixz.json"
                trigger="in"
                style={{ filter: "invert(1)", width: "30px" }}
                ></lord-icon>
                </div>
            </Link>
          </motion.li>
          <motion.li
            className="cursor-pointer hidden md:block"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 1.06 }}
          >
            <button href="#skills" onClick={()=>{
              const element = document .getElementById('skills')
              element?.scrollIntoView({
                behavior: 'smooth',
                block:'center'
              })
            }}>Skills</button>
          </motion.li>
          <motion.li
            className="cursor-pointer hidden md:block"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 1.06 }}
          >
            <button href="#projects" onClick={()=>{
              const element = document .getElementById('projects')
              element?.scrollIntoView({
                behavior: 'smooth',
              })
            }}>Experience</button>
          </motion.li>
          <li>
            <div className="button">
              <Link to="/contact">
              <motion.button
                className="cont bg-orange-600 md:px-6 md:py-2 px-4 py-1 rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.04 }}
                >
                <span className="md:block hidden">Contact</span>
                <div className="md:hidden block mt-1">
                  <lord-icon
                    src="https://cdn.lordicon.com/srsgifqc.json"
                    trigger="in"
                    style={{ filter: "invert(1)", width: "30px" }}
                    ></lord-icon>
                </div>
              </motion.button>
              </Link>
            </div>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
