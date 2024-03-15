import React from 'react'
import Hero from './Components/Hero'
import AboutMe from './Components/AboutMe'
import Skills from './Components/Skills'
import Resume from './Components/Resume'
import Portfolio from './Components/Portfolio'
import Contacts from './Components/Contacts'
import Footer from './Components/Footer'
import { MdHome } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { MdInsertInvitation } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { FaBlog, FaDribbbleSquare, FaFacebookSquare, FaGithub, FaGoogle, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import harshit_img from './assets/harshitimg.jpeg'


const App = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-start min-h-screen'>
      <div className="hidden lg:block lg:h-screen flex-col justify-between lg:fixed bg-[#111418]">
        <div className="px-4 py-3">
          <span className="grid w-72 place-content-center rounded-lg text-xs text-gray-600">
            <div className='mt-1'>
              <img src={harshit_img}
                className='h-52 w-52 rounded-full bg-gray-500 p-2' alt="img" />
              <h1 className='text-center text-2xl font-bold mt-2 text-white'>Harshit Sharma 👻</h1>
            </div>
          </span>

          <ul className="mt-4 space-y-1 text-center">
            <li>
              <a href='#' className="block rounded-lg font-serif px-4 py-2 text-lg font-medium text-white">
                Home
              </a>
            </li>
            <li>
              <a href='#about-me' className="block rounded-lg font-serif px-4 py-2 text-lg font-medium text-white">
                About Me
              </a>
            </li>
            <li>
              <a href='#resume' className="block rounded-lg font-serif px-4 py-2 text-lg font-medium text-white">
                Resume
              </a>
            </li>
            <li>
              <a href="#skills" className="block rounded-lg font-serif px-4 py-2 text-lg font-medium text-white">
                Portfolio
              </a>
            </li>
            <li>
              <a href='#contact' className="block rounded-lg font-serif  px-4 py-2 text-lg font-medium text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="fixed w-72 inset-x-0 bottom-4">
          <div className='flex justify-center items-center md:text-xl text-[#b7b5b5] space-x-3'>
          <a target='_blank' href="https://github.com/harshitsharmamern">

            {/* <a target='_blank' href="https://github.com/Shimul-Zahan"> */}
              <FaGithub />
            </a>
            <a target='_blank' href="https://www.linkedin.com/in/harshit-sharma-7b039b1aa/">

            {/* <a target='_blank' href="https://www.linkedin.com/in/shimul-zahan-b5035427b/"> */}
              <FaLinkedin />
            </a>
            <a target='_blank' href="https://www.instagram.com/harrrshit_sharma/">

            <FaInstagramSquare />

              {/* <FaFacebookSquare /> */}
            </a>
            <FaDribbbleSquare />
            <FaGoogle />
          </div>
        </div>
      </div>
      <div className='w-full lg:ml-80'>
        <Hero />
        <AboutMe />
        <Skills />
        <Resume />
        <Portfolio />
        <Contacts />
        <Footer />
      </div>
      <div className='lg:hidden flex justify-center items-center gap-7 md:text-2xl bg-[#20c997] fixed shadow-xl bottom-3 px-10 py-5 rounded-full left-1/2 translate-x-[-50%] text-black'>
        <a className='cursor-pointer' href="#">
          <MdHome className='cursor-pointer' />
        </a>
        <a className='cursor-pointer' href="#about-me">
          <GrUserManager />
        </a>
        <a className='cursor-pointer' href="#skills">
          <GiSkills />
        </a>
        <a className='cursor-pointer' href="#resume">
          <MdInsertInvitation />
        </a>
        <a className='cursor-pointer' href="#contact">
          <AiOutlineMessage />
        </a>
      </div>
    </div>
  )
}

export default App