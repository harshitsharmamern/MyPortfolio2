import React from 'react'
import Hero from './Components/Hero'
import AboutMe from './Components/AboutMe'
import Skills from './Components/Skills'
import Resume from './Components/Resume'

const App = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-start min-h-screen'>
      <div className="flex lg:h-screen flex-col justify-between border-e lg:fixed bg-[#111418]">
        <div className="px-4 py-3">
          <span className="grid w-72 place-content-center rounded-lg text-xs text-gray-600">
            <div className='mt-1'>
              <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                className='h-52 w-52 rounded-full bg-gray-500 p-2' alt="" />
              <h1 className='text-center text-2xl font-bold mt-2 text-white'>Shimul Zahan</h1>
            </div>
          </span>

          <ul className="mt-4 space-y-1 text-center">
            <li>
              <div className="block rounded-lg font-serif px-4 py-2 text-lg font-medium text-white">
                Home
              </div>
            </li>
            <li>
              <div className="block rounded-lg font-serif px-4 py-2 text-lg font-medium text-white">
                About Me
              </div>
            </li>
            <li>
              <div className="block rounded-lg font-serif px-4 py-2 text-lg font-medium text-white">
                What I Do
              </div>
            </li>
            <li>
              <div className="block rounded-lg font-serif px-4 py-2 text-lg font-medium text-white">
                Resume
              </div>
            </li>
            <li>
              <div className="block rounded-lg font-serif px-4 py-2 text-lg font-medium text-white">
                Portfolio
              </div>
            </li>
            <li>
              <div className="block rounded-lg font-serif px-4 py-2 text-lg font-medium text-white">
                Blogs
              </div>
            </li>
            <li>
              <div className="block rounded-lg font-serif  px-4 py-2 text-lg font-medium text-white">
                Contact
              </div>
            </li>
            <li>
              <div className="block rounded-lg font-serif px-4 py-2 text-lg font-medium text-white">
                Testimonial & Certification
              </div>
            </li>
          </ul>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t">
          <a href="#" className="flex items-center gap-2 px-4 py-2">
            <h1 className='text-center mx-auto text-white'>Hello</h1>
          </a>
        </div>
      </div>
      <div className='w-full lg:ml-80'>
        <Hero />
        <AboutMe />
        <Skills />
        <Resume />
      </div>
    </div>
  )
}

export default App