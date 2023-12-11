import React from 'react'
import Title from './Title'
import SubTitle from './SubTitle'
import { TiHtml5 } from "react-icons/ti";
import { FaCss3 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiJsonwebtokens } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMui } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";

const Skills = () => {
    return (
        <div className='bg-[#343a40] min-h-screen relative pb-10'>
            <Title Children={'MY SKILLS'} />
            <div className='flex justify-center items-center pt-20 z-20 relative'>
                <SubTitle Children={'The Technology I am Know'} />
            </div>

            <div className='pt-10 md:px-5 text-center'>
                <div className='text-base md:text-lg text-white w-[80%] mx-auto mb-10'>I'm Versatile MERN Stack Developer | Proficient in HTML, CSS, Tailwind CSS, React, and JavaScript for Frontend | Comfortable with Backend Technologies: Node.js, Express.js, MongoDB | Experienced in Firebase for Deployment | Eager to Contribute and Learn in a Dynamic Development Environment</div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-16 px-10">
                    <div className="text-start space-y-3">
                        <h1 className='text-white font-bold text-2xl'>Frontend</h1>
                        <div>
                            <div className='flex justify-between'>
                                <TiHtml5 className='text-2xl text-yellow-600' />
                                <h1 className='text-white'>70%</h1>
                            </div>
                            <progress className="progress progress-success bg-yellow-600 w-full" color='#20c997' value="70" max="100"></progress>
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <FaCss3 className='text-2xl text-blue-500' />
                                <h1 className='text-white'>65%</h1>
                            </div>
                            <progress className="progress progress-success bg-blue-500 w-full" color='#20c997' value="65" max="100"></progress>
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <SiTailwindcss className='text-2xl text-[#3abdf8]' />
                                <h1 className='text-white'>70%</h1>
                            </div>
                            <progress className="progress progress-success bg-[#3abdf8] w-full" color='#3abdf8' value="70" max="100"></progress>
                        </div><div>
                            <div className='flex justify-between'>
                                <IoLogoJavascript className='text-2xl text-yellow-500' />
                                <h1 className='text-white'>70%</h1>
                            </div>
                            <progress className="progress progress-success bg-yellow-500 w-full" color='#20c997' value="70" max="100"></progress>
                        </div><div>
                            <div className='flex justify-between'>
                                <FaReact className='text-2xl text-[#3abdf8]' />
                                <h1 className='text-white'>80%</h1>
                            </div>
                            <progress className="progress progress-success bg-[#3abdf8] w-full" color='#20c997' value="80" max="100"></progress>
                        </div>
                    </div>
                    <div className="">
                        <div className="text-start space-y-3">
                            <h1 className='text-white font-bold text-2xl'>Backend</h1>
                            <div>
                                <div className='flex justify-between'>
                                    <SiExpress className='text-2xl text-[#ffff]' />
                                    <h1 className='text-white'>70%</h1>
                                </div>
                                <progress className="progress progress-success bg-white w-full" color='#20c997' value="70" max="100"></progress>
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <IoLogoNodejs className='text-2xl text-[#58a846]' />
                                    <h1 className='text-white'>65%</h1>
                                </div>
                                <progress className="progress progress-success bg-white w-full" color='#20c997' value="65" max="100"></progress>
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <DiMongodb className='text-2xl text-green-500' />
                                    <h1 className='text-white'>70%</h1>
                                </div>
                                <progress className="progress progress-success bg-white w-full" color='#20c997' value="70" max="100"></progress>
                            </div><div>
                                <div className='flex justify-between'>
                                    <SiJsonwebtokens className='text-2xl text-[#dc3bfe]' />
                                    <h1 className='text-white'>70%</h1>
                                </div>
                                <progress className="progress progress-success bg-white w-full" color='#20c997' value="70" max="100"></progress>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="text-start space-y-3">
                            <h1 className='text-white font-bold text-2xl'>Web Tools</h1>
                            <div>
                                <div className='flex justify-between'>
                                    <IoLogoFirebase className='text-2xl text-[#ffcb2b]' />
                                    <h1 className='text-white'>80%</h1>
                                </div>
                                <progress className="progress progress-success bg-white w-full" color='#ffcb2b' value="80" max="100"></progress>
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <SiMui className='text-2xl text-[#3abdf8]' />
                                    <h1 className='text-white'>80%</h1>
                                </div>
                                <progress className="progress progress-success bg-white w-full" color='#3abdf8' value="80" max="100"></progress>
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <IoLogoVercel className='text-2xl text-[#000]' />
                                    <h1 className='text-white'>70%</h1>
                                </div>
                                <progress className="progress progress-success bg-white w-full" color='#000' value="70" max="100"></progress>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills